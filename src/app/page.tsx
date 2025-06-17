"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeLayout";
import AnimatedBackground from "./AnimatedBackground";
import AuroraWaves from "./AuroraWaves";
import NeuralNetworkAnimation from "./NeuralNetworkAnimation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col items-center justify-center pt-24 pb-24 z-10"
    >
      <AuroraWaves />
      <AnimatedBackground />
      <div className="relative z-20 flex flex-col items-center justify-center max-w-3xl w-full gap-12">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center animate-fadein drop-shadow-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent tracking-tight animate-gradient-move">
            Abhinav Gaddipati
          </h1>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-lg animate-fadein2 animate-divider-shimmer" />
          <h2 className="text-2xl md:text-4xl font-bold text-center animate-fadein2 text-white/90 tracking-tight">
            Machine Learning Engineer / Data Engineer
          </h2>
          <p className="text-lg md:text-xl text-center animate-fadein2 text-white/70 max-w-xl font-light">
            Building intelligent systems and scalable data solutions with AI, cloud, and code.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <NeuralNetworkAnimation />
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1) 0.2s both; }
        .animate-fadein2 { animation: fadein 1s cubic-bezier(.4,0,.2,1) 0.5s both; }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 4s ease-in-out infinite alternate;
        }
        @keyframes divider-shimmer {
          0% { background-position: 0% 50%; filter: brightness(1.1); }
          50% { background-position: 100% 50%; filter: brightness(1.7); }
          100% { background-position: 0% 50%; filter: brightness(1.1); }
        }
        .animate-divider-shimmer {
          background-size: 200% 200%;
          animation: divider-shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
