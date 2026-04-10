Project Digital HQ: sanketshreemal.com

1. Project Vision

To create a high-signal, design-forward personal asset that showcases Sanket Shreemal as a multi-hyphenate leader: Operator, Builder, and Capital Allocator. The site must balance the corporate pedigree of North American institutional finance with the high-velocity "bias for action" of the Indian tech ecosystem.

2. Technical Strategy

Framework: Next.js (App Router)

Styling: Tailwind CSS + Framer Motion (for "Spring" animations)

UI Components: Shadcn UI (Primitives for consistency)

Data Strategy: Config-driven (Centralized JSON/TS files for Timeline, /Now, and Books)

Architecture: - /app: Page routes

/components: Modular, reusable UI elements

/config: Centralized content and design tokens

/public: Assets (optimized images and SVGs)

3. Design System: "Carbon, Bone, & Clay"

A centralized tokens.ts will define these to ensure visual harmony.

Background: #F9F9F9 (Bone)

Text/Primary: #1A1A1A (Carbon)

Accent: #A57C5B (Clay)

Typography:

Display/Headlines: Newsreader (Serif) - Focused on visual hierarchy and "weight."

Body/UI: Inter (Sans-Serif) - Focused on legibility and clean data presentation.

Hierarchy: Heavy use of negative space, 0.5pt borders, and consistent 4px/8px/16px spacing scales.

4. Component Breakdown (Home Page)

A. The Hero Component (/components/home/Hero.tsx)

Large-scale Serif name intro.

Tagline: "Operator. Builder. Capital Allocator."

Subtle "Location" indicator: "Toronto ↔ Bangalore ↔ Singapore."

B. The Identity Grid (/components/home/BentoGrid.tsx)

A 3x3 CSS Grid (Responsive to 1-column on mobile).

Slot [1-2, 1-2]: Miilo (Operator) - High-fidelity abstract imagery.

Slot [3, 1]: PokerUp (Builder) - Product-focused card.

Slot [3, 2]: UrbanLeases (Builder) - Product-focused card.

Slot [1-3, 3]: SevenQi (Capital Allocator) - Horizontal anchor card.

C. The Parallel Pulse Timeline (/components/home/Timeline.tsx)

Central Spine: Vertical SVG line.

Parallel Tracks: - Track 1: Institutional (BCI, OTPP)

Track 2: Venture/Personal (Miilo, PokerUp, UrbanLeases)

Nodes: Singular "Beats" (CFA, University).

Interaction: Hovering on a "Span" (Vertical Pill) triggers a tooltip with high-signal stats (e.g., "$200B AUM").

Implementation: Driven by config/timeline.ts.

D. The Personal Grid (/components/home/PersonalSection.tsx)

3-column minimalist grid:

"I read a lot" -> /books

"I travel a lot" -> /travel

"I think a lot" -> /ideas

Hover state: Card background transitions slightly toward the Clay accent.

E. The Now Pulse (/components/home/NowPeek.tsx)

A single-line "Live" status update.

Timestamp: "Last updated: Oct 2023."

Link to /now.

5. Directory Structure

/
├── app/
│   ├── page.tsx (Home)
│   ├── now.tsx
│   ├── books.tsx
│   └── layout.tsx
├── components/
│   ├── ui/ (Shadcn)
│   ├── home/ (Bento, Timeline, Hero)
│   └── shared/ (Nav, Footer)
├── config/
│   ├── tokens.ts (Colors, Spacing)
│   ├── timeline.ts (Data for the Pulse)
│   └── content.ts (About text, project details)
└── public/
    └── images/ (Project covers)


6. Optimization Goals

Responsiveness: Full-width liquid layouts that stack elegantly on mobile.

Interactivity: Subtle transitions using Framer Motion on the Bento cards and Timeline spans.

Scalability: Adding a new /now entry or a new project should only require a JSON update in config/.