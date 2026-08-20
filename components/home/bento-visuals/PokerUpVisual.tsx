"use client";

export default function PokerUpVisual() {
  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {/* Ambient warmth backdrop */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full bg-gradient-to-br from-[#A57C5B]/10 via-transparent to-transparent blur-2xl" />

      {/* 3D Perspective Container for Revolving Ace of Spades Card (Pushed up & right, 10% smaller) */}
      <div className="absolute top-2.5 right-5 sm:right-8 [perspective:600px] z-20">
        <div className="relative w-10 h-14 rounded-[5px] transition-transform duration-700 ease-out animate-[revolve-card_9s_linear_infinite] [transform-style:preserve-3d]">
          {/* Card Front — Ace of Spades */}
          <div className="absolute inset-0 rounded-[5px] bg-clay/5 backdrop-blur-sm border border-carbon/20 shadow-md p-1 flex flex-col justify-between [backface-visibility:hidden]">
            {/* Top-Left Index */}
            <div className="flex flex-col items-center leading-none text-carbon font-serif">
              <span className="text-[9px] font-bold">A</span>
            </div>

            {/* Center Spade Emblem */}
            <div className="text-center text-base text-carbon font-serif leading-none my-auto">
              ♠
            </div>

            {/* Bottom-Right Index (Rotated) */}
            <div className="flex flex-col items-center leading-none text-carbon font-serif rotate-180">
              <span className="text-[9px] font-bold">A</span>
            </div>
          </div>

          {/* Card Back — Geometric Lattice */}
          <div className="absolute inset-0 rounded-[5px] bg-[#A57C5B]/20 backdrop-blur-sm border border-[#A57C5B]/40 shadow-md p-1 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-full rounded-[2.5px] border border-[#A57C5B]/30 bg-repeat bg-[radial-gradient(#A57C5B_1px,transparent_1px)] [background-size:4px_4px]" />
          </div>
        </div>
      </div>

      {/* CSS Keyframes for smooth 3D Revolving animation */}
      <style jsx>{`
        @keyframes revolve-card {
          0% {
            transform: rotateY(0deg) translateY(0px);
          }
          50% {
            transform: rotateY(180deg) translateY(-2px);
          }
          100% {
            transform: rotateY(360deg) translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
