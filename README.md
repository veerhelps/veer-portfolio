# 📈 VEER FOREX OBSERVATORY — DHARAM VEER SINGH KIRAR

> **An interactive 3D institutional currency terminal, quantitative market research desk, and trading portfolio powered by React 19, Three.js, GSAP ScrollTrigger, Lenis, and Tailwind CSS.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

---

## 📖 Quick Navigation & Documentation Hub

For deep technical dives, architectural diagrams, component APIs, and AI instructions, please consult the dedicated `/docs` directory:

| Document | Description |
| :--- | :--- |
| 📘 [**Project Overview**](docs/PROJECT_OVERVIEW.md) | Mission, target audience, core capabilities, and design philosophy. |
| 🏗️ [**System Architecture**](docs/ARCHITECTURE.md) | Subsystem diagrams, Lenis/GSAP lifecycle, state flow, and 3D graphics pipeline. |
| 🧩 [**Component Reference**](docs/COMPONENTS.md) | Complete inventory, props, dependencies, and specs for 30+ React components. |
| 🎨 [**Styling & Design Guide**](docs/STYLING_GUIDE.md) | Obsidian color tokens, liquid glass cards, typography hierarchy, and animations. |
| 💻 [**Developer Guide**](docs/DEVELOPMENT_GUIDE.md) | Environment setup, adding new sections, data schemas, and coding conventions. |
| 🤖 [**AI Assistant Context**](docs/AI_CONTEXT.md) | Invariants, safe modification zones, anti-default rules, and AI verification protocols. |
| 📋 [**Changelog**](CHANGELOG.md) | Semantic version history, recent improvements, and planned features. |

---

## 👁️ Project Overview & Purpose

**VEER Forex Observatory** is a production-grade, dark-aesthetic 3D institutional trading terminal and financial research portfolio created by **Dharam Veer Singh Kirar**.

### Purpose of the Website
1. **Audited Transparency**: Provide verified quantitative proof of systematic market edge, disciplined risk boundaries, and an institutional track record ($124.8K Balance, +42.8% Total Return, 71.4% Win Rate, -4.8% Max Drawdown).
2. **Pedagogical Clarity**: Demystify Smart Money Concepts (SMC) and inter-dealer order flow through interactive spatial 3D WebGL models, session liquidity sweeps, and trade post-mortems.
3. **Elevated Aesthetic Standard**: Establish an editorial benchmark for financial web engineering by blending Swiss typography with luxury obsidian horology textures and dynamic atmospheric aura lighting.

---

## ⚡ Key Features

- 🔮 **Hardware-Accelerated 3D WebGL Visualizers**:
  - **3D Financial Artifact**: Multi-ringed procedural celestial astrolabe with price coordinates.
  - **Reactive Liquidity Flow Field**: 450 dynamic particle nodes with real-time cursor repulsion and BSL/SSL threshold lines.
  - **3D World Clock & Sphere**: Interactive globe showing active sessions across Tokyo, London, and New York.
  - **Spatial Currency Strength Cluster**: 3D spatial node distribution ranking the 8 major currencies.
- 🌊 **Dynamic Chromatic Theme Engine**:
  - Automatically shifts ambient background aura and CSS custom properties (`--theme-accent`, `--theme-gradient`, `--theme-glow`) as the user scrolls between sections.
- 📊 **Institutional Trade Journal & Modal Inspector**:
  - Full-screen trade modal breaking down entry/exit mechanics, R:R ratios (`1:3.4`), execution screenshots, "What Went Right", and psychological reflections.
- ⏱️ **24/5 Forex Session Radar**:
  - Real-time UTC world clock tracking active market trading hours and peak overlap volatility windows.
- 🧠 **Macroeconomic Intelligence Desk**:
  - Central bank policy stance gauges (FED, ECB, BOE, BOJ), interest rate differential tables, and high-impact economic calendar feeds.
- 🎯 **Tactical Execution Playbook & Curriculum**:
  - Four-stage Smart Money Concepts master syllabus and transparent mentorship enrollment tiers.
- 🎯 **Tactile Dual-Ring Hardware Cursor**:
  - Responsive mouse reticle with spring damping, element detection, and scale expansion.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19.2** | Modern component-driven UI architecture and concurrent rendering |
