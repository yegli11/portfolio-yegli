import type { ComponentPropsWithoutRef } from "react";

export interface SectionTemplateProps extends ComponentPropsWithoutRef<"section"> {
  id?: string;
  variant?: "light" | "dark" | "muted";
}
