export type UniverseCategory = 'ALL' | 'METAL' | 'DIGITAL ASSET';

export interface MarketDimension {
  liquidity: string;
  macro: string;
  session: string;
  relationship: string;
}

export interface InstrumentSpecimen {
  id: 'xauusd' | 'xagusd' | 'btcusd' | 'ethusd';
  symbol: 'XAU/USD' | 'XAG/USD' | 'BTC/USD' | 'ETH/USD';
  baseCurrency: string;
  quoteCurrency: string;
  name: string;
  category: 'METAL' | 'DIGITAL ASSET';
  role: string;
  description: string;
  whyItMatters: string;
  primaryContext: string[];
  pairDNA: string[];
  marketContext: MarketDimension;
  visualType: 'radial-metal' | 'linear-metal' | 'digital-scarcity' | 'ether-lattice';
  theme: {
    accentHex: string;
    secondaryHex: string;
    glowRgba: string;
    activeBorder: string;
    activeText: string;
  };
}

/**
 * EXACT 4-INSTRUMENT FINAL DATA SET
 * Strictly includes: XAU/USD, XAG/USD, BTC/USD, ETH/USD
 * Completely removed: USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD
 */
export const universeInstruments: InstrumentSpecimen[] = [
  // 1. XAU/USD — Gold / US Dollar (METAL)
  // Active State: restrained gold accent (#D6B45A)
  {
    id: 'xauusd',
    symbol: 'XAU/USD',
    baseCurrency: 'XAU',
    quoteCurrency: 'USD',
    name: 'Gold / US Dollar',
    category: 'METAL',
    role: 'Sovereign Physical Store of Value & Unencumbered Reserve Benchmark',
    description:
      'The planetary monetary anchor with millennia of unbroken history. Operates outside the sovereign banking system with zero counterparty liability and absolute physical scarcity.',
    whyItMatters:
      'Central banks accumulate gold to hedge against fiat debasement, sovereign debt expansion, and reserve asset freeze risk. Transacts in direct inverse equilibrium to US 10-Year real Treasury yields.',
    primaryContext: [
      'US Real 10-Year Treasury Yield Equilibrium (TIPS)',
      'Central Bank Net Gold Purchases (1,000+ tons/yr)',
      'Sovereign Reserve Dedollarization Flows',
      'Global M2 Money Supply Expansion Velocity',
    ],
    pairDNA: ['PRECIOUS METAL', 'USD-DENOMINATED', 'GLOBAL RESERVE', 'ZERO COUNTERPARTY RISK'],
    marketContext: {
      liquidity: 'Continuous multi-billion dollar OTC London bullion depth combined with CME Comex futures.',
      macro: 'Fundamentally dictated by the opportunity cost of capital (real interest rates) and sovereign balance sheets.',
      session: 'Peak liquidity occurs during London gold fixings (10:30 & 15:00 GMT) and New York morning overlap.',
      relationship: 'The ultimate measuring stick of paper currency depreciation over secular economic cycles.',
    },
    visualType: 'radial-metal',
    theme: {
      accentHex: '#D6B45A', // Restrained gold
      secondaryHex: '#FAF7F2',
      glowRgba: 'rgba(214, 180, 90, 0.25)',
      activeBorder: '#D6B45A',
      activeText: '#D6B45A',
    },
  },

  // 2. XAG/USD — Silver / US Dollar (METAL)
  // Active State: subtle silver/cyan accent (#CBD5E1 / #67E8F9)
  {
    id: 'xagusd',
    symbol: 'XAG/USD',
    baseCurrency: 'XAG',
    quoteCurrency: 'USD',
    name: 'Silver / US Dollar',
    category: 'METAL',
    role: 'Dual Industrial Technology Base & High-Beta Monetary Asset',
    description:
      'Silver occupies a unique dual role: both a historical monetary metal and an indispensable physical catalyst in photovoltaic solar cells, electronics, electric vehicles, and semiconductors.',
    whyItMatters:
      'Because over 55% of annual silver production is consumed by industrial fabrication, silver exhibits explosive upside volatility during manufacturing recoveries while retaining sovereign inflation-hedge properties.',
    primaryContext: [
      'Photovoltaic Solar Demand & Green Energy CAPEX',
      'Gold/Silver Historical Equilibrium Ratio (GSR)',
      'Global Semiconductor & Electronics Manufacturing PMI',
      'Physical Vault Depletion in London and Comex Warehouses',
    ],
    pairDNA: ['PRECIOUS METAL', 'HIGH INDUSTRIAL BETA', 'GREEN TECH CATALYST', 'USD-DENOMINATED'],
    marketContext: {
      liquidity: 'High percentage volatility with rapid directional expansion during commodity supercycles.',
      macro: 'Combines industrial purchasing managers’ index (PMI) data with monetary inflation expectations.',
      session: 'Active across London trading and New York Comex pit hours.',
      relationship: 'Expresses high-beta commodity reflation against the global dollar baseline.',
    },
    visualType: 'linear-metal',
    theme: {
      accentHex: '#CBD5E1', // Subtle silver/cyan accent
      secondaryHex: '#67E8F9',
      glowRgba: 'rgba(203, 213, 225, 0.25)',
      activeBorder: '#67E8F9',
      activeText: '#E2E8F0',
    },
  },

  // 3. BTC/USD — Bitcoin / US Dollar (DIGITAL ASSET)
  // Active State: subtle cyan accent (#00F0FF)
  {
    id: 'btcusd',
    symbol: 'BTC/USD',
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    name: 'Bitcoin / US Dollar',
    category: 'DIGITAL ASSET',
    role: 'Algorithmic Sovereign Scarcity Benchmark (21M Absolute Limit)',
    description:
      'Pure digital monetary energy engineered with mathematically enforced supply inelasticity. Functions as an unseizable, borderless sovereign liquidity sponge that operates on an open-source decentralized ledger.',
    whyItMatters:
      'Exhibits high sensitivity to global M2 money supply expansions and institutional portfolio diversification via spot ETF capital pools. Serves as a 24/7 liquid expression of global monetary debasement risk.',
    primaryContext: [
      'Global M2 Central Bank Liquidity Impulse',
      'Institutional ETF Accumulation Velocity',
      'Quadrennial Halving Supply Inelasticity',
      'Decentralized Hashrate & Network Security Equilibrium',
    ],
    pairDNA: ['DIGITAL ASSET', 'HARD-CAPPED SCARCITY', 'GLOBAL LIQUIDITY SINK', 'USD-QUOTED'],
    marketContext: {
      liquidity: 'Continuous 24/7/365 global order book depth across regulated institutional custodians and exchanges.',
      macro: 'Strong correlation with global central bank balance sheet expansion and liquidity impulse cycles.',
      session: 'Trades continuously worldwide with volume acceleration during US market cash equity hours.',
      relationship: 'Measures algorithmic digital scarcity against discretionary sovereign central bank issuance.',
    },
    visualType: 'digital-scarcity',
    theme: {
      accentHex: '#00F0FF', // Subtle cyan accent (as requested)
      secondaryHex: '#38BDF8',
      glowRgba: 'rgba(0, 240, 255, 0.25)',
      activeBorder: '#00F0FF',
      activeText: '#00F0FF',
    },
  },

  // 4. ETH/USD — Ethereum / US Dollar (DIGITAL ASSET)
  // Active State: subtle violet accent (#A855F7)
  {
    id: 'ethusd',
    symbol: 'ETH/USD',
    baseCurrency: 'ETH',
    quoteCurrency: 'USD',
    name: 'Ethereum / US Dollar',
    category: 'DIGITAL ASSET',
    role: 'Global Decentralized Settlement Engine & Smart Contract Spine',
    description:
      'The computational settlement layer of decentralized finance and tokenized real-world assets. Combines programmatic protocol fee burn (EIP-1559) with native proof-of-stake yield generation.',
    whyItMatters:
      'Acts as the primary collateral asset securing thousands of decentralized applications, layer-2 rollups, and stablecoin payment rails. Reflects the adoption velocity of programmable financial infrastructure.',
    primaryContext: [
      'Layer-2 Network Scaling & Gas Burn Rate (EIP-1559)',
      'Native Staking Yield Differential vs Risk-Free Rates',
      'DeFi Total Value Locked (TVL) & Stablecoin Velocity',
      'Institutional Tokenized Real-World Asset (RWA) Inflows',
    ],
    pairDNA: ['DIGITAL ASSET', 'PROGRAMMABLE SETTLEMENT', 'YIELD GENERATING', 'SMART CONTRACT BASE'],
    marketContext: {
      liquidity: 'Deep institutional futures and spot markets with tight spreads across major global venues.',
      macro: 'Reflects digital economic productivity, gas consumption demand, and decentralized financial turnover.',
      session: 'Operates 24/7 with peak transaction activity aligning with European and North American developer hours.',
      relationship: 'Expresses programmable computational bandwidth value against fiat reserve capital.',
    },
    visualType: 'ether-lattice',
    theme: {
      accentHex: '#A855F7', // Subtle violet accent (as requested)
      secondaryHex: '#C084FC',
      glowRgba: 'rgba(168, 85, 247, 0.25)',
      activeBorder: '#A855F7',
      activeText: '#C084FC',
    },
  },
];
