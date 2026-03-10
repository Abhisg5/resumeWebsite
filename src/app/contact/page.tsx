"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactPage() {
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
          Get in Touch
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact
        </h1>
        <p className="text-text-secondary">
          Interested in data engineering, ML solutions, or technical leadership?
          I&apos;d be happy to discuss opportunities and projects.
        </p>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </motion.main>
  );
}
