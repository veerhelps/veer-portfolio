import React from 'react';
import { WorldClock3D } from '../3d/WorldClock3D';
import { marketSessions } from '../../data/sessionsData';
import { Clock, Zap, Globe } from 'lucide-react';

export function ForexSessionsSection() {
  return (
    <section id="sessions" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 05 — SESSION CHRONOLOGY</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-cream tracking-tight mb-4 break-words">
          THE MARKET <span className="text-gold-gradient">HAS A CLOCK.</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-xs sm:text-sm font-light mb-10 leading-relaxed font-sans">
          The 24-hour institutional market cycle. Trading is not an open-ended activity; high-probability execution occurs strictly during London Open and the London / New York Overlap.
        </p>

        {/* 3D World Clock Visual */}
        <div className="mb-10">
          <WorldClock3D />
        </div>

        {/* Sessions Grid */}
        {/* Sessions Grid with Frosted Glass Specimen Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 font-mono text-xs">
          {marketSessions.map((session) => (
            <div
              key={session.id}
              className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                session.isActive
                  ? 'card-specimen-glass-violet violet-glow-md border-violet-400/40 shadow-2xl'
                  : 'card-specimen-glass border-white/10 hover:border-violet-400/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-stone-400 mb-3">
                  <span className="text-gold font-bold">{session.name}</span>
                  <div className="flex items-center gap-2">
                    {session.isActive ? (
                      <span className="text-emerald-market font-bold bg-emerald-market/15 border border-emerald-market/30 px-2 py-0.5 rounded-full text-[9px]">
                        ● ACTIVE
                      </span>
                    ) : (
                      <span className="text-stone-500 text-[9px]">STANDBY</span>
                    )}
                    <div className="specimen-pill-inset px-2 py-0.5 rounded-full text-[8px] text-stone-400">
                      veer.specimen
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-cream mb-1">{session.location}</h3>
                <div className="text-stone-300 text-xs mb-4">{session.openTimeUtc} — {session.closeTimeUtc}</div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-stone-400">VOLUME SHARE:</span>
                  <span className="text-gold font-bold">{session.volumeSharePct}%</span>
                </div>
                <div className="flex items-center justify-between text-[9px] text-stone-500 pt-1 font-mono">
                  <span>VIOLET #36255C</span>
                  <span className="text-lavender-ethereal">CMYK 41, 60, 0, 64</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* London-NY Overlap Callout Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-900/80 to-[#22070A] border border-gold/40 font-mono text-xs text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 gold-glow-sm">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-obsidian-950 shrink-0 font-bold">
              <Zap size={20} className="sm:w-[22px] sm:h-[22px]" />
            </div>
            <div>
              <div className="font-bold text-gold text-xs sm:text-base mb-1">
                LONDON / NEW YORK OVERLAP (12:00 — 16:00 UTC)
              </div>
              <div className="text-stone-300 text-xs font-sans">
                Accounts for over 77% of total daily global Forex volume. Peak liquidity window for EUR/USD, GBP/USD, and Spot Gold execution.
              </div>
            </div>
          </div>
          <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-obsidian-950 border border-gold/40 text-gold font-bold whitespace-normal sm:whitespace-nowrap text-[10px] sm:text-xs shrink-0 self-start md:self-auto">
            HIGH-CONFLUENCE WINDOW
          </div>
        </div>
      </div>
    </section>
  );
}
