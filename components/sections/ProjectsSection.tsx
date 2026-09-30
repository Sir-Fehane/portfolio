"use client";

import React, { useEffect, useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { MOCK_PROJECTS, MOCK_PROJECTS_EN } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import { useLanguage } from "@/context/LanguageContext";

interface FilterTab {
  id: string;
  label: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  tabs?: FilterTab[];
  showRepo?: boolean;
  showLive?: boolean;
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  subtitle,
  projects,
  tabs,
  showRepo = true,
  showLive = true,
  className = "",
}) => {
  const { isEnglish, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayTitle = title || t.projects.title;
  const displaySubtitle = subtitle || t.projects.subtitle;

  // Seleccionar proyectos según el idioma activo si no se especifican por prop
  const currentProjectsList = projects || (isEnglish ? MOCK_PROJECTS_EN : MOCK_PROJECTS);

  // Sincronizar el proyecto seleccionado en el modal cuando cambia el idioma
  useEffect(() => {
    if (selectedProject) {
      const match = currentProjectsList.find((p) => p.id === selectedProject.id);
      if (match) {
        setSelectedProject(match);
      }
    }
  }, [isEnglish, currentProjectsList]);

  const currentTabs: FilterTab[] = tabs || [
    { id: "todos", label: t.projects.tabAll },
    { id: "profesionales", label: t.projects.tabProfessional },
    { id: "personales", label: t.projects.tabPersonal },
  ];

  const counts: Record<string, number> = {
    todos: currentProjectsList.length,
    profesionales: currentProjectsList.filter((p) => p.type === "profesional").length,
    personales: currentProjectsList.filter((p) => p.type === "personal").length,
  };

  const filteredProjects = currentProjectsList.filter((p) => {
    if (activeTab === "todos") return true;
    if (activeTab === "profesionales") return p.type === "profesional";
    if (activeTab === "personales") return p.type === "personal";
    return true;
  });

  return (
    <section
      id="proyectos"
      className={`mx-auto max-w-6xl px-6 py-16 border-t ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-2">
            {displaySubtitle}
          </div>
          <h2 className="text-3xl font-extrabold text-[#EDEDF0] tracking-tight">
            {displayTitle}
          </h2>
        </div>

        {/* Tabs de Filtro */}
        {currentTabs && currentTabs.length > 0 && (
          <div
            className="inline-flex p-1 rounded-lg border text-xs font-medium"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            {currentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-[#C23646] text-white font-semibold shadow-sm"
                    : "text-[#8E909B] hover:text-[#EDEDF0]"
                }`}
              >
                <span>{tab.label}</span>
                {counts[tab.id] !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-[#26272E] text-[#8E909B]"
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Aviso sobre las demos: únicamente visible en inglés */}
      {isEnglish && (
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl border border-[#C23646]/30 bg-gradient-to-r from-[#C23646]/10 via-[#18191E] to-[#18191E] flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-[#C23646]/20 border border-[#C23646]/40 text-[#FF6B7D] shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-xs text-[#8E909B] leading-relaxed">
            <span className="font-semibold text-[#EDEDF0] uppercase tracking-wider text-[11px] mr-1.5 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C23646]" />
              {t.projects.disclaimerTitle}:
            </span>
            {t.projects.disclaimerText}
          </div>
        </div>
      )}

      {/* Grid de Proyectos */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              showRepo={showRepo}
              showLive={showLive}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed rounded-xl border-[#26272E] bg-[#14151A]/50">
          <p className="text-sm text-[#8E909B]">
            {t.projects.emptyText}
          </p>
        </div>
      )}

      {/* Modal con Galería 2/3 y Detalle 1/3 */}
      <ProjectModal
        project={selectedProject}
        showRepo={showRepo}
        showLive={showLive}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
