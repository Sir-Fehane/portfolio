import React from "react";
import { COLOR_TOKENS } from "@/data/portfolioData";
import { ColorToken } from "@/types/portfolio";

interface PaletteBarProps {
  tokens?: ColorToken[];
  className?: string;
}

export const PaletteBar: React.FC<PaletteBarProps> = ({
  tokens = COLOR_TOKENS,
  className = "",
}) => {
  return (
    <aside
      className={`w-full border-b px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50 backdrop-blur-md ${className}`}
      style={{
        backgroundColor: "rgba(24, 25, 30, 0.85)",
        borderColor: "var(--border)",
      }}
      aria-label="Paleta de Colores en Uso"
    >
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C23646] animate-pulse"></span>
        <span className="font-mono text-[#8E909B]">Paleta:</span>
        <span className="font-semibold text-[#EDEDF0]">Carbon Dark + Crimson Accent</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        {tokens.map((c) => (
          <div key={c.hex} className="flex items-center gap-1.5 font-mono text-[11px]">
            <span
              className="w-3 h-3 rounded-full border"
              style={{ backgroundColor: c.hex, borderColor: "var(--border)" }}
            />
            <span className="text-[#EDEDF0] font-medium">{c.label}:</span>
            <span className="text-[#8E909B]">{c.hex}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
