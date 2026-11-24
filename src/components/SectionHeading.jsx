import React from "react";
import SectionReveal from "./SectionReveal";
import WordReveal from "./WordReveal";
import ScrambleText from "./ScrambleText";

export default function SectionHeading({
  index,
  label,
  title,
  accentTitle,
  description,
  align = "left",
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <SectionReveal>
        <div
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[var(--accent)]">
            {index}
          </span>
          <span className="h-px w-10 bg-[var(--border)]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {label}
          </span>
        </div>
      </SectionReveal>

      {title && (
        <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
          <WordReveal text={title} delay={0.05} />
          {accentTitle && (
            <span className="block text-[var(--accent)]">
              <ScrambleText
                as="span"
                trigger="in-view"
                duration={1200}
                delay={350}
                text={accentTitle}
              />
            </span>
          )}
        </h2>
      )}

      {description && (
        <SectionReveal delay={0.15}>
          <p
            className={`mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </SectionReveal>
      )}
    </div>
  );
}
