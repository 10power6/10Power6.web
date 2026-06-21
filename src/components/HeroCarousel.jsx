import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroSlides } from "../data/heroSlides";
import useFixedBackground from "../hooks/useFixedBackground";

const AUTO_INTERVAL_MS = 5500;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
};

const textItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const buttonItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function HeroCta({ cta, variant = "primary" }) {
  const className =
    variant === "primary"
      ? "group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-slate-100 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_4px_28px_rgba(255,255,255,0.18)] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.28)] hover:brightness-105"
      : "group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(15,23,42,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(99,102,241,0.18)]";

  const content = (
    <>
      {cta.label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </>
  );

  if (cta.isRoute) {
    return (
      <Link to={cta.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={cta.href} className={className}>
      {content}
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
      className="relative max-w-2xl lg:max-w-3xl"
    >
      <div
        className="pointer-events-none absolute -left-5 top-1 hidden h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-indigo-400/70 via-purple-400/35 to-transparent md:block"
        aria-hidden="true"
      />

      <motion.div variants={textItem}>
        <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase text-indigo-200 shadow-[0_0_24px_rgba(99,102,241,0.12)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_8px_rgba(165,180,252,0.8)]" aria-hidden="true" />
          {slide.tag}
        </span>
      </motion.div>

      <motion.h1
        variants={textItem}
        className="hero-headline mt-6 text-[2.65rem] font-bold text-white drop-shadow-[0_2px_32px_rgba(99,102,241,0.12)] sm:text-5xl md:text-6xl lg:text-[4rem]"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        variants={textItem}
        className="mt-6 max-w-xl text-base font-medium leading-8 text-slate-300/95 md:text-lg md:leading-8"
      >
        {slide.body}
      </motion.p>

      <motion.div variants={buttonItem} className="mt-8 flex flex-wrap items-center gap-4">
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
                      className="h-full w-full object-cover opacity-50"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-[#050B1A]/55 backdrop-blur-[1px]" />
                  <div className="hero-overlay-navy absolute inset-0" aria-hidden="true" />
                  <div className="hero-overlay-lift absolute inset-0" aria-hidden="true" />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-l from-indigo-400/[0.08] via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/45" />
                </motion.article>
              ) : null
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-14 lg:px-20">
            <AnimatePresence mode="wait">
              <HeroSlideContent key={activeSlide.id} slide={activeSlide} />
            </AnimatePresence>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2.5 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2.5 backdrop-blur-md"
          aria-label="Hero slide navigation"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "h-2 w-9 bg-gradient-to-r from-indigo-400 to-purple-400 shadow-[0_0_16px_rgba(129,140,248,0.5)]"
                  : "h-2 w-2 bg-slate-600 hover:bg-slate-400"
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
