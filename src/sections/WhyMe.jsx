import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ScrambleText from "../components/ScrambleText";
import { whyMe } from "../data/content";

export default function WhyMe() {
  return (
    <Section id="why" fx>
      <SectionHeading
        index="09"
        label="Values"
        title="How I like to work."
      />

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {whyMe.map((w, i) => (
          <SectionReveal key={w.title} delay={(i % 2) * 0.06}>
            <div className="group relative pt-6">
              <span className="absolute left-0 top-0 h-px w-full bg-[var(--border)]" />
              <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              <div className="flex items-start gap-4">
                <ScrambleText
                  trigger="hover"
                  replayOnHover={false}
                  className="pt-1 font-mono text-xs text-[var(--accent)]"
                  text={String(i + 1).padStart(2, "0")}
                  duration={600}
                />
                <div className="transition-transform duration-500 group-hover:translate-x-1">
                  <h3 className="text-xl font-medium text-[var(--text)]">
                    {w.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--muted)]">
                    {w.body}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
