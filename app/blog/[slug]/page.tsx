// app/posts/[slug]

import { getPostBySlug } from "@/app/lib/blog-posts-api";
import markdownToHtml from "@/app/lib/markdownToHtml";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { remark } from "remark";
import remarkToc from "remark-toc";
import DateFormatter from "@/app/components/DateFormatter";

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
    <div className="flex w-full flex-col items-center justify-center space-y-6">
      <h1 className=" text-center text-4xl font-bold  md:text-8xl">
        {post.title}
      </h1>
      <div className="flex flex-col space-y-1">
        <span className="text-gray-500">{post.author.name}</span>
        <DateFormatter dateString={post.date} />
      </div>

      <Image src={post.coverImage} width="1280" height="720" alt={post.title} />
      <ReactMarkdown
        // remarkPlugins={[remarkGfm, remarkToc]}
        // rehypePlugins={[rehypeRaw]}
        className="prose prose-sm w-full max-w-3xl dark:prose-invert  md:prose-lg"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
