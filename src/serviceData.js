import { Code2, Cpu, TrendingUp, Smartphone, MonitorSmartphone, BarChart3, ShieldCheck } from "lucide-react";
import aiImage from "./assets/Ai Image.png";

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

const pageTemplate = (slug, title, hero, description, image, bullets, stats, highlights, seoTitle, seoDescription) => ({
  slug,
  title,
  hero,
  description,
  image,
  bullets,
  stats,
  highlights,
  seoTitle,
  seoDescription,
});

export const servicePages = {
  "web-applications": pageTemplate(
    "web-applications",
    "Web Applications",
    {
      headline: "Enterprise-grade web platforms built for scale, speed, and conversion.",
      subheading:
        "Deliver custom SaaS experiences, automation portals, and business-critical web systems with world-class engineering and design.",
      cta: "Book a Discovery Call",
    },
    "Build modern web applications that power growth, improve internal operations, and deliver exceptional customer engagement across every device.",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    [
      "Scalable architecture designed for performance, security, and enterprise availability.",
      "Modern front-end experiences that drive engagement and increase conversion.",
      "Custom backend workflows that automate manual processes and unlock efficiency.",
    ],
    [
      { label: "50+", value: "Enterprise integrations" },
      { label: "99.99%", value: "Platform uptime" },
      { label: "40%", value: "Average efficiency gain" },
    ],
    [
      {
        title: "Scalable Software Strategy",
        text: "We architect web platforms with long-term growth in mind, aligning engineering decisions with your business goals and revenue model.",
      },
      {
        title: "Performance-First Execution",
        text: "Fast page load, resilient APIs, and responsive UX help you outrank competitors while delivering a premium customer experience.",
      },
      {
        title: "End-to-End Delivery",
        text: "From strategy and discovery to launch and support, we design every phase of the build for measurable business impact.",
      },
    ],
    "Web Applications Services | 10Power6",
    "Custom web applications built for growth, scalability, and conversion by 10Power6 agency."
  ),
  "ai-integration": pageTemplate(
    "ai-integration",
    "AI Integration",
    {
      headline: "Transform business operations with AI-powered automation and predictive intelligence.",
      subheading:
        "We implement intelligent systems that augment teams, personalize user journeys, and simplify complex workflows using the latest AI technologies.",
      cta: "Request an AI Strategy Session",
    },
    "Integrate AI into your product, marketing, and service channels to unlock automation, personalization, and smarter decision-making.",
    aiImage,
    [
      "Intelligent automation that reduces manual work and accelerates time to market.",
      "Predictive analytics and personalization for smarter customer experiences.",
      "Custom AI workflows designed to improve efficiency and business outcomes.",
    ],
    [
      { label: "3x", value: "Faster decision cycles" },
      { label: "70%", value: "Reduced manual workloads" },
      { label: "24/7", value: "Automated customer touchpoints" },
    ],
    [
      {
        title: "AI-Driven Product Design",
        text: "We design AI experiences that feel intuitive, transparent, and aligned with high-value business goals.",
      },
      {
        title: "Custom Model Integration",
        text: "From recommendation engines to automation bots, we connect the right AI tools to your existing technology stack.",
      },
      {
        title: "Measurable ROI Focus",
        text: "Every AI investment is measured against engagement, efficiency, and revenue-impact KPIs.",
      },
    ],
    "AI Integration Services | 10Power6",
    "AI integration and automation solutions for enterprise growth, efficiency, and personalization by 10Power6 agency."
  ),
  "digital-marketing": pageTemplate(
    "digital-marketing",
    "Digital Marketing",
    {
      headline: "Capture demand with performance-driven campaigns and data-led growth systems.",
      subheading:
        "We create modern marketing programs that amplify traffic, conversions, and ROI with precision targeting and measurable optimization.",
      cta: "Start Your Growth Plan",
    },
    "Scale your brand with digital marketing strategies that connect audiences to products through conversion-optimized campaigns and growth analytics.",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    [
      "High-impact campaign funnels that maximize lead volume and quality.",
      "Data-driven optimization for ongoing performance improvement.",
      "Brand storytelling and messaging tailored for modern audiences.",
    ],
    [
      { label: "180%", value: "Average campaign lift" },
      { label: "12+", value: "Active growth channels" },
      { label: "92%", value: "Client retention rate" },
    ],
    [
      {
        title: "Growth Marketing Intelligence",
        text: "We blend analytics, creative, and automation to deliver campaigns that scale revenue and brand awareness.",
      },
      {
        title: "Conversion Optimization",
        text: "Landing pages, funnels, and messaging are engineered to move prospects through the journey with confidence.",
      },
      {
        title: "Channel Expansion",
        text: "We identify the most valuable paid, organic, and owned channels for your business and optimize them continuously.",
      },
    ],
    "Digital Marketing Agency | 10Power6",
    "Premium digital marketing services focused on growth, ROI, and analytics-driven performance by 10Power6 agency."
  ),
  "mobile-applications": pageTemplate(
    "mobile-applications",
    "Mobile Applications",
    {
      headline: "Design and build mobile experiences that retain users and simplify complex workflows.",
      subheading:
        "Our mobile applications combine premium design, native performance, and intuitive usability for business-critical mobile products.",
      cta: "Launch a Mobile Project",
    },
    "Deliver polished mobile applications for iOS and Android that elevate engagement, retention, and customer satisfaction.",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80",
    [
      "Native-level performance with next-generation interface design.",
      "User journeys optimized for retention, adoption, and long-term value.",
      "Integrated mobile workflows that connect to business systems and APIs.",
    ],
    [
      { label: "4.8", value: "Average App Store rating" },
      { label: "60%", value: "Retention lift" },
      { label: "30%", value: "Faster time-to-market" },
    ],
    [
      {
        title: "UX-Driven Mobile Strategy",
        text: "We prioritize user journeys and product-market fit to create mobile experiences that feel indispensable.",
      },
      {
        title: "Cross-Platform Excellence",
        text: "Our apps are built for performance, security, and long-term maintainability across iOS and Android.",
      },
      {
        title: "Ongoing Optimization",
        text: "We support your mobile product with analytics, release strategy, and continuous improvement.",
      },
    ],
    "Mobile App Development Services | 10Power6",
    "Premium mobile application development for modern brands and enterprises by 10Power6 agency."
  ),
  "websites": pageTemplate(
    "websites",
    "Websites",
    {
      headline: "Launch a website that communicates premium positioning, trust, and conversion clarity.",
      subheading:
        "We design and develop websites that land with authority, perform flawlessly, and guide visitors toward action.",
      cta: "Upgrade Your Website",
    },
    "Create modern websites with elegant design, fast performance, and content that converts visitors into customers.",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    [
      "Conversion-focused layouts that communicate service value quickly.",
      "SEO-ready architecture built for search visibility and fast indexing.",
      "Responsive design that looks premium across every screen size.",
    ],
    [
      { label: "65%", value: "Conversion increase" },
      { label: "18%", value: "Average load improvement" },
      { label: "100%", value: "Mobile optimized" },
    ],
    [
      {
        title: "Brand Narrative Design",
        text: "We build websites that elevate your positioning with clear messaging, striking visuals, and premium detail.",
      },
      {
        title: "SEO-Ready Foundations",
        text: "Everything is built with semantic HTML, fast performance, and best-practice SEO structure.",
      },
      {
        title: "Conversion Intelligence",
        text: "Landing pages and funnels are engineered to capture leads and drive high-value inquiries.",
      },
    ],
    "Website Design & Development | 10Power6",
    "Premium website design and development services for luxury brands and SaaS companies by 10Power6 agency."
  ),
  "seo": pageTemplate(
    "seo",
    "SEO",
    {
      headline: "Rank higher, attract better traffic, and convert visitors into customers.",
      subheading:
        "We deliver modern SEO strategies that improve visibility, authority, and sustainable organic growth for ambitious brands.",
      cta: "Book an SEO Audit",
    },
    "Optimize your digital presence with technical SEO, content strategy, and authority-building workflows that drive long-term organic results.",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    [
      "Technical SEO that improves search engine performance and crawlability.",
      "Content strategy that supports high-intent keyword ranking and brand relevance.",
      "Authority-building tactics to increase organic traffic and trust.",
    ],
    [
      { label: "120%", value: "Average organic traffic growth" },
      { label: "70%", value: "Improved keyword rankings" },
      { label: "15x", value: "ROI uplift" },
    ],
    [
      {
        title: "Technical Precision",
        text: "We audit and optimize website foundations so search engines can index, rank, and recommend your brand consistently.",
      },
      {
        title: "Content Authority",
        text: "SEO content is tailored to buyer intent, strategic positioning, and long-term discovery.",
      },
      {
        title: "Performance Measurement",
        text: "We track organic KPIs and adapt strategy to maximize visibility, traffic quality, and conversions.",
      },
    ],
    "SEO Services | 10Power6",
    "SEO services for enterprise brands seeking sustainable organic growth and search visibility by 10Power6 agency."
  ),
  "strategy-support": pageTemplate(
    "strategy-support",
    "Strategy & Support",
    {
      headline: "Plan with confidence, execute with clarity, and scale with support that keeps your technology future-proof.",
      subheading:
        "We combine product strategy, launch planning, and ongoing support services to help modern businesses grow reliably.",
      cta: "Schedule a Strategy Call",
    },
    "Get expert strategy, launch preparation, and technical support that transforms digital initiatives into measurable business outcomes.",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    [
      "Product strategy aligned with revenue goals and market positioning.",
      "Launch planning that removes friction and maximizes adoption.",
      "Support systems that keep your product stable, updated, and future-ready.",
    ],
    [
      { label: "92%", value: "Client satisfaction" },
      { label: "1.5x", value: "Faster launch readiness" },
      { label: "99%", value: "Support response consistency" },
    ],
    [
      {
        title: "Strategic Product Roadmaps",
        text: "We map the right features, timelines, and growth milestones so your product launches stronger and scales faster.",
      },
      {
        title: "Launch & Growth Support",
        text: "Our team supports launches, update cycles, and post-launch optimization with enterprise-grade processes.",
      },
      {
        title: "Long-Term Partnership",
        text: "We help you adapt product and technical strategy as your business evolves and your market grows.",
      },
    ],
    "Strategy & Support Services | 10Power6",
    "Premium strategy, launch planning, and support services designed for growth-stage businesses by 10Power6 agency."
  ),
};

export const servicePageSlugs = Object.keys(servicePages);
