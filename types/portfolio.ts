export interface Project {
  id: string;
  title: string;
  category: "backend" | "fullstack" | "frontend" | "devops";
  desc: string;
  metrics: string;
  tags: string[];
  featured?: boolean;
  status: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string;
}

export interface MetricItem {
  num: string;
  label: string;
}

export interface ColorToken {
  label: string;
  hex: string;
  desc: string;
}
