import Blog from "../components/Blog";
import PostPreview from "../components/BlogPostPreview";
import Section from "../components/Section";
import TransitionEffect from "../components/TransitionEffect";
import { Items, getAllPosts, getCategorisedPosts } from "../lib/blog-posts-api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nathan Ojieabu",
  description: "Blog posts by Nathan Ojieabu",
};

const BlogPage = () => {
  const categorisedPosts = getCategorisedPosts();

  return (
    <>
      <TransitionEffect />
      <Blog categorisedPosts={categorisedPosts} />
    </>
  );
};

export default BlogPage;
