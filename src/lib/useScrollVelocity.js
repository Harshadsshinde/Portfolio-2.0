import { useScroll, useVelocity, useSpring } from "framer-motion";

export default function useScrollVelocity() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  return useSpring(velocity, { stiffness: 300, damping: 50, mass: 0.4 });
}
