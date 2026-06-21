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
        <p className={`section-eyebrow text-xs font-bold uppercase ${t.label}`}>{label}</p>
      )}
      <h2 id={titleId} className={`section-headline mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl ${t.heading}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base font-medium leading-8 sm:text-lg sm:leading-8 ${t.subheading}`}>{description}</p>
      )}
    </header>
  );
}
