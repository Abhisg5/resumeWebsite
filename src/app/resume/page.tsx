"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Resume() {
  const router = useRouter();
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
      className="flex flex-col items-center justify-center px-4 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Resume</h1>
      <div className="flex flex-col items-center gap-8">
        <p className="text-lg text-center max-w-2xl">
          You can view or download my resume in PDF format below. Feel free to reach out if you have any questions!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://docs.google.com/viewer?url=https://ilithya-clone.vercel.app/abhinav_gaddipati.pdf&embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 focus:bg-blue-700 transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none"
          >
            <span>👁️</span> View Resume
          </a>
          <a
            href="/abhinav_gaddipati.pdf"
            download="Abhinav_Gaddipati_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 focus:bg-green-700 transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none"
          >
            <span>📥</span> Download Resume
          </a>
        </div>

       
      </div>
    </motion.main>
  );
} 