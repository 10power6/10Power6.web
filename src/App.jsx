import { useEffect, useMemo, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Brain, PenTool, Code2, CheckCircle2, Rocket, ShieldCheck, TrendingUp, Smartphone, MonitorSmartphone, BarChart3, LifeBuoy, Bot, Phone, Menu, X, ChevronDown } from "lucide-react";
import logoFileUrl from "./assets/10Power6Logo.png";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import LeadCaptureModal from "./components/LeadCaptureModal";
import TestimonialsSection from "./components/TestimonialsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import HeroCarousel from "./components/HeroCarousel";
import { useActiveSection, getNavLinkClass, getMobileNavClass } from "./hooks/useActiveSection";
import ServiceSection from "./components/services/ServiceSection";
import { getThemeClasses } from "./components/services/theme";

const services = [
  {
    name: "Web Applications",
    slug: "web-applications",
    description:
      "Custom web applications engineered for scalability, performance, and seamless user experiences. We build powerful digital platforms tailored to automate workflows, improve efficiency, and accelerate business growth using modern technologies and cloud architecture.",
    Icon: Code2,
    color: "from-blue-600/20 to-cyan-500/10",
  },{
    name: "AI Integration",
    slug: "ai-integration",
    description:
      "Intelligent AI integrations that automate processes, enhance customer experiences, and unlock operational efficiency. From AI chatbots to workflow automation and custom AI solutions, we help businesses leverage artificial intelligence for modern growth.",
    Icon: Bot,
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
    Icon: LifeBuoy,
    color: "from-indigo-600/20 to-blue-500/10",
  },
 
];

const processStages = [
  {
    number: "01",
    title: "Ideate",
    description: "We collaborate with you to define the vision, strategy, and core objectives that will drive your product's success.",
    icon: Brain,
    color: "from-amber-500/30 to-orange-500/20",
    iconGradient: "from-blue-500/25 via-violet-500/20 to-cyan-400/15",
  },
  {
    number: "02",
    title: "Design",
    description: "Expert UX/UI design that balances aesthetics with functionality, creating intuitive experiences users love.",
    icon: PenTool,
    color: "from-purple-500/30 to-pink-500/20",
    iconGradient: "from-violet-500/25 via-cyan-400/20 to-slate-900/15",
  },
  {
    number: "03",
    title: "Develop",
    description: "Scalable, robust development using modern tech stacks, ensuring clean code and optimal performance.",
    icon: Code2,
    color: "from-blue-500/30 to-cyan-500/20",
    iconGradient: "from-blue-500/25 via-cyan-400/20 to-indigo-500/15",
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous quality assurance and testing across all platforms to ensure reliability and superior user experience.",
    icon: CheckCircle2,
    color: "from-green-500/30 to-emerald-500/20",
    iconGradient: "from-cyan-400/25 via-green-400/20 to-slate-900/15",
  },
  {
    number: "05",
    title: "Launch",
    description: "Strategic deployment with optimization, monitoring, and launch marketing to maximize impact and reach.",
    icon: Rocket,
    color: "from-indigo-500/30 to-blue-500/20",
    iconGradient: "from-fuchsia-500/25 via-pink-500/20 to-indigo-500/15",
  },
  {
    number: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and optimization to keep your product performing at peak levels.",
    icon: ShieldCheck,
    color: "from-cyan-500/30 to-teal-500/20",
    iconGradient: "from-cyan-400/25 via-blue-500/20 to-slate-900/15",
  }, 
];

// Custom hook for navigation with scroll-to-section logic
function useSmartNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId) => {
    const isOnHomePage = location.pathname === "/";

    const scrollToSection = () => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    };

    if (!isOnHomePage) {
      navigate("/");
      scrollToSection();
    } else {
      scrollToSection();
    }
  };
}

function HomeNavLink({ isActive }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <a href="/" onClick={handleClick} className={getNavLinkClass(isActive)} aria-current={isActive ? "page" : undefined}>
      Home
    </a>
  );
}

