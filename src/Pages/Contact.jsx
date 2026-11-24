import { useState } from "react";
import { ArrowUpRight, Plus, Clock, Mail, MapPin, Circle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import SectionReveal from "../components/SectionReveal";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LiveClock from "../components/LiveClock";
import { profile } from "../data/content";

const faqs = [
  {
    q: "What's your main stack?",
    a: "React.js, Angular and Next.js with TypeScript on the frontend; Node.js, Express and MongoDB or PostgreSQL on the backend — plus Framer Motion and Three.js for motion and 3D.",
  },
  {
    q: "Where are you based?",
    a: "Pune, Maharashtra, India.",
  },
  {
    q: "What are you working on right now?",
    a: "Building and maintaining enterprise ERP modules — School Management ERP, CodeBid and NGO ERP — at ADnA Intelligence.",
  },
  {
    q: "Where can I see the code?",
    a: "Every project links to its GitHub repo. Head to the Work page, or browse github.com/Harshadsshinde.",
  },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex-1 text-base font-medium text-[var(--text)]">
                {f.q}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-500 ${
                  isOpen ? "rotate-45 text-[var(--accent)]" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm leading-relaxed text-[var(--muted)]">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <div className="px-6 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            index="—"
            label="Contact"
            title="Let's talk."
            description="A question about my work, the code behind it, or just want to say hello? Send a message and I'll reply."
          />

          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionReveal>
                <div className="space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center justify-between border-b border-[var(--border)] pb-4"
                  >
                    <span className="flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
                      <Mail className="h-4 w-4" /> Email
                    </span>
                    <span className="flex items-center gap-2 text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                      {profile.email}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <span className="flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
                      <Clock className="h-4 w-4" /> Local time
                    </span>
                    <LiveClock className="text-[var(--text)]" />
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <span className="flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
                      <MapPin className="h-4 w-4" /> Location
                    </span>
                    <span className="text-[var(--text)]">{profile.location}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                    <span className="flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
                      <Circle className="h-3 w-3 fill-[var(--accent)] text-[var(--accent)]" />{" "}
                      Focus
                    </span>
                    <span className="text-[var(--text)]">
                      Full Stack Development
                    </span>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Elsewhere
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-[var(--border)] px-5 py-4 transition-colors hover:border-[var(--accent)]"
                    >
                      <span className="text-[var(--text)]">{s.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]" />
                    </a>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <SectionReveal direction="left">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                <h3 className="text-xl font-medium text-[var(--text)]">
                  Send a message
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  I'll get back to you within a day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <SectionReveal>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Frequently asked
            </h2>
          </SectionReveal>
          <div className="mt-10">
            <SectionReveal delay={0.05}>
              <Faq />
            </SectionReveal>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
