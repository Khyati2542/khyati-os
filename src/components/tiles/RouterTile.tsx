// Bandit strategies competing for a request; the winner gets the call.
const arms = [
  { name: 'ε-greedy', w: 'w-[58%]' },
  { name: 'Thompson', w: 'w-[90%]', picked: true },
  { name: 'UCB', w: 'w-[72%]' },
  { name: 'Round-robin', w: 'w-[38%]' },
];

export default function RouterTile() {
  return (
    <div className="font-mono text-[11px] font-bold uppercase">
      <p className="mb-3 flex flex-wrap gap-x-3 gap-y-1 opacity-70">
        <span>req: &quot;summarise contract.pdf&quot;</span>
        <span>tenant: acme</span>
      </p>
      <ul className="flex flex-col gap-2">
        {arms.map((a) => (
          <li key={a.name} className="flex items-center gap-3">
            <span className="w-24 shrink-0 sm:w-28">{a.name}</span>
            <span className="relative h-5 flex-1 border-2 border-ink">
              <span
                className={`absolute inset-y-0 left-0 ${a.w} ${
                  a.picked ? 'bg-ink' : 'bg-[repeating-linear-gradient(-45deg,var(--color-ink)_0_5px,transparent_5px_9px)]'
                }`}
              />
            </span>
            <span className={`w-16 shrink-0 text-center ${a.picked ? 'bg-ink py-0.5 text-lime' : 'opacity-0'}`}>
              picked
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
