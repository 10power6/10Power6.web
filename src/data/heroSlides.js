import softwareHero from "../assets/hero/software-development.webp";
import growthHero from "../assets/hero/growth-focused.webp";
import modernHero from "../assets/hero/modern-delivery.webp";
import aiHero from "../assets/hero/ai-solutions.webp";

export const heroSlides = [
  {
    id: "software-development",
    tag: "10Power6 Agency",
    title: "We build software that scales your business.",
    body: "From idea to launch, we design and deliver products that turn traffic into revenue.",
    image: softwareHero,
    imageAlt: "Software development dashboard on a laptop screen",
    primaryCta: { label: "Explore Services", href: "#services" },
  },
  {
    id: "growth-focused",
    tag: "Growth Focused",
    title: "Marketing + engineering under one roof.",
    body: "We combine digital marketing, SEO, and high-performance applications to drive measurable growth.",
    image: growthHero,
    imageAlt: "Team collaborating on digital marketing and growth strategy",
    primaryCta: { label: "Book a Consultation", href: "#contact" },
  },
  {
    id: "modern-delivery",
    tag: "Modern Delivery",
    title: "Websites and mobile apps users love.",
    body: "Fast, secure, and conversion-focused experiences built for long-term growth.",
    image: modernHero,
    imageAlt: "Modern website and mobile application design on devices",
    primaryCta: { label: "See What We Build", href: "#services" },
  },
  {
    id: "ai-solutions",
    tag: "AI Solutions & Automation",
    title: "Build smarter with AI that works for your business.",
    body: "From AI assistants and workflow automation to custom integrations, we help businesses eliminate repetitive work and scale faster.",
    image: aiHero,
    imageAlt: "Futuristic artificial intelligence and digital automation visualization",
    primaryCta: { label: "Explore AI Services", href: "/services/ai-integration", isRoute: true },
  },
];
