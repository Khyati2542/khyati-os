import { categories, skills } from '@/data/skills';
import { toneBg, toneBlock } from '@/lib/tones';
import SectionHeading from './SectionHeading';

export default function PeriodicTable() {
  return (
    <section id="stack" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading index="03" kicker="Stack" solid="Periodic table" outline="of me" outlineClass="text-violet" />

      <ul className="mt-14 grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(118px,1fr))] xl:grid-cols-12">
        {skills.map((s) => (
          <li
            key={s.symbol}
            className={`flex aspect-square flex-col justify-between border-2 border-ink p-2.5 transition-[translate,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-hard motion-reduce:transition-none ${
              toneBlock[categories[s.category].tone]
            }`}
          >
            <span className="font-mono text-[11px] font-bold">{s.number}</span>
            <span className="font-display text-[clamp(34px,4vw,52px)] leading-none font-bold tracking-tight">
              {s.symbol}
            </span>
            <span className="truncate font-mono text-[10px] font-bold tracking-wide uppercase">{s.name}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {Object.values(categories).map((c) => (
          <li key={c.label} className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-muted uppercase">
            <span aria-hidden className={`size-4 border-2 border-paper ${toneBg[c.tone]}`} />
            {c.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
