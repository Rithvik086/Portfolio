import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const skillCategories = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "📜" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Responsive", icon: "📱" },
      { name: "Tailwind", icon: "🎯" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "REST API", icon: "☁️" },
      { name: "EJS", icon: "📄" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "📡" },
      { name: "Firebase", icon: "🔥" },
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Terminal", icon: "💻" },
      { name: "VS Code", icon: "🔧" },
      { name: "Postman", icon: "📮" },
    ],
  };

  return (
    <section id="skills" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-background border border-border">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Backend
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Database
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Tools & Others
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.map((skill) => (
                    <Card key={skill.name} className="bg-background border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-3">{skill.icon}</div>
                        <span className="block font-medium">{skill.name}</span>
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
