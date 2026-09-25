import React from "react";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/ui/MetricCard";
import { MOCK_METRICS } from "@/data/portfolioData";
import { MetricItem } from "@/types/portfolio";

interface HeroProps {
  availabilityText?: string;
  titlePrimary?: string;
  titleHighlight?: string;
  titleSecondary?: string;
  description?: string;
  metrics?: MetricItem[];
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  availabilityText = "Disponible para proyectos y roles en DevSecOps / Backend",
  titlePrimary = "Infraestructura, DevSecOps",
  titleHighlight = "y Desarrollo Full-Stack",
  titleSecondary = "de extremo a extremo.",
  description = "Ingeniero orientado a DevSecOps e infraestructura Linux con sólida base Full-Stack. Especializado en seguridad perimetral, gestión de accesos y automatización de despliegues vía CI/CD, asegurando aplicaciones desde la arquitectura de código hasta el entorno de producción corporativo.",
  metrics = MOCK_METRICS,
  className = "",
}) => {
  return (
    <section id="hero" className={`mx-auto max-w-6xl px-6 pt-12 pb-20 ${className}`}>
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        {/* Badge de Disponibilidad */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#C23646] animate-ping" />
          <span className="text-[#EDEDF0]">{availabilityText}</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#EDEDF0]">
          {titlePrimary}{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #EDEDF0 30%, #C23646 100%)" }}
          >
            {titleHighlight}
          </span>{" "}
          {titleSecondary}
        </h1>

        <p className="text-lg sm:text-xl text-[#8E909B] leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Botones de Acción (60-30-10: 10% Acento para CTA) */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
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
            Explorar Proyectos
          </Button>

          <Button asAnchor href="#contacto" variant="secondary" size="md">
            Descargar CV / Contacto
          </Button>
        </div>

        {/* Tarjetas de Métricas */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8">
            {metrics.map((stat, i) => (
              <MetricCard key={i} metric={stat} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
