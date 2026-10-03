# Component Reference — VEER Forex Observatory

This document provides a comprehensive inventory and technical reference for all React components in the VEER Forex Observatory codebase.

---

## 1. Component Category Overview

| Category | Directory | Count | Purpose |
| :--- | :--- | :--- | :--- |
| **Layout & Root** | `src/components/layout/`, `src/App.tsx` | 3 | Page shell, sticky navigation, master footer, and smooth scroll wiring. |
| **Global UI & Overlays** | `src/components/ui/` | 6 | Custom reticle cursor, preloader, ambient aura canvas, modals, badges. |
| **3D WebGL Visualizers** | `src/components/3d/` | 7 | React Three Fiber canvases, procedural particles, liquidity maps, clocks. |
| **Editorial Sections** | `src/components/sections/` | 20 | Domain-specific content blocks, quotes, curriculum, and dashboards. |

---

## 2. Layout & Root Components

### `<App />`
- **File**: [`src/App.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/App.tsx)
- **Role**: Master application wrapper.
- **Responsibilities**:
  - Initializes the **Lenis** smooth scroll instance and connects its RAF loop to the GSAP ticker.
  - Registers GSAP plugins (`ScrollTrigger`, `useGSAP`).
  - Wraps the application inside `<ThemeProvider>`.
  - Sequentially renders the global overlays (`ChromaticAmbientCanvas`, `Preloader`, `CustomCursor`, `Navbar`) and the 16 editorial sections.
- **Props**: None.
- **State**: `loading: boolean` (controls Preloader dismissal).

### `<Navbar />`
- **File**: [`src/components/layout/Navbar.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/layout/Navbar.tsx)
- **Role**: Floating, pill-shaped glass navigation desk pinned to the top of the viewport.
- **Features**:
  - Live UTC time clock with second-by-second updates.
  - Active market status badge (`MARKET ACTIVE 24/5`).
  - Smooth-scroll jump links with active scroll detection.
  - Responsive mobile hamburger drawer.
- **Props**: None.
- **State**: `isScrolled: boolean`, `isMobileOpen: boolean`, `currentTime: string`.

### `<Footer />`
- **File**: [`src/components/layout/Footer.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/layout/Footer.tsx)
- **Role**: Editorial terminal footer.
- **Features**:
  - Regulatory risk disclosure for retail Forex and CFD derivative trading.
  - Quick index jump links categorized by Terminal, Intelligence, Education, and Legal.
  - System status indicator (`SYSTEM OPERATIONAL — LATENCY 12ms`).
  - Brand identity statement and copyright metadata.
- **Props**: None.

---

## 3. Global UI & Overlays

### `<ChromaticAmbientCanvas />`
- **File**: [`src/components/ui/ChromaticAmbientCanvas.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/ui/ChromaticAmbientCanvas.tsx)
- **Role**: Persistent background atmospheric light engine.
- **Mechanism**:
  - Consumes `useTheme()` from `ThemeContext`.
  - Renders 3 massive blurred radial orbs (`blur-[130px]`, `blur-[140px]`, `blur-[150px]`) that shift between Cosmic, Opal, Navy, Burgundy, and Violet palettes based on `currentSpecimen.id`.
  - Animates slow, organic sine-wave floating motion via GSAP timelines (`repeat: -1`, `yoyo: true`).
- **Dependencies**: GSAP, `ThemeContext`.

### `<CustomCursor />`
- **File**: [`src/components/ui/CustomCursor.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/ui/CustomCursor.tsx)
- **Role**: Dual-ring hardware reticle mouse follower.
- **Features**:
  - Dot pointer and trailing precision reticle ring with spring physics.
  - Automatic detection of interactive elements (`a`, `button`, `input`, `[data-cursor="pointer"]`) to expand reticle scale and invert opacity.
  - Automatically hidden on touch devices (`@media (pointer: coarse)`).
- **Props**: None.

### `<Preloader />`
- **File**: [`src/components/ui/Preloader.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/ui/Preloader.tsx)
- **Role**: High-tech terminal bootloader screen shown on initial page load.
- **Props**:
  - `onComplete: () => void` (called when progress reaches 100% and exit fade concludes).
- **Features**:
  - Fast-incrementing progress counter (`0` to `100%`).
  - Terminal initialization logs (`MOUNTING CORE ENGINE`, `CALIBRATING LIQUIDITY VECTORS`, `READY`).

