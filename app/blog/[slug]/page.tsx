// app/posts/[slug]

import { getPostBySlug } from "@/app/lib/blog-posts-api";
import markdownToHtml from "@/app/lib/markdownToHtml";
import BlogPost from "@/app/components/BlogPost";
import TransitionEffect from "@/app/components/TransitionEffect";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "author",
    "content",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      {" "}
      <TransitionEffect />
      <BlogPost post={post} content={content} />
    </>
  );
}
