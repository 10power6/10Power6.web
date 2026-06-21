import { Code2, Cpu, TrendingUp, Smartphone, MonitorSmartphone, BarChart3, ShieldCheck } from "lucide-react";
import { servicePages, servicePageSlugs } from "./data/servicePages";

export const services = [
  {
    name: "Web Applications",
    slug: "web-applications",
    description:
      "Custom web applications engineered for scalability, performance, and seamless user experiences. We build powerful digital platforms tailored to automate workflows, improve efficiency, and accelerate business growth using modern technologies and cloud architecture.",
    Icon: Code2,
    color: "from-blue-600/20 to-cyan-500/10",
  },
  {
    name: "AI Integration",
    slug: "ai-integration",
    description:
      "Intelligent AI integrations that automate processes, enhance customer experiences, and unlock operational efficiency. From AI chatbots to workflow automation and custom AI solutions, we help businesses leverage artificial intelligence for modern growth.",
    Icon: Cpu,
    color: "from-violet-600/20 to-fuchsia-500/10",
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Data-driven digital marketing strategies focused on generating qualified leads, increasing online visibility, and maximizing ROI. From paid advertising to conversion optimization, we help brands grow through intelligent marketing solutions.",
    Icon: TrendingUp,
    color: "from-purple-600/20 to-pink-500/10",
  },
  {
    name: "Mobile Applications",
    slug: "mobile-applications",
    description:
      "Modern iOS and Android mobile applications designed with intuitive interfaces, high performance, and seamless functionality. We create mobile experiences that engage users, strengthen customer retention, and scale with your business.",
    Icon: Smartphone,
    color: "from-pink-600/20 to-rose-500/10",
  },
  {
    name: "Websites",
    slug: "websites",
    description:
      "Premium responsive websites crafted to communicate brand value, improve credibility, and convert visitors into customers. Every website is optimized for speed, accessibility, SEO, and exceptional user experience across all devices.",
    Icon: MonitorSmartphone,
    color: "from-green-600/20 to-emerald-500/10",
  },
  {
    name: "SEO",
    slug: "seo",
    description:
      "Advanced SEO strategies designed to improve search engine rankings, increase organic traffic, and strengthen long-term online authority. We optimize technical SEO, on-page content, and performance to help businesses dominate search results.",
    Icon: BarChart3,
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    name: "Strategy & Support",
    slug: "strategy-support",
    description:
      "Strategic consulting, launch planning, and ongoing technical support to help businesses scale with confidence. We partner with clients long-term to optimize operations, improve digital infrastructure, and support continuous growth.",
    Icon: ShieldCheck,
    color: "from-indigo-600/20 to-blue-500/10",
  },
];

export { servicePages, servicePageSlugs };
