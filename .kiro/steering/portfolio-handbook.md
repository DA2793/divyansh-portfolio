---
inclusion: manual
---

# Divyansh Ahuja Portfolio — Complete Project Handbook

This is the master handover document. A fresh Kiro session (or a human) reading
this file end-to-end has everything needed to continue working on the
portfolio site. Written September 2026, at the point the project moved off the
Amazon work machine onto Divyansh's personal PC.

---

## 1. What the site is

A single-page personal portfolio for Divyansh Ahuja — Supply Chain &
Operations Manager (Amazon EU & NA middle mile; previously BFSI customer
operations at iEnergizer for Credit One Bank). Two long-form "experience
detail" pages sit behind the main page. No backend, no CMS, no auth, no forms:
every word on the site is hardcoded in JSX.

Voice: confident, metric-led, short sentences. Dark navy sections alternate
with warm off-white ones; yellow is the only accent. Numbers do the talking
("€15M+", "90%", "99%+").

Owner contact as published on the site:
- Email `da.2793@yahoo.com`
- Phones `+91 9599411791` (listed first), `+91 7995028078`
- LinkedIn `https://linkedin.com/in/divyanshahuja`
- Location "New Delhi, India"

## 2. Repository and deployment

- Repo: `github.com/DA2793/divyansh-portfolio`. Single branch `main`, which
  is also what deploys. No dev branch, no PR flow — commit to main, push.
- Stack: **Vite 4.5** + **React 18** (JSX, no TypeScript) + **Tailwind 3.3**
  + **react-router-dom 7** + **framer-motion 12** (lazy-loaded). No tests,
  no lint, no CI.
- Hosting: **Vercel**, auto-deploys from `main`. A `vercel.json` existed
  during the August 2025 setup and was removed in commit 60a1452; the project
  now relies on Vercel's default Vite preset (build `npm run build`, output
  `dist`). Live domain and project settings live only in the Vercel
  dashboard — nothing in the repo records them.
- **Quality gate:** `npm run build` must pass before any push. That is the
  only automated check that exists. Eyeball `npm run dev` on mobile width
  (the Navbar overlay and Hero card were the source of most past bugs).
- `.gitignore` is just `node_modules/` and `dist/`. Both are regenerable.
  Everything else in the folder is tracked — there are no secrets, env files
  or private data anywhere in this project.
- git identity used for commits: `Divyansh Ahuja <da.2793@yahoo.com>`.

### Setting up on a new machine
1. Install Node.js 20 LTS or newer (last verified on Node 24.14 / npm 11.9).
2. `git clone https://github.com/DA2793/divyansh-portfolio.git`
3. `npm install` (the `.npmrc` `unsafe-perm=true` is a leftover from the
   Vercel permission fight in Aug 2025; npm 11 warns about it, harmless).
4. `npm run dev` → http://localhost:5173. `npm run build` → `dist/`.
5. Nothing to restore manually. No `.env`, no business folder, no keys.

### Scripts (`package.json`)
- `dev` — `vite`
- `build` — `node ./node_modules/vite/bin/vite.js build` (direct path,
  another Vercel-permission workaround; behaves identically to `vite build`)
- `preview` — `vite preview`

`vite` is listed under `dependencies` rather than `devDependencies`. Leave it;
Vercel builds with it there and it has been stable.

## 3. Site architecture

