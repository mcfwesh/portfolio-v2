type ProjectReadMeDetails = {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  subcategory: string;
  author: string;
  slug: string;
  repo: string;
  content?: string;
};

export const GITHUB_BASE_URL = "https://raw.githubusercontent.com/mcfwesh";

export const projectReadMeDetails: ProjectReadMeDetails[] = [
  {
    title: "Ansible-Driven CI/CD for AWS EC2 Deployments",
    excerpt:
      "This project demonstrates a CI/CD pipeline using Jenkins and Ansible to deploy a Java Maven application within Docker containers on Amazon EC2 instances. It uses a dedicated Ansible server and leverages the AWS inventory plugin for dynamic EC2 discovery.",
    coverImage: "/assets/blog/k8s-prom-grafana.svg",
    date: "2025-03-21",
    category: "Cloud",
    subcategory: "DevOps",
    author: "Nathan Ojieabu",
    slug: "Ansible-Driven-CI-CD-Pipeline-for-Docker-Compose-on-AWS-EC2",
    repo: "Ansible-Driven-CI-CD-Pipeline-for-Docker-Compose-on-AWS-EC2",
  },
  {
    title: "CI/CD for AWS Infrastructure with Terraform and Jenkins",
    excerpt:
      "The project provisions a VPC, EC2 instances, and deploys Docker containers. It's all managed through Terraform scripts and a Jenkins pipeline, ensuring scalability and reliability. Key AWS services are used for hosting and managing application resources.",
    coverImage: "/assets/blog/k8s-prom-grafana.svg",
    date: "2025-03-21",
    category: "Cloud",
    subcategory: "DevOps",
    author: "Nathan Ojieabu",
    slug: "CI-CD-for-AWS-Infrastructure-with-Terraform-and-Jenkins",
    repo: "CI-CD-for-AWS-Infrastructure-with-Terraform-and-Jenkins",
  },
  {
    title: "Complete CI/CD Pipeline with AWS EKS and ECR",
    excerpt:
      "This project implements a complete CI/CD workflow that automatically builds a Java Maven application, packages it into a Docker container, pushes it to Amazon ECR, and deploys it to EKS. The pipeline includes version management, automated testing, and deployment verification.",
    coverImage: "/assets/blog/k8s-prom-grafana.svg",
    date: "2025-03-21",
    category: "Cloud",
    subcategory: "DevOps",
    author: "Nathan Ojieabu",
    slug: "Complete-CI-CD-Pipeline-with-AWS-EKS-and-ECR",
    repo: "Complete-CI-CD-Pipeline-with-AWS-EKS-and-ECR",
  },
  {
    title: "Kubernetes Monitoring with Prometheus and Grafana",
    excerpt:
      "This project monitors a Kubernetes microservices architecture using Prometheus and Grafana. It covers microservices, Redis, and a Node.js application.",
    coverImage: "/assets/blog/k8s-prom-grafana.svg",
    date: "2025-03-20",
    category: "Cloud",
    subcategory: "DevOps",
    author: "Nathan Ojieabu",
    slug: "Kubernetes-Monitoring-with-Prometheus-and-Grafana",
    repo: "Kubernetes-Monitoring-with-Prometheus-and-Grafana",
  },
  {
    title:
      "Exploring AWS Serverless: Building Scalable Solutions with API Gateway, Lambda",
    excerpt:
      "The blog post describes a project that utilizes various AWS services, including S3, Lambda, SES, SNS, and API Gateway, to build a serverless application that demonstrates the efficiency and versatility of serverless architecture in solving real-world challenges.",
    coverImage: "/assets/blog/serverless.svg",
    date: "2023-06-28",
    category: "Cloud",
    subcategory: "AWS",
    author: "Nathan Ojieabu",
    slug: "serverless-application",
    repo: "projects-aws",
  },
  {
    title: "Highly Available Web App: AWS & Terraform Deployment",
    excerpt:
      "The blog post outlines the design process and implementation of a highly available infrastructure on AWS using Terraform with a custom VPC, PostgreSQL RDS, autoscaling group, and load balancer for a React and Express web app.",
    coverImage: "/assets/blog/terraform_high_availability_archi.svg",
    date: "2023-07-01",
    category: "Cloud",
    subcategory: "AWS",
    author: "Nathan Ojieabu",
    slug: "highly-available-setup-terraform",
    repo: "projects-aws",
  },
  {
    title: "Database Migration from On-Premises to AWS",
    excerpt:
      "The blog post showcases the reliability and efficiency of AWS Database Migration Service (DMS) in migrating on-premises databases to AWS, illustrated through the migration of a web app with MariaDB using DMS.",
    coverImage: "/assets/blog/DMS.svg",
    date: "2023-06-21",
    category: "Cloud",
    subcategory: "AWS",
    author: "Nathan Ojieabu",
    slug: "DMS",
    repo: "projects-aws",
  },
  {
    title: "Scaling WordPress: Building a Resilient Architecture",
    excerpt:
      "The blog post takes readers on a journey to evolve the architecture of WordPress from a manually built single instance to a scalable and resilient architecture that can handle increasing demands and ensure high availability.",
    coverImage: "/assets/blog/wordpress_evolution.svg",
    date: "2023-06-22",
    category: "Cloud",
    subcategory: "AWS",
    author: "Nathan Ojieabu",
    slug: "webapp-evolution",
    repo: "projects-aws",
  },
];

export const fetchGitHubContentBySlug = async (
  slug: string
): Promise<string | undefined> => {
  const project = projectReadMeDetails.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`No project found for slug: ${slug}`);
  }
  const readmeUrl =
    project.subcategory === "AWS"
      ? `${GITHUB_BASE_URL}/${project.repo}/refs/heads/main/${project.slug}/README.md`
      : `${GITHUB_BASE_URL}/${project.repo}/refs/heads/github/README.md`;

  const res = await fetch(readmeUrl, { cache: "force-cache" });
  console.log(readmeUrl);

  if (!res.ok) {
    throw new Error(`Failed to fetch file: ${res.status} ${res.statusText}`);
  }

  const content = await res.text();
  project.content = content;

  return content;
};
