// A prompt with personal data blacked out before it reaches the model.
function Bar({ ch }: { ch: number }) {
  return <span className="mx-0.5 inline-block h-[1.05em] translate-y-[0.18em] bg-ink" style={{ width: `${ch}ch` }} />;
}

export default function PiiTile() {
  return (
    <div className="-rotate-2 border-2 border-ink bg-paper p-4 font-mono text-xs leading-7 text-ink shadow-hard-ink">
      <div className="mb-2 flex items-center justify-between border-b-2 border-ink pb-2 text-[10px] font-extrabold uppercase">
        <span>prompt.txt</span>
        <span className="bg-ink px-1.5 py-0.5 text-violet">3 redacted</span>
      </div>
      <p>
        Hi, I&apos;m <Bar ch={11} /> and you can reach me at <Bar ch={14} /> or <Bar ch={10} />. Please summarise my
        last invoice.
      </p>
    </div>
  );
}
