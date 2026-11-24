import { Download, ArrowUpRight, MapPin, Circle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import CountUp from "../components/CountUp";
import Certificate from "../components/Certificate";
import Footer from "../components/Footer";
import LiveClock from "../components/LiveClock";
import {
  profile,
  experience,
  skillGroups,
  education,
  philosophy,
  currentFocus,
  services,
} from "../data/content";
import { projects } from "../data/projects";

export default function About() {
  const stats = [
    { value: projects.length, label: "Projects shipped" },
    { value: 3, label: "Internships" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 2026, label: "B.Tech, Computer Eng." },
  ];

  return (
    <>
      {/* Intro */}
      <div className="px-6 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            index="—"
            label="About"
            title="The person behind the code."
          />

          <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionReveal>
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
                  <img
                    src="./image.png"
                    alt={profile.name}
                    className="w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
                <div className="mt-5 space-y-2 font-mono text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <Circle className="h-2 w-2 fill-[var(--accent)] text-[var(--accent)]" />
                    Software Engineer · Full Stack Developer
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" /> {profile.location}
                    </span>
                    <LiveClock />
                  </div>
                </div>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex w-full items-center justify-between rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                >
                  Download résumé
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </SectionReveal>

            <div>
              <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)]">
                <SectionReveal>
                  <p>
                    I'm {profile.name}, a software engineer and full-stack
                    developer based in {profile.location}. I build web products
                    that are fast, accessible and genuinely enjoyable to use —
                    from the database schema to the last easing curve.
                  </p>
                </SectionReveal>
                <SectionReveal delay={0.05}>
                  <p>
                    I currently work as a Software Engineer at ADnA Intelligence,
                    building and maintaining production enterprise applications
                    — School Management ERP, CodeBid and NGO ERP — with Angular,
                    React.js, TypeScript and PrimeNG. My core is the MERN stack:
                    component architecture, REST APIs, authentication and
                    real-time features with Socket.IO.
                  </p>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                  <p>
                    On top of that I bring a motion and 3D layer — Framer Motion,
                    GSAP and Three.js — used deliberately to make interfaces feel
                    alive. I care about the details most people skip: edge cases,
                    accessibility and performance.
                  </p>
                </SectionReveal>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <SectionReveal key={s.label} delay={i * 0.05}>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                      <div className="text-3xl font-semibold text-[var(--text)]">
                        <CountUp end={s.value} />
                        {s.suffix && (
                          <span className="text-[var(--accent)]">{s.suffix}</span>
                        )}
                      </div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                        {s.label}
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I do */}
      <div className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading index="01" label="What I do" title="What I work on." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <SectionReveal key={s.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="text-xl font-medium text-[var(--text)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {s.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Experience + Skills */}
      <div className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Experience
            </h3>
            <div className="mt-8 border-l border-[var(--border)]">
              {experience.map((e, i) => (
                <SectionReveal key={e.role + e.org} delay={i * 0.05}>
                  <div className="relative pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {e.period}
                    </span>
                    <h4 className="mt-2 text-xl font-medium text-[var(--text)]">
                      {e.role}
                    </h4>
                    <div className="text-sm text-[var(--accent)]">{e.org}</div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {e.body}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Education
            </h3>
            <div className="mt-8 space-y-6">
              {education.map((ed) => (
                <SectionReveal key={ed.degree}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {ed.period}
                    </span>
                    <h4 className="mt-2 flex items-center gap-2 text-lg font-medium text-[var(--text)]">
                      <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
                      {ed.degree}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {ed.school}
                    </p>
                    <p className="mt-1 font-mono text-xs text-[var(--accent)]">
                      {ed.detail}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Skills
            </h3>
            <div className="mt-8 space-y-8">
              {skillGroups.map((g, gi) => (
                <SectionReveal key={g.title} delay={gi * 0.05}>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                      {g.title}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text)]"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Philosophy + Focus */}
      <div className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Philosophy
              </h3>
              <div className="mt-8 space-y-5">
                {philosophy.map((p) => (
                  <SectionReveal key={p.n}>
                    <div className="flex gap-6 border-t border-[var(--border)] pt-5">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {p.n}
                      </span>
                      <div>
                        <h4 className="text-base font-medium text-[var(--text)]">
                          {p.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Current focus
              </h3>
              <div className="mt-8 space-y-5">
                {currentFocus.map((f) => (
                  <SectionReveal key={f.label}>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                        {f.label}
                      </span>
                      <p className="mt-3 text-base leading-relaxed text-[var(--text)]">
                        {f.value}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Certifications
              </h3>
              <div className="mt-8">
                <Certificate />
              </div>
            </div>
          </div>

          <SectionReveal>
            <Link
              to="/work"
              className="group mt-20 inline-flex items-center gap-2 text-lg text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              See my work
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </SectionReveal>
        </div>
      </div>

      <Footer />
    </>
  );
}
