import { useMemo } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import WordReveal from "../components/WordReveal";
import CountUp from "../components/CountUp";
import TiltCard from "../components/TiltCard";
import Parallax from "../components/Parallax";
import ScrambleText from "../components/ScrambleText";
import useReveal from "../lib/useReveal";
import { profile } from "../data/content";
import { projects } from "../data/projects";

function useStats() {
  return useMemo(() => {
    const start = new Date(profile.startDate);
    const now = new Date();
    const months =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    return [
      { value: projects.length, suffix: "", label: "Projects shipped" },
      { value: 3, suffix: "", label: "Internships" },
      { value: 15, suffix: "+", label: "Technologies" },
      { value: Math.max(months, 1), suffix: "mo", label: "Industry experience" },
    ];
  }, []);
}

const TAGS = ["React.js", "Angular", "TypeScript", "Node.js", "MongoDB"];

export default function WhoIAm() {
  const stats = useStats();
  const { ref: imgRef, inView: imgIn } = useReveal();

  const intro = `I'm ${profile.name}, a software engineer and full-stack developer based in ${profile.location}. I build enterprise web applications across the stack — React and Angular with TypeScript on the front, Node, Express and MongoDB or PostgreSQL on the back.`;
  const approach =
    "My work sits at the intersection of engineering and design: clean architecture, real performance budgets, and motion that guides rather than decorates. When a project calls for it, I reach for Framer Motion and Three.js to build moments people remember.";

  return (
    <Section id="who" fx>
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            index="02"
            label="Who I am"
            title="A full-stack developer"
            accentTitle="with a designer's eye."
          />

          <div className="mt-8 flex flex-col gap-6">
            <WordReveal
              type="words"
              stagger={0.02}
              duration={0.9}
              text={intro}
              className="text-base leading-relaxed text-[var(--muted)] sm:text-lg"
            />
            <WordReveal
              type="words"
              stagger={0.02}
              duration={0.9}
              delay={0.1}
              text={approach}
              className="text-base leading-relaxed text-[var(--muted)] sm:text-lg"
            />
            <div className="flex flex-wrap gap-3 pt-2">
              {TAGS.map((t, i) => (
                <SectionReveal key={t} delay={0.15 + i * 0.06} distance={16}>
                  <ScrambleText
                    as="span"
                    trigger="hover"
                    duration={650}
                    text={t}
                    className="inline-block cursor-pointer rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-4 py-1.5 font-mono text-xs text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--text)] hover:shadow-[0_12px_30px_-14px_rgba(94,106,210,0.9)]"
                  />
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        <SectionReveal direction="left">
          <Parallax distance={36}>
            {/* Ref sits on the UNCLIPPED wrapper: an IntersectionObserver on an
                element that is itself clipped by clip-path never reports
                intersection, which deadlocked the reveal. */}
            <div ref={imgRef} className="relative">
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{
                  clipPath: imgIn
                    ? "inset(0 0 0% 0)"
                    : "inset(0 0 100% 0)",
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <img
                  src="./image.png"
                  alt={profile.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-700 hover:scale-[1.04] hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-40" />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3">
                <ScrambleText
                  className="font-mono text-xs text-[var(--muted)]"
                  text={profile.location}
                  duration={1100}
                />
              </div>
            </div>
          </Parallax>
        </SectionReveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <SectionReveal key={s.label} delay={i * 0.06}>
            <TiltCard max={10}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="text-4xl font-semibold text-[var(--text)]">
                  <CountUp end={s.value} />
                  <span className="text-[var(--accent)]">{s.suffix}</span>
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  {s.label}
                </div>
              </div>
            </TiltCard>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
