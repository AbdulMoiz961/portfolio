import JavaScript from "@/assets/Javascript_logo.png";
import HTMLCSS from "@/assets/HTMLCSS.svg";
import ReactLogo from "@/assets/React_logo.svg";
import NodeJS from "@/assets/Node.js_logo.png";
import WebDesignLogos from "@/assets/WebDesignLogos.svg";
import Java from "@/assets/Java_logo.svg";
import Python from "@/assets/Python_logo.svg";
import GitGithub from "@/assets/GitGithub.svg";
import WordPress from "@/assets/Wordpress.png";

export type Skill = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

/**
 * Skills are still defined here as code (they rarely change and share the card layout).
 * PROJECTS moved to content/projects/*.md — see src/lib/projects.ts.
 */
export const skills: Skill[] = [
  {
    id: "skill-1",
    icon: JavaScript,
    title: "JavaScript",
    content:
      "JavaScript, the second language I learned, sparked by fascination with open-source code. Developed proficiency, contributing to diverse projects and enhancing my skills.",
  },
  {
    id: "skill-2",
    icon: HTMLCSS,
    title: "HTML / CSS",
    content:
      "As I learned HTML/CSS through introductory courses, I applied this knowledge to craft various web projects, including the design of this site. This solidified my grasp of front-end development.",
  },
  {
    id: "skill-3",
    icon: ReactLogo,
    title: "React",
    content:
      "Explored React through online courses, applying it in several web projects, including this site and other frontend projects — showcasing my practical implementation of React skills.",
  },
  {
    id: "skill-4",
    icon: NodeJS,
    title: "Node.js",
    content:
      "As I learned JavaScript, I acquired proficiency in Node.js through hands-on projects and coursework. Examples of Node.js applications can be explored in my projects.",
  },
  {
    id: "skill-5",
    icon: WebDesignLogos,
    title: "Web Design",
    content:
      "Explored Figma and Adobe XD for web design, gaining experience in creating responsive UI/UX designs with these vector design tools.",
  },
  {
    id: "skill-6",
    icon: Java,
    title: "Java",
    content:
      "Java forms the bedrock of my programming skills, acquired through essential university courses such as OOP and DSA, established the foundation for my understanding.",
  },
  {
    id: "skill-7",
    icon: Python,
    title: "Python",
    content:
      "Self-taught Python through books and videos, solidifying skills in a Machine Learning course in university. Applied Python knowledge to some personal projects.",
  },
  {
    id: "skill-8",
    icon: GitGithub,
    title: "Git & GitHub",
    content:
      "I've used Git for almost all of my projects, so I am very familiar with it. My proficiency extends to collaborative workflows on GitHub, where I try to contribute and participate in open-source projects.",
  },
  {
    id: "skill-9",
    icon: WordPress,
    title: "WordPress",
    content:
      "Got myself into web development using the widely adopted CMS, WordPress. Gained proficiency through online courses, and applied skills in various projects.",
  },
];

export const socials = {
  github: "https://github.com/AbdulMoiz961",
  linkedin: "https://www.linkedin.com/in/abdulmoiz961/",
  email: "mailto:abdulmoiz961@gmail.com",
  emailDisplay: "abdulmoiz961@gmail.com",
  githubDisplay: "@AbdulMoiz961",
  linkedinDisplay: "in/abdulmoiz961",
};

export const siteMeta = {
  name: "Abdul Moiz",
  role: "Front-end Developer & Web Designer",
  title: "Abdul Moiz — Front-end Developer & Web Designer",
  description:
    "Portfolio of Abdul Moiz — front-end developer working with React, Next.js and modern web tooling.",
};

/** Bio copy for the /about page — edit these strings directly. */
export const about = {
  lead: "Hello there — my name is Abdul Moiz. I'm a Computer Science student and front-end developer who enjoys turning ideas into small, considered pieces of the web.",
  body: [
    "I got into building for the web through curiosity: taking apart open-source projects, reading other people's CSS, and slowly piecing together how things really work. Today I focus on React and Next.js, with a soft spot for clean typography, thoughtful motion, and interfaces that quietly get out of the way.",
    "Outside of code, I'm usually reading, tinkering with design tools, or exploring new frameworks to keep my toolkit sharp.",
  ],
  facts: [
    { label: "Focus", value: "Front-end" },
    { label: "Stack", value: "React · Next.js" },
    { label: "Based in", value: "Pakistan" },
  ],
  education: [
    {
      title: "BS Computer Science",
      detail: "University coursework in OOP, DSA, Machine Learning",
    },
    {
      title: "Self-directed",
      detail: "Open-source, online courses, and personal projects",
    },
  ],
};

/** Hero copy for the home page. */
export const hero = {
  badge: "Available for new projects",
  headingBefore: "Hello, I'm ",
  headingName: "Abdul Moiz",
  headingAfter: " — a front-end developer crafting quiet, considered interfaces.",
  paragraph:
    "I build responsive, accessible websites with React, Next.js and modern tooling. Currently focused on portfolio and product sites that feel calm, precise and unmistakably crafted.",
  ctaTitle: "Have a project in mind? Let's make it feel effortless.",
  ctaBody: "I'm open to freelance work, collaborations, and full-time roles.",
};
