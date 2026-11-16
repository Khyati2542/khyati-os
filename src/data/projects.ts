// Bento tiles in "Things I Shipped".
// DRAFT: the router copy comes from the plan; the other descriptions are
// first drafts. Correct them from your résumé and add `href` links.
//
// To add a project: append an object. A tile with a matching `id` in
// src/components/tiles/index.ts gets a custom visual; others show text only.

import type { Tone } from '@/lib/tones';

export type Project = {
  id: string;
  label: string; // "01 / PRODUCTION"
  title: string; // "The LLM Router that learns."
  desc: string;
  tags: string[];
  tone: Tone;
  size: 'wide' | 'normal';
  href?: string; // case study or GitHub link
};

export const projects: Project[] = [
  {
    id: 'router',
    label: '01 / PRODUCTION',
    title: 'The LLM Router that learns.',
    desc: 'ε-greedy, Thompson Sampling, UCB & round-robin pick the best model per task and tenant.',
    tags: ['RL', 'Bandits', 'LLMs'],
    tone: 'lime',
    size: 'wide',
  },
  {
    id: 'pii',
    label: '02 / PRIVACY',
    title: 'PII never leaves the building.',
    desc: 'A redaction layer that finds names, emails, phone numbers and IDs and masks them before a prompt reaches any model.',
    tags: ['NER', 'Guardrails'],
    tone: 'violet',
    size: 'normal',
  },
  {
    id: 'gitsage',
    label: '03 / DEV TOOLS',
    title: 'GitSage reads the repo so you don’t have to.',
    desc: 'An agent that walks a codebase and answers questions about it in plain English.',
    tags: ['Agents', 'RAG', 'Git'],
    tone: 'paper',
    size: 'normal',
    // href: 'https://github.com/Khyati2542/gitsage', // TODO
  },
  {
    id: 'mcp',
    label: '04 / TOOLING',
    title: 'MCP pipes from agent to everything.',
    desc: 'Model Context Protocol servers that give agents safe, typed access to databases, files and internal APIs.',
    tags: ['MCP', 'Tool use'],
    tone: 'orange',
    size: 'wide',
  },
  {
    id: 'estimator',
    label: '05 / PLANNING',
    title: 'Brief in, estimate out.',
    desc: 'Turns a project brief into a task breakdown and an effort estimate you can argue with.',
    tags: ['LLMs', 'Structured output'],
    tone: 'dark',
    size: 'normal',
  },
  {
    id: 'linkedin',
    label: '06 / AUTOMATION',
    title: 'LinkedIn on autopilot.',
    desc: 'From idea to draft to scheduled post, with a human approval step in the loop.',
    tags: ['Automation', 'Agents'],
    tone: 'lime',
    size: 'normal',
    // href: 'https://github.com/Khyati2542/…', // TODO
  },
  {
    id: 'observability',
    label: '07 / OPS',
    title: 'Every token, traced.',
    desc: 'Observability for LLM apps: latency, cost and quality per request, so regressions show up before users notice.',
    tags: ['Tracing', 'Metrics'],
    tone: 'dark',
    size: 'wide',
  },
];
