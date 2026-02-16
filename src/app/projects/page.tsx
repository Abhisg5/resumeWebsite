"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  updatedAt: string;
  tags: string[];
  primaryLanguage: string | null;
};

const TAG_STYLES = [
  "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "bg-green-500/20 text-green-300 border-green-500/30",
  "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
];

const LANGUAGE_ICONS: Record<string, string> = {
  JavaScript: "🟨",
  TypeScript: "🔷",
  Python: "🐍",
  Java: "☕",
  "C++": "⚙️",
  C: "🧩",
  Rust: "🦀",
  Go: "🐹",
  HTML: "🌐",
  CSS: "🎨",
  Shell: "💻",
};

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const CLIENT_RETRY_ATTEMPTS = 3;
    const CLIENT_RETRY_DELAY_MS = 1200;

    async function sleep(ms: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    async function fetchProjects() {
      try {
        for (let attempt = 0; attempt < CLIENT_RETRY_ATTEMPTS; attempt += 1) {
          const response = await fetch("/api/github-projects", {
            cache: "no-store",
          });

          if (response.ok) {
            const data: { projects: Project[] } = await response.json();
            setProjects(data.projects);
            setError(null);
            return;
          }

          if (attempt < CLIENT_RETRY_ATTEMPTS - 1) {
            await sleep(CLIENT_RETRY_DELAY_MS * (attempt + 1));
          }
        }

        throw new Error("Failed to fetch projects from GitHub.");
      } catch (fetchError) {
        console.error(fetchError);
        setError("Could not load projects right now.");
      } finally {
        setLoading(false);
      }
    }

    void fetchProjects();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24 max-w-6xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Projects
      </motion.h1>

      {error ? <p className="text-red-300 text-center">{error}</p> : null}

      {loading ? (
        <p className="text-white/70 text-center">Loading projects...</p>
      ) : null}

      {!loading && !error ? (
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((project) => {
            const icon =
              project.primaryLanguage && LANGUAGE_ICONS[project.primaryLanguage]
                ? LANGUAGE_ICONS[project.primaryLanguage]
                : "📦";

            return (
              <motion.a
                key={project.id}
                href={project.htmlUrl}
                target="_blank"
                rel="noopener"
                className="professional-card p-6 hover:scale-105 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                  },
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${TAG_STYLES[index % TAG_STYLES.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Last updated: {formatDate(project.updatedAt)}</span>
                  <span className="group-hover:text-blue-300 transition-colors">
                    View Project →
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      ) : null}
    </motion.main>
  );
}
