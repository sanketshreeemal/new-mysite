/**
 * Data layer for the Now Pulse component.
 * This config is the single source of truth for both the home page NowPeek
 * and the full /now page.
 *
 * Architecture:
 * - Entries are ordered reverse-chronologically (newest first).
 * - The FIRST entry is always treated as the "current" entry.
 * - `home` contains the condensed summary that renders in the Hero section.
 * - `bullets` contain the full detail items for the /now page.
 *
 * To update: add a new entry at the TOP of the array. Both the home page
 * NowPeek and the /now page will automatically reflect the change.
 */

export interface NowEntry {
  /** ISO date string (YYYY-MM-DD) for the entry */
  date: string;
  /** Short summary bullets shown on the home page Hero */
  home: string[];
  /** Full detail bullets for the /now page */
  bullets: string[];
}

export const nowEntries: NowEntry[] = [
  {
    date: "2026-04-12",
    home: [
      "Moving my life to Bangalore",
      "Building out the Miilo Sales Team",
      "Setting up SevenQi's investment strategy, allocating capital",
    ],
    bullets: [
      "Building Miilo — designing and shipping the AI-driven pet-parent communication ecosystem from 0→1. Currently in private beta with veterinary clinics across Bangalore.",
      "Working as an Analyst at Rosenberg Research, publishing thought pieces on macroeconomic trends with a contrarian tilt.",
      "Managing SevenQi — making global allocation decisions across public and private markets for the family office.",
      "Studying for the next wave of CFA continuing education requirements.",
      "Rebuilding this personal site from scratch with a design-first philosophy.",
      "Reading: 'The Alchemy of Finance' by George Soros.",
    ],
  },
];

/**
 * Helper: returns the most recent (current) now entry.
 * Used by both NowPeek (home) and the /now page.
 */
export function getCurrentNowEntry(): NowEntry {
  return nowEntries[0];
}
