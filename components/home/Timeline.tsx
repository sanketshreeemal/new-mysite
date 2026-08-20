"use client";

import { useState, useEffect, useRef } from "react";
import {
  timelineData,
  type TimelineEntry,
  type TimelineBeat,
  type TimelineYearBlock,
} from "@/config/timeline";

/* ─── Desktop Sub-components ─── */

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const typeClass =
    entry.type === "wide"
      ? "wide"
      : entry.type === "split-left"
        ? "split-left"
        : "split-right";

  return (
    <div
      className={`timeline-card ${typeClass} ${entry.active ? "active" : ""}`}
      style={{
        top: `${entry.topOffset}px`,
        ...(entry.minHeight ? { minHeight: `${entry.minHeight}px` } : {}),
      }}
    >
      <span className="timeline-badge">{entry.badge}</span>
      {entry.active && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            zIndex: 12,
            backgroundColor: "var(--color-bone)",
            border: "0.5px solid rgba(74, 222, 128, 0.25)",
            borderRadius: "999px",
            padding: "4px 10px 4px 8px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#4ade80",
              boxShadow: "0 0 0 0 rgba(74, 222, 128, 0.5)",
              animation: "active-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "0.5rem",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              color: "#4ade80",
            }}
          >
            Active
          </span>
        </span>
      )}
      <span className="timeline-title">{entry.title}</span>
      <p className="timeline-desc">{entry.description}</p>
    </div>
  );
}

function BeatNode({ beat }: { beat: TimelineBeat }) {
  const dotColor = beat.isMilestone ? "var(--color-clay)" : "var(--color-carbon)";

  return (
    <div className="beat-container" style={{ top: `${beat.topOffset}px` }}>
      <div
        className="beat-dot"
        style={{
          width: "10px",
          height: "10px",
          flexShrink: 0,
          backgroundColor: dotColor,
          border: `1px solid ${dotColor}`,
          borderRadius: "50%",
          display: "block",
          zIndex: 2,
        }}
      />
      <div
        className={`beat-label ${beat.side === "left" ? "label-l" : "label-r"}`}
        style={{
          ...(beat.isMilestone ? { color: "var(--color-clay)" } : {}),
          [beat.side === "left" ? "right" : "left"]: "12px",
        }}
      >
        {beat.label}
      </div>
    </div>
  );
}

