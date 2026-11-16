// Everything about you that appears in the ticker, nav, hero and footer.
// Lines marked TODO need your real details before launch.

import type { Tone } from '@/lib/tones';
import { projects } from './projects';
import { skills } from './skills';

const pad = (n: number) => String(n).padStart(2, '0');

export const profile = {
  name: 'Khyati Verma', // shown as KHYATI_ / VERMA in the hero
  role: 'AI/ML Engineer',
  tagline: 'I build AI agents that think, route & act — then automate whatever’s left.',
  intro:
    'LLM routers that learn which model to call. Guards that redact PII before a prompt leaves the building. MCP tools that let agents touch real systems. I like ambiguous problems, measurable results and boring work automated away.',

  email: 'khyativerma942@gmail.com',
  github: 'https://github.com/Khyati2542',
  linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/your-handle' (hidden while empty)
  resume: '/resume.pdf', // TODO: drop your CV at public/resume.pdf

  openToWork: true,

  // Hero stats. TODO: swap for your own numbers (years of experience, users served…)
  stats: [
    { value: pad(projects.length), label: 'Projects shipped' },
    { value: '04', label: 'Bandit strategies in one router' },
    { value: pad(skills.length), label: 'Elements in my stack' },
  ],

  // Scrolling lime band at the very top
  ticker: [
    'Open to AI/ML roles',
    'LLM routing',
    'Agents',
    'RAG',
    'MCP',
    'PII redaction',
    'Automation',
    'Observability',
  ],

  // Floating stickers around the name (desktop) / wrapped row (mobile)
  stickers: [
    { text: 'AI/ML Engineer', tone: 'lime' },
    { text: 'Agents · RAG · MCP', tone: 'violet' },
    { text: 'Ships to prod', tone: 'orange' },
    { text: '★ Automates the boring stuff', tone: 'paper' },
  ] satisfies { text: string; tone: Tone }[],
};
