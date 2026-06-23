import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const lines = [
  "I'm an AI engineer fascinated by the space between research and reality —",
  "the place where a paper becomes a product, and a model starts to feel useful.",
  "My work lives across machine learning, deep learning, computer vision and MLOps;",
  "from training networks on medical imagery to shipping models that hold up in production.",
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="01" kicker="About" title={<>A short story.</>} />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-2 font-display text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.35] tracking-tight">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={i === 1 || i === 3 ? "text-gradient" : "text-foreground"}>
                  {line}
                </span>
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="glass relative overflow-hidden rounded-2xl p-8"
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <dl className="relative space-y-6">
              {[
                ["Based in", "Amaravati, AP — India"],
                ["Focus", "AI · ML · DL · CV · MLOps"],
                ["Stack", "Python · PyTorch · TensorFlow"],
                ["Currently", "Open to roles & collaborations"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
