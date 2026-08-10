import { Holding, PortfolioSummary } from '../types';

export const portfolioSummary: PortfolioSummary = {
  totalValue: 8475200,
  currency: '₹',
  todayPnl: 142800,
  todayPnlPct: 1.71,
  totalReturnPct: 34.6,
  winRatePct: 68.4,
  maxDrawdownPct: -6.2,
  profitFactor: 2.85,
  equityCurve: [
    { date: 'Jan 2025', value: 6300000, drawdown: 0 },
    { date: 'Feb 2025', value: 6520000, drawdown: -1.2 },
    { date: 'Mar 2025', value: 6410000, drawdown: -2.8 },
    { date: 'Apr 2025', value: 6980000, drawdown: 0 },
    { date: 'May 2025', value: 7240000, drawdown: -0.5 },
    { date: 'Jun 2025', value: 7150000, drawdown: -1.8 },
    { date: 'Jul 2025', value: 7680000, drawdown: 0 },
    { date: 'Aug 2025', value: 8050000, drawdown: -0.8 },
    { date: 'Sep 2025', value: 7920000, drawdown: -2.4 },
    { date: 'Oct 2025', value: 8210000, drawdown: -0.4 },
    { date: 'Nov 2025', value: 8330000, drawdown: 0 },
    { date: 'Dec 2025', value: 8475200, drawdown: 0 },
  ]
};

export const sampleHoldings: Holding[] = [
  {
    id: 'h1',
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd.',
    sector: 'Banking',
    position: 'Core Long',
    avgPrice: 1620,
    currentPrice: 1845,
    allocationPct: 28.5,
    pnl: 641250,
    pnlPct: 13.88,
    status: 'BULLISH',
    sparkline: [1620, 1640, 1610, 1680, 1720, 1790, 1845]
  },
  {
    id: 'h2',
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd.',
    sector: 'Energy & Retail',
    position: 'Core Long',
    avgPrice: 1210,
    currentPrice: 1380,
    allocationPct: 24.0,
    pnl: 408000,
    pnlPct: 14.04,
    status: 'ACCUMULATING',
    sparkline: [1210, 1225, 1250, 1290, 1310, 1340, 1380]
  },
  {
    id: 'h3',
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    sector: 'IT Services',
    position: 'Tactical Long',
    avgPrice: 3850,
    currentPrice: 4210,
    allocationPct: 18.0,
    pnl: 154800,
    pnlPct: 9.35,
    status: 'BULLISH',
    sparkline: [3850, 3910, 3880, 4020, 4110, 4180, 4210]
  },
  {
    id: 'h4',
    symbol: 'INFY',
    name: 'Infosys Limited',
    sector: 'IT Services',
    position: 'Tactical Long',
    avgPrice: 1720,
    currentPrice: 1910,
    allocationPct: 15.5,
    pnl: 171475,
    pnlPct: 11.04,
    status: 'TRIMMED',
    sparkline: [1720, 1750, 1810, 1790, 1860, 1890, 1910]
  },
  {
    id: 'h5',
    symbol: 'NIFTYBEES',
    name: 'Nippon India Nifty 50 ETF',
    sector: 'Index Benchmark',
    position: 'Hedge / Core',
    avgPrice: 248,
    currentPrice: 276,
    allocationPct: 14.0,
    pnl: 158760,
    pnlPct: 11.29,
    status: 'NEUTRAL',
    sparkline: [248, 252, 256, 260, 268, 272, 276]
  }
];
