"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className="px-4 py-24 max-w-7xl mx-auto animated-bg"
    >
      {/* Hero Section - Bryant's style */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="creative-heading mb-8">About</h1>

        <div className="section-divider mb-12" />

        <h2 className="creative-subheading mb-8">Professional Profile</h2>

        <p className="creative-text max-w-4xl mx-auto">
          Senior Data Engineer and Machine Learning Engineer with expertise in
          building enterprise-scale data infrastructure, implementing advanced
          analytics solutions, and deploying production ML systems. I specialize
          in architecting robust, scalable data pipelines that enable
          organizations to extract actionable insights from complex datasets.
          <br />
          <span className="text-primary font-semibold">
            Transforming raw data into strategic business value through
            cutting-edge engineering and machine learning solutions.
          </span>
        </p>
      </motion.div>

      {/* Education & Experience - Creative Grid */}
      <motion.div
        className="creative-grid-2 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="interactive-card">
          <h2 className="creative-subheading mb-6">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                B.S. Computer Science + Statistics
              </h3>
              <p className="text-primary font-semibold mb-1">
                University of Illinois at Urbana–Champaign
              </p>
              <p className="text-text-muted text-sm">2019–2023</p>
            </div>
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                MIT MicroMasters in Data Science & Statistics
              </h3>
              <p className="text-secondary font-semibold mb-1">
                Massachusetts Institute of Technology
              </p>
              <p className="text-text-muted text-sm">
                Jan 2025–2026 (in progress)
              </p>
            </div>
          </div>
        </div>

        <div className="interactive-card">
          <h2 className="creative-subheading mb-6">Professional Summary</h2>
          <p className="creative-text leading-relaxed">
            Senior Data Engineer with 4+ years of experience architecting and
            implementing enterprise-scale data solutions. Proven expertise in
            building robust ETL/ELT pipelines, implementing real-time data
            processing systems, and deploying machine learning models at scale.
            Specialized in AWS cloud technologies, Apache Spark, and modern data
            engineering frameworks. Led cross-functional teams in delivering
            data-driven solutions that improved business operations and
            decision-making capabilities across multiple industries.
          </p>
        </div>
      </motion.div>

      {/* Professional Achievements */}
      <motion.div
        className="creative-grid-2 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="interactive-card">
          <h2 className="creative-subheading mb-6">Key Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-secondary">
                Architected and implemented enterprise data platform serving
                10M+ daily transactions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-secondary">
                Led migration of legacy ETL systems to modern cloud-native
                architecture, reducing processing time by 60%
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-secondary">
                Deployed production ML models with 99.9% uptime and sub-second
                inference latency
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-secondary">
                Established data governance framework and quality standards
                across multiple business units
              </span>
            </li>
          </ul>
        </div>

        <div className="interactive-card">
          <h2 className="creative-subheading mb-6">
            Certifications & Recognition
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-white mb-1">
                AWS Certified Machine Learning Specialty
              </h4>
              <p className="text-text-secondary text-sm">
                Advanced certification in ML on AWS platform
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="text-lg font-semibold text-white mb-1">
                Phirestarter Award Nominee
              </h4>
              <p className="text-text-secondary text-sm">
                Recognition for exceptional contributions and innovation
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="text-lg font-semibold text-white mb-1">
                MIT MicroMasters in Progress
              </h4>
              <p className="text-text-secondary text-sm">
                Data Science & Statistics specialization
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section - Bryant's creative approach */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="creative-subheading mb-8">Skills</h2>

        <div className="creative-grid">
          {/* Programming Languages */}
          <motion.div
            className="interactive-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white text-xl">
                💻
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                Programming Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Scala", "SQL", "JavaScript", "Bash", "R", "Go"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            className="interactive-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center text-white text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                Frameworks & Libraries
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Apache Spark",
                "PySpark",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
                "FastAPI",
                "Django",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30 hover:bg-secondary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div
            className="interactive-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-tertiary rounded-lg flex items-center justify-center text-white text-xl">
                ☁️
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                Cloud & DevOps
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS",
                "Kubernetes",
                "Docker",
                "Terraform",
                "GitHub Actions",
                "Jenkins",
                "Helm",
                "Prometheus",
                "Grafana",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30 hover:bg-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Data & ML */}
          <motion.div
            className="interactive-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-tertiary to-primary rounded-lg flex items-center justify-center text-white text-xl">
                🧠
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-tertiary transition-colors">
                Data & ML
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS SageMaker",
                "Apache Kafka",
                "Apache Airflow",
                "Redis",
                "PostgreSQL",
                "MongoDB",
                "Elasticsearch",
                "Apache NiFi",
                "dbt",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-full text-sm font-medium border border-tertiary/30 hover:bg-tertiary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
}
