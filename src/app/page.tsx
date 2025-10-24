"use client";
import AnimatedBackground from "./AnimatedBackground";
import AuroraWaves from "./AuroraWaves";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="relative min-h-screen px-4 py-24 z-10 animated-bg"
    >
      <AuroraWaves />
      <AnimatedBackground />

      {/* Hero Section - Inspired by Bryant's bold typography */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Data Engineering & ML Solutions
          </h1>

          <h2 className="text-xl md:text-2xl text-white/80 mb-8 font-medium">
            Senior Data Engineer | AWS Certified | 4+ Years Experience
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            I architect and implement enterprise-scale data infrastructure,
            build production ML pipelines, and optimize data workflows for
            high-performance analytics. Specialized in AWS, Apache Spark, and
            modern data engineering frameworks.
          </p>
        </motion.div>

        {/* Interactive Cards Grid - Like Bryant's project showcase */}
        <motion.div
          className="creative-grid mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="interactive-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl">
                🧠
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                Machine Learning
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Designing and deploying production-ready machine learning models
              using AWS SageMaker, PySpark, and modern ML frameworks.
              Specializing in time series forecasting, deep learning, and model
              optimization.
            </p>
          </div>

          <div className="interactive-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center text-white text-xl">
                ☁️
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                Cloud Architecture
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Architecting and implementing scalable cloud infrastructure using
              AWS, Kubernetes, and Infrastructure as Code. Focused on high
              availability, security, and cost optimization for enterprise
              applications.
            </p>
          </div>

          <div className="interactive-card group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-tertiary rounded-lg flex items-center justify-center text-white text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                Data Engineering
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Building robust data pipelines and ETL processes for real-time
              analytics and business intelligence. Expertise in PySpark, Kafka,
              and data quality frameworks for enterprise-scale data processing.
            </p>
          </div>
        </motion.div>

        {/* Professional Call-to-Action */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="interactive-card p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Scale Your Data Infrastructure?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how I can help optimize your data pipelines,
              implement ML solutions, or architect your next data platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Experience
              </a>
              <a
                href="/contact"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
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
