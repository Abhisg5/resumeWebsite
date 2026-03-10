"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="px-4 pt-32 pb-24 max-w-2xl mx-auto animated-bg"
    >
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Document
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Resume
        </h1>
        <p className="text-text-secondary">
          View or download my full resume with experience, skills, and
          certifications.
        </p>
      </motion.div>

      <motion.div
        className="professional-card p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mb-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-3">
            Abhinav Gaddipati
          </h2>
          <p className="text-text-secondary text-sm">
            Senior Data Engineer • AWS Certified • 4+ Years
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/viewer?url=https://ilithya-clone.vercel.app/abhinav_gaddipati.pdf&embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            View Resume
          </a>
          <a
            href="/abhinav_gaddipati.pdf"
            download="Abhinav_Gaddipati_Resume.pdf"
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </motion.main>
  );
}
