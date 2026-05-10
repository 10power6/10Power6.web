import { useEffect, useMemo, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const slides = [
  {
    tag: "10Power6 Agency",
    title: "We build software that scales your business.",
    body: "From idea to launch, we design and deliver products that turn traffic into revenue.",
    cta: "Explore Services",
    href: "#services",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
  },
  {
    tag: "Growth Focused",
    title: "Marketing + engineering under one roof.",
    body: "We combine digital marketing, SEO, and high-performance applications to drive measurable growth.",
    cta: "Book a Consultation",
    href: "#contact",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80",
  },
  {
    tag: "Modern Delivery",
    title: "Websites and mobile apps users love.",
    body: "Fast, secure, and conversion-focused experiences built for long-term growth.",
    cta: "See What We Build",
    href: "#services",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1800&q=80",
  },
];

const services = [
  {
    name: "Web Applications",
    description: "Custom web apps engineered for performance, scalability, and great UX. We build robust platforms that grow with your business.",
    icon: "💻",
    color: "from-blue-500/30 to-cyan-500/20",
    accent: "indigo",
  },
  {
    name: "Digital Marketing",
    description: "Data-backed campaign strategy focused on qualified traffic and conversion. We drive measurable results through intelligent marketing.",
    icon: "📊",
    color: "from-purple-500/30 to-pink-500/20",
    accent: "purple",
  },
  {
    name: "SEO",
    description: "Technical and content SEO optimization to improve rankings and organic reach. Dominate search results, not just appear in them.",
    icon: "🎯",
    color: "from-amber-500/30 to-orange-500/20",
    accent: "amber",
  },
  {
    name: "Websites",
    description: "Modern responsive websites designed to communicate value and convert visitors into customers with stunning experiences.",
    icon: "🌐",
    color: "from-green-500/30 to-emerald-500/20",
    accent: "green",
  },
  {
    name: "Mobile Apps",
    description: "iOS and Android app development with intuitive experiences and robust APIs. Apps that users love to use every day.",
    icon: "📱",
    color: "from-pink-500/30 to-rose-500/20",
    accent: "pink",
  },
  {
    name: "Strategy & Support",
    description: "Roadmapping, launch planning, and ongoing optimization to maximize product outcomes. We're your long-term growth partner.",
    icon: "🚀",
    color: "from-indigo-500/30 to-blue-500/20",
    accent: "indigo",
  },
];

const processStages = [
  {
    number: "01",
    title: "Ideate",
    description: "We collaborate with you to define the vision, strategy, and core objectives that will drive your product's success.",
    icon: "💡",
    color: "from-amber-500/30 to-orange-500/20",
  },
  {
    number: "02",
    title: "Design",
    description: "Expert UX/UI design that balances aesthetics with functionality, creating intuitive experiences users love.",
    icon: "✏️",
    color: "from-purple-500/30 to-pink-500/20",
  },
  {
    number: "03",
    title: "Develop",
    description: "Scalable, robust development using modern tech stacks, ensuring clean code and optimal performance.",
    icon: "⚙️",
    color: "from-blue-500/30 to-cyan-500/20",
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous quality assurance and testing across all platforms to ensure reliability and superior user experience.",
    icon: "✓",
    color: "from-green-500/30 to-emerald-500/20",
  },
  {
    number: "05",
    title: "Launch",
    description: "Strategic deployment with optimization, monitoring, and launch marketing to maximize impact and reach.",
    icon: "🚀",
    color: "from-indigo-500/30 to-blue-500/20",
  },
  {
    number: "06",
    title: "Support",
    description: "Ongoing maintenance, updates, and optimization to keep your product performing at peak levels.",
    icon: "🛡️",
    color: "from-cyan-500/30 to-teal-500/20",
  },
];

function ServicesSection() {
  const [visibleServices, setVisibleServices] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    services.forEach((_, index) => {
      const element = document.querySelector(`[data-service-index="${index}"]`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleServices((prev) => new Set([...prev, index]));
            observer.unobserve(element);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );

      observer.observe(element);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-24 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300 animate-fade-in">
          Our Services
        </p>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          End-to-end solutions for ambitious brands
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          10Power6 helps startups and established businesses launch digital products, improve visibility, and accelerate growth. We combine expertise in web, mobile, marketing, and strategy to deliver transformative results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.name}
            data-service-index={index}
            className={`service-card stagger-${index} ${
              visibleServices.has(index) ? "in-view" : ""
            } ${index % 2 === 0 ? "slide-left" : "slide-right"}`}
          >
            <article className="service-card-hover relative h-full rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden group">
              {/* Background gradient */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.color}`} />
              <div className="absolute inset-0 -z-10 bg-slate-900/40" />

              {/* Animated hover overlay */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-xl" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col p-8 md:p-10 z-10">
                {/* Icon */}
                <div className="service-icon text-6xl mb-6 filter drop-shadow-lg group-hover:scale-125 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-10 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
        >
          <span>Explore All Services</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    processStages.forEach((_, index) => {
      const element = document.querySelector(`[data-process-index="${index}"]`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.unobserve(element);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(element);
      observers.set(index, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
          Our Workflow
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
          Product Development Process
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          A proven methodology that transforms ideas into market-leading products. From ideation to support, every stage is optimized for success.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processStages.map((stage, index) => (
          <div key={stage.number} data-process-index={index}>
            {/* Timeline connection line (hidden on mobile, visible on desktop between cards) */}
            {index < processStages.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-24 h-32 w-8">
                <svg className="h-full w-full" viewBox="0 0 32 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 16 0 Q 16 32 32 64 Q 16 96 16 128"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}

            {/* Card */}
            <div
              className={`process-card ${
                visibleCards.has(index) ? "in-view" : ""
              } stagger-${(index % 6) + 1} relative h-full rounded-2xl border border-slate-700/50 p-8 transition-all duration-500 glassmorphism glassmorphism-hover group overflow-hidden bg-gradient-to-br ${stage.color}`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-xl" />
              </div>

              {/* Stage number and icon area */}
              <div className="flex items-start justify-between mb-5">
                <div className="process-icon text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {stage.icon}
                </div>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                  Step {stage.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  {stage.description}
                </p>
              </div>

              {/* Hover line accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105"
        >
          Start Your Project Today
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID_HERE";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID_HERE";
  const EMAIL_RECIPIENT = "sales.10power6@gmail.com";

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

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

    const formData = new FormData(formRef.current);
    const fullName = formData.get("fullName")?.toString().trim();
    const companyName = formData.get("companyName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!fullName || !companyName || !email || !service || !message) {
      setToast({
        type: "error",
        message: "Please complete all required fields before sending your inquiry.",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setToast({
        type: "error",
        message: "Please enter a valid email address so we can respond promptly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fullName,
          from_email: email,
          company_name: companyName,
          phone_number: phone,
          service_interested: service,
          message: message,
          to_email: EMAIL_RECIPIENT,
        }
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setToast({
          type: "success",
          message: "Your inquiry was sent successfully. Our team will reach out shortly.",
        });
        formRef.current.reset();
      } else {
        throw new Error("EmailJS response not successful");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setToast({
        type: "error",
        message: "There was an issue sending your inquiry. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 7000);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/3 left-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />
        <div className="absolute top-0 left-1/2 h-72 w-72 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
          Let's Connect
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Share your project vision with us. We'll review your details and get back to you within 24 hours with a tailored proposal.
        </p>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-3xl border border-slate-700/60 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
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
            } rounded-2xl border border-slate-700/50 bg-gradient-to-br from-indigo-500/10 via-slate-900/60 to-purple-500/10 p-6 backdrop-blur-sm`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">
              Email
            </p>
            <a
              href="mailto:sales.10power6@gmail.com"
              className="text-lg font-bold text-white hover:text-indigo-300 transition-colors break-all"
            >
              sales.10power6@gmail.com
            </a>
            <p className="mt-3 text-sm text-slate-300">
              We usually respond within 24 hours.
            </p>
          </div>

          {/* Quick Response */}
          <div
            className={`transform transition-all duration-700 delay-100 ${
              visibleForm ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } rounded-2xl border border-slate-700/50 bg-gradient-to-br from-green-500/10 via-slate-900/60 to-emerald-500/10 p-6 backdrop-blur-sm`}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Quick Response</p>
                <p className="text-xs text-slate-300">
                  Your inquiry is reviewed immediately by our team.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              visibleForm ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            } rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-700/20 via-slate-900/60 to-slate-700/20 p-6 backdrop-blur-sm`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-4">
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
                  className="h-10 w-10 rounded-lg border border-slate-600 bg-slate-800/50 flex items-center justify-center text-sm font-semibold text-slate-300 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
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
          } rounded-2xl border border-slate-700/50 p-8 md:p-10 backdrop-blur-sm bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 hover:border-slate-600/50 transition-all duration-300`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Company */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder="Acme Inc."
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@acme.com"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            {/* Service Interested */}
            <div className="group">
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Service Interested In
              </label>
              <select
                name="service"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white transition-all focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="">Select a service...</option>
                <option value="Web Applications">Web Applications</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                <option value="Websites">Websites</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="Strategy & Support">Strategy & Support</option>
              </select>
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Project Details / Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your project, goals, and any specific requirements..."
                rows={5}
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 transition-all resize-none focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
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

            <p className="text-xs text-slate-400 text-center">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 antialiased">
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-gradient-to-b from-slate-950/50 to-slate-950/20 border-b border-slate-700/20 transition-all duration-300 shadow-lg shadow-slate-950/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition">
            10Power6
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-indigo-300" href="#services">
              Services
            </a>
            <a className="transition hover:text-indigo-300" href="#process">
              Process
            </a>
            <a className="transition hover:text-indigo-300" href="#about">
              About
            </a>
            <a className="transition hover:text-indigo-300" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            Start a Project
          </a>
        </div>
      </header>

      <main className="">
        <section className="relative overflow-hidden min-h-screen w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-slate-950 to-slate-950" />
          <div className="relative w-full min-h-screen flex items-center">
            <div className="relative w-full min-h-screen overflow-hidden">
              {slides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeIndex
                      ? "pointer-events-auto scale-100 opacity-100"
                      : "pointer-events-none scale-[1.02] opacity-0"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8 md:px-14">
                    <div className="max-w-xl space-y-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
                        {slide.tag}
                      </p>
                      <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="text-base text-slate-300 md:text-lg">{slide.body}</p>
                      <a
                        href={slide.href}
                        className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                      >
                        {slide.cta}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-3" aria-label="Jumbotron slide navigation">
              {slides.map((slide, index) => (
                <button
                  key={slide.tag}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    index === activeIndex ? "bg-indigo-400" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              End-to-end solutions for ambitious brands
            </h2>
            <p className="mt-3 text-slate-300">
              10Power6 helps startups and established businesses launch digital products, improve visibility, and accelerate growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              </article>
            ))}
            <article className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6">
              <h3 className="text-xl font-bold text-white">Strategy & Support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Roadmapping, launch planning, and ongoing optimization to maximize product outcomes.
              </p>
            </article>
          </div>
        </section>

        <ProcessSection />

        <section id="about" className="border-y border-slate-800 bg-slate-900/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-300">
                Why 10Power6
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                A software agency built for speed and quality
              </h2>
            </div>
            <p className="text-slate-300">
              We blend product strategy, design, development, and growth marketing into one execution team. That means faster delivery, fewer handoffs, and better business results.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        <p>&copy; {year} 10Power6. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
