import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { Marquee } from "@/components/portfolio/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varshith Julakanti — AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Varshith Julakanti — AI Engineer building intelligent, AI-driven systems across ML, DL, Computer Vision and MLOps.",
      },
      { property: "og:title", content: "Varshith Julakanti — AI Engineer" },
      {
        property: "og:description",
        content:
          "AI Engineer based in Amaravati. Deep learning, computer vision, MLOps.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Loader onDone={() => setReady(true)} />
      {ready && (
        <>
          <Nav />
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </>
      )}
    </main>
  );
}
