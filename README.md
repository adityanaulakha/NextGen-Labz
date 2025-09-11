# NextGen Labz – Website (React + Vite)

NextGen Labz is a freelancing company providing a wide range of services:
- Web Development
- UI/UX & Design
- Automation & AI
- Digital Marketing
- Digital Maintenance
- Photography
- Video Production
- Consulting
- DevOps

This site is a fast, responsive single‑page application built with React and Vite. It features an animated hero with SplitText, a GPU‑accelerated DarkVeil background (OGL), a premium tech carousel, services preview, testimonials, and themed pages (Home, About, Contact, Quote). Deployed on Vercel with SPA rewrites.

## ✨ Highlights
- Modern stack: React 18, Vite, React Router, Tailwind CSS
- Animated hero:
  - SplitText component (GSAP-powered) with no-flash, smooth sequencing
  - DarkVeil background (OGL) with ResizeObserver for true responsiveness
- Pages: Home, About, Contact (phone, WhatsApp, Instagram), Quote (SheetDB integration)
- Components: Services Preview, Why Choose Us, Tech Carousel (brand-accurate icons from /src/assets/carousel), Testimonials (3 cards, circular photos), Final CTA
- Fully responsive: mobile, tablet, laptop, desktop
- Vercel SPA rewrites (no 404 on deep links)
- Newsletter in footer is UI-only (no storage)

## 🗂 Project Structure (key files)
```
src/
  components/
    DarkVeil.jsx            # OGL background, responsive & performant
    FinalCTA.jsx            # Banner with primary CTA
    Navbar.jsx              # Transparent navbar, mobile menu
    ServicesPreview.jsx     # Services we offer
    SplitText.jsx           # Reusable text splitter + animation wrapper
    TechCarousel.jsx        # Seamless infinite tech logo carousel
    Testimonials.jsx        # 3 testimonial cards + logos
  pages/
    LandingPage.jsx         # Hero + sections
    About.jsx               # Story, values, team (uses /assets/team)
    Contact.jsx             # Direct contact methods (Call, WhatsApp, Instagram)
    Quote.jsx               # Quote form + SheetDB submission
  assets/
    carousel/               # SVG/PNGs for tech logos (Next.js/Vercel on white bg)
    team/                   # Team images (used on About page)
  App.jsx                   # Routes/layout shell
  main.jsx                  # App bootstrap
index.html
tailwind.config.js
postcss.config.js
vercel.json                 # SPA rewrites + headers
```

## 🚀 Getting Started
Prerequisites: Node.js 18+ and npm

Install
```bash
npm install
```

Run (dev)
```bash
npm run dev
```
Open the printed local URL (e.g., http://localhost:5173).

Build
```bash
npm run build
```

Preview production build
```bash
npm run preview
```

## 🔧 Configuration

### 1) Quote form → Google Sheet (SheetDB)
Set the endpoint via an environment variable:

Create `.env` (not committed):
```
VITE_SHEETDB_QUOTE_API=https://sheetdb.io/api/v1/wxhkcc0bvqvn9
```

In `src/pages/Quote.jsx`:
```js
const SHEETDB_API = import.meta.env.VITE_SHEETDB_QUOTE_API;
```

Expected Google Sheet columns:
```
Timestamp | Name | Email | Company | Services | Budget | Timeline | Priority | Description | Status | Notes
```

Newsletter: intentionally UI-only (no API calls).

### 2) Vercel SPA Rewrites (avoid 404 on deep links)
`vercel.json` forwards all routes to `index.html`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    { "source": "/(.*)", "headers": [
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]}
  ]
}
```

## 🧩 Key Components
- DarkVeil.jsx — OGL animated veil, responsive via ResizeObserver.
- SplitText.jsx — Char/word splitting, no-flash reveal, smooth stagger.
- TechCarousel.jsx — rAF seamless loop; local brand assets.
- Testimonials.jsx — 3 cards, circular photos, aligned content.
- ServicesPreview.jsx — Mirrors services offered (and used in Quote form).

## 📱 Responsiveness
- `h-[100svh]` hero on mobile; clamped typography (`text-[vw]` + breakpoints).
- Grids: 1 → 2 → 3/4 columns.
- Global `overflow-x-hidden`.
- DarkVeil scales to container with DPR-aware sizing.

## 🧭 Routes
- `/`        → Landing Page
- `/about`   → About (team, story, values)
- `/contact` → Contact (Call, WhatsApp, Instagram)
- `/quote`   → Get Quote (SheetDB submission)

## 🖼 Assets
- Tech logos: `src/assets/carousel/…`
- Team photos: `src/assets/team/…`
- Brochure PDF: imported in `LandingPage.jsx` and opened in a new tab.

## 🔒 Accessibility & UX
- Skip link, landmarks, focus-visible styles.
- Reduced-motion guards.
- Reserved space to avoid layout shift in SplitText sequences.

## 🛠 Troubleshooting
- 404 on deep links (Vercel): ensure `vercel.json` is deployed (see rewrites).
- Assets not showing: verify import paths in `/src/assets`.
- SheetDB: check `VITE_SHEETDB_QUOTE_API` and column headers.

## 🗺 Future Improvements
- Section reveal timelines (GSAP/Framer Motion)
- Responsive image `srcset`
- CMS integration (Sanity)
- Unit tests for form logic and utilities

## 📄 License
Proprietary – All rights reserved by NextGen Labz.