import { projects, type Project } from '@/data/projects';
import { toneBlock } from '@/lib/tones';
import SectionHeading from './SectionHeading';
import { tileVisuals } from './tiles';

function ProjectTile({ project: p }: { project: Project }) {
  const Visual = tileVisuals[p.id];

  return (
    <li
      className={`flex min-w-0 grow flex-col border-2 border-paper shadow-hard transition-[translate,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-md motion-reduce:transition-none ${
        p.size === 'wide' ? 'basis-[560px]' : 'basis-[340px]'
      } ${toneBlock[p.tone]}`}
    >
      <div className="flex items-center justify-between border-b-2 border-current/25 px-5 py-3 font-mono text-[11px] font-bold tracking-[0.18em] uppercase">
        <span>{p.label}</span>
        <span aria-hidden className="tracking-normal opacity-60">
          ■ ■ ■
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-7 p-5 sm:p-6">
        {Visual && (
          <div aria-hidden>
            <Visual />
          </div>
        )}

        <div className="mt-auto">
          <h3 className="font-display text-[clamp(24px,2.4vw,32px)] leading-[1.05] font-bold tracking-tight">{p.title}</h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed opacity-80">{p.desc}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-current px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase"
              >
                {t}
              </span>
            ))}
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className="ml-auto font-mono text-xs font-extrabold tracking-wider uppercase underline-offset-4 hover:underline"
              >
                View project ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Shipped() {
  return (
    <section id="shipped" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading index="02" kicker="Work" solid="Things I" outline="Shipped" />
      <ul className="mt-14 flex flex-wrap gap-6">
        {projects.map((p) => (
          <ProjectTile key={p.id} project={p} />
        ))}
      </ul>
    </section>
  );
}
