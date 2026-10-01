"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  name?: string;
  role?: string;
  initials?: string;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  role,
  className = "",
}) => {
  const { language, setLanguage, t } = useLanguage();

  const displayName = name || t.nav.name;
  const displayRole = role || t.nav.role;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-md ${className}`}
      style={{
        backgroundColor: "rgba(13, 14, 17, 0.82)",
        borderColor: "rgba(38, 39, 46, 0.7)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group text-inherit no-underline">
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-[#EDEDF0] text-sm sm:text-base">
              {displayName}
            </span>
            <span className="text-xs text-[#8E909B]">{displayRole}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E909B]">
          <a href="#proyectos" className="hover:text-[#EDEDF0] transition-colors">
            {t.nav.projects}
          </a>
          <a href="#stack" className="hover:text-[#EDEDF0] transition-colors">
            {t.nav.stack}
          </a>
          <a href="#experiencia" className="hover:text-[#EDEDF0] transition-colors">
            {t.nav.experience}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div
            className="inline-flex p-0.5 sm:p-1 rounded-lg border text-xs font-mono items-center gap-0.5"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            role="group"
            aria-label={t.nav.selectLanguage}
          >
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer font-bold ${language === "es"
                ? "bg-[#C23646] text-white shadow-sm"
                : "text-[#8E909B] hover:text-[#EDEDF0]"
                }`}
              aria-pressed={language === "es"}
              title="Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer font-bold ${language === "en"
                ? "bg-[#C23646] text-white shadow-sm"
                : "text-[#8E909B] hover:text-[#EDEDF0]"
                }`}
              aria-pressed={language === "en"}
              title="English"
            >
              EN
            </button>
          </div>

          <Button
            asAnchor
            href="#contacto"
            variant="secondary"
            size="sm"
            icon={<span className="w-2 h-2 rounded-full bg-[#C23646]" />}
          >
            {t.nav.contact}
          </Button>
        </div>
      </div>
    </header>
  );
};
