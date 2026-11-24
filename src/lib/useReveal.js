import { useEffect, useRef, useState } from "react";

/**
 * Reliable in-view detection.
 *
 * framer-motion's `whileInView` does not fire when a component mounts already
 * in the viewport during a client-side route change, which left whole pages
 * stuck at opacity:0. This hook uses a native IntersectionObserver plus an
 * immediate on-mount visibility check, so in-view content always reveals.
 */
export default function useReveal({
  once = true,
  amount = 0.15,
  rootMargin = "0px 0px -8% 0px",
  fallback = 1600,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.top < vh * 0.92 && r.bottom > vh * 0.02;
    };

    // Already on screen (e.g. just navigated) -> reveal immediately.
    if (isVisible()) {
      setInView(true);
      return;
    }

    let obs = null;
    if (typeof IntersectionObserver !== "undefined") {
      obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              if (once && obs) obs.disconnect();
            } else if (!once) {
              setInView(false);
            }
          }
        },
        { threshold: amount, rootMargin }
      );
      obs.observe(el);
    } else {
      setInView(true);
    }

    // Safety net: never leave on-screen content hidden.
    const timer = setTimeout(() => {
      if (isVisible()) setInView(true);
    }, fallback);

    return () => {
      if (obs) obs.disconnect();
      clearTimeout(timer);
    };
  }, [once, amount, rootMargin, fallback, inView]);

  return { ref, inView };
}
