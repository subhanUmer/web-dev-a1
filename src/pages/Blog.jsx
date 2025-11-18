import { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogPostsData from "../data/blogPosts.json";

const Blog = () => {
  const [posts] = useState(blogPostsData);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <section className="bg-gradient-to-br from-cyber-darker to-cyber-gray py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            The Secure Blog
          </h1>
          <p className="text-lg text-gray-300">
            Insights, tutorials, and analysis on the latest cyber threats, CTF
            write-ups, and defense strategies.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
