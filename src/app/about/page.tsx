"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center px-4 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
      <div className="max-w-2xl w-full bg-white/10 rounded-xl shadow-lg p-8 mb-8 backdrop-blur-md border border-white/20">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="mb-4 text-lg">
          <li><span className="font-bold">B.S. Computer Science + Statistics</span>, University of Illinois at Urbana–Champaign (2019–2023)</li>
          <li><span className="font-bold">MIT MicroMasters in Data Science & Statistics</span> (Jan 2025–2026, in progress)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-lg mb-4">
          Data Engineer and Machine Learning Specialist with a proven track record of designing, building, and maintaining scalable data pipelines, machine learning models, and cloud infrastructure. Experienced in DevOps, data quality frameworks, and visualization solutions to support enterprise operations. 
        </p>
      </div>
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3 text-base"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {[
            { label: "Python", color: "bg-blue-900" },
            { label: "C", color: "bg-blue-800" },
            { label: "C++", color: "bg-blue-700" },
            { label: "OCAML", color: "bg-blue-900" },
            { label: "JavaScript", color: "bg-blue-800" },
            { label: "System Verilog", color: "bg-blue-700" },
            { label: "React", color: "bg-blue-900" },
            { label: "Angular", color: "bg-blue-800" },
            { label: "Django", color: "bg-blue-700" },
            { label: "Scala", color: "bg-blue-900" },
            { label: "Spark", color: "bg-blue-800" },
            { label: "Octave", color: "bg-blue-700" },
            { label: "MongoDB", color: "bg-blue-900" },
            { label: "SQL", color: "bg-blue-800" },
            { label: "Kafka", color: "bg-blue-700" },
            { label: "HTML", color: "bg-blue-900" },
            { label: "CSS", color: "bg-blue-800" },
            { label: "AWS", color: "bg-blue-700" },
            { label: "PSQL", color: "bg-blue-900" },
            { label: "Sagemaker", color: "bg-blue-800" },
            { label: "Glue", color: "bg-blue-700" },
            { label: "Lambda", color: "bg-blue-900" },
            { label: "S3", color: "bg-blue-800" },
            { label: "API Gateway", color: "bg-blue-700" },
            { label: "CloudWatch", color: "bg-blue-900" },
            { label: "Athena", color: "bg-blue-800" },
            { label: "Systems Manager", color: "bg-blue-700" },
            { label: "EventBridge", color: "bg-blue-900" },
            { label: "RDS", color: "bg-blue-800" },
            { label: "ECR", color: "bg-blue-700" },
            { label: "EKS", color: "bg-blue-900" },
            { label: "EC2", color: "bg-blue-800" },
            { label: "CloudTrail", color: "bg-blue-700" },
            { label: "VPC", color: "bg-blue-900" },
            { label: "Secrets Manager", color: "bg-blue-800" },
            { label: "Terraform", color: "bg-blue-700" },
            { label: "PySpark", color: "bg-blue-900" },
            { label: "GitHub Actions", color: "bg-blue-800" },
            { label: "Kubernetes", color: "bg-blue-700" },
            { label: "Helm", color: "bg-blue-900" },
            { label: "Flux", color: "bg-blue-800" },
            { label: "Qlik", color: "bg-blue-700" },
          ].map((skill, i) => (
            <motion.span
              key={skill.label}
              className={`${skill.color} text-white px-4 py-2 rounded-full font-medium shadow transition-all duration-200 hover:scale-110 hover:shadow-xl focus:scale-110 focus:shadow-xl outline-none`}
              tabIndex={0}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
              }}
              whileHover={{ scale: 1.12, boxShadow: "0 0 0 4px #38bdf8, 0 0 24px #38bdf8" }}
              whileFocus={{ scale: 1.12, boxShadow: "0 0 0 4px #38bdf8, 0 0 24px #38bdf8" }}
            >
              {skill.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
} 