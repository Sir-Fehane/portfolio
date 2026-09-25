import React from "react";

export type BadgeVariant = "accent" | "outline" | "subtle";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  className = "",
}) => {
  const styles: Record<BadgeVariant, React.CSSProperties> = {
    accent: {
      backgroundColor: "rgba(176, 48, 63, 0.12)",
      borderColor: "rgba(194, 54, 70, 0.3)",
      color: "#C23646",
    },
    outline: {
      backgroundColor: "var(--base)",
      borderColor: "var(--border)",
      color: "var(--text-secondary)",
    },
    subtle: {
      backgroundColor: "var(--surface)",
      borderColor: "var(--border)",
      color: "var(--text-primary)",
    },
  };

  return (
    <span
      className={`inline-flex items-center text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold transition-colors ${className}`}
      style={styles[variant]}
    >
      {children}
    </span>
  );
};
