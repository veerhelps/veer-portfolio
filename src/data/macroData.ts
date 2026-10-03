export interface DetailedMacroTopic {
  id: string;
  name: string;
  category: 'CENTRAL_BANK' | 'ECONOMIC_METRIC';
  tag: string;
  whatItIs: string;
  whyItMatters: string;
  currenciesAffected: string;
}

export const macroLayerTopics: DetailedMacroTopic[] = [
  {
    id: 'interest-rates',
    name: 'Interest Rates',
    category: 'CENTRAL_BANK',
    tag: 'SOVEREIGN BENCHMARK',
    whatItIs: 'The benchmark cost of borrowing set by national central banks to control monetary liquidity and balance sheet expansion.',
    whyItMatters: 'Global institutional capital flows toward higher yields; interest rate divergence drives primary long-term Forex trends.',
    currenciesAffected: 'All G8 Currencies (USD, EUR, GBP, JPY, CHF, AUD, CAD, NZD)',
  },
  {
    id: 'inflation',
    name: 'Inflation',
    category: 'ECONOMIC_METRIC',
    tag: 'PURCHASING POWER',
    whatItIs: 'The rate of aggregate price increases eroding sovereign currency purchasing power across goods and services.',
    whyItMatters: 'Forces central banks into aggressive tightening cycles or emergency policy pivots to prevent stagflation spirals.',
    currenciesAffected: 'USD, EUR, GBP, AUD, NZD',
  },
  {
    id: 'employment',
    name: 'Employment',
    category: 'ECONOMIC_METRIC',
    tag: 'LABOR DYNAMICS',
    whatItIs: 'Unemployment rates, wage growth velocity, and aggregate workforce participation measures.',
    whyItMatters: 'A tight labor market fuels domestic consumption and persistent wage-push inflation, sustaining hawkish rate policy.',
    currenciesAffected: 'USD, GBP, CAD, AUD',
  },
  {
    id: 'gdp',
    name: 'GDP (Gross Domestic Product)',
    category: 'ECONOMIC_METRIC',
    tag: 'ECONOMIC OUTPUT',
    whatItIs: 'The total monetary market value of all finished goods and sovereign services produced within a national border.',
    whyItMatters: 'Confirms sovereign macroeconomic expansion versus recessionary contraction, directing multi-month investment cycles.',
    currenciesAffected: 'USD, EUR, GBP, JPY, CAD',
  },
  {
    id: 'cpi',
    name: 'CPI (Consumer Price Index)',
    category: 'ECONOMIC_METRIC',
    tag: 'RETAIL INFLATION',
    whatItIs: 'The primary statistical measure examining the weighted average prices of a consumer basket of consumer goods.',
    whyItMatters: 'The single most volatile monthly inflation print, dictating immediate rate hike or cut probabilities.',
    currenciesAffected: 'EUR/USD, GBP/USD, USD/JPY, Spot Gold (XAU/USD)',
  },
  {
    id: 'nfp',
    name: 'NFP (Non-Farm Payrolls)',
    category: 'ECONOMIC_METRIC',
    tag: 'US PAYROLL MOMENTUM',
    whatItIs: 'Monthly statistical tally of newly added paid US workers excluding farm employees, government officials, and non-profits.',
    whyItMatters: 'Released first Friday of each month; triggers massive algorithmic liquidity sweeps and session volatility spikes.',
    currenciesAffected: 'USD, EUR/USD, GBP/USD, USD/JPY, XAU/USD',
  },
  {
    id: 'fomc',
    name: 'FOMC (Federal Open Market Committee)',
    category: 'CENTRAL_BANK',
    tag: 'US CENTRAL BANK',
    whatItIs: 'The monetary policy-setting body of the Federal Reserve System consisting of 12 voting governors and regional presidents.',
    whyItMatters: 'Sets the benchmark Fed Funds Rate and controls global dollar supply; establishes global macroeconomic risk sentiment.',
    currenciesAffected: 'USD (Direct), Global Financial Markets',
  },
  {
    id: 'ecb',
    name: 'ECB (European Central Bank)',
    category: 'CENTRAL_BANK',
    tag: 'EUROZONE POLICY',
    whatItIs: 'The central institution governing the Euro and executing monetary policy for the 20 member states of the Eurozone.',
    whyItMatters: 'Balances disparate fiscal profiles of northern and southern European sovereign debt yields and EUR balance sheets.',
    currenciesAffected: 'EUR, EUR/USD, EUR/GBP, EUR/JPY',
  },
  {
    id: 'boe',
    name: 'BOE (Bank of England)',
    category: 'CENTRAL_BANK',
    tag: 'STERLING GOVERNANCE',
    whatItIs: 'The central bank of the United Kingdom, responsible for setting Bank Rate and maintaining monetary and financial stability.',
    whyItMatters: 'Manages British Pound volatility against persistent UK services inflation and international merchant capital flows.',
    currenciesAffected: 'GBP, GBP/USD, GBP/JPY, EUR/GBP',
  },
  {
    id: 'boj',
    name: 'BOJ (Bank of Japan)',
    category: 'CENTRAL_BANK',
    tag: 'YEN STABILIZATION',
    whatItIs: 'The central bank of Japan, managing sovereign quantitative easing, negative interest rates, and yield curve controls.',
    whyItMatters: 'The Japanese Yen acts as the primary global carry-trade funding currency and ultimate safe haven during market crises.',
    currenciesAffected: 'JPY, USD/JPY, GBP/JPY, EUR/JPY',
  },
];
