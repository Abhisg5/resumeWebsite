"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeLayout from "./ThemeLayout";
import AuroraWaves from "./AuroraWaves";
import AnimatedBackground from "./AnimatedBackground";
import Link from "next/link";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollPosition / scrollableHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* Animated backgrounds for all pages */}
        <AuroraWaves />
        <AnimatedBackground />

        {/* Professional top navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 dark:bg-black/95 dark:border-white/20 shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <Link
                href="/"
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Abhinav Gaddipati
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Work
                </Link>
                <Link
                  href="/projects"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="/certifications"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Certifications
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/resume"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Resume
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 dark:bg-black/95 dark:border-white/20 shadow-lg">
              <div className="px-4 py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="/projects"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/certifications"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/resume"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-white dark:hover:text-blue-400 dark:hover:bg-white/10 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </div>
          )}
        </nav>
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
