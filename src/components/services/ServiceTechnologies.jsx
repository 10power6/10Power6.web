import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { resolveTechnologies } from "../../data/technologiesData";
import { cardVariant, containerVariant } from "../../utils/motionVariants";
import TechnologyCard from "./TechnologyCard";

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
        className="mt-10 grid grid-cols-5 gap-2 min-[400px]:grid-cols-6 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
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
