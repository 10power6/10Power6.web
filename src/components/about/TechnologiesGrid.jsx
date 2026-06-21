import { motion } from "framer-motion";
import { technologies } from "../../data/aboutData";
import SectionHeading from "./SectionHeading";
import ServiceSection from "../services/ServiceSection";
import { getThemeClasses } from "../services/theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function TechnologiesGrid({ theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="technologies-heading">
      <SectionHeading
        theme={theme}
        label="Technologies We Use"
        title="Modern Tools for Reliable Software"
        description="We work with proven technologies that power scalable, secure, and maintainable applications."
        className="mb-14"
      />

      <motion.ul
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        role="list"
      >
        {technologies.map((tech, index) => (
          <motion.li key={tech} variants={cardVariant}>
            <article
              className={`flex h-full items-center justify-center rounded-2xl border px-4 py-5 text-center transition hover:-translate-y-0.5 ${t.techPill} ${theme === "light" ? "hover:border-indigo-300 hover:shadow-md" : "hover:border-indigo-500/40"}`}
            >
              <h4
                id={index === 0 ? "technologies-heading" : undefined}
                className={`text-sm font-semibold sm:text-base ${t.heading}`}
              >
                {tech}
              </h4>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </ServiceSection>
  );
}
