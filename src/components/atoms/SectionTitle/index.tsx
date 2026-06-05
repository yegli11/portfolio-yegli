import type { SectionTitleProps } from "./types";

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className = "" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={["flex flex-col gap-4", alignClass, className].join(" ")}>
      {eyebrow && (
        <span
          className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white"
          style={{ background: "#826DEE" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white opacity-80" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight text-text-light dark:text-text-dark sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-text-light/65 dark:text-text-dark/65">
          {subtitle}
        </p>
      )}
    </div>
  );
}
