import { useState } from "react";
import { CORNER_LOGOS } from "../constants";
import Reveal from "./Reveal";
import EstudiosModal from "./EstudiosModal";
import ExperienciasModal from "./ExperienciasModal";
import styles from "./SobreMi.module.css";
import fotoProfile from "../assets/foto.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

export default function SobreMi({ dark, T }) {
  const [showEstudios,     setShowEstudios]     = useState(false);
  const [showExperiencias, setShowExperiencias] = useState(false);

  return (
    <section id="sobre-mi" className="sec">
      <div className="c">
        <Reveal><span className="stag">// Sobre mí</span></Reveal>

        <div className={styles.grid}>

          {/* ── Columna foto ── */}
          <Reveal delay={100}>
            <div className={styles.photoWrap}>
              <div className={styles.photoInner}>
                <div className={styles.photoRing} />
                <img src={fotoProfile} alt="Crishtian" className={styles.photoImg} loading="lazy" />
                {CORNER_LOGOS.map((cl) => (
                  <div key={cl.name} className={`corner-badge-wrap ${cl.pos}`}>
                    <div
                      className="corner-badge"
                      style={{
                        background: dark ? "rgba(15,15,30,0.92)" : "rgba(255,255,255,0.94)",
                        border: `1.5px solid ${cl.color}44`,
                        boxShadow: `0 4px 20px ${cl.color}33`,
                      }}
                      title={cl.name}
                    >
                      {cl.icon(26)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Columna texto ── */}
          <div className={styles.textCol}>
            <Reveal delay={120}>
              <h2 className={styles.title}>
                Apasionado por <span className="glow-text">la tecnología</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className={styles.desc} style={{ color: T.textMid }}>
                Soy un desarrollador frontend especializado en{" "}
                <strong style={{ color: "#9333EA" }}>React JS</strong>, con experiencia en análisis
                de datos con <strong style={{ color: "#F2C811" }}>Power BI</strong> y soluciones de
                IA mediante <strong style={{ color: "#A855F7" }}>Claude AI</strong>.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className={styles.desc2} style={{ color: T.textMid }}>
                También diseño flujos de automatización con{" "}
                <strong style={{ color: "#EA4B71" }}>n8n</strong> para optimizar procesos repetitivos
                y aumentar la productividad de equipos y empresas.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className={styles.tags}>
                {[
                  ["React JS",     "#9333EA"],
                  ["Power BI",     "#F2C811"],
                  ["Claude AI",    "#A855F7"],
                  ["n8n",          "#EA4B71"],
                  ["JavaScript",   "#F7DF1E"],
                  ["Tailwind CSS", "#38BDF8"],
                  ["Git",          "#F05032"],
                  ["REST APIs",    "#A8EB12"],
                  ["Figma",        "#A259FF"],
                  ["Illustrator",  "#FF9A00"],
                  ["GitHub",       "#ffffff"],
                ].map(([skill, color]) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      background: `${color}18`,
                      color,
                      border: `1px solid ${color}35`,
                      fontSize: 12,
                      padding: "5px 14px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* ── Botones ── */}
            <Reveal delay={300}>
              <div className={styles.btns}>
                <button className="btn-p" onClick={() => setShowEstudios(true)}>
                  Ver estudios <span className={styles.icon}>{<FaGraduationCap />}</span>
                </button>
                <button className="btn-o" onClick={() => setShowExperiencias(true)}>
                  Experiencias <span className={styles.icon}>{<FaBriefcase />}</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Modales ── */}
      {showEstudios && (
        <EstudiosModal onClose={() => setShowEstudios(false)} dark={dark} T={T} />
      )}
      {showExperiencias && (
        <ExperienciasModal onClose={() => setShowExperiencias(false)} dark={dark} T={T} />
      )}
    </section>
  );
}
