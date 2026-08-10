import { CurriculumModule } from '../types';

export const vaxsaCurriculumModules: CurriculumModule[] = [
  {
    id: 'c-1',
    number: '01',
    title: 'FOREX MARKET STRUCTURE & LIQUIDITY ARCHITECTURE',
    subtitle: 'Deconstructing institutional order flow, swing points, liquidity pools, and Fair Value Gaps.',
    topics: [
      'Mapping 1D / 4H / 15M Higher Timeframe Market Structure',
      'Identifying Institutional Liquidity Pools (Buy-side & Sell-side Sweeps)',
      'Fair Value Gap (FVG) & Order Block (OB) Identification',
      'Market Structure Shifts (MSS) vs Change of Character (CHoCH)',
      'Asia Range Accumulation & London Open Manipulation (Judas Swing)'
    ]
  },
  {
    id: 'c-2',
    number: '02',
    title: 'CURRENCY DYNAMICS & GLOBAL MARKET SESSIONS',
    subtitle: 'ExplOITING volume overlaps, currency strength differentials, and central bank policy.',
    topics: [
      'The 4 Global Forex Sessions (Sydney, Tokyo, London, New York)',
      'London / New York Overlap Volatility & Liquidity Window',
      'Currency Strength Matrix & Relative Momentum Differentials',
      'Central Bank Policy Impact (FED, ECB, BOE, BOJ Rate Decisions)',
      'Gold / USD (XAU/USD) Macro Inverse Relationship'
    ]
  },
  {
    id: 'c-3',
    number: '03',
    title: 'THE EXECUTION ENGINE & RISK DISCIPLINE',
    subtitle: 'Translating institutional analysis into repeatable entry models with strict mathematical capital preservation.',
    topics: [
      'The 3 Vaxsa High-Confluence Entry Models',
      'Mathematical Position Sizing Formula based on Pips & Volatility ATR',
      'Hard Stop Loss Placement 5 Pips Beyond Structural Swing Invalidation',
      'Asymmetric Risk-to-Reward Ratio Structuring (Minimum 1 : 2.5 R:R)',
      'Portfolio Heat & Maximum Daily Drawdown Protection Rules'
    ]
  },
  {
    id: 'c-4',
    number: '04',
    title: 'PSYCHOLOGY & OPERATOR MASTERY',
    subtitle: 'Stripping away noise, mastering discipline under drawdown, and maintaining execution calm.',
    topics: [
      'Decoupling Outcome from Execution Quality',
      'Eliminating FOMO (Fear of Missing Out) & Revenge Trading',
      'Managing Trade Drawdowns with Systematic Size Reduction',
      'Building the Daily Pre-Market Checklist & Trade Journaling Protocol',
      'Developing Long-Term Operator Resilience & Repeatable Alpha'
    ]
  }
];
