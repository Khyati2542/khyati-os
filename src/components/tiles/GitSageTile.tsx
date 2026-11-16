// A repo tree with the agent pointing at the answer.
const tree = [
  { line: 'repo/', dim: false },
  { line: '├─ src/', dim: false },
  { line: '│  ├─ agent.py', dim: true },
  { line: '│  ├─ indexer.py', hit: true },
  { line: '│  └─ tools/', dim: true },
  { line: '├─ tests/', dim: true },
  { line: '└─ README.md', dim: true },
];

export default function GitSageTile() {
  return (
    <div className="font-mono text-xs leading-6">
      <ul>
        {tree.map((t) => (
          <li key={t.line} className="flex items-center gap-2 whitespace-pre">
            <span className={t.hit ? 'border-2 border-ink bg-lime px-1 font-bold' : t.dim ? 'opacity-60' : 'font-bold'}>
              {t.line}
            </span>
            {t.hit && <span className="font-bold">◀</span>}
          </li>
        ))}
      </ul>
      <p className="mt-3 inline-block border-2 border-ink bg-ink px-2 py-1 text-[11px] text-paper">
        <span className="text-lime">sage›</span> chunking happens in indexer.py
      </p>
    </div>
  );
}
