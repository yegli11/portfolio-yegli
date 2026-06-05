import type { BadgeProps } from "./types";

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-black/10 dark:border-white/10",
  primary: "bg-primary/10 text-primary dark:bg-primary/20",
  accent:  "bg-accent/10 text-accent dark:bg-accent/20",
  secondary: "bg-secondary/10 text-secondary dark:bg-secondary/20",
};

export function Badge({ variant = "default", label, className = "", ...rest }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...rest}
    >
      {label}
    </span>
  );
}
