import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Blog() {
  const [, setLocation] = useLocation();

  const blogPosts = [
    {
      id: 1,
      title: "Is India's Home Dominance in Test Fading?",
      excerpt:
        "Exploring recent challenges to India's dominance in home Test cricket and potential future implications.",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      category: "Sports",
      date: "October 27, 2024",
      tags: ["India", "Sports", "Cricket"],
      url: "https://rithvik086.github.io/Portfolio/blog-post.html?id=1",
    },
    {
      id: 2,
      title: "Is KMP the Next Big Thing in India?",
      excerpt:
        "Analyzing the potential and challenges for Kotlin Multiplatform in India, where it faces stiff competition from Flutter and React Native.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
      category: "Technology",
      date: "October 29, 2024",
      tags: ["Kotlin", "Technology", "Cross-Platform"],
      url: "https://rithvik086.github.io/Portfolio/blog-post.html?id=2",
    },
  ];

  return (
    <section id="blog" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sharing thoughts on technology, sports, and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="bg-background border-border hover:border-accent/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />

                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-accent/20 text-accent">
                    {post.category}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-secondary border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-accent hover:bg-accent hover:text-background px-3 py-1 rounded-md transition-colors duration-200"
                  onClick={() => setLocation(`/blog/${post.id}`)}
                >
                  <span className="inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-accent hover:bg-accent/90 px-8 py-3 transform hover:scale-105"
            onClick={() => setLocation("/blogs")}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
