import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { sectionVariant } from "../../utils/motionVariants";

export default function ServiceFAQ({ page, theme = "light" }) {
  const t = getThemeClasses(theme);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-faq-heading">
      <ServiceSectionHeading
        theme={theme}
        label="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about our services, process, and how we help businesses succeed."
        titleId="service-faq-heading"
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-3xl space-y-4"
      >
        {page.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={item.question} className={`overflow-hidden rounded-2xl border ${t.faqItem}`}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold transition sm:text-lg ${t.heading}`}
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${t.label}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className={`border-t px-6 py-5 text-sm leading-7 ${theme === "dark" ? "border-white/10" : "border-slate-200"} ${t.body}`}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </motion.div>
    </ServiceSection>
  );
}
