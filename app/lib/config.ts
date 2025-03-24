import AnsibleProjectImage from "@/public/assets/blog/ansible-jenkins.drawio.svg";
import DMSProjectImage from "@/public/assets/blog/DMS.svg";
import EKSECRImage from "@/public/assets/blog/eks-ecr-jenkins.drawio.svg";
import KubePromGrafana from "@/public/assets/blog/k8s-prom-grafana.svg";
import KubeHelmImage from "@/public/assets/blog/kube-helm.drawio.svg";
import ServerlessProjectImage from "@/public/assets/blog/serverless.svg";
import TerraformProjectImage from "@/public/assets/blog/terraform_high_availability_archi.svg";
import TerraformJenkinsImage from "@/public/assets/blog/terraform-jenkins-ec2.drawio.svg";
import WordPressProjectImage from "@/public/assets/blog/wordpress_evolution.svg";
import ExpenseAppImage from "@/public/assets/expense-app.svg";
import H2AtlasImage from "@/public/assets/h2atlas.svg";

import {
  AnsibleIcon,
  AWSIcon,
  AzureIcon,
  cloudFormationIcon,
  CloudIcon,
  CodeIcon,
  DockerIcon,
  GithubIcon,
  GrafanaIcon,
  HandlebarsIcon,
  HelmIcon,
  JavascriptIcon,
  JenkinsIcon,
  KubernetesIcon,
  linkedinIcon,
  LinuxIcon,
  MongoIcon,
  NetworkIcon,
  NodeJsIcon,
  PostgresIcon,
  PrometheusIcon,
  PythonIcon,
  ReactIcon,
  TerraformIcon,
  TypescriptIcon,
} from "../components/Icons";

