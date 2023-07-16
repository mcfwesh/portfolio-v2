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
  role: "Cloud Security Architect",
  description:
    "As a Full-stack Cloud Security Architect, I deliver secure and scalable cloud solutions with a security focus. Check out my portfolio for more information.",
  phone: "+1 (587) 809-0747",
  location: "Calgary, AB, Canada",
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
        url: "mailto:nathan.ojieabu@gmail.com",
      },
      {
        text: "Contact",
        url: "mailto:nathan.ojieabu@gmail.com",
      },
    ],
    ctaSpinner: {
      innerText: "Hire Me",
      outerText: "Cloud Security Architect . Fullstack .",
      url: "mailto:nathan.ojieabu@gmail.com",
    },
  },
  about: {
    image: "/profile.jpg",
    description: [
      {
        paragraph: "1",
        text: `As a cloud security architect, I have experience in designing and implementing secure cloud architectures that balance scalability, reliability, and cost-effectiveness. I have an understanding of various cloud computing technologies, especially AWS as well as cloud security best practices including IAM, encryption, and network security.`,
      },
      {
        paragraph: "2",
        text: `In addition to my cloud expertise, I have a strong foundation and professional experience of 3+ years in full stack development with expertise in JavaScript, Typescript, and Python. I have worked with modern front-end technologies such as React, as well as backend technologies like Node.js.`,
      },
      {
        paragraph: "3",
        text: `My passion for cloud security and full stack development has led me to specialize in the intersection of these two domains. I believe that a deep understanding of both is essential for building successful applications in the cloud. With my hybrid experience, I am confident that I can help your team build secure, scalable, and reliable cloud-based applications.`,
      },
    ],
    careerSummary: [
      { title: "Years of Experience", description: "3+" },
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
      role: "Fullstack Developer",
      date: "Sep 2020 - Current",
      city: "Jülich, Germany",
      url: "https://www.fz-juelich.com",
      description:
        "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
      company: "Montprojeckt",
      role: "Maintenance Engineer",
      date: "Jun 2019 - Aug 2019",
      city: "Belgrade, Serbia",
      url: "https://montprojekt.rs/",
      description:
        "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
  ],
  education: [
    {
      school: "Universität Rostock",
      degree: "Masters of Science in Electrical Engineering",
      date: "2016 - 2019",
      country: "Germany",
      description:
        "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
      school: "University of Benin",
      degree:
        "Bachelor of Engineering in Electrical and Electronic Engineering",
      date: "2009 - 2013",
      country: "Nigeria",
      description:
        "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
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
          title: "Highly Available Architecture on AWS using Terraform",
          image: TerraformProjectImage,
          github: {
            url: "https://github.com/Nathan-Ojieabu/portfolio",
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
          title: "Serverless Application",
          image: ServerlessProjectImage,
          github: {
            url: "https://github.com/Nathan-Ojieabu/portfolio",
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
          title: "Webapp Evolution",
          image: WordPressProjectImage,
          github: {
            url: "https://github.com/Nathan-Ojieabu/portfolio",
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
            url: "https://github.com/Nathan-Ojieabu/portfolio",
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
          demo: "https://africa.h2atlas.com/",
          technologies: [
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
            url: "https://github.com/mcfwesh/project2-expenseapp",
            logo: GithubIcon,
          },
          demo: "https://github.com/mcfwesh/project2-expenseapp",
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
