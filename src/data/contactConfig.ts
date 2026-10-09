export interface ContactChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  category: 'INSTAGRAM' | 'TELEGRAM' | 'DISCORD' | 'EMAIL';
  description: string;
  active: boolean;
}

export const contactConfig = {
  heading: 'CONNECT WITH THE OBSERVATORY',
  subheading: 'For educational collaborations, research enquiries, partnerships, or general questions, get in touch through the verified channels below.',
  operator: 'Dharam Veer Singh Kirar',
  deskLocation: 'Global Currency Observatory / Research Desk',
  channels: [
    {
      id: 'instagram',
      name: 'INSTAGRAM',
      handle: '@dharamveer.fx',
      url: 'https://instagram.com/dharamveer.fx',
      category: 'INSTAGRAM',
      description: 'Educational chart breakdowns, session recaps, and market structure insights.',
      active: true,
    },
    {
      id: 'telegram',
      name: 'TELEGRAM RESEARCH',
      handle: 't.me/veerforex',
      url: 'https://t.me/veerforex',
      category: 'TELEGRAM',
      description: 'Daily sovereign macro briefs, London/NY session contexts, and institutional updates.',
      active: true,
    },
    {
      id: 'discord',
      name: 'STUDY COMMUNITY',
      handle: 'discord.gg/veerforex',
      url: 'https://discord.gg/veerforex',
      category: 'DISCORD',
      description: 'Collaborative learner forums, market structure homework review, and Q&A sessions.',
      active: true,
    },
    {
      id: 'email',
      name: 'DIRECT INQUIRY',
      handle: 'contact@veerforex.com',
      url: 'mailto:contact@veerforex.com',
      category: 'EMAIL',
      description: 'Institutional partnerships, educational speaking, and institutional enquiries.',
      active: true,
    },
  ] as ContactChannel[],
};
