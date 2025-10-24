"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeLayout from "./ThemeLayout";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
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

        {/* Professional floating navigation */}
        <nav
          className={`fixed top-1/2 -translate-y-1/2 right-4 md:right-8 z-[100] pointer-events-auto flex flex-col gap-1 rounded-2xl shadow-lg px-2 py-2 border transition-all duration-200 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-gray-200/50 dark:bg-black/90 dark:border-white/20"
              : "bg-white/80 backdrop-blur-lg border-gray-200/30 dark:bg-black/70 dark:border-white/10"
          }`}
        >
          <Link
            href="/"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaHome
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Home
            </span>
          </Link>
          <Link
            href="/about"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaUser
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              About
            </span>
          </Link>
          <Link
            href="/work"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaBriefcase
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Work
            </span>
          </Link>
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaProjectDiagram
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Projects
            </span>
          </Link>
          <Link
            href="/certifications"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaCertificate
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Certs
            </span>
          </Link>
          <Link
            href="/contact"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaEnvelope
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Contact
            </span>
          </Link>
          <Link
            href="/resume"
            className="group flex flex-col items-center gap-1 text-gray-700 hover:text-blue-600 focus:text-blue-600 dark:text-white dark:hover:text-blue-400 dark:focus:text-blue-400 transition-all duration-200 cursor-pointer outline-none p-2 rounded-lg hover:bg-blue-50 focus:bg-blue-50 dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <FaFileDownload
              size={18}
              className="transition-all duration-200 group-hover:scale-110 group-focus:scale-110"
            />
            <span className="text-xs font-medium transition-all duration-200 group-hover:scale-105 group-focus:scale-105 hidden sm:block">
              Resume
            </span>
          </Link>
        </nav>
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
