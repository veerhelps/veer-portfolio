export interface SessionWindow {
  id: string;
  name: string;
  hubs: string;
  timeUtc: string;
  marketRole: string;
  volumeShare: string;
  volatility: 'Low-Medium' | 'Medium-High' | 'Peak Institutional';
  keyPairs: string[];
  description: string;
  operationalNotes: string;
}

export const sessionsConfig: SessionWindow[] = [
  {
    id: 'asian',
    name: 'ASIAN SESSION',
    hubs: 'Tokyo / Sydney',
    timeUtc: '00:00 — 09:00 UTC',
    marketRole: 'Range Accumulation & Baseline Sovereign Liquidity',
    volumeShare: '21%',
    volatility: 'Low-Medium',
    keyPairs: ['USD/JPY', 'AUD/USD', 'NZD/USD', 'AUD/JPY'],
    description: 'Establishes initial overnight pricing ranges and baseline liquidity. Typically characterises systematic consolidation before London expansion.',
    operationalNotes: 'Key focus: Identifying the Asia high and low boundaries which often serve as liquidity targets during European trade.',
  },
  {
    id: 'london',
    name: 'LONDON SESSION',
    hubs: 'London Financial Centre',
    timeUtc: '07:00 — 16:00 UTC',
    marketRole: 'Primary European Directional Expansion',
    volumeShare: '38%',
    volatility: 'Medium-High',
    keyPairs: ['EUR/USD', 'GBP/USD', 'EUR/GBP', 'GBP/JPY'],
    description: 'The world’s largest currency trading hub. Initiates major daily directional trends and structural market expansions.',
    operationalNotes: 'Key focus: London Open liquidity sweeps and continuation moves aligned with higher-timeframe sovereign flow.',
  },
  {
    id: 'newyork',
    name: 'NEW YORK SESSION',
    hubs: 'New York Liquidity Desk',
    timeUtc: '12:00 — 21:00 UTC',
    marketRole: 'North American Macro Repricing & Reversal Windows',
    volumeShare: '26%',
    volatility: 'Medium-High',
    keyPairs: ['EUR/USD', 'USD/CAD', 'USD/JPY', 'XAU/USD'],
    description: 'Driven by US macro releases, Treasury market yields, and Federal Reserve communications. Deep liquidity across all dollar pairs.',
    operationalNotes: 'Key focus: Morning overlap momentum followed by afternoon session stabilization and daily high/low lockouts.',
  },
  {
    id: 'overlap',
    name: 'LONDON × NEW YORK OVERLAP',
    hubs: 'London & New York Combined',
    timeUtc: '12:00 — 16:00 UTC',
    marketRole: 'Peak Global Liquidity & Sovereign Volume Confluence',
    volumeShare: '77%',
    volatility: 'Peak Institutional',
    keyPairs: ['EUR/USD', 'GBP/USD', 'XAU/USD', 'USD/JPY'],
    description: 'The four-hour window where the world’s two largest financial centres operate simultaneously, concentrating over 77% of total global Forex turnover.',
    operationalNotes: 'Key focus: Maximum order fill efficiency, tightest sovereign spreads, and primary institutional trend extensions.',
  },
];
