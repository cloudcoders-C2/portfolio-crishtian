import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { SOCIAL_LINKS, STACK_ITEMS } from "../constants";
import { scrollToSection } from "../utils/scrollTo";
import styles from "./Hero.module.css";
import logoHero from "../assets/KODEX.png";

// ── SVG icons nuevos logos ─────────────────────────────────────
const FigmaIcon = () => (
  <svg viewBox="0 0 38 56" width="28" height="28" fill="none">
    <path d="M19 28a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" fill="#1ABCFE"/>
    <path d="M1 47a9 9 0 0 1 9-9h9v9a9 9 0 0 1-18 0z" fill="#0ACF83"/>
    <path d="M19 1v18h9a9 9 0 0 0 0-18H19z" fill="#FF7262"/>
    <path d="M1 10a9 9 0 0 0 9 9h9V1H10A9 9 0 0 0 1 10z" fill="#F24E1E"/>
    <path d="M1 28a9 9 0 0 0 9 9h9V19H10a9 9 0 0 0-9 9z" fill="#A259FF"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 36 36" width="28" height="28">
    <rect width="36" height="36" rx="6" fill="#FF9A00"/>
    <text x="5" y="26" fontFamily="Georgia,serif" fontSize="20" fontWeight="700" fill="#330000">Ai</text>
  </svg>
);

const GitHubIcon = ({ color = "#fff" }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill={color}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 512 512" width="30" height="30" fill="#336791">
    <path d="M219.8 171.3c3.9 .5 13.1 2.7 12.3 8.5-.8 5.9-9.2 9.1-14.2 8.4-4.7-.7-13.2-6.1-12.3-12.1l.3-2.1c4.2 0 8.3-3.5 13.9-2.7zm168.1-3.4c10.8 2.6-1.1 13.5-6.8 14.3-4.3 .6-12.1-2.2-12.8-7.4-1-7.4 15.7-7.9 19.7-6.9zM365.9 27.1c35.7-.3 81.3 9.4 114.3 51.7 7.2 9.2 10 24 9.7 40.9-.8 49.6-26 129.4-70.7 197.4 4.5 2.9 17.6 7.4 51.1 .5 5.6-1.2 12.7-2.2 17.6 1.6 18.2 13.9-19.6 35.1-28.4 39.2-13.2 6.2-34.8 9.5-51.2 8.7-2.1-.2-4.3-.2-6.3-.6-5.1-1.1-7.4-1-8.3-.7-1.1 .3-1.4 2.9-1.6 3.8-2.8 24.9-7.7 64.7-10.7 82-2.8 16.3-7.7 29.3-17.2 39.2-9.5 9.9-22.8 15.7-40.6 19.5-22.3 4.8-37.9-.1-48.7-9.1-10.3-8.7-15.2-20.4-18-27.4-1.8-4.5-3-11.5-4-19.8-2.3-19.8-3.3-50.4-3-83.3-24.6 22.1-55 17.2-68.2 13.9-10.5-2.6-33-16.1-17.5-28.7 11.9-9.7 30.3-5.5 42.2-15 2.4-1.9 11.4-10.6 11.4-13.5-10-.3-19.6-2.9-28.1-7.5-13.5 14.5-26.4 29.5-39.3 44.6-8.3 9.9-17.4 15.8-27.4 16.2-9.9 .4-18.7-4.6-26.1-11.8-7.3-7.1-14.1-17.2-20.4-29-19-35.5-33.2-86.1-42.3-126.4-6-26.7-9.6-49.1-10.1-59-2.2-44.3 8-74.1 26-93.2 17.9-19 42.4-26 66.1-27.4 35.6-2 71 8.5 86.6 13.8l5 1.8c15.9-10.8 36.1-17.4 61.7-17 13.2 .2 25.5 2.2 36.7 4.2 18.6-7.1 39.8-9.5 59.4-9.7z"/>
  </svg>
);

