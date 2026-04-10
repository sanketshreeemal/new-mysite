Component Specification: The Identity Grid (Bento)

1. Objective & Aura

The Identity Grid is the "visual abstract" of Sanket Shreemal’s career. It serves to prove Parallel Capacity—showing that the Operator, Builder, and Allocator personas exist simultaneously.

Energy: Architectural, high-signal, disciplined.

Reader Impression: "This is a person who understands complex systems and values high-fidelity execution."

Avoid: Whimsy, overloaded animations, soft/bubbly UI, or "template-like" layouts.

2. Visual Layering (The Stack)

Each card in the grid is built on a 3-layer Z-index stack:

Layer 1: The Canvas Base (SVG/Asset)

Content: Custom motion SVGs or abstract imagery.

Style: Full-fill within the card. High-quality motion (e.g., 3D revolving Ace for PokerUp, steady heart-beat for Miilo).

Goal: To provide "depth" and hint at the project's soul without distracting from the data.

Layer 2: The Liquid Glass (Blur Overlay)

Constraint: A fixed blur layer (backdrop-filter: blur(12px)) that sits over the visual.

Resting State: A semi-translucent "Bone" tint (rgba(249, 249, 249, 0.7)).

Interaction: On hover, the opacity of this blur layer darkens or becomes more opaque, making the text "pop" while the background visual recedes further into the atmosphere.

Layer 3: The Information Layer (Text)

Header: Project Title. Font: Newsreader (Serif). Color: Clay or Carbon.

Role Badge: A sharp-edged, small-text badge (e.g., "OPERATOR"). Font: Inter (Caps).

Subtitle: One-line summary. Font: Inter. Color: Carbon (60-70% opacity).

3. Grid Architecture & Responsiveness

Desktop (3x3 Grid)

Using a CSS Grid with 9 equal modules.

Miilo (2x2): grid-area: 1 / 1 / 3 / 3. (The "Anchor").

PokerUp (1x1): grid-area: 1 / 3.

UrbanLeases (1x1): grid-area: 2 / 3.

SevenQi (3x1): grid-area: 3 / 1 / 4 / 4. (The "Foundation").

Mobile (1-column Stack)

Flow: Miilo → SevenQi → PokerUp → UrbanLeases.

Height: Cards maintain a consistent aspect ratio (e.g., 1:1 for squares, 3:1 for the Allocator bar).

4. Design Tokens (Specific to Bento)

Corner Radius: 4px to 6px (Micro-radius for an architectural feel).

Border: 0.5px solid rgba(26, 26, 26, 0.1).

Background Base: Bone (#F9F9F9).

Page Background: A subtle "Markboard" grid (dots at 24px intervals or ultra-thin 0.5px lines).

5. Interaction Design (Hover States)

No Translation: The card does not move, lift, or scale. It remains grounded.

Blur Manipulation: The "Liquid Glass" layer transitions from 70% opacity to 85% opacity.

Text Prominence: The Carbon text shifts to 100% opacity, and the Clay title may gain a subtle glow or sharpening.

Transition: cubic-bezier(0.4, 0, 0.2, 1) over 300ms.



| Card | Role Badge | Title | Subtitle | Visual Asset Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Miilo** | OPERATOR | Miilo | AI-driven pet-parent communication ecosystem. | Ghibli-esque organic heartbeat (SVG). |
| **SevenQi** | ALLOCATOR | SevenQi | Systematic global capital allocation. | Abstract market liquidity flow (Lines). |
| **PokerUp** | BUILDER | PokerUp | High-stakes social gaming experiment. | 3D Revolving Ace of Spades (Vector). |
| **UrbanLeases** | BUILDER | UrbanLeases | Modernizing urban rental workflows. | Geometric city-grid pulses (SVG). |