# Styling & Design System Guide — VAXSA Forex Observatory

This guide details the aesthetic design system, color palette, typography hierarchy, glassmorphism tokens, and animation standards used across the VAXSA Forex Observatory.

---

## 1. Design System Philosophy

The design identity of VAXSA is defined by **Sovereign Institutional Luxury**:
- Rejects cheap, generic SaaS templates and bright saturated AI purple meshes.
- Embraces a deep obsidian black foundation, warm editorial cream typography, and metallic champagne gold and surgical crimson indicators.
- Employs tactile frosted liquid glass surfaces (`card-specimen-glass`) with sub-surface lighting.
- Incorporates dynamic chromatic atmosphere that imperceptibly shifts ambient aura as the visitor scrolls between thematic market sections.

---

## 2. Color Palette & Token Reference

### Base Obsidian Foundation
The base background uses deep obsidian tones configured in `tailwind.config.js` and `:root`:

| Token | Hex | Role |
| :--- | :--- | :--- |
| `obsidian-950` | `#050505` | Root canvas background, primary page backdrop |
| `obsidian-900` | `#0B0B0B` | Primary card background, section dividers |
| `obsidian-850` | `#111111` | Secondary elevated card surfaces |
| `obsidian-800` | `#161616` | Hover card states, borders, table rows |
| `obsidian-700` | `#222222` | Structural borders, subtle dividers |
| `obsidian-600` | `#2D2D2D` | Form inputs, inactive pill controls |

### Text & Neutral Hierarchy
Text is set in warm cream rather than harsh pure `#FFFFFF` to ensure high contrast without eye fatigue:

| Token | Hex | Role |
| :--- | :--- | :--- |
| `cream` | `#FAF7F2` | Primary headlines, key financial figures, high-emphasis text |
| `cream-muted` | `#E5E1D8` | Body copy, secondary subheadings |
| `cream-dim` | `#BDB9AF` | Micro-labels, tooltips, table captions |
| `stone-400 / 500` | `#A8A29E / #78716C` | Muted timestamps, metadata, inactive icons |

### Strategic Financial Accents

| Token | Hex | Financial Semantics |
| :--- | :--- | :--- |
| `gold` (`DEFAULT`) | `#D6B45A` | Institutional edge, master branding, gold bullion reserves, primary CTA |
| `gold-light` | `#F3E5AB` | Gradient specular highlights |
| `gold-dark` | `#9E7D2B` | Gradient shadow terminus |
| `crimson` (`DEFAULT`) | `#B51E25` | Bearish trends, sell-side liquidity, risk stop loss, emergency warnings |
| `crimson-deep` | `#8F1118` | Gradient base for crimson cards |
| `crimson-vibrant` | `#D52B32` | Active short indicators, high-impact alerts |
| `emerald-market` | `#36D39A` | Bullish trends, profitable trades, buy-side liquidity targets |
| `cyan-electric` | `#1EC1CB` | Surveillance radar, inter-dealer flows, London Open session |
| `violet-royal` | `#36255C` | Psychology, mental architecture, discipline protocols |

---

## 3. Dynamic Chromatic Theme Engine

The application features a responsive CSS variable system driven by GSAP ScrollTrigger in `src/context/ThemeContext.tsx`.

### CSS Custom Properties on `:root`
```css
:root {
  --theme-accent: #D6B45A;
  --theme-primary: #050505;
  --theme-gradient: linear-gradient(135deg, #FFFFFF 0%, #D6B45A 50%, #050505 100%);
  --theme-glow: rgba(214, 180, 90, 0.2);
  --theme-border: rgba(214, 180, 90, 0.4);
}
```

### Dynamic Utility Classes (`src/index.css`)
- `.text-theme-gradient`: Applies `-webkit-background-clip: text` using `--theme-gradient`.
- `.bg-theme-gradient`: Applies background fill using `--theme-gradient`.
- `.text-theme-accent`: Colors text using `--theme-accent`.
- `.border-theme-accent`: Sets border color dynamically via `--theme-border`.
- `.theme-glow-sm` & `.theme-glow-md`: Applies soft multi-layered box shadows with `--theme-glow`.

---

## 4. Frosted Liquid Glass System (`.card-specimen-glass`)

Rather than flat semi-transparent boxes, VAXSA uses **Frosted Liquid Glass cards** with subtle specular insets:

```css
.card-specimen-glass {
  background: rgba(18, 18, 24, 0.55);
  backdrop-filter: blur(28px) saturate(170%);
  -webkit-backdrop-filter: blur(28px) saturate(170%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-specimen-glass:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
```

### Specimen Glass Variants
- `.card-specimen-glass-cyan`: London open / surveillance cards (subtle electric cyan border & glow).
- `.card-specimen-glass-burgundy`: Liquidity & drawdown cards (crimson edge tint).
- `.card-specimen-glass-opal`: Profile & silver reserve cards (cool metallic silver reflection).
- `.card-specimen-glass-violet`: Psychology & mental framework cards (twilight violet sheen).

---

## 5. Typography System

Fonts are loaded via preconnect in `index.html`:

| Font Family | CSS Class | Primary Usage |
| :--- | :--- | :--- |
| **Outfit** | `font-display` | Grand section headlines, hero title, metric banners |
| **Inter** | `font-sans` | Body text, feature descriptions, UI buttons, nav links |
| **Cinzel** | `font-cinzel` | Classical editorial quote dividers, Roman numerals |
| **JetBrains Mono** | `font-mono`, `.mono-number` | Tabular market prices, pip spreads, timestamps, trade log IDs |

> **Rule on Tabular Digits**: Any changing numerical values (prices, percentages, timers, PnL) **must** use `.mono-number` (`font-variant-numeric: tabular-nums`) to prevent horizontal layout jiggle during updates.

---

## 6. Spacing, Layout & Responsive Grid Rhythm

- **Vertical Section Rhythm**: All major sections use consistent editorial padding:
  ```tsx
  className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative"
  ```
- **Max-Width Boundaries**:
  - `max-w-7xl` (`1280px`): Section parent container bounds (`mx-auto px-4 sm:px-6 lg:px-8`).
  - `max-w-4xl` / `max-w-5xl`: Content-focused columns (editorial statements, curriculum accordion).
- **Responsive Breakpoints**:
  - `sm:` (`640px`): Expands mobile 1-column layouts to 2-column grids.
  - `md:` (`768px`): Enables secondary telemetry badges, inline 3D artifacts.
  - `lg:` (`1024px`): Activates full 3-column / 4-column institutional dashboard view.

---

## 7. Animation & Micro-Interactions

1. **Lenis Inertial Smoothing**:
   All page scrolling is normalized through Lenis to prevent discrete wheel notches.
2. **GSAP Hover Transitions**:
   Card hovers use `cubic-bezier(0.16, 1, 0.3, 1)` for quick response with smooth settling.
3. **Ambient Canvas Orbs**:
   Three full-screen orbs animate on endless sinusoidal paths (`duration: 8-11s`, `ease: 'sine.inOut'`).
4. **Interactive Hardware Reticle**:
   Dual concentric rings follow cursor coordinates with slight trailing damping (`gsap.quickTo` / requestAnimationFrame).
