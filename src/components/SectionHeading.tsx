type Props = {
  index: string; // "02"
  kicker: string; // "Work"
  solid: string; // "Things I"
  outline: string; // "Shipped"
  after?: string; // optional solid words after the outlined part
  outlineClass?: string; // stroke color, e.g. "text-orange"
};

export default function SectionHeading({
  index,
  kicker,
  solid,
  outline,
  after,
  outlineClass = 'text-orange',
}: Props) {
  return (
    <div>
      <div className="flex items-center gap-4 font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
        <p>
          <span className="text-lime">{index}</span> / {kicker}
        </p>
        <span aria-hidden className="h-0.5 flex-1 bg-line" />
      </div>
      <h2 className="mt-5 font-display text-[clamp(44px,8.5vw,128px)] leading-[0.86] font-bold tracking-[-0.035em] uppercase">
        {solid} <span className={`text-outline ${outlineClass}`}>{outline}</span>
        {after && <> {after}</>}
      </h2>
    </div>
  );
}
