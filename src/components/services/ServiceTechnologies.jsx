import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function ServiceTechnologies({ page, theme = "dark" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-tech-heading">
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
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        role="list"
      >
        {page.technologies.map((tech) => (
          <motion.li key={tech} variants={cardVariant}>
            <article
              className={`flex h-full items-center justify-center rounded-2xl border px-4 py-5 text-center transition hover:-translate-y-0.5 ${t.techPill} ${theme === "light" ? "hover:border-indigo-300 hover:shadow-md" : "hover:border-indigo-500/40"}`}
            >
              <h3 className="text-sm font-semibold sm:text-base">{tech}</h3>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </ServiceSection>
  );
}
