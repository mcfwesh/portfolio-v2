import type { Metadata } from "next";

import Blog from "../components/Blog";
import TransitionEffect from "../components/TransitionEffect";
import { getCategorisedPosts } from "../lib/blog-posts-api";

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