const config = {
  name: "Nathan Ojieabu",
  email: "nathanojieabu@gmail.com",
  github: { url: "https://github.com/mcfwesh", logo: GithubIcon },
  linkedin: {
    url: "https://www.linkedin.com/in/nathanojieabu/",
    logo: linkedinIcon,
  },
  repo: "https://github.com/Nathan-Ojieabu/portfolio",
  role: "Full-stack Cloud Developer",
  description:
    "As a Full-stack Cloud Developer, I deliver secure and scalable cloud solutions with a security focus. Check out my projects and blog posts for more information.",
  phone: "+1 (587) 809-0747",
  location: "Toronto, ON, Canada",
  navbar: {
    items: [
      {
        text: "About",
        url: "/about",
      },
      {
        text: "Projects",
        url: "/projects",
      },
      {
        text: "Blog",
        url: "/blog",
      },
    ],
  },
  hero: {
    cta: [
      {
        text: "Resume",
        url: "https://drive.google.com/file/d/1IwjKYoNNzssOO0Zpiy2WoNjs009sCzG5/view?usp=drive_link",
      },
      {
        text: "Contact",
        url: "mailto:nathanojieabu@gmail.com",
      },
    ],
    ctaSpinner: {
      innerText: "Hire Me",
      outerText: "Cloud Developer . Fullstack Developer . ",
      url: "mailto:nathanojieabu@gmail.com",
    },
  },
  about: {
    image: "/profile.jpg",
    description: [
      {
        paragraph: "1",
        text: `I'm a Cloud/DevOps engineer and full stack developer—a combination that helps me create tech that's practical and user-friendly.`,
      },
      {
        paragraph: "2",
        text: `On the infrastructure side, I work with AWS, Azure, and Kubernetes to build stable environments. For development, I enjoy crafting React frontends and Node.js backends, sometimes using Python too.`,
      },
      {
        paragraph: "3",
        text: `My international background (Nigeria → Germany → Canada) has taught me to adapt and communicate clearly in any situation. I'm passionate about solving technical challenges and making technology beneficial for everyone.`,
      },
      {
        paragraph: "4",
        text: `I believe technology should simplify life, not complicate it. That's what drives my work, from infrastructure automation to user interface design. `,
      },
    ],
    careerSummary: [
      {
        title: "Years of Experience",
        description: new Date().getFullYear() - 2020,
      },
      { title: "Certifications", description: 5 },
      { title: "Projects Completed", description: 9 },
      { title: "Articles", description: 7 },
    ],
    cta: [
      {
        text: "Resume",
        url: "/resume.pdf",
      },
    ],
  },
  skills: [
    {
      title: "Cloud/DevOps",
      logo: CloudIcon,
      skills: [
        {
          name: " AWS Security",
          logo: AWSIcon,
        },
        {
          name: " AWS Architecture",
          logo: AWSIcon,
        },
        {
          name: "Azure",
          logo: AzureIcon,
        },
        {
          name: " Networking",
          logo: NetworkIcon,
        },
        {
          name: "Terraform",
          logo: TerraformIcon,
        },
        {
          name: "Docker",
          logo: DockerIcon,
        },
        {
          name: "Kubernetes",
          logo: KubernetesIcon,
        },
        {
          name: "Ansible",
          logo: AnsibleIcon,
        },
        {
          name: "Prometheus",
          logo: PrometheusIcon,
        },
        {
          name: "Grafana",
          logo: GrafanaIcon,
        },
        {
          name: "Linux",
          logo: LinuxIcon,
        },
      ],
    },
    {
      title: "Fullstack Development",
      logo: CodeIcon,
      skills: [
        {
          name: "Python",
          logo: PythonIcon,
        },
        {
          name: "Javascript",
          logo: JavascriptIcon,
        },
        {
          name: "React",
          logo: ReactIcon,
        },
        {
          name: "Typescript",
          logo: TypescriptIcon,
        },
      ],
    },
  ],
  experience: [
    {
      company: "Trycycle Data Systems",
      role: "Fullstack Developer",
      date: "November 2023 - Current",
      city: "Remote",
      url: "https://trycycle.ca/",
      description: [
        "Engineered digital health solutions for 500+ clinicians and patients by integrating secure Kubernetes (6 microservices) with cross-platform frameworks (React/Ionic/AppFlow), cutting vulnerabilities by 40%.",
        "Refined Jenkins pipelines with Azure security tools, cutting deployment times by 65% and implementing checks that blocked all vulnerable code deployments.",
        "Developed, maintained, and optimized Node.js APIs, achieving a 30% performance boost and 25% operational cost reduction by implementing serverless job processing with Azure Functions.",
        "Developed infrastructure-as-code with Ansible and Helm, creating documentation that halved onboarding time and standardized deployment practices.",
        "Managed critical Azure infrastructure (PostgreSQL, Logic Apps) with 99.9% uptime, while streamlining security compliance for patient-facing applications.",
      ],
    },
    {
      company: "Forschungszentrum Jülich",
      role: "Fullstack Cloud Developer",
      date: "July 2020 - November 2023",
      city: "Remote",
      url: "https://www.fz-juelich.de",
      description: [
        "Developed and deployed the 'H2 Atlas Africa' web tool in React for Sub-Saharan Africa, localizing it in 4 languages and integrating analytics, boosting user engagement by 30%.",
        "Migrated 10+ production workloads to AWS using Terraform scripts, achieving 99.95% availability and reducing IT costs by 30%.",
        "Developed and deployed AI/ML microservices on EKS using Docker and Kubernetes, reducing hosting costs by 50% compared to traditional servers.",
        "Implemented a CI/CD pipeline with Ansible and AWS CodePipeline to deploy code changes to ECS clusters, improving deployment frequency by 20%.",
        "Streamlined security and compliance using CloudTrail, Config Rules, and Secrets Manager, detecting anomalies 70% faster through automated rotations of 10+ database secrets every 60 days.",
      ],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      date: "May 2020 - July 2020",
      city: "Remote",
      url: "https://n-ojieabu.vercel.app/",
      description: [
        "Improved website performance by 20% through optimizing image compression and implementing browser caching for a small business client.",
        "Led development of marketing website for local nonprofit achieving 10% increase in donations. Focused on responsive design, accessibility and SEO.",
        "Contributed to development of React web app for early stage startup. while assisting with implementing user authentication and payment features.",
      ],
    },
    {
      company: "Regal College",
      role: "Cloud Administrator",
      date: "Sep 2019 - Sep 2019",
      city: "Sagamu, Nigeria",
      url: "#",
      description: [
        "Migrated school website, apps, and databases to AWS in 6 months, reducing maintenance hours by 65% through automated updates and scaling.",
        "Deployed Amazon WorkSpaces for ~220 staff and students, enabling universal file/tool access from any device.",
        "Implemented AWS Educate program, introducing cloud computing curriculum to over 100 students annually.",
        "Established detailed yet minimal IAM access controls for 25+ users/roles within 1 month via policies and roles.",
        "Automated data retention for backups on AWS S3, lowering storage expenditures by 50% via lifecycle policies.",
      ],
    },
  ],
  education: [
    {
      school: "TechWorld With Nana",
      degree: "DevOps Bootcamp",
      date: "March 2023",
      country: "Remote",
      description: "An intense bootcamp focused on DevOps",
    },
    {
      school: "Ironhack",
      degree: "Fullstack Web Development",
      date: "May 2020",
      country: "Germany",
      description: "An intense bootcamp focused on fullstack web development",
    },
    {
      school: "Universität Rostock",
      degree: "Masters of Science in Electrical Engineering",
      date: "2016 - 2019",
      country: "Germany",
      description:
        "Graduate studies in power systems and renewable energy; 3.3/4.0 GPA.",
    },
    {
      school: "University of Benin",
      degree:
        "Bachelor of Engineering in Electrical and Electronic Engineering",
      date: "2009 - 2014",
      country: "Nigeria",
      description:
        "Bachelor Degree (Hons) majoring in power systems; 3.5/4.0 GPA.",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Security - Specialty",
      verifyUrl:
        "https://www.credly.com/badges/152fa6ad-42a0-4b0e-93ed-7f5a3a13a680/public_url",
      logo: "/assets/certifications/aws-certified-security-specialty.png",
      certificateUrl:
        "https://drive.google.com/file/d/1_h1hgpFy5ENyDOXRkbk4VdeiLdZE7LnW/view?usp=sharing",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      verifyUrl:
        "https://www.credly.com/badges/3d66ce06-6c48-4c83-94d6-e733195485ff/public_url",
      logo: "/assets/certifications/aws-certified-solutions-architect-associate.png",
      certificateUrl:
        "https://drive.google.com/file/d/1lVjyhn3cMsg559FRkiu6ClN1AfnK-sOA/view?usp=sharing",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      verifyUrl:
        "https://www.credly.com/badges/12ce4977-4b14-4611-af11-89545cd50dc3/linked_in_profile",
      logo: "/assets/certifications/aws-certified-cloud-practitioner.png",
      certificateUrl:
        "https://drive.google.com/file/d/1zVIK7C3dxT3AEtP77108QHhqWuOkj8QM/view?usp=sharing",
    },
    {
      title: "Azure Administrator Associate",
      verifyUrl:
        "https://learn.microsoft.com/api/credentials/share/en-gb/NathanOjieabu-6295/CB49CC50B267861E?sharingId=1526DA8DBE1D84AE",
      logo: "/assets/certifications/azure-admin-associate.png",
      certificateUrl:
        "https://drive.google.com/file/d/13tRr1qB816lHrjob0kx9_6uhOQTVBah3/view?usp=sharing",
    },
    {
      title: "Azure Fundamentals",
      verifyUrl:
        "https://learn.microsoft.com/api/credentials/share/en-gb/NathanOjieabu-6295/6DA2505D2A542B34?sharingId=1526DA8DBE1D84AE",
      logo: "/assets/certifications/azure-fundamentals.png",
      certificateUrl:
        "https://drive.google.com/file/d/1vGFxw5UTSspumk0JcPB4oUUnE6nVuvxf/view?usp=sharing",
    },
  ],
  projects: [
    {
      title: "Cloud/DevOps",
      logo: CloudIcon,
      projects: [
        {
          title: "Ansible-Driven CI/CD for AWS EC2 Deployments",
          image: AnsibleProjectImage,
          github: {
            url: "https://github.com/mcfwesh/Ansible-Driven-CI-CD-Pipeline-for-Docker-Compose-on-AWS-EC2",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "Ansible", logo: AnsibleIcon },
            { name: "Jenkins", logo: JenkinsIcon },
          ],
          status: "Personal",
        },
        {
          title: "CI/CD for AWS Infrastructure with Terraform and Jenkins",
          image: TerraformJenkinsImage,
          github: {
            url: "https://github.com/mcfwesh/CI-CD-for-AWS-Infrastructure-with-Terraform-and-Jenkins",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "Docker", logo: DockerIcon },
            { name: "Terraform", logo: TerraformIcon },
            { name: "Jenkins", logo: JenkinsIcon },
          ],
          status: "Personal",
        },
        {
          title: "Complete CI/CD Pipeline with AWS EKS and ECR",
          image: EKSECRImage,
          github: {
            url: "https://github.com/mcfwesh/Complete-CI-CD-Pipeline-with-AWS-EKS-and-ECR",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "Kubernetes", logo: KubernetesIcon },
            { name: "Jenkins", logo: JenkinsIcon },
          ],
          status: "Personal",
        },
        {
          title: "Deploying Microservices with Kubernetes and Helm",
          image: KubeHelmImage,
          github: {
            url: "https://github.com/mcfwesh/Deploying-Microservices-with-Kubernetes-and-Helm",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "Kubernetes", logo: KubernetesIcon },
            { name: "Helm", logo: HelmIcon },
          ],
          status: "Personal",
        },
        {
          title: "Kubernetes Monitoring with Prometheus and Grafana",
          image: KubePromGrafana,
          github: {
            url: "https://github.com/mcfwesh/Kubernetes-Monitoring-with-Prometheus-and-Grafana",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "Kubernetes", logo: KubernetesIcon },
            { name: "Prometheus", logo: PrometheusIcon },
            { name: "Grafana", logo: GrafanaIcon },
          ],
          status: "Personal",
        },
        {
          title: "Highly Available Web App: AWS & Terraform Deployment",
          image: TerraformProjectImage,
          github: {
            url: "https://github.com/mcfwesh/projects-aws/tree/main/highly-available-setup-terraform",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "TF", logo: TerraformIcon },
            { name: "Linux", logo: LinuxIcon },
            { name: "Docker", logo: DockerIcon },
            { name: "Network", logo: NetworkIcon },
          ],
          status: "Personal",
        },
        {
          title:
            "Exploring AWS Serverless: Building Scalable Solutions with API Gateway, Lambda",
          image: ServerlessProjectImage,
          github: {
            url: "https://github.com/mcfwesh/projects-aws/tree/main/serverless-application",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "Linux", logo: LinuxIcon },
            { name: "Network", logo: NetworkIcon },
          ],
          status: "Personal",
        },
        {
          title: "Scaling WordPress: Building a Resilient Architecture",
          image: WordPressProjectImage,
          github: {
            url: "https://github.com/mcfwesh/projects-aws/tree/main/webapp-evolution",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "CF", logo: cloudFormationIcon },
            { name: "Linux", logo: LinuxIcon },
            { name: "Network", logo: NetworkIcon },
          ],
          status: "Personal",
        },
        {
          title: "Database Migration from On-Premises to AWS",
          image: DMSProjectImage,
          github: {
            url: "https://github.com/mcfwesh/projects-aws/tree/main/DMS",
            logo: GithubIcon,
          },
          demo: "",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "AWS", logo: cloudFormationIcon },
            { name: "Linux", logo: LinuxIcon },
            { name: "Network", logo: NetworkIcon },
          ],
          status: "Personal",
        },
      ],
    },
    {
      title: "Fullstack Development",
      logo: CodeIcon,
      projects: [
        {
          title: "H2 Atlas Africa",
          image: H2AtlasImage,
          github: {
            url: "",
            logo: GithubIcon,
          },
          demo: "https://africa.h2atlas.de/",
          technologies: [
            { name: "AWS", logo: AWSIcon },
            { name: "AWS", logo: ReactIcon },
            { name: "AWS", logo: NodeJsIcon },
            { name: "AWS", logo: TypescriptIcon },
            { name: "AWS", logo: PostgresIcon },
            { name: "AWS", logo: DockerIcon },
          ],
          status: "Professional",
        },
        {
          title: "Expense App",
          image: ExpenseAppImage,
          github: {
            url: "https://github.com/mcfwesh/expense-app",
            logo: GithubIcon,
          },
          demo: "https://expenseapp-gq0q.onrender.com",
          technologies: [
            { name: "AWS", logo: HandlebarsIcon },
            { name: "AWS", logo: JavascriptIcon },
            { name: "AWS", logo: NodeJsIcon },
            { name: "AWS", logo: MongoIcon },
          ],
          status: "Personal",
        },
      ],
    },
  ],
};

export default config;
