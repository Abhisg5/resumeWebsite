"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center px-4 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Work Experience</h1>
      <div className="max-w-2xl w-full bg-white/10 rounded-xl shadow-lg p-8 backdrop-blur-md border border-white/20">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.14 } },
          }}
        >
          {/* Greenphire LLC */}
          <motion.div
            className="relative pl-8 border-l-4 border-blue-400/60 pb-8"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
            }}
          >
            <div className="absolute -left-4 top-2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white/20"></div>
            <h2 className="text-2xl font-semibold">Data Engineer</h2>
            <div className="text-blue-400 font-medium">Greenphire LLC (Thoma Bravo portfolio company) &bull; Atlanta, GA</div>
            <div className="text-white/70 text-sm mb-1">September 2023 – Present</div>
            <ul className="list-disc ml-6 mt-2 text-base text-white/90 space-y-1">
              <li>Design, build, and maintain scalable data pipelines, machine learning models, cloud infrastructure, APIs, DevOps practices, and visualization solutions for clinical trial operations.</li>
              <li>Delivered a Patient Spend Budgeting solution on AWS to forecast clinical trial participant expenses, improving recruitment and trial integrity.</li>
              <li>Built time series forecasting models (DeepAR, AWS SageMaker) for budgeting needs, incorporating seasonality and trial phase indicators.</li>
              <li>Architected a company-wide reporting framework (FastAPI, Angular, Qlik, SSO) deployed on Kubernetes for secure, self-service analytics.</li>
              <li>Translated legacy SQL ETL pipelines to PySpark on AWS Glue, improving scalability and reducing run-times.</li>
              <li>Developed reusable Terraform modules for AWS Glue, enabling rapid deployment across environments.</li>
              <li>Implemented CI/CD pipelines (GitHub Actions) for automated testing, provisioning, builds, and deployments.</li>
              <li>Built data quality validation frameworks and self-healing workflows using AWS Lambda, CloudWatch, S3, EventBridge, and Athena.</li>
              <li>Led containerization and deployment using Kubernetes, Helm, and FluxCD for GitOps.</li>
              <li><span className="text-blue-300">Recognition:</span> Nominated for the Phirestarter Award for exceptional contributions and innovation.</li>
            </ul>
          </motion.div>
          {/* Checkbook.io */}
          <motion.div
            className="relative pl-8 border-l-4 border-cyan-400/60 pb-8"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
            }}
          >
            <div className="absolute -left-4 top-2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-white/20"></div>
            <h2 className="text-2xl font-semibold">Software Engineer</h2>
            <div className="text-cyan-400 font-medium">Checkbook.io &bull; San Mateo, CA</div>
            <div className="text-white/70 text-sm mb-1">May 2022 – December 2022</div>
            <ul className="list-disc ml-6 mt-2 text-base text-white/90 space-y-1">
              <li>Enhanced internal CMS performance using Gatsby and Netlify, improving site speed and deployment workflow.</li>
              <li>Designed and implemented an address verification system (Angular, Python) for new users, improving data accuracy and compliance.</li>
              <li>Built and released new features for digital check creation, streamlining user experience.</li>
              <li>Upgraded frontend to React 18.10, enabling modern features and improved performance.</li>
              <li>Diagnosed and resolved critical UI/UX bugs, boosting platform reliability and reducing support tickets.</li>
            </ul>
          </motion.div>
          {/* SemiCab */}
          <motion.div
            className="relative pl-8 border-l-4 border-purple-400/60 pb-8"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
            }}
          >
            <div className="absolute -left-4 top-2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white/20"></div>
            <h2 className="text-2xl font-semibold">Machine Learning Engineer Intern</h2>
            <div className="text-purple-400 font-medium">SemiCab &bull; Atlanta, GA</div>
            <div className="text-white/70 text-sm mb-1">May 2021 – August 2021</div>
            <ul className="list-disc ml-6 mt-2 text-base text-white/90 space-y-1">
              <li>Developed and evaluated ML models (Moving Average, SES, Holt-Winters, SARIMA, DeepAR) to forecast truck demand.</li>
              <li>Identified DeepAR as the most effective model, significantly outperforming traditional methods.</li>
              <li>Tuned hyperparameters to improve model performance, reducing RMSE and final loss.</li>
              <li>Deployed DeepAR on AWS SageMaker and exposed via scalable API endpoint.</li>
              <li>Built a Flask web app for business analysts to test forecasting models via a user-friendly interface.</li>
            </ul>
          </motion.div>
          {/* Google CSSI */}
          <motion.div
            className="relative pl-8 border-l-4 border-yellow-400/60 pb-8"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
            }}
          >
            <div className="absolute -left-4 top-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white/20"></div>
            <h2 className="text-2xl font-semibold">Computer Science Summer Institute</h2>
            <div className="text-yellow-400 font-medium">Google &bull; Atlanta, GA</div>
            <div className="text-white/70 text-sm mb-1">July 2019 – August 2019</div>
            <ul className="list-disc ml-6 mt-2 text-base text-white/90 space-y-1">
              <li>Developed a full-stack web app aggregating real-time inventory data from multiple merchants using Google APIs.</li>
              <li>Designed a dynamic interface for product comparison (price, specs, availability).</li>
              <li>Collaborated in a team environment, following best practices in web development and software design.</li>
            </ul>
          </motion.div>
          {/* Cardlytics */}
          <motion.div
            className="relative pl-8 border-l-4 border-green-400/60"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
            }}
          >
            <div className="absolute -left-4 top-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white/20"></div>
            <h2 className="text-2xl font-semibold">Big Data Intern</h2>
            <div className="text-green-400 font-medium">Cardlytics &bull; Atlanta, GA</div>
            <div className="text-white/70 text-sm mb-1">May 2018 – August 2018</div>
            <ul className="list-disc ml-6 mt-2 text-base text-white/90 space-y-1">
              <li>Developed scalable data pipelines to process real-time consumer purchase data for targeted marketing campaigns.</li>
              <li>Built and optimized batch/streaming queries using Kafka and Scala/Spark for low-latency data ingestion.</li>
              <li>Designed and implemented ETL workflows with Spark/Scala, transforming raw data into actionable insights.</li>
              <li>Deployed and configured a Hadoop cluster for large-scale data storage and distributed processing.</li>
              <li>Engineered data loading from Hadoop into Vertica for advanced analytics and reporting.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
} 