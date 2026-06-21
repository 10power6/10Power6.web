import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function ServiceBenefits({ page, theme = "dark" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-benefits-heading">
      <ServiceSectionHeading
        theme={theme}
        label="Business Value"
        title={page.benefits.title}
        description={page.benefits.subtitle}
        titleId="service-benefits-heading"
      />

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {page.benefits.items.map((item) => (
          <motion.article
            key={item.title}
            variants={cardVariant}
            whileHover={{ y: -6 }}
            className={`rounded-[1.75rem] border p-6 transition duration-300 ${t.card} ${t.cardHover}`}
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${t.iconWrap}`}>
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={`text-lg font-semibold ${t.heading}`}>{item.title}</h3>
            <p className={`mt-3 text-sm leading-7 ${t.body}`}>{item.description}</p>
          </motion.article>
        ))}
      </motion.div>

      {page.stats?.length > 0 && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {page.stats.map((stat) => (
            <motion.article
              key={stat.value}
              variants={cardVariant}
              className={`rounded-2xl p-6 text-center ring-1 ${t.statCard}`}
            >
              <p className={`text-3xl font-bold sm:text-4xl ${t.heading}`}>{stat.label}</p>
              <p className={`mt-2 text-sm ${t.muted}`}>{stat.value}</p>
            </motion.article>
          ))}
        </motion.div>
      )}
    </ServiceSection>
  );
}
