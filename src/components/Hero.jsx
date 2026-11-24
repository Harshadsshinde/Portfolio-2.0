import React, { Suspense, lazy, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { profile } from "../data/content";
import { projects } from "../data/projects";
import LiveClock from "./LiveClock";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

const HeroScene = lazy(() => import("./HeroScene"));

function supportsWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const ease = [0.22, 1, 0.36, 1];

function AnimatedWord({ word, delay = 0, stagger = 0.045 }) {
  return (
    <span className="inline-block">
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.85, delay: delay + i * stagger, ease }}
        >
          <span className="inline-block cursor-default transition-[transform,color] duration-300 ease-out hover:-translate-y-3.5 hover:scale-[1.14] hover:text-[var(--accent)] hover:[text-shadow:0_0_22px_rgba(94,106,210,0.55)]">
            {ch}
          </span>
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const webgl = useMemo(supportsWebGL, []);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const nameParts = profile.shortName.split(" ");
  const nameFirst = nameParts[0];
  const nameRest = nameParts.slice(1).join(" ");
  const city = profile.location.split(",")[0];

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="animate-glow-pulse absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--accent)] opacity-20 blur-[130px]" />
        <div className="animate-float absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#22d3ee] opacity-10 blur-[130px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-2">
        <motion.div style={{ y: yText, opacity: fade }} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            <ScrambleText
              as="span"
              trigger="mount"
              duration={1500}
              delay={400}
              text={`Based in ${city}, India`}
            />
            <span className="text-[var(--border)]">/</span>
            <LiveClock className="text-[var(--muted)]" />
          </motion.div>

          <h1 className="name-sheen mt-7 text-[clamp(3.25rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <AnimatedWord word={nameFirst} delay={0.15} />
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <AnimatedWord word={nameRest} delay={0.35} />
              <motion.span
                className="inline-block text-[var(--accent)]"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.85,
                  delay: 0.35 + nameRest.length * 0.045,
                  ease,
                }}
              >
                .
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[var(--accent)]" />
            <ScrambleText
              as="span"
              trigger="mount"
              duration={1300}
              delay={650}
              className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--text)]"
              text={`${profile.role} · ${profile.role2}`}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-shadow duration-300 hover:shadow-[0_18px_40px_-16px_rgba(94,106,210,0.9)]"
              >
                View selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.22}>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FileText className="h-4 w-4" />
                Résumé
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--muted)]"
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-[var(--text)]"
              >
                {s.label}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-12 flex max-w-xl flex-wrap items-start gap-x-10 gap-y-5 border-t border-[var(--border)] pt-6"
          >
            {[
              { k: "Currently", v: "ADnA Intelligence" },
              { k: "Focus", v: "Full-stack · React & Angular" },
              { k: "Projects", v: `${projects.length} shipped` },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                  {s.k}
                </div>
                <div className="mt-1.5 text-sm text-[var(--text)]">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yVisual }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="relative h-[46vh] min-h-[320px] w-full lg:h-[70vh]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-2/3 w-2/3 rounded-full bg-[var(--accent)] opacity-20 blur-[120px]" />
          {webgl ? (
            <Suspense fallback={<SceneFallback />}>
              <HeroScene />
            </Suspense>
          ) : (
            <SceneFallback />
          )}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
          scroll
        </span>
      </div>
    </section>
  );
}

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-56 w-56 animate-float">
        <div className="absolute inset-0 rotate-45 rounded-[28%] border border-[var(--border)]" />
        <div className="absolute inset-6 rounded-[28%] bg-gradient-to-br from-[var(--accent)] to-transparent opacity-60 blur-sm" />
        <div className="absolute inset-12 rounded-[30%] border border-[var(--accent)] opacity-40" />
      </div>
    </div>
  );
}
