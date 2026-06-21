import heroImg from "../../assets/services/strategy-support/hero.webp";
import overviewImg from "../../assets/services/strategy-support/overview.webp";
import featureImg from "../../assets/services/strategy-support/feature.webp";

export default {
  slug: "strategy-support",
  title: "Strategy & Support",
  seoTitle: "Software Strategy, Launch Planning & Support | 10Power6 Agency",
  seoDescription:
    "10Power6 provides software strategy consulting, product roadmapping, launch planning, and ongoing technical support to help businesses scale digital products with confidence.",
  images: {
    hero: heroImg,
    heroAlt: "Business team collaborating on software strategy and product planning",
    overview: overviewImg,
    overviewAlt: "Professional team meeting to discuss technology strategy and support",
    feature: featureImg,
    featureAlt: "Team collaboration session for software project planning",
  },
  hero: {
    headline: "Strategic Guidance and Support That Keeps Your Technology Future-Ready",
    subheading:
      "We combine product strategy, launch planning, and ongoing technical support to help modern businesses make smarter technology decisions, launch with confidence, and scale reliably.",
    cta: "Schedule a Strategy Call",
  },
  overview: {
    title: "Technology Strategy and Support for Growing Businesses",
    paragraphs: [
      "Building great software is only half the challenge — knowing what to build, when to launch, and how to maintain it over time requires strategic expertise that many teams lack internally. At 10Power6, we fill that gap with consulting, planning, and support services designed for growth-stage businesses.",
      "Our strategy services help you define product roadmaps, prioritize features, evaluate technology choices, and align digital initiatives with revenue goals. Our support services ensure your existing products remain secure, performant, and evolving with your market.",
      "Whether you are preparing for a major launch, navigating a technical pivot, or need reliable ongoing support, we partner with your team as an extension of your technology leadership.",
    ],
  },
  benefits: {
    title: "Why Strategy and Support Matter",
    subtitle: "The right strategy prevents costly mistakes. Reliable support ensures your technology investment continues delivering value.",
    items: [
      { title: "Clear Product Direction", description: "Defined roadmaps and prioritized feature lists ensure development effort focuses on what drives the most business impact." },
      { title: "Reduced Technical Risk", description: "Expert architecture reviews and technology assessments prevent costly rebuilds and security vulnerabilities down the road." },
      { title: "Faster Time to Launch", description: "Structured launch planning eliminates last-minute surprises and ensures your product goes live smoothly and on schedule." },
      { title: "Ongoing Stability", description: "Proactive monitoring, security updates, and performance optimization keep your product reliable for users and stakeholders." },
      { title: "Informed Technology Decisions", description: "Unbiased guidance on frameworks, platforms, and vendors based on your specific requirements, not vendor sales pitches." },
      { title: "Long-Term Partnership", description: "A dedicated team that understands your product history, business goals, and technical landscape for consistent, context-aware support." },
    ],
  },
  features: {
    title: "Strategy & Support Services",
    subtitle: "Comprehensive consulting and support covering every stage of your product lifecycle.",
    items: [
      { title: "Product Strategy & Roadmapping", description: "Feature prioritization, market analysis, competitive positioning, and quarterly roadmap planning aligned with business goals." },
      { title: "Technology Assessment", description: "Architecture reviews, code audits, security assessments, and technology stack evaluations with actionable recommendations." },
      { title: "Launch Planning & Execution", description: "Go-to-market checklists, deployment coordination, monitoring setup, and launch day support for smooth product releases." },
      { title: "Ongoing Maintenance & Updates", description: "Bug fixes, dependency updates, security patches, and performance optimization on a scheduled maintenance cadence." },
      { title: "Team Training & Documentation", description: "Technical documentation, runbooks, and training sessions to empower your internal team to manage and extend your product." },
      { title: "Scaling & Growth Consulting", description: "Infrastructure scaling plans, performance optimization, and architecture evolution as your user base and feature set grow." },
    ],
  },
  deliverables: {
    title: "Engagement Deliverables",
    subtitle: "Tangible outputs that provide clarity, direction, and ongoing value for your technology investment.",
    items: [
      "Product strategy document and roadmap",
      "Technology assessment report",
      "Launch readiness checklist and plan",
      "Architecture documentation and diagrams",
      "Monthly support and maintenance reports",
      "Performance and uptime monitoring dashboards",
      "Security audit and remediation plan",
      "Quarterly strategy review sessions",
    ],
  },
  technologies: ["React", "Laravel", "Node.js", "AWS", "Docker", "PostgreSQL", "GitHub", "Jira", "Figma", "TypeScript", "PHP", "MySQL"],
  industries: ["SaaS & Technology", "Healthcare", "Finance & Fintech", "E-Commerce", "Education", "Professional Services", "Startups", "Enterprise"],
  process: {
    title: "Our Consulting & Support Process",
    subtitle: "A partnership model that adapts to your needs — from one-time assessments to ongoing retained support.",
    steps: [
      { number: "01", title: "Assessment", description: "We review your current product, technology stack, business goals, and challenges to understand where you are and where you need to go." },
      { number: "02", title: "Strategy & Planning", description: "We deliver a prioritized action plan covering roadmap, architecture, launch timeline, and support requirements." },
      { number: "03", title: "Execution Support", description: "We work alongside your team to implement recommendations, coordinate launches, and resolve technical challenges." },
      { number: "04", title: "Ongoing Partnership", description: "We provide continuous support, quarterly reviews, and strategic guidance as your product and business evolve." },
    ],
  },
  stats: [
    { label: "92%", value: "Client satisfaction rate" },
    { label: "1.5x", value: "Faster launch readiness" },
    { label: "99%", value: "Support response rate" },
  ],
  faq: [
    { question: "What is the difference between strategy consulting and development?", answer: "Strategy consulting focuses on planning, architecture, and decision-making without building code. We also offer development services and can transition seamlessly from strategy to execution." },
    { question: "Do you support products built by other teams?", answer: "Yes. We regularly audit, maintain, and support products built by other agencies or internal teams. We start with a codebase assessment to understand the current state." },
    { question: "What does ongoing support include?", answer: "Our support plans typically include bug fixes, security updates, dependency management, performance monitoring, and a monthly allocation of enhancement hours." },
    { question: "How quickly do you respond to support requests?", answer: "Response times depend on your support tier. Standard plans include next-business-day response, with priority and emergency tiers available for critical issues." },
    { question: "Can you help us decide what to build next?", answer: "Absolutely. Product roadmapping is one of our core strategy services. We help prioritize features based on user feedback, market data, and business impact." },
  ],
  cta: {
    headline: "Ready to Plan Your Next Move with Confidence?",
    text: "Whether you need a one-time strategy assessment or a long-term support partner, our team is ready to help you make smarter technology decisions.",
    buttonText: "Schedule a Strategy Call",
  },
};
