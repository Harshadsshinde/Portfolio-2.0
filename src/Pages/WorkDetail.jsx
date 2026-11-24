import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Check } from "lucide-react";
import SectionReveal from "../components/SectionReveal";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) return <Navigate to="/work" replace />;

  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];
  const related = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <article className="px-6 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All work
          </Link>

          <SectionReveal>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              {project.Title}
            </h1>
          </SectionReveal>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[var(--muted)]">
            <span>{project.Year}</span>
            <span className="text-[var(--border)]">/</span>
            <span>{project.Tags.join(" · ")}</span>
          </div>

          <SectionReveal delay={0.05}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
              <img
                src={project.Img}
                alt={project.Title}
                className="w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <SectionReveal>
              <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)]">
                <p className="text-[var(--text)]">{project.Description}</p>
                <p>{project.LongDescription}</p>
              </div>

              {project.Highlights?.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                    Highlights
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {project.Highlights.map((h, i) => (
                      <SectionReveal key={h} delay={i * 0.05}>
                        <li className="flex items-start gap-3 text-base leading-relaxed text-[var(--muted)]">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent)]">
                            <Check className="h-3 w-3" />
                          </span>
                          {h}
                        </li>
                      </SectionReveal>
                    ))}
                  </ul>
                </div>
              )}
            </SectionReveal>

            <SectionReveal delay={0.05}>
              <div className="space-y-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 lg:sticky lg:top-28">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                    Stack
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.Technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {project.LiveDemo && (
                    <a
                      href={project.LiveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-xl border border-[var(--border)] px-5 py-3 text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Source code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>

          <Link
            to={`/work/${next.id}`}
            className="group mt-20 flex items-center justify-between border-t border-[var(--border)] py-10"
          >
            <span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                Next project
              </span>
              <span className="mt-2 block text-2xl font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {next.Title}
              </span>
            </span>
            <ArrowUpRight className="h-6 w-6 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </article>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            More projects
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <SectionReveal key={p.id} delay={(i % 3) * 0.05}>
                <ProjectCard project={p} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
