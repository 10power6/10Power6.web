import heroImg from "../../assets/services/web-applications/hero.webp";
import overviewImg from "../../assets/services/web-applications/overview.webp";
import featureImg from "../../assets/services/web-applications/feature.webp";
import showcaseOneImg from "../../assets/services/web-applications/showcase-one.webp";
import showcaseTwoImg from "../../assets/services/web-applications/showcase-two.webp";

const defaultProcess = {
  title: "Our Web Application Development Process",
  subtitle: "A structured approach that keeps projects on track, transparent, and aligned with your business objectives.",
  steps: [
    { number: "01", title: "Discovery", description: "We analyze your business goals, user needs, technical requirements, and existing systems to define a clear project roadmap." },
    { number: "02", title: "Architecture & Design", description: "Our team designs scalable system architecture, database models, and intuitive user interfaces tailored to your workflow." },
    { number: "03", title: "Development", description: "We build your application using modern frameworks, clean code practices, and rigorous testing at every stage." },
    { number: "04", title: "Launch & Support", description: "We deploy, monitor, optimize performance, and provide ongoing maintenance to keep your platform running smoothly." },
  ],
};

export default {
  slug: "web-applications",
  title: "Web Applications",
  seoTitle: "Custom Web Application Development | 10Power6 Software Agency",
  seoDescription:
    "10Power6 builds scalable custom web applications, SaaS platforms, and enterprise portals. Modern architecture, clean code, and business-focused delivery for startups and growing companies.",
  images: {
    hero: heroImg,
    heroAlt: "Custom web application dashboard displayed on multiple screens",
    overview: overviewImg,
    overviewAlt: "Software development team reviewing web application architecture",
    feature: featureImg,
    featureAlt: "Developer writing code for a scalable web application",
    showcaseOne: showcaseOneImg,
    showcaseOneAlt: "Developers collaborating on a web application project",
    showcaseTwo: showcaseTwoImg,
    showcaseTwoAlt: "Modern development workspace with multiple monitors",
  },
  hero: {
    headline: "Enterprise-Grade Web Applications Built for Scale, Speed, and Growth",
    subheading:
      "We design and develop custom web platforms, SaaS products, and business-critical applications that automate workflows, improve efficiency, and drive measurable revenue outcomes.",
    cta: "Start Your Web Project",
  },
  overview: {
    title: "Custom Web Platforms That Power Modern Businesses",
    paragraphs: [
      "At 10Power6, we build web applications that go beyond basic websites — powerful digital platforms engineered for scalability, security, and exceptional user experience. Whether you need a customer-facing portal, an internal operations dashboard, or a full SaaS product, we deliver solutions tailored to your business model.",
      "Our development team combines modern front-end frameworks with robust backend architecture to create applications that perform flawlessly under real-world demand. From authentication and role-based access to real-time data processing and third-party integrations, every feature is built with long-term growth in mind.",
      "We partner with startups, SMBs, and enterprise teams to transform complex business requirements into intuitive, maintainable software that delivers lasting competitive advantage.",
    ],
  },
  benefits: {
    title: "Why Invest in Custom Web Applications",
    subtitle: "Off-the-shelf tools often fall short. Custom web applications give you full control over features, workflows, and scalability.",
    items: [
      { title: "Increased Operational Efficiency", description: "Automate manual processes, reduce errors, and free your team to focus on high-value work with tailored workflow automation." },
      { title: "Scalable Architecture", description: "Build on foundations that grow with your user base, data volume, and feature requirements without costly rewrites." },
      { title: "Competitive Differentiation", description: "Stand out with unique features and experiences that off-the-shelf software cannot replicate for your specific market." },
      { title: "Full Data Ownership", description: "Maintain complete control over your data, security policies, and compliance requirements with self-hosted or cloud-native solutions." },
      { title: "Seamless Integrations", description: "Connect your web application to CRMs, payment gateways, ERPs, and third-party APIs for a unified digital ecosystem." },
      { title: "Long-Term ROI", description: "Reduce licensing costs, eliminate tool sprawl, and invest in a platform that appreciates in value as your business grows." },
    ],
  },
  features: {
    title: "Core Capabilities We Deliver",
    subtitle: "Every web application we build is designed with performance, security, and user experience at its core.",
    items: [
      { title: "Responsive & Accessible UI", description: "Pixel-perfect interfaces that work seamlessly across desktop, tablet, and mobile with WCAG accessibility standards." },
      { title: "Secure Authentication", description: "OAuth, SSO, multi-factor authentication, and role-based access control to protect your users and data." },
      { title: "Real-Time Features", description: "Live notifications, chat, dashboards, and collaborative tools powered by WebSockets and event-driven architecture." },
      { title: "API-First Development", description: "RESTful and GraphQL APIs that enable mobile apps, integrations, and future platform extensions." },
      { title: "Cloud-Native Deployment", description: "Deploy on AWS, Docker, or your preferred infrastructure with CI/CD pipelines for reliable releases." },
      { title: "Analytics & Reporting", description: "Built-in dashboards, export tools, and data visualization to track KPIs and business performance." },
    ],
  },
  deliverables: {
    title: "What You Receive",
    subtitle: "Transparent deliverables at every stage so you always know exactly where your project stands.",
    items: [
      "Detailed technical specification and project roadmap",
      "UI/UX wireframes and interactive prototypes",
      "Fully functional web application with source code",
      "API documentation and integration guides",
      "Automated test suite and QA report",
      "Deployment configuration and launch support",
      "Admin panel and user management system",
      "30-day post-launch support and bug fixes",
    ],
  },
  technologies: [
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Tailwind CSS",
    "Vercel",
    "Prisma",
    "Nginx",
    "GitHub",
  ],
  industries: [
    "SaaS & Technology",
    "Healthcare",
    "Finance & Fintech",
    "E-Commerce",
    "Education",
    "Logistics & Supply Chain",
    "Real Estate",
    "Professional Services",
    "Manufacturing",
    "Hospitality",
    "Legal & Compliance",
    "Media & Entertainment",
  ],
  process: defaultProcess,
  stats: [
    { label: "50+", value: "Web platforms delivered" },
    { label: "99.9%", value: "Average uptime SLA" },
    { label: "40%", value: "Avg. efficiency improvement" },
  ],
  faq: [
    { question: "How long does it take to build a custom web application?", answer: "Timeline depends on complexity. A focused MVP typically takes 8–12 weeks, while enterprise platforms with multiple modules may take 4–6 months. We provide a detailed timeline during discovery." },
    { question: "What technologies do you use for web application development?", answer: "We primarily use React for front-end, Laravel or Node.js for backend, PostgreSQL or MySQL for databases, and deploy on AWS with Docker. We select the best stack for your specific requirements." },
    { question: "Can you integrate with our existing systems?", answer: "Yes. We specialize in API integrations with CRMs, ERPs, payment processors, marketing tools, and legacy systems to create a unified digital workflow." },
    { question: "Do you provide ongoing maintenance after launch?", answer: "Absolutely. We offer flexible maintenance and support plans including bug fixes, security updates, performance optimization, and feature enhancements." },
    { question: "How do you ensure application security?", answer: "We follow OWASP best practices, implement secure authentication, encrypt sensitive data, conduct code reviews, and perform security testing before every launch." },
  ],
  cta: {
    headline: "Ready to Build Your Custom Web Application?",
    text: "Let's discuss your project requirements and create a web platform that scales with your business. Our team is ready to turn your vision into production-ready software.",
    buttonText: "Start Your Web Project",
  },
};
