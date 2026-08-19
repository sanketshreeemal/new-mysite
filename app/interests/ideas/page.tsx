import { getAllEssays } from "@/config/essays";
import IdeasTabFeed from "@/components/ideas/IdeasTabFeed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinking & Ideas | Sanket Shreemal",
  description: "Ideas I currently subscribe to, essays, and notes.",
};

export default function IdeasPage() {
  const essays = getAllEssays();

  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background (matching Home & Library) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-6 pb-24 md:pt-10 md:pb-32">
        {/* Header */}
        <header className="max-w-2xl mb-6 sm:mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-clay font-sans font-semibold mb-2">
            <span>Interests</span>
            <span>/</span>
            <span>Thinking</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-4">
            Thinking &amp; Ideas
          </h1>

          <span className="block mt-2 text-clay italic text-sm sm:text-base">
            &ldquo;One line of clarity is worth a thousand pages of noise.&rdquo;
          </span>
        </header>

        {/* Tabbed Feed */}
        <IdeasTabFeed essays={essays} />
      </main>
    </div>
  );
}