```
index.html                     SEO meta, favicon, Font Awesome + Inter (CDN, non-blocking), body bg #071a2f
src/main.jsx                   StrictMode > BrowserRouter > App
src/App.jsx                    Routes, section order, ScrollToHash, skip link, "Career Impact" banner
src/index.css                  @tailwind directives + one focus-visible rule
src/components/
  Navbar/Navbar.jsx            fixed nav, scroll-spy, full-screen mobile overlay
  Hero/Hero.jsx                headline, metrics, career card (no id)
  About/About.jsx              #about — bio + 3 cards
  Experience/Experience.jsx    #experience — Amazon + iEnergizer cards → detail pages
  Experience/AmazonDetail.jsx  route /amazon
  Experience/IEnergizerDetail.jsx  route /ienergizer
  Skills/Skills.jsx            #skills — 3 capability cards
  Education/Education.jsx      #education
  Projects/Projects.jsx        #projects — 1 featured + 4 grid
  Achievements/Achievements.jsx  #achievements — tiered awards
  Certifications/Certifications.jsx  #certifications — 3 trainings
  Contact/Contact.jsx          #contact — links only
  Footer/Footer.jsx
  NotFound/NotFound.jsx        route *
  AnimateOnScroll/AnimateOnScroll.jsx  lazy framer-motion fade-up wrapper
  LoadingSpinner/              EMPTY folder (git does not track it; harmless)
public/                        amazon.png, ienergizer.png, profile-pic.jpg, DA-logo.png (favicon),
                               Divyansh_Ahuja_CV.pdf (unreferenced), vite.svg (unreferenced)
```

### Routes (`src/App.jsx`)
| Path | Renders |
|---|---|
| `/` | `<main id="main-content">` Hero → About → Experience → Skills → Education → Projects → Achievements → inline "Career Impact" banner → Certifications → Contact, then Footer |
| `/amazon` | `AmazonDetail` (renders its own Footer) |
| `/ienergizer` | `IEnergizerDetail` (renders its own Footer) |
| `*` | `NotFound` |

`Navbar` sits outside `<Routes>` so it is on every page. All route components
are static imports — nothing route-level is lazy.

`ScrollToHash` (App.jsx): on every `pathname`/`hash` change, if there is a
hash it waits 100 ms then `scrollIntoView({behavior:'smooth'})` on that id;
otherwise `window.scrollTo(0,0)`. This is what makes "Back to Home" and
`/#experience` links from the detail pages land on the right section. Both
detail pages also `scrollTo(0,0)` on mount and set `document.title`
("Divyansh Ahuja – Amazon Experience" / "… – iEnergizer Experience"),
restoring the default title on unmount.

### Navbar (`Navbar.jsx`)
- Menu items (in order): About, Experience, Skills, Projects, Achievements,
  Contact → `#id` on home, `/#id` elsewhere. Education and Certifications are
  deliberately NOT menu items (they are still scroll-spied).
- Scroll-spy: first section whose top ≤ 120 px and bottom > 120 px is active
  (`text-yellow-400`); within 100 px of page bottom forces Contact active.
- Adds `border-b shadow-lg` after 20 px of scroll.
- Mobile (`< md`): hamburger renders only while closed; open state is a
  separate full-screen `fixed inset-0 z-[60]` overlay with its own close
  button. Body gets `overflow:hidden; position:fixed; width:100%` while open.
  Closes on link click and on any route change. This structure was arrived
  at after several Safari bugs (commits 4fac4e3, 50903d6) — don't collapse it
  back into a single toggled element.
- Logo is text ("Divyansh Ahuja"), not an image. `DA-logo.png` is favicon only.

### AnimateOnScroll
`lazy(() => import("framer-motion"))` → `motion.div` with
`initial {opacity:0,y:20}` → `whileInView {opacity:1,y:0}`, `once:true`,
`margin:"-40px"`, `duration 0.4`, optional `delay` prop. Suspense fallback
renders the children un-animated, so content is never blocked on the chunk.
This is the ONLY framer-motion import in the codebase — keeping it that way is
what halved the initial bundle (commit 10d8130). Used in About, Experience,
Skills, Education, Projects, Contact. Not used in Hero (must paint instantly),
Achievements, Certifications, Footer, detail pages.

### Performance decisions already made (don't undo)
- Font Awesome 6.4.0 and Google Fonts Inter are loaded via
  `<link rel="preload" as="style" onload="this.rel='stylesheet'">` with
  `<noscript>` fallbacks (commit 910d069 — fixed a 6 s Safari delay).
- `<body style="background-color:#071a2f">` in index.html prevents the white
  flash before React mounts (commit 39415e8).
