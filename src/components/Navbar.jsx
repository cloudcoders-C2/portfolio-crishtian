import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import { scrollToSection } from "../utils/scrollTo";
import { SunIcon, MoonIcon } from "./Icons";
import styles from "./Navbar.module.css";
import LogoNavbar from "../assets/LOGO-CLOUD-CODERS-transparente.png";

// ── Icono descarga / check ─────────────────────────────────────
function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A8EB12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const SECTION_MAP = {
  "Inicio":      "inicio",
  "Sobre mí":    "sobre-mi",
  "Servicios":   "servicios",
  "Proyectos":   "proyectos",
  "Stack":       "stack",
  "Precios":     "precios",
  "Testimonios": "testimonios",
  "Contacto":    "contacto",
};

function useActiveSection() {
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const observers = [];

    NAV_LINKS.forEach((label) => {
      const el = document.getElementById(SECTION_MAP[label]);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(label);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar({ dark, toggleTheme, T }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const active = useActiveSection();

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    setTimeout(() => document.addEventListener("click", close), 10);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <nav
      className={styles.nav}
      style={{
        background:     scrolled ? T.navBg      : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:   scrolled ? "1px solid #8F00FF18" : "none",
      }}
    >
      <div className={styles.navInner}>

        {/* ── Logo ── */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", flexShrink: 0 }}
          onClick={() => scrollToSection("Inicio")}
        >
          <img src={LogoNavbar} alt="CloudCoders" style={{ height: "34px", width: "auto" }} />

          <span style={{ fontFamily: "'Monda', sans-serif", fontWeight: 400, fontSize: "17px", letterSpacing: "0.3px", lineHeight: 1 }}>
            <span style={{ color: "#8B5CF6", fontWeight: 700 }}>
              Cloud
            </span>
            <span style={{ color: "#8B5CF6", fontWeight: 700 }}>
              {" "}Coders
            </span>
          </span>
        </div>

        {/* ── Desktop nav ── */}
        <div className="dnav">
          {NAV_LINKS.map((l) => {
            const isActive = active === l;
            return (
              <div key={l} className={styles.navLinkWrap}>
                <span
                  className={styles.navLink}
                  style={{ color: isActive ? "#8F00FF" : T.textMid }}
                  onClick={() => scrollToSection(l)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8F00FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#8F00FF" : T.textMid)}
                >
                  {l}
                </span>
                <div
                  className={styles.activeBar}
                  style={{
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    opacity:   isActive ? 1 : 0,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Theme toggle + hamburger ── */}
        <div className={styles.controls}>

          {/* Botón descargar CV */}
          <a
            href="/crishtian-cv.pdf"
            download="CV-Crishtian-Rodriguez.pdf"
            className={`${styles.cvBtn} ${downloaded ? styles.cvBtnDone : ""}`}
            title="Descargar CV"
            aria-label="Descargar CV"
            onClick={handleDownload}
          >
            <span className={styles.cvIcon}>
              {downloaded ? <CheckIcon /> : <DownloadIcon />}
            </span>
          </a>

          <button className="t-btn" onClick={toggleTheme} aria-label="Cambiar tema">
            <div className="t-track" style={{ background: dark ? "#2d1a4a" : "#c46cff" }} />
            <div className="t-thumb" style={{ left: dark ? 4 : 28, background: dark ? "#1a0a2e" : "#fff" }}>
              <div className={`i-wrap ${dark ? "off" : "on"}`} style={{ color: "#f59e0b" }}><SunIcon /></div>
              <div className={`i-wrap ${dark ? "on" : "off"}`} style={{ color: "#c4b5fd" }}><MoonIcon /></div>
            </div>
          </button>

          <div
            className={`hnav ${menuOpen ? "open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
          >
            <span style={{ background: menuOpen ? "#8F00FF" : T.text }} />
            <span style={{ background: menuOpen ? "#AE35FF" : T.text }} />
            <span style={{ background: menuOpen ? "#C46CFF" : T.text }} />
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="mmenu" style={{ background: T.mMenuBg }} onClick={(e) => e.stopPropagation()}>
          {NAV_LINKS.map((l) => (
            <div
              key={l}
              className="mitem"
              style={{
                color:       active === l ? "#8F00FF" : T.text,
                borderLeft:  active === l ? "3px solid #8F00FF" : "3px solid transparent",
                paddingLeft: 12,
              }}
              onClick={() => { scrollToSection(l); setMenuOpen(false); }}
            >
              {l}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
