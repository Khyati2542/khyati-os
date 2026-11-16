import AskAgent from '@/components/AskAgent';
import Contact from '@/components/Contact';
import FieldNotes from '@/components/FieldNotes';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import PeriodicTable from '@/components/PeriodicTable';
import Route from '@/components/Route';
import Shipped from '@/components/Shipped';
import Ticker from '@/components/Ticker';
import { profile } from '@/data/profile';
import { siteUrl } from '@/lib/site';

// Structured data so search engines know this page is about a person.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-lime px-4 py-2 font-mono text-sm font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Ticker />
      <Nav />
      <main id="main">
        <Hero />
        <AskAgent />
        <Shipped />
        <PeriodicTable />
        <Route />
        <FieldNotes />
      </main>
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
