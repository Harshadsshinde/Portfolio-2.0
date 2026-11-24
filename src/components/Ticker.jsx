import Marquee from "./Marquee";

export default function Ticker({ items = [], className = "" }) {
  return (
    <div
      className={`relative z-10 border-y border-[var(--border)] bg-[var(--surface)]/40 py-6 ${className}`}
    >
      <Marquee speed={28}>
        {items.map((item) => (
          <span key={item} className="flex items-center gap-8">
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
