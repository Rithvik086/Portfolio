import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description?: string;
  bulletPoints?: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Soundverse AI (Remote)",
    position: "Full Stack Engineer Intern",
    duration: "October 2025 – January 2026",
    description: "At Soundverse AI, I worked as a Full Stack Engineer Intern on a production React application used by 100K+ active users. My role focused on shipping user-facing features, improving performance and stability, and working closely with backend engineers to integrate AI-powered systems in a fast-moving startup environment.",
    technologies: ["React.js", "Stripe", "APIs", "AI Tools", "Web Performance"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and the roles I've taken on to build my skills and contribute to projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold">{exp.position}</CardTitle>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.description && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                )}
                {exp.bulletPoints && (
                  <ul className="text-muted-foreground mb-4 space-y-2">
                    {exp.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3">
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
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
