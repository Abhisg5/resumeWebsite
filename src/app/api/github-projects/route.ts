import { NextResponse } from "next/server";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  language: string | null;
  topics?: string[];
  languages_url: string;
  fork: boolean;
  archived: boolean;
};

type Project = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  updatedAt: string;
  tags: string[];
  primaryLanguage: string | null;
};

const DEFAULT_USERNAME = "Abhisg5";
const MAX_PROJECTS = 12;
const MAX_TAGS_PER_PROJECT = 5;
const FETCH_REVALIDATE_SECONDS = 30;
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 700;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchWithRetry(
  input: string,
  init: RequestInit & { next?: { revalidate?: number } },
): Promise<Response> {
  let lastError: unknown = null;

  for (let attempt = 0; attempt < RETRY_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(input, init);
      if (response.ok) {
        return response;
      }

      if (response.status === 429 || response.status >= 500) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }

      return response;
    } catch (error) {
      lastError = error;
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }

  throw lastError ?? new Error("Network request failed");
}

function normalizeTag(tag: string): string {
  return tag
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function dedupeTags(tags: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const deduped: string[] = [];

  for (const tag of tags) {
    if (!tag) {
      continue;
    }

    const normalized = normalizeTag(tag);
    const key = normalized.toLowerCase();

    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(normalized);
    }
  }

  return deduped;
}

async function fetchRepoLanguages(
  languagesUrl: string,
  headers: HeadersInit,
): Promise<string[]> {
  const response = await fetchWithRetry(languagesUrl, {
    headers,
    next: { revalidate: FETCH_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    return [];
  }

  const languageStats = (await response.json()) as Record<string, number>;
  return Object.keys(languageStats);
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME ?? DEFAULT_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const reposResponse = await fetchWithRetry(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers,
        next: { revalidate: FETCH_REVALIDATE_SECONDS },
      },
    );

    if (!reposResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories from GitHub." },
        { status: reposResponse.status },
      );
    }

    const repos = (await reposResponse.json()) as GitHubRepo[];

    const candidateRepos = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .slice(0, MAX_PROJECTS);

    const projects: Project[] = await Promise.all(
      candidateRepos.map(async (repo) => {
        const detectedLanguages = await fetchRepoLanguages(
          repo.languages_url,
          headers,
        );

        const tags = dedupeTags([
          repo.language,
          ...detectedLanguages,
          ...(repo.topics ?? []),
        ]).slice(0, MAX_TAGS_PER_PROJECT);

        return {
          id: repo.id,
          name: repo.name,
          htmlUrl: repo.html_url,
          description:
            repo.description?.trim() ||
            "No description provided yet on GitHub.",
          updatedAt: repo.updated_at,
          tags,
          primaryLanguage: repo.language,
        };
      }),
    );

    return NextResponse.json(
      { projects },
      {
        status: 200,
        headers: {
          "Cache-Control": `public, s-maxage=${FETCH_REVALIDATE_SECONDS}, stale-while-revalidate=59`,
        },
      },
    );
  } catch (error) {
    console.error("GitHub projects route error:", error);
    return NextResponse.json(
      { error: "Unexpected error while loading GitHub projects." },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  }
}
