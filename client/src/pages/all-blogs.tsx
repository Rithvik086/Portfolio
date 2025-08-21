import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
};

export default function AllBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/src/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data.posts));
  }, []);

  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <a
          href="/"
          className="inline-flex items-center mb-6 text-accent hover:underline text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back to home
        </a>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">All Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="block group"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg">
                <CardContent className="p-8">
                  {/* Optionally add an image property to your JSON if you want to display images */}
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-accent/20 text-accent">
                      {post.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {post.description}
                  </p>
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
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
