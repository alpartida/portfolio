/* ============================================================
   Site-wide facts. This is the one file to edit for the things
   that change: what you're available for, where to reach you,
   what you're doing now.
   ============================================================ */

export const SITE = {
  name: 'Alex Partida',
  title: 'Alex Partida — Freelance Web Developer & Designer, Los Angeles',
  description:
    'Freelance web developer and designer in Los Angeles. I build fast, accessible websites for small businesses and independent practitioners — and hand them over so you can run them yourself.',
  url: 'https://alexpartida.com',

  // Deliberately no public email address — enquiries come through the form at
  // /contact, which keeps the inbox clean and arrives pre-triaged with budget
  // and timeline. If you ever want one public, add it here and it will appear
  // in the footer, on the contact page and in the structured data.
  email: null as string | null,

  location: 'Los Angeles, CA',

  // Shown in the footer. Written as a full sentence.
  availability:
    'Taking on a small number of freelance projects at a time, for small businesses and independent practitioners.',

  linkedin: 'https://www.linkedin.com/in/alexandra-partida/',
  github: 'https://github.com/alpartida',
  twitter: 'https://twitter.com/iamalexpartida',
};

export const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
