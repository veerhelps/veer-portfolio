# 📈 VEER — Institutional Trading Portfolio & Market Observatory

> **An interactive 3D financial terminal, market intelligence desk, and institutional portfolio observatory powered by React 19, Three.js, GSAP, and Tailwind CSS.**

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 👁️ Executive Overview

**VEER — Trading Portfolio & Market Observatory** is a production-grade, dark-aesthetic 3D institutional trading terminal and financial research observatory. Built for modern high-probability trading, macroeconomic research, and Smart Money Concepts (SMC/ICT), VEER provides an immersive experience showcasing real-time market metrics, 3D spatial liquidity visualizers, interactive performance charts, central bank rate trackers, and an institutional trade journal.

### Key Highlights
- 🔮 **Interactive 3D Visualizations**: Real-time 3D Three.js particle galaxies, market core wireframes, spatial currency strength matrix, and liquidity pool depth topography.
- ⚡ **Butter-Smooth Motion**: Accelerated scroll choreography using **Lenis** smooth scrolling and **GSAP ScrollTrigger** timeline pinning.
- 📊 **Institutional Analytics**: Verified performance metrics ($124.8K Account Value, +42.8% Cumulative Return, 71.4% Win Rate, 3.15 Profit Factor, -4.8% Max Drawdown).
- 🧠 **Macro Intelligence Desk**: Hawkish/Dovish central bank posture tracking (FED, ECB, BOE, BOJ), interest rate differential forecasting, and high-impact economic calendar monitoring.
- 🎯 **Tactical Execution Playbook**: Smart Money Concepts (Asia Liquidity Sweeps, London Expansions, NY Reversals, Fair Value Gap re-entries).

---

## 🛠️ Technology Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19.2** | Modern component-driven UI architecture |
| **Language** | **TypeScript 7** | Full end-to-end type safety for financial data models |
| **Bundler** | **Vite 5.4** | High-performance ES build tooling & HMR |
| **3D Engine** | **Three.js + React Three Fiber** | Hardware-accelerated WebGL 3D graphics & particle physics |
| **3D Helpers** | **@react-three/drei** | Camera controls, orbit mechanics, geometric primitives, lighting |
| **Animation** | **GSAP 3.15 + @gsap/react** | ScrollTrigger timelines, reticle tracking, state transitions |
| **Smooth Scroll** | **Lenis 1.3** | Inertial inertia smooth scrolling engine |
| **Styling** | **Tailwind CSS 3.4** | Obsidian/Gold dark-theme design tokens, glassmorphism, reticle cursor |
| **Icons** | **Lucide React** | Sleek SVG icon suite |

---

## 🚀 Key Modules & Feature Breakdown

### 1. 🌐 Global Forex Market & 3D Core
- **Market Core Wireframe**: Interactive animated sphere and ring system representing global liquidity flow.
- **Live Pair Ticker**: Streaming updates across major & cross pairs (`EUR/USD`, `GBP/USD`, `USD/JPY`, `XAU/USD`).

### 2. ⚡ 3D Currency Strength & Heat Matrix
- Spatial 3D representation measuring relative strength/weakness across 8 major currencies (`USD`, `EUR`, `GBP`, `JPY`, `AUD`, `CAD`, `CHF`, `NZD`).
- Dynamic heat visualizers calculating currency divergence for high-probability pair matching.

### 3. ⏱️ 24/5 Forex Session Radar
- Real-time active trading session tracking: **Sydney**, **Tokyo**, **London**, and **New York**.
- Overlap indicator highlighting peak liquidity windows (e.g. London / New York overlap).

### 4. 🌊 Liquidity Map & Orderflow Topography
- 3D spatial representation of institutional order blocks, buy stop liquidity pools, and sell stop pools.
- Fair Value Gap (FVG) detection zones and inefficiency highlights.

### 5. 📉 Performance Dashboard & Equity Curve
- Interactive monthly performance graph tracking cumulative return vs drawdown.
- Verified metrics desk:
  - **Account Capital**: `$124,850 USD`
  - **Total Return**: `+42.8%`
  - **Win Rate**: `71.4%`
  - **Profit Factor**: `3.15`
  - **Max Drawdown**: `-4.8%`

### 6. 🧠 Macro Layer & Central Bank Desk
- Policy stance gauges for global central banks (**Federal Reserve**, **ECB**, **Bank of England**, **Bank of Japan**).
- Interest rate differential matrix and inflation/CPI impact forecasting.

### 7. 📖 SMC Strategy Playbook & Curriculum
- Comprehensive breakdown of institutional entry setups:
  1. *Asia Sweep + London Expansion* (Session High/Low Liquidity Grabs)
  2. *New York Reversal & Institutional Displacement*
  3. *Fair Value Gap (FVG) Re-Entry & Mitigation*
  4. *Order Block Refinement & Premium/Discount Pricing*

