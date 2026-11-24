import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import SectionReveal from "../components/SectionReveal";
import ContactForm from "../components/ContactForm";
import LiveClock from "../components/LiveClock";
import ScrambleText from "../components/ScrambleText";
import { profile } from "../data/content";

export default function LetsTalk() {
  return (
    <Section id="talk" fx>
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionReveal>
            <ScrambleText
              as="span"
              className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
              text="10 — Let's talk"
              duration={1100}
            />
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              <ScrambleText
                as="span"
                className="block"
                text="Get in touch."
                duration={1100}
                delay={150}
              />
              <ScrambleText
                as="span"
                className="block text-[var(--muted)]"
                text="Say hello."
                duration={1100}
                delay={450}
              />
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
              Questions about my work, the code behind it, or just want to
              connect? Drop a message and I'll get back to you.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between border-b border-[var(--border)] pb-4"
              >
                <span className="font-mono text-sm text-[var(--muted)]">
                  Email
                </span>
                <span className="flex items-center gap-2 text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <span className="font-mono text-sm text-[var(--muted)]">
                  Local time
                </span>
                <LiveClock className="text-[var(--text)]" />
              </div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <span className="font-mono text-sm text-[var(--muted)]">
                  Location
                </span>
                <span className="text-[var(--text)]">{profile.location}</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal direction="left">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-8">
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}
