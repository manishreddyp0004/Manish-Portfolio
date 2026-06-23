import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    n: "01",
    title: "Brain Tumor Detection",
    desc: "Deep CNN-based classification pipeline over MRI scans, with explainability via Grad-CAM heatmaps surfacing the regions driving predictions.",
    stack: ["PyTorch", "OpenCV", "Grad-CAM", "Streamlit"],
    accent: "from-accent/40 to-primary/40",
  },
  {
    n: "02",
    title: "Skin Disease Detection — HAM10000",
    desc: "Transfer-learned ResNet/EfficientNet ensemble trained on HAM10000 dermatoscopic images, balanced sampling and TTA for clinical-grade accuracy.",
    stack: ["TensorFlow", "Keras", "HAM10000", "Albumentations"],
    accent: "from-primary/40 to-accent-glow/40",
  },
  {
    n: "03",
    title: "Financial Health Assistant for Students",
    desc: "An AI assistant that ingests spending habits, predicts cashflow gaps and recommends nudges — built around an LLM with retrieval over personal data.",
    stack: ["Python", "LangChain", "FastAPI", "React"],
    accent: "from-accent-glow/40 to-accent/40",
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const ry = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 md:p-10"
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60`}
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-accent-glow">{p.n}</span>
            <span className="h-px w-8 bg-border" />
            <span>Case study</span>
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 text-muted-foreground md:text-lg">{p.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-border bg-background/60 text-foreground transition-all duration-500 group-hover:border-accent-glow group-hover:bg-accent-glow group-hover:text-background">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="03" kicker="Selected work" title={<>Things I've shipped.</>}>
          A small, opinionated set of projects that show how I think about AI in practice.
        </SectionHeader>
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
