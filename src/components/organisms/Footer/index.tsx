"use client";

import { useLanguage } from "@/src/context/LanguageContext";

const colors = ["#826DEE", "#FF99DC", "#EB4213", "#D8F382", "#4DB8FF", "#FFE566"];

export function Footer() {
  const { tr } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/8 dark:border-white/8 bg-surface-light dark:bg-surface-dark">
      <div className="flex h-1.5" aria-hidden="true">
        {colors.map((c) => <div key={c} className="flex-1" style={{ background: c }} />)}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-display text-2xl font-extrabold" style={{ background: "linear-gradient(90deg, #826DEE, #FF99DC, #EB4213)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          yeglimar.
        </p>
        <p className="text-xs text-text-light/50 dark:text-text-dark/50 text-center">
          {tr.footer.copy(year)}
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-5 text-xs font-semibold">
            {[
              { label: tr.nav.inicio,    href: "#inicio",      color: "#826DEE" },
              { label: tr.nav.proyectos, href: "#proyectos",   color: "#EB4213" },
              { label: tr.nav.contacto,  href: "#contacto",    color: "#FF99DC" },
            ].map(({ label, href, color }) => (
              <li key={href}>
                <a href={href} className="transition-opacity hover:opacity-70" style={{ color }}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
