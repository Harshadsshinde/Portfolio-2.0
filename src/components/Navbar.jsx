import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, profile } from "../data/content";
import ScrambleText from "./ScrambleText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(8,9,10,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--text)]"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
          <ScrambleText
            trigger="hover"
            replayOnHover={false}
            text={profile.shortName}
            duration={800}
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-[var(--border)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  <ScrambleText
                    trigger="hover"
                    replayOnHover={false}
                    text={item.label}
                    duration={650}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Resume
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-2 text-[var(--text)] md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-[var(--border)] bg-[rgba(8,9,10,0.96)] backdrop-blur-xl transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="border-b border-[var(--border)] py-4 text-lg text-[var(--text)] last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-lg text-[var(--accent)]"
          >
            Resume <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
