"use client";
import BlogPostPreview from "@/app/components/BlogPostPreview";
import Section from "@/app/components/Section";
import { CloudIcon, CodeIcon, HourglassIcon } from "./Icons";
import {
  CategorisedPost,
  Items,
  getAllPosts,
  getCategorisedPosts,
} from "@/app/lib/blog-posts-api";
import TransitionEffect from "./TransitionEffect";

const Blog = ({
  categorisedPosts,
}: {
  categorisedPosts: CategorisedPost[];
}) => {
  console.log(categorisedPosts);
  return (
    <>
      <TransitionEffect />
      <Section title="Blog Posts" sectionId="blog-posts">
        {categorisedPosts.map((category, index) => (
          <div key={index}>
            <div className="flex items-center  space-x-6">
              {category.title === "Cloud" ? <CloudIcon /> : <CodeIcon />}
              <h2 className="text-center text-2xl md:text-4xl">
                {category.title}
              </h2>
            </div>
            <div className="mx-auto my-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {category.posts.length === 0 ? (
                <div className="col-span-2 flex flex-col items-center justify-center space-y-3">
                  <HourglassIcon />
                  <span className="text-center text-2xl"> Coming soon...</span>
                </div>
              ) : (
                category.posts.map((post, index) => (
                  <div key={index}>
                    <BlogPostPreview post={post} />
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Blog;
