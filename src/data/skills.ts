// "Periodic Table of Me". DRAFT: check this list against your résumé.
// Symbols should be 1–2 letters, first one capitalised, like real elements.

export type SkillCategory = 'lang' | 'ml' | 'llm' | 'ops';

export type Skill = {
  number: number;
  symbol: string;
  name: string;
  category: SkillCategory;
};

export const categories: Record<SkillCategory, { label: string; tone: 'lime' | 'violet' | 'orange' | 'paper' }> = {
  lang: { label: 'Languages', tone: 'lime' },
  ml: { label: 'ML & data', tone: 'violet' },
  llm: { label: 'LLMs & agents', tone: 'orange' },
  ops: { label: 'Ship & operate', tone: 'paper' },
};

export const skills: Skill[] = [
  { number: 1, symbol: 'Py', name: 'Python', category: 'lang' },
  { number: 2, symbol: 'Ts', name: 'TypeScript', category: 'lang' },
  { number: 3, symbol: 'Sq', name: 'SQL', category: 'lang' },
  { number: 4, symbol: 'Sh', name: 'Bash', category: 'lang' },
  { number: 5, symbol: 'Pt', name: 'PyTorch', category: 'ml' },
  { number: 6, symbol: 'Sk', name: 'scikit-learn', category: 'ml' },
  { number: 7, symbol: 'Np', name: 'NumPy', category: 'ml' },
  { number: 8, symbol: 'Pd', name: 'Pandas', category: 'ml' },
  { number: 9, symbol: 'Hf', name: 'Hugging Face', category: 'ml' },
  { number: 10, symbol: 'Rl', name: 'Bandits / RL', category: 'ml' },
  { number: 11, symbol: 'Ll', name: 'LLMs', category: 'llm' },
  { number: 12, symbol: 'Ag', name: 'Agents', category: 'llm' },
  { number: 13, symbol: 'Rg', name: 'RAG', category: 'llm' },
  { number: 14, symbol: 'Mc', name: 'MCP', category: 'llm' },
  { number: 15, symbol: 'Lc', name: 'LangChain', category: 'llm' },
  { number: 16, symbol: 'Lg', name: 'LangGraph', category: 'llm' },
  { number: 17, symbol: 'Pe', name: 'Prompt eng.', category: 'llm' },
  { number: 18, symbol: 'Vd', name: 'Vector DBs', category: 'llm' },
  { number: 19, symbol: 'Fa', name: 'FastAPI', category: 'ops' },
  { number: 20, symbol: 'Dk', name: 'Docker', category: 'ops' },
  { number: 21, symbol: 'Gt', name: 'Git', category: 'ops' },
  { number: 22, symbol: 'Ci', name: 'CI/CD', category: 'ops' },
  { number: 23, symbol: 'Cl', name: 'Cloud', category: 'ops' },
  { number: 24, symbol: 'Ob', name: 'Observability', category: 'ops' },
];
