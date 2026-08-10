import { MarketSession } from '../types';

export const marketSessions: MarketSession[] = [
  {
    id: 'syd',
    name: 'SYDNEY',
    location: 'Australia / Pacific',
    openTimeUtc: '21:00 UTC',
    closeTimeUtc: '06:00 UTC',
    isActive: false,
    isOverlap: false,
    volumeSharePct: 4.5
  },
  {
    id: 'tok',
    name: 'TOKYO',
    location: 'Asian Financial Hub',
    openTimeUtc: '00:00 UTC',
    closeTimeUtc: '09:00 UTC',
    isActive: false,
    isOverlap: false,
    volumeSharePct: 18.2
  },
  {
    id: 'ldn',
    name: 'LONDON',
    location: 'European Institutional Hub',
    openTimeUtc: '07:00 UTC',
    closeTimeUtc: '16:00 UTC',
    isActive: true,
    isOverlap: true,
    volumeSharePct: 43.1
  },
  {
    id: 'ny',
    name: 'NEW YORK',
    location: 'American Liquidity Hub',
    openTimeUtc: '12:00 UTC',
    closeTimeUtc: '21:00 UTC',
    isActive: true,
    isOverlap: true,
    volumeSharePct: 34.2
  }
];
