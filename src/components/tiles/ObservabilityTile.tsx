// A live-looking latency sparkline with one spike caught in orange.
const points = [
  22, 26, 24, 30, 27, 25, 29, 33, 28, 26, 31, 29, 27, 24, 26, 52, 30, 27, 25, 28, 26, 24, 27, 25, 23, 26, 24, 22, 25, 23,
];

export default function ObservabilityTile() {
  const w = 300;
  const h = 60;
  const step = w / (points.length - 1);
  const max = 60;
  const xy = points.map((p, i) => [i * step, h - (p / max) * h] as const);
  const line = xy.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `0,${h} ${line} ${w},${h}`;
  const spike = xy[points.indexOf(Math.max(...points))];

  return (
    <div className="font-mono text-[11px]">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 border-2 border-line-strong px-2 py-0.5 font-bold text-lime uppercase">
          <span className="size-1.5 bg-lime motion-safe:animate-blink" /> live
        </span>
        {['p95 latency', 'cost / req', 'tokens', 'eval score'].map((m) => (
          <span key={m} className="border-2 border-line-strong px-2 py-0.5 text-muted uppercase">
            {m}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-24 w-full overflow-visible sm:h-28">
        <polygon points={area} className="fill-lime/10" />
        <polyline
          points={line}
          fill="none"
          className="stroke-lime"
          strokeWidth="2.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1={spike[0]}
          x2={spike[0]}
          y1={spike[1]}
          y2={h}
          className="stroke-orange"
          strokeWidth="2"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <p className="mt-2 text-muted">
        <span className="font-bold text-orange">▲ spike</span> caught on deploy · rolled back before anyone noticed
      </p>
    </div>
  );
}
