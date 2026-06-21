import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { sectionVariant } from "../../utils/motionVariants";

export default function ServiceProcess({ page, theme = "dark" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-process-heading">
      <ServiceSectionHeading
        theme={theme}
        label="Our Workflow"
        title={page.process.title}
        description={page.process.subtitle}
        titleId="service-process-heading"
      />

      <motion.ol
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {page.process.steps.map((step, index) => (
          <li key={step.number}>
            <article className={`relative h-full rounded-[1.75rem] border p-6 ${t.card}`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${t.label}`}>
                Step {step.number}
              </p>
              <h3 className={`mt-3 text-xl font-semibold ${t.heading}`}>{step.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${t.body}`}>{step.description}</p>
              {index < page.process.steps.length - 1 && (
                <span
                  className={`absolute -right-3 top-1/2 hidden h-px w-6 lg:block ${theme === "dark" ? "bg-indigo-500/30" : "bg-indigo-300"}`}
                  aria-hidden="true"
                />
              )}
            </article>
          </li>
        ))}
      </motion.ol>
    </ServiceSection>
  );
}