| **Language** | **TypeScript 7.0** | Strict type safety across financial data models and component props |
| **Bundler** | **Vite 5.4** | Ultra-fast Hot Module Replacement (HMR) and optimized Rollup builds |
| **3D Engine** | **Three.js 0.185** | WebGL particle systems, geometries, materials, and lighting |
| **3D React Wrapper** | **@react-three/fiber + @react-three/drei** | Declarative Three.js scene orchestration and camera management |
| **Animation Engine** | **GSAP 3.15 + @gsap/react** | ScrollTrigger timelines, reticle tracking, and micro-interactions |
| **Smooth Scrolling** | **Lenis 1.3** | Hardware-accelerated inertial smooth scroll engine |
| **Styling** | **Tailwind CSS 3.4 + PostCSS** | Obsidian tokens, liquid glass cards, and responsive utilities |
| **Icons** | **Lucide React** | Lightweight, high-precision SVG icon set |
| **Analytics** | **@vercel/analytics** | Privacy-focused production visitor metrics |

---

## 📁 Repository Directory Structure

```
Veer Portfolio/
├── .agents/                      # Workspace agent configurations & design skills
├── .impeccable/                  # Impeccable design system tokens & guidelines
├── dist/                         # Compiled production bundle output
├── docs/                         # Developer & AI documentation suite
│   ├── AI_CONTEXT.md             # Guidelines, invariants & checklists for AI agents
│   ├── ARCHITECTURE.md           # System design, data flow & 3D graphics pipeline
│   ├── COMPONENTS.md             # Complete inventory & API specs for all components
│   ├── DEVELOPMENT_GUIDE.md      # Setup, workflows, coding conventions & patterns
│   ├── PROJECT_OVERVIEW.md       # Product mission, target audience & capabilities
│   └── STYLING_GUIDE.md          # CSS design tokens, typography, colors & glassmorphism
├── public/                       # Static public assets (favicons, SVGs)
├── src/
│   ├── components/
│   │   ├── 3d/                   # Three.js / React Three Fiber interactive scenes
│   │   │   ├── CurrencyStrength3D.tsx    # 3D spatial currency node cluster
│   │   │   ├── CurrencyWatching3D.tsx    # Spatial radar wireframe visualizer
│   │   │   ├── FinancialArtifact3D.tsx   # Hero multi-ringed procedural 3D artifact
│   │   │   ├── ForexFlowField.tsx        # Interactive mouse-repulsion particle field
│   │   │   ├── ForexMarketCore.tsx       # Rotating global currency orbital sphere
│   │   │   ├── LiquidityMap3D.tsx        # 3D depth block for liquidity pools
│   │   │   └── WorldClock3D.tsx          # 3D session timeline and globe arcs
│   │   ├── layout/               # Global structural wrappers
│   │   │   ├── Footer.tsx                # Terminal footer and regulatory disclosures
│   │   │   └── Navbar.tsx                # Floating glass navigation pill with live clock
│   │   ├── sections/             # Modular, self-contained editorial sections
│   │   │   ├── CommunitySection.tsx      # Trader network & communication channels
│   │   │   ├── ContactSection.tsx        # Direct contact & inquiry terminal
│   │   │   ├── CurrencyStrengthSection.tsx # Strength delta & divergence matrix
│   │   │   ├── CurrencyWatchingSection.tsx # Market surveillance thesis section
│   │   │   ├── EditorialQuoteDivider.tsx # Full-bleed typographic transition dividers
│   │   │   ├── EquityCurveSection.tsx    # Interactive capital growth & drawdown SVG
│   │   │   ├── FinalCTASection.tsx       # Closing call-to-action & terminal prompt
│   │   │   ├── ForexDashboardSection.tsx # Verified metrics grid & quick trade summary
│   │   │   ├── ForexHeroSection.tsx      # Asymmetrical hero poster & artifact anchor
│   │   │   ├── ForexIntelligenceSection.tsx # Intelligence and orderflow breakdown
│   │   │   ├── ForexJournalSection.tsx   # Paginated trade logs & post-mortem launcher
│   │   │   ├── ForexRadarSection.tsx     # Session overlap and timing visualizer
│   │   │   ├── ForexSessionsSection.tsx  # Active session radar & 3D world clock
│   │   │   ├── GlobalForexMarket.tsx     # Searchable live pair catalog & sparklines
│   │   │   ├── LiquiditySection.tsx      # Orderflow, BSL/SSL pools & flow field
│   │   │   ├── MacroLayerSection.tsx     # Central bank stance & rate differentials
│   │   │   ├── MentorshipPricingSection.tsx # Pricing matrix & enrollment packages
│   │   │   ├── PlaybookCurriculumSection.tsx# SMC curriculum syllabus & topic breakdown
│   │   │   ├── PsychologySection.tsx     # Risk management & psychological discipline
│   │   │   └── TraderProfile.tsx         # Identity, operational methodology & stats
│   │   └── ui/                   # Reusable micro-components and overlays
│   │       ├── ChromaticAmbientCanvas.tsx# Dynamic background aurora engine
│   │       ├── ChromaticThemeBar.tsx     # Legacy theme controller (kept for fallback)
│   │       ├── CustomCursor.tsx          # Hardware reticle dual-ring mouse pointer
│   │       ├── Preloader.tsx             # Cinematic startup loading sequence
│   │       ├── StatusBadge.tsx           # Reusable status pill (WIN, LOSS, LONG, etc.)
│   │       └── TradeModal.tsx            # Comprehensive trade post-mortem dialog
│   ├── context/
│   │   └── ThemeContext.tsx      # Adaptive theme provider & ScrollTrigger bridge
│   ├── data/                     # Strictly typed immutable datasets
│   │   ├── chromaticThemes.ts    # Color definitions and aura presets for sections
│   │   ├── currencyStrength.ts   # 8-currency strength scores and bias rankings
│   │   ├── economicCalendar.ts   # High-impact news releases and forecasts
│   │   ├── editorialQuotes.ts    # Section transition aphorisms and quotes
│   │   ├── forexJournal.ts       # Trade entries with screenshots, thesis, and lessons
│   │   ├── forexPairs.ts         # Major, Cross, and Metal pairs with live candle data
│   │   ├── forexPortfolio.ts     # Verified account balance, equity curve, win metrics
│   │   ├── forexStrategy.ts      # SMC execution playbooks & curriculum syllabus
│   │   ├── macroData.ts          # Central bank policy stances and macro trends
│   │   ├── mentorshipData.ts     # Tiered mentorship packages, pricing, and features
│   │   └── sessionsData.ts       # Tokyo, London, NY, Sydney hours & volume shares
│   ├── types/
│   │   └── index.ts              # Global TypeScript interfaces and domain types
│   ├── App.tsx                   # Master application orchestrator and Lenis setup
│   ├── index.css                 # Obsidian tokens, glassmorphism, and custom scrollbars
│   ├── main.tsx                  # React 19 root DOM hydration
│   └── vite-env.d.ts             # Vite client type references
├── CHANGELOG.md                  # Release notes & semantic version history
├── index.html                    # HTML5 entry, Google font preloading, dark class
├── package.json                  # Dependencies & scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind theme tokens & font families
├── tsconfig.json                 # TypeScript compiler options
├── vercel.json                   # Vercel deployment rewrites & output directory
└── vite.config.ts                # Vite dev server (port 3000) & alias configuration
```

