"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  LibraryBig,
  Activity,
  User,
  Briefcase,
  AtSign,
  ChevronDown,
  BookOpen,
  Compass,
  Lightbulb,
} from "lucide-react";

interface SubItem {
  name: string;
  href: string;
  sublabel: string;
  icon: any;
}

interface NavItem {
  name: string;
  href?: string;
  icon: any;
  subItems?: SubItem[];
}

const NAV_LINKS: NavItem[] = [
  { name: "About", href: "#", icon: User },
  { name: "Work", href: "/work", icon: Briefcase },
  {
    name: "Interests",
    icon: LibraryBig,
    subItems: [
      {
        name: "Reading",
        href: "/interests/library",
        sublabel: "Books & Papers",
        icon: BookOpen,
      },
      {
        name: "Travelling",
        href: "/interests/travel",
        sublabel: "Places & Memories",
        icon: Compass,
      },
      {
        name: "Thinking",
        href: "/interests/ideas",
        sublabel: "Essays & Notes",
        icon: Lightbulb,
      },
    ],
  },
  { name: "Now", href: "/now", icon: Activity },
  { name: "Contact", href: "#", icon: AtSign },
];

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:w-[85%] pt-4 sm:pt-6 pb-2 flex flex-row items-center justify-between">
      {/* Left side: Name */}
      <Link
        href="/"
        className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-clay hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
      >
        Sanket Shreemal
      </Link>

      {/* Right side: Links */}
      <nav className="flex items-center justify-end gap-3 sm:gap-5 shrink-0">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;

          /* If item has subItems (Dropdown for Interests) */
          if (link.subItems) {
            return (
              <div
                key={link.name}
                ref={dropdownRef}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1.5 text-carbon/70 group-hover:text-clay transition-colors outline-none cursor-pointer py-1"
                  aria-expanded={dropdownOpen}
                >
                  <Icon
                    className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-4 md:h-4 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="hidden md:inline font-sans text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap">
                    {link.name}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-carbon/50 group-hover:text-clay transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-clay" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 rounded-[4px] bg-white/95 backdrop-blur-md border-[0.5px] border-carbon/15 shadow-lg p-1.5 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-200 z-50">
                    {link.subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-[2px] hover:bg-clay/10 transition-colors group/sub"
                        >
                          <SubIcon className="w-3.5 h-3.5 text-clay shrink-0" />
                          <div className="flex flex-col">
                            <span className="font-sans text-xs font-semibold text-carbon group-hover/sub:text-clay transition-colors">
                              {sub.name}
                            </span>
                            <span className="font-sans text-[10px] text-carbon/50">
                              {sub.sublabel}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          /* Normal links */
          return (
            <Link
              key={link.name}
              href={link.href!}
              className="flex items-center gap-2 text-carbon/70 group hover:text-clay transition-colors py-1"
              title={link.name}
              aria-label={link.name}
            >
              <Icon
                className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-4 md:h-4 flex-shrink-0"
                strokeWidth={2}
              />
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
