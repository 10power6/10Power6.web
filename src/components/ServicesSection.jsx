import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceSection, { ServiceSectionHeading } from "./services/ServiceSection";
import { services } from "../serviceData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ServiceRow({ service, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.li variants={rowVariant} className="list-none">
      <Link
        to={`/services/${service.slug}`}
        aria-labelledby={`service-row-${index}`}
        className="group relative flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-8 text-slate-950 transition-colors duration-500 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-10 lg:px-10 last:border-b-0"
      >
        <div className="flex min-w-0 flex-1 items-start gap-5 sm:items-center sm:gap-8 lg:gap-12">
          <span
            className="shrink-0 font-display text-4xl font-bold tabular-nums leading-none tracking-tighter text-slate-200 transition-colors duration-500 group-hover:text-slate-300 sm:text-5xl"
            aria-hidden="true"
          >
            {number}
          </span>

          <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center sm:gap-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-colors duration-500 group-hover:border-slate-300">
              <service.Icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h3
                id={`service-row-${index}`}
                className="font-display text-xl font-bold tracking-tight sm:text-2xl lg:text-[1.65rem]"
              >
                {service.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 transition-colors duration-500 group-hover:text-slate-600 sm:text-[0.95rem]">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-700 transition-all duration-500 group-hover:text-slate-950">
          <span className="hidden sm:inline">Open</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-950 text-white transition-all duration-500 group-hover:scale-105 group-hover:bg-black">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </Link>
    </motion.li>
  );
}

export default function ServicesSection() {
  return (
    <ServiceSection theme="light" id="services" ariaLabelledBy="services-heading" className="relative overflow-hidden">
      <ServiceSectionHeading
        theme="light"
        label="Selected Services"
        title="Digital Solutions Built for Modern Growth"
        description="We engineer scalable digital experiences, AI-powered systems, and growth-focused solutions designed to help ambitious businesses lead in the modern digital era."
        titleId="services-heading"
        className="mb-12 lg:mb-14"
      />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        className="overflow-hidden rounded-2xl border border-slate-200 sm:rounded-[1.75rem]"
      >
        {services.map((service, index) => (
          <ServiceRow key={service.slug} service={service} index={index} />
        ))}
      </motion.ul>
    </ServiceSection>
  );
}
