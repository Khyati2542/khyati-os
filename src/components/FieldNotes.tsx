import { achievements, articles, type Article } from '@/data/articles';
import SectionHeading from './SectionHeading';

const tilts = ['-rotate-[1.5deg]', 'rotate-[1deg]', '-rotate-[0.75deg]'];
const shadows = [
  'shadow-[8px_8px_0_var(--color-lime)]',
  'shadow-[8px_8px_0_var(--color-violet)]',
  'shadow-[8px_8px_0_var(--color-orange)]',
];

function CardBody({ a }: { a: Article }) {
  const meta = [a.date, a.minutes && `${a.minutes} min read`].filter(Boolean).join(' · ');
  return (
    <>
      <div className="flex items-center justify-between gap-3 font-mono text-[11px] font-bold tracking-wider uppercase">
        <span className="border-2 border-ink px-2 py-0.5">{a.platform}</span>
        {meta && <span>{meta}</span>}
      </div>
      <h3 className="font-display text-[clamp(22px,2vw,28px)] leading-tight font-bold tracking-tight">{a.title}</h3>
      <span className="mt-auto font-mono text-xs font-extrabold tracking-wider uppercase">
        {a.url ? 'Read →' : 'Drafting…'}
      </span>
      {!a.url && (
        <span
          aria-hidden
          className="absolute -top-3 right-5 rotate-6 border-2 border-ink bg-orange px-2 py-0.5 font-mono text-[10px] font-extrabold uppercase"
        >
          Soon
        </span>
      )}
    </>
  );
}

export default function FieldNotes() {
  return (
    <section id="notes" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading index="05" kicker="Writing" solid="Field" outline="Notes" outlineClass="text-lime" />

      <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {articles.map((a, i) => {
          const card = `relative flex h-full min-h-56 flex-col gap-6 border-2 border-ink bg-paper p-6 text-ink transition-[rotate,translate] duration-200 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none ${
            tilts[i % tilts.length]
          } ${shadows[i % shadows.length]}`;
          return (
            <li key={a.title}>
              {a.url ? (
                <a href={a.url} target="_blank" rel="noopener" className={card}>
                  <CardBody a={a} />
                </a>
              ) : (
                <div className={card}>
                  <CardBody a={a} />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {achievements.length > 0 && (
        <div className="mt-20">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
            <span className="text-lime">✦</span> Achievements unlocked
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {achievements.map((t) => (
              <li
                key={t}
                className="rounded-full border-2 border-line-strong bg-surface px-4 py-2 font-mono text-xs font-bold tracking-wide uppercase"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
