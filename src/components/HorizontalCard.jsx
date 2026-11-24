import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "../lib/gsap";
import useGsap from "../lib/useGsap";
import { useHorizontalScroll } from "./HorizontalScroll";

export default function HorizontalCard({ project, index }) {
  const { tween, isHorizontal } = useHorizontalScroll();
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useGsap(
    () => {
      if (!tween || !imgRef.current || !cardRef.current) return;
      const st = gsap.fromTo(
        imgRef.current,
        { xPercent: -7 },
        {
          xPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            containerAnimation: tween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        }
      );
      return () => {
        st.scrollTrigger?.kill();
        st.kill();
      };
    },
    [tween]
  );

  return (
    <article
      ref={cardRef}
      className={`group relative shrink-0 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-[border-color,box-shadow] duration-500 hover:border-[var(--accent)] hover:shadow-[0_30px_80px_-40px_rgba(94,106,210,0.7)] ${
        isHorizontal ? "w-[80vw] max-w-[600px]" : "w-full"
      }`}
    >
      <Link to={`/work/${project.id}`} className="block" data-cursor-label="View">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            ref={imgRef}
            src={project.Img}
            alt={project.Title}
            loading="lazy"
            className="absolute -left-[7%] top-0 h-full w-[114%] max-w-none object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-70" />
          <span className="absolute left-5 top-5 font-mono text-xs text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="p-7">
          <div className="flex flex-wrap items-center gap-2">
            {project.Tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]"
              >
                {t}
              </span>
            ))}
            <span className="ml-auto font-mono text-[10px] text-[var(--muted)]">
              {project.Year}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-medium leading-snug text-[var(--text)] transition-colors duration-500 group-hover:text-[var(--accent)]">
            {project.Title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
            {project.Description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