---

## ⚡ Installation & Development Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20+` LTS recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 1. Clone & Install
```bash
git clone https://github.com/your-username/veer-portfolio.git
cd "veer-portfolio"
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000/
```
*(Hot Module Replacement is enabled; changes to `.tsx` or `.css` update instantly).*

### 3. Build for Production
```bash
npm run build
```
Compiles TypeScript and outputs an optimized bundle into the `/dist` folder.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🔐 Environment Variables

The project runs out of the box without requiring mandatory third-party API keys for local demonstration.

If connecting live financial feeds or third-party email providers in production:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical production site URL | `https://veer-forex.com` |
| `VITE_ANALYTICS_ID` | Optional analytics identifier | `va_xxxxxx` |
| `VITE_FOREX_FEED_API_KEY` | Optional API key for live streaming pairs | *(Simulated in `forexPairs.ts`)* |

> **Security Rule**: Never commit `.env` or `.env.local` files to version control. All `.env*.local` patterns are strictly ignored by `.gitignore`.

---

## 🚀 Deployment Instructions

### Vercel (Recommended)
This repository contains a pre-configured [`vercel.json`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/vercel.json):
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Set **Framework Preset** to `Vite`.
4. The build command (`npm run build`) and output directory (`dist`) are automatically detected.
5. Deploy.

