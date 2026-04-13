"use client";

import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Curated Interests — Triptych Section
   ───────────────────────────────────────────────────────────────────────────
   Three rectangular panels in a triptych layout:
     • I Read a Lot    → Books that shaped thinking
     • I Travel a Lot  → Corners of the world
     • I Think a Lot   → Ideas currently subscribed to

   All three illustrations are canvas-based (requestAnimationFrame) to avoid
   styled-jsx scoping issues. They share a synchronized loop cycle.

   Design Tokens (component-scoped):
     Card:  background: rgba(255,255,255,0.6) over bone, 0.5px border,
            4px radius, liquid glass blur
     Canvas: Clay (#A57C5B) strokes, animated via requestAnimationFrame
     Type:   Inter (headings/body), Newsreader (card titles)
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Component-scoped design tokens ─── */
const T = {
  /* Palette */
  bone: "#F9F9F9",
  carbon: "#1A1A1A",
  clay: "#A57C5B",
  clayLight: "rgba(165, 124, 91, 0.08)",
  clayMedium: "rgba(165, 124, 91, 0.18)",

  /* Card surface */
  cardBg: "rgba(255, 255, 255, 0.55)",
  cardBgHover: "rgba(255, 255, 255, 0.80)",
  cardBorder: "rgba(26, 26, 26, 0.12)",
  cardBorderHover: "rgba(165, 124, 91, 0.35)",
  cardRadius: "4px",
  cardBlur: "14px",

  /* Canvas illustration */
  svgBg: "rgba(249, 249, 249, 0.45)",

  /* Typography */
  headingColor: "rgba(26, 26, 26, 0.90)",
  subtitleColor: "rgba(26, 26, 26, 0.50)",
  buttonColor: "rgba(26, 26, 26, 0.70)",
  buttonHoverColor: "#A57C5B",

  /* Spacing */
  svgHeight: "242px",
} as const;

/* ─── Shared animation timing ─── */
const CYCLE_MS = 6000;   /* All three illustrations loop on 6 seconds        */
const HOLD_MS = 1200;    /* Hold the completed drawing before fading out      */
const FADE_MS = 600;     /* Fade-out duration at end of cycle                 */

/* ─── Panel data ─── */
const panels = [
  {
    id: "read",
    heading: "I Read a Lot",
    subtitle: "Books that have shaped my thinking",
    cta: "My Library",
    href: "/library",
  },
  {
    id: "travel",
    heading: "I Travel a Lot",
    subtitle: "Corners of the world that furnish my memories",
    cta: "My World",
    href: "/travel",
  },
  {
    id: "think",
    heading: "I Think a Lot",
    subtitle: "Ideas I currently subscribe to",
    cta: "My Mind",
    href: "/ideas",
  },
] as const;

/* ─── Helpers ─── */

/** Shared canvas setup — returns context + logical dimensions, scaled for DPR */
function setupCanvas(canvas: HTMLCanvasElement, w: number, h: number) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);
  return ctx;
}

