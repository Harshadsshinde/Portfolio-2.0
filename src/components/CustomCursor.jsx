import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const spotlight = spotlightRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-none-root");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });
    if (spotlight) gsap.set(spotlight, { xPercent: -50, yPercent: -50, opacity: 0 });
    if (label) gsap.set(label, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.7 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.06, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.06, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const spotX = gsap.quickTo(spotlight, "x", { duration: 0.9, ease: "power2.out" });
    const spotY = gsap.quickTo(spotlight, "y", { duration: 0.9, ease: "power2.out" });
    const labelX = label ? gsap.quickTo(label, "x", { duration: 0.3, ease: "power3.out" }) : () => {};
    const labelY = label ? gsap.quickTo(label, "y", { duration: 0.3, ease: "power3.out" }) : () => {};

    let visible = false;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        if (spotlight) gsap.to(spotlight, { opacity: 1, duration: 0.6 });
      }
      dotX(x);
      dotY(y);
      ringX(x);
      ringY(y);
      labelX(x);
      labelY(y);
      if (spotlight) {
        spotX(x);
        spotY(y);
      }

      const labelTarget = e.target?.closest?.("[data-cursor-label]");
      const labelText = labelTarget?.getAttribute("data-cursor-label");
      if (label) {
        if (labelText) label.textContent = labelText;
        gsap.to(label, {
          opacity: labelText ? 1 : 0,
          scale: labelText ? 1 : 0.7,
          duration: 0.25,
          ease: "power3.out",
        });
      }

      const interactive = e.target?.closest?.(
        "a, button, input, textarea, select, [data-cursor='hover']"
      );

      gsap.to(ring, {
        opacity: labelText ? 0 : 1,
        scale: interactive ? 2.2 : 1,
        borderColor: interactive
          ? "rgba(139,147,224,0.95)"
          : "rgba(94,106,210,0.7)",
        backgroundColor: interactive
          ? "rgba(94,106,210,0.16)"
          : "rgba(94,106,210,0)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dot, {
        opacity: labelText ? 0 : 1,
        scale: interactive ? 0.35 : 1,
        duration: 0.3,
      });
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
      if (spotlight) gsap.to(spotlight, { opacity: 0, duration: 0.4 });
    };
    const onDown = () => gsap.to(ring, { scale: 0.75, duration: 0.15 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.25, ease: "power3.out" });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("cursor-none-root");
    };
  }, []);

  return (
    <>
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(94,106,210,0.18) 0%, rgba(139,147,224,0.07) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border opacity-0 mix-blend-screen"
        style={{ borderColor: "rgba(94,106,210,0.7)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#aab0ee] opacity-0 mix-blend-screen"
        style={{ boxShadow: "0 0 14px 4px rgba(94,106,210,0.85)" }}
      />
      <div
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white opacity-0"
        style={{ boxShadow: "0 0 20px 2px rgba(94,106,210,0.6)" }}
      />
    </>
  );
};

export default CustomCursor;
