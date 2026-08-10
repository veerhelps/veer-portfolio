import { MarketItem } from '../types';

export const marketIndices: MarketItem[] = [
  {
    id: 'm1',
    symbol: 'NIFTY 50',
    name: 'Nifty 50 Index',
    price: 23842.50,
    change: 142.30,
    changePct: 0.60,
    trend: 'UP',
    support: 23600,
    resistance: 24100,
    structure: 'Higher High / Bullish Dispersal',
    confidence: 88,
    sparkline: [23500, 23580, 23620, 23700, 23680, 23790, 23842]
  },
  {
    id: 'm2',
    symbol: 'BANK NIFTY',
    name: 'Nifty Bank Index',
    price: 51240.80,
    change: 385.10,
    changePct: 0.76,
    trend: 'UP',
    support: 50500,
    resistance: 51800,
    structure: 'Liquidity Grab & Rebound',
    confidence: 82,
    sparkline: [50200, 50600, 50400, 50850, 51000, 51150, 51240]
  },
  {
    id: 'm3',
    symbol: 'SENSEX',
    name: 'BSE Sensex Index',
    price: 78620.15,
    change: 410.50,
    changePct: 0.52,
    trend: 'UP',
    support: 77900,
    resistance: 79200,
    structure: 'Consolidation Breakout',
    confidence: 85,
    sparkline: [77800, 78100, 78000, 78350, 78420, 78550, 78620]
  },
  {
    id: 'm4',
    symbol: 'INDIA VIX',
    name: 'Volatility Index',
    price: 13.85,
    change: -0.45,
    changePct: -3.15,
    trend: 'DOWN',
    support: 12.50,
    resistance: 16.20,
    structure: 'Low Volatility Expansion Risk',
    confidence: 90,
    sparkline: [15.2, 14.8, 14.9, 14.2, 14.1, 14.0, 13.85]
  }
];

export const watchlistAssets: MarketItem[] = [
  {
    id: 'w1',
    symbol: 'SBIN',
    name: 'State Bank of India',
    price: 842.15,
    change: 8.40,
    changePct: 1.01,
    trend: 'UP',
    support: 820,
    resistance: 865,
    structure: 'Accumulation Base 4',
    confidence: 84,
    sparkline: [825, 830, 828, 835, 838, 840, 842]
  },
  {
    id: 'w2',
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Ltd.',
    price: 1265.40,
    change: 14.80,
    changePct: 1.18,
    trend: 'UP',
    support: 1240,
    resistance: 1290,
    structure: 'Continuation Pattern',
    confidence: 87,
    sparkline: [1235, 1245, 1250, 1255, 1260, 1262, 1265]
  },
  {
    id: 'w3',
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Ltd.',
    price: 1680.00,
    change: -12.30,
    changePct: -0.73,
    trend: 'SIDEWAYS',
    support: 1640,
    resistance: 1720,
    structure: 'Range Compression',
    confidence: 78,
    sparkline: [1700, 1710, 1695, 1690, 1688, 1685, 1680]
  },
  {
    id: 'w4',
    symbol: 'LT',
    name: 'Larsen & Toubro Ltd.',
    price: 3640.50,
    change: 32.10,
    changePct: 0.89,
    trend: 'UP',
    support: 3550,
    resistance: 3750,
    structure: 'Bullish Flag Breakout',
    confidence: 81,
    sparkline: [3560, 3580, 3590, 3610, 3625, 3630, 3640]
  }
];
