import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about building innovative solutions and constantly learning new technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hi there! I'm Rithvik, a dedicated computer science student currently in my second year of BTech at the Indian Institute of Information Technology. I'm passionate about building innovative web/mobile applications and tackling complex challenges with the latest technologies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">8.95</div>
                  <div className="text-muted-foreground">CGPA</div>
                </CardContent>
              </Card>
              <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">3rd Year</div>
                  <div className="text-muted-foreground">BTech CSE</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="bg-background border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-accent w-6 h-6" />
                  <span className="ml-4">November 1, 2005</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-accent w-6 h-6" />
                  <span className="ml-4">rithvikrao2005@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-accent w-6 h-6" />
                  <span className="ml-4">Daman & Diu, India</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-accent w-6 h-6" />
                  <span className="ml-4">IIIT Sri City</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
