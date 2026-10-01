import { ExperienceItem, MetricItem, SkillCategory } from "@/types/portfolio";

export type Language = "es" | "en";

export interface Translations {
  nav: {
    name: string;
    role: string;
    projects: string;
    stack: string;
    experience: string;
    contact: string;
    cv: string;
    selectLanguage: string;
  };
  hero: {
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
    cvBtn: string;
    cvUrl: string;
    cvFileName: string;
    terminalUser: string;
    metrics: MetricItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    disclaimerTitle: string;
    disclaimerText: string;
    tabAll: string;
    tabProfessional: string;
    tabPersonal: string;
    emptyText: string;
    viewDetails: string;
    demo: string;
    demoTitle: string;
    repoTitle: string;
    modalArchitecture: string;
    modalTech: string;
    modalViewRepo: string;
    modalLiveDemo: string;
    modalCloseEsc: string;
    modalCloseAria: string;
    modalPreview: string;
    modalCategoryProfessional: string;
    modalCategoryPersonal: string;
    modalPlaceholderDesc: string;
    modalPrevImg: string;
    modalNextImg: string;
    modalSpanishNoticeTitle: string;
    modalSpanishNoticeText: string;
    badgeSpanish: string;
  };
  stack: {
    title: string;
    subtitle: string;
    description: string;
    skills: SkillCategory[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    description: string;
    githubButton: string;
    cvButton: string;
  };
  footer: {
    portfolio: string;
    madeWith: string;
    by: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      name: "Emiliano Aguilar",
      role: "Ingeniero DevOps & Full Stack",
      projects: "Proyectos",
      stack: "Stack",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "CV",
      selectLanguage: "Seleccionar idioma",
    },
    hero: {
      titlePrefix: "Infraestructura, ",
      titleAccent: "DevSecOps",
      titleSuffix: " y Desarrollo Full-Stack",
      subtitle:
        "Automatizo pipelines CI/CD y blindo infraestructura en Linux. Desarrollo Full-Stack con seguridad integrada de código a producción",
      exploreBtn: "Explorar Proyectos",
      contactBtn: "Contacto",
      cvBtn: "Descargar CV",
      cvUrl: "/CV%20SPANISH%20Oscar%20Emiliano%20Alvarado%20Aguilar.pdf",
      cvFileName: "CV SPANISH Oscar Emiliano Alvarado Aguilar.pdf",
      terminalUser: "secops@pipeline:~/audit",
      metrics: [
        { num: "+3 Años", label: "Experiencia en Desarrollo Full-Stack & SecOps" },
        { num: "10+", label: "Sistemas, Servicios & Módulos en Producción" },
        { num: "3", label: "Nubes Administradas (AWS, OCI & DigitalOcean)" },
        { num: "Zero-Trust", label: "Enfoque en Gestión de Accesos, SSH & API Keys" },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Portafolio",
      disclaimerTitle: "Aviso de Demos",
      disclaimerText: "Las demostraciones en vivo y accesos externos están en español.",
      tabAll: "Todos",
      tabProfessional: "Profesionales",
      tabPersonal: "Personales",
      emptyText: "No hay proyectos catalogados en esta categoría aún.",
      viewDetails: "Ver detalles",
      demo: "Demo ↗",
      demoTitle: "Ver Demo en Vivo",
      repoTitle: "Ver código en GitHub",
      modalArchitecture: "Arquitectura & Desarrollo Realizado",
      modalTech: "Tecnologías & Herramientas",
      modalViewRepo: "Ver Repositorio",
      modalLiveDemo: "Demo en Vivo",
      modalCloseEsc: "Cerrar vista (Esc)",
      modalCloseAria: "Cerrar modal",
      modalPreview: "Visualización de Proyecto",
      modalCategoryProfessional: "Profesional",
      modalCategoryPersonal: "Personal",
      modalPlaceholderDesc: "Placeholder de galería de capturas y diagramas de arquitectura.",
      modalPrevImg: "Imagen anterior",
      modalNextImg: "Siguiente imagen",
      modalSpanishNoticeTitle: "Demo en vivo",
      modalSpanishNoticeText: "La demostración interactiva externa se encuentra en español.",
      badgeSpanish: "ES",
    },
    stack: {
      title: "Ecosistema Técnico",
      subtitle: "Habilidades & Tecnologías",
      description: "Herramientas y patrones aplicados a lo largo del ciclo de vida del software.",
      skills: [
        {
          category: "Backend & APIs",
          items: [
            "Python (FastAPI, Django)",
            "Node.js (AdonisJS, Strapi)",
            "PHP 8.2 (Laravel)",
            "WebSockets / SSE",
            "SQLAlchemy",
            "REST APIs",
          ],
        },
        {
          category: "Bases de Datos & Almacenamiento",
          items: ["MySQL", "MongoDB", "PostgreSQL", "MSSQL", "SQLite"],
        },
        {
          category: "DevOps, Infraestructura & SecOps",
          items: [
            "Linux (Ubuntu, RHEL)",
            "GitHub Actions (CI/CD)",
            "WireGuard / VPN",
            "Nginx Reverse Proxy",
            "SELinux & Hardening",
            "Firewalld / UFW",
            "AWS / OCI / DigitalOcean",
          ],
        },
        {
          category: "Frontend & Mobile",
          items: ["React", "TypeScript", "Angular 11", "Flutter", "Tailwind CSS", "Bootstrap"],
        },
      ],
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Trayectoria",
      items: [
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
      ],
    },
    contact: {
      title: "¿Listo para crear algo increíble?",
      description:
        "Si estás interesado en colaborar en algún proyecto, no dudes en contactarme, estaré encantado de saber de ti.",
      githubButton: "Perfil de GitHub",
      cvButton: "Descargar CV",
    },
    footer: {
      portfolio: "Portafolio",
      madeWith: "Hecho con",
      by: "por",
    },
  },
  en: {
    nav: {
      name: "Emiliano Aguilar",
      role: "DevOps & Full Stack Engineer",
      projects: "Projects",
      stack: "Stack",
      experience: "Experience",
      contact: "Contact",
      cv: "CV",
      selectLanguage: "Select language",
    },
    hero: {
      titlePrefix: "Infrastructure, ",
      titleAccent: "DevSecOps",
      titleSuffix: " and Full-Stack Development",
      subtitle:
        "I automate CI/CD pipelines and harden Linux infrastructure. Full-Stack development with security built-in from code to production.",
      exploreBtn: "Explore Projects",
      contactBtn: "Contact",
      cvBtn: "Download CV",
      cvUrl: "/CV%20ENGLISH%20Oscar%20Emiliano%20Alvarado%20Aguilar.pdf",
      cvFileName: "CV ENGLISH Oscar Emiliano Alvarado Aguilar.pdf",
      terminalUser: "secops@pipeline:~/audit",
      metrics: [
        { num: "+3 Years", label: "Full-Stack Development & SecOps Experience" },
        { num: "10+", label: "Systems, Services & Modules in Production" },
        { num: "3", label: "Managed Clouds (AWS, OCI & DigitalOcean)" },
        { num: "Zero-Trust", label: "Focus on Access Management, SSH & API Keys" },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Portfolio",
      disclaimerTitle: "Live Demos Notice",
      disclaimerText:
        "External live demos, public store listings, and deployed applications are in Spanish.",
      tabAll: "All",
      tabProfessional: "Professional",
      tabPersonal: "Personal",
      emptyText: "No projects cataloged in this category yet.",
      viewDetails: "View details",
      demo: "Demo ↗",
      demoTitle: "View Live Demo (Spanish)",
      repoTitle: "View code on GitHub",
      modalArchitecture: "Architecture & Implementation",
      modalTech: "Technologies & Tools",
      modalViewRepo: "View Repository",
      modalLiveDemo: "Live Demo",
      modalCloseEsc: "Close view (Esc)",
      modalCloseAria: "Close modal",
      modalPreview: "Project Preview",
      modalCategoryProfessional: "Professional",
      modalCategoryPersonal: "Personal",
      modalPlaceholderDesc: "Gallery placeholder for screenshots and architecture diagrams.",
      modalPrevImg: "Previous image",
      modalNextImg: "Next image",
      modalSpanishNoticeTitle: "Live Demo",
      modalSpanishNoticeText:
        "The external interactive demo for this project is hosted in Spanish.",
      badgeSpanish: "ES",
    },
    stack: {
      title: "Technical Ecosystem",
      subtitle: "Skills & Technologies",
      description: "Tools and architectural patterns applied throughout the software development lifecycle.",
      skills: [
        {
          category: "Backend & APIs",
          items: [
            "Python (FastAPI, Django)",
            "Node.js (AdonisJS, Strapi)",
            "PHP 8.2 (Laravel)",
            "WebSockets / SSE",
            "SQLAlchemy",
            "REST APIs",
          ],
        },
        {
          category: "Databases & Storage",
          items: ["MySQL", "MongoDB", "PostgreSQL", "MSSQL", "SQLite"],
        },
        {
          category: "DevOps, Infrastructure & SecOps",
          items: [
            "Linux (Ubuntu, RHEL)",
            "GitHub Actions (CI/CD)",
            "WireGuard / VPN",
            "Nginx Reverse Proxy",
            "SELinux & Hardening",
            "Firewalld / UFW",
            "AWS / OCI / DigitalOcean",
          ],
        },
        {
          category: "Frontend & Mobile",
          items: ["React", "TypeScript", "Angular 11", "Flutter", "Tailwind CSS", "Bootstrap"],
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Career Journey",
      items: [
        {
          role: "Full-Stack & SecOps Engineer",
          company: "Gebesa",
          period: "Dec. 2025 — Aug. 2026",
          details:
            "Design and development of the internal operations platform using FastAPI, SQLAlchemy, and React/TypeScript, integrating WebSockets RPC and real-time SSE logs. Perimeter security management with Firewalld, SELinux policies, SSH/API key access auditing, and continuous deployment pipelines with GitHub Actions.",
        },
        {
          role: "Full-Stack Developer",
          company: "Gebesa",
          period: "Apr. 2025 — Dec. 2025",
          details:
            "Implementation of AI-driven prospecting and commercial attention assistants using Python (Evolution API) and React dashboards. Integration of AI modules in mobile apps with Flutter and development of enterprise modules with 3D augmented reality visualization for iOS and Android.",
        },
        {
          role: "Full-Stack Developer",
          company: "PowerTech de México",
          period: "Sep. 2024 — Apr. 2025",
          details:
            "Development of sales logging and quoting platform in Angular 11, reducing quotation turnaround time by 40%. Implementation of a real-time industrial tonnage production monitoring system with Python and Modbus protocol, along with refactoring and modernization of a web application to PHP 8.2.",
        },
      ],
    },
    contact: {
      title: "Ready to build something extraordinary?",
      description:
        "Interested in collaborating or discussing an upcoming project? Feel free to reach out, I would love to hear from you.",
      githubButton: "GitHub Profile",
      cvButton: "Download CV",
    },
    footer: {
      portfolio: "Portfolio",
      madeWith: "Made with",
      by: "by",
    },
  },
};
