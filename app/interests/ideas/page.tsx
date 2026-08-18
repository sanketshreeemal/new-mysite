import type { Metadata } from "next";
import { Lightbulb, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Thinking & Ideas | Sanket Shreemal",
  description: "Ideas I currently subscribe to, essays, and notes.",
};

export default function IdeasPage() {
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
            <span>Thinking</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-4">
            Thinking &amp; Ideas
          </h1>

          <span className="block text-clay italic text-sm sm:text-base">
            &ldquo;Ideas I currently subscribe to and thoughts in progress.&rdquo;
          </span>
        </header>

        {/* Content Placeholder / Essay Feed */}
        <div className="min-h-[40vh] flex flex-col gap-6 max-w-3xl">
          <div className="p-8 rounded-[4px] bg-white/60 backdrop-blur-md border-[0.5px] border-carbon/10 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-clay font-sans text-xs uppercase tracking-widest font-semibold">
              <Lightbulb className="w-4 h-4" />
              <span>Writing &amp; Essays Coming Soon</span>
            </div>
            <p className="font-sans text-base text-carbon/80 leading-relaxed">
              Currently compiling essays on market structures, capital allocation, and business models in emerging markets. Stay tuned.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
