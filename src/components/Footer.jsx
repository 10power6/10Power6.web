import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Youtube } from "lucide-react";
import logoFileUrl from "../assets/10Power6Logo.png";
import { FOOTER_COLUMNS, FOOTER_LEGAL, FOOTER_SOCIAL } from "../data/footerData";
import { BRAND_TAGLINE } from "../data/branding";

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  github: Github,
  x: XIcon,
  youtube: Youtube,
};

function useFooterNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId) => {
      const scrollToSection = () => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      };

      if (location.pathname !== "/") {
        navigate("/");
        scrollToSection();
      } else {
        scrollToSection();
      }
    },
    [location.pathname, navigate]
  );
}

function FooterLink({ link }) {
  const navigateToSection = useFooterNavigation();
  const className =
    "text-sm text-white/55 transition-colors duration-300 hover:text-indigo-300 focus-visible:outline-none focus-visible:text-indigo-300 focus-visible:underline";

  if (link.type === "route") {
    return (
      <Link to={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  if (link.type === "section") {
    return (
      <button type="button" onClick={() => navigateToSection(link.href)} className={`${className} text-left`}>
        {link.label}
      </button>
    );
  }

  if (link.type === "mailto") {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

function FooterColumn({ column }) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{column.title}</h3>
      <ul className="mt-5 space-y-3.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.14)_0%,_rgba(139,92,246,0.08)_35%,_transparent_70%)] blur-2xl" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-slate-950 px-4 py-14 text-slate-100 sm:px-6 sm:py-16 lg:py-20">
      <FooterBackground />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[0_0_0_1px_rgba(99,102,241,0.06),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10">
            <div className="sm:col-span-2 lg:col-span-4">
              <Link to="/" aria-label="10Power6 home" className="inline-flex transition-opacity hover:opacity-90">
                <span className="relative inline-flex h-11 w-[3.25rem] shrink-0 items-center justify-center overflow-visible md:h-12 md:w-[3.75rem]">
                  <img
                    src={logoFileUrl}
                    alt="10Power6"
                    className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 scale-[2.55] origin-left object-contain md:scale-[2.7]"
                  />
                </span>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
                {BRAND_TAGLINE}.
              </p>

              <div className="mt-8 flex items-center gap-3">
                {FOOTER_SOCIAL.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="footer-social flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="lg:col-span-2">
                <FooterColumn column={column} />
              </div>
            ))}
          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:my-12" aria-hidden="true" />

          <div className="flex flex-col gap-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {FOOTER_LEGAL.map((item, index) => (
                <span key={item.label} className="inline-flex items-center">
                  {index > 0 && <span className="mx-2 text-white/20" aria-hidden="true">|</span>}
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-indigo-300 focus-visible:outline-none focus-visible:text-indigo-300"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </nav>

            <p className="shrink-0 sm:text-right">
              &copy; {year} 10Power6 | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
