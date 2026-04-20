// ─── Navegación ───────────────────────────────────────────────
export const NAV_LINKS = [
  "Inicio",
  "Sobre mí",
  "Servicios",
  "Proyectos",
  "Stack",
  "Precios",
  "Testimonios",
  "Contacto",
];

// ─── Servicios ────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "⚛️",
    title: "Desarrollo Frontend",
    desc: "Interfaces modernas y reactivas con React JS. Componentes reutilizables, rendimiento optimizado y UX excepcional.",
    tags: ["React", "Tailwind", "JavaScript"],
    accent: "#A8EB12",
  },
  {
    icon: "📊",
    title: "Análisis de Datos",
    desc: "Dashboards interactivos con Power BI e inteligencia aumentada con Claude AI. Convierte datos en decisiones.",
    tags: ["Power BI", "Claude AI", "DAX"],
    accent: "#ffc75f",
  },
  {
    icon: "⚡",
    title: "Automatización",
    desc: "Flujos de trabajo inteligentes con n8n. Conecta apps, elimina tareas repetitivas y potencia tu productividad.",
    tags: ["n8n", "API REST", "Webhooks"],
    accent: "#4ffbdf",
  },
];

// ─── Proyectos ────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Dashboard Analytics",
    desc: "Panel de métricas empresariales con Power BI integrado y análisis predictivo con IA.",
    tech: ["Power BI", "Claude AI", "React"],
    accent: "#A8EB12",
    color: "#7C3AED",
  },
  {
    title: "Automatización CRM",
    desc: "Pipeline automatizado de captación y seguimiento de clientes con n8n y múltiples integraciones.",
    tech: ["n8n", "API", "Webhooks"],
    accent: "#ffc75f",
    color: "#9333EA",
  },
  {
    title: "App Web Reactiva",
    desc: "Aplicación SPA de gestión interna con React, hooks personalizados y arquitectura escalable.",
    tech: ["React", "Context API", "CSS Modules"],
    accent: "#4ffbdf",
    color: "#A855F7",
  },
];

