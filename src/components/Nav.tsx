import { profile } from '@/data/profile';
import { navLinks } from '@/lib/site';
import MobileMenu from './MobileMenu';

const pill =
  'rounded-full border-2 border-line-strong px-3 py-1.5 font-mono text-[11px] font-bold tracking-wider uppercase transition-colors hover:border-lime hover:text-lime';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-ink/90 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-8"
      >
        <a href="#top" className="font-mono text-lg font-extrabold tracking-tight">
          KHYATI<span className="text-lime">.OS</span>
        </a>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={pill}>
                {l.label}
              </a>
            </li>
          ))}
          {profile.resume && (
            <li>
              <a href={profile.resume} target="_blank" rel="noopener" className={pill}>
                CV ↓
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="border-2 border-paper bg-lime px-4 py-2 font-mono text-xs font-extrabold tracking-wider text-ink uppercase shadow-[4px_4px_0_var(--color-paper)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-paper)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            HIRE.EXE
          </a>
          <MobileMenu links={navLinks} resume={profile.resume} />
        </div>
      </nav>
    </header>
  );
}
