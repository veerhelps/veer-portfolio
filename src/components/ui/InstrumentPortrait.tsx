import React from 'react';
import { InstrumentSpecimen } from '../../data/forexUniverse';

interface InstrumentPortraitProps {
  instrument: InstrumentSpecimen;
}

/**
 * Visual "Instrument Portrait" & Currency Relationship Field:
 * - Abstract, sophisticated visual identity for the 4 instruments (XAU/USD, XAG/USD, BTC/USD, ETH/USD)
 * - Conceptual Currency Relationship Field connecting the two sovereign economic poles
 * - Pure SVG & CSS, lightweight, accessible, zero fake trading signals
 */
export function InstrumentPortrait({ instrument }: InstrumentPortraitProps) {
  const { accentHex, secondaryHex } = instrument.theme;

  // Render the specific abstract geometry matching each instrument's distinct character
  const renderAbstractGeometry = () => {
    switch (instrument.visualType) {
      case 'radial-metal': // XAU/USD (Gold)
        return (
          <g className="transition-all duration-700">
            {/* Metallic Radial Solar Structure */}
            <circle cx="120" cy="100" r="52" fill="none" stroke={accentHex} strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
            <circle cx="120" cy="100" r="36" fill="none" stroke={accentHex} strokeWidth="1.5" opacity="0.8" />
            <circle cx="120" cy="100" r="18" fill={accentHex} fillOpacity="0.2" stroke={accentHex} strokeWidth="2" />
            <circle cx="120" cy="100" r="5" fill="#FAF7F2" />
            {/* Radiating Ray Ticks */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="120"
                y1="46"
                x2="120"
                y2="38"
                stroke={accentHex}
                strokeWidth="1.5"
                transform={`rotate(${deg} 120 100)`}
                opacity="0.8"
              />
            ))}
          </g>
        );

      case 'linear-metal': // XAG/USD (Silver)
        return (
          <g className="transition-all duration-700">
            {/* Silver Linear Industrial Alignment */}
            <line x1="55" y1="75" x2="185" y2="75" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
            <line x1="45" y1="100" x2="195" y2="100" stroke={secondaryHex} strokeWidth="2" opacity="0.9" />
            <line x1="55" y1="125" x2="185" y2="125" stroke={accentHex} strokeWidth="1.5" opacity="0.5" />
            <rect x="105" y="85" width="30" height="30" fill={accentHex} fillOpacity="0.12" stroke={secondaryHex} strokeWidth="1.5" transform="rotate(45 120 100)" />
            <circle cx="120" cy="100" r="4.5" fill="#FFFFFF" />
          </g>
        );

      case 'digital-scarcity': // BTC/USD (Bitcoin)
        return (
          <g className="transition-all duration-700">
            {/* Algorithmic Cryptographic Block Network */}
            <polygon points="120,45 168,72 168,128 120,155 72,128 72,72" fill="none" stroke={accentHex} strokeWidth="1.5" opacity="0.75" />
            <polygon points="120,62 150,80 150,120 120,138 90,120 90,80" fill={accentHex} fillOpacity="0.08" stroke={secondaryHex} strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
            <line x1="120" y1="45" x2="120" y2="155" stroke={accentHex} strokeWidth="1.2" opacity="0.5" />
            <line x1="72" y1="72" x2="168" y2="128" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <line x1="72" y1="128" x2="168" y2="72" stroke={accentHex} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="120" cy="100" r="6" fill={accentHex} />
          </g>
        );

      case 'ether-lattice': // ETH/USD (Ethereum)
      default:
        return (
          <g className="transition-all duration-700">
            {/* Octahedral Programmable Settlement Lattice */}
            <polygon points="120,40 162,100 120,122 78,100" fill={accentHex} fillOpacity="0.15" stroke={accentHex} strokeWidth="1.5" />
            <polygon points="120,128 162,106 120,165 78,106" fill={accentHex} fillOpacity="0.08" stroke={secondaryHex} strokeWidth="1.2" opacity="0.7" />
            <line x1="120" y1="40" x2="120" y2="165" stroke={secondaryHex} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="120" cy="100" r="4.5" fill="#FAF7F2" />
          </g>
        );
    }
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 1. Abstract Visual Instrument Portrait */}
      <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
        {/* Soft Radial Ambient Aura */}
        <div
          className="absolute inset-4 rounded-full blur-2xl opacity-40 transition-colors duration-700"
          style={{ background: instrument.theme.glowRgba }}
        />

        <svg
          viewBox="0 0 240 200"
          className="w-full h-full relative z-10 overflow-visible"
          aria-hidden="true"
        >
          {renderAbstractGeometry()}
        </svg>

        {/* Conceptual Visual Type Label */}
        <div className="absolute bottom-1 right-2 font-mono text-[8px] uppercase tracking-widest text-stone-400 bg-obsidian-950/80 px-2 py-0.5 rounded border border-white/5">
          PORTRAIT // {instrument.visualType}
        </div>
      </div>

      {/* 2. Conceptual Currency Relationship Field */}
      <div className="w-full mt-4 pt-4 border-t border-white/[0.08] font-mono">
        <div className="flex items-center justify-between mb-3 text-[9px] uppercase tracking-widest text-stone-400">
          <span>INSTRUMENT RELATIONSHIP FIELD</span>
          <span className="font-bold" style={{ color: accentHex }}>SOVEREIGN EQUILIBRIUM</span>
        </div>

        {/* Bilateral Axis Diagram */}
        <div className="relative p-3.5 rounded-xl bg-obsidian-950/70 border border-white/[0.08]">
          {/* Two Connected Poles */}
          <div className="flex items-center justify-between relative z-10">
            {/* Base Currency Pole */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs border"
                style={{
                  backgroundColor: `${accentHex}15`,
                  borderColor: `${accentHex}50`,
                  color: accentHex,
                }}
              >
                {instrument.baseCurrency}
              </div>
              <div>
                <span className="block text-[8px] text-stone-500 uppercase tracking-widest">BASE ASSET</span>
                <span className="block text-xs font-bold text-cream">{instrument.baseCurrency}</span>
              </div>
            </div>

            {/* Tension Meridian Bar */}
            <div className="flex-1 mx-4 relative flex items-center justify-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-white/20 via-gold/50 to-white/20" />
              <div
                className="absolute w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: accentHex }}
              />
              <div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentHex }}
              />
            </div>

            {/* Quote Currency Pole */}
            <div className="flex items-center gap-2 text-right">
              <div>
                <span className="block text-[8px] text-stone-500 uppercase tracking-widest">QUOTE CURRENCY</span>
                <span className="block text-xs font-bold text-cream">{instrument.quoteCurrency}</span>
              </div>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs border bg-white/[0.04] border-white/20 text-cream"
              >
                {instrument.quoteCurrency}
              </div>
            </div>
          </div>

          {/* 4 Interactive Relationship Force Dimensions */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-[9.5px]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70 shrink-0" />
              <span className="text-stone-400">Monetary:</span>
              <span className="text-cream font-medium truncate">Debasement</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 shrink-0" />
              <span className="text-stone-400">Liquidity:</span>
              <span className="text-cream font-medium truncate">Global M2</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 shrink-0" />
              <span className="text-stone-400">Scarcity:</span>
              <span className="text-cream font-medium truncate">Inelastic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/70 shrink-0" />
              <span className="text-stone-400">Sentiment:</span>
              <span className="text-cream font-medium truncate">Risk Velocity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
