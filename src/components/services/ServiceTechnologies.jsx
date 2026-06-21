import { useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { resolveTechnologies, getTechnologyIconSources } from "../../data/technologiesData";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

function TechnologyIcon({ slug, color, name }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = slug ? getTechnologyIconSources(slug) : [];
  const hasError = !slug || sourceIndex >= sources.length;
  const brandColor = `#${color}`;

  if (hasError) {
    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-white/10">
        <Code2 className="h-4 w-4 text-indigo-300" aria-hidden="true" />
        <span className="sr-only">{name}</span>
      </div>
    );
  }

  const iconUrl = sources[sourceIndex];

  return (
    <>
      <img src={iconUrl} alt="" className="hidden" onError={() => setSourceIndex((i) => i + 1)} referrerPolicy="no-referrer" />
      <span
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        style={{
          backgroundColor: brandColor,
          maskImage: `url("${iconUrl}")`,
          WebkitMaskImage: `url("${iconUrl}")`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </>
  );
}

function TechnologyCard({ tech, theme }) {
  const t = getThemeClasses(theme);
  const isDark = theme === "dark";

  return (
    <article
      className={`group flex h-full items-center gap-3 rounded-2xl border px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-4 ${
        isDark
          ? "border-white/10 bg-slate-900/60 hover:border-indigo-500/35 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
          : "border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)]"
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105 ${t.iconWrap}`}
      >
        <TechnologyIcon slug={tech.slug} color={tech.color} name={tech.name} />
      </div>
      <h3 className={`text-sm font-semibold leading-snug sm:text-base ${t.heading}`}>{tech.name}</h3>
    </article>
  );
}

export default function ServiceTechnologies({ page, theme = "dark" }) {
  const isDark = theme === "dark";
  const technologies = resolveTechnologies(page.technologies);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-tech-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute right-1/4 top-0 h-64 w-64 rounded-full blur-3xl ${isDark ? "bg-indigo-500/10" : "bg-indigo-400/10"}`} />
      </div>

      <ServiceSectionHeading
        theme={theme}
        label="Technologies"
        title="Tools & Technologies We Use"
        description="We select proven technologies that deliver performance, security, and long-term maintainability for every project."
        titleId="service-tech-heading"
      />

      <motion.ul
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="list"
      >
        {technologies.map((tech) => (
          <motion.li key={tech.name} variants={cardVariant}>
            <TechnologyCard tech={tech} theme={theme} />
          </motion.li>
        ))}
      </motion.ul>
    </ServiceSection>
  );
}
