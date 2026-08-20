/**
 * Data layer for the Parallel Pulse Timeline component.
 * This structure defines the dual-track system (Institutional vs Venture) representing Bandwidth Allocation.
 *
 * Architecture: Individual year blocks from 2026 → 2015 (reverse-chronological, top-to-bottom).
 * Multi-year entries are placed in their MOST RECENT year block and use `minHeight` to
 * visually extend downward into earlier year blocks via CSS overflow: visible.
 */

export interface TimelineEntry {
  id: string;
  lane: 'institutional' | 'venture';
  type: 'wide' | 'split-left' | 'split-right';
  active: boolean; // Triggers Clay highlight (representing current projects)
  badge: string;
  title: string;
  description: string;
  topOffset: number; // Vertical positioning within the year block (in px)
  minHeight?: number; // Optional visual expander — used for multi-year spans
  yearSpan?: string; // Human readable year range (e.g. "2015 – 2019") used for mobile cards
}

export interface TimelineBeat {
  id: string;
  label: string;
  side: 'left' | 'right';
  topOffset: number; // Vertical positioning on the spine within the year block (in px)
  isMilestone: boolean; // Triggers Clay node for major milestones
}

export interface TimelineYearBlock {
  year: number;
  height: number; // The visual height of the year block container in pixels
  entries: TimelineEntry[];
  beats: TimelineBeat[];
}

