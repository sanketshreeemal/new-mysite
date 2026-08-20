"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUpRight, Check, Copy } from "lucide-react";

/* ── Inline SVG Brand Icons ── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="footer"
      className="relative z-10 w-full mt-auto border-t border-carbon/10 py-6 sm:py-8"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] flex flex-col gap-5">
        {/* Main Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand Name (Desktop Only — Hidden on mobile to avoid duplication with copyright) */}
          <Link
            href="/"
            className="hidden sm:block font-heading text-xl sm:text-2xl font-normal text-carbon hover:text-clay transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Contact Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
            {/* Email (mailto:) */}
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 backdrop-blur-xs border border-carbon/10 hover:border-clay/40 hover:bg-white transition-all text-xs"
              title="Click to send an email or copy address"
            >
              <Mail size={13} className="text-clay" />
              <span className="font-sans font-medium text-carbon group-hover:text-clay transition-colors">
                {siteConfig.email}
              </span>
              {copied ? (
                <span className="text-[10px] font-semibold text-clay flex items-center gap-0.5 ml-1">
                  <Check size={11} /> Copied
                </span>
              ) : (
                <Copy size={11} className="text-carbon/40 opacity-60 group-hover:opacity-100 ml-0.5" />
              )}
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/70 backdrop-blur-xs border border-carbon/10 hover:border-clay/40 hover:bg-white transition-all text-xs"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon className="text-carbon/70 group-hover:text-clay transition-colors" />
              <span className="hidden sm:inline font-sans font-medium text-carbon group-hover:text-clay transition-colors">
                LinkedIn
              </span>
              <ArrowUpRight size={12} className="text-carbon/40 group-hover:text-clay transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/70 backdrop-blur-xs border border-carbon/10 hover:border-clay/40 hover:bg-white transition-all text-xs"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon className="text-carbon/70 group-hover:text-clay transition-colors" />
              <span className="hidden sm:inline font-sans font-medium text-carbon group-hover:text-clay transition-colors">
                GitHub
              </span>
              <ArrowUpRight size={12} className="text-carbon/40 group-hover:text-clay transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-4 border-t border-carbon/10 flex flex-col items-center sm:flex-row-reverse sm:items-center sm:justify-between gap-3 text-xs font-sans text-carbon/50 text-center sm:text-left">
          {/* Sitemap Nav Links (first on mobile) */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-medium text-carbon/60">
            <Link href="/work" className="hover:text-clay transition-colors">
              Work
            </Link>
            <Link href="/interests/ideas" className="hover:text-clay transition-colors">
              Thinking
            </Link>
            <Link href="/interests/library" className="hover:text-clay transition-colors">
              Reading
            </Link>
            <Link href="/interests/travel" className="hover:text-clay transition-colors">
              Travel
            </Link>
            <Link href="/now" className="hover:text-clay transition-colors">
              Now
            </Link>
          </div>

          {/* Copyright Line (below sitemap links on mobile) */}
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


