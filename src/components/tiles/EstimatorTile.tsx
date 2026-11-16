// A brief broken down into tasks with an estimate.
const rows = [
  { task: 'Auth + roles', est: '6h' },
  { task: 'Data pipeline', est: '14h' },
  { task: 'Eval harness', est: '8h' },
];

export default function EstimatorTile() {
  return (
    <div className="font-mono text-xs">
      <p className="mb-2 flex items-center gap-2 text-muted">
        <span className="border-2 border-line-strong px-1.5 py-0.5 text-paper">brief.md</span>
        <span>→ breakdown</span>
      </p>
      <table className="w-full border-2 border-line-strong">
        <thead>
          <tr className="border-b-2 border-line-strong text-left text-[10px] tracking-wider text-muted uppercase">
            <th className="px-3 py-1.5 font-bold">Task</th>
            <th className="px-3 py-1.5 text-right font-bold">Est</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.task} className="border-b border-line">
              <td className="px-3 py-1.5">{r.task}</td>
              <td className="px-3 py-1.5 text-right">{r.est}</td>
            </tr>
          ))}
          <tr className="bg-lime font-extrabold text-ink">
            <td className="px-3 py-1.5 uppercase">Total</td>
            <td className="px-3 py-1.5 text-right">28h ±15%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
