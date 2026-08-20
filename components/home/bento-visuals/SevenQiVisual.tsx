"use client";

import { useEffect, useRef } from "react";

export default function SevenQiVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      if (W === 0 || H === 0) return;

      ctx.clearRect(0, 0, W, H);
      time += 0.008;

      // 5 Harmonic Pure Wave Lines with varying line weights & slightly richer vertical amplitude
      const waves = [
        {
          color: "rgba(165, 124, 91, 0.40)", // Clay primary (bold weight)
          lineWidth: 2.2,
          freq: 0.005,
          amp: 28,
          speed: 1.2,
          yOffset: H * 0.45,
        },
        {
          color: "rgba(212, 163, 115, 0.32)", // Warm gold medium
          lineWidth: 1.5,
          freq: 0.008,
          amp: 34,
          speed: 0.85,
          yOffset: H * 0.42,
        },
        {
          color: "rgba(26, 26, 26, 0.14)", // Muted carbon
          lineWidth: 1.2,
          freq: 0.004,
          amp: 22,
          speed: 1.4,
          yOffset: H * 0.48,
        },
        {
          color: "rgba(165, 124, 91, 0.22)", // Clay hairline wave
          lineWidth: 0.8,
          freq: 0.009,
          amp: 38,
          speed: 1.0,
          yOffset: H * 0.38,
        },
        {
          color: "rgba(212, 163, 115, 0.25)", // Warm gold accent wave
          lineWidth: 1.0,
          freq: 0.006,
          amp: 20,
          speed: 1.6,
          yOffset: H * 0.52,
        },
      ];

      // Render pure wave paths (zero dots)
      waves.forEach((w) => {
        ctx.save();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.lineWidth;
        ctx.lineCap = "round";
        ctx.beginPath();

        for (let x = 0; x < W; x += 3) {
          const y =
            w.yOffset +
            Math.sin(x * w.freq + time * w.speed) * w.amp +
            Math.cos(x * w.freq * 0.5 + time * 0.5) * (w.amp * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {/* Organic ambient warmth glow using clay palette */}
      <div className="absolute top-[-25%] left-[25%] w-[50%] h-[150%] rounded-full bg-gradient-to-r from-[#A57C5B]/10 via-[#D4A373]/8 to-transparent blur-3xl" />

      {/* Pure Harmonic Capital Flow Wave Canvas (Zero Dots / Zero Text) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
    </div>
  );
}
