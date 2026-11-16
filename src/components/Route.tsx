import { career } from '@/data/career';
import { toneBg } from '@/lib/tones';
import SectionHeading from './SectionHeading';

const ring = {
  lime: 'ring-lime',
  violet: 'ring-violet',
  orange: 'ring-orange',
  paper: 'ring-paper',
} as const;

// Track geometry: the dot is 32px (size-8), so its centre is at 16px.
// Phone: vertical line down the left. md+: horizontal line across the top.
const track =
  'absolute left-[13px] top-8 h-[calc(100%+0.5rem)] w-1.5 md:left-8 md:top-[13px] md:h-1.5 md:w-[calc(100%-2rem)]';
const solid = 'bg-paper';
const dashed =
  'bg-[repeating-linear-gradient(to_bottom,var(--color-paper)_0_10px,transparent_10px_18px)] md:bg-[repeating-linear-gradient(to_right,var(--color-paper)_0_10px,transparent_10px_18px)]';

export default function Route() {
  return (
    <section id="route" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading index="04" kicker="Career" solid="The" outline="Route" after="so far" />

      <ol className="mt-16 grid gap-10 md:grid-cols-5 md:gap-0">
        {career.map((s, i) => {
          const isLast = i === career.length - 1;
          const leadsToNext = career[i + 1]?.next;
          return (
            <li key={`${s.when}-${s.title}`} className="relative pl-14 md:pr-6 md:pl-0">
              {!isLast && <span aria-hidden className={`${track} ${leadsToNext ? dashed : solid}`} />}

              <span
                aria-hidden
                className={`absolute top-0 left-0 block size-8 rounded-full md:relative ${
                  s.next
                    ? 'border-[3px] border-dashed border-lime bg-ink'
                    : `border-[6px] border-ink ring-[3px] ${ring[s.tone]} ${toneBg[s.tone]}`
                }`}
              />

              <div className="md:mt-6">
                <p className="font-mono text-xs font-extrabold tracking-[0.2em] text-lime uppercase">{s.when}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight font-bold tracking-tight">{s.title}</h3>
                <p className="mt-1 font-mono text-[11px] font-bold tracking-wider text-muted uppercase">{s.org}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{s.note}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
