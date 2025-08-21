import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CollabSphere",
      description:
        "A collaboration platform for developers, designers, and creators to post projects and form teams.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Express", "MongoDB", "JavaScript"],
      status: "In Development",
      statusColor: "bg-accent/20 text-accent",
      liveUrl: null,
      githubUrl: null,
      isPrivate: true,
    },
    {
      title: "ArtisanSpace",
      description:
        "A full-stack e-commerce platform for handicraft artisans to showcase products and connect with customers.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      technologies: ["MongoDB", "Express", "JavaScript", "Node.js", "EJS"],
      status: "Completed",
      statusColor: "bg-green-500/20 text-green-400",
      liveUrl: "https://artisanspace.onrender.com/",
      githubUrl: null,
      isPrivate: true,
    },
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-secondary border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <img
                  src={project.image}
                  alt={`${project.title} - Project showcase`}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge className={project.statusColor}>
                    {project.status}
                  </Badge>
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
                  <Button
                    variant="outline"
                    className="border-border hover:border-accent"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {project.isPrivate ? "Private" : "GitHub"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 px-8 py-3 transform hover:scale-105"
          >
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
