import Image from "next/image";
import Link from "next/link";

import DateFormatter from "./DateFormatter";

type Items = {
  [key: string]: string;
};

export default function BlogPostPreview({ post }: { post: Items }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-light px-5  py-5 shadow-md shadow-dark dark:border-gray-700  dark:bg-gray-800 dark:shadow-light">
      <Link
        href={`/blog/${post.slug}`}
        className="transform rounded-lg shadow-md  transition duration-500 ease-in-out hover:scale-110 "
      >
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={1280}
          height={720}
        />
      </Link>
      <div className=" mt-6 flex flex-col justify-center space-y-3">
        <Link
          className="text-2xl font-bold tracking-tight text-gray-900 underline-offset-2 hover:underline dark:text-light"
          href={`/blog/${post.slug}`}
        >
          {post.title}
        </Link>
        <DateFormatter dateString={post.date} />
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}
