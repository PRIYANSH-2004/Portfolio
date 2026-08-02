import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglebigquery,
  SiGooglecloud,
  SiGit,
  SiDocker,
  SiTerraform,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { TbDatabase, TbBrandReactNative } from "react-icons/tb";

export const HERO_CONTENT = `I'm a full-stack and AI-systems developer, currently building AI-driven infrastructure and business intelligence platforms as a Software Developer at Talendy Holdings, continuing an engagement with Akatsuki AI on Project Synapse. I'm finishing my B.Tech in Computer Science at IIITDM Jabalpur, and I like working across the stack — from React and Next.js on the frontend to FastAPI, Node.js, and cloud infrastructure on GCP underneath. I'm most energized by taking AI capabilities from prototype to production: model deployment, secure APIs, and the data pipelines that hold it all together.`;

export const ABOUT_TEXT = `I'm a Computer Science undergrad at the Indian Institute of Information Technology, Design & Manufacturing, Jabalpur, graduating in May 2026 — and a full-stack developer who has spent the last year building real production systems rather than just studying them.

At Akatsuki AI Technologies, I helped build Closed Code CLI, an enterprise coding assistant running on Qwen3-Coder-30B, including deploying quantized models on Vertex AI with vLLM and AWQ, a multi-tenant API gateway routing across LLM providers, and OIDC/JWT authentication with Redis-backed rate limiting. That work is now continuing at Talendy Holdings, where I'm building Project Synapse — an AI-driven BI platform on Next.js, FastAPI, and BigQuery that unifies CRM, HR, and spreadsheet data for a Japanese consulting firm.

Outside of client work, I build things end-to-end: a blockchain-secured document vault with an AI assistant on top (SAULT, Top 5 at HackByte 3.0), a LeetCode analytics dashboard, and a book recommendation engine trained on 50K+ ratings. I'm also a co-inventor on a published patent for a wearable, non-invasive asthma diagnostic system.

I care about shipping software that's secure, well-architected, and actually gets used — and I'm always looking for the next hard problem to build my way through.`;

export const EXPERIENCES = [
  {
    year: "Jun 2026 — Present",
    role: "Software Developer",
    company: "Talendy Holdings",
    location: "Remote",
    note: "Continuing engagement with Akatsuki AI on Project Synapse (via EOR)",
    description: `Contributed to Project Synapse, an AI-driven business intelligence platform built with Next.js, FastAPI, and GCP, integrating STRIX CRM, freee HR/Payroll, and Google Sheets into a unified BigQuery data warehouse for a Japanese consulting firm. Built an end-to-end Project Registration module with BigQuery MERGE-based upsert services, auto-generated project IDs, and schema-contract validation. Developed a reusable CSV bulk-import framework, a Data Pipeline Management dashboard for ingestion monitoring, and contributed to Terraform-managed GCP infrastructure including IAM and authentication workflows.`,
    technologies: ["Next.js", "FastAPI", "BigQuery", "PostgreSQL", "Terraform", "GCP"],
  },
  {
    year: "Nov 2025 — May 2026",
    role: "Software Engineer Intern",
    company: "Akatsuki AI Technologies, Japan",
    location: "Remote",
    note: null,
    description: `Contributed to Closed Code CLI, an enterprise-grade coding assistant on Qwen3-Coder-30B, deploying quantized models on Vertex AI via vLLM + AWQ on A100 40GB GPUs. Built a multi-tenant API gateway in Node.js/TypeScript routing across LLM providers (Vertex AI, OpenAI) with prefix-based model routing, streaming, and per-user instruction injection. Implemented OIDC (PKCE) + JWT authentication with Redis-backed token blacklisting, multi-layer rate limiting, an admin RBAC approval workflow, and audit logging in PostgreSQL (JSONB) with Cloud Storage export.`,
    technologies: ["Node.js", "TypeScript", "Python", "vLLM", "Redis", "GCP"],
  },
];

