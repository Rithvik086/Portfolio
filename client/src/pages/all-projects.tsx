import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  date: string;
  status: string;
  description: string;
  content: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export default function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/src/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-secondary border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Optionally add an image property to your JSON if you want to display images */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge
                    className={
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "In-progress"
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} - Project showcase`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                )}
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.technologies || []).map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-background border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl ? (
                    <Button
                      asChild
                      className="flex-1 bg-accent hover:bg-accent/90"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-accent hover:bg-accent/90"
                      disabled
                    >
                      View Details
                    </Button>
                  )}
                  {project.githubUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="border-border hover:border-accent"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-border hover:border-accent"
                      disabled
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Private
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
