"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isEnglish: boolean;
  cvUrl: string;
  cvFileName: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_lang") as Language | null;
      if (stored === "es" || stored === "en") {
        setLanguageState(stored);
      } else {
        // Optional: auto-detect browser language preference if available
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("en")) {
          setLanguageState("en");
        }
      }
    } catch {
      // Fallback in case localStorage is restricted
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.title =
        language === "en"
          ? "Portfolio - Emiliano Aguilar"
          : "Portafolio - Emiliano Aguilar";
    }
  }, [language]);

  const cvUrl =
    language === "en"
      ? "/CV%20ENGLISH%20Oscar%20Emiliano%20Alvarado%20Aguilar.pdf"
      : "/CV%20SPANISH%20Oscar%20Emiliano%20Alvarado%20Aguilar.pdf";

  const cvFileName =
    language === "en"
      ? "CV ENGLISH Oscar Emiliano Alvarado Aguilar.pdf"
      : "CV SPANISH Oscar Emiliano Alvarado Aguilar.pdf";

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isEnglish: language === "en",
    cvUrl,
    cvFileName,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
