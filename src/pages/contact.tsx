import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { socials } from "@/lib/portfolio-data";
import { usePageMeta } from "@/lib/use-page-meta";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message is a little short").max(2000),
});

export default function Contact() {
  usePageMeta(
    "Contact — Abdul Moiz",
    "Get in touch with Abdul Moiz about freelance projects, collaborations, or full-time opportunities.",
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }
    setErrors({});
    // Static site: hand off to the user's mail client, pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`,
    );
    window.location.href = `${socials.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pt-24">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">Contact</p>
        <h1 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
          Let's <span className="text-gradient">talk</span>.
        </h1>
        <p className="mt-4 text-beige-muted">
          Have a project, an idea, or just want to say hi? Drop a message below — I read everything.
        </p>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={onSubmit}
          className="glass-card p-8"
          noValidate
        >
          <Field label="Name" error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="input"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@domain.com"
              className="input"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me a bit about your project…"
              rows={6}
              className="input resize-y"
            />
          </Field>

          <button
            type="submit"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Send className="h-4 w-4" /> Send message
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm text-beige-muted">
              Your mail app should have opened with your message ready to send.
            </p>
          )}

          <style>{`
            .input {
              width: 100%;
              background: oklch(0.90 0.03 80 / 0.05);
              border: 1px solid oklch(0.90 0.03 80 / 0.10);
              border-radius: 0.75rem;
              padding: 0.75rem 1rem;
              color: oklch(0.90 0.03 80);
              font-size: 0.875rem;
              outline: none;
              transition: border-color .2s, background .2s, box-shadow .2s;
            }
            .input::placeholder { color: oklch(0.68 0.025 75 / 0.7); }
            .input:focus {
              border-color: oklch(0.72 0.16 295 / 0.55);
              box-shadow: 0 0 0 3px oklch(0.72 0.16 295 / 0.18);
              background: oklch(0.90 0.03 80 / 0.08);
            }
          `}</style>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card flex flex-col justify-between p-8"
        >
          <div>
            <h2 className="font-display text-lg text-foreground">Elsewhere</h2>
            <p className="mt-2 text-sm text-beige-muted">
              Prefer another channel? Find me here.
            </p>
            <div className="mt-6 space-y-3">
              <SocialLink
                href={socials.email}
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={socials.emailDisplay}
              />
              <SocialLink
                href={socials.github}
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value={socials.githubDisplay}
              />
              <SocialLink
                href={socials.linkedin}
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value={socials.linkedinDisplay}
              />
            </div>
          </div>
          <p className="mt-8 text-xs text-beige-muted">Usually replies within 1–2 days.</p>
        </motion.aside>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-beige-muted">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SocialLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/10 hover:bg-white/[0.05]"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-beige">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] text-beige-muted">{label}</span>
        <span className="text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}
