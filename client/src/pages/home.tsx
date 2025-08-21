import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
