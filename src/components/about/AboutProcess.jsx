import { motion } from "framer-motion";
import { aboutImages, aboutProcessSteps } from "../../data/aboutData";
import ServiceSection, { ServiceSectionHeading } from "../services/ServiceSection";
import { getThemeClasses } from "../services/theme";
import { sectionVariant } from "../../utils/motionVariants";

export default function AboutProcess({ theme = "dark" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="about-process-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute left-8 top-12 h-72 w-72 rounded-full blur-3xl ${theme === "dark" ? "bg-gradient-to-br from-indigo-500/10 to-transparent" : "bg-gradient-to-br from-indigo-500/5 to-transparent"}`} />
        <div className={`absolute right-8 bottom-12 h-64 w-64 rounded-full blur-3xl ${theme === "dark" ? "bg-gradient-to-br from-purple-500/10 to-transparent" : "bg-gradient-to-br from-purple-500/5 to-transparent"}`} />
      </div>

      <ServiceSectionHeading
        theme={theme}
        label="Our Process"
        title="How We Deliver Results"
        description="A proven four-step approach that keeps projects focused, transparent, and aligned with your business goals."
        titleId="about-process-heading"
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <figure className="hidden lg:block">
          <div
            className={`overflow-hidden rounded-[1.75rem] border p-1.5 backdrop-blur-sm sm:rounded-[2rem] sm:p-2 ${
              theme === "dark"
                ? "border-white/15 bg-slate-900/40 shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
                : "border-slate-200/80 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.08)]"
            }`}
          >
            <div className={`overflow-hidden rounded-[1.35rem] border sm:rounded-[1.65rem] ${theme === "dark" ? "border-white/10" : "border-slate-200/80"}`}>
              <img
                src={aboutImages.process}
                alt="Developer working on software code during the development process"
                width={1000}
                height={667}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </figure>

        <ol className="relative space-y-8">
          <div
            className={`absolute left-[1.65rem] top-4 hidden h-[calc(100%-2rem)] w-px sm:block ${theme === "dark" ? "bg-gradient-to-b from-indigo-500/40 via-indigo-400/20 to-transparent" : "bg-gradient-to-b from-indigo-300/60 via-indigo-200/30 to-transparent"}`}
            aria-hidden="true"
          />

          {aboutProcessSteps.map((step, index) => (
            <li key={step.number}>
              <article className="relative flex gap-5 sm:gap-6">
                <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${t.iconWrap}`}>
                  <step.Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="pt-1">
                  <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${t.label}`}>
                    Step {step.number}
                  </p>
                  <h3 className={`mt-1 text-xl font-semibold ${t.heading}`}>
                    {step.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-7 ${t.body}`}>{step.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </motion.div>
    </ServiceSection>
  );
}
