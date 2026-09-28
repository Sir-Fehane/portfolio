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
  title = "Proyectos personales",
  subtitle = "Portafolio",
  projects = MOCK_PROJECTS,
  tabs = [
    { id: "todos", label: "Todos" },
    { id: "backend", label: "Backend & Infra" },
    { id: "fullstack", label: "Full Stack" },
  ],
  showRepo = true,
  showLive = true,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === "todos"
      ? projects
      : projects.filter((p) =>
        activeTab === "backend" ? p.category === "backend" : p.category === "fullstack"
      );

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
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-[#C23646] text-white font-semibold shadow-sm"
                  : "text-[#8E909B] hover:text-[#EDEDF0]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid de Proyectos */}
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
