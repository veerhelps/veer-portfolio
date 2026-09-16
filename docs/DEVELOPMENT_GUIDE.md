# Developer & Contributor Guide — VAXSA Forex Observatory

This guide details local environment setup, recommended development workflows, architectural patterns, coding conventions, and testing procedures for engineers working on the VAXSA Forex Observatory.

---

## 1. Prerequisites & Environment Setup

### Required Tooling
- **Node.js**: `v18.0.0` or higher (`v20+` LTS recommended).
- **Package Manager**: `npm` (`v9.0.0`+), `pnpm` (`v8+`), or `yarn` (`v1.22+`).
- **Operating System**: Windows, macOS, or Linux.
- **Hardware Acceleration**: WebGL-enabled graphics card/browser for Three.js 3D rendering.

### Initial Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/your-username/veer-portfolio.git
cd "veer-portfolio"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The Vite dev server runs by default at **`http://localhost:3000/`** (configured in `vite.config.ts`).

---

## 2. Available NPM Scripts

| Command | Action | Notes |
| :--- | :--- | :--- |
| `npm run dev` | Starts Vite dev server on port `3000` | Enables fast React Fast Refresh (HMR). |
| `npm run build` | Compiles TypeScript and runs `vite build` | Outputs production bundle into `/dist`. |
| `npm run preview` | Spins up a local static server for `/dist` | Useful for testing production chunks locally. |
| `npx tsc --noEmit` | Runs TypeScript type checker | Verifies 100% type safety with zero code emission. |

---

## 3. How to Add a New Section

To integrate a new editorial or analytics section into the portfolio sequence:

### Step 1: Create the Component
Create your new section inside `src/components/sections/`, for example `src/components/sections/VolatilityRadarSection.tsx`:

```tsx
import React from 'react';

export function VolatilityRadarSection() {
  return (
    <section id="volatility" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-theme-accent">
          <span>// SECTION INDEX</span>
          <span className="text-stone-500">|</span>
          <span>MARKET DISPERSION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black text-cream tracking-tight">
          Implied Volatility & Realized Range
        </h2>
        {/* Section content here */}
      </div>
    </section>
  );
}
```

### Step 2: Register with ThemeContext (Optional)
If you want the ambient chromatic canvas to adapt when scrolling past this section, add its `id` and chosen color theme key (`'cosmic'`, `'opal'`, `'navy'`, `'violet'`, `'burgundy'`) to the `sections` array in [`src/context/ThemeContext.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/context/ThemeContext.tsx):

```tsx
{ id: 'volatility', key: 'cosmic' },
```

### Step 3: Mount in App.tsx
Import and place the component in the continuous sequence in [`src/App.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/App.tsx) inside `<main className="relative z-10">`:

```tsx
import { VolatilityRadarSection } from './components/sections/VolatilityRadarSection';
// ...
<VolatilityRadarSection />
```

### Step 4: Add Navigation Link (Optional)
If appropriate, add an anchor link to `navLinks` in [`src/components/layout/Navbar.tsx`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/components/layout/Navbar.tsx):

```tsx
{ label: 'VOLATILITY', href: '#volatility' },
```

---

## 4. How to Update Financial & Trading Data

All market datasets live in `src/data/` and are strictly typed via `src/types/index.ts`.

### Adding a New Currency Pair
Edit [`src/data/forexPairs.ts`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/data/forexPairs.ts):
```typescript
export const forexPairs: ForexPair[] = [
  // ...
  {
    id: 'aud-usd',
    symbol: 'AUD/USD',
    name: 'Aussie / US Dollar',
    category: 'MAJOR',
    price: 0.6542,
    changePips: 24,
    changePct: 0.37,
    high: 0.6570,
    low: 0.6518,
    spreadPips: 0.8,
    volatilityPct: 0.48,
    trend: 'BULLISH',
    structure: 'Bullish ChoCH on 4H, testing Daily FVG',
    support: 0.6510,
    resistance: 0.6590,
    confidencePct: 78,
    sparkline: [0.6518, 0.6525, 0.6534, 0.6542],
    candles: [ /* ... */ ],
  }
];
```

### Logging a New Trade Entry
Edit [`src/data/forexJournal.ts`](file:///c:/Users/rudra/OneDrive/Desktop/Veer%20Portfolio/src/data/forexJournal.ts) by adding an entry conforming to `ForexTradeJournalEntry`.

---

## 5. How to Build 3D Visualizers (`src/components/3d/`)

When creating new 3D graphics:
1. **Always wrap Three.js objects inside an R3F `<Canvas>`**:
   ```tsx
   <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
     <ambientLight intensity={0.5} />
     <MySceneContent />
   </Canvas>
   ```
2. **Use BufferAttribute for Particles**:
   Never create individual `THREE.Mesh` objects for thousands of particles. Always use `THREE.Points` with a single Float32Array for positions and colors.
3. **Animate within `useFrame`**:
   Use the `delta` parameter to ensure frame-rate independent animations.
4. **Cleanup Memory on Unmount**:
   Ensure geometries, materials, and textures are disposed when components unmount.

---

## 6. Coding Conventions & Best Practices

1. **Strict Type Safety**:
   - Every prop, function argument, and state hook must be typed.
   - Ban `any`. Use generics or union types when behavior is polymorphic.
2. **Class Naming with Tailwind**:
   - Use standard Tailwind utility classes.
   - For complex luxury surfaces, use predefined tokens (`.card-specimen-glass`, `.text-theme-gradient`, `.gold-glow-sm`) rather than verbose ad-hoc inline styles.
3. **Number Display**:
   - Any changing numerical data (price, pip spread, percentage, PnL) must include the `.mono-number` class to ensure tabular monospaced alignment.
4. **Link Format in Markdown**:
   - Cross-references in documentation must use standard markdown links with `file:///` URLs or relative paths.

---

## 7. Pre-Flight Verification Checklist

Before opening a pull request or committing changes:

- [ ] **Type Check**: Run `npx tsc --noEmit` and ensure `0` errors.
- [ ] **Production Build**: Run `npm run build` and ensure successful compilation.
- [ ] **Console Inspection**: Open the browser console at `http://localhost:3000/` and verify zero uncaught exceptions or React hydration warnings.
- [ ] **Mobile Responsiveness**: Test at viewport widths `375px`, `768px`, and `1440px`.
- [ ] **Lenis Smooth Scroll**: Scroll up and down the entire page to verify no scroll jumping or ScrollTrigger desynchronization.
