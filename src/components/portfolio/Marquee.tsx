import { motion } from "motion/react";

const items = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "MLOps",
  "PyTorch",
  "TensorFlow",
  "Python",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-border/60 py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-3xl tracking-tight text-muted-foreground md:text-5xl"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-accent-glow" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
