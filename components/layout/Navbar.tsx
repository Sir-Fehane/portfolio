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
  initials = "EA",
  className = "",
}) => {
  return (
    <header className={`mx-auto max-w-6xl px-6 py-6 flex items-center justify-between ${className}`}>
      <a href="#hero" className="flex items-center gap-3 group text-inherit no-underline">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center font-black tracking-tight text-white shadow-lg transition-transform group-hover:scale-105"
          style={{
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
            boxShadow: "0 0 20px var(--accent-glow)",
          }}
        >
          {initials}
        </div>
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
        <a href="#contacto" className="hover:text-[#EDEDF0] transition-colors">
          Contacto
        </a>
      </nav>

      <Button
        asAnchor
        href="#contacto"
        variant="secondary"
        size="sm"
        icon={<span className="w-2 h-2 rounded-full bg-[#C23646]" />}
      >
        Hablemos
      </Button>
    </header>
  );
};