### 8. 📓 Institutional Trade Journal
- Historical trade breakdown featuring entry/exit prices, lot sizes, risk-to-reward ratios (`1 : 3.4`), PnL tracking, setup tags, and post-trade psychological reflections.

### 9. 🧠 Psychology & Capital Preservation Protocol
- The 10 Commandments of Risk Management:
  - Strict 1–2% risk per trade ceiling
  - Mandatory stop-loss rules
  - Emotionless execution protocols and drawdown circuit breakers

### 10. 💼 Mentorship & Institutional Advisory Desk
- Tiered access plans (`Core Playbook`, `1-on-1 Mentorship`, `Institutional Desk`) with detailed deliverables, feature matrices, and encrypted direct contact terminal.

---

## 📁 Repository Directory Structure

```
Veer Portfolio/
├── .agents/                    # Workspace agent configurations & design skills
├── .impeccable/                # Impeccable design system tokens & guidelines
├── dist/                       # Optimized production build output
├── public/                     # Static assets & favicon icons
├── src/
│   ├── components/
│   │   ├── 3d/                 # React Three Fiber 3D Canvas scenes
│   │   │   ├── AllocationGalaxy.tsx
│   │   │   ├── CurrencyStrength3D.tsx
│   │   │   ├── ForexFlowField.tsx
│   │   │   ├── ForexMarketCore.tsx
│   │   │   ├── LiquidityMap3D.tsx
│   │   │   ├── MarketCoreScene.tsx
│   │   │   ├── MarketLabCanvas.tsx
│   │   │   └── ThreeDChartScene.tsx
│   │   ├── layout/             # Header Navbar, Footer, Reticle Cursor
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Modular section components
│   │   │   ├── ForexHeroSection.tsx
│   │   │   ├── TraderProfile.tsx
│   │   │   ├── GlobalForexMarket.tsx
│   │   │   ├── CurrencyStrengthSection.tsx
│   │   │   ├── ForexSessionsSection.tsx
│   │   │   ├── LiquiditySection.tsx
│   │   │   ├── ForexDashboardSection.tsx
│   │   │   ├── CurrencyGalaxySection.tsx
│   │   │   ├── EquityCurveSection.tsx
│   │   │   ├── ForexIntelligenceSection.tsx
│   │   │   ├── PlaybookCurriculumSection.tsx
│   │   │   ├── MacroLayerSection.tsx
│   │   │   ├── ForexJournalSection.tsx
│   │   │   ├── ForexRadarSection.tsx
│   │   │   ├── PsychologySection.tsx
│   │   │   ├── MentorshipPricingSection.tsx
│   │   │   ├── CommunitySection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── FinalCTASection.tsx
│   │   └── ui/                 # Preloader, Reticle Cursor, UI elements
│   ├── data/                   # Financial datasets, pairs, journal entries, macro data
│   │   ├── currencyStrength.ts
│   │   ├── economicCalendar.ts
│   │   ├── forexJournal.ts
│   │   ├── forexPairs.ts
│   │   ├── forexPortfolio.ts
│   │   ├── forexStrategy.ts
│   │   ├── marketData.ts
│   │   ├── mentorshipData.ts
│   │   └── sessionsData.ts
│   ├── types/                  # TypeScript interfaces & domain types
│   ├── App.tsx                 # Core app root & GSAP/Lenis smooth scroll setup
│   ├── index.css               # Obsidian & Gold CSS design system tokens
│   └── main.tsx                # Application entry point
├── index.html                  # HTML5 boilerplate & font preloads
├── package.json                # Dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme configuration
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite bundle configuration
```

---

## ⚡ Getting Started & Local Setup

Follow these steps to run **VEER — Trading Portfolio & Market Observatory** on your local environment.

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/veer-portfolio.git
cd "veer-portfolio"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your web browser to experience the application live.

### 4. Build for Production
To generate a fully minified, optimized production bundle in the `/dist` folder:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design Philosophy & Aesthetic Standards

- **Obsidian Dark Aesthetic**: Custom palette (`#0B0F17` Obsidian base, `#E5C07B` / `#D4AF37` Gold accents, emerald long indicators, crimson short indicators).
- **Glassmorphism & Micro-Interactions**: Subtle borders (`border-stone-800/60`), backdrop blurs, glow effects, hover reticle scaling, and status pulses.
- **Typography & Scale Contrast**: Clean font pairing using **Inter** for clean readability, **Outfit** for bold headlines, and **JetBrains Mono** for numerical market data.
- **Hardware-Accelerated 3D Performance**: Efficient Three.js canvas management with auto-cleanup on unmount, low-draw call particle buffers, and smooth 60 FPS rendering.

---

## 📜 License & Copyright

Designed & Developed by **VEER**. All rights reserved.  
Distributed under the **ISC License**.

---

<div align="center">
  <sub>Built with precision, macro insight, and institutional risk management.</sub>
</div>
