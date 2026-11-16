'use client';

import { useEffect, useState } from 'react';

type Props = {
  links: { href: string; label: string }[];
  resume?: string;
};

// Section links for screens narrower than the desktop pill row.
export default function MobileMenu({ links, resume }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const item =
    'block border-2 border-line-strong px-4 py-3 font-mono text-sm font-bold tracking-wider uppercase hover:border-lime hover:text-lime';

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="border-2 border-line-strong px-3 py-2 font-mono text-xs font-extrabold tracking-wider uppercase hover:border-lime hover:text-lime"
      >
        {open ? 'Close ×' : 'Menu ≡'}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-2 border-line bg-ink px-4 py-4 sm:px-8"
      >
        <ul className="grid grid-cols-2 gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} className={item}>
                {l.label}
              </a>
            </li>
          ))}
          {resume && (
            <li>
              <a href={resume} target="_blank" rel="noopener" onClick={close} className={item}>
                CV ↓
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
