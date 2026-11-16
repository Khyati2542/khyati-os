// Idea → draft → approve → schedule, with a human in the loop.
const steps = [
  { step: 'Idea', note: 'bandits for LLM routing', done: true },
  { step: 'Draft', note: 'generated · 212 words', done: true },
  { step: 'Approve', note: 'human in the loop', done: true },
  { step: 'Schedule', note: 'Tue 09:30', done: false },
];

export default function LinkedInTile() {
  return (
    <ol className="flex flex-col gap-2 font-mono text-xs">
      {steps.map((s) => (
        <li key={s.step} className="flex items-center gap-3">
          <span
            className={`flex size-5 shrink-0 items-center justify-center border-2 border-ink text-[11px] font-extrabold ${
              s.done ? 'bg-ink text-lime' : ''
            }`}
          >
            {s.done ? '✓' : ''}
          </span>
          <span className="w-20 shrink-0 font-extrabold uppercase">{s.step}</span>
          <span className="truncate opacity-70">
            {s.note}
            {!s.done && <span className="ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-ink motion-safe:animate-blink" />}
          </span>
        </li>
      ))}
    </ol>
  );
}
