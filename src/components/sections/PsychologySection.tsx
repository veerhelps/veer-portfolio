import React, { useState } from 'react';
import { ShieldAlert, Zap, Compass } from 'lucide-react';

interface MindTopic {
  id: string;
  topic: string;
  statement: string;
  rule: string;
  accent: 'crimson' | 'gold' | 'cream';
  bgTint: string;
}

const mentalArchitectures: MindTopic[] = [
  {
    id: 'fomo',
    topic: 'FOMO',
    statement: 'Chasing an aggressive green candle in motion is surrendering your edge to market makers waiting to distribute into retail urgency.',
    rule: 'NEVER CHASE DISPLACEMENT',
    accent: 'crimson',
    bgTint: 'rgba(181, 30, 37, 0.08)',
  },
  {
    id: 'revenge',
    topic: 'REVENGE',
    statement: 'A loss is an operational cost of doing business. Attempting immediate redemption distorts execution size and obliterates accounts.',
    rule: 'MANDATORY 24-HR LIQUIDITY COOLDOWN',
    accent: 'crimson',
    bgTint: 'rgba(181, 30, 37, 0.06)',
  },
  {
    id: 'overtrading',
    topic: 'OVERTRADING',
    statement: 'High-frequency execution is retail agitation. The sovereign operator waits patiently for London Open and New York session alignment.',
    rule: 'MAXIMUM 2 EXECUTIONS PER DAY',
    accent: 'gold',
    bgTint: 'rgba(214, 180, 90, 0.06)',
  },
  {
    id: 'fear',
    topic: 'FEAR',
    statement: 'Hesitating at a confirmed high-probability model invalidates statistical expectancy. Let the hard stop manage the downside automatically.',
    rule: 'SURRENDER OUTCOME TO PROBABILITY',
    accent: 'gold',
    bgTint: 'rgba(214, 180, 90, 0.05)',
  },
  {
    id: 'greed',
    topic: 'GREED',
    statement: 'Extending profit targets arbitrarily beyond algorithmic liquidity pools transforms winning trades into round-tripped breakeven exits.',
    rule: 'MECHANICAL TARGET DISCIPLINE',
    accent: 'crimson',
    bgTint: 'rgba(181, 30, 37, 0.07)',
  },
  {
    id: 'patience',
    topic: 'PATIENCE',
    statement: 'The market does not owe you an entry. Sitting in 100% cash throughout an entire weekly cycle is an active, disciplined, alpha position.',
    rule: 'CASH IS AN INTENTIONAL POSITION',
    accent: 'cream',
    bgTint: 'rgba(250, 247, 242, 0.04)',
  },
  {
    id: 'discipline',
    topic: 'DISCIPLINE',
    statement: 'Anyone can enter a lucky trade; only the elite execute the identical 1.0% risk framework over 1,000 continuous iterations without deviation.',
    rule: 'CONSISTENCY OVER CERTAINTY',
    accent: 'cream',
    bgTint: 'rgba(214, 180, 90, 0.07)',
  },
];

export function PsychologySection() {
  const [activeTopic, setActiveTopic] = useState<MindTopic | null>(null);

  return (
    <section
      id="psychology"
      className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none transition-colors duration-500"
      style={{
        backgroundColor: activeTopic ? activeTopic.bgTint : 'transparent',
      }}
    >
      {/* Dynamic Background Glow on Word Hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 blur-3xl opacity-0"
        style={{
          opacity: activeTopic ? 0.35 : 0,
          background: activeTopic?.accent === 'crimson'
            ? 'radial-gradient(circle at 50% 50%, rgba(181,30,37,0.2), transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(214,180,90,0.18), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            const isHovered = activeTopic?.id === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTopic(item)}
                onMouseLeave={() => setActiveTopic(null)}
                className={`py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group transition-all duration-300 px-4 -mx-4 rounded-2xl cursor-default ${
                  isHovered ? 'bg-obsidian-900/60 pl-6' : 'hover:bg-obsidian-900/20'
                }`}
                data-cursor="VIEW"
              >
                {/* Topic Indicator (Typography Hover Target) */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-stone-600">0{idx + 1}</span>
                  <h3
                    className={`font-display font-black text-2xl sm:text-4xl tracking-tight transition-all duration-200 ${
                      isHovered
                        ? isCrimson
                          ? 'text-crimson scale-105'
                          : isGold
                          ? 'text-gold scale-105'
                          : 'text-cream scale-105'
                        : isCrimson
                        ? 'text-stone-300 group-hover:text-crimson'
                        : isGold
                        ? 'text-stone-300 group-hover:text-gold'
                        : 'text-stone-300 group-hover:text-cream'
                    }`}
                  >
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
                  <span
                    className={`font-bold tracking-wider ${
                      isCrimson ? 'text-crimson' : isGold ? 'text-gold' : 'text-cream'
                    }`}
                  >
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
