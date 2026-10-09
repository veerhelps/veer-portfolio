import React, { useState } from 'react';
import { Landmark, TrendingUp, Percent, Users, Globe2, Scale, ArrowUpRight } from 'lucide-react';

interface FundamentalTopic {
  id: string;
  title: string;
  tag: string;
  icon: React.ReactNode;
  summary: string;
  institutionalImpact: string;
  keyMetric: string;
}

const fundamentalTopics: FundamentalTopic[] = [
  {
    id: 'interest-rates',
    title: 'Interest Rates & Yield Differentials',
    tag: 'PRIMARY DRIVER',
    icon: <Percent size={18} className="text-gold" />,
    summary: 'The foundational gravitational force in sovereign foreign exchange. Global capital systematically flows toward currencies with higher risk-adjusted real interest rates.',
    institutionalImpact: 'Central bank rate decisions alter institutional carry trade dynamics and sovereign bond yield curves worldwide.',
    keyMetric: 'Sovereign 2Y & 10Y Government Bond Yield Spreads',
  },
  {
    id: 'inflation',
    title: 'Inflation & Price Stability',
    tag: 'POLICY CATALYST',
    icon: <TrendingUp size={18} className="text-crimson" />,
    summary: 'Sustained increases in consumer prices erode purchasing power and force central banks to hike interest rates to cool aggregate economic demand.',
    institutionalImpact: 'Persistent high inflation forces hawkish central bank cycles, strengthening currency valuation in the short-to-medium term.',
    keyMetric: 'Consumer Price Index (CPI) & Core PCE Deflator',
  },
  {
    id: 'employment',
    title: 'Employment & Labor Dynamics',
    tag: 'MACRO HEALTH',
    icon: <Users size={18} className="text-cyan-highlight" />,
    summary: 'A robust labor market fuels domestic consumption and wage inflation, giving central banks the economic justification to maintain higher terminal interest rates.',
    institutionalImpact: 'Sharp labor market contractions trigger immediate sovereign dovish repricing and liquidity injection expectations.',
    keyMetric: 'Non-Farm Payrolls, Unemployment Rate & Average Hourly Earnings',
  },
  {
    id: 'central-banks',
    title: 'Central Bank Mandates',
    tag: 'SOVEREIGN ARCHITECTS',
    icon: <Landmark size={18} className="text-gold" />,
    summary: 'The Federal Reserve, European Central Bank, Bank of England, and Bank of Japan regulate sovereign money supply, balance sheet sizing, and credit conditions.',
    institutionalImpact: 'Forward guidance and policy statements trigger multi-week macro trend continuations across all major currency pairs.',
    keyMetric: 'Policy Rate Statements, Summary of Economic Projections & Balance Sheet QT/QE',
  },
  {
    id: 'economic-growth',
    title: 'Economic Growth & GDP Cycles',
    tag: 'STRUCTURAL BASIS',
    icon: <Scale size={18} className="text-emerald-market" />,
    summary: 'Gross Domestic Product reflects overall economic vitality, manufacturing output, and service sector expansion across sovereign economies.',
    institutionalImpact: 'Economies demonstrating relative GDP outperformance attract foreign direct investment and institutional portfolio inflows.',
    keyMetric: 'Quarterly GDP Growth, ISM/S&P PMIs & Trade Balances',
  },
  {
    id: 'cross-asset',
    title: 'Currency Relationships & Commodities',
    tag: 'MACRO CORRELATION',
    icon: <Globe2 size={18} className="text-opal-silver" />,
    summary: 'Currencies do not trade in isolation. Commodity exporters (CAD, AUD) correlate with oil and industrial metals; safe havens (CHF, JPY) mirror risk sentiment.',
    institutionalImpact: 'Spot Gold (XAU/USD) acts as an inverse hedge to real yields, while oil fluctuations directly drive Canadian Dollar trade terms.',
    keyMetric: 'WTI Crude Oil, US 10Y Real Yields & S&P 500 Risk Regimes',
  },
];

export function MacroLayerSection() {
  const [selectedTopic, setSelectedTopic] = useState<FundamentalTopic>(fundamentalTopics[0]);

  return (
    <section
      id="fundamentals"
      className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative select-none"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">SECTION 06 — FUNDAMENTALS OF FOREX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4">
            FUNDAMENTALS OF <span className="text-gold-gradient">FOREX.</span>
          </h2>

          <p className="max-w-2xl text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed font-sans">
            Technical market structure locates timing; macroeconomic divergence dictates directional trend longevity. Institutional capital aligns with sovereign interest rate spreads and central bank policy mandates.
          </p>
        </div>

        {/* Compact, Educational 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 font-mono text-xs">
          {fundamentalTopics.map((topic) => {
            const isSelected = selectedTopic.id === topic.id;
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-obsidian-900 via-obsidian-900/90 to-obsidian-950 border-gold/50 shadow-2xl gold-glow-sm'
                    : 'bg-obsidian-900/60 border-white/[0.08] hover:border-gold/30'
                }`}
                data-cursor="VIEW"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-obsidian-950/80 border border-white/[0.08]">
                      {topic.icon}
                    </div>
                    <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest px-2 py-0.5 rounded bg-white/[0.04]">
                      {topic.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-cream mb-2 group-hover:text-gold transition-colors tracking-tight">
                    {topic.title}
                  </h3>

                  <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {topic.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px]">
                    <span className="text-stone-500 block uppercase mb-0.5">INSTITUTIONAL IMPACT:</span>
                    <span className="text-stone-300 font-sans text-xs">{topic.institutionalImpact}</span>
                  </div>
                  <div className="text-[10px] pt-1">
                    <span className="text-gold block uppercase mb-0.5">BENCHMARK METRICS:</span>
                    <span className="text-stone-400 font-mono text-[10px]">{topic.keyMetric}</span>
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
