import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Route error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Something broke
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[var(--text)]">
            This section failed to render.
          </h1>
          <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
            {String(this.state.error?.message || this.state.error)}
          </p>
          <button
            onClick={() => {
              this.setState({ error: null });
              window.location.href = "/";
            }}
            className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white"
          >
            Back to home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
