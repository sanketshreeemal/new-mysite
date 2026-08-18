/**
 * Data layer for the Now Pulse component.
 * Single source of truth for the home page NowPeek and the full /now page.
 */

export interface NowSection {
  title: string;
  items: string[];
}

export interface NowEntry {
  /** ISO date string (YYYY-MM-DD) for the entry */
  date: string;
  /** Current primary location */
  location?: string;
  /** Condensed summary items shown on the home page Hero */
  home: string[];
  /** Minimal categorized sections for the /now page */
  sections: NowSection[];
}

export const nowEntries: NowEntry[] = [
  {
    date: "2026-07-12",
    location: "Bangalore 🇮🇳",
    home: [
      "Building Miilo & GTM consulting for Purple Forest",
      "Setting up SevenQi family office investment structure",
      "Building new daily routines & friends in Bangalore",
    ],
    sections: [
      {
        title: "Building & Operating",
        items: [
          "Miilo — Designing and shipping my veterinary CRM ecosystem from 0→1.",
          "Purple Forest — Consulting on strategy and go-to-market for a wellness stationery products brand.",
        ],
      },
      {
        title: "Investment Journey",
        items: [
          "SevenQi — Setting up the family office structure and investment philosophy while actively evaluating early-stage venture opportunities.",
        ],
      },
      {
        title: "Life & Base",
        items: [
          "Building new daily routines in Bangalore, adapting to fresh workflows, and building new networks.",
        ],
      },
    ],
  },
  {
    date: "2025-10-15",
    location: "Toronto 🇨🇦",
    home: [
      "Managing portfolio risk at FundThrough",
      "Prototyping early Miilo architecture",
    ],
    sections: [
      {
        title: "Institutional",
        items: [
          "Managed performance and lending activities across $100M+ portfolio at FundThrough.",
          "Completed final CFA Level 3 exam requirements.",
        ],
      },
      {
        title: "Venture",
        items: [
          "Drafted initial product requirements and AI workflows for pet care communications.",
        ],
      },
    ],
  },
];

/**
 * Helper: returns the most recent (current) now entry.
 */
export function getCurrentNowEntry(): NowEntry {
  return nowEntries[0];
}
