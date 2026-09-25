import React from "react";

interface FooterProps {
  name?: string;
  year?: number;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  name = "Emiliano Aguilar",
  year = new Date().getFullYear(),
  className = "",
}) => {
  return (
    <footer
      className={`border-t py-8 text-center text-xs text-[#8E909B] ${className}`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>
            © {year} {name} • Portafolio
          </span>
        </div>
      </div>
    </footer>
  );
};
