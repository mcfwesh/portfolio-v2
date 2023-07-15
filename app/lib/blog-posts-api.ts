import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Items = {
  [key: string]: string;
};

export type CategorisedPost = {
  title: string;
  posts: Items[];
};

const postsDirectory = join(process.cwd(), "app", "blog", "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getCategorisedPosts = () => {
  const posts = getAllPosts([
    "title",
    "date",
    "excerpt",
    "category",
    "coverImage",
    "slug",
  ]);
  return posts.reduce(
    (acc: CategorisedPost[], post) => {
      const category = post.category;

      if (category.toLowerCase() === "cloud") {
        acc[0].posts.push(post);
      }
      if (category.toLowerCase() === "fullstack development") {
        acc[1].posts.push(post);
      }
      // console.log(acc);
      return acc;
    },
    [
      { title: "Cloud", posts: [] },
      { title: "Fullstack Development", posts: [] },
    ]
  );
};
