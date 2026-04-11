"use client";

import { type BadgeType } from "@/config/bento";

/* ─── Placeholder gradient backgrounds per card theme ─── */
const placeholderBackgrounds: Record<string, string> = {
  miilo:
    "radial-gradient(ellipse at 30% 40%, rgba(220, 160, 130, 0.35) 0%, rgba(245, 215, 195, 0.2) 50%, transparent 80%)",
  sevenqi:
    "linear-gradient(135deg, rgba(160, 180, 200, 0.25) 0%, rgba(200, 210, 225, 0.15) 40%, rgba(220, 225, 235, 0.1) 100%)",
  pokerup:
    "linear-gradient(160deg, rgba(45, 45, 50, 0.3) 0%, rgba(165, 124, 91, 0.15) 60%, transparent 100%)",
  urbanleases:
    "linear-gradient(145deg, rgba(180, 180, 175, 0.2) 0%, rgba(200, 195, 190, 0.15) 50%, rgba(230, 225, 220, 0.1) 100%)",
};

interface BentoCardProps {
  id: string;
  title: string;
  badge: BadgeType;
  subtitle: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BentoCard({
  id,
  title,
  badge,
  subtitle,
  className = "",
  style,
}: BentoCardProps) {
  return (
    <div
      className={`bento-card group relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Layer 1 — Canvas Base (placeholder gradient) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: placeholderBackgrounds[id] ?? "transparent",
        }}
      />

      {/* Layer 2 — Liquid Glass (blur overlay) */}
      <div className="bento-glass absolute inset-0 z-10" />

      {/* Layer 3 — Information Layer */}
      <div className="relative z-20 flex h-full flex-col justify-end p-4 sm:p-5">
        <span className="bento-badge mb-1">{badge}</span>
        <h3 className="bento-title mb-1">{title}</h3>
        <p className="bento-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
