export interface MarketSession {
  id: 'asian' | 'london' | 'newyork';
  name: string;
  shortName: string;
  startHour: number; // 0-24 UTC
  endHour: number; // 0-24 UTC
  timeUtc: string;
  locations: string;
  subtitle: string;
  description: string;
  educationalFocus: string[];
  dnaTags: string[];
  accentColor: string;
  glowRgba: string;
  borderColor: string;
  bgGradient: string;
}

export interface OverlapSession {
  id: 'overlap';
  name: string;
  shortName: string;
  startHour: number;
  endHour: number;
  timeUtc: string;
  locations: string;
  subtitle: string;
  description: string;
  educationalFocus: string[];
  dnaTags: string[];
  accentColor: string;
  glowRgba: string;
  borderColor: string;
}

export const marketSessions: MarketSession[] = [
  {
    id: 'asian',
    name: 'ASIAN SESSION',
    shortName: 'ASIA',
    startHour: 0,
    endHour: 9,
    timeUtc: '00:00 — 09:00 UTC',
    locations: 'Tokyo / Sydney',
    subtitle: 'Regional Opening & Range Formation',
    description:
      'Establishes early regional activity and the opening structure of the global trading day.',
    educationalFocus: [
      'Regional participation',
      'Early-session range formation',
      'Pacific / Asian market context',
    ],
    dnaTags: ['TOKYO', 'SYDNEY', 'REGIONAL'],
    accentColor: '#38BDF8', // Subtle Cyan
    glowRgba: 'rgba(56, 189, 248, 0.25)',
    borderColor: '#38BDF8',
    bgGradient: 'from-cyan-950/40 via-cyan-900/10 to-obsidian-950',
  },
  {
    id: 'london',
    name: 'LONDON SESSION',
    shortName: 'LONDON',
    startHour: 7,
    endHour: 16,
    timeUtc: '07:00 — 16:00 UTC',
    locations: 'London',
    subtitle: 'Primary European Participation',
    description:
      'Introduces one of the largest concentrations of global foreign-exchange participation.',
    educationalFocus: [
      'European participation',
      'Major currency activity',
      'Transition from Asia into Europe',
    ],
    dnaTags: ['EUROPE', 'LONDON', 'GLOBAL'],
    accentColor: '#D6B45A', // Restrained Gold
    glowRgba: 'rgba(214, 180, 90, 0.25)',
    borderColor: '#D6B45A',
    bgGradient: 'from-amber-950/40 via-amber-900/10 to-obsidian-950',
  },
  {
    id: 'newyork',
    name: 'NEW YORK SESSION',
    shortName: 'NEW YORK',
    startHour: 12,
    endHour: 21,
    timeUtc: '12:00 — 21:00 UTC',
    locations: 'New York',
    subtitle: 'North American Macro Transition',
    description:
      'Adds North American participation and creates a major transition in global market activity.',
    educationalFocus: [
      'US market participation',
      'Macro information flow',
      'North American liquidity',
    ],
    dnaTags: ['NORTH AMERICA', 'NEW YORK', 'US MARKET'],
    accentColor: '#F43F5E', // Subtle Crimson/Rose
    glowRgba: 'rgba(244, 63, 94, 0.25)',
    borderColor: '#F43F5E',
    bgGradient: 'from-rose-950/40 via-rose-900/10 to-obsidian-950',
  },
];

// Dynamically derive the overlap window from actual London and New York session parameters
const londonSession = marketSessions.find((s) => s.id === 'london')!;
const newYorkSession = marketSessions.find((s) => s.id === 'newyork')!;

export const derivedOverlapStart = Math.max(londonSession.startHour, newYorkSession.startHour); // 12
export const derivedOverlapEnd = Math.min(londonSession.endHour, newYorkSession.endHour); // 16

export const sessionOverlap: OverlapSession = {
  id: 'overlap',
  name: 'LONDON × NEW YORK OVERLAP',
  shortName: 'OVERLAP',
  startHour: derivedOverlapStart,
  endHour: derivedOverlapEnd,
  timeUtc: `${String(derivedOverlapStart).padStart(2, '0')}:00 — ${String(derivedOverlapEnd).padStart(2, '0')}:00 UTC`,
  locations: 'London & New York',
  subtitle: 'Cross-Region Convergence Window',
  description:
    'The four-hour overlap between London and New York represents a period when both major financial centres are active simultaneously.',
  educationalFocus: [
    'Cross-region participation',
    'Higher market activity',
    'Global session transition',
  ],
  dnaTags: ['LONDON', 'NEW YORK', 'CROSS-REGION'],
  accentColor: '#E5C56C', // Gold-Cyan Blend
  glowRgba: 'rgba(214, 180, 90, 0.35)',
  borderColor: '#E5C56C',
};

// Proportion calculation helpers for 24-hour horizontal axis
export function getTimelineLeftPercent(startHour: number): number {
  return (startHour / 24) * 100;
}

export function getTimelineWidthPercent(startHour: number, endHour: number): number {
  return ((endHour - startHour) / 24) * 100;
}

export const globalDayCycle = [
  {
    step: '01',
    title: 'ASIA OPENS',
    time: '00:00 UTC',
    note: 'Initial Pacific baseline structure',
  },
  {
    step: '02',
    title: 'EUROPE CONNECTS',
    time: '07:00 UTC',
    note: 'London introduces massive European order depth',
  },
  {
    step: '03',
    title: 'NORTH AMERICA JOINS',
    time: '12:00 UTC',
    note: 'Transatlantic market confluence & overlap',
  },
  {
    step: '04',
    title: 'NEXT CYCLE',
    time: '21:00 UTC',
    note: 'Order flow returns to Sydney & Tokyo',
  },
];
