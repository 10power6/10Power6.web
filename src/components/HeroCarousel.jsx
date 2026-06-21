import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { heroSlides } from "../data/heroSlides";
import useFixedBackground from "../hooks/useFixedBackground";

const AUTO_INTERVAL_MS = 5500;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const textItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const buttonItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

function HeroCta({ cta, variant = "primary" }) {
  const className =
    variant === "primary"
      ? "inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
      : "inline-flex rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15";

  if (cta.isRoute) {
    return (
      <Link to={cta.href} className={className}>
        {cta.label}
      </Link>
    );
  }

  return (
    <a href={cta.href} className={className}>
      {cta.label}
    </a>
  );
}

function HeroSlideContent({ slide }) {
  return (
    <motion.div
      key={slide.id}
      variants={textContainer}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-xl space-y-5"
    >
      <motion.p variants={textItem} className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
        {slide.tag}
      </motion.p>
      <motion.h1 variants={textItem} className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
        {slide.title}
      </motion.h1>
      <motion.p variants={textItem} className="text-base text-slate-300 md:text-lg">
        {slide.body}
      </motion.p>
      <motion.div variants={buttonItem} className="flex flex-wrap items-center gap-3 pt-1">
        <HeroCta cta={slide.primaryCta} variant="primary" />
        {slide.secondaryCta && <HeroCta cta={slide.secondaryCta} variant="secondary" />}
      </motion.div>
    </motion.div>
  );
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const supportsParallax = useFixedBackground();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, supportsParallax ? 80 : 0]);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-slate-950 to-slate-950" />

      <div className="relative flex min-h-screen w-full items-center">
        <div className="relative min-h-screen w-full overflow-hidden">
          <AnimatePresence mode="sync">
            {heroSlides.map((slide, index) =>
              index === activeIndex ? (
                <motion.article
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                  aria-hidden={false}
                >
                  <motion.div style={{ y: parallaxY }} className="absolute inset-0 will-change-transform">
                    <motion.img
                      src={slide.image}
                      alt={slide.imageAlt}
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.1 }}
                      transition={{ duration: AUTO_INTERVAL_MS / 1000 + 2, ease: "linear" }}
                      className="h-full w-full object-cover opacity-55"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-[#050B1A]/50 backdrop-blur-[1px]" />

                  {/* Left-heavy navy wash — strong contrast behind headline */}
                  <div className="hero-overlay-navy absolute inset-0" aria-hidden="true" />

                  {/* Gentle luminance lift on the right 30–40% — reveals image detail */}
                  <div className="hero-overlay-lift absolute inset-0" aria-hidden="true" />

                  {/* Subtle indigo cinematic glow — far right depth */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-l from-indigo-400/[0.07] via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
                </motion.article>
              ) : null
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <AnimatePresence mode="wait">
              <HeroSlideContent key={activeSlide.id} slide={activeSlide} />
            </AnimatePresence>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-3"
          aria-label="Hero slide navigation"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-8 rounded-full transition ${
                index === activeIndex ? "bg-indigo-400" : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
