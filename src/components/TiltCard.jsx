import React, { useRef } from "react";
import gsap from "gsap";

const TiltCard = ({
  children,
  className = "",
  max = 16,
  scale = 1.03,
  glare = true,
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * max * 2;
    const rotateY = (px - 0.5) * max * 2;

    gsap.to(el, {
      rotateX,
      rotateY,
      scale,
      transformPerspective: 1000,
      transformOrigin: "center",
      duration: 0.5,
      ease: "power3.out",
    });

    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0.4,
        background: `radial-gradient(circle at ${px * 100}% ${
          py * 100
        }%, rgba(255,255,255,0.7), transparent 55%)`,
        duration: 0.4,
      });
    }
  };

  const reset = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
    if (glareRef.current) {
      gsap.to(glareRef.current, { opacity: 0, duration: 0.5 });
    }
  };

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative h-full w-full [transform-style:preserve-3d] will-change-transform"
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay"
          />
        )}
      </div>
    </div>
  );
};

export default TiltCard;
