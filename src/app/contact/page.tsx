"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "gaddipatia@gmail.com",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center px-4 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <a href="mailto:gaddipatia@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 focus:bg-blue-700 transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none">
          <span>📧</span> Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-600 focus:bg-cyan-700 transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none">
          <span>🔗</span> LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-3 rounded-full bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 focus:bg-purple-700 transition-all duration-200 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none">
          <span>💻</span> GitHub
        </a>
      </div>
      <form onSubmit={handleSubmit} className="bg-white/10 rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col gap-4 border border-white/20">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-800 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{boxShadow: "0 0 24px 4px #38bdf8, 0 0 48px 8px #22d3ee"}}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-green-400 font-semibold">Message Sent Successfully!</h3>
                  <p className="text-green-300/80 text-sm">I&apos;ll get back to you as soon as possible.</p>
                </div>
              </div>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-red-400 font-semibold">Failed to Send Message</h3>
                  <p className="text-red-300/80 text-sm">Please try again or contact me directly via email.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.main>
  );
} 