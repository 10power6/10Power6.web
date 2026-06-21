import { motion } from "framer-motion";
import { ServiceSectionHeading } from "./services/ServiceSection";
import { getThemeClasses } from "./services/theme";
import { testimonials, CARD_WIDTHS } from "../data/testimonialsData";
import { sectionVariant } from "../utils/motionVariants";

function TestimonialCard({ testimonial, theme }) {
  const t = getThemeClasses(theme);
  const widthClass = CARD_WIDTHS[testimonial.width] || CARD_WIDTHS.md;
  const footerBorder = theme === "dark" ? "border-white/10" : "border-slate-200";

  return (
    <article
      className={`group/card shrink-0 ${widthClass} rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] sm:p-7 ${
        theme === "dark"
          ? "border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-indigo-500/35 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)]"
          : "border-slate-200/80 bg-white/80 shadow-[0_16px_50px_rgba(15,23,42,0.08)] hover:border-indigo-300 hover:shadow-[0_24px_70px_rgba(99,102,241,0.12)]"
      }`}
    >
      <blockquote className={`text-[15px] leading-7 sm:text-base ${t.body}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className={`mt-6 flex items-center gap-3 border-t pt-5 ${footerBorder}`}>
        <img
          src={testimonial.avatar}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className={`h-11 w-11 shrink-0 rounded-full object-cover ring-2 ${theme === "dark" ? "ring-white/10" : "ring-slate-200"}`}
        />
        <div className="min-w-0">
          <p className={`truncate text-sm font-semibold ${t.heading}`}>{testimonial.name}</p>
          <p className={`truncate text-xs ${t.muted}`}>
            {testimonial.position ? `${testimonial.position}, ` : ""}
            {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimonialsSection({ theme = "dark" }) {
  const t = getThemeClasses(theme);
  const duplicated = [...testimonials, ...testimonials];
  const fadeFrom = theme === "dark" ? "from-slate-950" : "from-white";
  const fadeVia = theme === "dark" ? "via-slate-950/80" : "via-white/80";

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`relative overflow-x-clip py-20 lg:py-28 ${t.section}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-14"
        >
          <ServiceSectionHeading
            theme={theme}
            label="Client Testimonials"
            title="Trusted by Businesses Building Their Next Big Thing"
            description="See what our clients say about working with 10Power6."
            titleId="testimonials-heading"
          />
        </motion.div>
      </div>

      <div className="group/marquee relative w-full overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r sm:w-24 md:w-32 lg:w-40 ${fadeFrom} ${fadeVia} to-transparent`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l sm:w-24 md:w-32 lg:w-40 ${fadeFrom} ${fadeVia} to-transparent`}
          aria-hidden="true"
        />

        <div className="flex w-max gap-5 py-1 pl-5 animate-testimonial-marquee group-hover/marquee:[animation-play-state:paused] sm:gap-6 sm:pl-6 md:pl-8">
          {duplicated.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}
