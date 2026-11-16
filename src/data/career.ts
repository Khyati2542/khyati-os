// "The Route So Far": career metro line, oldest first.
// TODO: replace stops 1–4 with your real history from your résumé.
// Keep the last stop as `next: true`; it renders as the dashed "next stop".

export type Stop = {
  when: string; // "2022", "2023 – 24", "NOW"
  title: string; // role
  org: string; // company / university
  note: string; // one line on what you did there
  tone: 'lime' | 'violet' | 'orange' | 'paper';
  next?: boolean;
};

export const career: Stop[] = [
  {
    when: '20XX',
    title: 'Where it started',
    org: 'Your university',
    note: 'TODO: your degree and the project that got you into ML.',
    tone: 'lime',
  },
  {
    when: '20XX',
    title: 'First role',
    org: 'Company',
    note: 'TODO: your first internship or job, in one line.',
    tone: 'violet',
  },
  {
    when: '20XX',
    title: 'Leveling up',
    org: 'Company',
    note: 'TODO: the role where you started shipping ML to production.',
    tone: 'orange',
  },
  {
    when: 'NOW',
    title: 'AI/ML Engineer',
    org: 'Company', // TODO
    note: 'Building LLM routing, PII guardrails, MCP tooling and the automation around them.',
    tone: 'paper',
  },
  {
    when: 'NEXT',
    title: 'Next stop: your team?',
    org: 'Open to work',
    note: 'AI/ML engineering roles: agents, LLM infrastructure, automation.',
    tone: 'lime',
    next: true,
  },
];
