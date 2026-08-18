"use client";

import Link from "next/link";
import { LibraryBig, Activity, User, Briefcase, AtSign } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#", icon: User },
  { name: "Work", href: "/work", icon: Briefcase },
  { name: "Interests", href: "/library", icon: LibraryBig },
  { name: "Now", href: "/now", icon: Activity },
  { name: "Contact", href: "#", icon: AtSign },
];

export default function Navigation() {
  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-4 sm:pt-6 pb-2 flex flex-row items-center justify-between">
      {/* Left side: Name */}
      <Link href="/" className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-clay hover:opacity-80 transition-opacity whitespace-nowrap shrink-0">
        Sanket Shreemal
      </Link>

      {/* Right side: Links */}
      <nav className="flex items-center justify-end gap-3 sm:gap-5 shrink-0">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-carbon/70 group hover:text-clay transition-colors"
              title={link.name}
              aria-label={link.name}
            >
              <Icon className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-4 md:h-4 flex-shrink-0" strokeWidth={2} />
              <span className="hidden md:inline font-sans text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
