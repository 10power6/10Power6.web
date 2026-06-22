import { motion } from "framer-motion";
import { aboutImages } from "../../data/aboutData";
import { BRAND_NAME } from "../../data/branding";
import ServiceSection, { ServiceSectionHeading } from "../services/ServiceSection";
import { getThemeClasses } from "../services/theme";
import { sectionVariant } from "../../utils/motionVariants";

export default function OurStory({ theme = "light" }) {
  const t = getThemeClasses(theme);

  return (
    <ServiceSection theme={theme} ariaLabelledBy="our-story-heading">
      <ServiceSectionHeading
        theme={theme}
        label="Our Story"
        title="Turning Ideas Into Digital Products"
        titleId="our-story-heading"
      />

      <motion.article
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <figure className="order-2 lg:order-1">
          <img
            src={aboutImages.team}
            alt="Team members collaborating on a software project"
            width={1000}
            height={667}
            loading="lazy"
            className={`w-full rounded-[2rem] border object-cover shadow-[0_32px_100px_rgba(15,23,42,0.12)] ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}
          />
        </figure>

        <div className="order-1 space-y-6 lg:order-2">
          <h3 className={`text-2xl font-bold sm:text-3xl ${t.heading}`}>
            Built for startups and growing businesses
          </h3>
          <p className={`text-base leading-8 ${t.body}`}>
            {BRAND_NAME} was founded to help teams turn ambitious ideas into intelligent digital products —
            combining strategy, design, and engineering to deliver technology that scales.
          </p>
          <p className={`text-base leading-8 ${t.body}`}>
            We saw too many businesses struggle with fragmented vendors, slow delivery, and platforms
            that looked polished but failed to drive measurable growth.
          </p>
          <p className={`text-base leading-8 ${t.body}`}>
            Today, we combine strategy, design, development, and long-term support under one roof.
            That integrated approach means fewer handoffs, clearer communication, and products that
            are built to evolve with your business.
          </p>
          <p className={`text-base leading-8 ${t.body}`}>
            We focus on quality, speed, and business outcomes — delivering software that is
            maintainable, scalable, and aligned with the goals that matter most to your team.
          </p>
        </div>
      </motion.article>
    </ServiceSection>
  );
}
