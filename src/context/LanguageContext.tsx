"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import t, { type Locale } from "@/src/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  toggle: () => void;
  tr: (typeof t)[Locale];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "es" || saved === "en") setLocale(saved);
  }, []);

  /* Keep html[lang] in sync */
  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  function toggle() {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }

  return (
    <LanguageContext.Provider value={{ locale, toggle, tr: t[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
