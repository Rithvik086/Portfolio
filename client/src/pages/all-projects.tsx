import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
                  <Badge>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-background border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
