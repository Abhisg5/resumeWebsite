"use client";
import { motion } from "framer-motion";

const CERTS = [
  {
    name: "AWS Certified Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
    desc: "Advanced certification in machine learning on AWS platform",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2019",
    desc: "Foundational understanding of AWS Cloud concepts",
  },
  {
    name: "Machine Learning Certificate",
    issuer: "Stanford University",
    year: "2020",
    desc: "Comprehensive machine learning course",
  },
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2021",
    desc: "GCP deployment and operations expertise",
  },
];

export default function Certifications() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="px-4 pt-32 pb-24 max-w-5xl mx-auto animated-bg"
    >
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Credentials
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Certifications
        </h1>
        <p className="text-text-secondary mt-2">
          Industry-recognized certifications in cloud and machine learning.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {CERTS.map((cert) => (
          <motion.div
            key={cert.name}
            className="professional-card p-6 hover:border-primary/40 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              },
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-1 h-14 rounded-full shrink-0"
                style={{ backgroundColor: "var(--primary)" }}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-white mb-1">
                  {cert.name}
                </h2>
                <p className="text-primary font-medium text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-text-muted text-xs mb-3">{cert.year}</p>
                <p className="text-text-secondary text-sm">{cert.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}
