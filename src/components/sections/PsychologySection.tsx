import React from 'react';
import { Brain, HeartHandshake, Eye, AlertOctagon } from 'lucide-react';

const psychologyItems = [
  {
    title: 'FOMO & IMPULSE CONTROL',
    description: 'Chasing a candle already in motion is giving away your statistical edge. If you missed the entry trigger, wait for the next structural setup.',
    rule: 'NEVER CHASE DISPLACEMENT'
  },
  {
    title: 'REVENGE TRADING ELIMINATION',
    description: 'A loss is a business expense. Trying to immediately "win back" money from the market leads to over-leveraged destruction.',
    rule: 'MANDATORY 24-HR COOL DOWN'
  },
  {
    title: 'ACCEPTANCE OF RANDOMNESS',
    description: 'Any single trade outcome is random; over 100 trades, execution edge is deterministic. Treat every setup as an isolated data point.',
    rule: 'PROBABILITY OVER CERTAINTY'
  },
  {
    title: 'OVERTRADING PREVENTION',
    description: 'More trades do not equal more profit. High-performance operators trade less and wait for high-confluence alignments.',
    rule: 'MAX 2 TRADES PER DAY'
  }
];

export function PsychologySection() {
  return (
    <section id="psychology" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 11 — MENTAL ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          THE MARKET TESTS <span className="text-gold-gradient">THE OPERATOR.</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-12">
          Technical analysis provides the map; psychological discipline executes the journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {psychologyItems.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-obsidian-950 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-gold mb-3">
                  <span>MENTAL REGIME 0{i + 1}</span>
                  <Brain size={16} />
                </div>

                <h3 className="font-display font-bold text-xl text-stone-100 mb-3">{item.title}</h3>
                <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-obsidian-850 flex items-center justify-between font-mono text-xs">
                <span className="text-stone-500">OPERATOR RULE:</span>
                <span className="text-gold font-bold">{item.rule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
