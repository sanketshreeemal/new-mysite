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
  return (
    <div className="beat-container" style={{ top: `${beat.topOffset}px` }}>
      <div
        className="beat-dot"
        style={beat.isMilestone ? { background: "var(--color-clay)" } : {}}
      />
      <div
        className={`beat-label ${beat.side === "left" ? "label-l" : "label-r"}`}
        style={beat.isMilestone ? { color: "var(--color-clay)" } : {}}
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
        <div className="timeline-track-labels">
          <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Institutional / Capital</div>
          <div className="timeline-track-label" style={{ color: "rgba(26, 26, 26, 0.7)" }}>Venture / Building</div>
        </div>

        {/* Year blocks */}
        {timelineData.map((block) => (
          <YearBlock key={`y-${block.year}`} block={block} />
        ))}
      </div>
    </section>
  );
}
