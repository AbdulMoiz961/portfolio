import JavaScript from "@/assets/Javascript_logo.png";
import HTMLCSS from "@/assets/HTMLCSS.svg";
import ReactLogo from "@/assets/React_logo.svg";
import NodeJS from "@/assets/Node.js_logo.png";
import WebDesignLogos from "@/assets/WebDesignLogos.svg";
import MLLogo from "@/assets/ML_logo.svg";
import Python from "@/assets/Python_logo.svg";
import GitGithub from "@/assets/GitGithub.svg";
import Shopify from "@/assets/Shopify_logo.svg";

export type Skill = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

/**
 * Skills are defined here as code (sharing the card layout).
 * PROJECTS are located in content/projects/*.md — see src/lib/projects.ts.
 */
export const skills: Skill[] = [
  {
    id: "skill-1",
    icon: Python,
    title: "Python",
    content:
      "Core language for machine learning and systems. Experience training deep learning models in PyTorch, developing FastAPI microservices, and crafting desktop software with PySide6.",
  },
  {
    id: "skill-2",
    icon: ReactLogo,
    title: "React",
    content:
      "Primary framework for client-side interfaces. Used to build typed single-page applications, diagnostic viewers, and responsive web experiences with modern React and state management.",
  },
  {
    id: "skill-3",
    icon: JavaScript,
    title: "TypeScript / JS",
    content:
      "Applied across full-stack applications with strict static typing, shared contract definitions between client and server, and clean asynchronous workflows.",
  },
  {
    id: "skill-4",
    icon: NodeJS,
    title: "Node.js",
    content:
      "Foundation for backend services. Experience structuring REST APIs with Express, JWT authentication pipelines, and data persistence layers using MongoDB.",
  },
  {
    id: "skill-5",
    icon: MLLogo,
    title: "Machine Learning",
    content:
      "Practical experience in computer vision and reinforcement learning—including fine-tuning Faster R-CNN on medical radiographs and policy optimization with PPO in Gymnasium.",
  },
  {
    id: "skill-6",
    icon: HTMLCSS,
    title: "HTML / CSS",
    content:
      "Solid understanding of semantic HTML5, accessible markup, modern layout techniques (Flexbox, Grid), and utility styling with Tailwind CSS.",
  },
  {
    id: "skill-7",
    icon: Shopify,
    title: "Shopify",
    content:
      "Custom theme development on Online Store 2.0. Experience writing modular Liquid templates, JSON sections, and e-commerce UX tailored for conversion.",
  },
  {
    id: "skill-8",
    icon: WebDesignLogos,
    title: "Web Design",
    content:
      "Focus on layout balance, typography, and visual clarity. Experienced with Figma for wireframing, component structuring, and design systems.",
  },
  {
    id: "skill-9",
    icon: GitGithub,
    title: "Git & GitHub",
    content:
      "Daily version control workflows, repository maintenance, structured commit histories, and deployment automation with GitHub Actions.",
  },
];

export const socials = {
  github: "https://github.com/AbdulMoiz961",
  linkedin: "https://www.linkedin.com/in/abdul-moiz-b254b0343/",
  email: "mailto:shabdulmoiz96@gmail.com",
  emailDisplay: "shabdulmoiz96@gmail.com",
  githubDisplay: "@AbdulMoiz961",
  linkedinDisplay: "in/abdul-moiz",
};

export const siteMeta = {
  name: "Abdul Moiz",
  role: "Software Developer & CS Graduate",
  title: "Abdul Moiz — Software Developer & CS Graduate",
  description:
    "Portfolio of Abdul Moiz — software developer building full-stack applications, machine learning systems, and thoughtful web interfaces.",
};

/** Bio copy for the /about page. */
export const about = {
  lead: "Hello — I'm Abdul Moiz. I'm a Computer Science graduate and software developer interested in building dependable systems, applied machine learning models, and carefully crafted interfaces.",
  body: [
    "My work spans different layers of the stack: from training deep learning models for medical radiograph analysis and developing reinforcement learning agents, to engineering full-stack MERN platforms and desktop tools for local businesses.",
    "I value readable code, thoughtful data architecture, and software that solves real problems without unnecessary complexity. When I'm not writing code, I enjoy reading, exploring systems design, and learning about emerging technologies.",
  ],
  facts: [
    { label: "Focus", value: "Full-Stack & ML" },
    { label: "Stack", value: "React · Python · Node" },
    { label: "Based in", value: "Pakistan" },
  ],
  education: [
    {
      title: "BS Computer Science",
      detail: "Final Year Project: Dentalyze Care (Deep Learning / Faster R-CNN). Coursework in OOP, DSA, Machine Learning.",
    },
    {
      title: "Self-Directed Engineering",
      detail: "Hands-on projects across reinforcement learning, monorepo architectures, and e-commerce client work.",
    },
  ],
};

/** Hero copy for the home page. */
export const hero = {
  badge: "Available for opportunities",
  headingBefore: "Hello, I'm ",
  headingName: "Abdul Moiz",
  headingAfter: " — a software developer building full-stack systems and ML applications.",
  paragraph:
    "From deep learning models and full-stack web applications to client-facing desktop tools, I build software with clear architecture and steady attention to detail.",
  ctaTitle: "Have a project or opportunity in mind?",
  ctaBody: "Open to full-time engineering roles, freelance work, and technical collaborations.",
};
