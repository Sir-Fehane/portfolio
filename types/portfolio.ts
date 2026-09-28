export interface Project {
  id: string;
  title: string;
  category: "backend" | "fullstack" | "frontend" | "devops";
  shortDesc: string;
  desc: string;
  metrics: string;
  tags: string[];
  featured?: boolean;
  status: string;
  liveUrl?: string;
  repoUrl?: string;
  showRepo?: boolean;
  showLive?: boolean;
  images?: string[];
  highlights?: string[];
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
