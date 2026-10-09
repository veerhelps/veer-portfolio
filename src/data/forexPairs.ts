export interface EducationalForexPair {
  id: string;
  symbol: string;
  name: string;
  category: 'MAJOR' | 'CROSS' | 'METAL';
  marketRole: string;
  sessionRelevance: string;
  educationalOverview: string;
  keyDrivers: string[];
}

export const educationalPairs: EducationalForexPair[] = [
  {
    id: 'pair-eurusd',
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    category: 'MAJOR',
    marketRole: 'Core Global Sovereign Currency Pair',
    sessionRelevance: 'London & New York Sessions (Peak during 12:00 — 16:00 UTC Overlap)',
    educationalOverview: 'Accounts for over 28% of total daily global Forex volume. The benchmark barometer for transatlantic sovereign interest rate differentials and macro risk appetite.',
    keyDrivers: ['ECB & Federal Reserve rate policy', 'Eurozone & US GDP growth cycles', 'Global risk sentiment'],
  },
  {
    id: 'pair-gbpusd',
    symbol: 'GBP/USD',
    name: 'British Pound / US Dollar',
    category: 'MAJOR',
    marketRole: 'Sterling Liquidity & European Directional Corridor',
    sessionRelevance: 'London Open (07:00 UTC) through New York Overlap',
    educationalOverview: 'Known historically as "Cable". Demonstrates pronounced London session volatility, sharp liquidity sweeps, and sensitivity to Bank of England policy mandates.',
    keyDrivers: ['Bank of England monetary policy', 'UK inflation & labor data', 'US Dollar strength index'],
  },
  {
    id: 'pair-usdjpy',
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    category: 'MAJOR',
    marketRole: 'Pacific Sovereign Anchor & Global Risk Thermometer',
    sessionRelevance: 'Tokyo / Asian Session Open & New York US Treasury Trading Hours',
    educationalOverview: 'Deeply tied to US 10-Year Treasury yields and Bank of Japan yield-curve management. Highly responsive to shifts in global risk sentiment.',
    keyDrivers: ['US 10-Year Treasury bond yields', 'Bank of Japan monetary stance', 'Global carry-trade flows'],
  },
  {
    id: 'pair-xauusd',
    symbol: 'XAU/USD',
    name: 'Gold / US Dollar',
    category: 'METAL',
    marketRole: 'Global Sovereign Store of Value & Safe Haven Asset',
    sessionRelevance: 'Active across all three sessions; institutional volume surges at London & NY opens',
    educationalOverview: 'Spot Gold traded against the US Dollar. Represents sovereign reserve diversification, real yield hedges, and geopolitical safe-haven flow.',
    keyDrivers: ['US real interest yields', 'Global central bank reserves', 'Inflation & geopolitical hedge demand'],
  },
  {
    id: 'pair-audusd',
    symbol: 'AUD/USD',
    name: 'Australian Dollar / US Dollar',
    category: 'MAJOR',
    marketRole: 'Commodity Benchmark & Asia-Pacific Growth Indicator',
    sessionRelevance: 'Sydney/Tokyo Asian Session & US Session overlap',
    educationalOverview: 'Reflects raw material exports (iron ore, coal) and broad Chinese manufacturing demand. The primary commodity currency indicator among majors.',
    keyDrivers: ['Reserve Bank of Australia rate policy', 'Commodity prices & Chinese demand', 'Risk-on vs risk-off sentiment'],
  },
  {
    id: 'pair-usdcad',
    symbol: 'USD/CAD',
    name: 'US Dollar / Canadian Dollar',
    category: 'MAJOR',
    marketRole: 'North American Energy & Cross-Border Trade Axis',
    sessionRelevance: 'New York Session (12:00 — 21:00 UTC)',
    educationalOverview: 'Reflects heavy cross-border commerce between the US and Canada, with strong inverse correlation to crude oil prices and Bank of Canada policy.',
    keyDrivers: ['WTI Crude Oil market prices', 'Bank of Canada policy differentials', 'US-Canada bilateral trade flows'],
  },
  {
    id: 'pair-usdchf',
    symbol: 'USD/CHF',
    name: 'US Dollar / Swiss Franc',
    category: 'MAJOR',
    marketRole: 'European Defensive Reserve Currency',
    sessionRelevance: 'London Session (07:00 — 16:00 UTC)',
    educationalOverview: 'The Swiss Franc functions as a premier European safe haven. Exhibits close mirror correlation to EUR/USD and extreme sensitivity to Swiss National Bank intervention.',
    keyDrivers: ['Swiss National Bank monetary reserves', 'European geopolitical risk appetite', 'Swiss banking capital stability'],
  },
  {
    id: 'pair-gbpjpy',
    symbol: 'GBP/JPY',
    name: 'British Pound / Japanese Yen',
    category: 'CROSS',
    marketRole: 'High-Beta Cross Volatility Corridor',
    sessionRelevance: 'London Open & London/Tokyo overlap',
    educationalOverview: 'A cross currency pair (calculated without direct USD exchange rate). Known for broad pip ranges, strong momentum displacement, and clean technical structure sweeps.',
    keyDrivers: ['UK-Japan yield spreads', 'Global equity market risk trends', 'London liquidity injections'],
  },
];
