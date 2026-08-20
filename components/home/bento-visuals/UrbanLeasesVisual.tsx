"use client";

import { useState, useEffect } from "react";

const metrics = ["Occupancy", "Rent Collection", "Lease Renewals"];

export default function UrbanLeasesVisual() {
  const [occupancy, setOccupancy] = useState(50);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState(metrics[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Ticking percentage counter (+2% per second)
  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancy((prev) => (prev >= 100 ? 50 : prev + 2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Typewriter & backspace effect for metric names
  useEffect(() => {
    const currentWord = metrics[wordIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      // Hold completed word for 3 seconds before backspacing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && displayText === "") {
      // Backspaced fully, move to next metric word after a short pause
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % metrics.length);
      }, 500);
    } else {
      // Type next letter or delete previous letter
      const speed = isDeleting ? 40 : 75;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIdx]);

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none z-10">
      {/* Background ambient warmth */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full bg-gradient-to-br from-[#A57C5B]/10 via-transparent to-transparent blur-2xl" />

      {/* Dynamic Typewriter Pill Badge with Ticking Counter (Occupancy → Rent Collection → Lease Renewals) */}
      <div className="absolute top-4 right-8 sm:right-10 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/45 backdrop-blur-[2px] border border-carbon/15 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
        <span className="text-[10.5px] font-sans font-medium text-carbon/75">
          {displayText}
          <span className="animate-pulse text-clay font-bold ml-0.5">|</span>
        </span>
        <strong className="text-[11px] font-sans font-bold text-carbon ml-1 font-mono">
          {occupancy}%
        </strong>
      </div>
    </div>
  );
}
