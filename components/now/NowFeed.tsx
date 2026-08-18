"use client";

import { useState } from "react";
import { nowEntries, NowEntry, NowSection } from "@/config/now";
import { MapPin, Calendar, ArrowUpRight, History } from "lucide-react";

export default function NowFeed() {
  const currentEntry = nowEntries[0];
  const pastEntries = nowEntries.slice(1);
  const [showArchive, setShowArchive] = useState(false);

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="flex flex-col gap-10 max-w-3xl w-full">
      {/* ── MINIMAL LIVE STATUS BAR ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-carbon/70 pb-6 border-b border-carbon/10">
        <div className="flex items-center gap-2 bg-clay/10 border border-clay/20 px-3 py-1.5 rounded-full text-carbon font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-clay"></span>
          </span>
          <span>Updated {formatDate(currentEntry.date)}</span>
        </div>

        {currentEntry.location && (
          <div className="flex items-center gap-1.5 text-carbon/60 font-medium">
            <MapPin className="w-3.5 h-3.5 text-clay" />
            <span>{currentEntry.location}</span>
          </div>
        )}
      </div>

      {/* ── STREAMLINED EDITORIAL SECTIONS ── */}
      <div className="flex flex-col gap-8 sm:gap-10">
        {currentEntry.sections.map((sec: NowSection, idx: number) => (
          <section key={idx} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-clay bg-clay/10 px-2 py-0.5 rounded-[2px]">
                0{idx + 1}
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-normal text-carbon">
                {sec.title}
              </h2>
            </div>

            <ul className="flex flex-col gap-3 pl-2 sm:pl-4 border-l-[1.5px] border-clay/20">
              {sec.items.map((item: string, i: number) => (
                <li key={i} className="font-sans text-sm sm:text-base text-carbon/80 leading-relaxed pl-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* ── LIGHTWEIGHT ARCHIVE ── */}
      {pastEntries.length > 0 && (
        <section className="pt-8 border-t border-carbon/10 mt-4">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-carbon/60 hover:text-clay transition-colors"
          >
            <History className="w-3.5 h-3.5 text-clay" />
            <span>{showArchive ? "Hide Previous Updates" : `View ${pastEntries.length} Previous Dispatch`}</span>
          </button>

          {showArchive && (
            <div className="flex flex-col gap-6 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              {pastEntries.map((entry: NowEntry, index: number) => (
                <div key={index} className="flex flex-col gap-2.5 p-4 rounded-[4px] bg-white/40 border-[0.5px] border-carbon/10">
                  <div className="flex items-center justify-between text-xs text-carbon/60 border-b border-carbon/5 pb-2">
                    <span className="font-heading font-medium text-sm text-carbon">{formatDate(entry.date)}</span>
                    {entry.location && <span>{entry.location}</span>}
                  </div>
                  {entry.sections.map((s, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1">
                      <span className="text-[11px] font-sans font-semibold text-clay">{s.title}</span>
                      <ul className="list-disc list-inside text-xs text-carbon/75 space-y-1">
                        {s.items.map((it, itIdx) => (
                          <li key={itIdx}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── FOOTER NOTE ── */}
      <footer className="pt-6 border-t border-carbon/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-carbon/50">
        <p>
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:underline inline-flex items-center gap-0.5"
          >
            /now page movement
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </p>
      </footer>
    </div>
  );
}
