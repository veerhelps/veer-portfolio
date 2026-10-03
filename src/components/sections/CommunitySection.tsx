import React from 'react';
import { Users, MessageSquare, ArrowUpRight } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 14 — VEER COMMUNITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4 break-words">
          JOIN THE <span className="text-gold-gradient">COMMUNITY</span>
        </h2>

        <p className="max-w-2xl text-stone-300 text-sm sm:text-base font-sans font-light leading-relaxed mb-12">
          Connect with disciplined Forex operators, exchange live market structure analysis, review trade journals, and refine execution edge in a zero-noise institutional environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl font-mono text-xs">
          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-obsidian-800 hover:border-gold/40 transition-all flex flex-col justify-between">
            <div>
              <div className="text-gold font-bold text-lg mb-2 flex items-center gap-3">
                <Users size={20} />
                <span>DISCORD TRADING DESK</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
                Daily London & New York session breakdown channels, institutional trade thesis discussion, and weekly live Q&A with Dharam Veer Singh Kirar.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-cream hover:text-gold font-bold transition text-xs"
            >
              <span>ACCESS COMMUNITY DESK</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-obsidian-800 hover:border-gold/40 transition-all flex flex-col justify-between">
            <div>
              <div className="text-gold font-bold text-lg mb-2 flex items-center gap-3">
                <MessageSquare size={20} />
                <span>TELEGRAM ALERTS</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
                High-confluence session overlap alerts, Tier-1 economic event warnings, and institutional macro notes directly from the research desk.
              </p>
            </div>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream hover:text-gold font-bold transition text-xs"
            >
              <span>CONNECT TELEGRAM FEED</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
