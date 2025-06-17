"use client";
import { useRef, useEffect } from "react";

const NODE_COUNT = 18;
const LAYER_COUNT = 4;
const COLORS = ["#38bdf8", "#6366f1", "#a21caf", "#f472b6", "#facc15"];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

type Node = {
  x: number;
  y: number;
  r: number;
  pulse: number;
  base: number;
  color: string;
  floatPhase: number;
};

type Edge = {
  from: Node;
  to: Node;
  colorIdx: number;
};

type Signal = {
  edge: Edge;
  t: number;
  speed: number;
  color: string;
};

export default function NeuralNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0, active: false });
  const parallax = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement ? canvas.parentElement.offsetWidth : 520;
    const height = 320;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Responsive resize
    function handleResize() {
      if (!canvas || !ctx) return;
      width = canvas.parentElement ? canvas.parentElement.offsetWidth : 520;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", handleResize);

    // Build network layers
    const layers: Node[][] = [];
    for (let l = 0; l < LAYER_COUNT; l++) {
      const count = l === 0 || l === LAYER_COUNT - 1 ? 4 : NODE_COUNT / 2;
      const nodes: Node[] = [];
      for (let n = 0; n < count; n++) {
        const y = lerp(60, height - 60, n / (count - 1));
        const x = lerp(80, width - 80, l / (LAYER_COUNT - 1));
        const r = randomBetween(13, 18);
        nodes.push({
          x,
          y: y + randomBetween(-10, 10),
          r,
          pulse: Math.random() * Math.PI * 2,
          base: r,
          color: COLORS[l % COLORS.length],
          floatPhase: Math.random() * Math.PI * 2,
        });
      }
      layers.push(nodes);
    }

    // Build edges
    const edges: Edge[] = [];
    for (let l = 0; l < LAYER_COUNT - 1; l++) {
      for (const a of layers[l]) {
        for (const b of layers[l + 1]) {
          edges.push({ from: a, to: b, colorIdx: l % COLORS.length });
        }
      }
    }

    // Signal pulses
    const signals: Signal[] = [];
    function spawnSignal() {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      signals.push({
        edge,
        t: 0,
        speed: randomBetween(0.008, 0.018),
        color: COLORS[(edge.colorIdx + 1) % COLORS.length],
      });
    }

    // Animate
    let time = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Parallax offset
      const px = lerp(0, (parallax.current.x - 0.5) * 30, 0.7);
      const py = lerp(0, (parallax.current.y - 0.5) * 20, 0.7);

      // Edges with animated gradient
      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const grad = ctx.createLinearGradient(
          edge.from.x + px,
          edge.from.y + py,
          edge.to.x + px,
          edge.to.y + py,
        );
        grad.addColorStop(0, COLORS[edge.colorIdx]);
        grad.addColorStop(1, COLORS[(edge.colorIdx + 1) % COLORS.length]);
        ctx.save();
        ctx.globalAlpha = 0.16 + 0.08 * Math.sin(time * 0.02 + i);
        ctx.strokeStyle = grad;
        ctx.shadowColor = COLORS[edge.colorIdx];
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(edge.from.x + px, edge.from.y + py);
        ctx.lineTo(edge.to.x + px, edge.to.y + py);
        ctx.stroke();
        ctx.restore();
      }

      // Signal pulses
      for (const s of signals) {
        const { from, to } = s.edge;
        const x = lerp(from.x + px, to.x + px, s.t);
        const y = lerp(from.y + py, to.y + py, s.t);
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
      }

      // Nodes
      for (let l = 0; l < layers.length; l++) {
        for (const node of layers[l]) {
          // Breathe/float
          const float = Math.sin(time * 0.018 + node.floatPhase) * 7;
          const pulse =
            Math.sin(node.pulse + time * 0.012) * 3 + node.base + float;
          // Mouse interaction
          const dist = Math.hypot(
            mouse.current.x - (node.x + px),
            mouse.current.y - (node.y + py),
          );
          const highlight =
            mouse.current.active && dist < 60 ? lerp(0.5, 1, 1 - dist / 60) : 0;
          ctx.save();
          ctx.beginPath();
          ctx.arc(
            node.x + px,
            node.y + py,
            pulse + highlight * 8,
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = node.color;
          ctx.globalAlpha = 0.8 + highlight * 0.2;
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 22 + highlight * 18;
          ctx.fill();
          ctx.restore();
        }
      }
      time += 1;
      animationRef.current = requestAnimationFrame(draw);
    }

    function animate() {
      // Animate node pulses
      for (let l = 0; l < layers.length; l++) {
        for (const node of layers[l]) {
          node.pulse += 0.04 + Math.random() * 0.01;
        }
      }
      // Animate signals
      for (let i = signals.length - 1; i >= 0; i--) {
        signals[i].t += signals[i].speed;
        if (signals[i].t >= 1) signals.splice(i, 1);
      }
      // Occasionally spawn a new signal
      if (Math.random() < 0.06) spawnSignal();
      draw();
    }
    animate();

    function handleMouse(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x =
        ((e.clientX - rect.left) / (rect.right - rect.left)) * width;
      mouse.current.y =
        ((e.clientY - rect.top) / (rect.bottom - rect.top)) * height;
      mouse.current.active = true;
      parallax.current.x = (e.clientX - rect.left) / rect.width;
      parallax.current.y = (e.clientY - rect.top) / rect.height;
    }
    function handleLeave() {
      mouse.current.active = false;
      parallax.current.x = 0.5;
      parallax.current.y = 0.5;
    }
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouse);
        canvas.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <canvas
        ref={canvasRef}
        width={520}
        height={320}
        className="rounded-2xl shadow-2xl border border-white/20 bg-black/30 backdrop-blur-md"
        style={{ maxWidth: "100%", height: "320px", margin: "0 auto" }}
        aria-label="Animated neural network"
      />
    </div>
  );
}
