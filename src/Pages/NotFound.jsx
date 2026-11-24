import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          404
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-[var(--muted)]">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Back home
          </Link>
          <Link
            to="/work"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            See my work
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