### `<TradeModal />`
- **File**: [`src/components/ui/TradeModal.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/ui/TradeModal.tsx)
- **Role**: Comprehensive dialog displaying full institutional post-mortem of a selected trade.
- **Props**:
  - `trade: TradeEntry | null`
  - `onClose: () => void`
- **Sections Displayed**:
  - Instrument header, date, session, and status badge.
  - Core financial metrics (Entry, Stop Loss, Target, Exit, Lot Size, R:R Ratio, PnL in USD and %).
  - Technical & Macro Setup Thesis.
  - Detailed Execution Breakdown ("What Went Right" vs. "What Went Wrong").
  - Behavioral reflection and rules compliance checklist.

### `<StatusBadge />`
- **File**: [`src/components/ui/StatusBadge.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/ui/StatusBadge.tsx)
- **Role**: Standardized status indicator for trading tags and regimes.
- **Props**:
  - `variant: 'win' | 'loss' | 'neutral' | 'active' | 'pending'`
  - `label: string`
  - `size?: 'sm' | 'md'`

---

## 4. 3D WebGL Scenes (`src/components/3d/`)

All 3D components are built with `@react-three/fiber` and `@react-three/drei`.

### `<FinancialArtifact3D />`
- **File**: [`src/components/3d/FinancialArtifact3D.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/FinancialArtifact3D.tsx)
- **Used In**: `ForexHeroSection.tsx`.
- **Visual**: A multi-layered celestial financial astrolabe featuring nested gold wireframe icosahedrons, equatorial rings, glowing candlesticks, and floating numerical price coordinates.
- **Interactivity**: Smooth cursor-tracking rotation using mouse lerping in `useFrame`.

### `<ForexFlowField />`
- **File**: [`src/components/3d/ForexFlowField.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/ForexFlowField.tsx)
- **Used In**: `LiquiditySection.tsx`.
- **Visual**: 450 dynamic particle nodes colored in gold, crimson, and cream flowing along sinusoidal vector field paths with BSL (Buy-Side Liquidity) and SSL (Sell-Side Liquidity) horizontal threshold lines.
- **Interactivity**: Real-time cursor repulsion that displaces nearby particles with a radial elastic bounce.

### `<ForexMarketCore />`
- **File**: [`src/components/3d/ForexMarketCore.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/ForexMarketCore.tsx)
- **Used In**: `GlobalForexMarket.tsx`.
- **Visual**: Atmospheric wireframe sphere encased in concentric orbital rings that pulse rhythmically to represent institutional inter-bank liquidity flow.

### `<CurrencyStrength3D />`
- **File**: [`src/components/3d/CurrencyStrength3D.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/CurrencyStrength3D.tsx)
- **Used In**: `CurrencyStrengthSection.tsx`.
- **Visual**: 3D spatial node cluster distributing the 8 major currencies across 3D coordinates based on their strength scores (USD, EUR, GBP, JPY, AUD, CAD, CHF, NZD).

### `<WorldClock3D />`
- **File**: [`src/components/3d/WorldClock3D.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/WorldClock3D.tsx)
- **Used In**: `ForexSessionsSection.tsx`.
- **Visual**: Rotating 3D earth globe with geographic longitudinal arcs and glowing markers highlighting active market session hubs (Tokyo, London, New York, Sydney).

### `<CurrencyWatching3D />`
- **File**: [`src/components/3d/CurrencyWatching3D.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/CurrencyWatching3D.tsx)
- **Used In**: `CurrencyWatchingSection.tsx`.
- **Visual**: Spatial surveillance radar with rotating scan beams and telemetry markers.

### `<LiquidityMap3D />`
- **File**: [`src/components/3d/LiquidityMap3D.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/3d/LiquidityMap3D.tsx)
- **Used In**: `LiquiditySection.tsx`.
- **Visual**: 3D volumetric depth blocks showing order block mitigation and liquidity pools.

---

## 5. Editorial Sections (`src/components/sections/`)

### `<ForexHeroSection />`
- **File**: [`src/components/sections/ForexHeroSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/ForexHeroSection.tsx)
- **ID**: `#hero`
- **Content**: Asymmetric editorial poster layout introducing **VEER Trading Reality**, key performance counters ($124.8K Balance, +42.8% Total Return, 71.4% Win Rate), live floating ticker badges, and the 3D Financial Artifact.

### `<EditorialQuoteDivider />`
- **File**: [`src/components/sections/EditorialQuoteDivider.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/EditorialQuoteDivider.tsx)
- **Props**:
  - `quote: string`
  - `subtitle?: string`
  - `author?: string`
  - `accent?: 'gold' | 'crimson' | 'cream'`
  - `index?: string`
- **Role**: Full-bleed typographic transition breaker that punctuates key thematic shifts across the portfolio.

### `<TraderProfile />`
- **File**: [`src/components/sections/TraderProfile.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/TraderProfile.tsx)
- **ID**: `#about`
- **Content**: Identity, credentials, trading philosophy of Dharam Veer Singh Kirar, core trading disciplines, and quantitative risk boundaries.