- No `backdrop-blur` / `filter: blur` anywhere — removed for Safari
  (910d069). Background glow circles were removed too (4e97694).
- Experience card logos use `loading="lazy"`.

## 4. Content map (what lives where)

Everything below is hardcoded. To change copy, edit the file named.

### Hero (`Hero.jsx`)
- Name, headline "Supply Chain & Operations Manager", sub-headline
  "€15M+ Impact · Amazon EU & NA / Fraud Risk & BFSI Ops | Network
  Optimization · Automation" (mirrors the LinkedIn headline — keep in sync).
- Tagline "Manager of the Year – Amazon 2025. Delivered €15M+ cost savings…".
- Metrics: €15M+ Cost Savings Delivered · 95%+ CSAT in BFSI Operations ·
  Supply Chain & BFSI Operations Leadership.
- Career card: Amazon "Supply Chain Operations Manager" 2021 — Present;
  iEnergizer "Assistant Operations Manager" 2019 — 2021; "Operations Team
  Lead" 2017 — 2019; "Senior Customer Service Executive" 2015 — 2017.
- Links: LinkedIn, mailto. **No CV download link** (the PDF in `public/` is
  orphaned — see §8).

### About (`About.jsx`)
Three bio paragraphs, then cards: "What Drives Me" (3 items), "Core
Competencies" (5 items, includes "Service Delivery & Customer Operations
(BFSI)"), "Data & Automation" (6 items: SQL, Python, Advanced Excel,
QuickSight; Generative AI; Workflow Automation; Data Analytics; Dashboarding;
RCA). Internal Amazon jargon was intentionally stripped (commit be27e0b) —
keep it generic.

### Experience (`Experience.jsx`) — canonical employment data
- Amazon — Supply Chain Operations Manager — Sep 2021 – Present.
  Impact chips: €15M+ Cost Savings · 90% Manual Effort Reduced · EU+NA
  Markets Led. Four bullets. "Explore Work →" → `/amazon`.
- iEnergizer — "Credit One Bank – US Credit Card Issuer" — 2015 – 2021.
  Progression: Assistant Manager – Operations 2019–2021 (active) · Operations
  Team Lead 2017–2019 · Senior Customer Service Executive 2015–2017.
  Impact chips: 99%+ Quality Score · 95%+ CSAT. Four bullets, including
  workforce planning "300+ to 1,500+ employees". "Explore Work →" →
  `/ienergizer`.

