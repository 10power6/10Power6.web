import {
  Cpu,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  Briefcase,
  Factory,
  UtensilsCrossed,
  Scale,
  Megaphone,
  Home,
  Rocket,
  Hotel,
  Palette,
  Shield,
  Globe,
  Users,
  LineChart,
  Leaf,
  Clapperboard,
  HeartHandshake,
} from "lucide-react";

export const industryCatalog = {
  "SaaS & Technology": {
    icon: Cpu,
    description: "Product-led platforms built to scale globally",
  },
  Healthcare: {
    icon: HeartPulse,
    description: "Secure, compliant digital health experiences",
  },
  "Finance & Fintech": {
    icon: Landmark,
    description: "Trusted systems for regulated financial services",
  },
  "E-Commerce": {
    icon: ShoppingCart,
    description: "High-converting storefronts and marketplaces",
  },
  Education: {
    icon: GraduationCap,
    description: "Engaging learning platforms and ed-tech tools",
  },
  "Logistics & Supply Chain": {
    icon: Truck,
    description: "Operations software that keeps goods moving",
  },
  Logistics: {
    icon: Truck,
    description: "Fleet, warehouse, and delivery optimization",
  },
  "Logistics & Delivery": {
    icon: Truck,
    description: "Last-mile apps and real-time tracking systems",
  },
  "Real Estate": {
    icon: Home,
    description: "Property platforms, portals, and CRM tools",
  },
  "Professional Services": {
    icon: Briefcase,
    description: "Client portals and workflow automation",
  },
  Manufacturing: {
    icon: Factory,
    description: "Smart factory dashboards and IoT integrations",
  },
  Hospitality: {
    icon: Hotel,
    description: "Booking engines and guest experience apps",
  },
  "Legal & Compliance": {
    icon: Scale,
    description: "Document automation and audit-ready workflows",
  },
  "Marketing & Advertising": {
    icon: Megaphone,
    description: "Campaign tools and performance analytics",
  },
  "Customer Support": {
    icon: Users,
    description: "Help desks, chatbots, and ticket automation",
  },
  "Creative Agencies": {
    icon: Palette,
    description: "Portfolio sites and client collaboration hubs",
  },
  "Fitness & Wellness": {
    icon: Leaf,
    description: "Member apps, booking, and wellness tracking",
  },
  Startups: {
    icon: Rocket,
    description: "MVPs and growth-ready product foundations",
  },
  Enterprise: {
    icon: Building2,
    description: "Large-scale systems with robust governance",
  },
  "Retail & E-Commerce": {
    icon: ShoppingCart,
    description: "Omnichannel retail and inventory platforms",
  },
  "Media & Entertainment": {
    icon: Clapperboard,
    description: "Streaming, content, and audience platforms",
  },
  "Non-Profit & Government": {
    icon: HeartHandshake,
    description: "Accessible public-sector digital services",
  },
  Insurance: {
    icon: Shield,
    description: "Policy portals and claims automation",
  },
  "Travel & Tourism": {
    icon: Globe,
    description: "Booking platforms and itinerary management",
  },
  "Food & Beverage": {
    icon: UtensilsCrossed,
    description: "Ordering systems and franchise operations",
  },
  Energy: {
    icon: LineChart,
    description: "Monitoring, billing, and sustainability dashboards",
  },
};

export function resolveIndustries(names) {
  return names.map((name) => ({
    name,
    icon: industryCatalog[name]?.icon ?? Building2,
    description: industryCatalog[name]?.description ?? "Tailored solutions for your sector",
  }));
}
