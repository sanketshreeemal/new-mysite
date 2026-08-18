import NowFeed from "@/components/now/NowFeed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Sanket Shreemal",
  description: "What I'm focused on right now — projects, learning, location, and priorities.",
};

export default function NowPage() {
  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background (matching Home & Work pages) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-6 pb-24 md:pt-10 md:pb-32">
        {/* Header */}
        <header className="max-w-2xl mb-10 sm:mb-14">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-4">
            Now
          </h1>

          <span className="block text-clay italic text-sm sm:text-base">
            &ldquo;A sneakpeek into what I&apos;m focused on right now.&rdquo;
          </span>
        </header>

        {/* Content Area */}
        <div className="min-h-[50vh]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <NowFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
