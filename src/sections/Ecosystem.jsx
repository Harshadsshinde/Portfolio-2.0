import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import Marquee from "../components/Marquee";
import ScrambleText from "../components/ScrambleText";
import { skillTiers, marqueeTech } from "../data/content";

export default function Ecosystem() {
  return (
    <Section id="ecosystem" className="overflow-hidden" fx>
      <SectionHeading
        index="05"
        label="Ecosystem"
        title="The tools I reach for."
        description="A working stack, not a buzzword list — everything here I've shipped with."
      />

      <div className="mt-12 space-y-4">
        <Marquee speed={30} reactive>
          {marqueeTech.map((t) => (
            <span
              key={t}
              className="mx-3 font-mono text-sm uppercase tracking-widest text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </Marquee>
        <Marquee speed={26} reverse reactive>
          {[...marqueeTech].reverse().map((t) => (
            <span
              key={t}
              className="mx-3 font-mono text-sm uppercase tracking-widest text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillTiers.map((tier, ti) => (
          <SectionReveal key={tier.title} delay={ti * 0.08}>
            <div className="flex h-full flex-col">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {String(ti + 1).padStart(2, "0")}
                </span>
                <ScrambleText
                  as="h3"
                  className="text-lg font-medium text-[var(--text)]"
                  text={tier.title}
                  duration={800}
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {tier.note}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tier.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-sm text-[var(--muted)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--text)]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
