// Color "tones" used by tiles, stickers and stops. Content files pick a tone
// by name; components turn it into Tailwind classes here, in one place.

export type Tone = 'lime' | 'violet' | 'orange' | 'paper' | 'dark';

/** Background + readable text color for a block of this tone. */
export const toneBlock: Record<Tone, string> = {
  lime: 'bg-lime text-ink',
  violet: 'bg-violet text-ink',
  orange: 'bg-orange text-ink',
  paper: 'bg-paper text-ink',
  dark: 'bg-surface text-paper',
};

/** Solid background only (dots, swatches). */
export const toneBg: Record<Tone, string> = {
  lime: 'bg-lime',
  violet: 'bg-violet',
  orange: 'bg-orange',
  paper: 'bg-paper',
  dark: 'bg-surface',
};

/** Hard shadow in this tone. */
export const toneShadow: Record<Tone, string> = {
  lime: 'shadow-[8px_8px_0_var(--color-lime)]',
  violet: 'shadow-[8px_8px_0_var(--color-violet)]',
  orange: 'shadow-[8px_8px_0_var(--color-orange)]',
  paper: 'shadow-[8px_8px_0_var(--color-paper)]',
  dark: 'shadow-[8px_8px_0_var(--color-line-strong)]',
};
