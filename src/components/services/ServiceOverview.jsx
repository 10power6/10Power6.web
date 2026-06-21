import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { cardVariant, sectionVariant } from "../../utils/motionVariants";

export default function ServiceOverview({ page, theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-overview-heading" className="overflow-visible">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10"
      >
        <article className="lg:col-span-5 lg:col-start-1">
          <ServiceSectionHeading
            theme={theme}
            label="Service Overview"
            title={page.overview.title}
            titleId="service-overview-heading"
            align="left"
            className="mb-6"
          />
          <div className="space-y-5">
            {page.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={`text-base leading-8 ${t.body}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <motion.figure
          variants={cardVariant}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7 lg:col-start-6 lg:-mt-6"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-indigo-400/25 via-purple-400/10 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            className={`relative overflow-hidden rounded-[2rem] border shadow-[0_40px_120px_rgba(15,23,42,0.14)] ${
              theme === "dark" ? "border-white/10" : "border-slate-200/80"
            }`}
          >
            <img
              src={page.images.overview}
              alt={page.images.overviewAlt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover lg:aspect-[16/11]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.figure>
      </motion.div>
    </ServiceSection>
  );
}
