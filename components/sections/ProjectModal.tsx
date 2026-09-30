"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  showRepo?: boolean;
  showLive?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  showRepo = true,
  showLive = true,
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Reiniciar índice al cambiar de proyecto
  useEffect(() => {
    setCurrentImgIndex(0);
    setImgError(false);
  }, [project]);

  // Manejo de teclas Escape y flechas
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Bloquear scroll de fondo
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, currentImgIndex]);

  if (!project) return null;

  const showGallery = Boolean(project.hasImages) && Boolean(project.images && project.images.length > 0);
  const images = showGallery ? (project.images || []) : [];
  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    if (images.length === 0) return;
    setImgError(false);
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setImgError(false);
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const shouldShowRepo =
    (project.showRepo ?? showRepo) && Boolean(project.repoUrl);

  const shouldShowLive =
    (project.showLive ?? showLive) && Boolean(project.liveUrl);

  // VISTA SIN FOTOS / ENFOCADA EN DESCRIPCIÓN Y ARQUITECTURA
  if (!showGallery) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl max-h-[88vh] bg-[#18191E] border border-[#26272E] rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-black"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Superior del Panel */}
          <div className="p-5 border-b border-[#26272E] flex items-center justify-end bg-[#14151A]/80">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="w-8 h-8 rounded-lg bg-[#C23646] hover:bg-[#B0303F] text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-[#C23646]/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cuerpo Scrollable: Contenido Completo del Proyecto */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            {/* Título Principal y Métricas */}
            <div>
              <h3
                id="project-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#EDEDF0] tracking-tight leading-snug"
              >
                {project.title}
              </h3>
            </div>

            {/* Descripción Completa ("Contando todo lo que se hizo") */}
            <div className="bg-[#121317]/80 rounded-xl p-5 border border-[#26272E]/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-3">
                Arquitectura &amp; Desarrollo Realizado
              </h4>
              <p className="text-sm sm:text-base text-[#EDEDF0] leading-relaxed whitespace-pre-line font-normal">
                {project.desc}
              </p>
            </div>

            {/* Stack Tecnológico */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E909B] mb-2.5">
                Tecnologías &amp; Herramientas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer de Acciones (Enlaces externos y botón de cierre) */}
          <div className="p-4 sm:p-5 border-t border-[#26272E] bg-[#14151A] flex flex-col sm:flex-row items-center justify-between gap-3">
            {(shouldShowRepo || shouldShowLive) ? (
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {shouldShowRepo && (
                  <Button
                    asAnchor
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="sm"
                    className="flex-1 sm:flex-initial text-center"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    Ver Repositorio
                  </Button>
                )}

                {shouldShowLive && (
                  <Button
                    asAnchor
                    href={project.liveUrl || "#"}
                    target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                    rel={project.liveUrl && project.liveUrl !== "#" ? "noreferrer" : undefined}
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-initial text-center"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    Demo en Vivo
                  </Button>
                )}
              </div>
            ) : <div />}

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#8E909B] hover:text-[#EDEDF0] transition-colors cursor-pointer"
            >
              Cerrar vista (Esc)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // VISTA CON GALERÍA DE FOTOS (2/3 Galería + 1/3 Detalle)
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[92vh] max-h-[850px] bg-[#14151A] border border-[#26272E] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================= */}
        {/* LADO IZQUIERDO: 2/3 Galería de Imágenes (estilo post FB) */}
        {/* ========================================================= */}
        <div className="w-full md:w-2/3 h-[45%] md:h-full bg-[#0A0B0E] relative flex flex-col items-center justify-center select-none overflow-hidden group">
          {images.length > 0 && !imgError ? (
            <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6">
              <img
                src={images[currentImgIndex]}
                alt={`${project.title} - Imagen ${currentImgIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-all duration-300"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            // Placeholder interactivo si no hay imágenes o fallan
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#121318] to-[#0A0B0E]">
              <div className="w-20 h-20 rounded-2xl bg-[#18191E] border border-[#26272E] flex items-center justify-center mb-4 shadow-xl">
                <svg className="w-10 h-10 text-[#C23646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-mono text-[#8E909B] uppercase tracking-wider mb-1">
                Visualización de Proyecto • {project.type === "profesional" ? "Profesional" : "Personal"} • {project.category}
              </span>
              <h4 className="text-lg font-bold text-[#EDEDF0] max-w-md">
                {project.title}
              </h4>
              <p className="text-xs text-[#8E909B] mt-2 max-w-sm">
                Placeholder de galería de capturas y diagramas de arquitectura.
              </p>
            </div>
          )}

          {/* Botones de navegación (solo si hay más de 1 imagen) */}
          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C23646] text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all active:scale-90 cursor-pointer shadow-lg z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C23646] text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all active:scale-90 cursor-pointer shadow-lg z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicador / Contador de imágenes */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-[#EDEDF0] flex items-center gap-2 z-10">
                <span>{currentImgIndex + 1} / {images.length}</span>
                <div className="flex items-center gap-1">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentImgIndex ? "bg-[#C23646] scale-125" : "bg-white/30 hover:bg-white/60"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Botón flotante para cerrar en móvil */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="md:hidden absolute top-3 right-3 w-9 h-9 rounded-full bg-black/75 hover:bg-[#C23646] text-white flex items-center justify-center border border-white/10 transition-all z-20 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ========================================================= */}
        {/* LADO DERECHO: 1/3 Detalle del Proyecto & Descripción      */}
        {/* ========================================================= */}
        <div className="w-full md:w-1/3 h-[55%] md:h-full bg-[#18191E] border-t md:border-t-0 md:border-l border-[#26272E] flex flex-col justify-between overflow-hidden">
          {/* Header Superior del Panel */}
          <div className="p-5 border-b border-[#26272E] flex items-center justify-end bg-[#14151A]/80">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="w-8 h-8 rounded-lg bg-[#C23646] hover:bg-[#B0303F] text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-[#C23646]/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cuerpo Scrollable: Contenido Completo del Proyecto */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
            {/* Título Principal */}
            <div>
              <h3
                id="project-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-[#EDEDF0] tracking-tight leading-snug"
              >
                {project.title}
              </h3>

            </div>

            {/* Descripción Completa ("Contando todo lo que se hizo") */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C23646] mb-2">
                Arquitectura &amp; Desarrollo Realizado
              </h4>
              <p className="text-sm text-[#EDEDF0] leading-relaxed whitespace-pre-line font-normal">
                {project.desc}
              </p>
            </div>

            {/* Stack Tecnológico */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E909B] mb-2.5">
                Tecnologías &amp; Herramientas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs py-1 px-2.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer de Acciones (Enlaces externos y botón de cierre) */}
          <div className="p-4 border-t border-[#26272E] bg-[#14151A] flex flex-col gap-2.5">
            {(shouldShowRepo || shouldShowLive) && (
              <div className="flex items-center gap-3">
                {shouldShowRepo && (
                  <Button
                    asAnchor
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="sm"
                    className="flex-1 text-center"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    Ver Repositorio
                  </Button>
                )}

                {shouldShowLive && (
                  <Button
                    asAnchor
                    href={project.liveUrl || "#"}
                    target={project.liveUrl && project.liveUrl !== "#" ? "_blank" : undefined}
                    rel={project.liveUrl && project.liveUrl !== "#" ? "noreferrer" : undefined}
                    variant="outline"
                    size="sm"
                    className="flex-1 text-center"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    }
                  >
                    Demo en Vivo
                  </Button>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#8E909B] hover:text-[#EDEDF0] text-center py-1 transition-colors cursor-pointer"
            >
              Cerrar vista (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
