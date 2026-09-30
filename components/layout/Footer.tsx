"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  name?: string;
  year?: number;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  name = "Emiliano Aguilar",
  year = new Date().getFullYear(),
  className = "",
}) => {
  const { t } = useLanguage();

  return (
    <footer
      className={`border-t py-8 text-center text-xs text-[#8E909B] ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>
            © {year} • {t.footer.portfolio}
          </span>
          <span>•</span>
          <span>
            {t.footer.madeWith} <span className="text-red-500">❤️</span> {t.footer.by} {name}
          </span>
        </div>
      </div>
    </footer>
  );
};
