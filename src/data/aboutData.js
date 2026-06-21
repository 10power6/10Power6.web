import {
  Globe,
  Smartphone,
  Palette,
  Plug,
  Bot,
  Cloud,
  Lightbulb,
  Wrench,
  Zap,
  Code2,
  Cpu,
  Target,
  MessageCircle,
  Users,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";

import heroImage from "../assets/about/hero.webp";
import teamImage from "../assets/about/team-collaboration.webp";
import processImage from "../assets/about/development-process.webp";

export const ABOUT_SEO = {
  title: "About Us | 10Power6 - Software Development Agency",
  description:
    "10Power6 is a software development agency specializing in web applications, mobile apps, AI solutions, and custom software development for startups and businesses.",
};

export const aboutImages = {
  hero: heroImage,
  team: teamImage,
  process: processImage,
};

export const whatWeDoItems = [
  {
    title: "Web Application Development",
    description:
      "Custom web platforms built for performance, scalability, and seamless user experiences that support real business workflows.",
    Icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for speed, reliability, and long-term user engagement.",
    Icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with usability, helping products feel intuitive from the first interaction.",
    Icon: Palette,
  },
  {
    title: "API Integration",
    description:
      "Secure integrations with third-party services, payment gateways, CRMs, and internal systems to unify your digital stack.",
    Icon: Plug,
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI implementations including automation, chatbots, and intelligent workflows that deliver measurable efficiency gains.",
    Icon: Bot,
  },
  {
    title: "Cloud & Automation",
    description:
      "Cloud-native architecture and automation pipelines that reduce manual work and improve operational reliability.",
    Icon: Cloud,
  },
  {
    title: "Software Consulting",
    description:
      "Strategic guidance on technology choices, product roadmaps, and architecture decisions aligned with your business goals.",
    Icon: Lightbulb,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and technical support to keep your software secure, stable, and ready to scale.",
    Icon: Wrench,
  },
];

export const whyChooseItems = [
  {
    title: "Fast Delivery",
    description:
      "We move quickly without cutting corners, delivering working software on timelines that keep your business momentum going.",
    Icon: Zap,
  },
  {
    title: "Clean & Maintainable Code",
    description:
      "Every project is built with clarity and structure so your team can extend, debug, and scale the product with confidence.",
    Icon: Code2,
  },
  {
    title: "Modern Technologies",
    description:
      "We use proven, current frameworks and tools that balance innovation with long-term stability and community support.",
    Icon: Cpu,
  },
  {
    title: "Business-Oriented Solutions",
    description:
      "Technology decisions are driven by outcomes — revenue, efficiency, and growth — not by trends or unnecessary complexity.",
    Icon: Target,
  },
  {
    title: "Transparent Communication",
    description:
      "Clear updates, honest timelines, and direct access to the people building your product throughout every project phase.",
    Icon: MessageCircle,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We stay involved after launch with support, optimization, and strategic guidance as your product and business evolve.",
    Icon: Users,
  },
];

export const aboutProcessSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand business goals and requirements.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Create intuitive and scalable solutions.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description: "Build reliable and maintainable applications.",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deploy, optimize, and provide ongoing support.",
    Icon: Rocket,
  },
];

export const technologies = [
  "React",
  "Laravel",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "REST APIs",
  "AWS",
  "Docker",
  "GitHub",
];
