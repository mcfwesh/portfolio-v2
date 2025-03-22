type ProjectReadMeDetails = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  author: string;
  url: string;
  slug: string;
  content?: string;
};

const GITHUB_BASE_URL =
  "https://raw.githubusercontent.com/mcfwesh/projects-aws/refs/heads/main";

export const projectReadMeDetails: ProjectReadMeDetails[] = [
  {
    title:
      "Exploring AWS Serverless: Building Scalable Solutions with API Gateway, Lambda",
    excerpt:
      "The blog post describes a project that utilizes various AWS services, including S3, Lambda, SES, SNS, and API Gateway, to build a serverless application that demonstrates the efficiency and versatility of serverless architecture in solving real-world challenges.",
    coverImage: "/assets/blog/serverless.svg",
    date: "2023-06-28",
    category: "Cloud",
    author: "Nathan Ojieabu",
    url: `${GITHUB_BASE_URL}/serverless-application/README.md`,
    slug: "serverless-application",
  },
  {
    title: "Highly Available Web App: AWS & Terraform Deployment",
    excerpt:
      "The blog post outlines the design process and implementation of a highly available infrastructure on AWS using Terraform with a custom VPC, PostgreSQL RDS, autoscaling group, and load balancer for a React and Express web app.",
    coverImage: "/assets/blog/terraform_high_availability_archi.svg",
    date: "2023-07-01",
    category: "Cloud",
    author: "Nathan Ojieabu",
    url: `${GITHUB_BASE_URL}/highly-available-setup-terraform/README.md`,
    slug: "highly-available-setup-terraform",
  },
  {
    title: "Database Migration from On-Premises to AWS",
    excerpt:
      "The blog post showcases the reliability and efficiency of AWS Database Migration Service (DMS) in migrating on-premises databases to AWS, illustrated through the migration of a web app with MariaDB using DMS.",
    coverImage: "/assets/blog/DMS.svg",
    date: "2023-06-21",
    category: "Cloud",
    author: "Nathan Ojieabu",
    url: `${GITHUB_BASE_URL}/DMS/README.md`,
    slug: "DMS",
  },
  {
    title: "Scaling WordPress: Building a Resilient Architecture",
    excerpt:
      "The blog post takes readers on a journey to evolve the architecture of WordPress from a manually built single instance to a scalable and resilient architecture that can handle increasing demands and ensure high availability.",
    coverImage: "/assets/blog/wordpress_evolution.svg",
    date: "2023-06-22",
    category: "Cloud",
    author: "Nathan Ojieabu",
    url: `${GITHUB_BASE_URL}/webapp-evolution/README.md`,
    slug: "webapp-evolution",
  },
];

export const fetchGitHubContentBySlug = async (
  slug: string
): Promise<string | undefined> => {
  const project = projectReadMeDetails.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`No project found for slug: ${slug}`);
  }
  const readmeUrl = project.url;
  const res = await fetch(readmeUrl, { cache: "force-cache" });

  if (!res.ok) {
    throw new Error(`Failed to fetch file: ${res.status} ${res.statusText}`);
  }

  const content = await res.text();
  project.content = content;

  return content;
};
