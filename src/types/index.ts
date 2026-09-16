export interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  isBullish: boolean;
}

export interface ForexPair {
  id: string;
  symbol: string;
  name: string;
  category: 'MAJOR' | 'CROSS' | 'METAL';
  price: number;
  changePips: number;
  changePct: number;
  high: number;
  low: number;
  spreadPips: number;
  volatilityPct: number;
  trend: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  structure: string;
  support: number;
  resistance: number;
  confidencePct: number;
  sparkline: number[];
  candles: Candle[];
}

export interface CurrencyStrengthItem {
  code: string;
  name: string;
  strengthScore: number; // 0 to 100
  trend: 'RISING' | 'FALLING' | 'STABLE';
  bias: 'LONG' | 'SHORT' | 'NEUTRAL';
  affectedPairs: string[];
}

export interface MarketSession {
  id: string;
  name: string;
  location: string;
  openTimeUtc: string;
  closeTimeUtc: string;
  isActive: boolean;
  isOverlap: boolean;
  volumeSharePct: number;
}

export interface EconomicEvent {
  id: string;
  date: string;
  timeUtc: string;
  currency: string;
  importance: 'HIGH' | 'MEDIUM' | 'LOW';
  title: string;
  previous: string;
  forecast: string;
  actual: string;
}

export interface ForexPosition {
  id: string;
  pair: string;
  direction: 'LONG' | 'SHORT';
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  currentPrice: number;
  lotSize: number;
  riskUsd: number;
  rrRatio: string;
  pnlUsd: number;
  pnlPct: number;
  status: 'OPEN' | 'CLOSED';
}

export interface ForexTradeJournalEntry {
  id: string;
  tradeNumber: string;
  date: string;
  pair: string;
  direction: 'LONG' | 'SHORT';
  session: 'LONDON' | 'NEW YORK' | 'TOKYO' | 'OVERLAP';
  entryPrice: number;
  stopLoss: number;
  targetPrice: number;
  exitPrice: number;
  rrRatio: string;
  pnlUsd: number;
  pnlPct: number;
  status: 'WIN' | 'LOSS';
  thesis: string;
  setupDescription: string;
  wentRight: string;
  wentWrong: string;
  lesson: string;
}

export interface MentorshipPlan {
  id: string;
  title: string;
  price: string;
  billingPeriod: string;
  subtitle: string;
  features: string[];
  isPopular?: boolean;
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  topics: string[];
}

export interface ForexPortfolioSummary {
  accountValueUsd: number;
  todayPnlUsd: number;
  todayPnlPct: number;
  totalReturnPct: number;
  winRatePct: number;
  maxDrawdownPct: number;
  profitFactor: number;
  totalTrades: number;
  equityCurve: { date: string; valueUsd: number; drawdownPct: number }[];
}

export interface MacroCardItem {
  id: string;
  headline: string;
  tag: string;
  oneSentence: string;
  currencyImpact: string;
  bias: 'BULLISH' | 'BEARISH' | 'VOLATILE';
}

export interface EditorialQuote {
  quote: string;
  author?: string;
  subtitle?: string;
  accent?: 'gold' | 'crimson' | 'cream';
}

export type TradeEntry = ForexTradeJournalEntry;

