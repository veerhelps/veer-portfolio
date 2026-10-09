export interface MarketSpecimen {
  id: 'xauusd' | 'btcusd' | 'xagusd' | 'ethusd' | 'usd';
  code: string;
  symbol: string;
  name: string;
  fullName: string;
  shortLabel: string;
  category: 'PRECIOUS METAL' | 'DIGITAL ASSET' | 'SOVEREIGN CURRENCY';
  categoryBadge: string;
  tagline: string;
  sovereignRole: string;
  macroDriver: string;
  story: string;
  angle: number;
  color: string;
  stat1: {
    label: string;
    value: string;
    sublabel: string;
  };
  stat2: {
    label: string;
    value: string;
    sublabel: string;
  };
  stat3: {
    label: string;
    value: string;
    sublabel: string;
  };
  theme: {
    accentHex: string;
    glowRgba: string;
    threeColor: string;
    ambientGradient: string;
    badgeBg: string;
    badgeText: string;
  };
}

export const marketSpecimens: MarketSpecimen[] = [
  {
    id: 'xauusd',
    code: 'XAU/USD',
    symbol: 'XAU',
    name: 'GOLD / US DOLLAR',
    fullName: 'SPOT GOLD (XAU/USD)',
    shortLabel: 'Spot Gold',
    category: 'PRECIOUS METAL',
    categoryBadge: 'SOVEREIGN RESERVE',
    tagline: 'Global safe-haven demand meets macroeconomic forces.',
    sovereignRole: 'Global Sovereign Store of Value & Unencumbered Reserve',
    macroDriver: 'US 10Y Real Yields & Central Bank Net Purchases',
    story:
      'The ultimate monetary asset with zero counterparty risk. Transacts in inverse equilibrium to US real interest rates while absorbing global flight-to-quality capital during sovereign liquidity contractions.',
    angle: Math.PI / 4, // 45°: Upper-Right quadrant
    color: '#D6B45A',
    stat1: {
      label: 'CENTRAL BANK RESERVES',
      value: '1,136 TONS',
      sublabel: 'ANNUAL ACCUMULATION',
    },
    stat2: {
      label: 'EXECUTION EDGE',
      value: 'REAL YIELD ARB',
      sublabel: 'TIPS EQUILIBRIUM',
    },
    stat3: {
      label: 'RISK PER TRADE',
      value: '1.0% STRICT',
      sublabel: 'CAPITAL DEFENSE',
    },
    theme: {
      accentHex: '#D6B45A',
      glowRgba: 'rgba(214, 180, 90, 0.35)',
      threeColor: '#D6B45A',
      ambientGradient: 'radial-gradient(circle, rgba(214,180,90,0.22) 0%, rgba(5,5,5,0) 70%)',
      badgeBg: 'rgba(214, 180, 90, 0.15)',
      badgeText: '#D6B45A',
    },
  },
  {
    id: 'btcusd',
    code: 'BTC/USD',
    symbol: 'BTC',
    name: 'BITCOIN / US DOLLAR',
    fullName: 'BITCOIN (BTC/USD)',
    shortLabel: 'Bitcoin',
    category: 'DIGITAL ASSET',
    categoryBadge: 'DIGITAL GOLD',
    tagline: 'Algorithmic scarcity meets global monetary debasement.',
    sovereignRole: 'Algorithmic Sovereign Scarcity Benchmark (21M Absolute Limit)',
    macroDriver: 'Global M2 Liquidity Impulse & Institutional ETF Inflows',
    story:
      'Pure monetary energy with mathematically enforced supply inelasticity. Exhibits a 0.82 correlation to global central bank liquidity injections while remaining completely unseizable and censorship-resistant.',
    angle: (3 * Math.PI) / 4, // 135°: Upper-Left quadrant
    color: '#F59E0B',
    stat1: {
      label: 'M2 BETA',
      value: '0.82 SENSITIVITY',
      sublabel: 'LIQUIDITY RESPONSE',
    },
    stat2: {
      label: 'EXECUTION EDGE',
      value: 'HALVING CYCLE',
      sublabel: 'SUPPLY INELASTICITY',
    },
    stat3: {
      label: 'RISK PER TRADE',
      value: '1.0% STRICT',
      sublabel: 'CAPITAL DEFENSE',
    },
    theme: {
      accentHex: '#F59E0B',
      glowRgba: 'rgba(245, 158, 11, 0.35)',
      threeColor: '#F59E0B',
      ambientGradient: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(5,5,5,0) 70%)',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeText: '#F59E0B',
    },
  },
  {
    id: 'xagusd',
    code: 'XAG/USD',
    symbol: 'XAG',
    name: 'SILVER / US DOLLAR',
    fullName: 'SPOT SILVER (XAG/USD)',
    shortLabel: 'Spot Silver',
    category: 'PRECIOUS METAL',
    categoryBadge: 'INDUSTRIAL BASE',
    tagline: 'Industrial demand meets precious-metal dynamics.',
    sovereignRole: 'Dual Industrial Backbone & High-Beta Monetary Asset',
    macroDriver: 'Global Photovoltaic Solar Demand & Gold/Silver Ratio',
    story:
      'Over 55% of global annual silver output is permanently consumed by photovoltaic solar cells and semiconductor fabrication, producing asymmetric upside volatility during global manufacturing expansions.',
    angle: (5 * Math.PI) / 4, // 225°: Lower-Left quadrant
    color: '#CBD5E1',
    stat1: {
      label: 'HISTORICAL GSR',
      value: '84.3 : 1.0',
      sublabel: 'GOLD/SILVER RATIO',
    },
    stat2: {
      label: 'EXECUTION EDGE',
      value: 'PMI EXPANSION',
      sublabel: 'HIGH VOLATILITY BETA',
    },
    stat3: {
      label: 'RISK PER TRADE',
      value: '1.0% STRICT',
      sublabel: 'CAPITAL DEFENSE',
    },
    theme: {
      accentHex: '#CBD5E1',
      glowRgba: 'rgba(203, 213, 225, 0.3)',
      threeColor: '#CBD5E1',
      ambientGradient: 'radial-gradient(circle, rgba(203,213,225,0.18) 0%, rgba(5,5,5,0) 70%)',
      badgeBg: 'rgba(203, 213, 225, 0.15)',
      badgeText: '#CBD5E1',
    },
  },
  {
    id: 'ethusd',
    code: 'ETH/USD',
    symbol: 'ETH',
    name: 'ETHEREUM / US DOLLAR',
    fullName: 'ETHEREUM (ETH/USD)',
    shortLabel: 'Ethereum',
    category: 'DIGITAL ASSET',
    categoryBadge: 'SETTLEMENT ENGINE',
    tagline: 'Programmable settlement meets decentralized capital velocity.',
    sovereignRole: 'Global Decentralized Settlement Engine & Smart Contract Spine',
    macroDriver: 'Layer-2 Gas Burn, Staking Yield & DeFi Collateral Velocity',
    story:
      'The computational settlement backbone of decentralized finance. Generates programmatic protocol fee revenue and staking yields, functioning as high-velocity digital collateral across modern capital markets.',
    angle: (7 * Math.PI) / 4, // 315°: Lower-Right quadrant
    color: '#00F0FF',
    stat1: {
      label: 'GAS BURNOFF',
      value: 'EIP-1559',
      sublabel: 'ULTRASOUND REVENUE',
    },
    stat2: {
      label: 'EXECUTION EDGE',
      value: 'HIGH-BETA EXPANSION',
      sublabel: 'ETH/BTC PAIR ROTATION',
    },
    stat3: {
      label: 'RISK PER TRADE',
      value: '1.0% STRICT',
      sublabel: 'CAPITAL DEFENSE',
    },
    theme: {
      accentHex: '#00F0FF',
      glowRgba: 'rgba(0, 240, 255, 0.35)',
      threeColor: '#00F0FF',
      ambientGradient: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(5,5,5,0) 70%)',
      badgeBg: 'rgba(0, 240, 255, 0.15)',
      badgeText: '#00F0FF',
    },
  },
  {
    id: 'usd',
    code: 'USD',
    symbol: 'USD',
    name: 'US DOLLAR',
    fullName: 'US DOLLAR (USD)',
    shortLabel: 'Reserve Anchor',
    category: 'SOVEREIGN CURRENCY',
    categoryBadge: 'GLOBAL BENCHMARK',
    tagline: 'Planetary denominator of sovereign debt and energy pricing.',
    sovereignRole: 'Global Reserve Benchmark & Sovereign Liquidity Anchor',
    macroDriver: 'Federal Reserve (FOMC) & Treasury Yield Curve',
    story:
      'Backbone of 88% of all global currency turnover. Operates as the planetary denominator for energy pricing, sovereign debt settlement, and cross-border bank funding.',
    angle: Math.PI / 2, // 90°: Top Center
    color: '#E5C56C',
    stat1: {
      label: 'GLOBAL TURNOVER',
      value: '$7.5 TRILLION',
      sublabel: 'DAILY FX VOLUME',
    },
    stat2: {
      label: 'EXECUTION EDGE',
      value: 'REALITY DRIVEN',
      sublabel: 'ZERO ILLUSION',
    },
    stat3: {
      label: 'RISK PER TRADE',
      value: '1.0% STRICT',
      sublabel: 'CAPITAL DEFENSE',
    },
    theme: {
      accentHex: '#E5C56C',
      glowRgba: 'rgba(229, 197, 108, 0.3)',
      threeColor: '#E5C56C',
      ambientGradient: 'radial-gradient(circle, rgba(229,197,108,0.2) 0%, rgba(5,5,5,0) 70%)',
      badgeBg: 'rgba(229, 197, 108, 0.15)',
      badgeText: '#E5C56C',
    },
  },
];

// Backwards compatibility types
export type CurrencyItem = MarketSpecimen;
export type MarketArtifact = MarketSpecimen;
export const sovereignCurrencies = marketSpecimens;
export const marketArtifacts = marketSpecimens;
