/**
 * Immersive storytelling blocks per service page.
 * Images are resolved from each page's `images` object via `imageKey`.
 */
export const serviceShowcaseBlocks = {
  "web-applications": [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Built for Scale",
      title: "Software that grows with your business",
      description:
        "From MVP to enterprise platform, we architect web applications that handle real traffic, complex workflows, and evolving product roadmaps without compromise.",
    },
    {
      type: "split",
      imageKey: "overview",
      imagePosition: "left",
      theme: "light",
      label: "Product Engineering",
      title: "Turn complex requirements into intuitive experiences",
      description:
        "Our teams translate business logic into clean interfaces and robust backends — so your users get clarity and your operations get efficiency.",
      bullets: ["Modular architecture", "Performance-first delivery", "Security by design"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Ship with Confidence",
      title: "Production-ready code, every release",
      description:
        "Automated testing, CI/CD pipelines, and observability baked in from day one — so launches feel calm, not chaotic.",
    },
  ],
  "ai-integration": [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Intelligent Systems",
      title: "AI that works inside your existing workflows",
      description:
        "We embed practical AI — chatbots, automation, and custom models — where it creates measurable impact, not novelty for its own sake.",
    },
    {
      type: "floating",
      imageKey: "overview",
      theme: "dark",
      label: "Human + Machine",
      title: "Augment teams, don't replace them",
      description:
        "Smart assistants, document processing, and predictive insights designed to amplify your people and accelerate decision-making.",
      bullets: ["Custom model integration", "Workflow automation", "Responsible AI practices"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Future Ready",
      title: "From prototype to production AI",
      description:
        "We validate quickly, integrate securely, and scale AI capabilities as your data and use cases mature.",
    },
  ],
  "digital-marketing": [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Growth Engine",
      title: "Marketing that connects strategy to revenue",
      description:
        "Campaigns, funnels, and analytics aligned with your business goals — so every dollar spent moves the needle.",
    },
    {
      type: "split",
      imageKey: "overview",
      imagePosition: "right",
      theme: "light",
      label: "Full-Funnel",
      title: "Attract, engage, and convert with precision",
      description:
        "We combine creative storytelling with data-driven optimization across paid, organic, and conversion channels.",
      bullets: ["Audience targeting", "Conversion optimization", "Performance reporting"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Measurable Impact",
      title: "Clarity in every campaign",
      description:
        "Dashboards, attribution, and ongoing refinement keep your marketing accountable and continuously improving.",
    },
  ],
  "mobile-applications": [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Mobile First",
      title: "Apps people open again and again",
      description:
        "Native-feeling experiences with smooth performance, thoughtful UX, and features that earn loyalty on iOS and Android.",
    },
    {
      type: "split",
      imageKey: "overview",
      imagePosition: "left",
      theme: "light",
      label: "End-to-End",
      title: "From wireframe to App Store",
      description:
        "Design, development, testing, and launch support — with backend APIs and analytics integrated from the start.",
      bullets: ["Cross-platform options", "Offline-ready UX", "Push & real-time features"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Built to Last",
      title: "Maintainable mobile products",
      description:
        "Clean codebases, documented APIs, and release pipelines that make iteration fast long after launch day.",
    },
  ],
  websites: [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Brand Presence",
      title: "Websites that communicate authority instantly",
      description:
        "Premium design, fast load times, and conversion-focused layouts that turn visitors into qualified leads.",
    },
    {
      type: "floating",
      imageKey: "overview",
      theme: "dark",
      label: "Craft & Performance",
      title: "Beautiful on every screen, blazing fast everywhere",
      description:
        "Responsive layouts, accessible markup, and Core Web Vitals optimization — because first impressions happen in milliseconds.",
      bullets: ["SEO-ready structure", "CMS flexibility", "Conversion-focused UX"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Launch Ready",
      title: "Go live with confidence",
      description:
        "Hosting setup, analytics, forms, and security configured before launch — so your site works hard from day one.",
    },
  ],
  seo: [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Search Dominance",
      title: "Organic visibility that compounds over time",
      description:
        "Technical SEO, content strategy, and authority building designed for sustainable rankings — not quick fixes.",
    },
    {
      type: "split",
      imageKey: "overview",
      imagePosition: "right",
      theme: "light",
      label: "Technical + Content",
      title: "Fix the foundation, then grow the footprint",
      description:
        "Site audits, on-page optimization, and content plans that align search intent with your business offerings.",
      bullets: ["Technical audits", "Keyword strategy", "Content optimization"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Transparent Results",
      title: "Track progress you can trust",
      description:
        "Clear reporting on rankings, traffic, and conversions — with actionable recommendations every month.",
    },
  ],
  "strategy-support": [
    {
      type: "parallax",
      imageKey: "hero",
      label: "Strategic Partner",
      title: "Technology decisions with long-term clarity",
      description:
        "Roadmaps, architecture reviews, and launch planning that align engineering investment with business outcomes.",
    },
    {
      type: "split",
      imageKey: "overview",
      imagePosition: "left",
      theme: "light",
      label: "Advisory",
      title: "Guidance when stakes are high",
      description:
        "Whether you're scaling, migrating, or launching something new — we help you choose the right path and execute it.",
      bullets: ["Technology roadmaps", "Vendor evaluation", "Risk mitigation"],
    },
    {
      type: "parallax",
      imageKey: "feature",
      label: "Ongoing Support",
      title: "A team that stays with you",
      description:
        "Maintenance, optimization, and strategic check-ins that keep your digital products healthy and competitive.",
    },
  ],
};

export function getServiceShowcase(page) {
  const blocks = serviceShowcaseBlocks[page.slug] || [];
  return blocks.map((block) => ({
    ...block,
    image: page.images[block.imageKey],
    imageAlt: page.images[`${block.imageKey}Alt`],
  }));
}
