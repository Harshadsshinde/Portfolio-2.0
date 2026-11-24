import React from "react";
import { motion, useTransform, useReducedMotion } from "framer-motion";
import useScrollVelocity from "../lib/useScrollVelocity";

const Marquee = ({
  children,
  speed = 32,
  reverse = false,
  className = "",
  fade = true,
  reactive = false,
}) => {
  const reduce = useReducedMotion();
  const velocity = useScrollVelocity();
  const skewX = useTransform(velocity, [-2500, 0, 2500], [6, 0, -6]);

  return (
    <motion.div
      style={reactive && !reduce ? { skewX } : undefined}
      className={`group relative flex overflow-hidden ${className}`}
    >
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />
        </>
      )}
      <div
        className="animate-marquee flex shrink-0 items-center gap-8 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </motion.div>
  );
};

export default Marquee;
