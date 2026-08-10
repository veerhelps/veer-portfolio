import React from 'react';
import { Users, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 15 — VAXSA COMMUNITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          JOIN THE <span className="text-gold-gradient">COMMUNITY</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-sans font-light leading-relaxed mb-10">
          Connect with disciplined Forex operators, exchange live market structure analysis, review trade journals, and refine execution edge in a noise-free environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl font-mono text-xs">
          <div className="p-6 rounded-2xl bg-obsidian-950 border border-obsidian-800 text-left flex flex-col justify-between">
            <div>
              <div className="text-gold font-bold text-base mb-1 flex items-center gap-2">
                <Users size={18} /> DISCORD TRADING DESK
              </div>
              <p className="text-stone-400 text-xs font-sans leading-relaxed mb-4">
                Daily London & New York session breakdown channels, trade thesis discussion, and weekly live Q&A.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-gold font-bold hover:underline"
            >
              <span>ACCESS COMMUNITY</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-obsidian-950 border border-obsidian-800 text-left flex flex-col justify-between">
            <div>
              <div className="text-gold font-bold text-base mb-1 flex items-center gap-2">
                <MessageSquare size={18} /> TELEGRAM ALERTS
              </div>
              <p className="text-stone-400 text-xs font-sans leading-relaxed mb-4">
                High-confluence session overlap alerts, Tier-1 economic event warnings, and macro notes directly from Dharam Veer Singh Kirar.
              </p>
            </div>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold font-bold hover:underline"
            >
              <span>JOIN TELEGRAM</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
