import { ColorToken, ExperienceItem, MetricItem, Project, SkillCategory } from "@/types/portfolio";

export const COLOR_TOKENS: ColorToken[] = [
  { label: "60% Base", hex: "#0D0E11", desc: "Negro carbón profundo" },
  { label: "30% Superficie", hex: "#18191E", desc: "Gris grafito elevado" },
  { label: "Separación", hex: "#26272E", desc: "Gris línea" },
  { label: "10% Acento", hex: "#B0303F", desc: "Carmesí / Rubí apagado" },
  { label: "Texto Principal", hex: "#EDEDF0", desc: "Blanco suave" },
  { label: "Texto Secundario", hex: "#8E909B", desc: "Gris neutro" },
];

export const MOCK_METRICS: MetricItem[] = [
  { num: "-40%", label: "Tiempo de Generación de Cotizaciones" },
  { num: "99.9%", label: "Disponibilidad Clúster MongoDB" },
  { num: "3 Nodos", label: "Regiones Conectadas con WireGuard" },
  { num: "Active GTID", label: "Replicación en Clúster MySQL" },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "presta-facil",
    title: "Presta Fácil — Infraestructura Geodistribuida",
    category: "backend",
    desc: "Arquitectura de red geodistribuida en tres regiones (SFCO, NY, Toronto) interconectadas mediante túneles WireGuard cifrados. Implementa clúster MySQL con replicación activa GTID, políticas Firewalld de denegación por defecto y proxies Nginx con rate limiting y failover automático.",
    metrics: "3 Regiones VPN • MySQL GTID • Failover Nginx",
    tags: ["AdonisJS 7", "React", "MySQL Replicado", "WireGuard", "Nginx", "Firewalld"],
    featured: true,
    status: "Completado",
    liveUrl: "#",
    repoUrl: "https://github.com/Sir-Fehane",
  },
  {
    id: "plataforma-operaciones-secops",
    title: "Plataforma de Operaciones & Despliegues SecOps",
    category: "fullstack",
    desc: "Plataforma interna de infraestructura y operaciones con backend asíncrono en FastAPI y dashboard en React/TypeScript. Orquestación de agentes remotos mediante WebSockets RPC bidireccional, streaming de logs con SSE y despliegues automatizados basados en webhooks con firmas HMAC.",
    metrics: "WebSocket RPC • SSE Logs • RBAC & JWT",
    tags: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "WebSockets", "GitHub Actions"],
    featured: true,
    status: "Producción",
    liveUrl: "#",
    repoUrl: "https://github.com/Sir-Fehane",
  },
  {
    id: "dream-nest",
    title: "Dream-Nest — Sistema IoT Pediátrico",
    category: "fullstack",
    desc: "Prototipo de monitoreo IoT para cunas infantiles con recolección y consulta de signos vitales en tiempo real. Infraestructura de API dual en Django y AdonisJS 5 respaldada por un clúster MongoDB Replica Set para alta disponibilidad.", //[cite: 1, 2]
    metrics: "99.9% Disponibilidad • Dual API • Sensores IoT",
    tags: ["Django", "AdonisJS 5", "MongoDB", "Python", "IoT"],
    featured: false,
    status: "Completado",
    liveUrl: "#",
    repoUrl: "https://github.com/Sir-Fehane",
  },
  {
    id: "telemetria-modbus-powertech",
    title: "Telemetría Modbus & Bitácora Comercial",
    category: "fullstack",
    desc: "Sistema de monitoreo industrial en tiempo real mediante protocolo Modbus para seguimiento de producción diaria en toneladas, junto con bitácora en Angular 11 que optimizó el proceso de presupuestos.",
    metrics: "-40% Tiempo Cotización • Modbus Real-Time",
    tags: ["Python", "Modbus", "Angular 11", "PHP 8.2", "MySQL"],
    featured: false,
    status: "Producción",
    liveUrl: "#",
    repoUrl: "https://github.com/Sir-Fehane",
  },
];

export const MOCK_SKILLS: SkillCategory[] = [
  {
    category: "Backend & APIs",
    items: ["Python (FastAPI, Django)", "Node.js (AdonisJS, Strapi)", "PHP 8.2 (Laravel)", "WebSockets / SSE", "SQLAlchemy", "REST APIs"],
  },
  {
    category: "Bases de Datos & Almacenamiento",
    items: ["MySQL (Replicación GTID)", "MongoDB (Replica Set)", "PostgreSQL", "MSSQL", "SQLite"],
  },
  {
    category: "DevOps, Infraestructura & SecOps",
    items: ["Linux (Ubuntu, RHEL)", "GitHub Actions (CI/CD)", "WireGuard / VPN", "Nginx Reverse Proxy", "SELinux & Hardening", "Firewalld / UFW", "AWS / OCI / DigitalOcean"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "TypeScript", "Angular 11", "Flutter", "Tailwind CSS"],
  },
];

export const MOCK_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Ing. Full-Stack & SecOps",
    company: "Gebesa",
    period: "Dic. 2025 — Ago. 2026",
    details:
      "Diseño y desarrollo de la plataforma interna de operaciones con FastAPI, SQLAlchemy y React/TypeScript, integrando WebSockets RPC y logs en vivo por SSE. Gestión de seguridad perimetral con Firewalld, políticas SELinux, auditoría de accesos SSH/API keys y pipelines de despliegue continuo con GitHub Actions.",
  },
  {
    role: "Desarrollador Full-Stack",
    company: "Gebesa",
    period: "Abr. 2025 — Dic. 2025",
    details:
      "Implementación de asistentes de prospección y atención comercial mediante IA con Python (Evolution API) y paneles en React. Integración de módulos de IA en app móvil con Flutter y desarrollo de módulos empresariales con visualización 3D en realidad aumentada para iOS y Android.",
  },
  {
    role: "Desarrollador Full-Stack",
    company: "PowerTech de México",
    period: "Sep. 2024 — Abr. 2025",
    details:
      "Desarrollo de bitácora de ventas en Angular 11 reduciendo en un 40% el tiempo de generación de presupuestos. Implementación de sistema de monitoreo en tiempo real de producción industrial en toneladas con Python y protocolo Modbus, además de refactorización y modernización de aplicativo web en PHP 8.2.",
  },
];