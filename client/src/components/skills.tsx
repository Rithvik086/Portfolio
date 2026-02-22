import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Coffee,
  Code2,
  Zap,
  Database,
  Server,
  GitBranch,
  Github,
  Box,
  Terminal,
  Mail,
  Smartphone,
  Palette,
  Wind,
  Flame,
  HardDrive,
  Diamond,
  AtomIcon,
  Cloud,
  Settings,
} from "lucide-react";

export default function Skills() {
  const skillCategories = {
    languages: [
      { name: "Java", icon: Coffee },
      { name: "Kotlin", icon: Code2 },
      { name: "C", icon: Terminal },
      { name: "C++", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Zap },
      { name: "TypeScript", icon: Code2 },
      { name: "SQL", icon: Database },
    ],
    frontend: [
      { name: "React", icon: AtomIcon },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "Next.js", icon: Box },
      { name: "Tailwind", icon: Wind },
      { name: "Redux", icon: Settings },
    ],
    backend: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Box },
      { name: "REST API", icon: Zap },
      { name: "EJS", icon: Code2 },
    ],
    database: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Redis", icon: Database },
      { name: "Firebase", icon: Flame },
      { name: "MySQL", icon: Database },
      { name: "SQLite3", icon: HardDrive },
      { name: "Prisma", icon: Diamond },
    ],
    tools: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Box },
      { name: "Terminal", icon: Terminal },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: Mail },
      { name: "Android Studio", icon: Smartphone },
      { name: "AWS", icon: Cloud },
      { name: "Render", icon: Cloud },
      { name: "Vercel", icon: Cloud },
    ],
  };

  return (
    <section id="skills" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-background border border-border">
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                Languages
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                Database
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                Tools & Others
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <Card
                      key={skill.name}
                      className="bg-background border-border hover:border-accent/50 transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-accent mb-3 flex justify-center">
                          <skill.icon size={32} />
                        </div>
                        <span className="block font-medium text-sm">
                          {skill.name}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
