import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  className = "",
  style,
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        interactive
          ? "hover:-translate-y-1 hover:border-[#C23646]/40 hover:shadow-2xl hover:shadow-black/60"
          : ""
      } ${className}`}
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
