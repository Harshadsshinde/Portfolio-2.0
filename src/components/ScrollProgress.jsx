import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9998] h-[2px] w-full origin-left bg-gradient-to-r from-[var(--accent)] via-[#8b93e0] to-[var(--accent)]"
    >
      <div className="absolute inset-0 blur-[6px] bg-gradient-to-r from-[var(--accent)] via-[#8b93e0] to-[var(--accent)]" />
    </motion.div>
  );
};

export default ScrollProgress;
