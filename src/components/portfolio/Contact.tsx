import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const socials = [
  { label: "Email", href: "mailto:hello@varshith.ai", value: "hello@varshith.ai" },
  { label: "GitHub", href: "https://github.com/", value: "@varshith" },
  { label: "LinkedIn", href: "https://linkedin.com/", value: "in/varshith" },
  { label: "Location", href: "#", value: "Amaravati, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="05" kicker="Contact" title={<>Let's build something intelligent.</>}>
          Working on a model, a product, or just a wild idea? I'd love to hear about it.
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass space-y-6 rounded-3xl p-8 md:p-10"
          >
            <Field label="Your name" name="name" placeholder="Ada Lovelace" />
            <Field label="Email" type="email" name="email" placeholder="you@domain.com" />
            <Field
              label="What's on your mind"
              name="message"
              placeholder="A short note about the project, the timeline, anything…"
              textarea
            />
            <button
              type="submit"
              disabled={sent}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <span>{sent ? "Message queued ✦" : "Send message"}</span>
              {!sent && (
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between gap-8"
          >
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-accent-glow/60"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="flex items-center gap-3 font-display text-lg text-foreground">
                      {s.value}
                      <svg
                        className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Varshith Julakanti · Built with care.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full bg-transparent pt-6 pb-2 text-foreground placeholder:text-muted-foreground/40 outline-none";
  return (
    <label className="group relative block border-b border-border focus-within:border-accent-glow transition-colors">
      <span className="absolute left-0 top-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
