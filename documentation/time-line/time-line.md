Component Specification: Parallel Pulse Timeline

1. Objective & Design Philosophy

The Parallel Pulse is a high-signal data visualization tool designed to showcase concurrent professional paths. It moves beyond a linear resume by demonstrating "Bandwidth Allocation" across two primary lanes: Institutional/Capital and Venture/Building.

Aura: Architectural, systematic, and serious.

Palette: - Background: Bone (#F9F9F9)

Primary Text: Carbon (#1A1A1A)

Highlights: Clay (#A57C5B)

Typography: Headlines in Newsreader (Serif), UI/Body in Inter (Sans-Serif).

2. Technical Architecture

The component must be built using Next.js (App Router) and Tailwind CSS. It relies on a three-tier structure:

Config Layer (/config/timeline.ts): Defines the data.

Component Layer (/components/home/Timeline.tsx): Handles the visual rendering logic.

Page Layer (/app/page.tsx): Exposes the component on the landing page.

2.1 The Data Schema (Config)

The developer should follow this TypeScript interface to ensure the component is easily updateable:

export interface TimelineEntry {
  id: string;
  year: number;
  lane: 'institutional' | 'venture';
  type: 'wide' | 'split-left' | 'split-right';
  active: boolean; // Triggers Clay highlight
  badge: string;
  title: string;
  description: string;
  topOffset: number; // Vertical positioning within the year block
  minHeight: number;
}

export interface TimelineBeat {
  id: string;
  year: number;
  label: string;
  side: 'left' | 'right';
  topOffset: number;
  isMilestone: boolean; // Triggers Clay node
}


3. Structural Constraints (The "Logic")

To maintain the professional look achieved in the prototype, the developer must adhere to these fixed-grid rules:

The Spine: A centered 1px line. Nodes (Beats) must be vertically centered on this line.

Lanes: Two tracks, each exactly 450px wide on desktop.

Sanctuary Zone: A 100px gap between lanes to house the spine, nodes, and year markers. This prevents visual overlap.

Bandwidth Logic: - wide: Card fills the 450px lane.

split-left/right: Card fills ~217px (half lane minus gap) to show parallel projects side-by-side.

Vertical Spacing: Year blocks are height-compressed by ~15% from the original prototype to reduce excessive scrolling.

4. Interaction & Responsiveness

Static State: No hover effects on cards. The site should feel grounded and "printed."

Current Focus: Cards with active: true receive a Clay border and a subtle 4% Clay background tint.

Text Wrapping: Containers must use flex-direction: column and min-height instead of fixed heights to ensure text wraps correctly and never bleeds outside the 0.5px card border.

Mobile: On screens <1000px, lanes should transition to percentage-based widths (~42%) and the spine gap should narrow to 40px.

5. Pitfalls & Refinements (Developer Watch-list)

The developer must avoid these specific issues identified during prototyping:

Z-Index Layering:

Level 5: The Spine.

Level 10: The Year Markers/Cards.

Level 25: The Beats (Nodes). Crucial: If Beats are lower than Cards, labels will be hidden by background blur.

Absolute Positioning Drift: Ensure all cards are positioned relative to their specific Lane container, not the global timeline wrapper. This prevents cards from "leaking" across the spine.

Text Bleeding: Do not use overflow: hidden alone. Use word-wrap: break-word and ensure padding is consistent on all four sides of the card.

Spine Visibility: Use a 2px border on the beat-dot using the Bone background color to create a "mask" effect over the spine, making the node pop.

6. Project Integration

Step 1: Define the timelineData array in config/timeline.ts.

Step 2: Map through timelineData inside Timeline.tsx to generate YearBlock wrappers.

Step 3: Pass a clay flag to the BeatDot component for major milestones like the CFA Charter.




Sample Code for design:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parallel Pulse Timeline | Sanket Shreemal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bone: #F9F9F9;
            --carbon: #1A1A1A;
            --clay: #A57C5B;
            --grid-dot: rgba(26, 26, 26, 0.05);
            --lane-width: 450px;
            --spine-gap: 80px;
            --col-gap: 16px;
        }

        body {
            background-color: var(--bone);
            font-family: 'Inter', sans-serif;
            color: var(--carbon);
            margin: 0;
            overflow-x: hidden;
            background-image: radial-gradient(var(--grid-dot) 1px, transparent 0);
            background-size: 24px 24px;
        }

        .serif { font-family: 'Newsreader', serif; }

        .timeline-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            padding: 80px 0;
        }

        /* Fixed Centered Spine */
        .spine {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: rgba(26, 26, 26, 0.1);
            transform: translateX(-50%);
            z-index: 5;
        }

        .year-marker {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bone);
            padding: 4px 12px;
            font-family: 'Newsreader', serif;
            font-style: italic;
            font-size: 0.8rem;
            color: rgba(26, 26, 26, 0.3);
            z-index: 15;
        }

        .track-labels {
            display: flex;
            justify-content: center;
            gap: var(--spine-gap);
            width: 100%;
            position: sticky;
            top: 40px;
            z-index: 30;
            pointer-events: none;
            margin-bottom: 40px;
        }

        .track-label {
            width: var(--lane-width);
            text-align: center;
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 0.25em;
            color: rgba(26, 26, 26, 0.25);
            font-weight: 600;
        }

        /* Grid Structure */
        .year-block {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: var(--spine-gap);
        }

        /* Lane container */
        .lane {
            width: var(--lane-width);
            position: relative;
            height: 100%;
        }

        /* Card System */
        .card {
            position: absolute;
            border-radius: 4px;
            border: 0.5px solid rgba(26, 26, 26, 0.1);
            background: rgba(255, 255, 255, 0.85);
            padding: 16px;
            backdrop-filter: blur(12px);
            z-index: 10;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            word-wrap: break-word;
            overflow: hidden;
        }

        /* Column Logic within a Lane */
        .card.wide { width: 100%; left: 0; }
        .card.split-left { width: calc(50% - (var(--col-gap) / 2)); left: 0; }
        .card.split-right { width: calc(50% - (var(--col-gap) / 2)); right: 0; }

        /* Highlight current projects */
        .card.active {
            border-color: var(--clay);
            background: rgba(165, 124, 91, 0.04);
        }

        .card .badge {
            font-size: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--clay);
            font-weight: 700;
            margin-bottom: 4px;
        }

        .card .title {
            font-family: 'Newsreader', serif;
            font-size: 1.1rem;
            margin-bottom: 4px;
            line-height: 1.1;
        }

        .card .desc {
            font-size: 0.68rem;
            line-height: 1.4;
            color: rgba(26, 26, 26, 0.6);
            flex-grow: 1;
        }

        /* Spine Nodes (Beats) */
        .beat-container {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0;
            height: 0;
            z-index: 25;
        }

        .beat-dot {
            width: 6px;
            height: 6px;
            background: var(--carbon);
            border-radius: 50%;
            border: 2px solid var(--bone);
            box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.1);
        }

        .beat-label {
            position: absolute;
            font-size: 0.7rem;
            font-weight: 600;
            white-space: nowrap;
            display: flex;
            align-items: center;
            color: var(--carbon);
        }

        .beat-label::before, .beat-label::after {
            content: '';
            width: 12px;
            height: 1px;
            background: rgba(26, 26, 26, 0.15);
            margin: 0 10px;
        }

        .label-l { flex-direction: row-reverse; right: 8px; }
        .label-r { flex-direction: row; left: 8px; }

        /* Adjusted Block Heights (Compact by ~15%) */
        .h-2026 { height: 410px; }
        .h-2025 { height: 270px; }
        .h-2024 { height: 360px; }
        .h-2021 { height: 320px; }
        .h-2018 { height: 410px; }

        /* Responsive handling for smaller viewports */
        @media (max-width: 1000px) {
            :root {
                --lane-width: 42%;
                --spine-gap: 40px;
            }
            .card .title { font-size: 1rem; }
            .card .desc { font-size: 0.62rem; }
        }
    </style>
