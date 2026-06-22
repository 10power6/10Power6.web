import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import ProcessStepsGrid from "./components/ProcessStepsGrid";
import { homeProcessSteps } from "./data/processVisuals";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import { Phone } from "lucide-react";
import logoFileUrl from "./assets/10Power6Logo.png";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import LeadCaptureModal from "./components/LeadCaptureModal";
import TestimonialsSection from "./components/TestimonialsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import HeroCarousel from "./components/HeroCarousel";
import ServicesSection from "./components/ServicesSection";
import { useActiveSection, getNavLinkClass } from "./hooks/useActiveSection";
import { BRAND_META_DESCRIPTION, SITE_TITLE } from "./data/branding";
import ServiceSection from "./components/services/ServiceSection";
import { getThemeClasses } from "./components/services/theme";

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

function ProcessSection() {
  return (
    <ProcessStepsGrid
      id="process"
      theme="dark"
      label="Product Development Process"
      title="Product Development Process"
      description="Our streamlined development workflow transforms ideas into scalable digital products through strategy, design, engineering, testing, and continuous optimization."
      steps={homeProcessSteps}
      titleId="process-heading"
    />
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
    console.log("RECAPTCHA KEY:", RECAPTCHA_SITE_KEY);

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
        <p className={`section-eyebrow text-xs font-bold uppercase ${t.label}`}>
          Let&apos;s Connect
        </p>
        <h2 id="contact-heading" className={`section-headline mt-4 text-4xl font-bold md:text-5xl ${t.heading}`}>
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className={`mt-5 text-base font-medium leading-8 sm:text-lg ${t.body}`}>
          Share your project vision with us. We&apos;ll review your details and get back to you within 24 hours with a tailored proposal.
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
                <option value="AI Integration">AI Integration</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="IT Consultancy">IT Consultancy</option>
                <option value="Websites">Websites</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="Strategy & Support">Strategy & Support</option>
                <option value="Other">Other</option>
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

function HomePageSEO() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    document.title = SITE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", BRAND_META_DESCRIPTION);
    } else {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = BRAND_META_DESCRIPTION;
      document.head.appendChild(meta);
    }
  }, [location.pathname]);

  return null;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 antialiased">
      <Router>
        <ScrollToTop />
        <HomePageSEO />
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
              <main>
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

      <Footer />
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
    </div>
  );
}

export default App;
