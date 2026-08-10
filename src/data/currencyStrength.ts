import { CurrencyStrengthItem } from '../types';

export const currencyStrengthMatrix: CurrencyStrengthItem[] = [
  {
    code: 'USD',
    name: 'US Dollar',
    strengthScore: 42,
    trend: 'FALLING',
    bias: 'SHORT',
    affectedPairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'XAU/USD']
  },
  {
    code: 'EUR',
    name: 'Euro',
    strengthScore: 84,
    trend: 'RISING',
    bias: 'LONG',
    affectedPairs: ['EUR/USD', 'EUR/GBP', 'EUR/JPY']
  },
  {
    code: 'GBP',
    name: 'British Pound',
    strengthScore: 78,
    trend: 'RISING',
    bias: 'LONG',
    affectedPairs: ['GBP/USD', 'EUR/GBP', 'GBP/JPY']
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    strengthScore: 68,
    trend: 'RISING',
    bias: 'LONG',
    affectedPairs: ['USD/JPY', 'EUR/JPY', 'GBP/JPY']
  },
  {
    code: 'CHF',
    name: 'Swiss Franc',
    strengthScore: 62,
    trend: 'STABLE',
    bias: 'NEUTRAL',
    affectedPairs: ['USD/CHF', 'EUR/CHF']
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
    strengthScore: 54,
    trend: 'STABLE',
    bias: 'NEUTRAL',
    affectedPairs: ['AUD/USD', 'EURAUD']
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
    strengthScore: 50,
    trend: 'STABLE',
    bias: 'NEUTRAL',
    affectedPairs: ['USD/CAD']
  },
  {
    code: 'NZD',
    name: 'New Zealand Dollar',
    strengthScore: 46,
    trend: 'FALLING',
    bias: 'SHORT',
    affectedPairs: ['NZD/USD']
  }
];
