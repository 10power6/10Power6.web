import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logoFileUrl from "../assets/10Power6Logo.png";
import { services } from "../serviceData";
import { useActiveSection } from "../hooks/useActiveSection";

const PANEL_EASE = [0.32, 0.72, 0, 1];
const PANEL_DURATION = 0.44;

const navContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.22 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
};

const submenuContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const submenuItemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
};

function useSmartNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId) => {
      const scrollToSection = () => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
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

function getNavCardClass(isActive) {
  const base =
    "w-full rounded-[22px] border px-5 py-4 text-left text-lg font-bold leading-snug transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]";

  if (isActive) {
    return `${base} border-indigo-400/45 bg-gradient-to-br from-indigo-500/20 via-slate-900/90 to-purple-500/15 text-white shadow-[0_12px_40px_rgba(99,102,241,0.28)] ring-1 ring-indigo-400/35`;
  }

  return `${base} border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.02] text-white/80 hover:scale-[1.02] hover:border-indigo-400/30 hover:bg-indigo-500/[0.1] hover:text-white hover:shadow-[0_10px_36px_rgba(99,102,241,0.18)]`;
}

function MobileMenuLogo({ onClick }) {
  return (
    <a
      href="/"
      onClick={onClick}
      aria-label="10Power6 home"
      className="relative inline-flex h-11 w-[3.25rem] items-center justify-center overflow-visible rounded-2xl transition duration-300 hover:bg-white/5"
    >
      <img
        src={logoFileUrl}
        alt=""
        className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 scale-[2.55] origin-left object-contain"
      />
    </a>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const scrollYRef = useRef(0);
  const navigateToSection = useSmartNavigation();
  const router = useNavigate();
  const activeSection = useActiveSection();
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isAboutPage = location.pathname === "/about";
  const isServicePage = location.pathname.startsWith("/services/");
  const isServicesActive = activeSection === "services" || isServicePage;

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    scrollYRef.current = window.scrollY;
    setIsOpen(true);
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = scrollYRef.current;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  const handleNavClick = (sectionId) => {
    navigateToSection(sectionId);
    closeMenu();
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    router("/");
    closeMenu();
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const handleServiceClick = (slug) => {
    router(`/services/${slug}`);
    closeMenu();
  };

  const panelTransition = prefersReducedMotion
    ? { duration: 0.15, ease: "linear" }
    : { duration: PANEL_DURATION, ease: PANEL_EASE };

  const panelMotion = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } };

  const menu = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          key="mobile-menu-panel"
          {...panelMotion}
          transition={panelTransition}
          className="mobile-menu-panel fixed inset-0 z-[9999] flex w-full flex-col overflow-hidden md:hidden"
          style={{
            height: "100dvh",
            maxHeight: "100dvh",
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
            paddingLeft: "env(safe-area-inset-left, 0px)",
            paddingRight: "env(safe-area-inset-right, 0px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-slate-950/70 backdrop-blur-[2px]"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#040711] via-[#0a1020] to-[#050810]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-1/4 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]"
              aria-hidden="true"
            />
            <div className="mobile-menu-noise pointer-events-none absolute inset-0 opacity-[0.4]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_55%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pb-2 pt-5">
              <MobileMenuLogo onClick={handleHomeClick} />
              <motion.button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.06, rotate: 90 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/35 bg-white/[0.06] text-white shadow-[0_0_24px_rgba(99,102,241,0.2)] backdrop-blur-md transition-colors hover:border-indigo-300/50 hover:bg-indigo-500/15 hover:shadow-[0_0_32px_rgba(99,102,241,0.35)]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </motion.button>
            </div>

            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="show"
              className="relative z-10 flex min-h-0 flex-1 flex-col justify-center gap-3 overflow-y-auto overscroll-contain px-6 py-6"
              aria-label="Primary"
            >
              <motion.div variants={navItemVariants}>
                <button type="button" onClick={handleHomeClick} className={getNavCardClass(activeSection === "home")}>
                  Home
                </button>
              </motion.div>

              <motion.div variants={navItemVariants} className="space-y-2">
                <button
                  type="button"
                  onClick={() => setServicesOpen((current) => !current)}
                  aria-expanded={servicesOpen}
                  className={`${getNavCardClass(isServicesActive)} flex items-center justify-between gap-3`}
                >
                  <span>Services</span>
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]"
                  >
                    <ChevronDown className="h-4 w-4 text-indigo-200" aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      key="services-submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        variants={submenuContainerVariants}
                        initial="hidden"
                        animate="show"
                        className="ml-3 space-y-1 border-l border-white/10 py-1 pl-4"
                      >
                        {services.map((service, index) => {
                          const isActiveService = location.pathname === `/services/${service.slug}`;

                          return (
                            <motion.div key={service.slug} variants={submenuItemVariants} custom={index}>
                              {index > 0 && <div className="mb-1 h-px bg-white/[0.06]" aria-hidden="true" />}
                              <button
                                type="button"
                                onClick={() => handleServiceClick(service.slug)}
                                className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                                  isActiveService
                                    ? "bg-indigo-500/15 text-white shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                }`}
                              >
                                {service.name}
                              </button>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <button
                  type="button"
                  onClick={() => handleNavClick("process")}
                  className={getNavCardClass(activeSection === "process")}
                >
                  Process
                </button>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <button
                  type="button"
                  onClick={() => {
                    router("/about");
                    closeMenu();
                  }}
                  className={getNavCardClass(isAboutPage || activeSection === "about")}
                >
                  About
                </button>
              </motion.div>

              <motion.div variants={navItemVariants}>
                <button
                  type="button"
                  onClick={() => handleNavClick("contact")}
                  className={getNavCardClass(activeSection === "contact")}
                >
                  Contact
                </button>
              </motion.div>
            </motion.nav>

            <div className="relative z-10 shrink-0 px-6 pb-8 pt-4">
              <p className="text-center text-xs font-medium tracking-wide text-slate-500/90">
                Building software that scales businesses.
              </p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="relative z-50 inline-flex items-center justify-center rounded-xl p-2.5 text-white transition hover:bg-white/5 md:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {mounted && typeof document !== "undefined" ? createPortal(menu, document.body) : null}
    </>
  );
}
