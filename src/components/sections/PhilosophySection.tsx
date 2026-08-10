import React from 'react';

const principles = [
  {
    number: '01',
    title: 'PATIENCE',
    subtitle: 'Wait for high-quality setups.',
    description: 'The market is a device for transferring money from the impatient to the patient. 90% of trading success comes from waiting for institutional alignment before pulling the trigger.'
  },
  {
    number: '02',
    title: 'RISK FIRST',
    subtitle: 'Capital preservation precedes opportunity.',
    description: 'Before considering how much a trade can make, calculate precisely how much it can lose. Every order is entered with a hard structural stop loss.'
  },
  {
    number: '03',
    title: 'PROCESS',
    subtitle: 'Judge decisions, not isolated outcomes.',
    description: 'A bad trade that makes money is still a bad trade. A good trade that hits a stop loss is a successful execution of edge.'
  },
  {
    number: '04',
    title: 'CONTEXT',
    subtitle: 'Understand the environment before entering.',
    description: 'A signal in isolation is noise. Always analyze higher timeframe market structure, sector trend, and macro volatility before committing size.'
  },
  {
    number: '05',
    title: 'REVIEW',
    subtitle: 'Every trade becomes information.',
    description: 'Data refinement transforms past mistakes into future edge. Every executed trade is logged, audited, and reviewed for structural improvement.'
  }
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 02 — TRADING PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold font-display text-stone-100 mb-6 tracking-tight">
          THE EDGE IS <span className="text-gold-gradient">NOT A SIGNAL.</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm sm:text-base font-light mb-16">
          A trading signal is useless without discipline, position sizing, and psychological resilience. These five core tenets form the framework of every decision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {principles.map((item) => (
            <div
              key={item.number}
              className="card-dark-surface p-6 rounded-2xl border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-gold/40 group-hover:text-gold transition mb-4">
                  {item.number}
                </div>
                <h3 className="font-display font-bold text-xl text-stone-100 mb-1 group-hover:text-gold transition">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-gold/80 mb-4">{item.subtitle}</div>
                <p className="text-xs text-stone-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-obsidian-850 flex items-center justify-between text-[10px] font-mono text-stone-600">
                <span>TENET {item.number}</span>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
