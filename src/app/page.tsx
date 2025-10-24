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
          <h1 className="creative-heading mb-8">Abhinav Gaddipati</h1>

          <motion.div
            className="section-divider mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          <h2 className="creative-subheading mb-8">
            Machine Learning Engineer & Data Engineer
          </h2>

          <p className="creative-text max-w-4xl mx-auto mb-12">
            I transform complex data challenges into intelligent, scalable
            solutions. With expertise in AWS, Python, and modern ML frameworks,
            I help organizations unlock the power of their data through
            cutting-edge machine learning and robust data engineering.
            <br />
            <span className="text-primary font-semibold">
              Let&apos;s build something that transforms your business.
            </span>
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
            <h3 className="creative-subheading mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="creative-text mb-8 max-w-2xl mx-auto">
              I specialize in transforming complex data challenges into
              scalable, intelligent solutions. From machine learning models to
              cloud infrastructure, I help organizations unlock the power of
              their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/work" className="creative-btn">
                View My Work
              </a>
              <a href="/contact" className="creative-btn">
                Let&apos;s Connect
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
