import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getThemeClasses } from "./theme";

export default function ServiceHero({ page, onStartProject }) {
  const t = getThemeClasses("dark");

  return (
    <section
      aria-labelledby="service-hero-heading"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-slate-950 pb-20 pt-28 text-slate-100 sm:min-h-[90vh] sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.2),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.15),_transparent_45%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-3xl lg:col-span-6 xl:max-w-none"
        >
          <span className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] ${t.badge}`}>
            {page.title}
          </span>
          <h1
            id="service-hero-heading"
            className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            {page.hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9 lg:max-w-none">
            {page.hero.subheading}
          </p>
          <div className="mt-11">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-95 hover:shadow-indigo-500/40"
            >
              {page.hero.cta || "Start Your Project"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="relative lg:col-span-6 lg:col-start-7"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/25 via-purple-500/10 to-transparent blur-2xl sm:-inset-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative lg:translate-x-4 xl:translate-x-8">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900/40 p-1.5 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-[2rem] sm:p-2">
              <div className="overflow-hidden rounded-[1.35rem] border border-white/10 sm:rounded-[1.65rem]">
                <img
                  src={page.images.hero}
                  alt={page.images.heroAlt}
                  width={1400}
                  height={900}
                  loading="eager"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover sm:aspect-[5/3]"
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
