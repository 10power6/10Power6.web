import { getThemeClasses } from "./theme";

export default function ServiceSection({ theme = "dark", children, className = "", id, ariaLabelledBy }) {
  const t = getThemeClasses(theme);

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-20 lg:py-28 ${t.section} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function ServiceSectionHeading({
  theme = "dark",
  label,
  title,
  description,
  titleId,
  className = "mb-14",
  align = "center",
}) {
  const t = getThemeClasses(theme);
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <header className={`${alignClass} ${className}`}>
      {label && (
        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${t.label}`}>{label}</p>
      )}
      <h2 id={titleId} className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${t.heading}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${t.subheading}`}>{description}</p>
      )}
    </header>
  );
}
