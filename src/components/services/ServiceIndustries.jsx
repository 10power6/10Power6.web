import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { resolveIndustries } from "../../data/industriesData";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function ServiceIndustries({ page, theme = "light" }) {
  const t = getThemeClasses(theme);
  const isDark = theme === "dark";
  const industries = resolveIndustries(page.industries);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-industries-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute left-1/4 top-0 h-72 w-72 rounded-full blur-3xl ${
            isDark ? "bg-indigo-500/10" : "bg-indigo-400/10"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-purple-500/8" : "bg-purple-400/8"
          }`}
        />
      </div>

      <ServiceSectionHeading
        theme={theme}
        label="Industries Served"
        title="Solutions for Diverse Business Sectors"
        description="We adapt our expertise to the unique challenges, compliance requirements, and growth goals of each industry we serve."
        titleId="service-industries-heading"
      />

      <motion.ul
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        role="list"
      >
        {industries.map((industry) => {
          const Icon = industry.icon;

          return (
            <motion.li key={industry.name} variants={cardVariant}>
              <article
                className={`group relative overflow-hidden rounded-[1.25rem] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                  isDark
                    ? "border-white/10 bg-slate-900/60 hover:border-indigo-500/35 hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]"
                    : "border-slate-200/80 bg-white/90 hover:border-indigo-300 hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isDark
                      ? "bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-purple-500/[0.06]"
                      : "bg-gradient-to-br from-indigo-50/80 via-transparent to-purple-50/60"
                  }`}
                  aria-hidden="true"
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105 ${t.iconWrap}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <h3 className={`text-base font-semibold leading-snug ${t.heading}`}>{industry.name}</h3>
                    <p className={`text-sm leading-6 ${t.muted}`}>{industry.description}</p>
                  </div>
                </div>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </ServiceSection>
  );
}
