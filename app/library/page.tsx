import { booksData, otherBooksData } from "@/config/books";
import BookCard from "@/components/library/BookCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LibraryPage() {
  const books = booksData;

  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard noise / dot-pattern background (matching Home) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] py-16 md:py-24">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[0.7rem] font-bold uppercase tracking-widest text-carbon/40 hover:text-clay transition-colors duration-200 mb-12 sm:mb-16"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Header */}
        <header className="max-w-2xl mb-16 sm:mb-24">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-carbon leading-[1.1] mb-6">
            Library
          </h1>
          <p className="font-sans text-base sm:text-lg text-carbon/70 leading-relaxed">
            A curated collection of thoughts and insights from the volumes that have shaped my perspective.
            <span className="block mt-4 text-clay italic text-sm sm:text-base">
              &ldquo;One grain of sand is not a mountain, but eventually, after enough grains, a mountain exists.&rdquo;
            </span>
          </p>
        </header>

        {/* Library Grid / List */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {books.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>

        {/* Other Books Grid */}
        <div className="mt-24 pt-8 border-t border-carbon/5">
          <h2 className="font-heading text-3xl text-carbon mb-8">Other Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {otherBooksData.map((book) => (
              <div
                key={book.id}
                className="relative aspect-[3/4] w-full rounded-[2px] shadow-sm overflow-hidden flex flex-col items-center justify-center p-3 bg-gradient-to-br from-white/60 to-clay/5 border-[0.5px] border-carbon/10 hover:border-carbon/20 hover:shadow-md backdrop-blur-sm transition-all duration-300 group"
              >
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center gap-2 h-full w-full">
                    <span className="font-heading text-xs sm:text-sm text-carbon/70 group-hover:text-carbon transition-colors leading-snug px-2">
                      {book.title}
                    </span>
                  </div>
                )}
                {/* Subtle spine shadow */}
                <div className="absolute left-0 inset-y-0 w-3 bg-gradient-to-r from-black-[0.03] to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer info (optional) */}
        <footer className="mt-24 pt-8 border-t border-carbon/5 flex justify-center">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-carbon/30">
            More volumes to be added as I continue to explore.
          </p>
        </footer>
      </main>
    </div>
  );
}
