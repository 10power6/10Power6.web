export function getThemeClasses(theme) {
  const isDark = theme === "dark";

  return {
    section: isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900",
    label: isDark ? "text-indigo-300" : "text-indigo-600",
    heading: isDark ? "text-white" : "text-slate-900",
    subheading: isDark ? "text-slate-300" : "text-slate-600",
    body: isDark ? "text-slate-300" : "text-slate-600",
    muted: isDark ? "text-slate-400" : "text-slate-500",
    card: isDark
      ? "border-white/10 bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
      : "border-slate-200 bg-slate-50 shadow-[0_8px_40px_rgba(15,23,42,0.06)]",
    cardHover: isDark
      ? "hover:border-indigo-500/30 hover:-translate-y-1"
      : "hover:border-indigo-300 hover:-translate-y-1 hover:shadow-lg",
    iconWrap: isDark
      ? "bg-indigo-500/10 text-indigo-300 ring-white/10"
      : "bg-indigo-100 text-indigo-600 ring-indigo-200/60",
    statCard: isDark
      ? "bg-slate-950/70 ring-white/5"
      : "bg-white ring-slate-200 shadow-sm",
    faqItem: isDark
      ? "border-white/10 bg-slate-900/60"
      : "border-slate-200 bg-slate-50",
    badge: isDark
      ? "border-white/10 bg-white/5 text-indigo-300"
      : "border-indigo-200 bg-indigo-50 text-indigo-600",
    techPill: isDark
      ? "border-white/10 bg-slate-950/80 text-slate-200"
      : "border-slate-200 bg-white text-slate-700 shadow-sm",
    industryPill: isDark
      ? "border-white/10 bg-slate-900/80 text-slate-200"
      : "border-slate-200 bg-white text-slate-700",
  };
}
