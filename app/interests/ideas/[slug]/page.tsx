import { getEssayBySlug, getAllEssays, Essay } from "@/config/essays";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

interface EssayPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((essay: Essay) => ({
    slug: essay.slug,
  }));
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return { title: "Essay Not Found" };

  return {
    title: `${essay.title} | Sanket Shreemal`,
    description: essay.summary,
  };
}

export default async function EssayDetailPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  // Simple paragraph & heading formatter for essay content
  const renderContent = (contentStr: string) => {
    const blocks = contentStr.trim().split("\n\n");
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="font-heading text-2xl md:text-3xl font-normal text-carbon mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="font-heading text-3xl md:text-4xl font-normal text-carbon mt-10 mb-5 border-b border-carbon/10 pb-2">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n- ");
        return (
          <ul key={idx} className="list-disc list-inside flex flex-col gap-2.5 my-4 pl-2 text-carbon/85 font-sans text-base md:text-lg leading-relaxed">
            {items.map((it, i) => (
              <li key={i}>{it.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      if (trimmed === "---") {
        return <hr key={idx} className="my-8 border-carbon/10" />;
      }
      return (
        <p key={idx} className="font-sans text-base md:text-lg text-carbon/85 leading-relaxed mb-5">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="relative min-h-screen bg-bone">
      {/* Markboard background noise */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-12 md:px-16 pt-8 pb-24 md:pb-32">
        {/* Back Link */}
        <Link
          href="/interests/ideas"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-semibold text-carbon/60 hover:text-clay transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Thinking &amp; Ideas</span>
        </Link>

        {/* Essay Header */}
        <header className="flex flex-col gap-4 mb-10 pb-8 border-b border-carbon/15">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-clay bg-clay/10 px-2.5 py-1 rounded-[2px]">
              {essay.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-sans text-carbon/60">
              <Calendar className="w-3.5 h-3.5 text-clay" />
              {essay.date}
            </span>
            <span className="flex items-center gap-1 text-xs font-sans text-carbon/60">
              <Clock className="w-3.5 h-3.5 text-carbon/40" />
              {essay.readTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-carbon leading-[1.15]">
            {essay.title}
          </h1>

          {essay.subtitle && (
            <p className="font-sans text-lg md:text-xl text-clay italic leading-relaxed">
              {essay.subtitle}
            </p>
          )}
        </header>

        {/* Essay Content Body */}
        <article className="prose prose-stone max-w-none">
          {renderContent(essay.content)}
        </article>

        {/* Optional External Link Footer */}
        {essay.originalBookLink && (
          <div className="mt-12 pt-6 border-t border-carbon/10 flex items-center justify-between text-xs font-sans text-carbon/60">
            <span>Original reference book</span>
            <a
              href={essay.originalBookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay font-semibold hover:underline inline-flex items-center gap-1"
            >
              Find on Amazon
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