function NavLink({ sectionId, label, isActive }) {
  const navigate = useSmartNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(sectionId);
  };

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={getNavLinkClass(isActive)}
      aria-current={isActive ? "true" : undefined}
    >
      {label}
    </a>
  );
}

function AboutNavLink({ isActive }) {
  return (
    <Link
      to="/about"
      className={getNavLinkClass(isActive)}
      aria-current={isActive ? "page" : undefined}
    >
      About
    </Link>
  );
}

function DesktopNav() {
  const activeSection = useActiveSection();
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="pointer-events-auto flex gap-8 text-sm font-medium">
      <HomeNavLink isActive={activeSection === "home"} />
      <NavLink sectionId="services" label="Services" isActive={activeSection === "services"} />
      <NavLink sectionId="process" label="Process" isActive={activeSection === "process"} />
      <AboutNavLink isActive={isAboutPage || activeSection === "about"} />
      <NavLink sectionId="contact" label="Contact" isActive={activeSection === "contact"} />
    </nav>
  );
}

function StartProjectLink({ className, children }) {
  const navigateToSection = useSmartNavigation();

  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        navigateToSection("contact");
      }}
      className={className}
    >
      {children}
    </a>
  );
}

function BrandLogo() {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    // Scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.a
      href="/"
      onClick={handleLogoClick}
      aria-label="10Power6"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      className="group relative inline-flex h-12 w-[3.75rem] items-center justify-center rounded-2xl p-1 md:h-14 md:w-[4.5rem] md:p-2 overflow-visible transition duration-300 ease-out hover:bg-white/5 hover:shadow-[0_0_24px_rgba(255,255,255,0.14)] cursor-pointer"
    >
      <img
        src={logoFileUrl}
        alt="10Power6 logo"
        className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 scale-[2.7] origin-left object-contain"
      />
      <span className="sr-only">10Power6</span>
    </motion.a>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useSmartNavigation();
  const router = useNavigate();
  const activeSection = useActiveSection();
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    document.body.style.position = isOpen ? "fixed" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleNavClick = (sectionId) => {
    navigate(sectionId);
    closeMenu();
  };

  const handleServiceClick = (slug) => {
    router(`/services/${slug}`);
    closeMenu();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/5 md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            aria-hidden="true"
            onClick={closeMenu}
          />

          <motion.aside
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-50 h-screen w-screen flex flex-col overflow-y-auto bg-slate-900 p-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <BrandLogo />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white shadow-2xl ring-1 ring-white/12 transition hover:bg-white/16"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6 text-2xl font-extrabold text-white">
              <button
                type="button"
                onClick={() => {
                  router("/");
                  closeMenu();
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
                }}
                className={getMobileNavClass(activeSection === "home")}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className={`flex items-center justify-between ${getMobileNavClass(activeSection === "services")}`}
              >
                <span className="text-white">Services</span>
                <span className={`${servicesOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}>
                  <ChevronDown className="h-5 w-5 text-white" />
                </span>
              </button>

              {servicesOpen && (
                <div className="space-y-3 rounded-3xl border border-white/12 bg-slate-900 p-4">
                  {services.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => handleServiceClick(service.slug)}
                      className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-100 transition hover:bg-slate-700/80 hover:text-white"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => handleNavClick("process")}
                className={getMobileNavClass(activeSection === "process")}
              >
                Process
              </button>
              <button
                type="button"
                onClick={() => {
                  router("/about");
                  closeMenu();
                }}
                className={getMobileNavClass(isAboutPage || activeSection === "about")}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className={getMobileNavClass(activeSection === "contact")}
              >
                Contact
              </button>
            </nav>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="w-full rounded-full bg-indigo-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400 hover:shadow-2xl"
              >
                Start a Project
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
}

function ServicesSection() {
  const theme = "light";
  const t = getThemeClasses(theme);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <ServiceSection theme={theme} id="services" ariaLabelledBy="services-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-6 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute right-6 top-1/4 h-56 w-56 rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className={`inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-sm ${t.badge}`}>
          Selected Services
        </span>
        <h2 id="services-heading" className={`mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl ${t.heading}`}>
          Digital Solutions Built for Modern Growth
        </h2>
        <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${t.subheading}`}>
          We engineer scalable digital experiences, AI-powered systems, and growth-focused solutions designed to help ambitious businesses lead in the modern digital era.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((svc, idx) => (
          <motion.div key={svc.name} variants={cardVariant} className="h-full">
            <Link
              to={`/services/${svc.slug}`}
              aria-labelledby={`service-${idx}`}
              className={`group relative flex h-full cursor-pointer flex-col gap-6 overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-[0_24px_60px_rgba(99,102,241,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${t.card}`}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:from-indigo-500/[0.06] group-hover:to-purple-500/[0.08] group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl ring-1 transition-transform duration-300 group-hover:-translate-y-0.5 ${t.iconWrap}`}
                  >
                    <svc.Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${t.label}`}>Service</p>
                    <h3 id={`service-${idx}`} className={`text-xl font-semibold ${t.heading}`}>
                      {svc.name}
                    </h3>
                  </div>
                </div>

                <p className={`flex-1 text-sm leading-7 ${t.body}`}>{svc.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-300 group-hover:text-indigo-500 ${t.label}`}>
                    Learn more
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:ring-indigo-400/40 ${t.iconWrap}`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </ServiceSection>
  );
}

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(-1);
  const [revealedSteps, setRevealedSteps] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    processStages.forEach((_, index) => {
      const element = document.querySelector(`[data-step-index="${index}"]`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealedSteps((prev) => new Set([...prev, index]));
            setActiveStep(index);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(element);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <ServiceSection theme="dark" id="process" ariaLabelledBy="process-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-8 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute right-8 bottom-12 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-24 h-1/2 w-[360px] -translate-x-1/2 rounded-full bg-gradient-to-r from-white/5 via-indigo-400/5 to-transparent blur-xl" />
      </div>

      <div className="mx-auto max-w-3xl pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">Product Development Process</p>
        <h2 id="process-heading" className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">Product Development Process</h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Our streamlined development workflow transforms ideas into scalable digital products through strategy, design, engineering, testing, and continuous optimization.
        </p>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-2">
        <div className="hidden lg:block absolute left-6 top-16 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-500/60 via-slate-500/30 to-transparent" />

        {processStages.map((stage, index) => (
          <motion.article
            key={stage.number}
            data-step-index={index}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.08 }}
            className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition-all duration-500 ${
              activeStep === index ? "border-indigo-400/40 bg-slate-900/90 shadow-[0_30px_80px_-40px_rgba(99,102,241,0.75)]" : "hover:border-indigo-400/20 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.5)]"
            }`}
          >
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute left-0 top-0 h-full w-full rounded-[2rem] bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-40 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/60 text-white shadow-lg shadow-slate-950/30 transition-transform duration-500 group-hover:-translate-y-1 ${stage.iconGradient} bg-gradient-to-br from-slate-900/40 via-white/10 to-transparent`}> 
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex rounded-3xl bg-white/10 p-2 shadow-inner shadow-indigo-500/20"
                  >
                    <stage.icon className="h-7 w-7 text-white" />
                  </motion.div>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300/80">Step {stage.number}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{stage.title}</h3>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">{stage.description}</p>
            </div>

            <div className="mt-8 flex items-center justify-between text-sm text-slate-400">
              <span className="font-semibold text-indigo-300/90">Progress</span>
              <span>{index + 1}/6</span>
            </div>
          </motion.article>
        ))}
      </div>
    </ServiceSection>
  );
}

