import { motion } from "framer-motion";
import { whyChooseItems } from "../../data/aboutData";
import SectionHeading from "./SectionHeading";
import ServiceSection from "../services/ServiceSection";
import { getThemeClasses } from "../services/theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function WhyChooseUs({ theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="why-choose-heading">
      <SectionHeading
        theme={theme}
        label="Why Choose 10Power6"
        title="A Partner You Can Count On"
        description="We combine technical excellence with a business-first mindset to deliver software that makes a real difference."
        className="mb-14"
      />

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyChooseItems.map((item) => (
          <motion.article
            key={item.title}
            variants={cardVariant}
            whileHover={{ y: -6 }}
            className={`rounded-[1.75rem] border p-6 transition ${t.card} ${t.cardHover}`}
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${t.iconWrap}`}>
              <item.Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3
              id={item.title === whyChooseItems[0].title ? "why-choose-heading" : undefined}
              className={`text-lg font-semibold ${t.heading}`}
            >
              {item.title}
            </h3>
            <p className={`mt-3 text-sm leading-7 ${t.body}`}>{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </ServiceSection>
  );
}
