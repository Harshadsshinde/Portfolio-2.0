import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <Link
      to={`/work/${project.id}`}
      className="group block"
      data-cursor-label="View"
      onClick={() => setSelected(true)}
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: hovered ? -6 : 0, scale: selected ? 0.98 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className={`relative overflow-hidden rounded-2xl border bg-[var(--surface)] transition-[border-color,box-shadow] duration-500 ${
          selected
            ? "border-[var(--accent)]"
            : "border-[var(--border)] group-hover:border-[var(--accent)] group-hover:shadow-[0_26px_60px_-30px_rgba(94,106,210,0.65)]"
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.Img}
            alt={project.Title}
            loading="lazy"
            style={{ y: imgY }}
            animate={{ scale: hovered ? 1.12 : 1.04 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-[9%] left-0 h-[118%] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-80" />

          <div className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[120%]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(360px circle at var(--gx,50%) var(--gy,50%), rgba(94,106,210,0.22), transparent 62%)",
            }}
          />

          <span className="absolute left-4 top-4 font-mono text-[11px] text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -6 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            {project.Tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] transition-colors duration-500 group-hover:border-[var(--accent)] group-hover:text-[var(--text)]"
              >
                {t}
              </span>
            ))}
            <span className="ml-auto font-mono text-[10px] text-[var(--muted)]">
              {project.Year}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-medium leading-snug text-[var(--text)] transition-colors duration-500 group-hover:text-[var(--accent)]">
            {project.Title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
            {project.Description}
          </p>

          <div className="grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                View project <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
