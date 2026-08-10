import React from 'react';
import { marketSessions } from '../../data/sessionsData';
import { Clock, Globe, Zap } from 'lucide-react';

export function ForexSessionsSection() {
  return (
    <section id="sessions" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 04 — SESSION CHRONOLOGY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          GLOBAL FOREX <span className="text-gold-gradient">SESSIONS</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-12">
          The 24-hour institutional market cycle. High-volume execution is focused strictly during London Open and London / New York Overlap.
        </p>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 font-mono text-xs">
          {marketSessions.map((session) => (
            <div
              key={session.id}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                session.isActive
                  ? 'bg-obsidian-900 border-gold/40 shadow-xl gold-glow-sm'
                  : 'bg-obsidian-900/40 border-obsidian-800'
              }`}
            >
              <div className="flex items-center justify-between text-stone-500 mb-3">
                <span className="text-gold font-bold">{session.name}</span>
                {session.isActive ? (
                  <span className="text-emerald-market font-bold bg-emerald-market/10 border border-emerald-market/30 px-2 py-0.5 rounded text-[10px]">
                    ● ACTIVE NOW
                  </span>
                ) : (
                  <span className="text-stone-600 text-[10px]">CLOSED</span>
                )}
              </div>

              <h3 className="font-display font-bold text-lg text-stone-100 mb-1">{session.location}</h3>
              <div className="text-stone-400 text-xs mb-4">{session.openTimeUtc} — {session.closeTimeUtc}</div>

              <div className="pt-4 border-t border-obsidian-850 flex justify-between text-[11px]">
                <span className="text-stone-500">VOLUME SHARE:</span>
                <span className="text-gold font-bold">{session.volumeSharePct}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* London-NY Overlap Callout Box */}
        <div className="p-6 rounded-2xl bg-gold/10 border border-gold/40 font-mono text-xs text-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 gold-glow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center text-obsidian-950 shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <div className="font-bold text-gold text-base mb-1">LONDON / NEW YORK OVERLAP (12:00 — 16:00 UTC)</div>
              <div className="text-stone-300 text-xs font-sans">
                Accounts for over 77% of total daily global Forex volume. Peak liquidity window for EUR/USD, GBP/USD, and XAU/USD execution.
              </div>
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-obsidian-950 border border-gold/40 text-gold font-bold whitespace-nowrap text-xs">
            HIGH CONFLUENCE WINDOW
          </div>
        </div>
      </div>
    </section>
  );
}
