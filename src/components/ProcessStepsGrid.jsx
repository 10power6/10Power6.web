import { useMemo } from "react";
import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./services/ServiceSection";
import { getThemeClasses } from "./services/theme";
import { resolveProcessStepsVisuals } from "../data/processVisuals";
import { cardVariant, containerVariant } from "../utils/motionVariants";

function ProcessStepCard({ step, index, total, theme, visual }) {
  const t = getThemeClasses(theme);
  const isDark = theme === "dark";
  const progress = ((index + 1) / total) * 100;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ring-1 ring-transparent transition-all duration-500 hover:-translate-y-1 ${visual.glow} ${visual.ring} ${
        isDark
          ? "border-white/10 bg-slate-950 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]"
          : "border-slate-200/80 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)]"
      }`}
    >
      <div className="relative h-44 shrink-0 overflow-hidden rounded-t-[1.75rem] bg-slate-950 sm:h-48">
        <div
          className="absolute inset-0 origin-center transform-gpu backface-hidden transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          aria-hidden="true"
        >
          <img
            src={visual.image}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${visual.overlay} opacity-70`} />
        </div>

        <div
          className={`pointer-events-none absolute inset-0 z-[1] ${
            isDark
              ? "bg-gradient-to-t from-slate-950 from-[28%] via-slate-950/55 via-[55%] to-slate-950/10"
              : "bg-gradient-to-t from-slate-900 from-[28%] via-slate-900/55 via-[55%] to-slate-900/10"
          }`}
          aria-hidden="true"
        />

        <div className="absolute left-4 top-4 z-[2] flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/90">Step {step.number}</span>
        </div>

        <h3 className="absolute bottom-4 left-4 right-4 z-[2] text-xl font-bold leading-tight text-white sm:text-2xl">{step.title}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className={`flex-1 text-sm leading-7 ${t.body}`}>{step.description}</p>

        <div className={`mt-5 border-t pt-4 ${isDark ? "border-white/10" : "border-slate-200/80"}`}>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className={`font-semibold ${isDark ? "text-indigo-300" : "text-indigo-600"}`}>Progress</span>
            <span className={t.muted}>
              {index + 1}/{total}
            </span>
          </div>
          <div className={`h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-700 group-hover:from-amber-400 group-hover:via-pink-500 group-hover:to-indigo-400"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProcessStepsGrid({
  id,
  theme = "dark",
  label = "Our Workflow",
  title,
  description,
  steps,
  titleId = "process-steps-heading",
}) {
  const isDark = theme === "dark";
  const stepVisuals = useMemo(() => resolveProcessStepsVisuals(steps), [steps]);
  const gridClass =
    steps.length <= 4
      ? "mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
      : "relative mt-14 grid gap-6 md:grid-cols-2";

  return (
    <ServiceSection theme={theme} id={id} ariaLabelledBy={titleId} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute left-8 top-12 h-72 w-72 rounded-full blur-3xl ${isDark ? "bg-indigo-500/10" : "bg-indigo-400/10"}`}
        />
        <div
          className={`absolute bottom-12 right-8 h-64 w-64 rounded-full blur-3xl ${isDark ? "bg-purple-500/10" : "bg-purple-400/10"}`}
        />
        <div
          className={`absolute left-1/2 top-24 h-1/2 w-[360px] -translate-x-1/2 rounded-full blur-xl ${isDark ? "bg-gradient-to-r from-white/5 via-indigo-400/5 to-transparent" : "bg-gradient-to-r from-indigo-100/40 via-purple-100/20 to-transparent"}`}
        />
      </div>

      <ServiceSectionHeading
        theme={theme}
        label={label}
        title={title}
        description={description}
        titleId={titleId}
      />

      {steps.length > 4 && (
        <div
          className={`pointer-events-none absolute left-6 top-[22rem] hidden h-[calc(100%-24rem)] w-px md:block ${isDark ? "bg-gradient-to-b from-indigo-500/50 via-violet-400/20 to-transparent" : "bg-gradient-to-b from-indigo-300/60 via-indigo-200/30 to-transparent"}`}
          aria-hidden="true"
        />
      )}

      <motion.ol
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className={gridClass}
        role="list"
      >
        {steps.map((step, index) => (
          <motion.li key={`${step.number}-${step.title}`} variants={cardVariant} role="listitem">
            <ProcessStepCard step={step} index={index} total={steps.length} theme={theme} visual={stepVisuals[index]} />
          </motion.li>
        ))}
      </motion.ol>
    </ServiceSection>
  );
}
