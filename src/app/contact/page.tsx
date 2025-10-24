"use client";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24 max-w-4xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-gradient"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="mb-12 text-center text-lg text-white/80 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Have a question or want to work together? Feel free to reach out!
        I&apos;m always interested in discussing new opportunities and exciting
        projects.
      </motion.p>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ContactForm />
      </motion.div>
    </motion.main>
  );
}
