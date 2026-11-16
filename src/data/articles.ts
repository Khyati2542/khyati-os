// "Field Notes": your articles + achievement pills.
// TODO: replace with your real Medium / LinkedIn posts.
// An article without a `url` shows a "Drafting" sticker instead of a link.

export type Article = {
  title: string;
  platform: 'Medium' | 'LinkedIn' | 'Blog' | 'Dev.to' | 'Substack';
  date?: string; // "Oct 2026"
  minutes?: number;
  url?: string;
};

export const articles: Article[] = [
  {
    title: 'Teaching an LLM router to pick its own model',
    platform: 'Medium',
    minutes: 6,
  },
  {
    title: 'Redact first, prompt later: PII guards for LLM apps',
    platform: 'LinkedIn',
    minutes: 4,
  },
  {
    title: 'Wiring agents to real tools with MCP',
    platform: 'Medium',
    minutes: 5,
  },
];

// TODO: awards, hackathons, talks, certifications…
export const achievements: string[] = [
  '🏆 TODO: award or hackathon',
  '🎤 TODO: talk or meetup',
  '📜 TODO: certification',
  '⭐ TODO: proudest metric',
];
