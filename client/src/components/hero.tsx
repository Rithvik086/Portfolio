import { Button } from "@/components/ui/button";
import rithvikImg from "../assets/rithvik.jpeg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Rithvik</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A dedicated computer science student at IIIT, passionate about
              building innovative web applications and tackling complex
              challenges with the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://rithvik086.github.io/Resume_Rithvik.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                   Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img
                src={rithvikImg}
                alt="Rithvik Rao - Profile Photo"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-accent/20"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