</head>
<body>

    <div class="max-w-4xl mx-auto pt-20 pb-4 px-12">
        <h2 class="serif text-5xl mb-4">Parallel Pulse</h2>
        <p class="text-xs opacity-50 max-w-lg leading-relaxed">Mapping professional bandwidth: institutional systems versus high-velocity venture building.</p>
    </div>

    <div class="timeline-wrapper">
        <div class="spine"></div>
        
        <div class="track-labels">
            <div class="track-label">Institutional / Capital</div>
            <div class="track-label">Venture / Building</div>
        </div>

        <!-- 2026 -->
        <div class="year-block h-2026">
            <div class="year-marker">2026</div>
            
            <div class="lane">
                <div class="card wide active" style="top: 70px; min-height: 140px;">
                    <span class="badge">Allocator</span>
                    <span class="title">SevenQi</span>
                    <p class="desc">Portfolio Manager. Overseeing systematic cross-asset allocation and systematic capital deployment strategies.</p>
                </div>
            </div>

            <div class="beat-container" style="top: 40px;">
                <div class="beat-dot"></div>
                <div class="beat-label label-r">Move to Bangalore 🇮🇳</div>
            </div>

            <div class="lane">
                <div class="card split-left active" style="top: 110px; min-height: 160px;">
                    <span class="badge">Operator</span>
                    <span class="title">Miilo</span>
                    <p class="desc">Founder. Spearheading the D2C AI transformation in pet-care, bridging tech and pet-parenting.</p>
                </div>
                <div class="card split-right" style="top: 110px; min-height: 160px;">
                    <span class="badge">Builder</span>
                    <span class="title">PF</span>
                    <p class="desc">Founder. Experiments in real-time voice synthesis and localized digital identities.</p>
                </div>
            </div>
        </div>

        <!-- 2025 -->
        <div class="year-block h-2025">
            <div class="year-marker">2025</div>
            <div class="lane"></div>
            <div class="lane">
                <div class="card wide" style="top: 40px; min-height: 115px;">
                    <span class="badge">Builder</span>
                    <span class="title">PokerUp</span>
                    <p class="desc">Social-first gaming experiment. Designing for psychological stakes and social engagement.</p>
                </div>
            </div>
        </div>

        <!-- 2024 -->
        <div class="year-block h-2024">
            <div class="year-marker">2024</div>
            <div class="lane">
                <div class="card wide" style="top: 20px; min-height: 130px;">
                    <span class="badge">Institutional</span>
                    <span class="title">OTPP</span>
                    <p class="desc">Associate. Managing direct equity exposure within Global Technology and Healthcare portfolios for Ontario Teachers'.</p>
                </div>
            </div>

            <div class="beat-container" style="top: 180px;">
                <div class="beat-dot"></div>
                <div class="beat-label label-r">CFA Level 1 Exam</div>
            </div>

            <div class="lane">
                <div class="card wide" style="top: 220px; min-height: 110px;">
                    <span class="badge">Builder</span>
                    <span class="title">UrbanLeases</span>
                    <p class="desc">PropTech. Optimizing residential rental workflows through automated data aggregation and lead scoring.</p>
                </div>
            </div>
        </div>

        <!-- 2021 -->
        <div class="year-block h-2021">
            <div class="year-marker">2021</div>
            <div class="lane">
                <div class="card wide" style="top: 80px; min-height: 130px;">
                    <span class="badge">Institutional</span>
                    <span class="title">BCI</span>
                    <p class="desc">Buy-side Equity Research. Quantitative and qualitative analysis for core public market strategies ($200B AUM).</p>
                </div>
            </div>
            <div class="beat-container" style="top: 40px;">
                <div class="beat-dot" style="background: var(--clay);"></div>
                <div class="beat-label label-r" style="color: var(--clay)">CFA Charterholder</div>
            </div>
            <div class="lane"></div>
        </div>

        <!-- Undergrad Foundation -->
        <div class="year-block h-2018">
            <div class="year-marker">2018</div>
            <div class="lane">
                <div class="card split-left" style="top: 40px; min-height: 250px; opacity: 0.9;">
                    <span class="badge">Education</span>
                    <span class="title">B.Comm (Hons)</span>
                    <p class="desc">UBC. Specializing in Finance & Real Estate. Portfolio Management Foundation member.</p>
                </div>
                <div class="card split-right" style="top: 40px; min-height: 110px; opacity: 0.7;">
                    <span class="badge">Internship</span>
                    <span class="title">Investment Banking</span>
                    <p class="desc">Summer Analyst program. Focused on M&A advisory and valuation modeling.</p>
                </div>
                <div class="card split-right" style="top: 170px; min-height: 110px; opacity: 0.7;">
                    <span class="badge">Internship</span>
                    <span class="title">Capital Markets</span>
                    <p class="desc">Rotation in Equity Capital Markets. Syndicate and transaction analysis.</p>
                </div>
            </div>
            <div class="beat-container" style="top: 190px;">
                <div class="beat-dot"></div>
                <div class="beat-label label-l">University Graduation</div>
            </div>
            <div class="lane"></div>
        </div>
    </div>

    <div class="h-64"></div>
</body>
</html>