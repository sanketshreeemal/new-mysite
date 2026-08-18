"use client";

import { bentoCards } from "@/config/bento";
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  return (
    <section id="identity-grid" className="w-full">
      {/* Section label */}
      <div className="w-full pb-8 mt-10">
        <p className="section-heading">
          Bird's Eye View of /Work
        </p>
        <p className="section-subheading">
          Where tokens, time and capital meet
        </p>
      </div>

      {/* Desktop Grid (3×3) */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-[minmax(125px,1fr)_minmax(125px,1fr)_minmax(75px,auto)] gap-3">
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
                  ? "min-h-[100px]"
                  : card.id === "miilo"
                    ? "min-h-[200px]"
                    : "min-h-[125px]"
              }
            />
          ))}
      </div>
    </section>
  );
}
