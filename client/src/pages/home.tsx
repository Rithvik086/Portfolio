import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import FadeInSection from "@/components/FadeInSection"; // 👈 new wrapper

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed bottom-6 right-6 z-[9999]">
        <AnimatedThemeToggler className="w-12 h-12 p-2 rounded-full bg-secondary hover:bg-accent transition-colors shadow-lg cursor-pointer border border-border" />
      </div>

      <Navigation />

      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Education />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Blog />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
