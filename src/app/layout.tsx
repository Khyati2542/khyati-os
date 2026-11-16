import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { profile } from '@/data/profile';
import { siteUrl } from '@/lib/site';
import './globals.css';

// Only the weights the design uses (see "Design tokens" in the plan).
const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-jetbrains-mono',
});
const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.tagline,
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'KHYATI.OS',
    title,
    description: profile.tagline,
    // The share image comes from src/app/opengraph-image.tsx automatically.
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${sans.variable} antialiased`}>
      <body className="min-h-full font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
