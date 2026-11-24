import { createContext, useContext, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import useGsap from "../lib/useGsap";

const HorizontalContext = createContext({ tween: null, isHorizontal: false });

export const useHorizontalScroll = () => useContext(HorizontalContext);

export default function HorizontalScroll({
  children,
  className = "",
  trackClassName = "",
}) {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const [state, setState] = useState({ tween: null, isHorizontal: false });

  useGsap(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const wrapper = wrapperRef.current;
          const track = trackRef.current;
          if (!wrapper || !track) return;

          setState({ tween: null, isHorizontal: true });

          const getAmount = () =>
            -(track.scrollWidth - window.innerWidth);

          const tween = gsap.to(track, {
            x: getAmount,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressRef.current) {
                  progressRef.current.style.transform = `scaleX(${self.progress})`;
                }
              },
            },
          });

          setState({ tween, isHorizontal: true });
          ScrollTrigger.refresh();

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            setState({ tween: null, isHorizontal: false });
          };
        }
      );

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  const { isHorizontal } = state;

  return (
    <HorizontalContext.Provider value={state}>
      <div ref={wrapperRef} data-hscroll className={`relative ${className}`}>
        <div
          ref={trackRef}
          data-hscroll-track
          {...(isHorizontal ? { "data-cursor-label": "Scroll" } : {})}
          className={`flex ${
            isHorizontal ? "h-screen items-center gap-8" : "flex-col gap-6"
          } ${trackClassName}`}
          style={isHorizontal ? { width: "max-content" } : undefined}
        >
          {children}
        </div>

        {isHorizontal && (
          <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
            <div className="h-px w-44 bg-[var(--border)]">
              <div
                ref={progressRef}
                className="h-full origin-left bg-[var(--accent)]"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        )}
      </div>
    </HorizontalContext.Provider>
  );
}
