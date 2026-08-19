"use client";

import { useState } from "react";
import { Essay } from "@/config/essays";
import { shortFormIdeasData, ShortFormIdea } from "@/config/short-form-ideas";
import Link from "next/link";
import { BookCheck, LayoutGrid, ArrowRight, Calendar, Clock } from "lucide-react";

interface IdeasTabFeedProps {
  essays: Essay[];
}

export default function IdeasTabFeed({ essays }: IdeasTabFeedProps) {
  const [activeTab, setActiveTab] = useState<"short" | "long">("short");

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-2 mb-12 sm:mb-16 border-b border-carbon/20 pb-4">
        <button
          onClick={() => setActiveTab("short")}
          className={`font-sans text-sm font-semibold tracking-wider flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === "short"
              ? "bg-carbon text-bone"
              : "text-carbon/50 hover:text-carbon hover:bg-carbon/5"
          }`}
        >
          <LayoutGrid size={16} />
          Ideas
        </button>
        <button
          onClick={() => setActiveTab("long")}
          className={`font-sans text-sm font-semibold tracking-wider flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === "long"
              ? "bg-carbon text-bone"
              : "text-carbon/50 hover:text-carbon hover:bg-carbon/5"
          }`}
        >
          <BookCheck size={16} />
          Essays
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[50vh]">
        {activeTab === "short" ? (
          /* ── SHORT FORM (IDEAS) GRID ── */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortFormIdeasData.map((idea: ShortFormIdea) => (
                <div
                  key={idea.id}
                  className="flex flex-col gap-3 p-6 md:p-7 rounded-[4px] bg-white/60 backdrop-blur-md border-[0.5px] border-carbon/10 shadow-sm"
                >
                  <h2 className="font-heading text-xl font-normal text-clay leading-snug">
                    {idea.title}
                  </h2>

                  <p className="font-sans text-sm text-carbon/80 leading-relaxed">
                    {idea.thought}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ── LONG FORM (ESSAYS) LIST ── */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col gap-6 max-w-4xl">
              {essays.map((essay: Essay) => (
                <article
                  key={essay.id}
                  className="group p-6 md:p-8 rounded-[4px] bg-white/60 backdrop-blur-md border-[0.5px] border-carbon/10 hover:border-clay/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-carbon/10 pb-3">
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] font-bold text-clay bg-clay/10 px-2.5 py-1 rounded-[2px]">
                      {essay.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-sans text-carbon/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-clay" />
                        {essay.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-carbon/40" />
                        {essay.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link href={`/interests/ideas/${essay.slug}`}>
                      <h2 className="font-heading text-2xl md:text-3xl font-normal text-carbon group-hover:text-clay transition-colors leading-tight">
                        {essay.title}
                      </h2>
                    </Link>
                    <p className="font-sans text-sm md:text-base text-carbon/85 leading-relaxed">
                      {essay.summary}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/interests/ideas/${essay.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-carbon/70 group-hover:text-clay transition-colors"
                    >
                      Read Essay
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
