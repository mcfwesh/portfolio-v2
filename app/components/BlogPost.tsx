"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkSlug from "remark-slug";

import DateFormatter from "@/app/components/DateFormatter";
import { Items } from "@/app/lib/blog-posts-api";

const BlogPost = ({ post, content }: { post: Items; content: string }) => {
  return (
    <section className="max-w-screen-xl">
      <div className="flex w-full flex-col items-center justify-center space-y-6">
        <h1 className=" text-center text-4xl font-bold  md:text-8xl">
          {post.title}
        </h1>
        <div className="flex flex-col items-center space-y-1">
          <span className="text-gray-500">{post.author}</span>
          <DateFormatter dateString={post.date} />
        </div>

        <Image
          src={post.coverImage}
          width="1280"
          height="720"
          alt={post.title}
        />
        <ReactMarkdown
          className="prose prose-sm w-full max-w-3xl dark:prose-invert  md:prose-lg"
          remarkPlugins={[remarkSlug]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogPost;
