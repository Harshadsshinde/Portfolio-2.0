import { useEffect, useState } from "react";
import { sections } from "../data/content";

export default function SectionIndex() {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section index"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="group flex items-center justify-end gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono text-[10px] tracking-widest transition-all duration-300 ${
                isActive
                  ? "text-[var(--accent)] opacity-100"
                  : "text-[var(--muted)] opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.index} {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[var(--accent)]"
                  : "w-4 bg-[var(--border)] group-hover:w-6 group-hover:bg-[var(--muted)]"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
