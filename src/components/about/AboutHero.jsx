import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { aboutImages } from "../../data/aboutData";

export default function AboutHero({ onStartProject }) {
  return (
    <section
      aria-labelledby="about-hero-heading"
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
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
            About 10Power6
          </p>
          <h1
            id="about-hero-heading"
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building Software That Helps Businesses Grow
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            10Power6 is a software agency focused on creating scalable web applications, mobile
            apps, AI solutions, and digital experiences that help businesses launch, grow, and
            operate more efficiently.
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full lg:w-[42%]"
        >
          <img
            src={aboutImages.hero}
            alt="Software development team collaborating in a modern office"
            width={1200}
            height={800}
            loading="eager"
            className="w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_40px_120px_rgba(15,23,42,0.4)]"
          />
        </motion.figure>
      </div>
    </section>
  );
}
