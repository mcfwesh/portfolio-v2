import {
  GithubIcon,
  linkedinIcon,
  CloudIcon,
  AWSIcon,
  LinuxIcon,
  DockerIcon,
  JavascriptIcon,
  TypescriptIcon,
  PythonIcon,
  TerraformIcon,
  ReactIcon,
  CodeIcon,
  NetworkIcon,
  cloudFormationIcon,
  PostgresIcon,
  MongoIcon,
  NodeJsIcon,
  HandlebarsIcon,
} from "../components/Icons";

import DMSProjectImage from "@/app/assets/DMS.svg";
import TerraformProjectImage from "@/app/assets/terraform_high_availability_archi.svg";
import ServerlessProjectImage from "@/app/assets/serverless.svg";
import WordPressProjectImage from "@/app/assets/wordpress_evolution.svg";
import H2AtlasImage from "@/app/assets/h2atlas.svg";
import ExpenseAppImage from "@/app/assets/expense-app.svg";

const currentYear: number = new Date().getFullYear();

const config = {
  name: "Nathan Ojieabu",
  email: "nathan.ojieabu@gmail.com",
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
      // {
      //   text: "Home",
      //   url: "/",
      // },
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
        url: "mailto:nathan.ojieabu@gmail.com",
      },
    ],
    ctaSpinner: {
      innerText: "Hire Me",
      outerText: "Cloud Developer . Fullstack Developer . ",
      url: "mailto:nathan.ojieabu@gmail.com",
    },
  },
  about: {
    image: "/profile.jpg",
    description: [
      {
        paragraph: "1",
        text: `As a full stack developer and AWS certified cloud engineer with 3+ years of experience, I deliver high-quality, scalable, and secure applications that meet customer design requirements and exceed project deadlines across various industries. With expertise in Python, Javascript, Typescript,React, Docker, and Terraform, I specialize in migrating production workloads to AWS, improving page load speeds, and reducing IT operations costs. `,
      },
      {
        paragraph: "2",
        text: `My recent certifications  in AWS Security Specialty and  AWS Solutions Architect, demonstrate my proficiency in creating efficient and secure cloud-based systems. By leading projects and driving results with a focus on scalability, availability, and security, I consistently deliver successful outcomes for my clients.`,
      },
      {
        paragraph: "2",
        text: ``,
      },
      {
        paragraph: "3",
        text: ``,
      },
    ],
    careerSummary: [
      { title: "Years of Experience", description: "5+" },
      { title: "Certifications", description: "3+" },
      { title: "Projects Completed", description: "6+" },
      { title: "Articles", description: "4+" },
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
      title: "Cloud",
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
      company: "Forschungszentrum Jülich",
      role: "Cloud Developer",
      date: "July 2022 - Current",
      city: "Remote",
      url: "https://www.fz-juelich.de",
      description: [
        "Spearheaded the migration of 10+ production workloads to AWS, resulting in a 99.95% improvement in availability and a 30% reduction in IT operations costs.",
        "Revolutionized the 'H2 Atlas' React app's performance by migrating it to AWS Amplify, achieving a 40% increase in page load speeds and scalability to support over 50,000 users per month.",
        "Developed and deployed Large Language Model (LLM) web applications using AWS Lambda, DynamoDB, API Gateway, and Cloudfront, slashing hosting costs by 50% compared to traditional servers.",
        "Migrated monoliths to microservices on AWS ECS, improving scalability and availability by 20%.",
        "Implemented CloudTrail and AWS Config rules to detect and respond to suspicious activities 70% faster.",
        "Efficiently managed 10+ database credentials and API keys in Secrets Manager with a 60-day rotation.",
      ],
    },
    {
      company: "Forschungszentrum Jülich",
      role: "Fullstack Developer",
      date: "July 2020 - Current",
      city: "Remote",
      url: "https://www.fz-juelich.de",
      description: [
        "Developed and deployed 5+ web applications, including “H2 Atlas Africa” web tool, a React-based interactive atlas analyzing hydrogen potential in Africa.",
        "Implemented CI/CD practices, ensuring seamless deployment and minimizing downtime during updates.",
        "Enhanced user engagement by localizing the atlas into 4 languages and integrating analytics to gain insights into user behavior and journeys.",
        "Contributed to a web app utilizing Next.js, Flask, and a large language model (LLM) to parse and annotate PDF papers into JSON format.",
        "Developed an interactive database with over 20+ energy ontologies, customizable visualizations, and export tools, enabling 50% time savings for energy modeling research activities.",
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
  ],
  projects: [
    {
      title: "Cloud",
      logo: CloudIcon,
      projects: [
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
