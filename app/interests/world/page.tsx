import type { Metadata } from "next";
import TravelJourney from "@/components/travel/TravelJourney";

export const metadata: Metadata = {
  title: "Travel | Sanket Shreemal",
  description: "Corners of the world that furnish my memories.",
};

export default function TravelPage() {
  return (
    <div className="relative">
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-6 pb-10 md:pt-10 md:pb-14">
        {/* Header */}
        <header className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-clay font-sans font-semibold mb-2">
            <span>Interests</span>
            <span>/</span>
            <span>Travelling</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-3">
            Travel &amp; Exploration
          </h1>

          <span className="block text-clay italic text-sm sm:text-base">
            Corners of the world that furnish my memories.
          </span>
        </header>

        {/* Journey */}
        <div className="min-h-[40vh]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <TravelJourney />
          </div>
        </div>
      </main>
    </div>
  );
}