// ── Distribución 3 anillos × 3 logos ──────────────────────────
const RING1_LOGOS = [
  { name: "React JS",    color: "#61DAFB", angle: 0   },
  { name: "Power BI",    color: "#F2C811", angle: 120 },
  { name: "Claude AI",   color: "#ff8c00", angle: 240 },
];
const RING2_LOGOS = [
  { name: "n8n",          color: "#EA4B71", angle: 60  },
  { name: "JavaScript",   color: "#F7DF1E", angle: 180 },
  { name: "Tailwind CSS", color: "#38BDF8", angle: 300 },
  { name: "PostgreSQL",   color: "#336791", angle: 0   },
];
const RING3_LOGOS = [
  { name: "Figma",       color: "#A259FF", angle: 30  },
  { name: "Illustrator", color: "#FF9A00", angle: 150 },
  { name: "GitHub",      color: "#ffffff", angle: 270 },
];

function chipPos(angle) {
  const a = (angle * Math.PI) / 180;
  return { x: 50 + 50 * Math.cos(a), y: 50 + 50 * Math.sin(a) };
}

function ChipIcon({ name, dark }) {
  if (name === "Figma")       return <FigmaIcon />;
  if (name === "Illustrator") return <IllustratorIcon />;
  if (name === "GitHub")      return <GitHubIcon color={dark ? "#ffffff" : "#1a1a2e"} />;
  if (name === "PostgreSQL")  return <PostgreSQLIcon />;
  return STACK_ITEMS.find((s) => s.name === name)?.icon() ?? null;
}

function LogoChip({ logo, className, dark }) {
  const { x, y } = chipPos(logo.angle);
  return (
    <div className={`${className} ${styles.logoChip}`} title={logo.name}
      style={{ left: `${x}%`, top: `${y}%`, "--chip-color": logo.color, background: dark ? `${logo.color}18` : `${logo.color}15`, border: `1.5px solid ${logo.color}55`, boxShadow: `0 4px 16px ${logo.color}33` }}>
      <ChipIcon name={logo.name} dark={dark} />
    </div>
  );
}

function OrbeHero({ dark }) {
  return (
    <div className={styles.orbeWrapper}>
      <div className={styles.orbeGlow} />
      <div className={`orbe-ring-3 ${styles.orbeRing}`} style={{ width: "100%", height: "100%", border: `1px dashed ${dark ? "#01D4E822" : "#01D4E844"}` }} />
      <div className={`orbe-ring-3 ${styles.orbeRing}`} style={{ width: "94%", height: "94%", border: `1px solid ${dark ? "#01D4E82a" : "#01D4E850"}`, animation: "orbeRotate 22s linear infinite" }}>
        {RING3_LOGOS.map((logo) => <LogoChip key={logo.name} logo={logo} className="logo-chip" dark={dark} />)}
      </div>
      <div className={`orbe-ring-2 ${styles.orbeRing}`} style={{ width: "74%", height: "74%", border: `1px solid ${dark ? "#01D4E828" : "#01D4E855"}` }}>
        {RING2_LOGOS.map((logo) => <LogoChip key={logo.name} logo={logo} className="logo-chip-2" dark={dark} />)}
      </div>
      <div className={`orbe-ring-1 ${styles.orbeRing}`} style={{ width: "62%", height: "62%", border: `1.5px solid ${dark ? "#01D4E844" : "#01D4E866"}` }}>
        {RING1_LOGOS.map((logo) => <LogoChip key={logo.name} logo={logo} className="logo-chip" dark={dark} />)}
      </div>
      <div className={`orbe-core ${styles.orbeCore}`}>
        <img src={logoHero} alt="KODEX" className={styles.orbeCoreLogo} />
      </div>
    </div>
  );
}

// ── Hook useTyping ─────────────────────────────────────────────
const ROLES = [
  { text: "Developer & Data Analyst", color: "#7C3AED" },
  { text: "React JS Developer",       color: "#FF3E81" },
  { text: "Power BI Analyst",         color: "#01D4E8" },
  { text: "n8n Automation Expert",    color: "#FEC303" },
];

