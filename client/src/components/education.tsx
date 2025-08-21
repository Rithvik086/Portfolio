import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary border-border hover:border-accent/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  {/* Photo removed */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Bachelor of Technology
                    </h3>
                    <p className="text-accent font-medium">
                      Computer Science & Engineering
                    </p>
                    <p className="text-muted-foreground">
                      Indian Institute of Information Technology, Sri City
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-accent/20 px-4 py-2 rounded-lg mb-2">
                    <span className="text-accent font-semibold">
                      2023 - 2027
                    </span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">
                      CGPA: 8.95
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing a comprehensive degree in Computer Science with a focus
                on software engineering, web development, and system design.
                Actively engaged in various projects involving modern web
                technologies and collaborative development practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
