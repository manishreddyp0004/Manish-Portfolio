import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Marquee } from "@/components/portfolio/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patlolla Manish Reddy — Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Patlolla Manish Reddy — CS undergraduate building software solutions across backend systems, DSA and AI-powered apps.",
      },
      { property: "og:title", content: "Patlolla Manish Reddy — Software Developer" },
      {
        property: "og:description",
        content:
          "Software developer based in Hyderabad. Java, Python, backend systems and AI.",
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
          <Certifications />
          <Contact />
        </>
      )}
    </main>
  );
}
