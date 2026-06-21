import { getThemeClasses } from "../services/theme";

export default function SectionHeading({ theme = "dark", label, title, description, className = "", align = "center" }) {
  const t = getThemeClasses(theme);
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <header className={`${alignClass} ${className}`}>
      {label && (
        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${t.label}`}>{label}</p>
      )}
      <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${t.heading}`}>
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${t.subheading}`}>
          {description}
        </p>
      )}
    </header>
  );
}
