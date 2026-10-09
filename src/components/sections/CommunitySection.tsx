import React from 'react';
import { Users, MessageSquare, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { contactConfig } from '../../data/contactConfig';

export function CommunitySection() {
  const discord = contactConfig.channels.find((c) => c.category === 'DISCORD');
  const telegram = contactConfig.channels.find((c) => c.category === 'TELEGRAM');

  return (
    <section id="community" className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">08 — LEARNING COMMUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4">
            EDUCATIONAL <span className="text-gold-gradient">COMMUNITY.</span>
          </h2>

          <p className="max-w-2xl text-stone-300 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed">
            Connect with like-minded Forex students, exchange objective market structure observations, discuss macroeconomic research, and learn structured institutional concepts in a zero-noise environment.
          </p>
        </div>

        {/* Clean Educational Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl font-mono text-xs">
          {/* Discord Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-gold/40 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="text-gold font-bold text-lg mb-3 flex items-center gap-2.5">
                <Users size={20} className="text-gold" />
                <span className="font-display font-black tracking-tight text-xl">STUDY & RESEARCH DESK</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
                Structured learner forums dedicated to market structure homework, weekly educational session reviews, and collaborative concept exploration alongside Dharam Veer Singh Kirar.
              </p>
            </div>
            <a
              href={discord?.url || '#contact'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream hover:text-gold font-bold transition text-xs tracking-wider"
              data-cursor="OPEN"
            >
              <span>ACCESS LEARNING DISCORD</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Telegram Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-cyan-highlight/40 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="text-cyan-highlight font-bold text-lg mb-3 flex items-center gap-2.5">
                <MessageSquare size={20} className="text-cyan-highlight" />
                <span className="font-display font-black tracking-tight text-xl">RESEARCH BRIEFS</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
                Educational session summaries, central bank policy schedules, and sovereign currency macro notes provided directly for academic study and chart context.
              </p>
            </div>
            <a
              href={telegram?.url || '#contact'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream hover:text-cyan-highlight font-bold transition text-xs tracking-wider"
              data-cursor="OPEN"
            >
              <span>JOIN RESEARCH TELEGRAM</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
