"use client";
import { motion } from "framer-motion";

const ROLES = [
  {
    title: "Data Engineer",
    company: "Greenphire LLC",
    subtitle: "Thoma Bravo portfolio company • Atlanta, GA",
    dates: "September 2023 – Present",
    summary:
      "Design, build, and maintain scalable data pipelines, ML models, cloud infrastructure, APIs, and visualization solutions for clinical trial operations.",
    achievements: [
      "Delivered Patient Spend Budgeting solution on AWS",
      "Built time series forecasting models (DeepAR, SageMaker)",
      "Architected company-wide reporting framework",
      "Translated legacy SQL ETL to PySpark on AWS Glue",
    ],
    tech: [
      "AWS",
      "Python",
      "PySpark",
      "Kubernetes",
      "Terraform",
      "FastAPI",
      "Angular",
      "Qlik",
    ],
    badge: "Phirestarter Award Nominee",
  },
  {
    title: "Software Engineer",
    company: "Checkbook.io",
    subtitle: "San Mateo, CA",
    dates: "May 2022 – December 2022",
    summary:
      "Enhanced internal CMS performance and developed new features for digital check creation platform.",
    achievements: [
      "Enhanced CMS performance using Gatsby and Netlify",
      "Implemented address verification system",
      "Upgraded frontend to React 18.10",
    ],
    tech: ["React", "Angular", "Python", "Gatsby", "Netlify", "JavaScript"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "SemiCab",
    subtitle: "Atlanta, GA",
    dates: "May 2021 – August 2021",
    summary:
      "Developed and evaluated ML models to forecast truck demand; DeepAR significantly outperformed traditional methods.",
    achievements: [
      "Developed ML models (MA, SES, Holt-Winters, SARIMA, DeepAR)",
      "Identified DeepAR as most effective model",
      "Deployed DeepAR on AWS SageMaker",
    ],
    tech: ["Python", "AWS SageMaker", "Flask", "DeepAR"],
  },
  {
    title: "Computer Science Summer Institute",
    company: "Google",
    subtitle: "Atlanta, GA",
    dates: "July 2019 – August 2019",
    summary:
      "Developed full-stack web app aggregating real-time inventory data from multiple merchants using Google APIs.",
    achievements: [
      "Full-stack web app with Google APIs",
      "Dynamic product comparison interface",
      "Team collaboration",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Google APIs"],
  },
  {
    title: "Big Data Intern",
    company: "Cardlytics",
    subtitle: "Atlanta, GA",
    dates: "May 2018 – August 2018",
    summary:
      "Developed scalable data pipelines to process real-time consumer purchase data for targeted marketing.",
    achievements: [
      "Scalable data pipelines for real-time processing",
      "Optimized batch/streaming queries with Kafka and Spark",
      "ETL workflows with Spark/Scala",
    ],
    tech: ["Scala", "Spark", "Kafka", "Hadoop", "Vertica"],
  },
];

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="px-4 pt-32 pb-24 max-w-5xl mx-auto animated-bg"
    >
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Experience
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Work History
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Scalable data solutions, ML deployment, and cloud infrastructure
          across enterprise and growth-stage organizations.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-8">
          {ROLES.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.dates}`}
              className="relative pl-12 md:pl-16"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary shrink-0" />
              <div className="professional-card p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {role.title}
                    </h2>
                    <p className="text-primary font-semibold">{role.company}</p>
                    <p className="text-text-muted text-sm">{role.subtitle}</p>
                  </div>
                  <p className="text-text-muted text-sm whitespace-nowrap">
                    {role.dates}
                  </p>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  {role.summary}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {role.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-text-secondary text-sm"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {role.badge && (
                  <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-primary text-sm font-medium">
                      {role.badge}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
