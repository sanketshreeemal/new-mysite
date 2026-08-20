"use client";

import { useEffect, useRef } from "react";

export default function MiiloVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // True Straight-Line Medical ECG Heartbeat Generator
    const getStraightEcgY = (x: number, W: number, H: number, p: number) => {
      const centerY = H * 0.60;
      const cycleLen = 220;
      const pos = (x + p * 100) % cycleLen;

      // Baseline
      if (pos < 70) return centerY;
      // P wave
      if (pos >= 70 && pos < 80) return centerY - 5 * ((pos - 70) / 10);
      if (pos >= 80 && pos < 90) return centerY - 5 * (1 - (pos - 80) / 10);
      // PR segment
      if (pos >= 90 && pos < 105) return centerY;
      // Q dip
      if (pos >= 105 && pos < 110) return centerY + 5 * ((pos - 105) / 5);
      // R spike (sharp straight peak)
      if (pos >= 110 && pos < 120) return (centerY + 5) - 36 * ((pos - 110) / 10);
      // S dip (sharp straight valley)
      if (pos >= 120 && pos < 130) return (centerY - 31) + 40 * ((pos - 120) / 10);
      // Return to baseline
      if (pos >= 130 && pos < 135) return (centerY + 9) - 9 * ((pos - 130) / 5);
      // ST segment
      if (pos >= 135 && pos < 150) return centerY;
      // T wave
      if (pos >= 150 && pos < 165) return centerY - 8 * ((pos - 150) / 15);
      if (pos >= 165 && pos < 180) return centerY - 8 * (1 - (pos - 165) / 15);
      // Baseline
      return centerY;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      if (W === 0 || H === 0) return;

      ctx.clearRect(0, 0, W, H);
      phase += 0.015;

      // Draw Medical ECG Heartbeat Line in Clay (#A57C5B)
      ctx.save();
      ctx.strokeStyle = "rgba(165, 124, 91, 0.40)";
      ctx.lineWidth = 1.8;
      ctx.lineCap = "square";
      ctx.lineJoin = "miter";
      ctx.beginPath();

      for (let x = 0; x < W; x += 1) {
        const y = getStraightEcgY(x, W, H, phase);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Single Looping Heartbeat Dot along the ECG Line
      const travelX = (phase * 100) % W;
      const travelY = getStraightEcgY(travelX, W, H, phase);

      ctx.fillStyle = "rgba(165, 124, 91, 0.85)";
      ctx.beginPath();
      ctx.arc(travelX, travelY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

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
      {/* Background ambient warmth */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full bg-gradient-to-br from-[#A57C5B]/10 via-transparent to-transparent blur-2xl" />

      {/* Canvas for Straight ECG Heartbeat Wave */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />

      {/* Editorial Structured Intake Form Micro-Widget — Translucent & Aligned to Card Content Margins */}
      <div className="absolute top-4 left-4 sm:left-5 right-10 sm:right-12 p-2.5 rounded-md bg-clay/5 backdrop-blur-md border border-carbon/10 shadow-xs z-20 space-y-2">
        <div className="flex items-center justify-between border-b border-carbon/10 pb-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-carbon/80">
              Miilo Structured Intake
            </span>
          </div>
          <span className="text-[9px] font-mono text-carbon/50">Queue: 2 Active</span>
        </div>

        {/* Patient Line 1: Toby */}
        <div className="space-y-0.5 font-sans text-[9.5px] text-carbon/75">
          <div className="flex items-center justify-between">
            <span>Patient: <strong className="font-semibold text-carbon">Toby (Golden Retriever)</strong></span>
            <span className="text-[8.5px] font-semibold text-clay bg-clay/10 px-1.5 py-0.2 rounded">
              Photos (2) ✓
            </span>
          </div>
          <div className="flex items-center justify-between text-carbon/55 text-[9px]">
            <span>Symptom: Lethargy (24h)</span>
            <span className="text-carbon/60 italic">Pre-Appointment Triage</span>
          </div>
        </div>

        {/* Patient Line 2: Luna */}
        <div className="space-y-0.5 font-sans text-[9.5px] text-carbon/75 pt-1.5 border-t border-carbon/10">
          <div className="flex items-center justify-between">
            <span>Patient: <strong className="font-semibold text-carbon">Luna (Siamese Cat)</strong></span>
            <span className="text-[8.5px] font-semibold text-carbon/80 bg-carbon/5 px-1.5 py-0.2 rounded">
              Lab Review
            </span>
          </div>
          <div className="flex items-center justify-between text-carbon/55 text-[9px]">
            <span>Symptom: Appetite Loss (12h)</span>
            <span className="text-carbon/60 italic">Follow-up Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
