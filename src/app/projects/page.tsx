"use client";
import { motion } from "framer-motion";

export default function Projects() {
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
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* CodeGen-LLM */}
        <motion.a
          href="https://github.com/Abhisg5/CodeGen-LLM"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🤖
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                CodeGen-LLM
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Build a Code Generation LLM from scratch using modern deep
                learning techniques.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
              Python
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
              Machine Learning
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
              LLM
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Nov 20, 2024</span>
            <span className="group-hover:text-blue-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>
        {/* assemblingShells */}
        <motion.a
          href="https://github.com/Abhisg5/assemblingShells"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ⚙️
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                assemblingShells
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Build an advanced shell in ARM64 assembly for macOS with modern
                system programming techniques.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-500/30">
              ARM64 Assembly
            </span>
            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-medium border border-pink-500/30">
              macOS
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Nov 20, 2024</span>
            <span className="group-hover:text-green-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>

        {/* snakeAPI */}
        <motion.a
          href="https://github.com/Abhisg5/snakeAPI"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🐍
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                snakeAPI
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                API for Snake Retro game with modern C++ implementation and game
                logic.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
              C++
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
              Game
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Nov 20, 2024</span>
            <span className="group-hover:text-yellow-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>

        {/* resumeWebsite */}
        <motion.a
          href="https://github.com/Abhisg5/resumeWebsite"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🌐
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                resumeWebsite
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Animated portfolio website using React, FastAPI, and MongoDB
                with modern design principles.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
              JavaScript
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
              React
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
              FastAPI
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
              MongoDB
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Nov 20, 2024</span>
            <span className="group-hover:text-pink-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>

        {/* QuickFit */}
        <motion.a
          href="https://github.com/Abhisg5/QuickFit"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              👕
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                QuickFit
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Android app that provides intelligent recommendations on
                clothing items to wear based on weather and preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
              Java
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
              Android
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Dec 12, 2019</span>
            <span className="group-hover:text-orange-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>

        {/* CSSI-Final */}
        <motion.a
          href="https://github.com/Abhisg5/CSSI-Final"
          target="_blank"
          rel="noopener"
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
            <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🎓
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                CSSI-Final
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Final project for Google CSSI program showcasing web development
                skills with HTML and modern web technologies.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
              HTML
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
              Web
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Last updated: Jul 29, 2019</span>
            <span className="group-hover:text-lime-300 transition-colors">
              View Project →
            </span>
          </div>
        </motion.a>
      </motion.div>
    </motion.main>
  );
}
