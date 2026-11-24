import { useState } from "react";
import { Plus } from "lucide-react";
import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ScrambleText from "../components/ScrambleText";
import { services } from "../data/content";

export default function WhatIDo() {
  const [open, setOpen] = useState(services[0].id);

  return (
    <Section id="what" fx>
      <SectionHeading
        index="03"
        label="What I do"
        title="Three ways I turn ideas into working software."
      />

      <div className="mt-14 divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {services.map((s, i) => {
          const isOpen = open === s.id;
          return (
            <SectionReveal key={s.id} delay={i * 0.05}>
              <div className="group/row relative">
                <span
                  className={`absolute left-0 top-0 h-full w-px origin-top bg-[var(--accent)] transition-transform duration-700 ${
                    isOpen ? "scale-y-100" : "scale-y-0 group-hover/row:scale-y-100"
                  }`}
                />
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="group flex w-full items-center gap-6 py-8 pl-6 text-left"
                  aria-expanded={isOpen}
                >
                  <ScrambleText
                    as="span"
                    trigger="hover"
                    replayOnHover={false}
                    className="font-mono text-xs text-[var(--muted)]"
                    text={`0${i + 1}`}
                  />
                  <span className="flex-1 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="block text-2xl font-medium text-[var(--text)] sm:text-3xl">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--muted)]">
                      {s.blurb}
                    </span>
                  </span>
                  <Plus
                    className={`h-6 w-6 shrink-0 text-[var(--muted)] transition-transform duration-500 ${
                      isOpen ? "rotate-45 text-[var(--accent)]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-8 pl-8 sm:grid-cols-[1.4fr_1fr] sm:pl-12">
                      <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
                        {s.body}
                      </p>
                      <div className="flex flex-wrap gap-2 self-start">
                        {s.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </Section>
  );
}
