"use client";

import Link from "next/link";

const panels = [
  {
    id: "read",
    num: "01",
    tag: "/LIBRARY",
    heading: "I Read a Lot",
    subtitle: "Books and content that have shaped my thinking, mental models, and decision-making.",
    cta: "Explore Library",
    href: "/interests/library",
  },
  {
    id: "travel",
    num: "02",
    tag: "/WORLD",
    heading: "I Travel a Lot",
    subtitle: "Corners of the world that furnish my memories and broaden my perspective.",
    cta: "Explore Travel",
    href: "/interests/world",
  },
  {
    id: "think",
    num: "03",
    tag: "/IDEAS",
    heading: "I Think a Lot",
    subtitle: "Ideas, essays, and frameworks I am currently subscribing to.",
    cta: "Explore Ideas",
    href: "/interests/ideas",
  },
] as const;

export default function CuratedInterests() {
  return (
    <section id="curated-interests" className="w-full mt-24 sm:mt-28">
      {/* Section Header */}
      <div className="w-full pb-6 sm:pb-8">
        <p className="section-heading">Curated /Interests</p>
        <p className="section-subheading">
          Pockets of curiosity that shape how I interact with the world.
        </p>
      </div>

      {/* Ultra-Clean Editorial Triptych Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {panels.map((panel) => (
          <Link
            key={panel.id}
            href={panel.href}
            className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[4px] border-[0.5px] border-carbon/15 bg-white/70 backdrop-blur-md transition-all duration-500 hover:border-clay/40 hover:shadow-xs hover:bg-white/90"
          >
            {/* Top Index & Tag */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-clay/80 tracking-widest">
                  {panel.num}
                </span>
                <span className="font-sans text-[10px] font-semibold text-carbon/40 tracking-wider uppercase">
                  {panel.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-xl sm:text-2xl font-normal text-carbon group-hover:text-clay transition-colors duration-300 mb-2">
                {panel.heading}
              </h3>
              <p className="font-sans text-xs text-carbon/65 leading-relaxed">
                {panel.subtitle}
              </p>
            </div>

            {/* Bottom CTA Bar */}
            <div className="mt-8 pt-4 border-t border-carbon/10 flex items-center justify-between text-xs font-sans font-medium text-carbon/60 group-hover:text-clay transition-colors duration-300">
              <span className="tracking-wide text-[11px] uppercase font-semibold">
                {panel.cta}
              </span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
