import React from 'react';
import { Eye, ShieldAlert } from 'lucide-react';

const mentalArchitectures = [
  {
    topic: 'FOMO',
    statement: 'Chasing a candle in motion is surrendering your statistical edge.',
    rule: 'NEVER CHASE DISPLACEMENT',
    accent: 'crimson'
  },
  {
    topic: 'REVENGE',
    statement: 'A loss is an operational business cost. Attempting to extract immediate redemption destroys accounts.',
    rule: 'MANDATORY 24-HR LIQUIDITY COOLDOWN',
    accent: 'crimson'
  },
  {
    topic: 'OVERTRADING',
    statement: 'High-frequency execution is the hallmark of retail agitation. The master waits for session alignment.',
    rule: 'MAXIMUM 2 EXECUTIONS PER DAY',
    accent: 'gold'
  },
  {
    topic: 'FEAR & GREED',
    statement: 'Both are biological distortions of a mechanical probability engine. Let the stop protect; let the target fulfill.',
    rule: 'MECHANICAL TARGET DISCIPLINE',
    accent: 'gold'
  },
  {
    topic: 'PATIENCE',
    statement: 'The market does not owe you an entry. Sitting in 100% cash is a fully intentional position.',
    rule: 'CASH IS AN ALPHA POSITION',
    accent: 'cream'
  },
  {
    topic: 'DISCIPLINE',
    statement: 'Anyone can enter a trade; only the elite execute the identical risk model over 1,000 iterations without deviation.',
    rule: 'CONSISTENCY OVER CERTAINTY',
    accent: 'cream'
  }
];

export function PsychologySection() {
  return (
    <section id="psychology" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-crimson mb-4">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 11 — MENTAL ARCHITECTURE</span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl mb-20">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-display font-black text-cream tracking-tight leading-[0.95] break-words">
            THE HARDEST POSITION<br />
            <span className="text-crimson">IS THE ONE YOU</span><br />
            <span className="text-gold-gradient">DON'T TAKE.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-stone-400 tracking-widest uppercase mt-6 max-w-xl">
            THE MARKET TESTS THE OPERATOR // 90% OF SPECULATIVE FAILURE OCCURS IN THE SPACE BETWEEN RULES AND IMPULSE
          </p>
        </div>

        {/* Minimal Typographic Layout — Negative Space Instead of Boxed Cards */}
        <div className="divide-y divide-obsidian-850 border-y border-obsidian-850">
          {mentalArchitectures.map((item, idx) => {
            const isCrimson = item.accent === 'crimson';
            const isGold = item.accent === 'gold';
            return (
              <div
                key={item.topic}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group hover:bg-obsidian-900/30 transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Topic Indicator */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-stone-600">0{idx + 1}</span>
                  <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight transition-colors ${
                    isCrimson ? 'text-crimson' : isGold ? 'text-gold' : 'text-cream'
                  }`}>
                    {item.topic}
                  </h3>
                </div>

                {/* Core Psychological Principle */}
                <div className="lg:col-span-6 font-sans text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                  {item.statement}
                </div>

                {/* Operator Rule Flag */}
                <div className="lg:col-span-3 font-mono text-[11px] text-left lg:text-right text-stone-400">
                  <span className="text-stone-500 block text-[9px] uppercase tracking-wider">MANDATORY RULE</span>
                  <span className={`font-bold tracking-wider ${
                    isCrimson ? 'text-crimson' : isGold ? 'text-gold' : 'text-cream'
                  }`}>
                    {item.rule}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
