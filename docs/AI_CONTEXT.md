# AI Assistant Context & Operations Manual

> **Mandatory reading for any AI coding assistant (Antigravity, Gemini, Claude, GPT, Cursor, Copilot) working in this workspace.**

---

## 1. High-Level Project Summary

- **Project Name**: VEER Forex Observatory (Dharam Veer Singh Kirar Portfolio).
- **Core Technology Stack**: React 19, TypeScript, Vite 5.4, Tailwind CSS 3.4, Three.js / React Three Fiber, GSAP 3.15 + ScrollTrigger, Lenis 1.3 smooth scroll.
- **Nature of the Application**: An editorial, museum-grade institutional currency trading terminal and quantitative research portfolio.
- **Port & Host**: Runs on `http://localhost:3000/` (configured in `vite.config.ts`).

---

## 2. Inviolable Architectural Invariants

Whenever generating code or modifying files, AI assistants **must strictly respect** these invariants:

1. **Lenis + GSAP Master Ticker Synchronization**:
   In `src/App.tsx`, Lenis is bound to GSAP's ticker:
   ```typescript
   lenis.on('scroll', ScrollTrigger.update);
   gsap.ticker.add((time) => lenis.raf(time * 1000));
   gsap.ticker.lagSmoothing(0);
   ```
   **DO NOT** add competing window scroll listeners, native CSS `scroll-behavior: smooth`, or secondary requestAnimationFrame loops that fight this ticker.

2. **The Dynamic Theme Engine is Locked by Default**:
   The user explicitly requested that the dynamic scroll theme remains active by default and that manual switcher toolbars are removed.
   - `ThemeContext.tsx` manages `activeTheme: 'dynamic'`.
   - As the user scrolls through section IDs (`#hero`, `#about`, `#watching`, etc.), `ScrollTrigger` updates the active specimen (`cosmic`, `opal`, `navy`, `violet`, `burgundy`), dynamically modifying `--theme-accent`, `--theme-gradient`, and `--theme-glow`.
   - **DO NOT** re-introduce manual theme switcher widgets, floating docks, or hardcoded overrides that bypass `ThemeContext`.

3. **3D WebGL Canvas Isolation**:
   3D canvases in `src/components/3d/` must:
   - Handle particle coordinates using typed Float32 buffers.
   - Use `useFrame((state, delta) => ...)` with delta-based physics.
   - Maintain `pointer-events: none` on atmospheric backgrounds so scrolling and clicking underlying content is never blocked.

---

## 3. Zone Classification: Safe vs. High-Risk Files

### 🛑 High-Risk Zones (Touch Only With Explicit User Request)
| File | Rationale |
| :--- | :--- |
| `src/App.tsx` | Master orchestrator connecting Lenis, GSAP, Preloader, and section hierarchy. |
| `src/context/ThemeContext.tsx` | Manages root CSS properties and ScrollTrigger section observer array. |
| `src/components/ui/ChromaticAmbientCanvas.tsx` | Master background ambient lighting canvas. |
| `src/components/ui/CustomCursor.tsx` | Dual-ring reticle cursor engine with interactive element listeners. |
| `src/index.css` | Design system tokens, glassmorphism card classes, and Lenis CSS resets. |
| `index.html` | Preloaded fonts and critical dark theme class setup. |

### 🟢 Safe Modification Zones
| Directory / File | What Can Be Safely Modified |
| :--- | :--- |
| `src/data/*.ts` | All financial data: pairs, journal entries, macro stances, calendar events, quotes. |
| `src/components/sections/*.tsx` | Individual section presentations, copywriting, statistics cards, and chart visualizations. |
| `src/types/index.ts` | Data model interfaces and TypeScript type declarations. |
| `docs/*.md` | All project documentation and guides. |

---

## 4. Aesthetic Directives & Anti-Default Discipline

Future AI assistants working on this frontend must adhere to the following design standards:

1. **NO Generic AI Purple Gradients**:
   Do not apply generic purple/violet mesh backgrounds. The baseline is **Obsidian Black** (`#050505`) with warm **Cream** (`#FAF7F2`) text, accompanied by **Champagne Gold** (`#D6B45A`), **Electric Cyan** (`#1EC1CB`), or **Surgical Crimson** (`#B51E25`) highlights.
2. **Use Predefined Luxury Card Tokens**:
   When creating cards or surface containers, use `.card-specimen-glass` (or variant `.card-specimen-glass-cyan`, `-burgundy`, `-opal`, `-violet`). Do not create ad-hoc flat translucent cards.
3. **Tabular Monospace Numerics**:
   All financial numbers, pip spreads, timestamps, and percentages must include `.mono-number` (`font-variant-numeric: tabular-nums`).
4. **Editorial Spacing Rhythm**:
   Maintain spacious section breathing room: `py-28 sm:py-36` with subtle top hairline dividers `border-t border-white/[0.08]`.

---

## 5. Standard Verification Routine for AI Tasks

Whenever an AI assistant completes any task in this codebase:

```bash
# Step 1: Validate TypeScript types
npx tsc --noEmit

# Step 2: Validate production bundle compilation
npm run build
```

Both commands **must exit with code 0**. If any type or build error occurs, the AI assistant must fix it before reporting completion to the user.

---

## 6. Current Project State & Known Technical Debt

- **Build Warning on Chunk Size**:
  `dist/assets/index-[hash].js` is ~1.4MB because Three.js, GSAP, and Lucide React are bundled together in the single main entry chunk. If bundle size becomes a concern in the future, configure `build.rollupOptions.output.manualChunks` in `vite.config.ts` to split vendor dependencies into separate chunks (`vendor-three`, `vendor-gsap`, `vendor-react`).
- **Simulated Real-Time Feeds**:
  Forex pair prices, candlestick sparklines, and session hours are currently powered by static/procedural models in `src/data/`. Integrating live WebSockets (e.g. TwelveData, OANDA, or Finnhub) can be layered seamlessly into `src/data/forexPairs.ts` without modifying section UI code.
