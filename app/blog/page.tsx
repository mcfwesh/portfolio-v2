import Blog from "../components/Blog";
import PostPreview from "../components/BlogPostPreview";
import Section from "../components/Section";
import { Items, getAllPosts, getCategorisedPosts } from "../lib/blog-posts-api";

const BlogPage = () => {
  const categorisedPosts = getCategorisedPosts();
  console.log(getCategorisedPosts());

  return <Blog categorisedPosts={categorisedPosts} />;
};

export default BlogPage;