export const PROJECTS = [
  {
    title: "SAULT — Secure Document Vault",
    image: project6,
    featured: true,
    badge: "Top 5 · HackByte 3.0",
    description: `A blockchain-secured document vault built during a 36-hour hackathon. Smart contracts guarantee tamper-proof, immutable storage on IPFS, with Gemini AI handling automated document categorization and an AI chatbot delivering real-time semantic retrieval over stored documents.`,
    technologies: ["React", "Blockchain", "IPFS", "Gemini AI", "Tailwind"],
    live: `https://sault-six.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/Sault`,
  },
  {
    title: "LeetCode Insight",
    image: project7,
    featured: true,
    badge: null,
    description: `A full-stack app that analyzes LeetCode profiles in real time via a secure proxy server handling GraphQL API integration and CORS resolution. Ships a profile comparison dashboard tracking user progress and coding metrics, with lazy-loading and component modularization cutting load times by 40%.`,
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express"],
    live: `https://lc-insight.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/LC_Insight`,
  },
  {
    title: "Book Recommendation System",
    image: project1,
    featured: true,
    badge: null,
    description: `A recommendation engine combining collaborative filtering and popularity-based ranking over a 50K+ book ratings dataset, with a Flask web app serving personalized suggestions and preprocessing/data-integrity checks handling large-scale, noisy rating data.`,
    technologies: ["Python", "Pandas", "Scikit-learn", "Flask"],
    live: `https://book-recommender-self.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/Book-Recommender`,
  },
  {
    title: "Mail Spam Detection",
    image: project2,
    featured: false,
    badge: null,
    description: `A spam classifier using Multinomial Naive Bayes achieving 94% accuracy, with a full preprocessing pipeline (cleaning, tokenization, stemming, count vectorization) and a Streamlit app for real-time predictions.`,
    technologies: ["Python", "Scikit-learn", "NLP", "Streamlit"],
    live: `https://spam-detection-1-r9wb.onrender.com/`,
    github: `https://github.com/PRIYANSH-2004/spam-detection`,
  },
  {
    title: "Snake Game",
    image: project4,
    featured: false,
    badge: null,
    description: `A classic Snake game built from scratch in vanilla JavaScript, handling game loop logic, rendering, and responsive controls.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    live: `https://snake-game-pearl.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/snake_game`,
  },
  {
    title: "Tic Tac Toe",
    image: project5,
    featured: false,
    badge: null,
    description: `A Tic Tac Toe game with full game logic, turn handling, and win-condition checks behind a clean, responsive interface.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    live: `https://tic-tac-toe-eta-sage.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/tic-tac-toe`,
  },
  {
    title: "Earlier Portfolio",
    image: project3,
    featured: false,
    badge: null,
    description: `An earlier iteration of this personal portfolio site, showcasing projects, skills, and contact information.`,
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
    live: `https://portfolio-zeta-dun-43.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/Portfolio`,
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: TbDatabase },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
    ],
  },
  // {
  //   category: "Data & ML",
  //   items: [
  //     { name: "Pandas", icon: SiPandas },
  //     { name: "NumPy", icon: SiNumpy },
  //     { name: "Scikit-learn", icon: SiScikitlearn },
  //     { name: "Matplotlib", icon: TbChartHistogram },
  //   ],
  // },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "BigQuery", icon: SiGooglebigquery },
      { name: "GCP", icon: SiGooglecloud },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Terraform", icon: SiTerraform },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

export const ACHIEVEMENTS = {
  patent: {
    title: "Wearable Non-Invasive Asthma Diagnostic System",
    role: "Co-Inventor",
    journal: "The Patent Office Journal (India)",
    applicationNo: "202521069749 A",
    publicationNo: "35/2025",
  },
  stats: [
    {
      label: "LeetCode",
      value: "620+",
      suffix: "problems solved",
      href: "https://leetcode.com/u/PRIYANSH_2004/",
    },
    {
      label: "Coding Ninjas",
      value: "150+",
      suffix: "problems solved",
      href: "https://www.naukri.com/code360/profile/8b368d88-8392-4e07-81e3-068483fccba1",
    },
    {
      label: "GeeksforGeeks",
      value: "150+",
      suffix: "problems solved",
      href: "https://www.geeksforgeeks.org/profile/priyansh07",
    },
  ],
};

export const CONTACT = {
  phoneNo: "+91 7355250737",
  email: "priyanshsingh.pr@gmail.com",
};
