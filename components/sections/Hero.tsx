"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/ui/MetricCard";
import { MetricItem } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  metrics?: MetricItem[];
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  metrics,
  className = "",
}) => {
  const { t } = useLanguage();

  const displayMetrics = metrics || t.hero.metrics;

  return (
    // max-w-6xl px-6 para alinearse exactamente con Navbar, Proyectos y Stack
    <section id="hero" className={`mx-auto max-w-6xl px-6 pt-12 pb-20 ${className}`}>

      {/* 1. Fila Principal: Texto a la izquierda y Terminal a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Columna Izquierda (7 columnas) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">

          {/* Título Principal con DevSecOps en degradado y misma tipografía pesada */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#EDEDF0]">
            {t.hero.titlePrefix}
            <span
              className="text-transparent bg-clip-text decoration-clone font-black"
              style={{
                backgroundImage: "linear-gradient(135deg, #FF6B7D 0%, #C23646 100%)",
              }}
            >
              {t.hero.titleAccent}
            </span>
            {t.hero.titleSuffix}
          </h1>

          <p className="text-base sm:text-lg text-[#8E909B] leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button
              asAnchor
              href="#proyectos"
              variant="primary"
              size="md"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              {t.hero.exploreBtn}
            </Button>

            <Button asAnchor href="#contacto" variant="secondary" size="md">
              {t.hero.contactBtn}
            </Button>
          </div>
        </div>

        {/* Columna Derecha (5 columnas): Terminal que llena el extremo derecho */}
        <div className="lg:col-span-5 w-full flex justify-end">
          <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur shadow-2xl overflow-hidden font-mono text-xs">
            {/* Header de la ventana */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-zinc-500 text-[11px]">{t.hero.terminalUser}</span>
            </div>

            {/* Logs de la terminal */}
            <div className="p-4 sm:p-5 space-y-2.5 text-zinc-300">
              <p className="text-zinc-500">$ trivy fs --security-checks config,vuln .</p>
              <p className="text-emerald-400 font-medium">&#10003; 0 High/Critical vulnerabilities</p>

              <p className="text-zinc-500 pt-1">$ terraform validate && plan</p>
              <p className="text-zinc-400">Plan: 3 to add, 0 to change, 0 to destroy.</p>

              <div className="mt-3 p-2.5 rounded bg-zinc-900/90 border border-zinc-800/80 text-[11px]">
                <span className="text-[#FF6B7D] block font-semibold mb-0.5">&#9679; Zero-Trust Policy Status:</span>
                <span className="text-zinc-400">SSH via Bastion: Strict | TLS 1.3: Enforced</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Métricas en la parte inferior: ancho completo para enmarcar el Hero */}
      {displayMetrics && displayMetrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-12">
          {displayMetrics.map((stat, i) => (
            <MetricCard key={i} metric={stat} />
          ))}
        </div>
      )}

    </section>
  );
};