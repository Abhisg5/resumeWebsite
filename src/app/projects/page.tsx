"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-2 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h1>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {/* CodeGen-LLM */}
        <motion.a
          href="https://github.com/Abhisg5/CodeGen-LLM"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-blue-300 break-words">CodeGen-LLM</h2>
          <p className="mb-2 text-white/90">Build a Code Generation LLM from scratch.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-purple-500/80 text-white px-3 py-1 rounded-full text-xs">Python</span>
            <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs">Machine Learning</span>
            <span className="bg-cyan-500/80 text-white px-3 py-1 rounded-full text-xs">LLM</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Nov 20, 2024</span>
        </motion.a>
        {/* assemblingShells */}
        <motion.a
          href="https://github.com/Abhisg5/assemblingShells"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-green-300 break-words">assemblingShells</h2>
          <p className="mb-2 text-white/90">Build an advanced shell in ARM64 assembly for macOS.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-gray-700/80 text-white px-3 py-1 rounded-full text-xs">ARM64 Assembly</span>
            <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-xs">macOS</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Nov 20, 2024</span>
        </motion.a>
        {/* snakeAPI */}
        <motion.a
          href="https://github.com/Abhisg5/snakeAPI"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-yellow-300 break-words">snakeAPI</h2>
          <p className="mb-2 text-white/90">API for Snake Retro game.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-blue-700/80 text-white px-3 py-1 rounded-full text-xs">C++</span>
            <span className="bg-green-500/80 text-white px-3 py-1 rounded-full text-xs">Game</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Nov 20, 2024</span>
        </motion.a>
        {/* resumeWebsite */}
        <motion.a
          href="https://github.com/Abhisg5/resumeWebsite"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-pink-300 break-words">resumeWebsite</h2>
          <p className="mb-2 text-white/90">Animated website using React, FastAPI, MongoDB.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-blue-400/80 text-white px-3 py-1 rounded-full text-xs">JavaScript</span>
            <span className="bg-cyan-400/80 text-white px-3 py-1 rounded-full text-xs">React</span>
            <span className="bg-green-400/80 text-white px-3 py-1 rounded-full text-xs">FastAPI</span>
            <span className="bg-purple-400/80 text-white px-3 py-1 rounded-full text-xs">MongoDB</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Nov 20, 2024</span>
        </motion.a>
        {/* QuickFit */}
        <motion.a
          href="https://github.com/Abhisg5/QuickFit"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-orange-300 break-words">QuickFit</h2>
          <p className="mb-2 text-white/90">Android app that gives recommendations on clothing items to wear.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-yellow-500/80 text-white px-3 py-1 rounded-full text-xs">Java</span>
            <span className="bg-green-500/80 text-white px-3 py-1 rounded-full text-xs">Android</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Dec 12, 2019</span>
        </motion.a>
        {/* CSSI-Final */}
        <motion.a
          href="https://github.com/Abhisg5/CSSI-Final"
          target="_blank"
          rel="noopener"
          className="bg-white/10 rounded-xl shadow-lg p-6 px-2 w-full min-w-0 border border-white/20 hover:scale-105 hover:shadow-2xl transition-transform flex flex-col gap-2 backdrop-blur-md"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
          }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-lime-300 break-words">CSSI-Final</h2>
          <p className="mb-2 text-white/90">Final project for Google CSSI (HTML, web project).</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-green-400/80 text-white px-3 py-1 rounded-full text-xs">HTML</span>
            <span className="bg-blue-400/80 text-white px-3 py-1 rounded-full text-xs">Web</span>
          </div>
          <span className="text-xs text-white/60">Last updated: Jul 29, 2019</span>
        </motion.a>
      </motion.div>
    </motion.main>
  );
} 