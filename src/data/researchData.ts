import { ResearchArticle } from '../types';

export const researchArticles: ResearchArticle[] = [
  {
    id: 'r-1',
    title: 'Deconstructing Institutional Liquidity Pools in Indian Benchmarks',
    category: 'STRUCTURE',
    readTime: '7 min read',
    date: 'Feb 2026',
    summary: 'An empirical examination of order flow dynamics, option pin levels, and high-frequency liquidity grabs in Nifty 50 futures.',
    content: `Institutional market participants rarely buy at market price. They require deep liquidity pools—areas where retail stop losses accumulate above previous swing highs or below key swing lows.

Key Observations:
1. Liquidity Sweeps before Trend Continuation: Over 73% of sustainable intraday moves in Bank Nifty begin with a sweep of the previous session high or low.
2. Fair Value Gaps as Magnetic Zones: Imbalances created during rapid price expansion act as high-probability retest targets before secondary expansion.
3. Order Block Mitigation: High-timeframe order blocks retain institutional buy/sell orders that trigger aggressive displacement upon re-touch.`
  },
  {
    id: 'r-2',
    title: 'The Psychology of Drawdown: Operating Calmly Under Fire',
    category: 'PSYCHOLOGY',
    readTime: '5 min read',
    date: 'Jan 2026',
    summary: 'How professional operators maintain emotional equilibrium and process discipline during adverse market regimes.',
    content: `Drawdown is not a failure of your strategy; it is the statistical cost of doing business in random distributions of edge.

Rules of Engagement:
- Decouple Outcome from Decision Quality: A loss executed with perfect risk management is a good trade. A win executed impulse-style is a bad habit forming.
- Sizing Reduction Protocol: When portfolio drawdown hits -3%, automatically reduce position risk by 50% until net equity reaches new highs.
- The 24-Hour Rule: After any major win or loss exceeding 2R, refrain from entering new positions for 24 hours to clear emotional bias.`
  },
  {
    id: 'r-3',
    title: 'Volatility Regimes & Portfolio Risk Distribution',
    category: 'RISK',
    readTime: '8 min read',
    date: 'Dec 2025',
    summary: 'Structuring portfolio allocation around India VIX levels and sector rotation cycles.',
    content: `Risk is not static. When India VIX compresses below 12.0, market participants price in zero tail risk, creating ideal conditions for explosive options expansion. Conversely, when VIX exceeds 22.0, position sizing must compress to account for expanded daily ATR.`
  }
];
