import Link from "next/link";
import type { NavItemProps } from "./types";

export function NavItem({ href, label, active, onClick }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={[
          "relative text-sm font-medium transition-colors duration-200",
          "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-primary",
          "after:transition-all after:duration-300",
          active
            ? "text-primary after:w-full"
            : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary after:w-0 hover:after:w-full",
        ].join(" ")}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}
