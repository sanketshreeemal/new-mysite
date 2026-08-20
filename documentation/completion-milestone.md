# Digital HQ — Launch Readiness & Completion Milestone Tracker

> **V1 Launch Strategy**: The goal for V1 is a **Minimum Viable Launch (MVL)**. We aim to populate high-signal, high-quality material across all core sections so the site feels complete, authoritative, and responsive to a general audience. Non-essential polish and deep archives will be iterated on post-launch.

---

## 🎯 V1 Launch Criteria & Progress Overview

### Phase 1: Core Navigation & Infrastructure
- [x] **Fix Navigation Bar & Dropdowns** ([`Navigation.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/components/Navigation.tsx))
  - [x] Connect `Now` link to `/now`
  - [x] Connect `Interests` link to interactive dropdown with sub-routes:
    - [x] 📖 **Reading** -> [`/interests/library`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/library/page.tsx)
    - [x] ✈️ **Travelling** -> [`/interests/travel`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/travel/page.tsx)
    - [x] 💡 **Thinking** -> [`/interests/ideas`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/ideas/page.tsx)
  - [x] Polish dropdown UX: Centered positioning, hover bridge wrapper, 150ms mouseleave delay, clean design.
  - [ ] Connect `About` link to smooth scroll `#identity-grid` or dedicated about section
  - [ ] Connect `Contact` link to footer anchor or email trigger
- [x] **Mobile Timeline Optimization** ([`Timeline.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/components/home/Timeline.tsx))
  - [x] Desktop dual-lane parallel pulse kept 100% untouched
  - [x] Mobile single-spine vertical stream with full-width cards and `INSTITUTIONAL` / `ENTREPRENEURIAL` badges
  - [x] Added right-aligned year range indicators (`yearSpan`) on mobile cards
  - [x] Priority sorting: Active roles (Miilo, SevenQi) float above completed roles (Rosenberg Research)
- [x] **Work Page Header & Positioning** ([`app/work/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/work/page.tsx))
  - [x] Updated Rosenberg Research tenure to Feb 2026 – July 2026 (`active: false`)
  - [x] Integrated custom Work header blurb using standard site-wide typography design tokens
- [ ] **Global Footer & Social Links**
  - [ ] Create `Footer.tsx` with links to Twitter (`@sanketsshreemal`), LinkedIn, GitHub, Email, and RSS feed
  - [ ] Integrate Footer into root [`layout.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/layout.tsx)

---

### Phase 2: Page Routes & Content Engine

#### 1. The `/now` Page
- [x] Data layer in [`now.ts`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/config/now.ts) updated to lightweight focus categories:
  - *Building & Operating* (Miilo, Purple Forest GTM consulting)
  - *Investment Journey* (SevenQi family office, early-stage venture)
  - *Life & Base* (Bangalore routines, workflows, community)
- [x] Built single-column stream [`NowFeed.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/components/now/NowFeed.tsx) and page route [`app/now/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/now/page.tsx)
- [x] Home hero preview widget (`NowPeek.tsx`) connected

#### 2. The `/interests/ideas` (Thinking & Essays) Page
- [x] Built tabbed feed in [`app/interests/ideas/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/ideas/page.tsx) with **Ideas (Short Form)** and **Essays (Long Form)**
- [x] Short Form Ideas: Timeless static card design without hover gold color highlights, tags, or dates
- [x] Created decoupled Markdown content repository (`content/essays/*.md`)
- [x] Brought 3 book essays in-house from `sanketshreemal.com`:
  - [x] *Genghis Khan and the Making of the Modern World* ([`genghis-khan.md`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/content/essays/genghis-khan.md))
  - [x] *Working Backwards: Amazon's Operations & Culture* ([`working-backwards.md`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/content/essays/working-backwards.md))
  - [x] *Sanket & Ogilvy on Advertising* ([`ogilvy-on-advertising.md`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/content/essays/ogilvy-on-advertising.md))
- [x] Dynamic markdown essay parser ([`config/essays.ts`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/config/essays.ts)) & dynamic reader route ([`app/interests/ideas/[slug]/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/ideas/[slug]/page.tsx))

#### 3. The `/interests/travel` Page
- [x] Created route [`app/interests/travel/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/travel/page.tsx)
- [ ] Populate travel log dataset and photo grid

#### 4. The `/interests/library` Page
- [x] Created route [`app/interests/library/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/interests/library/page.tsx) and backward compatible re-export [`app/library/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/library/page.tsx)

---

### Phase 3: Immediate Pending Items for Next Chat Session

1. **Populate `/interests/travel`**: Build out travel entries, location cards, and photography grid.
2. **Build Global `Footer.tsx`**: Create footer with social links (Twitter `@sanketsshreemal`, LinkedIn, GitHub, email) and integrate into `layout.tsx`.
3. **Connect About & Contact Navigation Links**: Smooth scroll or anchor routing.
4. **Migrate Finance Essays** (Optional): Add Finance series into `content/essays/*.md` (*Capital Allocation*, *Bond Basics*, *Sources of Capital*).

---

## 📝 Change Log & Version History

| Date | Phase | Description | Status |
| :--- | :--- | :--- | :--- |
| **2026-08-18** | V1 Kickoff | Initial site audit & milestone tracker setup. | 🟢 Completed |
| **2026-08-18** | Navigation | Built Interests dropdown with 150ms delay, hover bridge, and sub-routes. | 🟢 Completed |
| **2026-08-18** | `/now` Page | Built single-column `/now` page with updated Bangalore focus. | 🟢 Completed |
| **2026-08-19** | Thinking & Essays | Built `/interests/ideas`, created `content/essays/*.md` system, migrated 3 book essays in-house. | 🟢 Completed |
| **2026-08-19** | Mobile Timeline | Built Option 1 Mobile Timeline with left spine, track badges, right-aligned year range indicators, and active role sorting. | 🟢 Completed |
| **2026-08-20** | Work Page | Updated Rosenberg Research tenure and added custom Work header blurb with site design tokens. | 🟢 Completed |