### Skills (`Skills.jsx`) — "Core Capabilities"
Three cards: Network & Capacity Ownership · Operational Control & Reliability
· Systems Thinking & Execution. Each has a tagline (e.g. "Cost ↓ · Speed ↑ ·
Network Stability"), a highlight sentence and 3–4 bullets.

### Education (`Education.jsx`)
Bachelor of Engineering, Mechanical Engineering, RTM Nagpur University ·
Nagpur, India, Class of 2017.

### Projects (`Projects.jsx`) — "Selected Work"
Featured: "European Transportation Network Optimization" (Amazon, AI ·
Network Strategy, €1.8M+). Grid: Truck Scheduling Optimization ($11M est.),
Operational Workflow Automation (90–95% manual effort), Real-Time Analytics &
Performance Systems (95% reporting effort · 30% evaluation consistency),
Operations Program Launch — Fraud & Protection (iEnergizer, 99% quality ·
100% CSAT). Company accent colours: Amazon `#FF9900`, iEnergizer `#4a9eff`.

### Achievements (`Achievements.jsx`)
- Tier 0: Amazon 2025 **Manager of the Year** (3 bullets).
- Tier 1: Amazon Q1 2025 Manager of the Quarter (Automation & Visibility);
  Amazon Q1 2024 Manager of the Quarter (AI-led Cost Optimization, €1.8M).
- Tier 2: iEnergizer 2020 **Global Supervisor of the Year** (Credit One Bank).
- Tier 3 chips: Amazon Manager of the Month — Sep '25, Jun '25, Jan '25,
  Dec '24, Sep '24, Mar '24, Jan '23. iEnergizer Team Supervisor of the Month
  — Aug '19, May '18. iEnergizer Quality Champion of the Year — 2016.
Adding a new Manager of the Month = add a string to the chips array.

### Certifications (`Certifications.jsx`) — "Certifications & Training"
AutoCAD (CETPA Infotech, Noida, 2013) · Production & Bottling (Radico Khaitan
Ltd., Rampur, 2014) · Assembly Line Operations (International Tractors Ltd.,
Hoshiarpur, 2015).

### Contact (`Contact.jsx`) / Footer (`Footer.jsx`)
Email, two phones (one per row, 9599 first — commit 122bcd9), location,
LinkedIn card. Footer: dynamic © year, LinkedIn, mailto. No GitHub links
anywhere — removed deliberately in commit 7b51412; don't re-add.

### Detail pages
- `AmazonDetail.jsx` (`/amazon`): hero (Hyderabad, Telangana; Sep 2021 –
  Present; metrics $11M+ / €1.8M / 90%+ / Gen AI), then 8 chapters — team
  15→25, ad hoc bid analysis (111,053 bids, churn 63%→22%, €1.8M annualized),
  "Hawkeye" browser automation (90%+ submission errors cut, incidents 35→5),
  network-level change, "EMS 2.0" (20% manual tracking cut, QuickSight),
  automation at scale ("Jarvis" Python bid automation, Luxembourg Control
  Tower truck scheduling script → $11M, 3,500+ man-hours, ~1.4 FTE/week),
  data-driven decisions (600+ deep dives, 1.5 → <0.5 bps), embedding change
  (comms framework, SharePoint WFH tracker). Closing line: "Don't fix the
  output. Fix the system that creates it."
- `IEnergizerDetail.jsx` (`/ienergizer`): hero (Noida, Uttar Pradesh; Sep
  2015 – Sep 2021; three role chips), 7 chapters from frontline (Quality
  Champion 2016) → Team Lead July 2017 (~30 associates, 300+ rostered) → WFM
  at scale 2018 → Assistant Manager Sep 2019 (High Risk Fraud + Credit
  Protection programs, 99% quality / 100% CSAT) → COVID 2020 (1,500+ weekly
  rosters, Excel VBA) → Global Supervisor of the Year 2020–21.
Both use the same layout grammar: dark `#0b1b2b` banner with `pt-24` (clears
the fixed nav), alternating `#f7f6f2`/white `max-w-3xl` chapters, dark metric
strips, "← Back to Home" at top and bottom, Footer.

## 5. Styling

- `tailwind.config.js`: `content: ["./index.html","./src/**/*.{js,jsx}"]`,
  `theme.extend` is **empty**. All brand colours are arbitrary values inline.
- Palette in use:
  - `#071a2f` — Hero bg, `<body>` bg, About gradient bridge start
  - `#0b1b2b` — Navbar, Experience, NotFound, detail-page banners/strips
  - `#0f172a` — Projects, Career Impact banner, Footer, dark text on light
  - `#f7f6f2` — light section bg (About, Skills, Education, Achievements,
    Certifications, Contact, detail chapters)
  - `yellow-400` / `#facc15` — the accent: CTAs, active nav, metrics, focus ring
  - `#334155`, `#475569` — body greys; `#FF9900` Amazon; `#4a9eff`/`#0f4c81`
    iEnergizer; `#b36a00` Amazon text on light
- Font: Inter 400/500/600/700 (Google Fonts) set on `body` in index.html.
- `src/index.css`: only `@tailwind` directives plus a global
  `a:focus-visible, button:focus-visible` yellow outline.
- Section rhythm: `py-24`, `max-w-5xl mx-auto px-6`, small uppercase
  `tracking-[0.18em]` label above each `h2 text-3xl md:text-4xl font-bold`.
  Cards are `rounded-2xl` with `border border-white/10` on dark, subtle
  gradient backgrounds via inline `style`.

## 6. Editing conventions

- Copy changes: edit the array/string in the component, `npm run build`,
  commit with a plain imperative message ("Update headline to match
  LinkedIn"), push to main. Vercel deploys in ~1 min.
- New home section: create `src/components/<Name>/<Name>.jsx` with
  `<section id="<name>">`, insert it in the `/` route in `App.jsx`, add the id
  to the Navbar `sections` scroll-spy array (and to `navLinks` only if it
  should appear in the menu).
- New detail page: copy the chapter grammar from `AmazonDetail.jsx`, add a
  `<Route>` in `App.jsx`, link with `<Link to="/…">` from Experience.
- New icon: prefer inline SVG (the site already mixes both); Font Awesome is
  fine for social/contact glyphs (`fab fa-…`, `fas fa-…`).
- Never introduce `backdrop-blur`, heavy `filter`s or eager framer-motion
  imports — every one of those cost a Safari fix in the past.
- Keep headline text identical to the LinkedIn headline (commit 2a9a5d3 set
  that expectation).
- Accessibility floor already in place: skip link, `aria-label`s on icon
  links, focus-visible rings, `role="navigation"`. Keep it.

## 7. Hardcoded values a maintainer must know

- Name "Divyansh Ahuja" — Navbar (×2), Hero, Footer, index.html, both detail
  page titles.
- `da.2793@yahoo.com` — Hero, Contact, Footer.
- `https://linkedin.com/in/divyanshahuja` — Hero, Contact, Footer.
- `+919599411791`, `+917995028078` — Contact only.
- "€15M+" — Hero (×2), Experience, App.jsx banner, index.html meta.
- Dates "2021 — Present" (Hero, em dash) vs "Sep 2021 – Present" (Experience,
  en dash). When Amazon tenure ends, update: Hero career card, Experience
  header, AmazonDetail hero + `document.title`, About paragraph 2 ("Currently
  at Amazon"), index.html title/description/og tags.
- Font Awesome SRI hash in index.html is pinned to 6.4.0 — bumping the version
  requires a new `integrity` value.

## 8. Known gaps and loose ends (Sept 2026)

- `public/Divyansh_Ahuja_CV.pdf` (~0.3 MB) is committed but nothing links to
  it. Either add a "Download CV" button in Hero/Contact or delete it.
- `public/vite.svg` is the Vite template leftover; unreferenced.
- `src/components/LoadingSpinner/` is an empty directory. Git doesn't track
  it, so it will not exist after a fresh clone — that's fine.
- No `vercel.json`, so deep links to `/amazon` and `/ienergizer` depend on
  Vercel's Vite preset rewriting unknown paths to `index.html`. If a direct
  visit to `/amazon` ever 404s, add
  `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`.
- No `og:image`, `og:url` or canonical tag; link previews show text only.
- Copy inconsistencies worth reconciling: iEnergizer title "Assistant
  Operations Manager" (Hero) vs "Assistant Manager – Operations" (everywhere
  else); truck-scheduling savings "$11M" (Projects, AmazonDetail hero/body)
  vs "~€11M" (AmazonDetail impact card); CSAT "95%+" (Hero/Experience) vs
  "100%" (Projects/IEnergizerDetail, Credit Protection specifically); manual
  effort "90%" / "90%+" / "90–95%".
- Navbar hamburger has `aria-expanded={false}` hardcoded; focus does not
  return to the trigger when the overlay closes.
- Skip link targets `#main-content`, which only exists on `/`.
- `caniuse-lite` is ~14 months old (build warning). `npx update-browserslist-db@latest`
  clears it; purely cosmetic.
- No `prefers-reduced-motion` handling for the scroll animations.

## 9. Transfer checklist (Amazon PC → personal PC)

Everything the site needs is in git. On the new machine: clone, `npm install`,
`npm run build`. Then confirm Vercel is still connected to
`DA2793/divyansh-portfolio` under an account you control (the GitHub
integration is per-account, not per-machine, so it should just keep working).

Not in git and NOT needed: `node_modules/` (reinstall), `dist/` (rebuild).
There is no `business/`, `.env`, or credential file for this project.
