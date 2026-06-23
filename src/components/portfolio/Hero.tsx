import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const rotX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const tx = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const ty = useTransform(sy, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-1/4 top-1/4 h-[60vh] w-[60vh] rounded-full bg-accent/30 blur-[120px] animate-aurora" />
        <div className="absolute right-0 top-0 h-[55vh] w-[55vh] rounded-full bg-primary/30 blur-[120px] animate-aurora [animation-delay:-8s]" />
        <div className="absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full bg-accent-glow/20 blur-[120px] animate-aurora [animation-delay:-14s]" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-[min(1200px,92vw)] pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse-glow" />
          Hyderabad, India · Software Developer
        </motion.div>

        <motion.h1
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
          className="font-display text-[clamp(2.6rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          {["Hi, I'm", "Manish", "Reddy."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.5 + i * 0.12,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block ${i === 1 ? "text-gradient" : ""}`}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          I build <span className="text-foreground">software solutions</span>{" "}
          with code, intelligence, and creativity — across backend systems and AI-powered apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">View Projects</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-border">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-accent-glow"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
