// Public URL of the site, used for SEO, sitemap and share images.
// On Vercel this is filled in automatically (your *.vercel.app URL, or your
// custom domain once you add one). Locally it falls back to localhost.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const navLinks = [
  { href: '#agent', label: 'Agent' },
  { href: '#shipped', label: 'Shipped' },
  { href: '#stack', label: 'Stack' },
  { href: '#route', label: 'Route' },
  { href: '#notes', label: 'Notes' },
  { href: '#contact', label: 'Contact' },
];
