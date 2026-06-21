import { motion } from "framer-motion";
import ServiceSection, { ServiceSectionHeading } from "./ServiceSection";
import { getThemeClasses } from "./theme";
import { sectionVariant } from "../../utils/motionVariants";

export default function ServiceOverview({ page, theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="service-overview-heading">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <article>
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

        <figure>
          <img
            src={page.images.overview}
            alt={page.images.overviewAlt}
            width={1000}
            height={667}
            loading="lazy"
            className={`w-full rounded-[2rem] border object-cover shadow-[0_32px_100px_rgba(15,23,42,0.12)] ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}
          />
        </figure>
      </motion.div>
    </ServiceSection>
  );
}
