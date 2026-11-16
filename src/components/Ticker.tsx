import { profile } from '@/data/profile';

export default function Ticker() {
  // Each half holds the list twice so it's wider than any screen,
  // then the two halves slide left by 50% for a seamless loop.
  const items = [...profile.ticker, ...profile.ticker];

  const half = (
    <ul className="flex shrink-0 items-center">
      {items.map((text, i) => (
        <li key={i} className="flex items-center">
          <span className="px-5">{text}</span>
          <span className="text-[0.9em]">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-b-2 border-ink bg-lime text-ink">
      <p className="sr-only">{profile.ticker.join(' · ')}</p>
      <div
        aria-hidden
        className="flex w-max py-2 font-mono text-xs font-extrabold tracking-[0.18em] uppercase motion-safe:animate-marquee sm:text-sm"
      >
        {half}
        {half}
      </div>
    </div>
  );
}
