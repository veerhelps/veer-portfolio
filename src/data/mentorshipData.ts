import { MentorshipPlan } from '../types';

export const mentorshipPlans: MentorshipPlan[] = [
  {
    id: 'mp-1',
    title: 'FOUNDATION FRAMEWORK',
    price: '$499',
    billingPeriod: 'ONE-TIME ACCESS',
    subtitle: 'For emerging Forex traders seeking structural clarity and reality-based market fundamentals.',
    features: [
      'Full VEER Forex Curriculum Access (Modules 01 to 04)',
      'Institutional Market Structure & Liquidity Video Library',
      'Daily Pre-Market Forex Analysis Notes & Pair Focus',
      'Community Discord Access (Member Level)',
      'Standard Position Sizing & Risk Calculator Utilities'
    ]
  },
  {
    id: 'mp-2',
    title: 'INSTITUTIONAL OPERATOR',
    price: '$1,299',
    billingPeriod: 'FULL MENTORSHIP PROGRAM',
    subtitle: 'The flagship VEER Forex Mentorship designed to transform dedicated traders into disciplined operators.',
    isPopular: true,
    features: [
      'Everything in Foundation Framework',
      'Direct Weekly Live Trading & Analysis Sessions with Dharam Veer Singh Kirar',
      'Proprietary VEER Execution Models & Entry Playbooks',
      'Personal Trade Journal Audit & Monthly Performance Review',
      'Private High-Confluence Forex Signals & Session Overlap Alerts',
      '1-on-1 Risk Management & Drawdown Consultation'
    ]
  },
  {
    id: 'mp-3',
    title: 'PRIVATE DESK PASS',
    price: '$2,499',
    billingPeriod: 'ANNUAL INNER CIRCLE',
    subtitle: 'Exclusive inner-circle access for advanced Forex traders and institutional peers.',
    features: [
      'Everything in Institutional Operator',
      'Direct WhatsApp / Telegram Access to Dharam Veer Singh Kirar',
      'Custom 3D Forex Terminal Utilities & Liquidity Indicators',
      'Quarterly In-Person / Virtual Private Research Roundtables',
      'Priority Capital Allocation & Funded Account Preparation'
    ]
  }
];

export const onboardingSteps = [
  {
    stepNumber: '01',
    title: 'SUBMIT REGISTRATION',
    description: 'Select your preferred VEER Forex Mentorship tier and submit your trader profile application.'
  },
  {
    stepNumber: '02',
    title: 'COMPLETE VERIFICATION',
    description: 'Complete the brief trader background survey to align learning goals and risk expectations.'
  },
  {
    stepNumber: '03',
    title: 'RECEIVE TERMINAL ACCESS',
    description: 'Gain immediate access to the VEER Forex Curriculum, Live Radar alerts, and Community Discord.'
  },
  {
    stepNumber: '04',
    title: 'BEGIN FOREX CURRICULUM',
    description: 'Attend weekly live sessions with Dharam Veer Singh Kirar and build your systematic trading process.'
  }
];
