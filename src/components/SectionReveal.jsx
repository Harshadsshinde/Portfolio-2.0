import { motion } from "framer-motion";
import useReveal from "../lib/useReveal";

const AXIS = { left: "x", right: "x", up: "y", down: "y" };
const SIGN = { up: 1, left: 1, down: -1, right: -1 };

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance,
  blur = false,
  duration = 0.6,
}) {
  const { ref, inView } = useReveal();

  const axis = AXIS[direction] || "y";
  const dist = distance ?? (axis === "x" ? 60 : 40);
  const hidden = {
    opacity: 0,
    [axis]: (SIGN[direction] ?? 1) * dist,
    ...(blur ? { filter: "blur(12px)" } : {}),
  };
  const show = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? show : hidden}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
