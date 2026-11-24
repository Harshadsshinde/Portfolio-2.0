import { useMemo, useState } from "react";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ProjectCard from "../components/ProjectCard";
import Marquee from "../components/Marquee";
import CountUp from "../components/CountUp";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { marqueeTech } from "../data/content";

const techCount = new Set(projects.flatMap((p) => p.Technologies)).size;

export default function Work() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const tags = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.Tags))],
    []
  );

  const featured = projects.find((p) => p.Featured) || projects[0];

  const filtered = projects.filter((p) => {
    const matchesTag = active === "All" || p.Tags.includes(active);
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      p.Title.toLowerCase().includes(q) ||
      p.Description.toLowerCase().includes(q) ||
      p.Tags.some((t) => t.toLowerCase().includes(q));
    return matchesTag && matchesQuery;
  });

  const stats = [
    { value: projects.length, suffix: "", label: "Projects" },
    { value: techCount, suffix: "+", label: "Technologies" },
    { value: 3, suffix: "", label: "Categories" },
    { value: 2025, suffix: "", label: "Shipping since" },
  ];

  return (
    <>
      <div className="px-6 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            index="—"
            label="Work"
            title="Everything I've shipped."
            description="Full-stack applications, real-time products and interactive 3D experiences — built end to end."
          />

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="text-3xl font-semibold text-[var(--text)]">
                    {s.label === "Shipping since" ? (
                      s.value
                    ) : (
                      <>
                        <CountUp end={s.value} />
                        <span className="text-[var(--accent)]">{s.suffix}</span>
                      </>
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

      {/* Featured project */}
      <div className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionReveal>
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Featured
              </span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <Link
              to={`/work/${featured.id}`}
              className="group grid overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.Img}
                  alt={featured.Title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <div className="flex flex-wrap gap-2">
                  {featured.Technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-3xl font-medium leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                  {featured.Title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {featured.LongDescription}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  View case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </div>

      {/* All projects */}
      <div className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 border-t border-[var(--border)] pt-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                    active === t
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects"
                className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-3 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <SectionReveal key={p.id} delay={(i % 3) * 0.05}>
                <ProjectCard project={p} index={i} />
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-24 text-center text-[var(--muted)]">
              No projects match that search.
            </p>
          )}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="border-y border-[var(--border)] py-10">
        <Marquee speed={30}>
          {marqueeTech.map((t) => (
            <span
              key={t}
              className="mx-4 font-mono text-sm uppercase tracking-widest text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      {/* CTA */}
      <div className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            Want to see the code?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
            Every project links to its source. Browse the repos, or reach out
            with a question.
          </p>
          <a
            href="https://github.com/Harshadsshinde"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            View GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
