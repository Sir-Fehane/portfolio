import React from "react";
import { Card } from "@/components/ui/Card";
import { MOCK_EXPERIENCE } from "@/data/portfolioData";
import { ExperienceItem } from "@/types/portfolio";

interface ExperienceTimelineProps {
  title?: string;
  subtitle?: string;
  items?: ExperienceItem[];
  className?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  title = "Experiencia Profesional",
  subtitle = "Trayectoria",
  items = MOCK_EXPERIENCE,
  className = "",
}) => {
  return (
    <section
      id="experiencia"
      className={`mx-auto max-w-6xl px-6 py-16 border-t ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-2">
          {subtitle}
        </div>
        <h2 className="text-3xl font-extrabold text-[#EDEDF0] tracking-tight">
          {title}
        </h2>
      </div>

      <div className="space-y-6 relative before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#26272E]">
        {items.map((exp, i) => (
          <div key={i} className="relative pl-8 sm:pl-10">
            {/* Nodo de acento carmesí con glow */}
            <span
              className="absolute left-1.5 sm:left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 transform -translate-x-1/2"
              style={{
                backgroundColor: "var(--base)",
                borderColor: "#C23646",
                boxShadow: "0 0 10px rgba(194, 54, 70, 0.4)",
              }}
            />
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="text-base font-bold text-[#EDEDF0]">{exp.role}</h4>
                <span className="text-xs font-mono text-[#C23646] font-semibold">
                  {exp.period}
                </span>
              </div>
              <div className="text-xs font-medium text-[#8E909B] mb-3">
                {exp.company}
              </div>
              <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed">
                {exp.details}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
