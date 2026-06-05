"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/context/LanguageContext";

export function LanguageToggle() {
  const { locale, toggle } = useLanguage();
  const isEN = locale === "en";

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={isEN ? "Cambiar a español" : "Switch to English"}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        background: isEN ? "#826DEE" : "#EB4213",
        color: "#fff",
      }}
    >
      {isEN ? "🇬🇧 EN" : "🇪🇸 ES"}
    </motion.button>
  );
}
