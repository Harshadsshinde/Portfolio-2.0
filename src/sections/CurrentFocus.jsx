import { Hammer, BookOpen, Compass } from "lucide-react";
import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ScrambleText from "../components/ScrambleText";
import LiveClock from "../components/LiveClock";
import { currentFocus } from "../data/content";

const ICONS = {
  Building: Hammer,
  Learning: BookOpen,
  Exploring: Compass,
};

export default function CurrentFocus() {
  return (
    <Section id="focus" fx>
      <SectionHeading
        index="08"
        label="Current focus"
        title="What I'm on right now."
      />

      <div className="mt-14 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Live status
          </span>
          <LiveClock className="font-mono text-xs text-[var(--muted)]" />
        </div>

        <div className="grid divide-y divide-[var(--border)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {currentFocus.map((f, i) => {
            const Icon = ICONS[f.label] ?? Compass;
            return (
              <SectionReveal key={f.label} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--accent)] transition-colors duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ScrambleText
                    as="h3"
                    className="mt-7 font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
                    text={f.label}
                    duration={700}
                  />
                  <p className="mt-3 text-lg leading-relaxed text-[var(--text)]">
                    {f.value}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
