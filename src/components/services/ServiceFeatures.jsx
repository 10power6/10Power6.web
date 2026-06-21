import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, containerVariant, sectionVariant } from "../../utils/motionVariants";

export default function ServiceFeatures({ page, theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-features-heading">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-start gap-12 lg:grid-cols-2"
      >
        <div>
          <ServiceSectionHeading
            theme={theme}
            label="Key Features"
            title={page.features.title}
            description={page.features.subtitle}
            titleId="service-features-heading"
            align="left"
            className="mb-10"
          />

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4"
          >
            {page.features.items.map((item) => (
              <motion.article
                key={item.title}
                variants={cardVariant}
                whileHover={{ x: 4 }}
                className={`flex gap-4 rounded-2xl border p-5 transition ${t.card} ${t.cardHover}`}
              >
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${t.iconWrap}`}>
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`font-semibold ${t.heading}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${t.body}`}>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div>
          <ServiceSectionHeading
            theme={theme}
            label="Deliverables"
            title={page.deliverables.title}
            description={page.deliverables.subtitle}
            align="left"
            className="mb-10"
          />

          <motion.ul
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-3"
            role="list"
          >
            {page.deliverables.items.map((item) => (
              <motion.li
                key={item}
                variants={cardVariant}
                className={`flex items-start gap-3 rounded-xl border px-5 py-4 text-sm leading-7 ${t.card}`}
              >
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"}`} aria-hidden="true" />
                <span className={t.body}>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <figure className="mt-10">
            <img
              src={page.images.feature}
              alt={page.images.featureAlt}
              width={1000}
              height={667}
              loading="lazy"
              className={`w-full rounded-[2rem] border object-cover ${theme === "dark" ? "border-white/10" : "border-slate-200 shadow-lg"}`}
            />
          </figure>
        </div>
      </motion.div>
    </ServiceSection>
  );
}
