import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Users } from "lucide-react";
import { servicePages } from "../serviceData";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const page = servicePages[slug];

  const handleStartProject = () => {
    // Navigate to home and scroll to contact section
    navigate("/");
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (!page) {
      document.title = "Service not found | 10Power6";
      return;
    }

    document.title = page.seoTitle;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", page.seoDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = page.seoDescription;
      document.head.appendChild(meta);
    }
  }, [page]);

  if (!page) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Page Not Found</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">Service page unavailable.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            The service you are looking for doesn&apos;t exist or has been moved. Return to the services overview to explore our premium offerings.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Return to Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_20%)]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 pt-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300">
              {page.title}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {page.hero.subheading}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleStartProject}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.picture
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hidden basis-[42%] items-end justify-end lg:flex"
          >
            <img
              src={page.image}
              alt={`${page.title} visual`}
              className="max-w-full rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.4)]"
            />
          </motion.picture>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_32px_120px_rgba(8,17,42,0.55)] backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
                Premium Impact
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Strategic growth built around your brand and technology.</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {page.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {page.bullets.map((bullet) => (
                <article key={bullet} className="rounded-[1.75rem] border border-slate-700/60 bg-slate-950/80 p-6 text-slate-200 shadow-sm transition hover:border-indigo-500/30">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-300">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <p className="text-sm leading-7">{bullet}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 p-8 shadow-[0_22px_80px_rgba(15,23,42,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300">Performance Metrics</p>
              <div className="mt-8 grid gap-6">
                {page.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-slate-950/70 p-5 ring-1 ring-white/5">
                    <p className="text-3xl font-bold text-white">{stat.label}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Why this service matters</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Our approach combines insight, engineering, and execution to make every digital investment feel purposeful and profitable.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-10 w-10 rounded-3xl bg-indigo-500/10 text-indigo-300 ring-1 ring-white/10 flex items-center justify-center">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">High-definition execution</p>
                    <p className="text-sm text-slate-400">From concept to launch, we maintain a premium standard of craftsmanship across every interaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-10 w-10 rounded-3xl bg-slate-700/60 text-slate-200 ring-1 ring-white/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Reliable partner support</p>
                    <p className="text-sm text-slate-400">We build solutions that are secure, maintainable, and backed by clear support and scaling plans.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-10 w-10 rounded-3xl bg-indigo-500/10 text-indigo-300 ring-1 ring-white/10 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Client-first collaboration</p>
                    <p className="text-sm text-slate-400">We partner with your team to ensure every technology decision maps back to measurable business outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 lg:grid-cols-3"
        >
          {page.highlights.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-700/50 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-indigo-500/20">
              <p className="text-sm font-semibold text-indigo-300">{item.title}</p>
              <p className="mt-4 text-slate-300 leading-7">{item.text}</p>
            </article>
          ))}
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80 p-10 shadow-[0_32px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">Ready to build</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Start your next project with a premium team.</h2>
              <p className="mt-4 text-slate-300 leading-7">
                We help ambitious companies build software and AI services that feel modern, durable, and ready for growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleStartProject}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
