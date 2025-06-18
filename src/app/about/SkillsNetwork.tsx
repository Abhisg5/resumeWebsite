"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Interface for the SkillsNetwork component props
 * @interface SkillsNetworkProps
 */
interface SkillsNetworkProps {
  /** The number of nodes in the network */
  nodeCount?: number;
  /** The color of the nodes in hex format */
  nodeColor?: string;
  /** The color of the connections in hex format */
  connectionColor?: string;
}

/**
 * SkillsNetwork Component
 *
 * A dynamic, animated visualization of skills and their relationships.
 * Uses HTML Canvas for performance and smooth animations.
 *
 * Features:
 * - Interactive node connections
 * - Dynamic skill visualization
 * - Responsive to window resizing
 * - Performance optimized using requestAnimationFrame
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <SkillsNetwork />
 * ```
 */
export default function SkillsNetwork({
  nodeCount = 30,
  nodeColor = "#10B981",
  connectionColor = "#3B82F6",
}: SkillsNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [nodes, setNodes] = useState<Array<{ x: number; y: number }>>([]);

  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize nodes
  useEffect(() => {
    setNodes(
      Array.from({ length: nodeCount }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
      })),
    );
  }, [dimensions.width, dimensions.height, nodeCount]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [nodes, nodeColor, connectionColor]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
