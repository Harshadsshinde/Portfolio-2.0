import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import HorizontalScroll from "../components/HorizontalScroll";
import HorizontalCard from "../components/HorizontalCard";
import { projects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="relative z-10 py-24 lg:py-32">
      <div className="px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="06"
            label="Selected work"
            title="Things I've built."
          />
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <HorizontalScroll
        className="mt-16"
        trackClassName="px-6 lg:px-10"
      >
        {projects.map((p, i) => (
          <HorizontalCard key={p.id} project={p} index={i} />
        ))}
      </HorizontalScroll>
    </section>
  );
}
