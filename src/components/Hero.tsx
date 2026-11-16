import { profile } from '@/data/profile';
import { toneBlock } from '@/lib/tones';

// Where each sticker sits on large screens, its tilt and float offset.
// On smaller screens the stickers wrap in a row under the name instead.
const stickerSlots = [
  { pos: 'lg:absolute lg:right-[3%] lg:top-[4%]', tilt: 'rotate-[5deg]', delay: '[animation-delay:0s]' },
  { pos: 'lg:absolute lg:right-[17%] lg:top-[22%]', tilt: 'rotate-[-4deg]', delay: '[animation-delay:-1.2s]' },
  { pos: 'lg:absolute lg:left-[2%] lg:-bottom-[2%]', tilt: 'rotate-[-3deg]', delay: '[animation-delay:-2.6s]' },
  { pos: 'lg:absolute lg:right-[19%] lg:-bottom-[4%]', tilt: 'rotate-[3deg]', delay: '[animation-delay:-3.8s]' },
];

function OpenToWorkBadge() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-[38%] right-[1%] hidden size-[clamp(120px,12vw,180px)] sm:block"
    >
      <div className="relative size-full rounded-full border-2 border-ink bg-violet text-ink shadow-hard">
        <svg viewBox="0 0 200 200" className="size-full motion-safe:animate-spin-slow">
          <defs>
            <path id="badge-ring" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
          </defs>
          <text className="font-mono" fontSize="19" fontWeight="800" fill="currentColor">
            <textPath href="#badge-ring" textLength="448" lengthAdjust="spacing">
              OPEN TO WORK ✦ OPEN TO WORK ✦
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto flex size-[38%] items-center justify-center rounded-full border-2 border-ink bg-lime font-display text-[clamp(20px,2vw,30px)] font-bold">
          ↓
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [first, last] = profile.name.split(' ');

  return (
    <section id="top" className="mx-auto max-w-[1400px] px-4 pt-8 pb-20 sm:px-8 lg:pt-14 lg:pb-28">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-bold tracking-[0.2em] text-muted uppercase sm:text-xs">
        <p>{'//'} {profile.role} — portfolio v2.0</p>
        <p className="flex items-center gap-2">
          <span aria-hidden className="size-2 bg-lime motion-safe:animate-blink" />
          System online
        </p>
      </div>

      <div className="relative mt-6 lg:mt-8 lg:pb-10">
        <h1 className="font-display text-[clamp(70px,24vw,260px)] leading-[0.8] font-bold tracking-[-0.045em] uppercase">
          <span className="block">
            {first}
            <span aria-hidden className="text-lime motion-safe:animate-blink">
              _
            </span>
          </span>
          <span className="text-outline block text-paper">{last}</span>
        </h1>

        {profile.openToWork && <OpenToWorkBadge />}

        <ul className="mt-8 flex flex-wrap gap-3 lg:contents">
          {profile.stickers.map((s, i) => {
            const slot = stickerSlots[i % stickerSlots.length];
            return (
              <li key={s.text} className={`motion-safe:animate-float ${slot.delay} ${slot.pos}`}>
                <span
                  className={`inline-block border-2 border-ink px-3 py-2 font-mono text-[11px] font-extrabold tracking-wider whitespace-nowrap uppercase shadow-hard sm:text-xs ${toneBlock[s.tone]} ${slot.tilt}`}
                >
                  {s.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <div>
          <p className="max-w-3xl font-display text-[clamp(26px,3.2vw,44px)] leading-[1.08] font-medium tracking-tight">
            {profile.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shipped"
              className="border-2 border-ink bg-paper px-5 py-3 font-mono text-sm font-extrabold tracking-wider text-ink uppercase shadow-[6px_6px_0_var(--color-lime)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-lime)]"
            >
              See what I shipped ↓
            </a>
            <a
              href="#agent"
              className="border-2 border-paper px-5 py-3 font-mono text-sm font-extrabold tracking-wider uppercase transition-colors hover:border-lime hover:text-lime"
            >
              Ask my agent &gt;_
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3">
          {profile.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end border-2 border-line-strong bg-surface p-4">
              <dt className="mt-3 font-mono text-[10px] leading-snug font-bold tracking-wider text-muted uppercase sm:text-[11px]">
                {s.label}
              </dt>
              <dd className="font-display text-[clamp(40px,5vw,72px)] leading-none font-bold tracking-tight text-lime">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
