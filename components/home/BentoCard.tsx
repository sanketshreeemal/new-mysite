"use client";

import { useState, useRef } from "react";
import { type BadgeType } from "@/config/bento";
import MiiloVisual from "./bento-visuals/MiiloVisual";
import PokerUpVisual from "./bento-visuals/PokerUpVisual";
import UrbanLeasesVisual from "./bento-visuals/UrbanLeasesVisual";
import SevenQiVisual from "./bento-visuals/SevenQiVisual";

/* ─── Visual map for bespoke card canvases ─── */
const cardVisuals: Record<string, React.ReactNode> = {
  miilo: <MiiloVisual />,
  pokerup: <PokerUpVisual />,
  urbanleases: <UrbanLeasesVisual />,
  sevenqi: <SevenQiVisual />,
};

interface BentoCardProps {
  id: string;
  title: string;
  badge: BadgeType;
  subtitle: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BentoCard({
  id,
  title,
  badge,
  subtitle,
  href,
  className = "",
  style,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const content = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full"
    >
      {/* Layer 1 — Bespoke Animated Canvas Visual */}
      {cardVisuals[id]}

      {/* Layer 2 — Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="pointer-events-none absolute inset-0 z-15 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(165, 124, 91, 0.08), transparent 75%)`,
          }}
        />
      )}

      {/* Layer 3 — Crisp Border Sheen */}
      <div className="absolute inset-0 z-10 border border-black/5 group-hover:border-clay/35 transition-colors duration-500 pointer-events-none" />

      {/* External Link Indicator */}
      {href && (
        <div className="absolute top-3.5 right-3.5 z-30 text-[11px] font-sans font-medium text-carbon/40 group-hover:text-clay transition-colors duration-300">
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">↗</span>
        </div>
      )}

      {/* Layer 4 — Information Layer */}
      <div className="relative z-20 flex h-full flex-col justify-end p-4 sm:p-5">
        <span className="bento-badge mb-1">{badge}</span>
        <h3 className="bento-title mb-1 flex items-center gap-1.5 font-heading text-lg sm:text-xl font-normal text-carbon">
          {title}
        </h3>
        <p className="bento-subtitle font-sans text-xs text-carbon/75 leading-relaxed max-w-[95%]">
          {subtitle}
        </p>
      </div>
    </div>
  );

  const cardClasses = `bento-card group relative overflow-hidden rounded-[4px] border-[0.5px] border-carbon/15 bg-white/70 backdrop-blur-md shadow-xs transition-all duration-500 hover:shadow-sm ${
    href ? "cursor-pointer hover:border-clay/35" : ""
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardClasses} style={style}>
      {content}
    </div>
  );
}
