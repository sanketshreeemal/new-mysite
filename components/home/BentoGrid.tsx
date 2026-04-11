"use client";

import { bentoCards } from "@/config/bento";
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  return (
    <section id="identity-grid" className="w-full">
      {/* Section label */}
      <p className="section-heading">
        Identity Grid
      </p>

      {/* Desktop Grid (3×3) */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-[minmax(200px,1fr)_minmax(200px,1fr)_minmax(140px,auto)] gap-3">
        {bentoCards.map((card) => (
          <BentoCard
            key={card.id}
            id={card.id}
            title={card.title}
            badge={card.badge}
            subtitle={card.subtitle}
            style={{ gridArea: card.gridArea }}
          />
        ))}
      </div>

      {/* Mobile Stack (single column) */}
      <div className="flex flex-col gap-3 md:hidden">
        {[...bentoCards]
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((card) => (
            <BentoCard
              key={card.id}
              id={card.id}
              title={card.title}
              badge={card.badge}
              subtitle={card.subtitle}
              className={
                card.id === "sevenqi"
                  ? "min-h-[140px]"
                  : card.id === "miilo"
                    ? "min-h-[280px]"
                    : "min-h-[200px]"
              }
            />
          ))}
      </div>
    </section>
  );
}
