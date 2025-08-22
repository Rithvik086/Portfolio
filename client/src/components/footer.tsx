import { Github, Linkedin, Mail } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024{" "}
              <span className="text-accent font-medium">Rithvik Rao</span>. All
              rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <a
              href="https://github.com/Rithvik086"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rithvik-rao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </button>

            {/* Quick Navigation */}
            <div className="hidden md:flex space-x-4 ml-4 pl-4 border-l border-border">
              <button
                onClick={() => setLocation("/projects")}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => setLocation("/blogs")}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
