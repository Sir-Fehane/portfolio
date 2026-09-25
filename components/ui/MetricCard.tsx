import React from "react";
import { MetricItem } from "@/types/portfolio";

interface MetricCardProps {
  metric: MetricItem;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, className = "" }) => {
  return (
    <div
      className={`p-4 rounded-xl border flex flex-col gap-1 transition-all hover:border-[#B0303F]/40 ${className}`}
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <span className="text-xl sm:text-2xl font-black text-[#EDEDF0] tracking-tight">
        {metric.num}
      </span>
      <span className="text-xs text-[#8E909B] font-medium leading-snug">
        {metric.label}
      </span>
    </div>
  );
};
