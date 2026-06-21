import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, sectionVariant } from "../../utils/motionVariants";

export default function ServiceSplitStory({
  image,
  imageAlt,
  label,
  title,
  description,
  bullets = [],
  imagePosition = "left",
  theme = "light",
}) {
  const t = getThemeClasses(theme);
  const imageFirst = imagePosition === "left";

  return (
    <ServiceSection theme={theme} className="relative overflow-visible">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8"
      >
        <motion.figure
          variants={cardVariant}
          whileHover={{ scale: 1.02 }}
          className={`relative lg:col-span-6 ${imageFirst ? "lg:order-1" : "lg:order-2 lg:col-start-7"}`}
        >
          <div
            className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] blur-3xl ${
              theme === "dark" ? "bg-indigo-500/15" : "bg-indigo-400/20"
            }`}
            aria-hidden="true"
          />
          <div
            className={`relative overflow-hidden rounded-[2rem] border shadow-[0_32px_100px_rgba(15,23,42,0.18)] ${
              theme === "dark" ? "border-white/10 shadow-black/40" : "border-slate-200/80"
            }`}
          >
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.figure>

        <motion.article
          variants={cardVariant}
          className={`lg:col-span-6 ${imageFirst ? "lg:order-2 lg:-ml-10 lg:pl-4" : "lg:order-1 lg:-mr-10 lg:pr-4 lg:col-start-1 lg:row-start-1"}`}
        >
          <div
            className={`rounded-[1.75rem] border p-8 sm:p-10 lg:p-12 ${
              theme === "dark"
                ? "border-white/10 bg-slate-900/90 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm"
                : "border-slate-200/80 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
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
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ring-1 ${t.iconWrap}`}
                    >
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.article>
      </motion.div>
    </ServiceSection>
  );
}