function useTyping({
  typeSpeed        = 80,
  deleteSpeed      = 40,
  pauseAfterType   = 1800,
  pauseAfterDelete = 400,
} = {}) {
  const [displayed, setDisplayed]   = useState("");
  const [roleIndex, setRoleIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex].text;
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return { displayed, color: ROLES[roleIndex].color };
}


// ── Animated Stats ────────────────────────────────────────────
function AnimatedStats({ T, styles }) {
  const [ref, visible] = useInView(0.3, true);
  const years    = useCountUp(3,   1800, visible);
  const projects = useCountUp(20,  2000, visible);

  return (
    <div className="stats" ref={ref}>
      <div>
        <div className={`glow-text ${styles.statNumber}`}>{years}+</div>
        <div className={styles.statLabel} style={{ color: T.textFaint }}>Años de exp.</div>
      </div>
      <div>
        <div className={`glow-text ${styles.statNumber}`}>{projects}+</div>
        <div className={styles.statLabel} style={{ color: T.textFaint }}>Proyectos</div>
      </div>
      <div>
        <div className={`glow-text ${styles.statNumber}`}>100%</div>
        <div className={styles.statLabel} style={{ color: T.textFaint }}>Compromiso</div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export default function Hero({ dark, T }) {
  const [hovSocial, setHovSocial] = useState(null);
  const { displayed: typedText, color: typingColor } = useTyping();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="inicio" className={styles.section}>
      <motion.div 
        className={`c ${styles.inner}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >

        {/* Columna texto */}
        <motion.div className={`hero-anim ${styles.textCol}`} variants={itemVariants}>
          <motion.span className="stag" variants={itemVariants}> Disponible para proyectos</motion.span>

          <motion.h1 className="htitle" variants={itemVariants}>
            Hola, soy <span className="glow-text">Crishtian</span>
          </motion.h1>

          {/* Typing — color cambia con cada rol */}
          <motion.div className={styles.typingRow} variants={itemVariants}>
            <span className={styles.typingText} style={{ color: typingColor, transition: "color .3s ease" }}>
              {typedText}
            </span>
            <span className={styles.typingCursor} style={{ color: typingColor, transition: "color .3s ease" }}>|</span>
          </motion.div>

          <motion.p className="hsub" style={{ color: T.textMid }} variants={itemVariants}>
            Construyo interfaces con <strong style={{ color: "#7C3AED" }}>React JS</strong>, analizo datos con{" "}
            <strong style={{ color: "#01D4E8" }}>Power BI</strong> e{" "}
            <strong style={{ color: "#FF3E81" }}>IA</strong>, y automatizo con{" "}
            <strong style={{ color: "#FEC303" }}>n8n</strong>.
          </motion.p>

          <motion.div className="hbtns" variants={itemVariants}>
            <button className="btn-p" onClick={() => scrollToSection("Proyectos")}>Ver proyectos →</button>
            <button className="btn-o" onClick={() => scrollToSection("Contacto")}>Contactar</button>
          </motion.div>

          <motion.div style={{ marginTop: 36 }} variants={itemVariants}>
            <div className="social-row">
              {SOCIAL_LINKS.map((s) => (
                <div key={s.name} className="social-wrap">
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button className="social-btn"
                      aria-label={s.name}
                      onMouseEnter={() => setHovSocial(s.name)} onMouseLeave={() => setHovSocial(null)}
                      style={{ background: hovSocial === s.name ? s.bg : dark ? "#0f0f1e" : "#f0eaff", border: hovSocial === s.name ? "1.5px solid transparent" : "1.5px solid #7C3AED22", boxShadow: hovSocial === s.name ? `0 12px 32px ${typeof s.bg === "string" ? s.bg + "55" : "rgba(124,58,237,.3)"}` : "none" }}>
                      {s.icon(hovSocial === s.name ? "#fff" : dark ? "#aaa" : "#6633aa")}
                    </button>
                  </a>
                  <span className="social-tooltip">{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnimatedStats T={T} styles={styles} />
          </motion.div>
        </motion.div>

        {/* Columna orbe */}
        <motion.div 
          className="hero-orbe-col"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <OrbeHero dark={dark} />
        </motion.div>
      </motion.div>
    </section>
  );
}
