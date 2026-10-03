# Changelog

All notable changes to the **VEER Forex Observatory** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Real-time WebSocket streaming feed integration (TwelveData / Finnhub / OANDA) for live tick-by-tick prices.
- Rollup vendor code-splitting (`vendor-three`, `vendor-gsap`) in `vite.config.ts` to optimize chunk distribution.
- Interactive historical backtesting simulator for Smart Money Concepts (SMC) order block sweeps.
- Multi-currency risk calculator widget for lot size determination based on account equity and stop loss pips.

---

## [1.2.0] — 2026-09-17

### Added
- Comprehensive developer and AI documentation suite inside the [`/docs/`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/) directory:
  - [`PROJECT_OVERVIEW.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/PROJECT_OVERVIEW.md): Product vision, audience, and core capabilities.
  - [`ARCHITECTURE.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/ARCHITECTURE.md): System architecture, subsystem interaction, component hierarchy, and data flow.
  - [`COMPONENTS.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/COMPONENTS.md): Granular technical specifications for all 30+ components.
  - [`STYLING_GUIDE.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/STYLING_GUIDE.md): Obsidian tokens, typography, glassmorphism, and responsive layout standards.
  - [`DEVELOPMENT_GUIDE.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/DEVELOPMENT_GUIDE.md): Local development workflows, guidelines for adding sections/data, and coding conventions.
  - [`AI_CONTEXT.md`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/docs/AI_CONTEXT.md): Dedicated guidelines, constraints, safe areas, and operational checklists for AI coding assistants.
- Documented port `3000` dev server configuration.

### Changed
- Enforced **Dynamic** chromatic atmosphere as the permanent, locked default across the entire application in [`ThemeContext.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/context/ThemeContext.tsx).
- Synchronized initial page load theme directly to the Hero section's `cosmic` palette, with delayed ScrollTrigger refresh to ensure seamless transition detection across all sections.

### Removed
- Removed the floating bottom theme switcher bar (`<ChromaticThemeBar />`) from [`src/App.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/App.tsx) for a distraction-free, seamless editorial browsing experience.

### Fixed
- Verified 0 TypeScript compilation errors (`npx tsc --noEmit`) and 0 production build errors (`npm run build`).

---

## [1.1.0] — 2026-09-16

### Added
- Procedural WebGL 3D scenes:
  - `<FinancialArtifact3D />` with nested wireframe icosahedrons and numerical coordinates.
  - `<ForexFlowField />` with interactive mouse repulsion and BSL/SSL liquidity thresholds.
  - `<WorldClock3D />` showcasing geographic session arcs and UTC synchronization.
- Institutional Trade Journal with interactive `<TradeModal />` dialog displaying detailed post-mortems, execution reviews, and lessons learned.
- Central Bank policy stance radar (FED, ECB, BOE, BOJ) and interest rate differential matrix.
- Lenis inertial smooth scroll engine tightly integrated with GSAP ScrollTrigger's master RAF ticker.

---

## [1.0.0] — 2026-09-15

### Added
- Initial public release of the VEER Forex Observatory.
- 16-section continuous editorial poster layout.
- Real-time simulated pair catalog across Major, Cross, and Precious Metal pairs with mini candlestick sparklines.
- Currency strength delta matrix measuring relative power of 8 global currencies.
- 24/5 Forex session schedule with Tokyo, London, and New York overlap indicators.
- Verified performance dashboard ($124.8K Account Value, +42.8% Total Return, 71.4% Win Rate, -4.8% Max Drawdown).
- Smart Money Concepts curriculum outline and tiered mentorship plans.