function ContactSection() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(null);
  const lastSubmitRef = useRef(0);
  const [errors, setErrors] = useState({});

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "VNlZtteVt-bitO0lt";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_9zlm3gd";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_z2h8hoo";
  const EMAIL_RECIPIENT = "sales.10power6@gmail.com";
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

  useEffect(() => {
    // Initialize EmailJS if public key provided
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "VNlZtteVt-bitO0lt") {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      } catch (err) {
        // don't break the app if init fails
        console.warn("EmailJS init failed:", err);
      }
    } else {
      console.warn("EmailJS public key not set. Emails will not be sent in development.");
    }
  }, [EMAILJS_PUBLIC_KEY]);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("VITE_RECAPTCHA_SITE_KEY is not set. Contact form reCAPTCHA will not run.");
      return;
    }

    if (window.grecaptcha && window.grecaptcha.execute) {
      setRecaptchaReady(true);
      return;
    }

    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => setRecaptchaReady(true));
      existingScript.addEventListener("error", () => {
        setRecaptchaError("Unable to load reCAPTCHA. Please refresh and try again.");
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    // console.log("RECAPTCHA KEY:", RECAPTCHA_SITE_KEY);

    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaReady(true);
    script.onerror = () => setRecaptchaError("Unable to load reCAPTCHA. Please refresh and try again.");
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [RECAPTCHA_SITE_KEY]);

  const executeRecaptcha = async () => {
    if (!RECAPTCHA_SITE_KEY) {
      throw new Error("reCAPTCHA is not configured.");
    }
    if (!window.grecaptcha || !window.grecaptcha.execute) {
      throw new Error("reCAPTCHA is not ready.");
    }

    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleForm(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('[data-contact-form]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setToast(null);
    setErrors({});
    // Prevent rapid duplicate submissions (client-side)
    const now = Date.now();
    if (now - (lastSubmitRef.current || 0) < 3000) {
      setToast({ type: "error", message: "You're sending requests too quickly. Please wait a moment." });
      return;
    }
    lastSubmitRef.current = now;

    const formData = new FormData(formRef.current);
    const fullName = formData.get("fullName")?.toString().trim();
    const companyName = formData.get("companyName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const hp = formData.get("hp")?.toString();

    // Honeypot spam check
    if (hp) {
      // silently drop spam submissions
      setToast({ type: "error", message: "Submission blocked." });
      return;
    }

    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full name is required.";
    if (!companyName) newErrors.companyName = "Company name is required.";
    if (!email) newErrors.email = "Email address is required.";
    if (!service) newErrors.service = "Please select a service.";
    if (!message) newErrors.message = "Please enter a message with details.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setToast({ type: "error", message: "Please complete all required fields before sending your inquiry." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      setToast({ type: "error", message: "Please enter a valid email address so we can respond promptly." });
      return;
    }

    if (message.length < 15) {
      setErrors((prev) => ({ ...prev, message: "Please provide a bit more detail (15+ characters)." }));
      setToast({ type: "error", message: "Please provide a bit more detail about your project (15+ characters)." });
      return;
    }

    if (!RECAPTCHA_SITE_KEY) {
      setToast({ type: "error", message: "reCAPTCHA is not configured. Please contact support." });
      return;
    }

    if (!recaptchaReady) {
      setToast({ type: "error", message: "Waiting for reCAPTCHA verification. Please wait a moment and try again." });
      return;
    }

    setIsSubmitting(true);

    let recaptchaToken;
    try {
      recaptchaToken = await executeRecaptcha();
    } catch (recaptchaErr) {
      console.error("reCAPTCHA error:", recaptchaErr);
      setRecaptchaError("reCAPTCHA verification failed. Please refresh the page and try again.");
      setToast({ type: "error", message: "reCAPTCHA verification failed. Please refresh and try again." });
      setIsSubmitting(false);
      return;
    }

    if (!recaptchaToken) {
      setToast({ type: "error", message: "reCAPTCHA did not return a valid verification token. Please try again." });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: fullName,
        from_email: email,
        company_name: companyName,
        phone_number: phone,
        service_interested: service,
        message: message,
        to_email: EMAIL_RECIPIENT,
        submitted_at: new Date().toISOString(),
        recaptcha_token: recaptchaToken,
      };

//       console.log("PUBLIC KEY:", EMAILJS_PUBLIC_KEY);
//       console.log("SERVICE ID:", EMAILJS_SERVICE_ID);
// console.log("TEMPLATE ID:", EMAILJS_TEMPLATE_ID);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      
        EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE" ? EMAILJS_PUBLIC_KEY : undefined
      );

      if (result && (result.status === 200 || result.status === "OK" || result.text === "OK")) {
        setSubmitStatus("success");
        setToast({
          type: "success",
          message: "Your inquiry was sent successfully. Our team will reach out shortly.",
        });
        formRef.current.reset();
        setErrors({});
      } else {
        throw new Error("EmailJS response not successful");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setToast({
        type: "error",
        message: "There was an issue sending your inquiry. Please try again or email us directly at sales.10power6@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 7000);
    }
  };

  const theme = "light";
  const t = getThemeClasses(theme);
  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";
  const labelClass = `block text-sm font-semibold mb-2 ${theme === "light" ? "text-slate-700" : "text-slate-200"}`;
  const infoCardClass = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";
  const formCardClass = "rounded-2xl border border-slate-200 bg-white p-8 shadow-lg md:p-10";

  return (
    <ServiceSection theme={theme} id="contact" ariaLabelledBy="contact-heading" className="relative">
      <div className="mx-auto max-w-6xl">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 left-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${t.label}`}>
          Let's Connect
        </p>
        <h2 id="contact-heading" className={`mt-3 text-4xl font-extrabold leading-tight md:text-5xl ${t.heading}`}>
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className={`mt-4 text-lg ${t.body}`}>
          Share your project vision with us. We'll review your details and get back to you within 24 hours with a tailored proposal.
        </p>
      </div>

      {toast && (
        <div role="status" aria-live="polite" className="fixed inset-x-6 bottom-6 z-50 mx-auto max-w-sm rounded-3xl border border-slate-700/60 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className={`flex items-start gap-3 ${toast.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>
            <span className="mt-1 text-xl">{toast.type === "success" ? "✓" : "⚠"}</span>
            <div>
              <p className="text-sm font-semibold text-white">{toast.type === "success" ? "Inquiry Sent" : "Submission Failed"}</p>
              <p className="mt-1 text-sm text-slate-300">{toast.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info and Social */}
        <div className="space-y-8">
          {/* Email Box */}
          <div
            className={`transform transition-all duration-700 ${
              visibleForm ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } ${infoCardClass} bg-gradient-to-br from-indigo-50 via-white to-purple-50`}
          >
            <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${t.label}`}>
              Email
            </p>
            <a
              href="mailto:sales.10power6@gmail.com"
              className={`text-lg font-bold transition-colors break-all ${t.heading} hover:text-indigo-600`}
            >
              sales.10power6@gmail.com
            </a>
            <p className={`mt-3 text-sm ${t.body}`}>
              We usually respond within 24 hours.
            </p>
          </div>

          {/* Quick Response */}
          <div
            className={`transform transition-all duration-700 delay-100 ${
              visibleForm ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } ${infoCardClass} bg-gradient-to-br from-emerald-50 via-white to-green-50`}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <p className={`text-sm font-semibold mb-1 ${t.heading}`}>Quick Response</p>
                <p className={`text-xs ${t.body}`}>
                  Your inquiry is reviewed immediately by our team.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              visibleForm ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } ${infoCardClass}`}
          >
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${t.label}`}>
              Follow Us
            </p>
            <div className="flex gap-3">
              {[
                { icon: "𝕏", href: "https://twitter.com", label: "Twitter" },
                { icon: "in", href: "https://linkedin.com", label: "LinkedIn" },
                { icon: "f", href: "https://facebook.com", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-600 transition-all duration-300 hover:scale-110 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-contact-form
          className={`lg:col-span-2 transform transition-all duration-700 ${
            visibleForm ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          } ${formCardClass}`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field for basic spam protection - keep hidden from users */}
            <input type="text" name="hp" tabIndex="-1" autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
            {/* Full Name & Company */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <label className={labelClass}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-rose-300">{errors.fullName}</p>
                )}
              </div>
              <div className="group">
                <label className={labelClass}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder="Acme Inc."
                  className={inputClass}
                />
                {errors.companyName && (
                  <p className="mt-2 text-sm text-rose-300">{errors.companyName}</p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <label className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@acme.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
                )}
              </div>
              <div className="group">
                <label className={labelClass}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Service Interested */}
            <div className="group">
              <label className={labelClass}>
                Service Interested In
              </label>
              <select
                name="service"
                required
                className={inputClass}
              >
                <option value="">Select a service...</option>
                <option value="Web Applications">Web Applications</option>
                <option value="Ai Integration">Ai Integration</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                <option value="Websites">Websites</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="Strategy & Support">Strategy & Support</option>
              </select>
              {errors.service && (
                <p className="mt-2 text-sm text-rose-300">{errors.service}</p>
              )}
            </div>

            {/* Message */}
            <div className="group">
              <label className={labelClass}>
                Project Details / Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your project, goals, and any specific requirements..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-rose-300">{errors.message}</p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="rounded-lg border border-green-600/50 bg-green-500/10 p-4 text-sm text-green-300 animate-pulse">
                ✓ Thank you! We&apos;ve received your inquiry and will get back to you within 24 hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-lg border border-red-600/50 bg-red-500/10 p-4 text-sm text-red-300 animate-pulse">
                ✕ Something went wrong. Please try again or email us directly at sales.10power6@gmail.com
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 active:scale-95"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center justify-center gap-3">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending your inquiry...
                </span>
              ) : (
                "Send Inquiry"
              )}
            </button>

            <p className={`text-xs text-center ${t.muted}`}>
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
            <p className={`text-xs text-center ${t.muted}`}>
              Protected by Google reCAPTCHA for secure form submission.
            </p>
            {recaptchaError && (
              <p className="mt-2 text-xs text-rose-600 text-center">
                {recaptchaError}
              </p>
            )}
          </form>
        </div>
      </div>
      </div>
    </ServiceSection>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <LeadCaptureModal />
        <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-gradient-to-b from-slate-950/50 to-slate-950/20 border-b border-slate-700/20 transition-all duration-300 shadow-lg shadow-slate-950/50">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <MobileMenu />
              <div className="hidden md:block">
                <BrandLogo />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center md:flex">
              <DesktopNav />
            </div>

            <div className="flex items-center gap-4">
              <StartProjectLink className="hidden rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50 md:inline-flex">
                Start a Project
              </StartProjectLink>
              <div className="md:hidden pr-16">
                <BrandLogo />
              </div>
            </div>
          </div>
        </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="overflow-x-hidden">
        <HeroCarousel />

        <ServicesSection />

        <ProcessSection />

        <TestimonialsSection theme="dark" />

        <IntegrationsSection />

        <ContactSection />
      </main>
            </>
          }
        />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </Router>

      <motion.a
        href="tel:+1234567890"
        aria-label="Call us"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -6, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="group fixed left-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/95 text-white shadow-2xl shadow-indigo-500/20 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] sm:left-6 sm:bottom-6 sm:h-16 sm:w-16"
      >
        <span className="absolute -top-12 left-1/2 hidden -translate-x-1/2 rounded-full bg-slate-950/95 px-3 py-2 text-xs font-semibold text-slate-100 shadow-lg shadow-black/20 ring-1 ring-white/10 transition-all duration-300 group-hover:flex">
          Call Us
        </span>
        <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        <p>&copy; {year} 10Power6. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
