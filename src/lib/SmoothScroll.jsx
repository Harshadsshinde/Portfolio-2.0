import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    window.__lenis = lenis;

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.__scrollTriggerRefresh = refresh;
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);

    let imgTimer = 0;
    const onResourceLoad = (e) => {
      if (e.target?.tagName !== "IMG") return;
      clearTimeout(imgTimer);
      imgTimer = setTimeout(refresh, 200);
    };
    document.addEventListener("load", onResourceLoad, true);

    return () => {
      gsap.ticker.remove(update);
      gsap.ticker.lagSmoothing(500, 33);
      window.removeEventListener("load", refresh);
      document.removeEventListener("load", onResourceLoad, true);
      clearTimeout(imgTimer);
      if (window.__scrollTriggerRefresh === refresh)
        window.__scrollTriggerRefresh = null;
      if (window.__lenis === lenis) window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;
