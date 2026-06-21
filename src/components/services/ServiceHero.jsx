import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getThemeClasses } from "./theme";

export default function ServiceHero({ page, onStartProject }) {
  const t = getThemeClasses("dark");

  return (
    <section
      aria-labelledby="service-hero-heading"
      className="relative overflow-hidden bg-slate-950 pb-16 pt-24 text-slate-100 lg:pb-24 lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),_transparent_20%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className={`inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${t.badge}`}>
            {page.title}
          </span>
          <h1 id="service-hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {page.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {page.hero.subheading}
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 hover:shadow-indigo-500/30"
            >
              {page.hero.cta || "Start Your Project"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full lg:w-[42%]"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.4)]">
            <img
              src={page.images.hero}
              alt={page.images.heroAlt}
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
