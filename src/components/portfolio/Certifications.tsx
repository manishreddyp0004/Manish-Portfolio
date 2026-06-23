import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { name: "MongoDB Basics for Students", issuer: "MongoDB University", glyph: "M" },
  { name: "Generative AI", issuer: "Google Cloud", glyph: "G" },
  { name: "Python Essentials", issuer: "Cisco Networking Academy", glyph: "Py" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <SectionHeader index="05" kicker="Certifications" title={<>Badges along the way.</>}>
          A few recognitions from the platforms I learn and build with.
        </SectionHeader>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex items-center gap-5 overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
              <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background/60 font-display text-lg font-semibold text-accent-glow">
                {c.glyph}
              </div>
              <div className="relative">
                <div className="font-display text-base font-medium tracking-tight">{c.name}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {c.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
