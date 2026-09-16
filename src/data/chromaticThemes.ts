export interface ChromaticSpecimen {
  id: string;
  name: string;
  category: string;
  hex: string;
  rgb: string;
  cmyk: string;
  accentHex: string;
  accentName: string;
  tagline: string;
  marketRegime: string;
  auraGradient: {
    orb1: string;
    orb2: string;
    glow: string;
  };
}

export const chromaticThemes: Record<string, ChromaticSpecimen> = {
  dynamic: {
    id: 'dynamic',
    name: 'Dynamic Scroll',
    category: 'SPECTRAL ADAPTIVE',
    hex: '#050505',
    rgb: '5, 5, 5',
    cmyk: '0, 0, 0, 98',
    accentHex: '#D6B45A',
    accentName: 'Champagne Gold',
    tagline: 'Continuous Chromatic Evolution On Scroll',
    marketRegime: 'ALL SESSIONS',
    auraGradient: {
      orb1: 'rgba(214, 180, 90, 0.15)',
      orb2: 'rgba(30, 193, 203, 0.12)',
      glow: 'rgba(181, 30, 37, 0.1)',
    },
  },
  navy: {
    id: 'navy',
    name: 'Deep Navy & Cyan',
    category: 'SOVEREIGN SURVEILLANCE',
    hex: '#1C1C28',
    rgb: '28, 28, 40',
    cmyk: '30, 30, 0, 84',
    accentHex: '#1EC1CB',
    accentName: 'Electric Cyan',
    tagline: 'Deep Inter-dealer Surveillance & Flow',
    marketRegime: 'LONDON OPEN',
    auraGradient: {
      orb1: 'rgba(28, 28, 40, 0.8)',
      orb2: 'rgba(30, 193, 203, 0.22)',
      glow: 'rgba(99, 217, 232, 0.18)',
    },
  },
  burgundy: {
    id: 'burgundy',
    name: 'Burgundy & Blush',
    category: 'ORDER FLOW DEPTH',
    hex: '#1A0A0F',
    rgb: '26, 10, 15',
    cmyk: '0, 64, 57, 90',
    accentHex: '#F6E6EA',
    accentName: 'Blush Rose',
    tagline: 'Institutional Liquidity Sweeps & Execution',
    marketRegime: 'NY OVERLAP',
    auraGradient: {
      orb1: 'rgba(26, 10, 15, 0.85)',
      orb2: 'rgba(181, 30, 37, 0.28)',
      glow: 'rgba(246, 230, 234, 0.12)',
    },
  },
  opal: {
    id: 'opal',
    name: 'Opal Moonstone Silver',
    category: 'BULLION RESERVE',
    hex: '#D9DDE2',
    rgb: '217, 221, 226',
    cmyk: '5, 2, 0, 11',
    accentHex: '#FAF7F2',
    accentName: 'Liquid Silk',
    tagline: 'Precious Metals & Systematic Capital Growth',
    marketRegime: 'ASIAN ACCUMULATION',
    auraGradient: {
      orb1: 'rgba(217, 221, 226, 0.25)',
      orb2: 'rgba(250, 247, 242, 0.18)',
      glow: 'rgba(214, 180, 90, 0.16)',
    },
  },
  cosmic: {
    id: 'cosmic',
    name: 'Cosmic & Vanilla',
    category: 'ALGORITHMIC NEBULA',
    hex: '#23212C',
    rgb: '35, 33, 44',
    cmyk: '20, 25, 0, 83',
    accentHex: '#F1FEC8',
    accentName: 'Matcha Vanilla',
    tagline: 'High-Probability Statistical Edge',
    marketRegime: 'MACRO ROTATION',
    auraGradient: {
      orb1: 'rgba(35, 33, 44, 0.85)',
      orb2: 'rgba(241, 254, 200, 0.2)',
      glow: 'rgba(160, 140, 220, 0.16)',
    },
  },
  violet: {
    id: 'violet',
    name: 'Violet & Lavender',
    category: 'MENTAL ARCHITECTURE',
    hex: '#36255C',
    rgb: '54, 37, 92',
    cmyk: '41, 60, 0, 64',
    accentHex: '#D2C3F6',
    accentName: 'Ethereal Lavender',
    tagline: 'Psychological Discipline & Twilight Horizons',
    marketRegime: 'TWILIGHT TRANSITION',
    auraGradient: {
      orb1: 'rgba(54, 37, 92, 0.75)',
      orb2: 'rgba(210, 195, 246, 0.25)',
      glow: 'rgba(99, 102, 241, 0.18)',
    },
  },
};
