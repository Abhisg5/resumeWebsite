"use client";
import { useEffect, useRef } from "react";

export default function AuroraWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);

    function drawAurora(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 3; i++) {
        ctx.save();
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, `hsla(${(t * 20 + i * 60) % 360}, 100%, 70%, 0.18)`);
        grad.addColorStop(1, `hsla(${(t * 20 + i * 60 + 120) % 360}, 100%, 70%, 0.10)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        const baseY = height * (0.3 + i * 0.18);
        ctx.moveTo(0, baseY);
        for (let x = 0; x <= width; x += 8) {
          const y = baseY + Math.sin((x / width) * Math.PI * 2 + t * 0.8 + i) * (40 + i * 30);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.filter = `blur(${18 - i * 6}px)`;
        ctx.globalAlpha = 0.7 - i * 0.2;
        ctx.fill();
        ctx.restore();
      }
      ctx.filter = "none";
    }

    let t = 0;
    function animate() {
      t += 0.012;
      drawAurora(t);
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none" }}
    />
  );
} 