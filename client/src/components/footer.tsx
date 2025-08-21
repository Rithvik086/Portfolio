export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024 <span className="text-accent font-medium">Rithvik Rao</span>. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://rithvik086.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="https://rithvik086.github.io/Portfolio/blogs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="https://rithvik086.github.io/Portfolio/projects.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
