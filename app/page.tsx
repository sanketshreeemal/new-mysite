import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import Collage from "@/components/home/Collage";
import CuratedInterests from "@/components/home/CuratedInterests";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center">
      <main className="z-10 flex flex-1 w-full max-w-7xl mx-auto flex-col items-start px-6 sm:px-12 md:px-16 lg:w-[85%] pb-10 sm:pb-14">
        <Hero />
        <BentoGrid />
        <Collage />
        <CuratedInterests />
      </main>
    </div>
  );
}
