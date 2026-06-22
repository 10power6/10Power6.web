import { useEffect, useRef, useState } from "react";
import { Code2 } from "lucide-react";
import { getThemeClasses } from "./theme";
import { getTechnologyIconSources } from "../../data/technologiesData";

export function TechnologyIcon({ slug, color, name }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = slug ? getTechnologyIconSources(slug) : [];
  const hasError = !slug || sourceIndex >= sources.length;
  const brandColor = `#${color}`;

  if (hasError) {
    return (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 ring-1 ring-white/10 sm:h-9 sm:w-9 sm:rounded-xl">
        <Code2 className="h-3.5 w-3.5 text-indigo-300 sm:h-4 sm:w-4" aria-hidden="true" />
        <span className="sr-only">{name}</span>
      </div>
    );
  }

  const iconUrl = sources[sourceIndex];

  return (
    <>
      <img src={iconUrl} alt="" className="hidden" onError={() => setSourceIndex((i) => i + 1)} referrerPolicy="no-referrer" />
      <span
        aria-hidden="true"
        className="h-7 w-7 shrink-0 sm:h-9 sm:w-9"
        style={{
          backgroundColor: brandColor,
          maskImage: `url("${iconUrl}")`,
          WebkitMaskImage: `url("${iconUrl}")`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </>
  );
}

export default function TechnologyCard({ tech, theme }) {
  const t = getThemeClasses(theme);
  const isDark = theme === "dark";
  const [isGlowing, setIsGlowing] = useState(false);
  const glowTimerRef = useRef(null);

  const triggerGlow = () => {
    if (glowTimerRef.current) clearTimeout(glowTimerRef.current);
    setIsGlowing(true);
    glowTimerRef.current = setTimeout(() => setIsGlowing(false), 650);
  };

  useEffect(
    () => () => {
      if (glowTimerRef.current) clearTimeout(glowTimerRef.current);
    },
    []
  );

  const glowStyle = isGlowing
    ? {
        boxShadow: `0 0 22px #${tech.color}88, 0 0 44px #${tech.color}44, inset 0 0 12px #${tech.color}22`,
        borderColor: `#${tech.color}99`,
      }
    : undefined;

  const iconGlowStyle = isGlowing
    ? {
        boxShadow: `0 0 18px #${tech.color}aa, 0 0 32px #${tech.color}55`,
      }
    : undefined;

  return (
    <button
      type="button"
      title={tech.name}
      aria-label={tech.name}
      onClick={triggerGlow}
      style={glowStyle}
      className={`group flex h-full w-full items-center justify-center rounded-xl border p-2 transition-all duration-300 sm:justify-start sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4 sm:hover:-translate-y-0.5 active:scale-95 ${
        isGlowing ? "scale-[1.03] ring-1 ring-white/20" : ""
      } ${
        isDark
          ? "border-white/10 bg-slate-900/60 hover:border-indigo-500/35 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
          : "border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)]"
      }`}
    >
      <div
        style={iconGlowStyle}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-xl ${
          isGlowing ? "scale-110 ring-2" : ""
        } ${t.iconWrap}`}
      >
        <TechnologyIcon slug={tech.slug} color={tech.color} name={tech.name} />
      </div>
      <span className={`hidden text-sm font-semibold leading-snug sm:block sm:text-base ${t.heading}`}>{tech.name}</span>
      <span className="sr-only sm:hidden">{tech.name}</span>
    </button>
  );
}
