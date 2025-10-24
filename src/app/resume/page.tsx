"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the page is properly loaded
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24 max-w-4xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Resume
      </motion.h1>

      <motion.div
        className="professional-card p-8 w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
            📄
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Professional Resume
          </h2>
          <p className="text-white/80 leading-relaxed">
            You can view or download my resume in PDF format below. Feel free to
            reach out if you have any questions!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/viewer?url=https://ilithya-clone.vercel.app/abhinav_gaddipati.pdf&embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 px-6 py-3"
          >
            <span>👁️</span> View Resume
          </a>
          <a
            href="/abhinav_gaddipati.pdf"
            download="Abhinav_Gaddipati_Resume.pdf"
            className="btn-secondary flex items-center justify-center gap-2 px-6 py-3"
          >
            <span>📥</span> Download Resume
          </a>
        </div>

        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-blue-300 text-sm font-medium">
            💡 Tip: The resume includes detailed information about my
            experience, skills, and achievements in data engineering and machine
            learning.
          </p>
        </div>
      </motion.div>
    </motion.main>
  );
}
