import React from 'react';
import { MarketLabCanvas } from '../3d/MarketLabCanvas';
import { Sparkles, Terminal } from 'lucide-react';

export function MarketLabSection() {
  return (
    <section id="market-lab" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 12 — EXPERIMENTAL SIMULATOR</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          THE MARKET <span className="text-gold-gradient">LAB</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-10">
          An interactive procedural simulation visualizing market order flow volatility fields and particle node interactions in real-time. Move your cursor across the field below.
        </p>

        {/* 3D Interactive Lab Canvas */}
        <MarketLabCanvas />
      </div>
    </section>
  );
}
