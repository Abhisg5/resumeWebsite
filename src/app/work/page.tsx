"use client";
import { motion } from "framer-motion";

export default function Work() {
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
        <h1 className="creative-heading mb-8">Work Experience</h1>

        <div className="section-divider mb-12" />

        <h2 className="creative-subheading mb-8">
          Building award-winning projects
        </h2>

        <p className="creative-text max-w-4xl mx-auto">
          Years of experience working with best-in-class teams building scalable
          data solutions, machine learning models, and cloud infrastructure that
          powers enterprise operations.
        </p>
      </motion.div>

      {/* Work Experience - Bryant's project showcase style */}
      <div className="space-y-16">
        {/* Greenphire LLC */}
        <motion.div
          className="interactive-card group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              G
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Data Engineer
              </h2>
              <div className="text-primary font-semibold text-xl mb-2">
                Greenphire LLC
              </div>
              <div className="text-text-secondary text-sm mb-1">
                Thoma Bravo portfolio company • Atlanta, GA
              </div>
              <div className="text-text-muted text-sm">
                September 2023 – Present
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="creative-text leading-relaxed">
              Design, build, and maintain scalable data pipelines, machine
              learning models, cloud infrastructure, APIs, DevOps practices, and
              visualization solutions for clinical trial operations.
            </p>

            <div className="creative-grid-2">
              <div className="space-y-4">
                <h4 className="creative-subheading text-primary">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Delivered Patient Spend Budgeting solution on AWS
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Built time series forecasting models (DeepAR, SageMaker)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Architected company-wide reporting framework
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Translated legacy SQL ETL to PySpark on AWS Glue
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="creative-subheading text-secondary">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Python",
                    "PySpark",
                    "Kubernetes",
                    "Terraform",
                    "FastAPI",
                    "Angular",
                    "Qlik",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-primary font-semibold text-lg">
                🏆 Recognition: Nominated for the Phirestarter Award for
                exceptional contributions and innovation
              </p>
            </div>
          </div>
        </motion.div>
        {/* Checkbook.io */}
        <motion.div
          className="interactive-card group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              C
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                Software Engineer
              </h2>
              <div className="text-secondary font-semibold text-xl mb-2">
                Checkbook.io
              </div>
              <div className="text-text-secondary text-sm mb-1">
                San Mateo, CA
              </div>
              <div className="text-text-muted text-sm">
                May 2022 – December 2022
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="creative-text leading-relaxed">
              Enhanced internal CMS performance and developed new features for
              digital check creation platform, improving user experience and
              system reliability.
            </p>

            <div className="creative-grid-2">
              <div className="space-y-4">
                <h4 className="creative-subheading text-secondary">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-text-secondary">
                      Enhanced CMS performance using Gatsby and Netlify
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-text-secondary">
                      Implemented address verification system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span className="text-text-secondary">
                      Upgraded frontend to React 18.10
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="creative-subheading text-accent">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Angular",
                    "Python",
                    "Gatsby",
                    "Netlify",
                    "JavaScript",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30 hover:bg-secondary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SemiCab */}
        <motion.div
          className="interactive-card group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-tertiary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              S
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                Machine Learning Engineer Intern
              </h2>
              <div className="text-accent font-semibold text-xl mb-2">
                SemiCab
              </div>
              <div className="text-text-secondary text-sm mb-1">
                Atlanta, GA
              </div>
              <div className="text-text-muted text-sm">
                May 2021 – August 2021
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="creative-text leading-relaxed">
              Developed and evaluated ML models to forecast truck demand, with
              DeepAR significantly outperforming traditional methods.
            </p>

            <div className="creative-grid-2">
              <div className="space-y-4">
                <h4 className="creative-subheading text-accent">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-text-secondary">
                      Developed ML models (Moving Average, SES, Holt-Winters,
                      SARIMA, DeepAR)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-text-secondary">
                      Identified DeepAR as most effective model
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-text-secondary">
                      Deployed DeepAR on AWS SageMaker
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="creative-subheading text-tertiary">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "AWS SageMaker",
                    "Flask",
                    "DeepAR",
                    "Machine Learning",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30 hover:bg-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google CSSI */}
        <motion.div
          className="interactive-card group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-tertiary to-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              G
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-tertiary transition-colors">
                Computer Science Summer Institute
              </h2>
              <div className="text-tertiary font-semibold text-xl mb-2">
                Google
              </div>
              <div className="text-text-secondary text-sm mb-1">
                Atlanta, GA
              </div>
              <div className="text-text-muted text-sm">
                July 2019 – August 2019
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="creative-text leading-relaxed">
              Developed a full-stack web app aggregating real-time inventory
              data from multiple merchants using Google APIs.
            </p>

            <div className="creative-grid-2">
              <div className="space-y-4">
                <h4 className="creative-subheading text-tertiary">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary mt-1">•</span>
                    <span className="text-text-secondary">
                      Developed full-stack web app with Google APIs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary mt-1">•</span>
                    <span className="text-text-secondary">
                      Designed dynamic product comparison interface
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-tertiary mt-1">•</span>
                    <span className="text-text-secondary">
                      Collaborated in team environment
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="creative-subheading text-primary">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Google APIs",
                    "Web Development",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-full text-sm font-medium border border-tertiary/30 hover:bg-tertiary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cardlytics */}
        <motion.div
          className="interactive-card group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              C
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Big Data Intern
              </h2>
              <div className="text-primary font-semibold text-xl mb-2">
                Cardlytics
              </div>
              <div className="text-text-secondary text-sm mb-1">
                Atlanta, GA
              </div>
              <div className="text-text-muted text-sm">
                May 2018 – August 2018
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="creative-text leading-relaxed">
              Developed scalable data pipelines to process real-time consumer
              purchase data for targeted marketing campaigns.
            </p>

            <div className="creative-grid-2">
              <div className="space-y-4">
                <h4 className="creative-subheading text-primary">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Built scalable data pipelines for real-time processing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Optimized batch/streaming queries with Kafka and Spark
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-secondary">
                      Designed ETL workflows with Spark/Scala
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="creative-subheading text-secondary">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Scala",
                    "Spark",
                    "Kafka",
                    "Hadoop",
                    "Vertica",
                    "Big Data",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
