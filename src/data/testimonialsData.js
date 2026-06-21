import sarahAvatar from "../assets/testimonials/sarah.webp";
import marcusAvatar from "../assets/testimonials/marcus.webp";
import elenaAvatar from "../assets/testimonials/elena.webp";
import jamesAvatar from "../assets/testimonials/james.webp";
import priyaAvatar from "../assets/testimonials/priya.webp";

export const testimonials = [
  {
    quote:
      "Our website launch exceeded expectations. 10Power6 delivered quickly and maintained exceptional quality throughout the project.",
    name: "Sarah Mitchell",
    company: "Northline Digital",
    position: "Founder & CEO",
    avatar: sarahAvatar,
    width: "md",
  },
  {
    quote: "Communication was excellent and the final product was exactly what we envisioned.",
    name: "Marcus Chen",
    company: "Vertex Labs",
    position: "Product Director",
    avatar: marcusAvatar,
    width: "sm",
  },
  {
    quote:
      "The AI automation solution saved our team hours every week and streamlined our workflow.",
    name: "Elena Rodriguez",
    company: "ScaleForge",
    position: "Operations Lead",
    avatar: elenaAvatar,
    width: "lg",
  },
  {
    quote: "Professional, responsive, and highly skilled. We will definitely work with 10Power6 again.",
    name: "James Whitfield",
    company: "Apex Commerce",
    position: "Managing Partner",
    avatar: jamesAvatar,
    width: "md",
  },
  {
    quote: "They transformed our idea into a polished platform faster than we expected.",
    name: "Priya Kapoor",
    company: "Launchpad Studio",
    position: "Co-Founder",
    avatar: priyaAvatar,
    width: "sm",
  },
];

export const CARD_WIDTHS = {
  sm: "w-[min(92vw,340px)] sm:w-[380px] lg:w-[420px]",
  md: "w-[min(92vw,360px)] sm:w-[400px] lg:w-[440px]",
  lg: "w-[min(92vw,380px)] sm:w-[420px] lg:w-[480px]",
};
