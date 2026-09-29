import React from "react";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  name?: string;
  role?: string;
  initials?: string;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  name = "Emiliano Aguilar",
  role = "Ingeniero DevOps & Full Stack",
  className = "",
}) => {
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-md ${className}`}
      style={{
        backgroundColor: "rgba(13, 14, 17, 0.82)",
        borderColor: "rgba(38, 39, 46, 0.7)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group text-inherit no-underline">
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-[#EDEDF0] text-sm sm:text-base">
              {name}
            </span>
            <span className="text-xs text-[#8E909B]">{role}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E909B]">
          <a href="#proyectos" className="hover:text-[#EDEDF0] transition-colors">
            Proyectos
          </a>
          <a href="#stack" className="hover:text-[#EDEDF0] transition-colors">
            Stack
          </a>
          <a href="#experiencia" className="hover:text-[#EDEDF0] transition-colors">
            Experiencia
          </a>
        </nav>

        <Button
          asAnchor
          href="#contacto"
          variant="secondary"
          size="sm"
          icon={<span className="w-2 h-2 rounded-full bg-[#C23646]" />}
        >
          Contacto
        </Button>
      </div>
    </header>
  );
};
