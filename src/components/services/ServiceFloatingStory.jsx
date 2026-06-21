import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, sectionVariant } from "../../utils/motionVariants";

export default function ServiceFloatingStory({
  image,
  imageAlt,
  label,
  title,
  description,
  bullets = [],
  theme = "dark",
}) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} className="relative overflow-visible">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-6xl"
      >
        <motion.figure
          variants={cardVariant}
          whileHover={{ scale: 1.015 }}
          className="relative mx-auto w-full max-w-4xl lg:mx-0 lg:max-w-[58%]"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className={`relative overflow-hidden rounded-[2rem] border shadow-[0_40px_120px_rgba(15,23,42,0.25)] ${
              theme === "dark" ? "border-white/10" : "border-slate-200"
            }`}
          >
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </motion.figure>

        <motion.article
          variants={cardVariant}
          className={`relative z-10 mx-auto -mt-16 w-[92%] max-w-xl rounded-[1.75rem] border p-8 sm:p-10 lg:absolute lg:bottom-8 lg:right-0 lg:mx-0 lg:-mt-0 lg:w-[48%] lg:max-w-none ${
            theme === "dark"
              ? "border-white/10 bg-slate-900/95 shadow-[0_32px_100px_rgba(0,0,0,0.5)] backdrop-blur-md"
              : "border-slate-200 bg-white/95 shadow-[0_32px_100px_rgba(15,23,42,0.12)] backdrop-blur-md"
          }`}
        >
          <ServiceSectionHeading
            theme={theme}
            label={label}
            title={title}
            description={description}
            align="left"
            className="mb-0"
          />

          {bullets.length > 0 && (
            <ul className="mt-8 space-y-3" role="list">
              {bullets.map((item) => (
                <li key={item} className={`flex items-center gap-3 text-sm font-medium ${t.body}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ring-1 ${t.iconWrap}`}>
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.article>

        <div className="hidden pb-32 lg:block" aria-hidden="true" />
      </motion.div>
    </ServiceSection>
  );
}
