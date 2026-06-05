import type { ComponentPropsWithoutRef } from "react";

export type BadgeVariant = "default" | "primary" | "accent" | "secondary";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: BadgeVariant;
  label: string;
}
