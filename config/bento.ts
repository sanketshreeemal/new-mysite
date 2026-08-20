/**
 * Data layer for the Identity Grid (Bento) component.
 * Defines the card configurations for the 3×3 responsive grid.
 * Each card represents a facet of the tri-persona: Operator, Builder, Allocator.
 */

export type BadgeType = "OPERATOR" | "BUILDER" | "ALLOCATOR";

export interface BentoCardConfig {
  id: string;
  title: string;
  badge: BadgeType;
  subtitle: string;
  gridArea: string;
  mobileOrder: number;
  href?: string;
}

export const bentoCards: BentoCardConfig[] = [
  {
    id: "miilo",
    title: "Miilo",
    badge: "OPERATOR",
    subtitle: "Veterinary triage and communication platform connecting pet parents with local trusted clinics.",
    gridArea: "1 / 1 / 3 / 3",
    mobileOrder: 1,
    href: "https://www.miilocare.com",
  },
  {
    id: "pokerup",
    title: "PokerUp",
    badge: "BUILDER",
    subtitle: "Automated live poker tracking, instant AI ledger settlements, and performance analytics.",
    gridArea: "1 / 3",
    mobileOrder: 3,
    href: "https://www.pokerup.app",
  },
  {
    id: "urbanleases",
    title: "UrbanLeases",
    badge: "BUILDER",
    subtitle: "Property management platform turning offline rental portfolios into live operational dashboards.",
    gridArea: "2 / 3",
    mobileOrder: 4,
    href: "https://www.urbanleases.ca",
  },
  {
    id: "sevenqi",
    title: "SevenQi",
    badge: "ALLOCATOR",
    subtitle: "Single family office managing global capital allocation through fund-of-funds structure and opportunistic direct investments.",
    gridArea: "3 / 1 / 4 / 4",
    mobileOrder: 2,
  },
];
