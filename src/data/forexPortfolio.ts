import { ForexPortfolioSummary, ForexPosition } from '../types';

export const forexPortfolioSummary: ForexPortfolioSummary = {
  accountValueUsd: 124850,
  todayPnlUsd: 2140,
  todayPnlPct: 1.74,
  totalReturnPct: 42.8,
  winRatePct: 71.4,
  maxDrawdownPct: -4.8,
  profitFactor: 3.15,
  totalTrades: 56,
  equityCurve: [
    { date: 'Jan 2025', valueUsd: 87400, drawdownPct: 0 },
    { date: 'Feb 2025', valueUsd: 91200, drawdownPct: -0.8 },
    { date: 'Mar 2025', valueUsd: 89800, drawdownPct: -2.1 },
    { date: 'Apr 2025', valueUsd: 96500, drawdownPct: 0 },
    { date: 'May 2025', valueUsd: 102100, drawdownPct: -0.4 },
    { date: 'Jun 2025', valueUsd: 100800, drawdownPct: -1.6 },
    { date: 'Jul 2025', valueUsd: 108400, drawdownPct: 0 },
    { date: 'Aug 2025', valueUsd: 114200, drawdownPct: -0.5 },
    { date: 'Sep 2025', valueUsd: 112900, drawdownPct: -1.9 },
    { date: 'Oct 2025', valueUsd: 119500, drawdownPct: -0.2 },
    { date: 'Nov 2025', valueUsd: 122700, drawdownPct: 0 },
    { date: 'Dec 2025', valueUsd: 124850, drawdownPct: 0 },
  ]
};

export const openForexPositions: ForexPosition[] = [
  {
    id: 'pos-1',
    pair: 'EUR/USD',
    direction: 'LONG',
    entryPrice: 1.0840,
    stopLoss: 1.0805,
    takeProfit: 1.0960,
    currentPrice: 1.0925,
    lotSize: 2.5,
    riskUsd: 875,
    rrRatio: '1 : 3.4',
    pnlUsd: 2125,
    pnlPct: 1.70,
    status: 'OPEN'
  },
  {
    id: 'pos-2',
    pair: 'GBP/JPY',
    direction: 'SHORT',
    entryPrice: 198.40,
    stopLoss: 199.10,
    takeProfit: 196.20,
    currentPrice: 196.80,
    lotSize: 1.8,
    riskUsd: 810,
    rrRatio: '1 : 3.1',
    pnlUsd: 1440,
    pnlPct: 1.15,
    status: 'OPEN'
  },
  {
    id: 'pos-3',
    pair: 'XAU/USD',
    direction: 'LONG',
    entryPrice: 2720.00,
    stopLoss: 2705.00,
    takeProfit: 2765.00,
    currentPrice: 2742.50,
    lotSize: 0.5,
    riskUsd: 750,
    rrRatio: '1 : 3.0',
    pnlUsd: 1125,
    pnlPct: 0.90,
    status: 'OPEN'
  },
  {
    id: 'pos-4',
    pair: 'USD/JPY',
    direction: 'SHORT',
    entryPrice: 154.20,
    stopLoss: 154.80,
    takeProfit: 152.60,
    currentPrice: 153.20,
    lotSize: 2.0,
    riskUsd: 800,
    rrRatio: '1 : 2.7',
    pnlUsd: 1000,
    pnlPct: 0.80,
    status: 'OPEN'
  }
];
