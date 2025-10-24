"use client";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24 max-w-6xl mx-auto"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-gradient"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Certifications
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* AWS Machine Learning Specialty */}
        <motion.div
          className="professional-card p-6 hover:scale-105 transition-all duration-300 group"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-2xl">
              🧠
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                AWS Certified Machine Learning Specialty
              </h2>
              <div className="text-orange-400 font-semibold mb-1">
                Amazon Web Services
              </div>
              <div className="text-white/70 text-sm">Issued: 2023</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <p className="text-orange-300 text-sm font-medium">
              Advanced certification in machine learning on AWS platform
            </p>
          </div>
        </motion.div>

        {/* AWS Cloud Practitioner */}
        <motion.div
          className="professional-card p-6 hover:scale-105 transition-all duration-300 group"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl">
              ☁️
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                AWS Certified Cloud Practitioner
              </h2>
              <div className="text-blue-400 font-semibold mb-1">
                Amazon Web Services
              </div>
              <div className="text-white/70 text-sm">Issued: 2019</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-300 text-sm font-medium">
              Foundational understanding of AWS Cloud concepts
            </p>
          </div>
        </motion.div>

        {/* Stanford ML Certificate */}
        <motion.div
          className="professional-card p-6 hover:scale-105 transition-all duration-300 group"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl">
              🎓
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                Machine Learning Certificate
              </h2>
              <div className="text-green-400 font-semibold mb-1">
                Stanford University
              </div>
              <div className="text-white/70 text-sm">Issued: 2020</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-300 text-sm font-medium">
              Comprehensive machine learning course from Stanford
            </p>
          </div>
        </motion.div>

        {/* Google Associate Cloud Engineer */}
        <motion.div
          className="professional-card p-6 hover:scale-105 transition-all duration-300 group"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            },
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
              💻
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Google Associate Cloud Engineer
              </h2>
              <div className="text-cyan-400 font-semibold mb-1">
                Google Cloud
              </div>
              <div className="text-white/70 text-sm">Issued: 2021</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
            <p className="text-cyan-300 text-sm font-medium">
              Google Cloud Platform deployment and operations expertise
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