function YearBlock({ block }: { block: TimelineYearBlock }) {
  const institutionalEntries = block.entries.filter(
    (e) => e.lane === "institutional"
  );
  const ventureEntries = block.entries.filter((e) => e.lane === "venture");

  return (
    <div
      className="timeline-year-block"
      style={{ height: `${block.height}px` }}
    >
      {/* Year marker on the spine */}
      <div className="timeline-year-marker" style={{ color: "rgba(26, 26, 26, 0.7)" }}>{block.year}</div>

      {/* Left lane — Institutional / Capital */}
      <div className="timeline-lane">
        {institutionalEntries.map((entry) => (
          <TimelineCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* Beat nodes on the spine */}
      {block.beats.map((beat) => (
        <BeatNode key={beat.id} beat={beat} />
      ))}

      {/* Right lane — Venture / Building */}
      <div className="timeline-lane">
        {ventureEntries.map((entry) => (
          <TimelineCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile Sub-components ─── */

function MobileTimelineCard({ entry }: { entry: TimelineEntry }) {
  const isVenture = entry.lane === "venture";

  return (
    <div
      className={`relative w-full rounded-[4px] border-[0.5px] p-4 bg-white/90 backdrop-blur-md shadow-xs transition-all flex flex-col justify-between ${
        entry.active ? "border-clay bg-[#f7f1ec]" : "border-carbon/20"
      }`}
    >
      <div>
        {/* Track & Role Badges */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`font-sans text-[9px] uppercase tracking-[0.15em] font-bold px-2 py-0.5 rounded-[2px] ${
              isVenture ? "text-clay bg-clay/10" : "text-carbon/80 bg-carbon/10"
            }`}
          >
            {isVenture ? "ENTREPRENEURIAL" : "INSTITUTIONAL"}
          </span>

          <div className="flex items-center gap-2">
            <span className="font-sans text-[9px] uppercase tracking-[0.1em] font-semibold text-carbon/60">
              {entry.badge}
            </span>
            {entry.active && (
              <span className="flex items-center gap-1 bg-white border border-green-400/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-sans text-[8px] font-bold text-green-500 uppercase tracking-widest">
                  Active
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-base font-normal text-carbon mb-1">
          {entry.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-carbon/75 leading-relaxed">
          {entry.description}
        </p>
      </div>

      {/* Right-aligned Year Span at Bottom of Card */}
      {entry.yearSpan && (
        <div className="mt-3 pt-2 border-t border-carbon/10 text-right">
          <span className="font-sans text-xs font-medium text-carbon/60 italic">
            {entry.yearSpan}
          </span>
        </div>
      )}
    </div>
  );
}

function MobileYearBlock({ block }: { block: TimelineYearBlock }) {
  if (block.entries.length === 0) return null;

  // Active entries float above completed entries on mobile
  const sortedEntries = [...block.entries].sort(
    (a, b) => (b.active ? 1 : 0) - (a.active ? 1 : 0)
  );

  return (
    <div className="relative w-full mb-8">
      {/* Year Marker Header */}
      <div className="flex items-center gap-3 mb-4 -ml-[7px]">
        <div className="w-3.5 h-3.5 rounded-full bg-clay border-2 border-bone z-10 shrink-0 shadow-xs" />
        <span className="font-heading italic text-base font-semibold text-carbon">
          {block.year}
        </span>
      </div>

      {/* Card Stream (Vertical Stack) */}
      <div className="flex flex-col gap-4 pl-4 border-l border-carbon/25 ml-1">
        {sortedEntries.map((entry) => (
          <MobileTimelineCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function Timeline() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-30px 0px 0px 0px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="parallel-pulse" className="w-full mt-14 md:mt-24">

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP VIEW (hidden on mobile, visible md+) — 100% UNTOUCHED
         ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div className="timeline-wrapper">
          {/* The Spine */}
          <div className="timeline-spine" style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }} />

          {/* Track Labels — sticky header */}
          <div ref={sentinelRef} className="absolute w-full h-px top-[28px]" aria-hidden="true" />
          <div className="timeline-track-labels relative">
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[42px] rounded-full transition-all duration-[500ms] cubic-bezier(0.16,1,0.3,1) -z-10 ${
                isSticky
                  ? "w-[94%] lg:w-[1020px] bg-white/70 backdrop-blur-[3px] shadow-[0_4px_32px_rgba(26,26,26,0.06)] border border-black/5 opacity-100 scale-100"
                  : "w-[90%] lg:w-[960px] bg-transparent border-transparent opacity-0 scale-95"
              }`}
            />
            <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Institutional</div>
            <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Entrepreneurial</div>
          </div>

          {/* Container for Expanded area + Bleeding Gradient */}
          <div className="relative w-full">
            <div
              className={`relative w-full overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isExpanded ? "max-h-[3500px]" : "max-h-[690px]"
              } -mt-6 pt-6`}
            >
              {timelineData.map((block) => (
                <YearBlock key={`y-${block.year}`} block={block} />
              ))}
            </div>

            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] scale-x-[1.15] md:scale-x-100 md:w-[110vw] h-[120px] bg-gradient-to-t from-[#F9F9F9] via-[#F9F9F9]/90 to-transparent pointer-events-none z-40 transition-opacity duration-[1500ms] ${
                isExpanded ? "opacity-0" : "opacity-100 backdrop-blur-[3px]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE VIEW (visible mobile, hidden md+) — Option 1 Single Spine Stream
         ══════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden relative w-full px-2">
        <div className="relative w-full">
          <div
            className={`relative w-full overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isExpanded ? "max-h-[3500px]" : "max-h-[720px]"
            }`}
          >
            {timelineData.map((block) => (
              <MobileYearBlock key={`m-y-${block.year}`} block={block} />
            ))}
          </div>

          {/* Mobile Fade Gradient */}
          <div
            className={`absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#F9F9F9] via-[#F9F9F9]/90 to-transparent pointer-events-none z-40 transition-opacity duration-[1500ms] ${
              isExpanded ? "opacity-0" : "opacity-100 backdrop-blur-[3px]"
            }`}
          />
        </div>
      </div>

      {/* Toggle Button — Shared for both views */}
      <div className="relative w-full flex justify-center mt-4 md:-mt-8 pt-0 z-50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-carbon/70 hover:text-clay transition-colors py-2 px-4 rounded-full bg-white/60 backdrop-blur-sm border border-carbon/10 shadow-xs"
        >
          {isExpanded ? "Show Less" : "Show More"}
          <span
            className={`transform transition-transform duration-300 ease-in-out inline-block ${
              isExpanded ? "rotate-180 group-hover:-translate-y-1" : "rotate-0 group-hover:translate-y-1"
            }`}
            aria-hidden="true"
          >
            ↓
          </span>
        </button>
      </div>
    </section>
  );
}
