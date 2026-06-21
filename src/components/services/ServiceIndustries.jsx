import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function ServiceIndustries({ page, theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-industries-heading">
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
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {page.industries.map((industry) => (
          <motion.li key={industry} variants={cardVariant}>
            <article
              className={`flex items-center gap-4 rounded-2xl border px-5 py-4 transition ${t.industryPill} ${t.cardHover}`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${t.iconWrap}`}>
                <Building2 className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className={`text-sm font-semibold sm:text-base ${t.heading}`}>{industry}</h3>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </ServiceSection>
  );
}
