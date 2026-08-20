"use client";

import { useState } from "react";
import { travelStops, TravelStop } from "@/config/travel";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Compass, ArrowRight, ArrowLeft } from "lucide-react";

/* ─── Placeholder background gradients for cards before image upload ─── */
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #1c434d 0%, #2f6b7a 50%, #122d34 100%)", // ocean teal
  "linear-gradient(135deg, #3d3b5c 0%, #5d5a8c 50%, #28263e 100%)", // dusk violet
  "linear-gradient(135deg, #43543b 0%, #68825c 50%, #2a3625 100%)", // alpine forest
  "linear-gradient(135deg, #5e3b43 0%, #8e5c68 50%, #3e262c 100%)", // terracotta rose
  "linear-gradient(135deg, #52473b 0%, #82725c 50%, #362e26 100%)", // golden earth
  "linear-gradient(135deg, #2b3a42 0%, #3f5866 50%, #1e282d 100%)", // slate deep
];

export default function TravelJourney() {
  const [selectedStop, setSelectedStop] = useState<TravelStop | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const selectedIndex = selectedStop
    ? travelStops.findIndex((s) => s.id === selectedStop.id)
    : -1;

  const handlePrevStop = () => {
    if (selectedIndex > 0) {
      setSelectedStop(travelStops[selectedIndex - 1]);
    }
  };

  const handleNextStop = () => {
    if (selectedIndex >= 0 && selectedIndex < travelStops.length - 1) {
      setSelectedStop(travelStops[selectedIndex + 1]);
    }
  };

  return (
    <div className="relative w-full">
      {/* ── Journey Start Banner ── */}
      <div className="flex items-center gap-3 mb-10 text-xs font-mono uppercase tracking-widest text-carbon/40">
        <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
        <span>Travel Timeline</span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-carbon/15 to-transparent" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
         DESKTOP 3-COLUMN SERPENTINE GRID (≥1024px)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block space-y-16">
        {Array.from({ length: Math.ceil(travelStops.length / 3) }).map(
          (_, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0; // Even: L->R, Odd: R->L
            const rowStops = travelStops.slice(rowIndex * 3, rowIndex * 3 + 3);

            return (
              <div key={rowIndex} className="relative">
                {/* 3-Column Card Row */}
                <div className="grid grid-cols-3 gap-8 items-stretch">
                  {[0, 1, 2].map((colPos) => {
                    const stopIndexInRow = isEvenRow ? colPos : 2 - colPos;
                    const stop = rowStops[stopIndexInRow];
                    const globalIndex = rowIndex * 3 + stopIndexInRow;

                    if (!stop) {
                      return <div key={colPos} className="w-full" />;
                    }

                    const nextStop = travelStops[globalIndex + 1];
                    const isLastInRowSeq = stopIndexInRow === rowStops.length - 1;
                    const hasNextGlobalStop = globalIndex < travelStops.length - 1;

                    return (
                      <div key={stop.id} className="relative flex flex-col">
                        {/* City Card */}
                        <div
                          onClick={() => setSelectedStop(stop)}
                          className="group relative flex flex-col h-full bg-white/80 backdrop-blur-md rounded-2xl border border-carbon/10 overflow-hidden shadow-xs cursor-pointer"
                        >
                          {/* Card Media Header */}
                          <div
                            className="relative w-full aspect-[16/10] overflow-hidden"
                            style={{
                              background:
                                CARD_GRADIENTS[globalIndex % CARD_GRADIENTS.length],
                            }}
                          >
                            {/* Image layer */}
                            {!failedImages[stop.id] && (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img
                                src={stop.image}
                                alt={`${stop.city}, ${stop.country}`}
                                loading={globalIndex < 6 ? "eager" : "lazy"}
                                decoding="async"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).style.display = "none";
                                  handleImageError(stop.id);
                                }}
                                className="w-full h-full object-cover"
                              />
                            )}

                            {/* Gradient overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent opacity-80 transition-opacity duration-300" />

                            {/* Watermark flag on placeholder */}
                            {failedImages[stop.id] && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
                                <span className="text-7xl">{stop.flag}</span>
                              </div>
                            )}

                            {/* Activity Badge */}
                            <span
                              title={stop.activityLabel}
                              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm shadow-xs border border-white/40"
                            >
                              {stop.activity}
                            </span>
                          </div>

                          {/* Card Footer Info */}
                          <div className="p-4 flex flex-col justify-between mt-auto bg-white/90 backdrop-blur-md">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div>
                                <h3 className="font-heading text-xl font-medium leading-snug text-carbon group-hover:text-clay transition-colors">
                                  {stop.city}
                                </h3>
                                <div className="font-sans text-xs text-carbon/60 flex items-center gap-1.5 mt-0.5">
                                  <span>{stop.flag}</span>
                                  <span>{stop.country}</span>
                                </div>
                              </div>

                              <span className="font-sans text-xs font-semibold text-clay uppercase tracking-wider flex items-center gap-1 shrink-0 mt-1">
                                View →
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* ── IN-ROW CONNECTOR (Horizontal Dashed Line) ── */}
                        {!isLastInRowSeq && nextStop && (
                          <div
                            className={`absolute top-[40%] -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none ${
                              isEvenRow ? "-right-7 w-6" : "-left-7 w-6"
                            }`}
                          >
                            <div className="w-full h-[2px] border-b-2 border-dashed border-clay/40" />
                          </div>
                        )}

                        {/* ── ROW-TO-ROW CONNECTOR (Sweeping Vertical Dashed Line Down) ── */}
                        {isLastInRowSeq && hasNextGlobalStop && (
                          <div
                            className={`absolute -bottom-16 z-10 w-16 h-16 pointer-events-none ${
                              isEvenRow ? "right-6" : "left-6"
                            }`}
                          >
                            <svg
                              viewBox="0 0 100 100"
                              className="w-full h-full overflow-visible"
                              aria-hidden="true"
                            >
                              <path
                                d="M 50,0 C 50,40 50,60 50,100"
                                fill="none"
                                stroke="rgba(165, 124, 91, 0.4)"
                                strokeWidth="3"
                                strokeDasharray="6 6"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
         MOBILE & TABLET CENTERED TIMELINE (<1024px)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col items-center gap-10 relative w-full max-w-md mx-auto">
        {/* Continuous vertical dashed line centered through cards */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] border-r-2 border-dashed border-clay/35 pointer-events-none z-0" />

        {travelStops.map((stop, index) => {
          const globalIndex = index;

          return (
            <div
              key={stop.id}
              className="relative w-full flex flex-col items-center z-10"
            >
              {/* City Card Centered */}
              <div
                onClick={() => setSelectedStop(stop)}
                className="group relative w-full flex flex-col bg-white/90 backdrop-blur-md rounded-2xl border border-carbon/10 overflow-hidden shadow-xs cursor-pointer"
              >
                {/* Media visual */}
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden"
                  style={{
                    background:
                      CARD_GRADIENTS[globalIndex % CARD_GRADIENTS.length],
                  }}
                >
                  {!failedImages[stop.id] && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={stop.image}
                      alt={`${stop.city}, ${stop.country}`}
                      loading={globalIndex < 4 ? "eager" : "lazy"}
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        handleImageError(stop.id);
                      }}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Activity Badge */}
                  <span
                    title={stop.activityLabel}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm shadow-xs"
                  >
                    {stop.activity}
                  </span>
                </div>

                {/* Footer Info */}
                <div className="p-4 flex items-center justify-between bg-white/90">
                  <div>
                    <h3 className="font-heading text-xl font-medium leading-tight text-carbon group-hover:text-clay transition-colors">
                      {stop.city}
                    </h3>
                    <div className="font-sans text-xs text-carbon/60 flex items-center gap-1.5 mt-0.5">
                      <span>{stop.flag}</span>
                      <span>{stop.country}</span>
                    </div>
                  </div>
                  <span className="font-sans text-xs font-semibold text-clay uppercase tracking-wider">
                    View →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Journey End Banner ── */}
      <div className="flex items-center gap-3 mt-16 text-xs font-mono uppercase tracking-widest text-carbon/40">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-carbon/15" />
        <span className="w-2 h-2 rounded-full border border-clay" />
        <span>To be continued…</span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
         STOP DETAILS MODAL DRAWER
         ══════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedStop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStop(null)}
              className="absolute inset-0 bg-carbon/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-2xl bg-bone border border-carbon/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStop(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-carbon/50 hover:bg-carbon text-white flex items-center justify-center transition-colors backdrop-blur-md"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Visual Header */}
              <div
                className="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden"
                style={{
                  background:
                    CARD_GRADIENTS[selectedIndex % CARD_GRADIENTS.length],
                }}
              >
                {!failedImages[selectedStop.id] && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedStop.image}
                    alt={selectedStop.city}
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      handleImageError(selectedStop.id);
                    }}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />

                {/* Banner Content */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-clay/90 uppercase mb-1">
                    <span>Stop #{String(selectedIndex + 1).padStart(2, "0")}</span>
                    {selectedStop.date && (
                      <>
                        <span>·</span>
                        <span>{selectedStop.date}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-normal text-bone leading-tight">
                    {selectedStop.city}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-bone/80 font-sans mt-1">
                    <span className="text-xl">{selectedStop.flag}</span>
                    <span>{selectedStop.country}</span>
                    {selectedStop.coordinates && (
                      <>
                        <span>·</span>
                        <span className="font-mono text-xs text-bone/60 flex items-center gap-1">
                          <Compass size={12} />
                          {selectedStop.coordinates}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Description Narrative */}
                {selectedStop.description && (
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-clay font-semibold mb-2">
                      About this stop
                    </h3>
                    <p className="font-sans text-base text-carbon/80 leading-relaxed italic">
                      &ldquo;{selectedStop.description}&rdquo;
                    </p>
                  </div>
                )}

                {/* Key Highlights Grid */}
                {selectedStop.highlights && selectedStop.highlights.length > 0 && (
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-clay font-semibold mb-3">
                      Highlights &amp; Memories
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {selectedStop.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/70 border border-carbon/10 text-xs font-sans text-carbon/80 flex items-center gap-2"
                        >
                          <MapPin size={14} className="text-clay shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Navigation */}
              <div className="p-4 sm:p-5 border-t border-carbon/10 bg-white/50 flex items-center justify-between text-xs">
                <button
                  onClick={handlePrevStop}
                  disabled={selectedIndex <= 0}
                  className="px-3.5 py-2 rounded-xl bg-white border border-carbon/10 hover:border-carbon/30 disabled:opacity-30 disabled:pointer-events-none text-carbon flex items-center gap-1.5 transition-colors font-medium"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Stop</span>
                </button>

                <span className="font-mono text-carbon/40 text-xs">
                  {selectedIndex + 1} of {travelStops.length}
                </span>

                <button
                  onClick={handleNextStop}
                  disabled={selectedIndex >= travelStops.length - 1}
                  className="px-3.5 py-2 rounded-xl bg-carbon text-bone hover:bg-carbon/90 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Next Stop</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
