import Section from "./Section";
import SectionHeading from "../components/SectionHeading";
import { philosophy } from "../data/content";

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHeading
        index="04"
        label="Philosophy"
        title="How I think about building."
      />

      <div className="mt-14">
        {philosophy.map((p, i) => (
          <div
            key={p.n}
            className="sticky mb-6"
            style={{ top: `${104 + i * 26}px` }}
          >
            <div className="group relative flex min-h-[44vh] flex-col justify-center overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-500 hover:border-[var(--accent)] sm:p-14">
              <span className="font-mono text-xs tracking-[0.3em] text-[var(--accent)]">
                {p.n}
              </span>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                <h3 className="text-3xl font-medium leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {p.body}
                </p>
              </div>
              <span className="pointer-events-none absolute -right-6 -top-16 select-none font-semibold leading-none text-white/[0.035] text-[12rem] transition-transform duration-700 group-hover:-translate-y-2">
                {p.n}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