// ─── Stack tecnológico ────────────────────────────────────────
export const STACK_ITEMS = [
  {
    name: "React JS",
    color: "#61DAFB",
    level: "Avanzado",
    desc: "Componentes, hooks, Context API, CSS Modules",
    icon: () => (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#61DAFB">
        <circle cx="12" cy="12" r="2.05" />
        <path d="M12 6.5c2.76 0 5.28.5 7.16 1.32C21.26 8.7 22.5 9.87 22.5 11s-1.24 2.3-3.34 3.18C17.28 15 14.76 15.5 12 15.5s-5.28-.5-7.16-1.32C2.74 13.3 1.5 12.13 1.5 11s1.24-2.3 3.34-3.18C6.72 7 9.24 6.5 12 6.5z" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <path d="M8.5 8.74c1.38-2.39 3.05-4.3 4.59-5.43C14.76 2.2 16.24 1.87 17.25 2.5c1.01.62 1.34 2.1.88 4.02-.4 1.71-1.38 3.69-2.76 5.52" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <path d="M8.5 13.26c-1.38 2.39-2.1 4.81-1.64 6.72.46 1.92 1.94 2.9 3.14 2.52 1.01-.62 1.34-2.1.88-4.02-.4-1.71-1.38-3.69-2.76-5.52" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <path d="M15.5 13.26c1.38 2.39 2.1 4.81 1.64 6.72-.46 1.92-1.94 2.9-3.14 2.52-1.2-.62-1.75-2.1-1.29-4.02.46-1.71 1.38-3.69 2.79-5.22" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <path d="M15.5 8.74C14.12 6.35 12.45 4.44 10.91 3.31 9.24 2.2 7.76 1.87 6.75 2.5c-1.01.62-1.34 2.1-.88 4.02.4 1.71 1.38 3.69 2.76 5.52" fill="none" stroke="#61DAFB" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    level: "Avanzado",
    desc: "DAX, modelado de datos, dashboards interactivos",
    icon: () => (
      <svg viewBox="0 0 32 32" width="36" height="36">
        <rect x="2" y="18" width="6" height="12" rx="1.5" fill="#F2C811" />
        <rect x="10" y="12" width="6" height="18" rx="1.5" fill="#F2C811" opacity=".85" />
        <rect x="18" y="6" width="6" height="24" rx="1.5" fill="#F2C811" opacity=".65" />
        <rect x="26" y="2" width="4" height="28" rx="1.5" fill="#F2C811" opacity=".45" />
      </svg>
    ),
  },
  {
    name: "Claude AI",
    color: "#A855F7",
    level: "Intermedio",
    desc: "Agentes IA, automatización inteligente, prompting",
    icon: () => (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#A855F7" strokeWidth="2" />
        <path d="M12 26 Q20 10 28 26" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="22" r="2.5" fill="#A855F7" />
        <circle cx="13" cy="17" r="1.5" fill="#A78BFA" opacity=".7" />
        <circle cx="27" cy="17" r="1.5" fill="#A78BFA" opacity=".7" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    level: "Avanzado",
    desc: "Workflows, webhooks, integraciones API",
    icon: () => (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="8" cy="20" r="5" fill="#EA4B71" />
        <circle cx="20" cy="20" r="5" fill="#EA4B71" opacity=".75" />
        <circle cx="32" cy="20" r="5" fill="#EA4B71" opacity=".5" />
        <path d="M13 20 L15 20" stroke="#EA4B71" strokeWidth="2.5" />
        <path d="M25 20 L27 20" stroke="#EA4B71" strokeWidth="2.5" opacity=".75" />
        <path d="M8 15 Q8 8 16 8 L24 8 Q32 8 32 15" fill="none" stroke="#EA4B71" strokeWidth="1.5" opacity=".4" strokeDasharray="2,2" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    level: "Avanzado",
    desc: "ES6+, async/await, DOM manipulation",
    icon: () => (
      <svg viewBox="0 0 32 32" width="36" height="36">
        <rect width="32" height="32" rx="4" fill="#F7DF1E" />
        <path d="M9 25.5l2.1-1.27c.4.72.77 1.32 1.65 1.32.84 0 1.37-.33 1.37-1.6V16h2.57v8c0 2.63-1.54 3.83-3.79 3.83-2.03 0-3.2-1.05-3.9-2.33zM19.5 25.2l2.1-1.22c.55.9 1.27 1.56 2.54 1.56 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.19-1.88-1.7l-.65-.28c-1.87-.8-3.1-1.8-3.1-3.9 0-1.94 1.48-3.42 3.8-3.42 1.64 0 2.82.57 3.67 2.07l-2.01 1.29c-.44-.79-.92-1.1-1.66-1.1-.75 0-1.23.48-1.23 1.1 0 .77.48 1.08 1.58 1.56l.65.28c2.2.94 3.44 1.9 3.44 4.05 0 2.32-1.82 3.6-4.27 3.6-2.39 0-3.94-1.14-4.73-2.62z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    level: "Intermedio",
    desc: "Utility-first CSS, diseño responsive",
    icon: () => (
      <svg viewBox="0 0 54 33" width="42" height="26" fill="#38BDF8">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    level: "Intermedio",
    desc: "Control de versiones, ramas, pull requests",
    icon: () => (
      <svg viewBox="0 0 32 32" width="36" height="36">
        <path d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.54 0l-2.54 2.54 3.22 3.22a2.14 2.14 0 012.71 2.72l3.1 3.1a2.14 2.14 0 11-1.29 1.29l-2.89-2.89v7.6a2.14 2.14 0 11-1.76-.05V12.3a2.14 2.14 0 01-1.16-2.81L11.1 6.3 2.53 14.87a1.8 1.8 0 000 2.54l12 12a1.8 1.8 0 002.54 0l12.4-12.4a1.8 1.8 0 000-2.48z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    color: "#A8EB12",
    level: "Avanzado",
    desc: "Integración de APIs, fetch, axios, autenticación",
    icon: () => (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <circle cx="8" cy="20" r="4" fill="none" stroke="#A8EB12" strokeWidth="2" />
        <circle cx="32" cy="12" r="4" fill="none" stroke="#A8EB12" strokeWidth="2" />
        <circle cx="32" cy="28" r="4" fill="none" stroke="#A8EB12" strokeWidth="2" />
        <path d="M12 20 L28 12M12 20 L28 28" stroke="#A8EB12" strokeWidth="1.5" strokeDasharray="3,2" />
        <circle cx="8" cy="20" r="2" fill="#A8EB12" />
        <circle cx="32" cy="12" r="2" fill="#A8EB12" />
        <circle cx="32" cy="28" r="2" fill="#A8EB12" />
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#A259FF",
    level: "Intermedio",
    desc: "Diseño UI/UX, prototipos, componentes",
    icon: () => (
      <svg viewBox="0 0 38 56" width="28" height="28" fill="none">
        <path d="M19 28a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" fill="#1ABCFE"/>
        <path d="M1 47a9 9 0 0 1 9-9h9v9a9 9 0 0 1-18 0z" fill="#0ACF83"/>
        <path d="M19 1v18h9a9 9 0 0 0 0-18H19z" fill="#FF7262"/>
        <path d="M1 10a9 9 0 0 0 9 9h9V1H10A9 9 0 0 0 1 10z" fill="#F24E1E"/>
        <path d="M1 28a9 9 0 0 0 9 9h9V19H10a9 9 0 0 0-9 9z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Illustrator",
    color: "#FF9A00",
    level: "Intermedio",
    desc: "Diseño vectorial, logos, ilustraciones",
    icon: () => (
      <svg viewBox="0 0 36 36" width="28" height="28">
        <rect width="36" height="36" rx="6" fill="#FF9A00"/>
        <text x="5" y="26" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill="#330000">Ai</text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#ffffff",
    level: "Intermedio",
    desc: "Repositorios, pull requests, GitHub Actions",
    icon: () => (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#ffffff">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
{
  name: "PostgreSQL",
  color: "#336791",
  level: "Intermedio",
  desc: "Consultas SQL, modelado de datos, relaciones",
  icon: () => (
    <svg viewBox="0 0 512 512" width="30" height="30" fill="#336791">
      <path d="M219.8 171.3c3.9 .5 13.1 2.7 12.3 8.5-.8 5.9-9.2 9.1-14.2 8.4-4.7-.7-13.2-6.1-12.3-12.1l.3-2.1c4.2 0 8.3-3.5 13.9-2.7zm168.1-3.4c10.8 2.6-1.1 13.5-6.8 14.3-4.3 .6-12.1-2.2-12.8-7.4-1-7.4 15.7-7.9 19.7-6.9zM365.9 27.1c35.7-.3 81.3 9.4 114.3 51.7 7.2 9.2 10 24 9.7 40.9-.8 49.6-26 129.4-70.7 197.4 4.5 2.9 17.6 7.4 51.1 .5 5.6-1.2 12.7-2.2 17.6 1.6 18.2 13.9-19.6 35.1-28.4 39.2-13.2 6.2-34.8 9.5-51.2 8.7-2.1-.2-4.3-.2-6.3-.6-5.1-1.1-7.4-1-8.3-.7-1.1 .3-1.4 2.9-1.6 3.8-2.8 24.9-7.7 64.7-10.7 82-2.8 16.3-7.7 29.3-17.2 39.2-9.5 9.9-22.8 15.7-40.6 19.5-22.3 4.8-37.9-.1-48.7-9.1-10.3-8.7-15.2-20.4-18-27.4-1.8-4.5-3-11.5-4-19.8-2.3-19.8-3.3-50.4-3-83.3-24.6 22.1-55 17.2-68.2 13.9-10.5-2.6-33-16.1-17.5-28.7 11.9-9.7 30.3-5.5 42.2-15 2.4-1.9 11.4-10.6 11.4-13.5-10-.3-19.6-2.9-28.1-7.5-13.5 14.5-26.4 29.5-39.3 44.6-8.3 9.9-17.4 15.8-27.4 16.2-9.9 .4-18.7-4.6-26.1-11.8-7.3-7.1-14.1-17.2-20.4-29-19-35.5-33.2-86.1-42.3-126.4-6-26.7-9.6-49.1-10.1-59-2.2-44.3 8-74.1 26-93.2 17.9-19 42.4-26 66.1-27.4 35.6-2 71 8.5 86.6 13.8l5 1.8c15.9-10.8 36.1-17.4 61.7-17 13.2 .2 25.5 2.2 36.7 4.2 18.6-7.1 39.8-9.5 59.4-9.7z"/>
    </svg>
  ),
}
];

// ─── Planes de precios automación ─────────────────────────────
export const AUTO_PLANS = [
  {
    id: "basic",
    label: "Básico",
    price: 100,
    color: "#4ffbdf",
    features: [
      "Hasta 3 flujos",
      "Conexión 2 apps",
      "Soporte 30 días",
      "Documentación básica",
    ],
  },
  {
    id: "intermediate",
    label: "Intermedio",
    price: 300,
    color: "#ffc75f",
    features: [
      "Hasta 10 flujos",
      "Apps ilimitadas",
      "Webhooks custom",
      "Soporte 60 días",
      "Docs completa",
    ],
  },
  {
    id: "advanced",
    label: "Avanzado",
    price: 700,
    color: "#9333EA",
    features: [
      "Flujos ilimitados",
      "IA con Claude",
      "Monitoreo 24/7",
      "Soporte 90 días",
      "Capacitación incluida",
    ],
  },
];

// ─── Tarjetas de precios ───────────────────────────────────────
export const PRICING_CARDS = [
  {
    icon: "⚛️",
    title: "Desarrollo Frontend",
    price: 500,
    accent: "#A8EB12",
    desc: "Sitio web o app React completa, responsive.",
    features: [
      "Diseño UI/UX personalizado",
      "React JS + Tailwind",
      "100% Responsive",
      "Optimización SEO",
      "2–4 semanas",
    ],
    badge: null,
  },
  {
    icon: "📊",
    title: "Análisis de Datos",
    price: 300,
    accent: "#ffc75f",
    desc: "Dashboard Power BI + Claude AI integrado.",
    features: [
      "5 reportes Power BI",
      "Integración Claude AI",
      "DAX personalizado",
      "Capacitación incluida",
      "Actualizaciones 30 días",
    ],
    badge: "Popular",
  },
];

// ─── Redes sociales ───────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    bg: "#24292e",
    href: "https://github.com/cloudcoders-C2?tab=repositories",
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={c}>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    href: "https://www.instagram.com/cloudcoders.c2/",
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    bg: "#0077B5",
    href: "https://www.linkedin.com/in/crishtian-rodriguez-herrera-76b5223b9/",
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={c}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    bg: "#1769ff",
    href: "https://www.behance.net/crishtirodrigu4",
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={c}>
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    bg: "#25D366",
    href: "https://wa.me/51960959529",
    icon: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={c}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

// ─── Corner logos para "Sobre mí" ─────────────────────────────
export const CORNER_LOGOS = [
  {
    pos: "topLeft",
    name: "React JS",
    color: "#61DAFB",
    icon: (s) => (
      <svg viewBox="0 0 24 24" width={s} height={s} fill="#61DAFB">
        <circle cx="12" cy="12" r="2.05" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    pos: "topRight",
    name: "Power BI",
    color: "#F2C811",
    icon: (s) => (
      <svg viewBox="0 0 32 32" width={s} height={s}>
        <rect x="2" y="18" width="6" height="12" rx="1.5" fill="#F2C811" />
        <rect x="10" y="12" width="6" height="18" rx="1.5" fill="#F2C811" opacity=".85" />
        <rect x="18" y="6" width="6" height="24" rx="1.5" fill="#F2C811" opacity=".65" />
        <rect x="26" y="2" width="4" height="28" rx="1.5" fill="#F2C811" opacity=".45" />
      </svg>
    ),
  },
  {
    pos: "bottomLeft",
    name: "n8n",
    color: "#EA4B71",
    icon: (s) => (
      <svg viewBox="0 0 40 40" width={s} height={s}>
        <circle cx="8" cy="20" r="5" fill="#EA4B71" />
        <circle cx="20" cy="20" r="5" fill="#EA4B71" opacity=".75" />
        <circle cx="32" cy="20" r="5" fill="#EA4B71" opacity=".5" />
        <path d="M13 20 L15 20M25 20 L27 20" stroke="#EA4B71" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    pos: "bottomRight",
    name: "Claude AI",
    color: "#A855F7",
    icon: (s) => (
      <svg viewBox="0 0 40 40" width={s} height={s}>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#A855F7" strokeWidth="2" />
        <path d="M12 26 Q20 10 28 26" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="22" r="2.5" fill="#A855F7" />
        <circle cx="13" cy="17" r="1.5" fill="#A78BFA" opacity=".8" />
        <circle cx="27" cy="17" r="1.5" fill="#A78BFA" opacity=".8" />
      </svg>
    ),
  },
];
