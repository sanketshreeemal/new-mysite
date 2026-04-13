import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import Timeline from "@/components/home/Timeline";
import Collage from "@/components/home/Collage";
import CuratedInterests from "@/components/home/CuratedInterests";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
      />
      <main className="z-10 flex flex-1 w-full max-w-7xl mx-auto flex-col items-start px-6 sm:px-12 md:px-16 lg:w-[85%] pb-40">
        <Hero />
        <BentoGrid />
        <Timeline />
        <Collage />
        <CuratedInterests />
      </main>
    </div>
  );
}
