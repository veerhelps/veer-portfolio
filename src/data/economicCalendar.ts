import { EconomicEvent } from '../types';

export const economicCalendarEvents: EconomicEvent[] = [
  {
    id: 'e1',
    date: 'TODAY',
    timeUtc: '13:30 UTC',
    currency: 'USD',
    importance: 'HIGH',
    title: 'Non-Farm Payrolls (NFP) Employment Change',
    previous: '142K',
    forecast: '150K',
    actual: '254K'
  },
  {
    id: 'e2',
    date: 'TODAY',
    timeUtc: '13:30 UTC',
    currency: 'USD',
    importance: 'HIGH',
    title: 'Unemployment Rate',
    previous: '4.2%',
    forecast: '4.2%',
    actual: '4.1%'
  },
  {
    id: 'e3',
    date: 'TOMORROW',
    timeUtc: '12:15 UTC',
    currency: 'EUR',
    importance: 'HIGH',
    title: 'ECB Monetary Policy Statement & Interest Rate Decision',
    previous: '3.65%',
    forecast: '3.40%',
    actual: 'PENDING'
  },
  {
    id: 'e4',
    date: 'THIS WEEK',
    timeUtc: '18:00 UTC',
    currency: 'USD',
    importance: 'HIGH',
    title: 'FOMC Meeting Minutes',
    previous: '-',
    forecast: '-',
    actual: 'PENDING'
  }
];
