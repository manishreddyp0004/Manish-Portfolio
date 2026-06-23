import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const skills = [
  {
    name: "Artificial Intelligence",
    blurb: "Designing intelligent systems that reason, perceive and adapt.",
    glyph: "AI",
  },
  {
    name: "Machine Learning",
    blurb: "Classical ML, feature engineering, evaluation and tuning.",
    glyph: "ML",
  },
  {
    name: "Deep Learning",
    blurb: "CNNs, Transformers, custom architectures and transfer learning.",
    glyph: "DL",
  },
  {
    name: "Computer Vision",
    blurb: "Detection, classification and segmentation on real imagery.",
    glyph: "CV",
  },
  {
    name: "Python",
    blurb: "Day-to-day language — clean, typed, well-tested.",
    glyph: "Py",
  },
  {
    name: "TensorFlow / PyTorch",
    blurb: "Two frameworks, one mindset: ship the model.",
    glyph: "TF",
  },
  {
    name: "MLOps",
    blurb: "From notebook to endpoint — pipelines, monitoring, reproducibility.",
    glyph: "Ops",
  },
  {
    name: "Data & Tooling",
    blurb: "NumPy, Pandas, OpenCV, Hugging Face, Docker, Git.",
    glyph: "Δ",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="02" kicker="Capabilities" title={<>Tools of the trade.</>}>
          A toolkit shaped by curiosity — equal parts research, engineering and craft.
        </SectionHeader>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent-glow/50"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold text-accent-glow/80 transition-transform duration-500 group-hover:scale-110">
                  {s.glyph}
                </span>
              </div>
              <h3 className="font-display text-lg font-medium tracking-tight">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