export const timelineData: TimelineYearBlock[] = [
  /* ══════════════════════════════════════════════════════════════════
   * 2026 — Current
   * Rosenberg (institutional), Miilo (venture, spans into 2025), SevenQi (venture)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2026,
    height: 340,
    entries: [
      {
        id: "miilo",
        lane: "venture",
        type: "split-left",
        active: true,
        badge: "Founder",
        title: "Miilo",
        description: "Building a digital communication ecosystem connecting pet parents with trusted clinics. Streamlining patient intake, structured symptom reviews, and pre-appointment triage that improve medical outcomes for pets.",
        topOffset: 60,
        minHeight: 360,
        yearSpan: "2025 – Present"
      },
      {
        id: "sevenqi",
        lane: "venture",
        type: "split-right",
        active: true,
        badge: "Portfolio Manager",
        title: "SevenQi",
        description: "Structuring and managing a single family office, operating a fund-of-funds model, and making opportunistic co-investments.",
        topOffset: 60,
        minHeight: 140,
        yearSpan: "2026 – Present"
      },
      {
        id: "rosenberg",
        lane: "institutional",
        type: "wide",
        active: false,
        badge: "Specialist",
        title: "Rosenberg Research",
        description: "Macro research with a bearish/contrarian tilt, publishing thought pieces on macroeconomic trends.",
        topOffset: 60,
        yearSpan: "2026"
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2025
   * Fundthrough (institutional, spans into 2024), PokerUp (venture)
   * Miilo overflow from 2026 enters venture split-left area (~60px)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2025,
    height: 260,
    entries: [
      {
        id: "fundthrough",
        lane: "institutional",
        type: "wide",
        active: false,
        badge: "Senior Portfolio Analyst",
        title: "Fundthrough",
        description: "Managed risk & lending activities across a ~$100M portfolio. Built dynamic client risk models reducing bad debt by 4%, and developed SQL business intelligence dashboards improving decision speed by 60%.",
        topOffset: 90,
        minHeight: 300,
        yearSpan: "2024 – 2025"
      },
      {
        id: "pokerup",
        lane: "venture",
        type: "wide",
        active: true,
        badge: "Builder",
        title: "PokerUp",
        description: "Built a social poker application that automates live game tracking, AI ledger settlements, and player performance analytics, eliminating manual bookkeeping for serious games.",
        topOffset: 120,
        yearSpan: "2025"
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2024
   * UrbanLeases (venture), CFA milestones
   * Fundthrough overflow from 2025 enters institutional lane (~130px)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2024,
    height: 240,
    entries: [
      {
        id: "urbanleases",
        lane: "venture",
        type: "wide",
        active: true,
        badge: "Builder",
        title: "UrbanLeases",
        description: "Created a property management platform for independent landlords, providing real-time portfolio visibility, automated tenant communication, and smart financial reporting.",
        topOffset: 80,
        yearSpan: "2024"
      }
    ],
    beats: [
      {
        id: "cfa-charter",
        label: "CFA Charterholder",
        side: "right",
        isMilestone: true,
        topOffset: 40
      },
      {
        id: "cfa-level3",
        label: "CFA Level 3 Exam",
        side: "left",
        isMilestone: false,
        topOffset: 160
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2023
   * Cadillac Fairview (institutional, spans into 2022), CFA L2
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2023,
    height: 170,
    entries: [
      {
        id: "cadillac",
        lane: "institutional",
        type: "wide",
        active: false,
        badge: "Investment Strategy Analyst",
        title: "Cadillac Fairview",
        description: "Led strategic planning workflows for CF's industrial and retail asset portfolios ($18B) and developed leasing models to assess portfolio risk and return sensitivity. Created a risk monitoring ERM tool flagged across 32 metrics.",
        topOffset: 0,
        minHeight: 240,
        yearSpan: "2022 – 2024"
      }
    ],
    beats: [
      {
        id: "cfa-level2",
        label: "CFA Level 2 Exam",
        side: "right",
        isMilestone: false,
        topOffset: 100
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2022
   * CFA L1 beat only — CF overflow from 2023 fills institutional lane
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2022,
    height: 150,
    entries: [],
    beats: [
      {
        id: "cfa-level1",
        label: "CFA Level 1 Exam",
        side: "right",
        isMilestone: false,
        topOffset: 55
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2021
   * BCI (institutional, spans into 2020), Royal Embassy (venture)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2021,
    height: 120,
    entries: [
      {
        id: "bci",
        lane: "institutional",
        type: "wide",
        active: false,
        badge: "Equity Research Analyst",
        title: "British Columbia Investments (BCI)",
        description: "Investment research directly supported deployment of ~$450 million across global thematic equity strategies. Pitched and built out the E-merging Billions theme coverage.",
        topOffset: 40,
        minHeight: 190,
        yearSpan: "2020 – 2021"
      },
      {
        id: "royal",
        lane: "venture",
        type: "wide",
        active: false,
        badge: "Owner-Operator",
        title: "Royal Embassy Hospitality",
        description: "Spearheaded restructuring of Royal Embassy Hotel during COVID-19, turned around profitability and viability of the asset from recurring losses to 13% net margins. Reached pre-COVID occupancy of 74%.",
        topOffset: -70,
        yearSpan: "2021 – 2022"
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2020
   * Undergrad Graduation beat (Dec 2019, placed near 2020 marker)
   * BCI overflow from 2021 fills institutional lane (~120px)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2020,
    height: 120,
    entries: [],
    beats: [
      {
        id: "grad",
        label: "Undergrad Graduation",
        side: "right",
        isMilestone: true,
        topOffset: 130
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2019 — University Era
   * UBC (split-left, spans all the way to 2015)
   * BNP Paribas IB (split-right, visual span 2018–2019)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2019,
    height: 110,
    entries: [
      {
        id: "ubc",
        lane: "institutional",
        type: "split-left",
        active: false,
        badge: "Education",
        title: "B. Int. Economics",
        description: "University of British Columbia. GPA: 3.8. Awarded International Student Scholarship. Thesis: Economic Impact of Domestic Violence in Angola.",
        topOffset: 10,
        minHeight: 340,
        yearSpan: "2015 – 2019"
      },
      {
        id: "bnp",
        lane: "institutional",
        type: "split-right",
        active: false,
        badge: "Internship",
        title: "BNP Paribas IB",
        description: "Worked on several Indian and Indonesian deals valued between $300 million and $1.3 billion including $1.3B IPO of SBI Life Insurance.",
        topOffset: 10,
        minHeight: 120,
        yearSpan: "2018 – 2019"
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2018 — University Era (continued)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2018,
    height: 90,
    entries: [],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2017 — University Era (continued)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2017,
    height: 90,
    entries: [
      {
        id: "mobiliya",
        lane: "institutional",
        type: "split-right",
        active: false,
        badge: "Internship",
        title: "Mobiliya Technologies",
        description: "Sales and Partner Management. Pitched proprietary AI and IoT solutions to North American companies.",
        topOffset: 10,
        minHeight: 120,
        yearSpan: "2016 – 2017"
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2016 — University Era (continued)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2016,
    height: 90,
    entries: [],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2015 — University Era (start)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2015,
    height: 90,
    entries: [],
    beats: []
  }
];
