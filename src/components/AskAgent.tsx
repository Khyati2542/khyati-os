'use client';

import { useEffect, useRef, useState } from 'react';
import { prompts } from '@/data/prompts';
import SectionHeading from './SectionHeading';

const CHARS_PER_TICK = 2;
const TICK_MS = 20;

export default function AskAgent() {
  const [q, setQ] = useState(0); // selected prompt
  const [n, setN] = useState(0); // characters typed so far
  const [started, setStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const full = prompts[q].answer;
  const done = n >= full.length;

  // Start typing the first answer once the terminal scrolls into view.
  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Type CHARS_PER_TICK characters every TICK_MS. Reduced motion → show it all at once.
  useEffect(() => {
    if (!started || n >= full.length) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(
      () => setN(reduce ? full.length : Math.min(full.length, n + CHARS_PER_TICK)),
      reduce ? 0 : TICK_MS,
    );
    return () => clearTimeout(t);
  }, [started, n, full.length]);

  const ask = (i: number) => {
    setQ(i);
    setN(0);
    setStarted(true);
  };

  return (
    <section id="agent" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:py-28">
      <SectionHeading index="01" kicker="Ask" solid="Interrogate" outline="my agent" outlineClass="text-lime" />

      <div ref={terminalRef} className="mt-12 border-2 border-paper bg-surface shadow-hard-lg">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b-2 border-paper px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-3 border border-ink bg-lime" />
            <span className="size-3 border border-ink bg-violet" />
            <span className="size-3 border border-ink bg-orange" />
          </span>
          <p className="font-mono text-xs text-muted">khyati-agent — zsh</p>
          <p className="ml-auto hidden font-mono text-[11px] text-muted sm:block">
            model: khyati-1 · scripted (for now)
          </p>
        </div>

        <div className="grid md:grid-cols-[minmax(240px,320px)_1fr]">
          {/* questions */}
          <div className="border-b-2 border-line p-4 md:border-r-2 md:border-b-0 md:p-6">
            <p className="mb-3 font-mono text-[11px] font-bold tracking-[0.2em] text-muted uppercase">
              Pick a question
            </p>
            <ul className="flex flex-col gap-2">
              {prompts.map((p, i) => {
                const active = i === q;
                return (
                  <li key={p.cmd}>
                    <button
                      type="button"
                      onClick={() => ask(i)}
                      aria-pressed={active}
                      className={`w-full border-2 px-3 py-2.5 text-left font-mono text-sm font-bold transition-colors ${
                        active
                          ? 'border-lime bg-lime text-ink shadow-[4px_4px_0_var(--color-paper)]'
                          : 'border-line-strong hover:border-lime hover:text-lime'
                      }`}
                    >
                      <span className={active ? '' : 'text-lime'}>&gt;</span> {p.cmd}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* answer */}
          <div className="p-4 font-mono text-sm leading-relaxed md:p-6 md:text-[15px]">
            <p className="text-muted">
              <span className="text-lime">khyati@os</span>:<span className="text-violet">~</span>$ ask &quot;
              {prompts[q].question}&quot;
            </p>

            {/* All answers are stacked invisibly in one grid cell so the box is
                always as tall as the longest answer and never jumps. */}
            <div className="mt-4 grid">
              {prompts.map((p) => (
                <p key={p.cmd} aria-hidden className="invisible col-start-1 row-start-1">
                  {p.answer}▍
                </p>
              ))}
              <p aria-hidden className="col-start-1 row-start-1 text-paper">
                {full.slice(0, n)}
                <span
                  className={`ml-0.5 inline-block h-[1.1em] w-[0.6em] translate-y-[0.15em] bg-lime ${
                    done ? 'motion-safe:animate-blink' : ''
                  }`}
                />
              </p>
            </div>
            <p className="sr-only" aria-live="polite">
              {full}
            </p>

            <p className="mt-6 border-t-2 border-dashed border-line pt-4 text-xs text-muted">
              <span className="text-lime">tip:</span> free-form questions unlock when this agent gets a real brain
              (RAG over my résumé + articles).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
