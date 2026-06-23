import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex w-[min(1200px,92vw)] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <span className="font-display text-sm font-bold">V</span>
              <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse-glow -z-10" />
            </span>
            <span className="font-display text-sm font-medium tracking-tight">
              Varshith<span className="text-muted-foreground">.ai</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-glow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all hover:border-accent-glow hover:bg-accent-glow/10 md:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse-glow" />
            Available
          </a>
        </div>
      </motion.header>
      <motion.div
        style={{ scaleX: x }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accent-glow to-accent"
      />
    </>
  );
}
