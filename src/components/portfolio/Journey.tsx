import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const milestones = [
  {
    year: "2024 — Present",
    title: "AI Engineer",
    org: "Independent · Research & Builds",
    body: "Building deep learning systems across vision and language. Focus on shipping models that work outside the notebook.",
  },
  {
    year: "2023",
    title: "Deep Learning in Healthcare",
    org: "Brain Tumor & Skin Disease Detection",
    body: "Trained, evaluated and packaged classification models for medical imaging — with attention on explainability and bias.",
  },
  {
    year: "2022",
    title: "Machine Learning Foundations",
    org: "Coursework · Kaggle · Open Source",
    body: "Got serious about ML — classical models, statistics, evaluation, and the boring-but-important parts of MLOps.",
  },
  {
    year: "2021",
    title: "First Python Project",
    org: "Started the journey",
    body: "Wrote my first lines of Python. Quickly fell down the rabbit hole of computer vision and never came back.",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="04" kicker="Journey" title={<>Connecting the dots.</>}>
          A timeline of how I got here — and where I'm headed next.
        </SectionHeader>

        <div ref={ref} className="relative pl-8 md:pl-16">
          {/* base line */}
          <div className="absolute left-2 top-0 h-full w-px bg-border md:left-6" />
          {/* progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 top-0 w-px bg-gradient-to-b from-accent-glow via-primary to-accent md:left-6"
          />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full bg-background ring-2 ring-accent-glow md:-left-[3.3rem]" />
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-glow">
                  {m.year}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {m.title}
                </h3>
                <div className="mt-1 text-sm text-muted-foreground">{m.org}</div>
                <p className="mt-4 max-w-2xl text-muted-foreground">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
