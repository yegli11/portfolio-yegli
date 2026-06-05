import type { SectionTemplateProps } from "./types";

const variantClasses: Record<NonNullable<SectionTemplateProps["variant"]>, string> = {
  light: "bg-bg-light dark:bg-bg-dark",
  dark:  "bg-text-light dark:bg-surface-dark",
  muted: "bg-surface-light dark:bg-surface-dark",
};

export function SectionTemplate({
  id,
  variant = "light",
  className = "",
  children,
  ...rest
}: SectionTemplateProps) {
  return (
    <section
      id={id}
      className={[variantClasses[variant], "w-full py-20 sm:py-28", className].join(" ")}
      {...rest}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
