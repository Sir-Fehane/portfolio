import React from "react";
import { Card } from "@/components/ui/Card";
import { MOCK_SKILLS } from "@/data/portfolioData";
import { SkillCategory } from "@/types/portfolio";

interface TechStackProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: SkillCategory[];
  className?: string;
}

export const TechStack: React.FC<TechStackProps> = ({
  title = "Ecosistema Técnico",
  subtitle = "Habilidades & Tecnologías",
  description = "Herramientas y patrones aplicados a lo largo del ciclo de vida del software.",
  skills = MOCK_SKILLS,
  className = "",
}) => {
  return (
    <section
      id="stack"
      className={`mx-auto max-w-6xl px-6 py-16 border-t ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-2xl mb-10">
        <div className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-2">
          {subtitle}
        </div>
        <h2 className="text-3xl font-extrabold text-[#EDEDF0] tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[#8E909B] mt-2">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, idx) => (
          <Card key={idx} className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-4 rounded-full bg-[#B0303F]" />
              <h4 className="font-bold text-sm text-[#EDEDF0]">{group.category}</h4>
            </div>
            <ul className="space-y-2.5">
              {group.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-center gap-2 text-xs text-[#8E909B] hover:text-[#EDEDF0] transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-[#26272E]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
