import { useLayoutEffect, useRef } from "react";
import { gsap } from "./gsap";

export default function useGsap(callback, { scope, dependencies = [] } = {}) {
  const contextRef = useRef(null);

  useLayoutEffect(() => {
    let cleanup;
    const scopeEl = scope?.current ?? undefined;
    contextRef.current = gsap.context(() => {
      cleanup = callback();
    }, scopeEl);

    return () => {
      if (typeof cleanup === "function") cleanup();
      contextRef.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return contextRef;
}
