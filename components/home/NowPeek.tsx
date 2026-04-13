import { getCurrentNowEntry } from "@/config/now";

/**
 * NowPeek — compact "What I'm Up To Now" component for the Hero section.
 *
 * Renders the current now entry's home summary with:
 * - "as of [date]" timestamp
 * - Bullet points from the home summary
 * - "Learn More →" link to /now (navigation wired later)
 */
export default function NowPeek() {
  const current = getCurrentNowEntry();

  /* Format date as "Apr 2026" style */
  const formatted = new Date(current.date + "T00:00:00").toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" }
  );

  return (
    <div className="flex flex-col items-start gap-3 w-full max-w-lg">
      {/* ── Header ── */}
      <div className="w-full">
        <p className="section-heading !mb-1">What I&rsquo;m Up To</p>

        {/* ── Timestamp ── */}
        <p className="font-sans text-xs text-carbon/60 italic mt-1">
          as of {formatted}
        </p>
      </div>

      {/* ── Bullet list ── */}
      <ul className="flex flex-col gap-2 mt-2">
        {current.home.map((item, i) => (
          <li key={i} className="flex items-start gap-1">
            <span className="text-clay text-sm flex-shrink-0 mt-0.5">•</span>
            <span className="font-sans text-sm md:text-[0.9rem] text-carbon/80 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* ── CTA ── */}
      <a
        href="/now"
        className="mt-3 group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-carbon/70 hover:text-clay transition-colors"
      >
        Learn More
        <span
          className="group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </div>
  );
}
