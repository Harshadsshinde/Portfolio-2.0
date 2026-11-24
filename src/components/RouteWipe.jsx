import { useLocation } from "react-router-dom";
import ScrambleText from "./ScrambleText";

const LABELS = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

function labelFor(pathname) {
  if (LABELS[pathname]) return LABELS[pathname];
  if (pathname.startsWith("/work/")) return "Case study";
  return "Loading";
}

export default function RouteWipe() {
  const { pathname } = useLocation();

  return (
    <div
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90]"
    >
      <div className="route-wipe-dark absolute inset-0 bg-[var(--bg)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrambleText
            as="span"
            trigger="mount"
            duration={650}
            className="font-mono text-xs uppercase tracking-[0.5em] text-[var(--muted)]"
            text={labelFor(pathname)}
          />
        </div>
      </div>
      <div className="route-wipe-accent absolute inset-0 bg-[var(--accent)]" />
    </div>
  );
}
