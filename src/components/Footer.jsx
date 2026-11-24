import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { profile, navItems } from "../data/content";
import LiveClock from "./LiveClock";
import Marquee from "./Marquee";
import ScrambleText from "./ScrambleText";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] px-6 pb-10 pt-20 lg:px-10"
    >
      <div className="mb-16 overflow-hidden">
        <Marquee speed={24} fade={false} reactive>
          <span className="mx-8 text-6xl font-semibold tracking-tight text-white/[0.07] sm:text-8xl">
            Let&apos;s build something
            <span className="text-[var(--accent)]/40"> • </span>
          </span>
        </Marquee>
      </div>
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              <ScrambleText
                trigger="hover"
                replayOnHover={false}
                text={profile.name}
                duration={900}
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              {profile.tagline}
            </p>
            <p className="mt-6 font-mono text-xs text-[var(--muted)]">
              <LiveClock /> · {profile.location}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Elsewhere
            </h4>
            <ul className="mt-5 space-y-3">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block text-sm text-[var(--accent)] hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <span>Designed &amp; built from scratch.</span>
        </div>
      </div>
    </footer>
  );
}
