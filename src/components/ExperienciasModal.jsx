import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ExperienciasModal.module.css";
import {FaReact} from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";

// ══ REEMPLAZA ESTOS DATOS CON TUS EXPERIENCIAS REALES ══════════
const EXPERIENCES = [
  {
    role: "Desarrollador Frontend Freelance",
    company: "CloudCoders",
    type: "Freelance",
    period: "2025 – Presente",
    status: "Activo",
    statusColor: "#A8EB12",
    accent: "#7C3AED",
    icon: <FaReact/>,
    desc: "Desarrollo de interfaces web con React JS, dashboards con Power BI y automatización de flujos con n8n para clientes de Perú y Latinoamérica.",
    achievements: [
      "Portfolio con orbe 3D y animaciones avanzadas",
      "Bot de gastos con Telegram + n8n + Supabase",
      "Dashboards Power BI con 40+ medidas DAX",
    ],
    tags: ["React JS", "Power BI", "n8n", "Claude AI"],
  },
  {
    role: "Analista de Datos",
    company: "Empresa Ratatouille.",
    type: "Tiempo completo",
    period: "2024 – 2025",
    status: "Finalizado",
    statusColor: "#ffc75f",
    accent: "#F2C811",
    icon: <FaChartColumn/>,
    desc: "Creación y mantenimiento de reportes en Power BI para el área de operaciones. Análisis de KPIs y presentación de resultados a gerencia.",
    achievements: [
      "Reducción del 40% en tiempo de reportes",
      "Dashboard financiero con datos en tiempo real",
      "Capacitación a equipo de 8 personas en Power BI",
    ],
    tags: ["Power BI", "DAX", "Excel", "SQL"],
  },
  {
    role: "Desarrollador Web Junior",
    company: "Agencia Digital ",
    type: "Prácticas",
    period: "2023 – 2024",
    status: "Finalizado",
    statusColor: "#66668a",
    accent: "#4ffbdf",
    icon: <RiComputerFill/>,
    desc: "Desarrollo y mantenimiento de sitios web para clientes de la agencia. Implementación de diseños responsivos y optimización de rendimiento.",
    achievements: [
      "Desarrollo de 5+ landing pages",
      "Integración con APIs de terceros",
      "Optimización SEO básico",
    ],
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export default function ExperienciasModal({ onClose, dark, T }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        style={{ background: dark ? "#0d0d1a" : "#f7f4ff" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className={styles.modalBar} />

        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalTag} style={{ color: "#A8EB12" }}>// Trayectoria</span>
            <h2 className={styles.modalTitle} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>
              Experiencia <span className="glow-text">Profesional</span>
            </h2>
            <p className={styles.modalSub} style={{ color: T.textSub }}>
              {EXPERIENCES.length} experiencias · {EXPERIENCES.filter(e => e.status === "Activo").length} activa
            </p>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Cerrar"
            style={{ background: dark ? "#1a0a2e" : "#ede5ff", border: "1.5px solid #7C3AED33" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className={styles.item} style={{ animationDelay: `${i * 80}ms` }}>

              {/* Línea de timeline */}
              <div className={styles.timelineLeft}>
                <div className={styles.dot} style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}88` }} />
                {i < EXPERIENCES.length - 1 && (
                  <div className={styles.line} style={{ background: `linear-gradient(to bottom, ${exp.accent}66, ${EXPERIENCES[i+1].accent}33)` }} />
                )}
              </div>

              {/* Card */}
              <div
                className={styles.card}
                style={{ background: dark ? "#0f0f1e" : "#ffffff", border: `1px solid ${exp.accent}28` }}
              >
                <div className={styles.cardBar} style={{ background: `linear-gradient(90deg,${exp.accent},${exp.accent}55,transparent)` }} />

                {/* Top row */}
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}
                    style={{ background: `${exp.accent}18`, border: `1.5px solid ${exp.accent}44` }}>
                    {exp.icon}
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardType} style={{ color: T.textFaint }}>{exp.type}</span>
                    <span className={styles.cardStatus}
                      style={{ background: `${exp.statusColor}18`, color: exp.statusColor, border: `1px solid ${exp.statusColor}44` }}>
                      <span className={styles.statusDot} style={{ background: exp.statusColor }} />
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Título y empresa */}
                <h3 className={styles.role} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>{exp.role}</h3>
                <p className={styles.company} style={{ color: exp.accent }}>
                  <MdOutlineHomeWork /> {exp.company}
                  <span style={{ color: T.textFaint }}> · {exp.period}</span>
                </p>

                {/* Descripción */}
                <p className={styles.desc} style={{ color: T.textSub }}>{exp.desc}</p>

                {/* Logros */}
                <div className={styles.achievements}>
                  {exp.achievements.map((a, j) => (
                    <div key={j} className={styles.achievement}>
                      <span className={styles.achievementDot} style={{ background: exp.accent }} />
                      <span style={{ color: T.textMid, fontSize: 13 }}>{a}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}
                      style={{ background: `${exp.accent}15`, color: exp.accent, border: `1px solid ${exp.accent}30` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>,
    document.body
  );
}
