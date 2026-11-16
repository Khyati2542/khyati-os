import { profile } from '@/data/profile';

const social =
  'rounded-full border-2 border-ink px-5 py-3 font-mono text-sm font-extrabold tracking-wider uppercase transition-colors hover:bg-ink hover:text-lime';

export default function Contact() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Résumé', href: profile.resume },
  ].filter((l) => l.href);

  return (
    <footer className="on-lime border-t-2 border-ink bg-lime text-ink">
      <section id="contact" className="mx-auto max-w-[1400px] px-4 pt-20 pb-10 sm:px-8 sm:pt-28">
        <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
          06 / Contact <span aria-hidden>— inbox open</span>
        </p>
        <h2 className="mt-6 font-display text-[clamp(52px,11vw,184px)] leading-[0.84] font-bold tracking-[-0.045em] uppercase">
          Let’s automate <span className="text-outline text-ink">something.</span>
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full items-center gap-3 rounded-full border-2 border-ink bg-ink px-6 py-4 font-mono text-sm font-bold break-all text-lime shadow-[6px_6px_0_var(--color-paper)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:text-lg"
          >
            {profile.email} <span aria-hidden>↗</span>
          </a>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener" className={social}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-3 border-t-2 border-ink pt-6 font-mono text-[11px] font-bold tracking-wider uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>KHYATI.OS v2.0 · built with Next.js + Tailwind · hosted on Vercel</p>
          <a href="#top" className="underline-offset-4 hover:underline">
            Back to top ↑
          </a>
        </div>
      </section>
    </footer>
  );
}
