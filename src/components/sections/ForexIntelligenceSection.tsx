import React from 'react';
import { forexPairs } from '../../data/forexPairs';
import { Activity, Shield, TrendingUp } from 'lucide-react';

export function ForexIntelligenceSection() {
  const majors = forexPairs.slice(0, 4);

  return (
    <section id="intelligence" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 09 — FOREX RADAR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              FOREX <span className="text-gold-gradient">INTELLIGENCE</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400">
            RADAR: <span className="text-emerald-market font-bold">SYNCHRONIZED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((item) => {
            const isUp = item.changePct >= 0;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-obsidian-950 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-stone-500 mb-2">
                    <span>{item.symbol}</span>
                    <span className="text-gold">CONF: {item.confidencePct}%</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-stone-100 mb-1 group-hover:text-gold transition">
                    {item.name}
                  </h3>

                  <div className="font-mono text-2xl font-black text-stone-100 my-2">
                    {item.price}
                    <span className={`text-xs ml-2 font-normal ${isUp ? 'text-emerald-market' : 'text-coral-market'}`}>
                      {isUp ? `+${item.changePct}%` : `${item.changePct}%`}
                    </span>
                  </div>

                  <div className="bg-obsidian-900 p-3 rounded-lg border border-obsidian-850 mt-4 text-[11px] font-mono space-y-1.5">
                    <div className="flex justify-between text-stone-400">
                      <span>STRUCTURE:</span>
                      <span className="text-stone-200">{item.structure}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>KEY SUPPORT:</span>
                      <span className="text-emerald-market font-semibold">{item.support}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>KEY RESISTANCE:</span>
                      <span className="text-coral-market font-semibold">{item.resistance}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-obsidian-850 flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span>TREND: {item.trend}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition">INSPECT &gt;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