### `<CurrencyWatchingSection />`
- **File**: [`src/components/sections/CurrencyWatchingSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/CurrencyWatchingSection.tsx)
- **ID**: `#watching`
- **Content**: Visual thesis on market surveillance, algorithmic liquidity manipulation, and institutional order distribution.

### `<GlobalForexMarket />`
- **File**: [`src/components/sections/GlobalForexMarket.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/GlobalForexMarket.tsx)
- **ID**: `#forex-market`
- **Content**: Searchable, filterable directory of 12 currency pairs across Majors, Crosses, and Metals, with live candlestick charts, mini sparklines, pip spread telemetry, and support/resistance levels.

### `<CurrencyStrengthSection />`
- **File**: [`src/components/sections/CurrencyStrengthSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/CurrencyStrengthSection.tsx)
- **ID**: `#strength`
- **Content**: Relative strength gauge comparing the 8 major currencies, paired with algorithmic divergence pairing recommendations.

### `<ForexSessionsSection />`
- **File**: [`src/components/sections/ForexSessionsSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/ForexSessionsSection.tsx)
- **ID**: `#sessions`
- **Content**: Real-time 24-hour UTC session schedule for Sydney, Tokyo, London, and New York with liquidity percentage bars and the `<WorldClock3D />` visualizer.

### `<LiquiditySection />`
- **File**: [`src/components/sections/LiquiditySection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/LiquiditySection.tsx)
- **ID**: `#liquidity`
- **Content**: Deep-dive into Buy-Side / Sell-Side Liquidity sweeps, Order Blocks, Fair Value Gaps (FVG), featuring the interactive `<ForexFlowField />`.

### `<ForexDashboardSection />`
- **File**: [`src/components/sections/ForexDashboardSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/ForexDashboardSection.tsx)
- **ID**: `#portfolio`
- **Content**: Audited account summary matrix ($124.8K Balance, +42.8% Return, 3.15 Profit Factor, -4.8% Max Drawdown) with live active open positions.

### `<EquityCurveSection />`
- **File**: [`src/components/sections/EquityCurveSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/EquityCurveSection.tsx)
- **ID**: `#performance`
- **Content**: Interactive SVG equity curve chart showing 12-month capital progression, monthly percentage returns, and drawdown boundaries.

### `<ForexJournalSection />`
- **File**: [`src/components/sections/ForexJournalSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/ForexJournalSection.tsx)
- **ID**: `#journal`
- **Content**: Institutional trade log table with filterable win/loss records. Clicking any trade row launches the full `<TradeModal />` post-mortem.

### `<MacroLayerSection />`
- **File**: [`src/components/sections/MacroLayerSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/MacroLayerSection.tsx)
- **ID**: `#macro`
- **Content**: Central bank policy radar (FED, ECB, BOE, BOJ), interest rate differentials, inflation indicators, and high-impact economic calendar events.

### `<PsychologySection />`
- **File**: [`src/components/sections/PsychologySection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/PsychologySection.tsx)
- **ID**: `#psychology`
- **Content**: The 10 Commandments of Risk Management, emotional discipline guidelines, and capital preservation protocols.

### `<PlaybookCurriculumSection />`
- **File**: [`src/components/sections/PlaybookCurriculumSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/PlaybookCurriculumSection.tsx)
- **ID**: `#curriculum`
- **Content**: Four-phase Smart Money Concepts master syllabus with topic breakdowns for prospective students and mentees.

### `<MentorshipPricingSection />`
- **File**: [`src/components/sections/MentorshipPricingSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/MentorshipPricingSection.tsx)
- **ID**: `#pricing`
- **Content**: Three-tiered mentorship plan comparison (`Core Playbook`, `1-on-1 Mentorship`, `Institutional Desk`) with monthly/quarterly billing toggle.

### `<CommunitySection />`
- **File**: [`src/components/sections/CommunitySection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/CommunitySection.tsx)
- **ID**: `#community`
- **Content**: Overview of the private Discord/Telegram community, daily live trade callouts, and peer review desk.

### `<ContactSection />`
- **File**: [`src/components/sections/ContactSection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/ContactSection.tsx)
- **ID**: `#contact`
- **Content**: Direct inquiry terminal form and direct communication channels.

### `<FinalCTASection />`
- **File**: [`src/components/sections/FinalCTASection.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/sections/FinalCTASection.tsx)
- **Role**: Grand closing terminal screen inspiring disciplined market execution.
