import React, { Suspense } from "react";
const Navigation = React.lazy(() => import("@/components/navigation"));
const Hero = React.lazy(() => import("@/components/hero"));
const About = React.lazy(() => import("@/components/about"));
const Education = React.lazy(() => import("@/components/education"));
const Experience = React.lazy(() => import("@/components/experience"));
const Skills = React.lazy(() => import("@/components/skills"));
const Projects = React.lazy(() => import("@/components/projects"));
const Blog = React.lazy(() => import("@/components/blog"));
const Contact = React.lazy(() => import("@/components/contact"));
const Footer = React.lazy(() => import("@/components/footer"));
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import LazyLoadOnView from "@/components/LazyLoadOnView";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed bottom-6 right-6 z-[9999]">
        <AnimatedThemeToggler className="w-12 h-12 p-2 rounded-full bg-secondary hover:bg-accent transition-colors shadow-lg cursor-pointer border border-border" />
      </div>

      <Suspense
        fallback={<div className="w-full text-center py-8">Loading...</div>}
      >
        <Navigation />
      </Suspense>

      <LazyLoadOnView>
        <Hero />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <About />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Experience />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Education />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Skills />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Projects />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Blog />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Contact />
      </LazyLoadOnView>
      <LazyLoadOnView>
        <Footer />
      </LazyLoadOnView>
    </div>
  );
}
