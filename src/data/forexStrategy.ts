export interface BeginnerGuideModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  concepts: string[];
}

export const beginnerGuideModules: BeginnerGuideModule[] = [
  {
    id: 'guide-01',
    number: '01',
    title: 'MARKET BASICS',
    subtitle: 'Understanding the Global Currency Market Infrastructure',
    summary: 'The foreign exchange market is the largest financial market in the world, with over $7.5 trillion in daily sovereign turnover. Learn how sovereign liquidity flows and why trading is an exercise in statistical probability.',
    concepts: [
      'What is Forex: Global Sovereign Currency Exchange Mechanisms',
      'The 24-Hour Continuous Auction Cycle & Decentralized Interbank Network',
      'Retail Myths vs. Institutional Reality: Why Most Retail Approaches Fail',
      'The Foundational Priority: Capital Preservation Precedes All Return',
    ],
  },
  {
    id: 'guide-02',
    number: '02',
    title: 'CURRENCY PAIRS',
    subtitle: 'Base vs Quote Currencies, Majors, Crosses & Metals',
    summary: 'Currencies are always quoted in pairs, expressing the exchange rate between two sovereign economies. Understanding how pair categorization influences volatility and spread costs.',
    concepts: [
      'Base vs. Quote Currency Mechanics (EUR/USD, GBP/USD, USD/JPY)',
      'The Sovereign Majors: G8 Economies Backed by Deep Liquidity Desks',
      'Cross Currency Pairs: Trading Relative Strength Without Direct USD Pricing',
      'Precious Metals (XAU/USD): Sovereign Reserve Diversification & Safe Havens',
    ],
  },
  {
    id: 'guide-03',
    number: '03',
    title: 'MARKET STRUCTURE',
    subtitle: 'Higher Timeframe Structure & Institutional Swing Integrity',
    summary: 'Price delivery is not random. It is governed by systematic swing points, trend continuation models, and structural breaks across multiple fractal timeframes.',
    concepts: [
      'Higher Timeframe Structure: Daily & 4-Hour Trend Bias Identification',
      'Multi-Timeframe Context: Aligning Weekly Context with Intraday Timing',
      'Key Market Levels: Previous Day High/Low, Session Boundaries, Swing Extremes',
      'Market Structure Shifts (MSS): Validating Clean Structural Displacement',
    ],
  },
  {
    id: 'guide-04',
    number: '04',
    title: 'LIQUIDITY CONCEPTS',
    subtitle: 'Order Flow Pools, Sweeps & Fair Value Imbalances',
    summary: 'Large institutional orders require opposing liquidity to execute. Learn how liquidity pools are formed, why old highs and lows attract price, and how imbalances rebalance.',
    concepts: [
      'Buy-Side Liquidity (BSL) & Sell-Side Liquidity (SSL) Recognition',
      'Liquidity Sweeps: How Institutions Fill Large Size at Structural Extremes',
      'Imbalance Concepts & Fair Value Gaps (FVG): Price Delivery Inefficiencies',
      'Premium vs. Discount Pricing: Accumulating Below 50% Range Equilibrium',
    ],
  },
  {
    id: 'guide-05',
    number: '05',
    title: 'MARKET SESSIONS',
    subtitle: 'Asian Session, London Expansion & New York Volatility',
    summary: 'Trading is an intentional activity tied to sovereign financial center operating hours. Learn to categorize the 24-hour cycle by liquidity volume and structural intent.',
    concepts: [
      'Asian Session (00:00 — 09:00 UTC): Overnight Accumulation & Range Boundaries',
      'London Session (07:00 — 16:00 UTC): Institutional Directional Injections',
      'New York Session (12:00 — 21:00 UTC): US Macro Repricing & Trend Extensions',
      'London × New York Overlap: The Peak 77% Global Volume Window',
    ],
  },
  {
    id: 'guide-06',
    number: '06',
    title: 'FUNDAMENTALS',
    subtitle: 'Sovereign Interest Rates, Central Banks & Macro Catalysts',
    summary: 'While technical structure dictates timing, macroeconomic divergence dictates the multi-month trajectory of sovereign currencies. Understand the forces that move billions.',
    concepts: [
      'Central Bank Mandates: Federal Reserve, ECB, Bank of England, Bank of Japan',
      'Interest Rate Differentials: Why Global Capital Seeks Higher Real Yields',
      'Inflation & Employment Indicators: CPI, PPI, and Non-Farm Payroll Dynamics',
      'Macro Risk Regimes: Risk-On Expansion vs. Risk-Off Capital Flight',
    ],
  },
  {
    id: 'guide-07',
    number: '07',
    title: 'CHART READING',
    subtitle: 'Candlestick Delivery, Clean Layouts & Objective Observation',
    summary: 'Strip away the visual noise of dozens of lagging retail indicators. Learn to read raw price delivery, candlestick bodies versus wicks, and structural displacement.',
    concepts: [
      'Raw Candlestick Reading: Bodies Represent Volume; Wicks Represent Rejection',
      'Dealing Range Identification: Measuring High-to-Low Institutional Boundaries',
      'Chart Observation Habits: Avoiding Cognitive Overload & Retaining Clarity',
      'Educational Entry Theory: Patient Confirmation over Impulsive Guessing',
    ],
  },
  {
    id: 'guide-08',
    number: '08',
    title: 'RISK AWARENESS',
    subtitle: 'Capital Protection, Position Sizing & Mathematical Longevity',
    summary: 'The hallmark of professional institutional trading is not win rate—it is ruthless risk management and strict capital preservation. Learn the mathematical laws of survival.',
    concepts: [
      'Fixed Fractional Risk: Never Risking More Than 0.5%–1.0% Per Setup',
      'Asymmetric Risk-to-Reward: Structuring Setups with 1:2.5+ Minimum Return',
      'The Mathematical Ruin Formula: Why Overleveraging Leads to Inevitable Drawdown',
      'Protective Stop Placement Logic: Invalidation Points Based on Structure',
    ],
  },
  {
    id: 'guide-09',
    number: '09',
    title: 'PSYCHOLOGY & DISCIPLINE',
    subtitle: 'Emotional Detachment, Cognitive Bias & Process Mastery',
    summary: 'The market is a psychological mirror. Trading mastery is 80% emotional discipline, patience, and the ability to execute a verified process without fear or greed.',
    concepts: [
      'Capital Preservation Over Alpha: The Disciplined Trader Mindset',
      'FOMO & Overtrading: Learning That Cash Is an Active, Alpha Market Position',
      'Managing Losing Streaks: Maintaining Process Fidelity Under Variance',
      'The Reality of Systematic Trading: Consistency Is Born from Boredom and Discipline',
    ],
  },
];
