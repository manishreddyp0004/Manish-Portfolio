import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Java", blurb: "Core language for backend & OOP-driven systems.", glyph: "Jv" },
  { name: "Python", blurb: "Scripting, automation and AI experimentation.", glyph: "Py" },
  { name: "JavaScript", blurb: "Full-stack web — from Node APIs to UI.", glyph: "JS" },
  { name: "C", blurb: "Systems thinking and low-level fundamentals.", glyph: "C" },
  { name: "Data Structures & Algorithms", blurb: "Daily practice — the muscle behind clean solutions.", glyph: "DSA" },
  { name: "DBMS & SQL", blurb: "Schema design, queries, and relational modeling.", glyph: "DB" },
  { name: "Node.js & REST APIs", blurb: "Designing and shipping backend services.", glyph: "Ndx" },
  { name: "MongoDB · Git · Linux", blurb: "NoSQL, version control, and a comfortable shell.", glyph: "Ops" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="02" kicker="Capabilities" title={<>Tools of the trade.</>}>
          A toolkit shaped by curiosity — equal parts core CS, engineering and craft.
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
