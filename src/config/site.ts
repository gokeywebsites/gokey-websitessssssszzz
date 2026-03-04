export const SITE = {
  name: 'Gokey Websites',
  title: 'Gokey Websites | Premium Design. Accessible Pricing.',
  description: 'Modern, responsive websites for small businesses. High-end design without the agency price tag.',
  url: 'https://gokeywebsites.com',
  twitterHandle: '@gokeywebsites',
  socials: {
    twitter: 'https://twitter.com/gokeywebsites',
    instagram: 'https://instagram.com/gokeywebsites',
    linkedin: 'https://linkedin.com/company/gokeywebsites',
  },
  image: {
    src: '/favicon.svg',
    alt: 'Gokey Websites Logo',
  },
} as const;

export type SiteConfig = typeof SITE;
