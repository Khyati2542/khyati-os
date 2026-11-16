// "Interrogate my agent" terminal: questions on the left, typed answers on the right.
// DRAFT: rewrite these in your own voice (or paste the v2 terminal text).

import { projects } from './projects';
import { skills } from './skills';

export type Prompt = {
  cmd: string; // short label on the button
  question: string; // what the terminal shows as the asked question
  answer: string;
};

const topStack = skills
  .slice(0, 16)
  .map((s) => s.name)
  .join(', ');

export const prompts: Prompt[] = [
  {
    cmd: 'whoami',
    question: 'who are you?',
    answer:
      'Khyati Verma, AI/ML engineer. I build agents that think, route and act: LLM routers that learn which model to call, guards that redact PII before a prompt leaves the building, and MCP tools that let agents touch real systems. Whatever is left over, I automate.',
  },
  {
    cmd: 'explain --router',
    question: 'how does your LLM router work?',
    answer:
      'Every model is an arm of a multi-armed bandit. ε-greedy, Thompson Sampling, UCB and round-robin compete per task and per tenant. Feedback from each call flows back in, so the router keeps learning which model is best for which job instead of hard-coding it.',
  },
  {
    cmd: 'ls ./stack',
    question: "what's in your stack?",
    answer: `${topStack} … and more. The full periodic table is just below ↓`,
  },
  {
    cmd: 'why --hire',
    question: 'why should we hire you?',
    answer: `Because I ship. ${projects.length} projects on this page went from idea to working system. I like ambiguous problems, measurable results and pipelines that run while I sleep. The email is at the bottom of the page.`,
  },
];
