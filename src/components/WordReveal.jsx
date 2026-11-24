import { useRef } from "react";
import { gsap, SplitText, prefersReducedMotion } from "../lib/gsap";
import useGsap from "../lib/useGsap";

export default function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.09,
  duration = 1.1,
  type = "lines",
}) {
  const ref = useRef(null);

  useGsap(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const split = SplitText.create(el, {
        type,
        mask: type,
        autoSplit: true,
        ...(type === "words"
          ? { wordsClass: "wr-word" }
          : { linesClass: "wr-line" }),
        onSplit: (self) =>
          gsap.fromTo(
            self[type],
            { yPercent: 115 },
            {
              yPercent: 0,
              duration,
              stagger,
              delay,
              ease: "power4.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          ),
      });

      return () => split.revert();
    },
    [text, type]
  );

  return (
    <span ref={ref} className={`block ${className}`}>
      {text}
    </span>
  );
}
