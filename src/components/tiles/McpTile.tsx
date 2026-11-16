// Agent → MCP server → tools, with data flowing down the pipes.
function Box({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`shrink-0 border-2 border-ink px-2.5 py-1.5 shadow-hard-ink sm:px-3 sm:py-2 ${className}`}>
      {children}
    </span>
  );
}

function Pipe({ className = '' }: { className?: string }) {
  return (
    <span
      className={`h-[3px] min-w-3 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_10px,transparent_10px_16px)] bg-size-[16px_3px] motion-safe:animate-flow ${className}`}
    />
  );
}

export default function McpTile() {
  return (
    <div className="flex items-center font-mono text-[11px] font-extrabold uppercase">
      <Box className="bg-ink text-orange">Agent</Box>
      <Pipe className="flex-1" />
      <Box className="bg-paper text-ink">MCP</Box>
      <Pipe className="w-4 sm:w-8" />
      <ul className="flex flex-col gap-2.5 border-l-[3px] border-ink">
        {['Postgres', 'Files', 'Internal API'].map((t) => (
          <li key={t} className="flex items-center">
            <Pipe className="w-3 sm:w-5" />
            <Box className="bg-orange text-ink">{t}</Box>
          </li>
        ))}
      </ul>
    </div>
  );
}
