import softwareHero from "../assets/hero/software-development.webp";
import growthHero from "../assets/hero/growth-focused.webp";
import modernHero from "../assets/hero/modern-delivery.webp";
import aiHero from "../assets/hero/ai-solutions.webp";
import { BRAND_LABEL } from "./branding";

export const heroSlides = [
  {
    id: "software-development",
    tag: BRAND_LABEL,
    title: "Intelligent digital products that drive long-term growth.",
    body: "From idea to launch, we design, develop, and deliver scalable software and AI solutions that help businesses innovate and scale.",
    image: softwareHero,
    imageAlt: "Software development dashboard on a laptop screen",
    primaryCta: { label: "Explore Services", href: "#services" },
  },
  {
    id: "growth-focused",
    tag: "Growth Engineering",
    title: "Technology and growth systems, unified.",
    body: "We combine intelligent applications, automation, and data-driven strategy to build digital products that scale revenue sustainably.",
    image: growthHero,
    imageAlt: "Team collaborating on digital growth and technology strategy",
    primaryCta: { label: "Book a Consultation", href: "#contact" },
  },
  {
    id: "modern-delivery",
    tag: "Modern Delivery",
    title: "Web and mobile experiences built for the future.",
    body: "Fast, secure, and conversion-focused platforms engineered for performance, reliability, and long-term scalability.",
    image: modernHero,
    imageAlt: "Modern website and mobile application design on devices",
    primaryCta: { label: "See What We Build", href: "#services" },
  },
  {
    id: "ai-solutions",
    tag: "AI Solutions & Automation",
    title: "Build smarter with AI that works for your business.",
    body: "From intelligent assistants and workflow automation to custom integrations, we help teams eliminate repetitive work and scale faster.",
    image: aiHero,
    imageAlt: "Futuristic artificial intelligence and digital automation visualization",
    primaryCta: { label: "Explore AI Services", href: "/services/ai-integration", isRoute: true },
  },
];
