import React from "react";
import { shortFormData, ShortFormContent } from "@/config/papers";
import { FileText, Headphones } from "lucide-react";

export default function ShortFormGrid() {
  return (
    <div className="flex flex-wrap w-full gap-3 sm:gap-4 mt-12 mb-24">
      {shortFormData.map((item) => {
        const isAudio = item.type === "audio";

        // Define color schemes based on type
        // Clay for text, Dark Teal for Audio. Solved opacity bleed-through using matching solid colors.
        const cardClasses = isAudio
          ? "border-teal-800/20 bg-[#f0f8f7] text-teal-900"
          : "border-clay/20 bg-[#f8f5f2] text-carbon";

        const authorClasses = isAudio
          ? "text-teal-800/80"
          : "text-clay/80";

        const titleClasses = isAudio
          ? "text-teal-950"
          : "text-carbon/90";

        return (
          <div
            key={item.id}
            className={`
                relative flex flex-col justify-between 
                flex-grow flex-shrink-0 basis-auto min-w-[280px] sm:min-w-[320px] max-w-full
                px-5 py-3 sm:px-6 sm:py-4 rounded-[1.5rem] border-[0.5px] 
                ${cardClasses}
              `}
          >
            {/* Top Row: Author / Show Name + Icon */}
            <div className="flex justify-between items-start gap-4 mb-2 sm:mb-2">
              <span className={`font-sans text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest ${authorClasses}`}>
                {item.author}{!isAudio && item.year ? `, ${item.year}` : ""}
              </span>
              <div className={`opacity-60 flex-shrink-0 ${authorClasses}`}>
                {isAudio ? (
                  <Headphones size={18} strokeWidth={2} />
                ) : (
                  <FileText size={18} strokeWidth={2} />
                )}
              </div>
            </div>

            {/* Bottom Row: Title / Episode Name */}
            <div>
              <h3 className={`font-heading text-lg sm:text-2xl font-normal leading-snug ${titleClasses}`}>
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
