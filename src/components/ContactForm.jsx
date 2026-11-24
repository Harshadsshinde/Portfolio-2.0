import { useState } from "react";
import Swal from "sweetalert2";
import { Send } from "lucide-react";

// Option A (default): FormSubmit — free, but the address must be activated
// once via the link it emails you (check spam / promotions).
// Option B: Web3Forms — paste an access key below (get one free at
// https://web3forms.com) and it becomes the primary sender, no activation.
const WEB3FORMS_KEY = "";

const FORM_SUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/harshads1433@gmail.com";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL = "harshads1433@gmail.com";

function buildMailto({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name || "someone"}`;
  const body = `${message || ""}\n\n— ${name || ""}${email ? ` (${email})` : ""}`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] disabled:opacity-50";

const swalBase = { background: "#0e0f11", color: "#f7f8f8", confirmButtonColor: "#5e6ad2" };

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const mailto = buildMailto(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    Swal.fire({
      title: "Sending...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      ...swalBase,
    });

    const useWeb3 = Boolean(WEB3FORMS_KEY);

    try {
      const res = await fetch(
        useWeb3 ? WEB3FORMS_ENDPOINT : FORM_SUBMIT_ENDPOINT,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: JSON.stringify(
            useWeb3
              ? {
                  access_key: WEB3FORMS_KEY,
                  name: formData.name,
                  email: formData.email,
                  message: formData.message,
                  subject: `Portfolio enquiry from ${formData.name || "someone"}`,
                }
              : {
                  name: formData.name,
                  email: formData.email,
                  message: formData.message,
                  _subject: `Portfolio enquiry from ${formData.name || "someone"}`,
                  _template: "table",
                  _captcha: "false",
                }
          ),
        }
      );

      const data = await res.json().catch(() => ({}));
      const ok = res.ok && String(data.success) === "true";

      if (!ok) throw new Error(data.message || "Submission failed");

      Swal.fire({
        title: "Sent",
        text: "Thanks — I'll get back to you soon.",
        icon: "success",
        ...swalBase,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      const result = await Swal.fire({
        title: "Couldn't send automatically",
        html: "The form service is unavailable right now. Send it straight from your mail app instead — everything's pre-filled.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Open email app",
        cancelButtonText: "Cancel",
        ...swalBase,
      });
      if (result.isConfirmed) window.location.href = mailto;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        placeholder="Write your message"
        value={formData.message}
        onChange={handleChange}
        disabled={isSubmitting}
        required
        rows={5}
        className={`${inputClass} resize-none`}
      />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
        <a
          href={mailto}
          className="text-sm text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--text)] hover:underline"
        >
          or email me directly
        </a>
      </div>
    </form>
  );
}
