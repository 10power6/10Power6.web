import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceSection from "./ServiceSection";
import { sectionVariant } from "../../utils/motionVariants";

export default function ServiceCTA({ page, onStartProject, theme = "dark" }) {
  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-cta-heading">
      <motion.article
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-indigo-950/40 p-8 shadow-[0_32px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-12"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
              Ready to Build
            </p>
            <h2 id="service-cta-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {page.cta.headline}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{page.cta.text}</p>
          </header>
          <div className="shrink-0">
            <button
              type="button"
              onClick={onStartProject}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 hover:shadow-indigo-500/30 sm:w-auto"
            >
              {page.cta.buttonText || "Start Your Project"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.article>
    </ServiceSection>
  );
}
