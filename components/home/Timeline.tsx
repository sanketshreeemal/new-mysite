"use client";

import { useState, useEffect, useRef } from "react";
import {
  timelineData,
  type TimelineEntry,
  type TimelineBeat,
  type TimelineYearBlock,
} from "@/config/timeline";

/* ─── Sub-components ─── */

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

/* ─── Main Component ─── */

export default function Timeline() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sets isSticky to true when the sentinel leaves the viewport at the top
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-30px 0px 0px 0px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="parallel-pulse" className="w-full mt-24">
      {/* Section heading — matches project convention */}
      <div className="w-full pb-4">
        <p className="section-heading">Parallel Pulse</p>
        <p className="font-sans text-xs text-carbon/50 max-w-lg leading-relaxed">
          Mapping professional bandwidth: institutional systems versus
          high-velocity venture building.
        </p>
      </div>

      {/* Timeline body */}
      <div className="timeline-wrapper">
        {/* The Spine */}
        <div className="timeline-spine" style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }} />

        {/* Track Labels — sticky header */}
        <div ref={sentinelRef} className="absolute w-full h-px top-[28px]" aria-hidden="true" />
        <div className="timeline-track-labels relative">
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[42px] rounded-full transition-all duration-[500ms] cubic-bezier(0.16,1,0.3,1) -z-10 ${isSticky ? "w-[94%] lg:w-[1020px] bg-white/70 backdrop-blur-[3px] shadow-[0_4px_32px_rgba(26,26,26,0.06)] border border-black/5 opacity-100 scale-100" : "w-[90%] lg:w-[960px] bg-transparent border-transparent opacity-0 scale-95"
              }`}
          />
          <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Institutional</div>
          <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Entrepreneurial</div>
        </div>

        {/* Container for Expanded area + Bleeding Gradient */}
        <div className="relative w-full">
          {/* Expandable/Collapsible wrapper for Year Blocks */}
          <div
            className={`relative w-full overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? "max-h-[3500px]" : "max-h-[690px]"
              } -mt-6 pt-6`}
          >
            {/* Year blocks */}
            {timelineData.map((block) => (
              <YearBlock key={`y-${block.year}`} block={block} />
            ))}
          </div>

          {/* Fade/Blur Gradient at the bottom 
              Moved OUTSIDE overflow-hidden wrapper to allow horizontal bleeding (110vw limitlessly blurring the pill edges) 
          */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[110vw] h-[120px] bg-gradient-to-t from-[#F9F9F9] via-[#F9F9F9]/90 to-transparent pointer-events-none z-40 transition-opacity duration-[1500ms] ${isExpanded ? "opacity-0" : "opacity-100 backdrop-blur-[3px]"
              }`}
          />
        </div>

        {/* Toggle Button */}
        <div className="relative w-full flex justify-center -mt-8 pt-0 z-50">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-carbon/70 hover:text-clay transition-colors"
          >
            {isExpanded ? "Show Less" : "Show More"}
            <span
              className={`transform transition-transform duration-300 ease-in-out inline-block ${isExpanded ? "rotate-180 group-hover:-translate-y-1" : "rotate-0 group-hover:translate-y-1"
                }`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
