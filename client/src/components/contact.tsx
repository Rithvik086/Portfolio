import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Mail,
  MapPin,
  GraduationCap,
  Send,
  Github,
  Linkedin,
  Instagram,
  Code,
} from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  // WhatsApp number in international format, e.g., 919876543210 (no + or spaces)
  // Your email address
  const myEmail = "rithvikrao2005@gmail.com";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rithvik-rao-8600882a2/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Rithvik086",
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/u/rithvikrao2005/",
    },
  ];

  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-secondary border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-background border-border focus:ring-accent focus:border-accent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background border-border focus:ring-accent focus:border-accent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="bg-background border-border focus:ring-accent focus:border-accent"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="bg-background border-border focus:ring-accent focus:border-accent resize-vertical"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105"
                >
                  Send via Email
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-accent w-6 h-6" />
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:rithvikrao2005@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        rithvikrao2005@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-accent w-6 h-6" />
                    <div className="ml-4">
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Daman & Diu, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="text-accent w-6 h-6" />
                    <div className="ml-4">
                      <p className="font-medium">Institution</p>
                      <p className="text-muted-foreground">IIIT Sri City</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Button
                        key={link.name}
                        asChild
                        variant="outline"
                        className="p-4 h-auto bg-background border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300 mr-3" />
                          <span className="font-medium">{link.name}</span>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
