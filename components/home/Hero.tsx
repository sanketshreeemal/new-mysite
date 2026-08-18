import Image from "next/image";
import NowPeek from "./NowPeek";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full grid grid-cols-1 md:grid-cols-[1fr_0.65fr] gap-8 md:gap-12 items-center py-6 md:py-10"
    >
      {/* Left Column — Text */}
      <div className="flex flex-col gap-2">

        {/* Tagline */}
        <p className="font-heading font-semibold text-2xl md:text-2xl text-carbon/80 leading-relaxed">
          Allocating{" "}
          <span className="text-clay font-semibold">Time</span>,{" "}
          <span className="text-clay font-semibold">Tokens</span>,{" "}
          <span className="text-clay font-semibold">Capital</span>
        </p>

        {/* Description */}
        <p className="font-sans text-md md:text-lg text-carbon/80 mb-4 leading-relaxed max-w-lg">
          Technology founder and institutional investor. I like tinkering with fringe ideas and building things in the pursuit of greatness.
        </p>

        {/* Location */}
        <p className="font-sans text-xs text-carbon/85 tracking-wide">
          🇮🇳 Bangalore &nbsp;&nbsp; 🇨🇦 Toronto &nbsp;&nbsp; 🇸🇬 Singapore
        </p>

        {/* NowPeek Component embedded in Hero */}
        <div className="mt-4 md:mt-8">
          <NowPeek />
        </div>
      </div>

      {/* Right Column — Profile Image (Desktop only) */}
      <div className="hidden md:flex justify-end items-center">
        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-[4px] border-[0.5px] border-carbon/10 overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Sanket Shreemal"
            fill
            className="object-cover object-[center_25%]"
            priority
            sizes="(max-width: 768px) 0px, 320px"
          />
        </div>
      </div>
    </section>
  );
}
