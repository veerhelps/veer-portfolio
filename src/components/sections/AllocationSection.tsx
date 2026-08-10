import React from 'react';
import { AllocationGalaxy } from '../3d/AllocationGalaxy';
import { PieChart, ShieldCheck } from 'lucide-react';

export function AllocationSection() {
  return (
    <section id="allocation" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 05 — ASSET ALLOCATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          3D SECTOR <span className="text-gold-gradient">GALAXY</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-10">
          An interactive 3D orbital system representing capital distribution across high-conviction market sectors.
        </p>

        {/* 3D Allocation Component */}
        <AllocationGalaxy />

        {/* Accessible Sector Breakdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 font-mono text-xs">
          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <div className="text-gold font-bold mb-1">BANKING & FINANCIALS</div>
            <div className="text-2xl font-black text-stone-100">28.5%</div>
            <div className="text-[10px] text-emerald-market mt-1">Core Long • +13.88% Return</div>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <div className="text-gold font-bold mb-1">IT & TECHNOLOGY</div>
            <div className="text-2xl font-black text-stone-100">33.5%</div>
            <div className="text-[10px] text-emerald-market mt-1">Tactical Long • +10.20% Return</div>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <div className="text-gold font-bold mb-1">ENERGY & RETAIL</div>
            <div className="text-2xl font-black text-stone-100">24.0%</div>
            <div className="text-[10px] text-emerald-market mt-1">Core Long • +14.04% Return</div>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <div className="text-gold font-bold mb-1">BENCHMARK ETFS</div>
            <div className="text-2xl font-black text-stone-100">14.0%</div>
            <div className="text-[10px] text-stone-400 mt-1">Hedge Reserve • +11.29% Return</div>
          </div>
        </div>
      </div>
    </section>
  );
}
