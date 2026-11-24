import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ScrambleText from "../components/ScrambleText";
import { experience } from "../data/content";

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience">
      <div className="lg:grid lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="07"
            label="Experience"
            title="Where I've been building."
          />
        </div>

        <div ref={timelineRef} className="relative mt-14 border-l border-[var(--border)] lg:mt-0">
          <motion.span
            style={{ scaleY }}
            className="absolute -left-px top-0 h-full w-px origin-top bg-[var(--accent)]"
          />
          {experience.map((e, i) => (
            <SectionReveal key={e.role + e.org} delay={i * 0.06}>
              <div className="relative pb-14 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  {e.period}
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <ScrambleText
                    as="h3"
                    className="text-2xl font-medium text-[var(--text)]"
                    text={e.role}
                    duration={1000}
                  />
                  {e.roleNote && (
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                      {e.roleNote}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm text-[var(--accent)]">{e.org}</div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                  {e.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm text-[var(--muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
