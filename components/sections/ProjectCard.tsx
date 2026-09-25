import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <Card
      interactive
      className={`flex flex-col justify-between group ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="accent">{project.status}</Badge>
          <span className="text-xs text-[#8E909B] font-mono">{project.metrics}</span>
        </div>

        <h3 className="text-lg font-bold text-[#EDEDF0] mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[#8E909B] leading-relaxed mb-6">
          {project.desc}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div
          className="pt-4 border-t flex items-center justify-between text-xs"
          style={{ borderColor: "var(--border)" }}
        >
          <a
            href={project.repoUrl || "#"}
            className="font-semibold text-[#EDEDF0] flex items-center gap-1.5 hover:text-[#C23646] transition-colors"
          >
            Ver Arquitectura
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-[#8E909B] font-mono hover:text-[#EDEDF0] transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
