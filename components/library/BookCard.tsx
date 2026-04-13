"use client";

import { Book } from "@/config/books";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  book: Book;
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row w-full gap-4 p-4 sm:p-6 rounded-[4px] border-[0.5px] border-carbon/10 bg-white/50 backdrop-blur-md hover:bg-white/80 transition-all duration-500"
    >
      {/* Left Column — Book Cover (20%) */}
      <div className="w-full md:w-1/5 flex-shrink-0">
        <div className="relative aspect-[3/4] w-full rounded-[2px] shadow-lg overflow-hidden flex flex-col items-center justify-center p-1 bg-gradient-to-br from-bone to-clay/10 border-[0.5px] border-carbon/20">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <div className="w-1 bg-clay h-20 opacity-30" />
              <span className="font-heading italic text-xs text-carbon/40 tracking-wider vertical-text uppercase">
                Library Edition
              </span>
            </div>
          )}

          {/* Subtle Spine shadow */}
          <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right Column — Details (80%) */}
      <div className="w-full md:w-4/5 flex flex-col gap-3">
        <header className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl sm:text-2xl text-carbon leading-tight tracking-tight">
              {book.title}
            </h2>
            {book.fullReviewUrl && (
              <a
                href={book.fullReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-clay hover:text-carbon transition-colors duration-200"
                aria-label={`Read full review for ${book.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          <div className="flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-widest text-carbon/50 font-semibold">
            <span>{book.author}</span>
            <span className="w-1 h-1 rounded-full bg-clay/30" />
            <span>{book.year}</span>
          </div>
        </header>

        <p className="font-sans text-xs sm:text-sm text-carbon/75 leading-relaxed">
          {book.review}
        </p>

        {book.quote && (
          <blockquote className="relative pl-5 py-2 mt-1">
            <div className="absolute left-0 inset-y-0 w-[1.5px] bg-clay/30" />
            <p className="font-heading italic text-xs sm:text-[0.85rem] text-carbon/90 leading-relaxed">
              &ldquo;{book.quote}&rdquo;
            </p>
          </blockquote>
        )}
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </motion.article>
  );
}
