import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HOME_SECTIONS = ["services", "process", "contact"];

export function useActiveSection() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const visibleSections = new Map(HOME_SECTIONS.map((id) => [id, 0]));

    const updateActive = () => {
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      let bestSection = "home";
      let bestRatio = 0;

      HOME_SECTIONS.forEach((id) => {
        const ratio = visibleSections.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = id;
        }
      });

      setActiveSection(bestRatio >= 0.15 ? bestSection : "home");
    };

    const observers = HOME_SECTIONS.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibleSections.set(id, entry.intersectionRatio);
          updateActive();
        },
        { threshold: [0, 0.15, 0.35, 0.5, 0.75], rootMargin: "-15% 0px -40% 0px" }
      );

      observer.observe(element);
      return observer;
    }).filter(Boolean);

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", updateActive);
    };
  }, [location.pathname]);

  return activeSection;
}

export function getNavLinkClass(isActive) {
  const base =
    "relative inline-block pb-1.5 transition cursor-pointer after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:transition-transform after:duration-200";

  if (isActive) {
    return `${base} text-white after:scale-x-100 after:bg-purple-500`;
  }

  return `${base} text-slate-300 after:scale-x-0 after:bg-purple-500 hover:text-indigo-300 hover:after:scale-x-100`;
}

export function getMobileNavClass(isActive) {
  const base =
    "rounded-3xl border px-6 py-5 text-left text-white transition hover:bg-slate-800/95";

  if (isActive) {
    return `${base} border-purple-500/60 bg-slate-800/80`;
  }

  return `${base} border-white/12 bg-slate-900 hover:border-white/20`;
}
