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
        id: "rosenberg",
        lane: "institutional",
        type: "wide",
        active: true,
        badge: "Analyst",
        title: "Rosenberg Research",
        description: "Macro research with a bearish/contrarian tilt, publishing thought pieces on macroeconomic trends.",
        topOffset: 60
      },
      {
        id: "miilo",
        lane: "venture",
        type: "split-left",
        active: true,
        badge: "Founder",
        title: "Miilo",
        description: "Started a digital communication ecosystem to manage and monitor pet health, alongside a social media platform bridging veterinarians and pet owners with news and education.",
        topOffset: 60,
        minHeight: 360 // Extends ~60px into 2025 block to show 2025→2026 span
      },
      {
        id: "sevenqi",
        lane: "venture",
        type: "split-right",
        active: true,
        badge: "Portfolio Manager",
        title: "SevenQi",
        description: "Family office portfolio manager making global allocation decisions in public-private investments.",
        topOffset: 60,
        minHeight: 140
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
        badge: "Senior Analyst",
        title: "Fundthrough",
        description: "Managed the performance and lending activities of the entire ~$100M portfolio.",
        topOffset: 90,
        minHeight: 300 // Extends ~130px into 2024 block to show 2024→2025 span
      },
      {
        id: "pokerup",
        lane: "venture",
        type: "wide",
        active: false,
        badge: "Creator",
        title: "PokerUp",
        description: "Created a real-time multi-player poker application to track performance across games.",
        topOffset: 120
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
        active: false,
        badge: "Creator",
        title: "UrbanLeases",
        description: "Created an application for landlords to track their real estate portfolio performance, operations, and more.",
        topOffset: 80
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
        badge: "Analyst",
        title: "Cadillac Fairview",
        description: "Led strategic planning workflows for CF's industrial and retail asset portfolios ($18B) and developed leasing models to assess portfolio risk and return sensitivity. Created a risk monitoring ERM tool flagged across 32 metrics.",
        topOffset: 0,
        minHeight: 240 // Extends ~130px into 2022 block to show 2022→2023 span
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
        badge: "Contract Analyst",
        title: "British Columbia Investments (BCI)",
        description: "Investment research directly supported deployment of ~$450 million across global thematic equity strategies. Pitched and built out the E-merging Billions theme coverage.",
        topOffset: 40,
        minHeight: 190 // Extends ~120px into 2020 block to show 2020→2021 span
      },
      {
        id: "royal",
        lane: "venture",
        type: "wide",
        active: false,
        badge: "External Consultant",
        title: "Royal Embassy Hospitality",
        description: "Spearheaded restructuring of Royal Embassy Hotel during COVID-19, turned around profitability and viability of the asset from recurring losses to 13% net margins. Reached pre-COVID occupancy of 74%.",
        topOffset: -70
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
        isMilestone: false,
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
        minHeight: 340 // Spans through 2018, 2017, 2016, and into 2015
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
        minHeight: 120 // Visual 2-year span: 2018–2019
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2018 — University Era (continued)
   * BNP overflow from 2019 fills split-right (~80px)
   * UBC overflow from 2019 fills split-left
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2018,
    height: 90,
    entries: [],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2017 — University Era (continued)
   * Mobiliya Technologies (split-right, visual span 2016–2017)
   * UBC overflow from 2019 fills split-left
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
        description: "Sales and Partner Management. Pitched proprietary AI and IoT solutions to North American pipelines.",
        topOffset: 10,
        minHeight: 120 // Visual 2-year span: 2016–2017
      }
    ],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2016 — University Era (continued)
   * Mobiliya overflow from 2017 fills split-right (~80px)
   * UBC overflow from 2019 fills split-left
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2016,
    height: 90,
    entries: [],
    beats: []
  },

  /* ══════════════════════════════════════════════════════════════════
   * 2015 — University Era (start)
   * UBC overflow from 2019 fills split-left (~70px)
   * ══════════════════════════════════════════════════════════════════ */
  {
    year: 2015,
    height: 90,
    entries: [],
    beats: []
  }
];
