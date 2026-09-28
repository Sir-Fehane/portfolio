import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
  showRepo?: boolean;
  showLive?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  showRepo = true,
  showLive = true,
  className = "",
}) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(project);
    }
  };

  const shouldShowRepo =
    (project.showRepo ?? showRepo) && Boolean(project.repoUrl);

  const shouldShowLive =
    (project.showLive ?? showLive) && Boolean(project.liveUrl);

  return (
    <Card
      interactive
      onClick={handleClick}
      className={`flex flex-col justify-between p-5 cursor-pointer group hover:border-[#C23646]/50 transition-all duration-200 ${className}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="accent">{project.status}</Badge>
          <span className="text-[11px] text-[#8E909B] font-mono truncate max-w-[170px]">
            {project.metrics}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-base font-bold text-[#EDEDF0] mb-2 group-hover:text-white transition-colors leading-snug line-clamp-1">
          {project.title}
        </h3>

        {/* Short Description (Reducida y concisa) */}
        <p className="text-xs text-[#8E909B] leading-relaxed mb-4 line-clamp-2">
          {project.shortDesc || project.desc}
        </p>
      </div>

      <div>
        {/* Compact Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] py-0.5 px-2">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] text-[#8E909B] font-mono self-center px-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Bottom Interactive Bar */}
        <div
          className="pt-3 border-t flex items-center justify-between text-xs"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="font-semibold text-[#EDEDF0] flex items-center gap-1.5 group-hover:text-[#C23646] transition-colors">
            Ver detalles
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>

          <div className="flex items-center gap-2">
            {shouldShowLive && (
              <a
                href={project.liveUrl || "#"}
                target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                rel={project.liveUrl && project.liveUrl !== "#" ? "noreferrer" : undefined}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-mono text-[#8E909B] hover:text-[#EDEDF0] transition-colors"
                title="Ver Demo en Vivo"
              >
                Demo ↗
              </a>
            )}

            {shouldShowRepo && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#8E909B] hover:text-[#EDEDF0] transition-colors p-1"
                title="Ver código en GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
