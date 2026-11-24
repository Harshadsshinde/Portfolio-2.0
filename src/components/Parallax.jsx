import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Parallax({
  children,
  className = "",
  distance = 60,
  scaleFrom = 1,
  as = "div",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, 1]);
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      style={reduce ? undefined : { y, scale }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
