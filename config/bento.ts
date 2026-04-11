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
}

export const bentoCards: BentoCardConfig[] = [
  {
    id: "miilo",
    title: "Miilo",
    badge: "OPERATOR",
    subtitle: "AI-driven pet-parent communication ecosystem.",
    gridArea: "1 / 1 / 3 / 3",
    mobileOrder: 1,
  },
  {
    id: "pokerup",
    title: "PokerUp",
    badge: "BUILDER",
    subtitle: "High-stakes social gaming experiment.",
    gridArea: "1 / 3",
    mobileOrder: 3,
  },
  {
    id: "urbanleases",
    title: "UrbanLeases",
    badge: "BUILDER",
    subtitle: "Modernizing urban rental workflows.",
    gridArea: "2 / 3",
    mobileOrder: 4,
  },
  {
    id: "sevenqi",
    title: "SevenQi",
    badge: "ALLOCATOR",
    subtitle: "Systematic global capital allocation.",
    gridArea: "3 / 1 / 4 / 4",
    mobileOrder: 2,
  },
];
