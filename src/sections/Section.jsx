import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Section({ id, children, className = "", full = false, fx = false }) {
  // NOTE: `fx` applies a transform to the section. Do NOT enable it on a section
  // that contains a GSAP ScrollTrigger pin (e.g. horizontal rails) — a transformed
  // ancestor breaks fixed-position pinning.
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const active = fx && !reduce;

  return (
    <motion.section
      id={id}
      ref={ref}
      style={active ? { opacity, y, scale } : undefined}
      className={`relative z-10 px-6 lg:px-10 ${full ? "" : "py-24 lg:py-32"} ${className}`}
    >
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </motion.section>
  );
}
