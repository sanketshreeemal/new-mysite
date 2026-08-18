import type { Metadata } from "next";
import { travelData } from "@/config/travel";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel | Sanket Shreemal",
  description: "Corners of the world that furnish my memories.",
};

export default function TravelPage() {
  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-6 pb-24 md:pt-10 md:pb-32">
        {/* Header */}
        <header className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-clay font-sans font-semibold mb-2">
            <span>Interests</span>
            <span>/</span>
            <span>Travelling</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-4">
            Travel
          </h1>

          <span className="block text-clay italic text-sm sm:text-base">
            &ldquo;Corners of the world that furnish my memories.&rdquo;
          </span>
        </header>

        {/* Content Area */}
        <div className="min-h-[40vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {travelData.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-6 rounded-[4px] bg-white/60 backdrop-blur-md border-[0.5px] border-carbon/10 hover:border-clay/40 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-clay shrink-0" />
                  <h2 className="font-heading text-xl text-carbon group-hover:text-clay transition-colors">
                    {item.location}
                  </h2>
                </div>
                <span className="font-sans text-xs text-carbon/60">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
