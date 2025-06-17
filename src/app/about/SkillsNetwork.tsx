"use client";
import React, { useRef, useEffect, useState } from "react";

const skills = [
  "Python", "C", "C++", "OCAML", "JavaScript", "System Verilog", "React", "Angular", "Django", "Scala", "Spark", "Octave", "MongoDB", "SQL", "Kafka", "HTML", "CSS", "AWS", "PSQL", "Sagemaker", "Glue", "Lambda", "S3", "API Gateway", "CloudWatch", "Athena", "Systems Manager", "EventBridge", "RDS", "ECR", "EKS", "EC2", "CloudTrail", "VPC", "Secrets Manager", "Terraform", "PySpark", "GitHub Actions", "Kubernetes", "Helm", "Flux", "Qlik"
];

const nodeRadius = 32;
const edgeColor = "rgba(255,255,255,0.18)";
const highlightColor = "#38bdf8";

type NodePosition = {
  x: number;
  y: number;
};

function getRandomPosition(width: number, height: number): NodePosition {
  const padding = nodeRadius * 2;
  return {
    x: Math.random() * (width - padding * 2) + padding,
    y: Math.random() * (height - padding * 2) + padding,
  };
}

const SkillsNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 400 });
  const [nodes, setNodes] = useState<NodePosition[]>([]);

  // Responsive sizing
  useEffect(() => {
    function handleResize() {
      const width = Math.min(window.innerWidth - 48, 700);
      setDimensions({ width, height: 400 });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize node positions
  useEffect(() => {
    setNodes(
      skills.map(() => getRandomPosition(dimensions.width, dimensions.height))
    );
  }, [dimensions.width, dimensions.height]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      // Draw edges (simple: connect each node to 2-3 random others)
      nodes.forEach((node, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.abs(i - j) % 7 === 0 || Math.abs(i - j) % 11 === 0) {
            ctx.save();
            ctx.strokeStyle = edgeColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });
      // Animate nodes
      nodes.forEach((node, i) => {
        // Animate a subtle floating effect
        const floatY = Math.sin(t / 30 + i) * 6;
        const floatX = Math.cos(t / 40 + i) * 6;
        const x = node.x + floatX;
        const y = node.y + floatY;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
        ctx.fillStyle = hovered === i ? highlightColor : "rgba(30,41,59,0.85)";
        ctx.shadowColor = hovered === i ? highlightColor : "#fff";
        ctx.shadowBlur = hovered === i ? 24 : 8;
        ctx.fill();
        ctx.restore();
        // Draw skill text
        ctx.save();
        ctx.font = hovered === i ? "bold 1.1rem Inter" : "500 1rem Inter";
        ctx.fillStyle = hovered === i ? "#fff" : "#e0e7ef";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(skills[i], x, y);
        ctx.restore();
      });
      t++;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [nodes, hovered, dimensions]);

  // Mouse interaction
  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let found = null;
    nodes.forEach((node, i) => {
      const floatY = Math.sin(0 + i) * 6;
      const floatX = Math.cos(0 + i) * 6;
      const x = node.x + floatX;
      const y = node.y + floatY;
      if (Math.hypot(mx - x, my - y) < nodeRadius) {
        found = i;
      }
    });
    setHovered(found);
  }
  function handleMouseLeave() {
    setHovered(null);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="rounded-2xl shadow-lg border border-white/20 bg-gradient-to-br from-slate-900/80 to-slate-800/60"
        style={{ maxWidth: "100%", height: "auto", cursor: hovered !== null ? "pointer" : "default" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default SkillsNetwork; 