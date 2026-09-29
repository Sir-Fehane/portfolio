import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MatrixRain } from "@/components/ui/MatrixRain";

interface ContactSectionProps {
  badgeText?: string;
  title?: string;
  description?: string;
  email?: string;
  githubUrl?: string;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  badgeText = "",
  title = "¿Listo para crear algo increíble?",
  description = "Si estás interesado en colaborar en algún proyecto, no dudes en contactarme, estaré encantado de saber de ti.",
  email = "[EMAIL_ADDRESS]",
  githubUrl = "https://github.com/Sir-Fehane",
  className = "",
}) => {
  return (
    <section
      id="contacto"
      className={`mx-auto max-w-6xl px-6 py-20 border-t ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="rounded-3xl border p-8 sm:p-14 text-center relative overflow-hidden"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        {/* Lluvia de código Matrix animada en color rojo */}
        <MatrixRain
          primaryColor="#C23646"
          glowColor="#FF6B7D"
          headColor="#FFFFFF"
          fontSize={14}
          opacity={0.4}
        />

        {/* Gradiente radial para viñeta: mantiene el centro nítido y legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(24, 25, 30, 0.88) 15%, rgba(24, 25, 30, 0.45) 80%, rgba(24, 25, 30, 0.9) 100%)",
          }}
        />

        {/* Luz ambiental sutil roja de fondo */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
          style={{ backgroundColor: "var(--accent)" }}
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDEDF0] tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#8E909B] max-w-lg leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              asAnchor
              href={`mailto:${email}`}
              variant="primary"
              size="lg"
            >
              {email}
            </Button>

            {githubUrl && (
              <Button
                asAnchor
                href={githubUrl}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
