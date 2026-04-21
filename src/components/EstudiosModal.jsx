import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./EstudiosModal.module.css";
import { FaChartLine, FaRobot, FaGraduationCap,FaUniversity,FaMobileAlt} from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { FaChartColumn } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

// ── Datos ─────────────────────────────────────────────────────
const EDUCATION = [
  {
    degree: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Peruana de Ciencias e Informática",
    short: "UPCI",
    period: "2018 – 2024",
    status: "Bachiller",
    statusColor: "#ffc75f",
    icon: <FaGraduationCap/>,
    accent: "#7C3AED",
    desc: "Formación integral en desarrollo de software, bases de datos, redes, sistemas de información y gestión tecnológica. Bachiller en Ingeniería de Sistemas.",
    tags: ["Sistemas", "Informática", "Software", "Bases de Datos", "Redes"],
  },
  {
    degree: "Titulación en Ingeniería de Sistemas",
    institution: "Universidad César Vallejo",
    short: "UCV",
    thesis: "Implementación de Sistema de Restaurante con React JS",
    period: "2026 – 2027",
    status: "Próx. Titulado",
    statusColor: "#4ffbdf",
    icon: <FaUniversity/>,
    accent: "#4ffbdf",
    desc: "Proceso de titulación en curso en una de las universidades más reconocidas del Perú. Enfocado en consolidar competencias en ingeniería de software y sistemas.",
    tags: ["Titulación", "Ingeniería", "Software", "Perú"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Semana Power BI Imparable",
    institution: "Hazlo con Power BI",
    instructor: "Rogelio Salinas",
    date: "Mar 2026",
    hours: "8 horas",
    accent: "#F2C811",
    icon: <FaChartColumn/>,
    type: "Certificado de Participación",
    link: "https://drive.google.com/file/d/1fbQCYqltSr-heejN4IicnDr6kw5wf28Q/view?usp=drive_link",
  },
  {
    title: "Power BI Básico",
    institution: "Datly Educación",
    instructor: "Julio César Rendón",
    date: "Mar 2026",
    hours: "8 horas",
    accent: "#ffc75f",
    icon: <FaChartLine/>,
    type: "Certificado de Reconocimiento",
    link: "https://drive.google.com/file/d/1PSkgORBbxfHOto58PDR3xu3vgkdQabGc/view?usp=sharing",
  },
  {
    title: "Inmersión IA en la Práctica",
    institution: "Daxus Latam",
    instructor: "Ingrid Estupiñán",
    date: "Feb 2026",
    hours: "8 horas",
    accent: "#A855F7",
    icon: <FaRobot/>,
    type: "Certificado de Participación",
    link: "https://drive.google.com/file/d/1kcePmb59TOy86o0_q_1-bNoULI44laLR/view?usp=sharing",
  },
  {
    title: "Buman 1.0 - App Android + Sistema para Restaurante en C#",
    institution: "Udemy",
    instructor: "Codigo 369 · Academia Apps",
    date: "Mar 2026",
    hours: "68.5 horas",
    accent: "#A435F0",
    icon: <FaMobileAlt/>,
    type: "Certificado de Finalización",
    link: "https://ude.my/UC-16426fbd-d797-461d-a455-76da3e2a1d8c",
  },
];

export default function EstudiosModal({ onClose, dark, T }) {
  const [activeTab, setActiveTab] = useState("edu");

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
            <span className={styles.modalTag} style={{ color: "#7C3AED" }}>// Formación</span>
            <h2 className={styles.modalTitle} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>
              Educación & <span className="glow-text">Certificaciones</span>
            </h2>
            <p className={styles.modalSub} style={{ color: T.textSub }}>
              Mi trayectoria académica y cursos completados
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

        {/* Tabs */}
        <div className={styles.tabsWrap}>
          <div className={styles.tabs} style={{ background: dark ? "#0a0a18" : "#ede5ff" }}>
            {[
              { id: "edu",icon: <FaGraduationCap/>,   label:" Educación" },
              { id: "certs",icon: <IoIosDocument/>, label: `Certs (${CERTIFICATIONS.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                className={styles.tab}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? "linear-gradient(135deg,#7C3AED,#9333EA)" : "transparent",
                  color: activeTab === tab.id ? "#fff" : T.textSub,
                  boxShadow: activeTab === tab.id ? "0 4px 16px #7C3AED44" : "none",
                }}
              >
                {tab.icon} {tab.label} 
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab Educación ── */}
        {activeTab === "edu" && (
          <div className={styles.tabContent}>
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className={styles.eduCard}
                style={{ background: dark ? "#0f0f1e" : "#ffffff", border: `1px solid ${edu.accent}28` }}
              >
                <div className={styles.eduCardBar} style={{ background: `linear-gradient(90deg,${edu.accent},${edu.accent}66,transparent)` }} />
                <div className={styles.eduCardInner}>
                  <div className={styles.eduIconWrap}
                    style={{ background: `${edu.accent}18`, border: `1.5px solid ${edu.accent}44` }}>
                    <span className={styles.eduIcon}>{edu.icon}</span>
                  </div>
                  <div className={styles.eduBody}>
                    <div className={styles.eduTopRow}>
                      <div>
                        <h3 className={styles.eduDegree} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>
                          {edu.degree}
                        </h3>
                        <p className={styles.eduInstitution} style={{ color: edu.accent }}>
                          {edu.institution}
                          <span style={{ color: T.textFaint }}> · {edu.short}</span>
                        </p>
                        {edu.thesis && (
                          <p className={styles.eduThesis} style={{ color: T.textFaint }}>
                            <IoIosDocument/> {edu.thesis}
                          </p>
                        )}
                      </div>
                      <div className={styles.eduMetaCol}>
                        <span className={styles.eduPeriod} style={{ color: T.textFaint }}>{edu.period}</span>
                        <span className={styles.eduStatus}
                          style={{ background: `${edu.statusColor}18`, color: edu.statusColor, border: `1px solid ${edu.statusColor}44` }}>
                          <span className={styles.statusDot} style={{ background: edu.statusColor }} />
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <p className={styles.eduDesc} style={{ color: T.textSub }}>{edu.desc}</p>
                    <div className={styles.eduTags}>
                      {edu.tags.map((t) => (
                        <span key={t} className={styles.eduTag}
                          style={{ background: `${edu.accent}15`, color: edu.accent, border: `1px solid ${edu.accent}30` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab Certificaciones ── */}
        {activeTab === "certs" && (
          <div className={styles.certsGrid}>
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className={styles.certCard}
                style={{
                  background: dark ? "#0f0f1e" : "#ffffff",
                  border: `1px solid ${cert.accent}28`,
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className={styles.certBar} style={{ background: `linear-gradient(90deg,${cert.accent},${cert.accent}55,transparent)` }} />

                <div className={styles.certTop}>
                  <div className={styles.certIconWrap}
                    style={{ background: `${cert.accent}18`, border: `1.5px solid ${cert.accent}44` }}>
                    {cert.icon}
                  </div>
                  <span className={styles.certType} style={{ color: T.textFaint }}>{cert.type}</span>
                </div>

                <h4 className={styles.certTitle} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>{cert.title}</h4>
                <p className={styles.certInstitution} style={{ color: cert.accent }}>{cert.institution}</p>
                <p className={styles.certInstructor} style={{ color: T.textFaint }}>👤 {cert.instructor}</p>

                <div className={styles.certFooter}>
                  <span className={styles.certBadge}
                    style={{ background: `${cert.accent}18`, color: cert.accent, border: `1px solid ${cert.accent}44` }}>
                    <GoClockFill/> {cert.hours}
                  </span>
                  <span className={styles.certDate} style={{ color: T.textFaint }}>{cert.date}</span>
                </div>

                {/* Botón ver certificado */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                    style={{ color: cert.accent, borderColor: `${cert.accent}44` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Ver certificado
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}
