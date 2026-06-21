import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useFixedBackground from "../../hooks/useFixedBackground";
import { sectionVariant } from "../../utils/motionVariants";

export default function ServiceParallaxBand({ image, imageAlt, label, title, description }) {
  const sectionRef = useRef(null);
  const supportsFixed = useFixedBackground();
  const headingId = `parallax-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.08]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.6, 1, 1, 0.6]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="relative flex min-h-[72vh] items-center overflow-hidden lg:min-h-[88vh]"
    >
      {supportsFixed ? (
        <>
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat md:bg-fixed"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={imageAlt}
          />
          <span className="sr-only">{imageAlt}</span>
        </>
      ) : (
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0 will-change-transform">
          <img
            src={image}
            alt={imageAlt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center sm:py-32"
      >
        {label && (
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-300">{label}</p>
        )}
        <h2 id={headingId} className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{description}</p>
      </motion.div>
    </section>
  );
}
