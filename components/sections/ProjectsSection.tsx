"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { MOCK_PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";

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
  title = "Proyectos",
  subtitle = "Portafolio",
  projects = MOCK_PROJECTS,
  tabs = [
    { id: "todos", label: "Todos" },
    { id: "profesionales", label: "Profesionales" },
    { id: "personales", label: "Personales" },
  ],
  showRepo = true,
  showLive = true,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const counts: Record<string, number> = {
    todos: projects.length,
    profesionales: projects.filter((p) => p.type === "profesional").length,
    personales: projects.filter((p) => p.type === "personal").length,
  };

  const filteredProjects = projects.filter((p) => {
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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-2">
            {subtitle}
          </div>
          <h2 className="text-3xl font-extrabold text-[#EDEDF0] tracking-tight">
            {title}
          </h2>
        </div>

        {/* Tabs de Filtro */}
        {tabs && tabs.length > 0 && (
          <div
            className="inline-flex p-1 rounded-lg border text-xs font-medium"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            {tabs.map((tab) => (
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
            No hay proyectos catalogados en esta categoría aún.
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
