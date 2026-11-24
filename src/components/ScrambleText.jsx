import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/gsap";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}=+*^?#";

export default function ScrambleText({
  text,
  as: Tag = "span",
  trigger = "in-view",
  duration = 900,
  delay = 0,
  characters = CHARS,
  replayOnHover = true,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const rafRef = useRef(0);
  const timeoutRef = useRef(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(text);

  const rand = () => characters[Math.floor(Math.random() * characters.length)];

  const run = useCallback(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    const chars = [...text];
    const startAt = performance.now() + delay;

    const tick = (now) => {
      const p = Math.min(Math.max(now - startAt, 0) / duration, 1);
      const revealed = Math.floor(p * chars.length);
      setDisplay(
        chars
          .map((c, i) => (i < revealed || c === " " ? c : rand()))
          .join("")
      );
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    rafRef.current = requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, duration, delay, characters]);

  useEffect(() => {
    if (trigger === "hover") return;
    const el = ref.current;
    if (!el) return;

    if (trigger === "mount") {
      run();
      startedRef.current = true;
      return () => cancelAnimationFrame(rafRef.current);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        startedRef.current = true;
        timeoutRef.current = setTimeout(run, delay);
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [trigger, run, delay]);

  useEffect(() => {
    if (!text) return;
    setDisplay(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const hoverProps =
    trigger === "hover" || (replayOnHover && trigger !== "hover")
      ? {
          onPointerEnter: () => {
            if (trigger === "hover" || startedRef.current) run();
          },
        }
      : {};

  return (
    <Tag ref={ref} className={className} aria-label={text} {...hoverProps} {...rest}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
