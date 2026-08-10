import { StrategyCategory } from '../types';

export const strategyPlaybook: StrategyCategory[] = [
  {
    id: 's-1',
    title: 'Market Structure & Liquidity Alignment',
    subtitle: 'Mapping institutional order flow and HTF liquidity pools before bias formation.',
    iconName: 'Layers',
    context: 'Daily & 4-Hour Timeframe Market Structure analysis. Identify structural swing highs/lows, unmitigated order blocks, and retail liquidity pools.',
    confirmation: 'Shift in Lower Timeframe Market Structure (CHoCH / BMS) with strong displacement and imbalance (FVG).',
    trigger: 'Limit or market entry at 0.5 - 0.618 Fibonacci equilibrium zone of the displacement impulse.',
    riskRules: 'Hard stop loss placed 5-10 ticks beyond the structural swing low/high. Max 1.0% portfolio risk per trade.',
    executionSteps: [
      'Map 1D / 4H key support, resistance, and liquidity targets.',
      'Wait for liquidity sweep above buy-side or below sell-side liquidity.',
      'Confirm 15M market structure shift with volume expansion.',
      'Enter on retracement to key Fair Value Gap (FVG) or mitigation block.',
      'Partial 50% position scale at 1:2 R:R; trail remainder behind key swings.'
    ]
  },
  {
    id: 's-2',
    title: 'Volatility Compression & Breakout Dynamics',
    subtitle: 'Exploiting low-volatility range compressions before directional expansion.',
    iconName: 'Activity',
    context: 'Identify assets compressing in narrow Bollinger Band / Keltner Channel squeeze states over 10+ sessions.',
    confirmation: 'Volume surge > 200% 20-day moving average accompanying initial range expansion candle.',
    trigger: 'Break and daily close above structural compression resistance line.',
    riskRules: 'Stop loss placed inside the compression mid-band. Maximum 1.25% portfolio risk allocation.',
    executionSteps: [
      'Filter watchlist for India VIX / stock ATR historical low compressions.',
      'Verify underlying sector relative strength against benchmark Nifty 50.',
      'Set alert triggers at upper and lower channel boundaries.',
      'Execute position upon daily close confirmation above resistance.',
      'Scale targets out at 1:2.5, 1:4, and runner trailing stop.'
    ]
  },
  {
    id: 's-3',
    title: 'Mean Reversion at Macro Extreme (Overextension)',
    subtitle: 'Capturing explosive snap-backs when price diverges heavily from moving averages.',
    iconName: 'RefreshCw',
    context: 'Price extended > 3.5 standard deviations from 50 SMA on 1D timeframe with RSI > 80 or < 20.',
    confirmation: 'Divergent volume spike coupled with exhaustion candle pin-bar or engulfing pattern.',
    trigger: 'Intraday trigger when price re-enters the previous session range.',
    riskRules: 'Tight structural stop above swing high/low. Max 0.75% portfolio risk due to counter-trend nature.',
    executionSteps: [
      'Scan for extreme daily extension metrics across liquid Large-Cap equities.',
      'Confirm RSI / MACD momentum exhaustion on 1-hour timeframe.',
      'Wait for initial change of character before executing entry.',
      'Target quick return to the 20-day exponential moving average.',
      'Strict exit if momentum fails to materialize within 48 hours.'
    ]
  },
  {
    id: 's-4',
    title: 'Position Sizing & Capital Preservation Framework',
    subtitle: 'The mathematical defense engine governing every allocation decision.',
    iconName: 'ShieldCheck',
    context: 'Mathematical position sizing based strictly on volatility (ATR) and defined stop distance.',
    confirmation: 'Portfolio heat calculation check < 4.0% aggregate active risk across all open positions.',
    trigger: 'Automated position calculator formula: Capital Risk (₹) / (Entry - Stop Loss).',
    riskRules: 'Absolute hard drawdown limit: -6.0% triggers mandatory 50% sizing reduction across all strategies.',
    executionSteps: [
      'Calculate account equity and max allowable rupee risk (1.0%).',
      'Measure exact distance from entry trigger to structural stop loss.',
      'Divide max risk by stop distance to determine exact share volume.',
      'Verify total portfolio correlation (max 2 positions in single sector).',
      'Log trade details into Journal system immediately upon order execution.'
    ]
  }
];
