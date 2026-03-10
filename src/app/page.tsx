"use client";
import AnimatedBackground from "./AnimatedBackground";
import AuroraWaves from "./AuroraWaves";
import { motion } from "framer-motion";
import Link from "next/link";

const COMPANIES = [
  "Greenphire",
  "Checkbook.io",
  "SemiCab",
  "Google",
  "Cardlytics",
];

const EXPERTISE = [
  {
    title: "Machine Learning",
    description:
      "Production ML pipelines with AWS SageMaker, PySpark, and modern frameworks. Time series forecasting, deep learning, and model optimization.",
    accent: "var(--primary)",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tags: ["SageMaker", "PySpark", "DeepAR", "TensorFlow"],
  },
  {
    title: "Cloud Architecture",
    description:
      "Scalable cloud infrastructure with AWS, Kubernetes, and IaC. High availability, security, and cost optimization for enterprise applications.",
    accent: "var(--secondary)",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
  },
  {
    title: "Data Engineering",
    description:
      "Robust ETL/ELT pipelines and real-time analytics. Expertise in PySpark, Kafka, and data quality frameworks for enterprise-scale processing.",
    accent: "var(--accent)",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    tags: ["Spark", "Kafka", "Airflow", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="relative min-h-screen px-4 pt-32 pb-24 z-10 animated-bg"
    >
      <AuroraWaves />
      <AnimatedBackground />

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Hero - Magic MCP Gradient variant */}
        <div className="text-center space-y-8 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="hero-gradient-text">
              AI/ML Engineer. Data Engineer. Cloud Architect.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            4+ years turning complex data challenges into scalable platforms,
            production ML pipelines, and high-performance cloud infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/resume"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-semibold text-base px-8 py-3.5 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:translate-y-[-2px] transition-all duration-300"
            >
              View Resume
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-8 py-3.5 hover:bg-white/25 hover:border-white/50 hover:translate-y-[-2px] transition-all duration-300"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/25 text-white font-semibold text-base px-8 py-3.5 hover:bg-white/20 hover:border-white/40 hover:translate-y-[-2px] transition-all duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Previously at */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
            Previously at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {COMPANIES.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="text-lg md:text-xl font-semibold text-white/30 hover:text-white/60 transition-colors duration-300 select-none"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {EXPERTISE.map(({ title, description, accent, icon, tags }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl"
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, ${accent}, transparent)`,
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10 text-white/50 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="professional-card p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Let&apos;s Build Something
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Open to discussing data platform architecture, ML implementation, or
            technical leadership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold text-sm px-6 py-3 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:translate-y-[-2px] transition-all duration-300"
            >
              View Resume
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 border border-white/30 text-white font-semibold text-sm px-6 py-3 hover:bg-white/25 hover:border-white/50 hover:translate-y-[-2px] transition-all duration-300"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/25 text-white font-semibold text-sm px-6 py-3 hover:bg-white/20 hover:border-white/40 hover:translate-y-[-2px] transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        .hero-gradient-text {
          background: var(--gradient-primary);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero-gradient 3s ease infinite;
        }
        @keyframes hero-gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
        }
        .animate-fadein2 {
          animation: fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
        }
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-move {
          animation: gradient-move 4s ease-in-out infinite alternate;
        }
        @keyframes divider-shimmer {
          0% {
            background-position: 0% 50%;
            filter: brightness(1.1);
          }
          50% {
            background-position: 100% 50%;
            filter: brightness(1.7);
          }
          100% {
            background-position: 0% 50%;
            filter: brightness(1.1);
          }
        }
        .animate-divider-shimmer {
          background-size: 200% 200%;
          animation: divider-shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
