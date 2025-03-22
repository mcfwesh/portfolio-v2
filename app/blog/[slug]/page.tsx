import BlogPost from "@/app/components/BlogPost";
import TransitionEffect from "@/app/components/TransitionEffect";
import {
  fetchGitHubContentBySlug,
  projectReadMeDetails,
} from "@/app/services/githubContentService";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = projectReadMeDetails.find((post) => post.slug === params.slug);
  const content = await fetchGitHubContentBySlug(params.slug);

  if (!content || !post) return null;
  return (
    <>
      {" "}
      <TransitionEffect />
      <BlogPost post={post} content={content} />
    </>
  );
}
