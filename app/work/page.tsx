import Timeline from "@/components/home/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Sanket Shreemal",
  description: "Spent the first phase of my career allocating time and dollars for others. Now, I do it for myself.",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background (matching Home) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-6 pb-24 md:pt-10 md:pb-32">
        {/* Header matching standard page subtitle design tokens */}
        <header className="max-w-2xl mb-6 sm:mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-3">
            Work
          </h1>

          <p className="font-sans text-clay italic text-sm sm:text-base leading-relaxed">
            Spent the first phase of my career allocating time and dollars for others. Now, I do it for myself. I love building with both, atoms and bits. Right now, I&apos;m building Miilo and allocating capital through SevenQi.
          </p>
        </header>

        {/* Content Area */}
        <div className="min-h-[50vh]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Timeline />
          </div>
        </div>
      </main>
    </div>
  );
}
