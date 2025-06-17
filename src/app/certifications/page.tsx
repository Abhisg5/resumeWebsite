"use client";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Certifications</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.14 } },
        }}
      >
        {/* AWS Machine Learning Specialty */}
        <motion.div
          className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 flex flex-col items-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <span className="text-3xl mb-2">🧠</span>
          <h2 className="text-xl font-semibold mb-1">AWS Certified Machine Learning Specialty</h2>
          <div className="text-blue-400 font-medium mb-1">Amazon Web Services</div>
          <div className="text-white/70 text-sm mb-2">Issued: 2023</div>
        </motion.div>
        {/* AWS Cloud Practitioner */}
        <motion.div
          className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 flex flex-col items-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <span className="text-3xl mb-2">☁️</span>
          <h2 className="text-xl font-semibold mb-1">AWS Certified Cloud Practitioner</h2>
          <div className="text-blue-400 font-medium mb-1">Amazon Web Services</div>
          <div className="text-white/70 text-sm mb-2">Issued: 2019</div>
        </motion.div>
        {/* Stanford ML Certificate */}
        <motion.div
          className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 flex flex-col items-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <span className="text-3xl mb-2">🎓</span>
          <h2 className="text-xl font-semibold mb-1">Machine Learning Certificate</h2>
          <div className="text-green-400 font-medium mb-1">Stanford University</div>
          <div className="text-white/70 text-sm mb-2">Issued: 2020</div>
        </motion.div>
        {/* Google Associate Cloud Engineer */}
        <motion.div
          className="bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 flex flex-col items-start"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <span className="text-3xl mb-2">💻</span>
          <h2 className="text-xl font-semibold mb-1">Google Associate Cloud Engineer</h2>
          <div className="text-cyan-400 font-medium mb-1">Google Cloud</div>
          <div className="text-white/70 text-sm mb-2">Issued: 2021</div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
} 