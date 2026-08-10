import React from 'react';
import { watchlistAssets } from '../../data/marketData';
import { Radio, ShieldAlert } from 'lucide-react';

export function WatchlistRadar() {
  return (
    <section id="watchlist" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 10 — MARKET SCANNER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              RADAR <span className="text-gold-gradient">WATCHLIST</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400 flex items-center gap-2">
            <Radio size={14} className="text-emerald-market animate-pulse" />
            <span>SCAN FREQUENCY: 15 SECONDS</span>
          </div>
        </div>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {watchlistAssets.map((asset) => {
            const isUp = asset.change >= 0;
            return (
              <div
                key={asset.id}
                className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between font-mono text-xs text-stone-500 mb-2">
                  <span>{asset.symbol}</span>
                  <span className="text-gold font-bold">CONF: {asset.confidence}%</span>
                </div>

                <h3 className="font-display font-bold text-lg text-stone-100 group-hover:text-gold transition">
                  {asset.name}
                </h3>

                <div className="font-mono text-2xl font-black text-stone-100 my-3">
                  ₹{asset.price.toLocaleString('en-IN')}
                  <span className={`text-xs ml-2 font-normal ${isUp ? 'text-emerald-market' : 'text-coral-market'}`}>
                    {isUp ? `+${asset.changePct}%` : `${asset.changePct}%`}
                  </span>
                </div>

                <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-850 font-mono text-[11px] space-y-1">
                  <div className="flex justify-between text-stone-400">
                    <span>STRUCTURE:</span>
                    <span className="text-stone-200">{asset.structure}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>SUPPORT:</span>
                    <span className="text-emerald-market font-semibold">₹{asset.support}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>RESISTANCE:</span>
                    <span className="text-coral-market font-semibold">₹{asset.resistance}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
