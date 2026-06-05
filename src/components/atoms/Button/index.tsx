import Link from "next/link";
import type { ButtonProps } from "./types";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/30 shadow-primary/20",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark shadow-lg hover:shadow-secondary/30 shadow-secondary/20",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-primary dark:border-primary",
  ghost:
    "text-text-light dark:text-text-dark hover:bg-primary/10 dark:hover:bg-primary/20",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const classes = [base, variantClasses[variant], sizeClasses[size], className].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
