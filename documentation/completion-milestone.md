# Digital HQ — Launch Readiness & Completion Milestone Tracker

> **V1 Launch Strategy**: The goal for V1 is a **Minimum Viable Launch (MVL)**. We aim to populate high-signal, high-quality material across all core sections so the site feels complete, authoritative, and responsive to a general audience. Non-essential polish and deep archives will be iterated on post-launch.

---

## 🎯 V1 Launch Criteria & Progress Overview

### Phase 1: Core Navigation & Infrastructure
- [ ] **Fix Navigation Bar Dummy Links** ([`Navigation.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/components/Navigation.tsx))
  - [x] Connect `Now` link to `/now`
  - [ ] Connect `Interests` link to `/library`
  - [ ] Connect `About` link to smooth scroll `#identity-grid` or dedicated about section
  - [ ] Connect `Contact` link to footer anchor or email trigger
- [ ] **Global Footer & Social Links**
  - [ ] Create `Footer.tsx` with links to Twitter (`@sanketsshreemal`), LinkedIn, GitHub, Email, and RSS feed
  - [ ] Integrate Footer into root [`layout.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/layout.tsx)

---

### Phase 2: Missing Page Routes (V1 Essentials)

#### 1. The `/now` Page
- [x] Data layer in [`now.ts`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/config/now.ts) enhanced with structured categories & historical dispatches
- [x] Home page widget preview (`NowPeek.tsx`) working
- [x] Created [`NowFeed.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/components/now/NowFeed.tsx) with categorized focus blocks & past dispatches archive
- [x] Created [`app/now/page.tsx`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/app/now/page.tsx) page route adhering to design system

#### 2. The `/travel` Page
- [ ] Create `app/travel/page.tsx` displaying a clean grid/list of places & photos
- [ ] Populate [`travel.ts`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/config/travel.ts) with real travel logs (locations, dates, key reflections)
- [ ] Add travel photos into `public/images/travel/`

#### 3. The `/ideas` (Essays & Notes) Page
- [ ] Create `app/ideas/page.tsx` for long-form thoughts & essays
- [ ] Migrate existing essays from `sanketshreemal.com`:
  - [ ] **Finance Series**: *Sources of Capital & Capital Structure*, *Capital Allocation*, *Bond Basics*, *Bond Characteristics*, *Anatomy of a Bond*
  - [ ] **Book Highlights**: *Genghis Khan*, *Working Backwards*, *Ogilvy on Advertising*
- [ ] Draft & publish new essays based on [`writing-ideas.md`](file:///Users/sanketshreemal/Documents/Projects/Cursor/new-mysite/documentation/writing-ideas.md):
  - [ ] *Urban Company & Formalizing India's Informal Economy*
  - [ ] *Time, IST, and the Productivity Cost of Unpunctuality in India*

---

### Phase 3: Content Collection Checklist (Information Needed from Sanket)

- [ ] **Travel Data & Imagery**:
  - List of 5–10 key cities/countries visited + dates + 1-sentence note
  - 5–10 travel photos for `/travel`
- [ ] **Social & Contact Handles**:
  - Preferred public email for inquiries
  - Twitter handle (`@sanketsshreemal`), LinkedIn URL, GitHub URL
- [ ] **CV PDF**:
  - Latest resume PDF to link at `/public/resume.pdf`

---

## 🚀 Post-V1 Backlog (Iterative Updates After Launch)

- [ ] Interactive project modal / detail case studies for Bento cards (Miilo, PokerUp, UrbanLeases, SevenQi)
- [ ] Dark mode toggle / tone switcher
- [ ] Interactive RSS feed generator (`/feed.xml`)
- [ ] Dynamic reading progress & interactive CFA notes viewer (SayEBITDAH integration)

---

## 📝 Change Log & Updates

| Date | Phase | Description | Status |
| :--- | :--- | :--- | :--- |
| **2026-08-18** | V1 Kickoff | Completed comprehensive site audit & created completion milestone tracker. | 🟢 Initialized |
