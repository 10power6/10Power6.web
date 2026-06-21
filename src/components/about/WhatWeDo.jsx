import { motion } from "framer-motion";
import { whatWeDoItems } from "../../data/aboutData";
import SectionHeading from "./SectionHeading";
import ServiceSection from "../services/ServiceSection";
import { getThemeClasses } from "../services/theme";
import { cardVariant, containerVariant } from "../../utils/motionVariants";

export default function WhatWeDo({ theme = "dark" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="what-we-do-heading" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute left-6 top-10 h-72 w-72 rounded-full blur-3xl ${theme === "dark" ? "bg-gradient-to-br from-indigo-500/10 to-transparent" : "bg-gradient-to-br from-indigo-500/5 to-transparent"}`} />
        <div className={`absolute right-6 top-1/4 h-56 w-56 rounded-full blur-3xl ${theme === "dark" ? "bg-gradient-to-br from-purple-500/10 to-transparent" : "bg-gradient-to-br from-purple-500/5 to-transparent"}`} />
      </div>

      <SectionHeading
        theme={theme}
        label="What We Do"
        title="End-to-End Software Services"
        description="From concept to launch and beyond, we deliver the full stack of services modern businesses need to compete and grow."
        className="mb-14"
      />

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {whatWeDoItems.map((item) => (
          <motion.article
            key={item.title}
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`group relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-xl transition-all duration-500 ${t.card} ${t.cardHover}`}
          >
            {theme === "dark" && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            )}
            <div className="relative z-10">
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${t.iconWrap}`}>
                <item.Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3
                id={item.title === whatWeDoItems[0].title ? "what-we-do-heading" : undefined}
                className={`text-lg font-semibold ${t.heading}`}
              >
                {item.title}
              </h3>
              <p className={`mt-3 text-sm leading-7 ${t.body}`}>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </ServiceSection>
  );
}