/** Easing: cubic ease-out */
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/* ═══════════════════════════════════════════════════════════════════════════
   Canvas Illustrations (all requestAnimationFrame-based)
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Book ── */
function BookCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const anim = useRef<number>(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 280, H = 180;
    const ctx = setupCanvas(canvas, W, H);

    /* Spine geometry */
    const spineX = 70, spineTop = 30, spineBot = 150;

    /* Text lines: { y, width } */
    const lines = Array.from({ length: 8 }, (_, i) => ({
      y: 46 + i * 14,
      w: i % 3 === 2 ? 100 : i % 2 === 0 ? 130 : 115,
    }));
    const lineStartX = 86;

    /* Drawing phase budgets (within the draw window) */
    const drawWindow = CYCLE_MS - HOLD_MS - FADE_MS; /* ms available for drawing */
    const spineDur = drawWindow * 0.18;              /* 18% for spine            */
    const linesDur = drawWindow * 0.82;              /* 82% for text lines       */
    const perLine = linesDur / lines.length;

    const start = performance.now();

    function draw(now: number) {
      const elapsed = (now - start) % CYCLE_MS;
      ctx.clearRect(0, 0, W, H);

      /* Global alpha for fade-out at end of cycle */
      let globalAlpha = 1;
      if (elapsed > CYCLE_MS - FADE_MS) {
        globalAlpha = 1 - (elapsed - (CYCLE_MS - FADE_MS)) / FADE_MS;
      }

      /* ── Phase 1: Draw spine ── */
      const spineProgress = Math.min(elapsed / spineDur, 1);
      const spineEased = easeOut(spineProgress);

      if (spineEased > 0) {
        const currentBot = spineTop + (spineBot - spineTop) * spineEased;
        ctx.save();
        ctx.globalAlpha = 0.45 * globalAlpha;
        ctx.strokeStyle = "#A57C5B";
        ctx.lineCap = "round";

        /* Main spine */
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(spineX, spineTop);
        ctx.lineTo(spineX, currentBot);
        ctx.stroke();

        /* Top serif (visible immediately) */
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(spineX - 5, spineTop);
        ctx.lineTo(spineX + 5, spineTop);
        ctx.stroke();

        /* Bottom serif (visible once spine is complete) */
        if (spineProgress >= 1) {
          ctx.beginPath();
          ctx.moveTo(spineX - 5, spineBot);
          ctx.lineTo(spineX + 5, spineBot);
          ctx.stroke();
        }
        ctx.restore();
      }

      /* ── Phase 2: Draw text lines one by one ── */
      const linesElapsed = Math.max(elapsed - spineDur, 0);

      lines.forEach((line, i) => {
        const lineStart = i * perLine;
        const lineProgress = Math.min(Math.max((linesElapsed - lineStart) / (perLine * 0.7), 0), 1);
        const lineEased = easeOut(lineProgress);

        if (lineEased > 0) {
          ctx.save();
          ctx.globalAlpha = 0.45 * globalAlpha * lineEased;
          ctx.strokeStyle = "#A57C5B";
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(lineStartX, line.y);
          ctx.lineTo(lineStartX + line.w * lineEased, line.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      anim.current = requestAnimationFrame(draw);
    }

    anim.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(anim.current);
  }, []);

  return (
    <canvas
      ref={ref}
      className="curated-svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

/* ── Landscape ── */
function LandscapeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const anim = useRef<number>(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 280, H = 180;
    const ctx = setupCanvas(canvas, W, H);

    /* Mountain range points */
    const points: [number, number][] = [
      [-10, 130], [30, 130], [55, 85], [75, 105], [100, 50],
      [125, 80], [145, 65], [160, 95], [185, 35], [210, 75],
      [230, 60], [250, 90], [270, 110], [290, 130],
    ];

    /* Pre-compute cumulative segment lengths for path tracing */
    const segLengths: number[] = [0];
    for (let i = 1; i < points.length; i++) {
      const dx = points[i][0] - points[i - 1][0];
      const dy = points[i][1] - points[i - 1][1];
      segLengths.push(segLengths[i - 1] + Math.sqrt(dx * dx + dy * dy));
    }
    const totalLen = segLengths[segLengths.length - 1];

    const drawWindow = CYCLE_MS - HOLD_MS - FADE_MS;
    const pathDur = drawWindow; /* Full draw window — matches book pacing */

    const start = performance.now();

    function draw(now: number) {
      const elapsed = (now - start) % CYCLE_MS;
      ctx.clearRect(0, 0, W, H);

      /* Global alpha for fade-out */
      let globalAlpha = 1;
      if (elapsed > CYCLE_MS - FADE_MS) {
        globalAlpha = 1 - (elapsed - (CYCLE_MS - FADE_MS)) / FADE_MS;
      }

      /* ── Horizon line (always visible) ── */
      ctx.save();
      ctx.globalAlpha = 0.20 * globalAlpha;
      ctx.strokeStyle = "#A57C5B";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, 130);
      ctx.lineTo(W, 130);
      ctx.stroke();
      ctx.restore();

      /* ── Mountain path — progressive draw ── */
      const pathProgress = Math.min(elapsed / pathDur, 1);
      const pathEased = easeOut(pathProgress);
      const drawLen = totalLen * pathEased;

      if (drawLen > 0) {
        ctx.save();
        ctx.globalAlpha = 0.50 * globalAlpha;
        ctx.strokeStyle = "#A57C5B";
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);

        for (let i = 1; i < points.length; i++) {
          if (segLengths[i] <= drawLen) {
            /* Full segment */
            ctx.lineTo(points[i][0], points[i][1]);
          } else {
            /* Partial segment — interpolate */
            const segStart = segLengths[i - 1];
            const segEnd = segLengths[i];
            const t = (drawLen - segStart) / (segEnd - segStart);
            const ix = points[i - 1][0] + (points[i][0] - points[i - 1][0]) * t;
            const iy = points[i - 1][1] + (points[i][1] - points[i - 1][1]) * t;
            ctx.lineTo(ix, iy);
            break;
          }
        }
        ctx.stroke();
        ctx.restore();
      }


      anim.current = requestAnimationFrame(draw);
    }

    anim.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(anim.current);
  }, []);

  return (
    <canvas
      ref={ref}
      className="curated-svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

/* ── Constellation ── */
function ConstellationCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const anim = useRef<number>(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 280, H = 180;
    const ctx = setupCanvas(canvas, W, H);

    /* Node positions — roughly polygonal / constellation shape */
    const baseNodes = [
      { x: 140, y: 50 },
      { x: 195, y: 70 },
      { x: 210, y: 120 },
      { x: 170, y: 145 },
      { x: 110, y: 145 },
      { x: 70, y: 120 },
      { x: 85, y: 70 },
      { x: 140, y: 98 },  /* center node */
    ];

    /* Edges */
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0],
      [0, 7], [2, 7], [4, 7], [6, 7],
    ];

    const cx = W / 2;
    const cy = H / 2;

    function draw(t: number) {
      ctx.clearRect(0, 0, W, H);

      const angle = t * 0.0003; /* slow continuous rotation */
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      /* Apply a gentle 3D-like rotation around center */
      const projected = baseNodes.map((n) => {
        const dx = n.x - cx;
        const dy = n.y - cy;
        const rx = dx * cosA - dy * sinA * 0.15;
        const ry = dx * sinA * 0.15 + dy * cosA;
        const scale = 1 + sinA * 0.08;
        return { x: cx + rx * scale, y: cy + ry * scale };
      });

      /* Draw edges */
      ctx.strokeStyle = "rgba(165, 124, 91, 0.25)";
      ctx.lineWidth = 0.8;
      edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      });

      /* Draw nodes */
      projected.forEach((p, idx) => {
        const r = idx === 7 ? 3.5 : 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = idx === 7
          ? "rgba(165, 124, 91, 0.80)"
          : "rgba(165, 124, 91, 0.50)";
        ctx.fill();
      });

      anim.current = requestAnimationFrame(draw);
    }

    anim.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(anim.current);
  }, []);

  return (
    <canvas
      ref={ref}
      className="curated-svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

/* ─── Illustration lookup ─── */
const illustrations: Record<string, React.ReactNode> = {
  read: <BookCanvas />,
  travel: <LandscapeCanvas />,
  think: <ConstellationCanvas />,
};

/* ═══════════════════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════════════════ */

export default function CuratedInterests() {
  return (
    <section id="curated-interests" className="w-full mt-28">
      {/* ── Section heading — matches project convention ── */}
      <div className="w-full pb-6">
        <p className="section-heading">Curated Interests</p>
        <p
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "0.75rem",
            color: "rgba(26, 26, 26, 0.50)",
            maxWidth: "32rem",
            lineHeight: 1.55,
          }}
        >
          Pockets of curiosity that shape how I see — and build for — the world.
        </p>
      </div>

      {/* ── Triptych grid ── */}
      <div className="curated-triptych">
        {panels.map((panel) => (
          <article key={panel.id} className="curated-card group">
            {/* Top half — Canvas illustration */}
            <div className="curated-card__canvas">
              {illustrations[panel.id]}
            </div>

            {/* Divider */}
            <div className="curated-card__divider" />

            {/* Bottom half — Copy */}
            <div className="curated-card__content">
              <h3 className="curated-card__heading">{panel.heading}</h3>
              <p className="curated-card__subtitle">{panel.subtitle}</p>
              <a href={panel.href} className="curated-card__cta">
                {panel.cta}
                <span className="curated-card__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* ── Component-scoped styles ── */}
      <style jsx>{`
        /* ── Triptych layout ── */
        .curated-triptych {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 820px) {
          .curated-triptych {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        /* ── Card ── */
        .curated-card {
          border-radius: ${T.cardRadius};
          border: 0.5px solid ${T.cardBorderHover};
          background: ${T.cardBgHover};
          box-shadow: 0 2px 24px rgba(165, 124, 91, 0.06);
          backdrop-filter: blur(${T.cardBlur});
          -webkit-backdrop-filter: blur(${T.cardBlur});
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── Canvas (top half) ── */
        .curated-card__canvas {
          position: relative;
          width: 100%;
          height: ${T.svgHeight};
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${T.svgBg};
          overflow: hidden;
        }

        /* Shared canvas sizing */
        .curated-card__canvas :global(.curated-svg) {
          width: 80%;
          height: 80%;
          display: block;
        }

        /* ── Divider ── */
        .curated-card__divider {
          height: 0.5px;
          background: ${T.clayMedium};
        }

        /* ── Content (bottom half) ── */
        .curated-card__content {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .curated-card__heading {
          font-family: var(--font-newsreader), serif;
          font-size: 1.35rem;
          line-height: 1.15;
          color: ${T.carbon};
          margin: 0;
        }

        .curated-card__subtitle {
          font-family: var(--font-sans), sans-serif;
          font-size: 0.72rem;
          line-height: 1.45;
          color: rgba(26, 26, 26, 0.65);
          margin: 0 0 6px;
        }

        .curated-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans), sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.buttonColor};
          text-decoration: none;
          margin-top: auto;
          padding-top: 8px;
          transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .curated-card__cta:hover {
          color: ${T.buttonHoverColor};
        }

        .curated-card__arrow {
          display: inline-block;
          font-size: 0.8rem;
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .curated-card__cta:hover .curated-card__arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
