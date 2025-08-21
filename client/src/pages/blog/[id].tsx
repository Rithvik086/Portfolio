import { useEffect, useState } from "react";
import { useRoute } from "wouter";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
}

export default function BlogDetail() {
  const [match, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params) return;
    fetch("/src/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.posts.find(
          (p: BlogPost) => p.id === Number(params.id)
        );
        setPost(found || null);
        setLoading(false);
      });
  }, [params && params.id]);

  if (loading) return <div className="container-custom py-20">Loading...</div>;
  if (!post)
    return <div className="container-custom py-20">Blog post not found.</div>;

  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-custom max-w-2xl mx-auto">
        <a
          href="/blogs"
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
          Back to all blogs
        </a>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm">{post.date}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary border-border px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}
