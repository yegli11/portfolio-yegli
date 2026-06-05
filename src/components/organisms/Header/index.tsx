"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/src/components/atoms/ThemeToggle";
import { NavItem } from "@/src/components/molecules/NavItem";
import type { HeaderProps } from "./types";

export function Header({ links }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);

      /* Highlight the current section */
      const sections = links.map((l) => l.href.replace("#", ""));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom > 0;
      });
      setActiveSection(current ? `#${current}` : "");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  /* Close menu on route change / resize */
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-black/8 dark:border-white/8 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-extrabold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Ir al inicio"
          style={{
            background: "linear-gradient(90deg, #826DEE, #FF99DC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          yeglimar.
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                active={activeSection === link.href}
              />
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={[
                "absolute block h-0.5 w-5 bg-current transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1.5",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-0.5 w-5 bg-current transition-all duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-0.5 w-5 bg-current transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1.5",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            aria-label="Navegación móvil"
            className="overflow-hidden border-t border-black/8 dark:border-white/8 bg-bg-light dark:bg-bg-dark md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-text-light dark:text-text-dark hover:bg-primary/5 dark:hover:bg-primary/10",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
