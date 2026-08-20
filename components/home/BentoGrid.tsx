"use client";

import { bentoCards } from "@/config/bento";
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  return (
    <section id="identity-grid" className="w-full">
      {/* Section label */}
      <div className="w-full pb-8 mt-10">
        <p className="section-heading">
          Bird&apos;s Eye View of /Work
        </p>
        <p className="section-subheading">
          Where tokens, time and capital meet
        </p>
      </div>

      {/* Desktop Grid (3×3) */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-[minmax(150px,1fr)_minmax(150px,1fr)_minmax(110px,auto)] gap-3.5">
        {bentoCards.map((card) => (
          <BentoCard
            key={card.id}
            id={card.id}
            title={card.title}
            badge={card.badge}
            subtitle={card.subtitle}
            href={card.href}
            style={{ gridArea: card.gridArea }}
          />
        ))}
      </div>

      {/* Mobile Stack (single column) */}
      <div className="flex flex-col gap-3.5 md:hidden">
        {[...bentoCards]
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((card) => (
            <BentoCard
              key={card.id}
              id={card.id}
              title={card.title}
              badge={card.badge}
              subtitle={card.subtitle}
              href={card.href}
              className={
                card.id === "sevenqi"
                  ? "min-h-[120px]"
                  : card.id === "miilo"
                    ? "min-h-[220px]"
                    : "min-h-[140px]"
              }
            />
          ))}
      </div>
    </section>
  );
}
