"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeLayout from "./ThemeLayout";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCertificate, FaEnvelope, FaFileDownload } from "react-icons/fa";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress" 
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
        
        {/* Animated backgrounds for all pages */}
        <AuroraWaves />
        <AnimatedBackground />
        
        {/* Floating vertical nav with scroll effect */}
        <nav className={`fixed top-1/2 -translate-y-1/2 right-8 z-[100] pointer-events-auto flex flex-col gap-4 rounded-2xl shadow-2xl px-3 py-4 border border-white/10 transition-all duration-300 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-lg" 
            : "bg-black/60 backdrop-blur-md"
        }`}>
          <Link href="/" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaHome size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Home</span>
          </Link>
          <Link href="/about" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaUser size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">About</span>
          </Link>
          <Link href="/work" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaBriefcase size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Work</span>
          </Link>
          <Link href="/projects" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaProjectDiagram size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Projects</span>
          </Link>
          <Link href="/certifications" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaCertificate size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Certs</span>
          </Link>
          <Link href="/contact" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaEnvelope size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Contact</span>
          </Link>
          <Link href="/resume" className="group flex flex-col items-center gap-1 text-white hover:text-blue-400 focus:text-blue-400 transition cursor-pointer outline-none">
            <FaFileDownload size={22} className="transition-transform group-hover:scale-125 group-focus:scale-125 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-medium transition-transform group-hover:scale-110 group-focus:scale-110 group-hover:drop-shadow-[0_0_8px_#38bdf8] group-focus:drop-shadow-[0_0_8px_#38bdf8]">Resume</span>
          </Link>
        </nav>
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
