import React from 'react';
import { AllocationGalaxy } from '../3d/AllocationGalaxy';
import { PieChart, Globe } from 'lucide-react';

export function CurrencyGalaxySection() {
  return (
    <section id="galaxy" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 07 — 3D ORBITAL SYSTEM</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          THE CURRENCY <span className="text-gold-gradient">GALAXY</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-10">
          An interactive 3D orbital visualization mapping currency pair allocation, risk levels, and profit states.
        </p>

        <AllocationGalaxy />
      </div>
    </section>
  );
}
