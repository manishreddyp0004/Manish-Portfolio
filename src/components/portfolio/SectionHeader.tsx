import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeader({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-16 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="text-accent-glow">{index}</span>
        <span className="h-px w-10 bg-border" />
        <span>{kicker}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-muted-foreground"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
