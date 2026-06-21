import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { integrationRowOne, integrationRowTwo } from "../data/integrationsData";
import { sectionVariant } from "../utils/motionVariants";

function IntegrationLogoCard({ integration }) {
  const [hasError, setHasError] = useState(false);
  const iconSrc = `https://cdn.simpleicons.org/${integration.slug}/${integration.color}`;

  return (
    <div
      title={integration.name}
      className="group/card flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(99,102,241,0.06),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] sm:h-[4.5rem] sm:w-[4.5rem]"
    >
      {!hasError ? (
        <img
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="h-7 w-7 object-contain opacity-90 transition-opacity duration-300 group-hover/card:opacity-100 sm:h-8 sm:w-8"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="px-1 text-center text-[10px] font-bold uppercase tracking-wide text-indigo-200 sm:text-xs">
          {integration.name.slice(0, 3)}
        </span>
      )}
      <span className="sr-only">{integration.name}</span>
    </div>
  );
}

function IntegrationMarqueeRow({ items, direction = "left", className = "" }) {
  const duplicated = [...items, ...items];
  const animationClass =
    direction === "left" ? "animate-integrations-marquee-left" : "animate-integrations-marquee-right";

  return (
    <div className={`group/marquee relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-24 md:w-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent sm:w-24 md:w-32"
        aria-hidden="true"
      />

      <div className={`flex w-max gap-4 py-1 sm:gap-5 ${animationClass} group-hover/marquee:[animation-play-state:paused]`}>
        {duplicated.map((integration, index) => (
          <IntegrationLogoCard key={`${integration.slug}-${index}`} integration={integration} />
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      aria-labelledby="integrations-heading"
      className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.14)_0%,_rgba(139,92,246,0.08)_35%,_transparent_70%)] blur-2xl" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.header
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
            Tools & Technologies
          </p>
          <h2 id="integrations-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built with modern tech &{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
              seamless integrations
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            We work with proven frameworks, cloud platforms, databases, CRMs, and automation tools to build reliable,
            scalable, and future-ready digital products.
          </p>
        </motion.header>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative space-y-5 md:space-y-6"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-48 w-[min(100%,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-3xl"
            aria-hidden="true"
          />

          <IntegrationMarqueeRow items={integrationRowOne} direction="left" className="relative z-10" />
          <IntegrationMarqueeRow
            items={integrationRowTwo}
            direction="right"
            className="relative z-10 hidden md:block"
          />
        </motion.div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-95 hover:shadow-indigo-500/35"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
