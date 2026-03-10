"use client";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Scala", "SQL", "JavaScript", "Bash", "R", "Go"],
    accent: "primary",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Apache Spark",
      "PySpark",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "FastAPI",
      "Django",
    ],
    accent: "secondary",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Helm",
      "Prometheus",
      "Grafana",
    ],
    accent: "accent",
  },
  {
    title: "Data & ML",
    skills: [
      "AWS SageMaker",
      "Apache Kafka",
      "Apache Airflow",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Apache NiFi",
      "dbt",
    ],
    accent: "tertiary",
  },
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="px-4 pt-32 pb-24 max-w-5xl mx-auto animated-bg"
    >
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          About
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Professional Profile
        </h1>
        <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
          Senior Data Engineer and Machine Learning Engineer with expertise in
          enterprise-scale data infrastructure, advanced analytics, and
          production ML systems. I architect robust, scalable data pipelines
          that enable organizations to extract actionable insights from complex
          datasets.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Education */}
        <motion.div
          className="professional-card p-6 lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                B.S. Computer Science + Statistics
              </h3>
              <p className="text-primary font-medium text-sm">
                University of Illinois Urbana–Champaign
              </p>
              <p className="text-text-muted text-xs mt-1">2019–2023</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white mb-1">
                MIT MicroMasters, Data Science & Statistics
              </h3>
              <p className="text-secondary font-medium text-sm">
                Massachusetts Institute of Technology
              </p>
              <p className="text-text-muted text-xs mt-1">
                2025–2026 (in progress)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary + Achievements */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="professional-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Summary
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Senior Data Engineer with 4+ years architecting enterprise-scale
              data solutions. Proven expertise in ETL/ELT pipelines, real-time
              processing, and ML deployment at scale. Specialized in AWS, Apache
              Spark, and modern data frameworks. Led cross-functional teams
              delivering data-driven solutions across multiple industries.
            </p>
          </div>
          <div className="professional-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {[
                "Architected enterprise data platform serving 10M+ daily transactions",
                "Led legacy ETL migration to cloud-native architecture (60% faster processing)",
                "Deployed production ML models with 99.9% uptime, sub-second inference",
                "Established data governance and quality standards across business units",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Certifications & Recognition */}
      <motion.div
        className="professional-card p-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
          Certifications & Recognition
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="border-l-2 border-primary pl-4">
            <h4 className="font-bold text-white">AWS ML Specialty</h4>
            <p className="text-text-muted text-sm">Advanced ML on AWS</p>
          </div>
          <div className="border-l-2 border-secondary pl-4">
            <h4 className="font-bold text-white">Phirestarter Nominee</h4>
            <p className="text-text-muted text-sm">Innovation recognition</p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <h4 className="font-bold text-white">MIT MicroMasters</h4>
            <p className="text-text-muted text-sm">Data Science & Statistics</p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map(({ title, skills }) => (
            <div key={title} className="professional-card p-6">
              <h3 className="text-base font-bold text-white mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