### Other Static Hosts (Netlify, Cloudflare Pages, AWS S3)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Rewrites**: Ensure all routes redirect to `/index.html` (HTTP 200).

---

## 🏎️ Performance Considerations

1. **Lenis Inertia + GSAP RAF Coupling**:
   Instead of running separate `requestAnimationFrame` loops, Lenis is hooked into GSAP's master ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))`), avoiding frame desynchronization and maintaining 60 FPS.
2. **BufferGeometry Particle Management**:
   The 3D flow field uses a single `THREE.Points` object with typed Float32 arrays for position and vertex color, requiring only **1 single GPU draw call**.
3. **Tabular Numeral Stability**:
   All shifting numerical metrics use `.mono-number` (`font-variant-numeric: tabular-nums`) to prevent layout thrashing and text reflow.
4. **Hardware Cursor Throttling**:
   Dual reticle rings interpolate coordinates using native CSS transforms (`translate3d`) to leverage hardware acceleration.

---

## 📱 Responsive Design Notes

- **Breakpoints**: Designed with mobile-first principles (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- **Touch Device Adaptations**:
  - The custom reticle cursor is automatically disabled on touch devices (`@media (pointer: coarse)`).
  - 3D WebGL canvases adapt camera distance and field of view to keep artifacts legible on narrow screens.
  - Floating navigation transforms into a clean full-screen slide-over drawer on viewports `< 768px`.

---

## 📐 Coding Conventions & Guidelines

- **TypeScript**: Strict mode enabled (`tsconfig.json`). Zero tolerance for `any` types.
- **Component Architecture**: One component per file, stored in feature-scoped folders (`components/3d`, `components/layout`, `components/sections`, `components/ui`).
- **Design Standards**: Always adhere to the [Styling Guide](docs/STYLING_GUIDE.md) and [AI Context](docs/AI_CONTEXT.md). Avoid hardcoding arbitrary hex colors; prefer semantic Tailwind tokens and `.card-specimen-glass`.
- **Pre-Flight Check**: Always verify code health using:
  ```bash
  npx tsc --noEmit
  npm run build
  ```

---

## 🤝 Contribution Guidelines

1. **Fork the Repository** and create your feature branch:
   ```bash
   git checkout -b feature/institutional-enhancement
   ```
2. **Implement Changes** following the architectural patterns in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
3. **Validate Code Health**:
   Ensure `npx tsc --noEmit` and `npm run build` pass with **0 errors**.
4. **Commit with Conventional Messages**:
   ```bash
   git commit -m "feat(journal): add interactive risk-reward calculator to trade modal"
   ```
5. **Open a Pull Request** with a detailed explanation of your changes and verification steps.

---

## 🗺️ Future Roadmap

- [ ] **Live WebSockets**: Direct streaming integration with institutional FX liquidity providers.
- [ ] **Rollup Code Splitting**: Fine-tune `build.rollupOptions.output.manualChunks` for Three.js and GSAP libraries.
- [ ] **Interactive Backtesting Lab**: Historical candlestick replay engine for SMC Fair Value Gap setups.
- [ ] **Multi-Currency Risk Calculator**: Real-time position sizing based on live account balance and pip risk.

---

## ⚠️ Known Limitations

- **Simulated Real-Time Data**: Currently, candlestick sparklines, economic events, and live pair prices are generated from deterministic datasets in `src/data/` rather than live market broker sockets.
- **Single Vendor Bundle**: The production JS bundle minifies to ~1.4 MB due to the inclusion of Three.js and GSAP. Code-splitting vendor chunks is planned for future optimization.

---

## 📜 License

Distributed under the **ISC License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Designed & engineered for high-probability execution and sovereign capital preservation.</sub><br/>
  <sub>© 2026 Dharam Veer Singh Kirar. All rights reserved.</sub>
</div>
