import { projectReadMeDetails } from "../services/githubContentService";

export type Items = {
  [key: string]: string;
};

export type CategorisedPost = {
  title: string;
  posts: Items[];
};

export const getCategorisedPosts = () => {
  const posts = projectReadMeDetails.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );
  return posts.reduce(
    (acc: CategorisedPost[], post) => {
      const category = post.category;

      if (category.toLowerCase() === "cloud") {
        acc[0].posts.push(post);
      }
      if (category.toLowerCase() === "fullstack development") {
        acc[1].posts.push(post);
      }
      return acc;
    },
    [
      { title: "Cloud", posts: [] },
      { title: "Fullstack Development", posts: [] },
    ]
  );
};
