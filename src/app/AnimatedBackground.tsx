"use client";
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 60;
const MAX_DISTANCE = 130;
const BASE_PARTICLE_COLOR = [56, 189, 248]; // blue-400
const BASE_LINE_COLOR = [34, 211, 238]; // cyan-400

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function colorShift(base: number[], t: number) {
  // Cycle through hue
  const angle = t * 2 * Math.PI;
  return [
    Math.floor(base[0] + 80 * Math.sin(angle)),
    Math.floor(base[1] + 80 * Math.sin(angle + 2)),
    Math.floor(base[2] + 80 * Math.sin(angle + 4)),
  ];
}

function randomShootingStar(width: number, height: number) {
  // Start at random x, y near top, move diagonally down right
  const startX = Math.random() * width * 0.8;
  const startY = Math.random() * height * 0.3;
  const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
  const length = 180 + Math.random() * 80;
  const speed = 12 + Math.random() * 6;
  return {
    x: startX,
    y: startY,
    angle,
    length,
    speed,
    t: 0,
    active: true,
  };
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000, down: false });
  const ripple = useRef({ x: 0, y: 0, t: 0 });
  const shootingStar = useRef(null as null | ReturnType<typeof randomShootingStar>);
  const shootingStarTimeout = useRef<NodeJS.Timeout | null>(null);

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

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    });
    window.addEventListener("mousedown", (e) => {
      mouse.current.down = true;
      ripple.current = { x: e.clientX, y: e.clientY, t: 0 };
    });
    window.addEventListener("mouseup", () => {
      mouse.current.down = false;
    });

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      r: 2 + Math.random() * 2,
    }));

    let t = 0;

    function triggerShootingStar() {
      shootingStar.current = randomShootingStar(width, height);
      // Next shooting star in 3-8 seconds
      if (shootingStarTimeout.current) clearTimeout(shootingStarTimeout.current);
      shootingStarTimeout.current = setTimeout(triggerShootingStar, 3000 + Math.random() * 5000);
    }
    triggerShootingStar();

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 1 - dist / MAX_DISTANCE;
            const [r, g, b_] = colorShift(BASE_LINE_COLOR, t / 200 + i * 0.01 + j * 0.01);
            ctx.strokeStyle = `rgb(${r},${g},${b_})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.shadowColor = `rgb(${r},${g},${b_})`;
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw particles
      particles.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = 0.9;
        const [r, g, b_] = colorShift(BASE_PARTICLE_COLOR, t / 200 + i * 0.02);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgb(${r},${g},${b_})`;
        ctx.shadowColor = `rgb(${r},${g},${b_})`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });
      // Draw ripple
      if (ripple.current.t < 1) {
        ctx.save();
        ctx.globalAlpha = 0.25 * (1 - ripple.current.t);
        ctx.beginPath();
        ctx.arc(ripple.current.x, ripple.current.y, ripple.current.t * 180, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgb(255,255,255)`;
        ctx.lineWidth = 4;
        ctx.shadowColor = `#38bdf8`;
        ctx.shadowBlur = 24;
        ctx.stroke();
        ctx.restore();
      }
      // Draw shooting star
      if (shootingStar.current && shootingStar.current.active) {
        const s = shootingStar.current;
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.strokeStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 24;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - Math.cos(s.angle) * s.length * 0.7,
          s.y - Math.sin(s.angle) * s.length * 0.7
        );
        ctx.stroke();
        ctx.restore();
      }
    }

    function animate() {
      t += 1;
      // Particle movement
      particles.forEach((p) => {
        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * 0.12;
          p.vy += Math.sin(angle) * 0.12;
        }
        // Limit speed
        p.vx = lerp(p.vx, (Math.random() - 0.5) * 1.2, 0.002);
        p.vy = lerp(p.vy, (Math.random() - 0.5) * 1.2, 0.002);
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
      // Ripple animation
      if (ripple.current.t < 1) {
        ripple.current.t += 0.025;
      }
      // Shooting star animation
      if (shootingStar.current && shootingStar.current.active) {
        const s = shootingStar.current;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.t += 1;
        if (
          s.x > width + 100 ||
          s.y > height + 100 ||
          s.t > 60
        ) {
          shootingStar.current.active = false;
        }
      }
      draw();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      if (shootingStarTimeout.current) clearTimeout(shootingStarTimeout.current);
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