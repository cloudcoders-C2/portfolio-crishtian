import { useState, useEffect, useRef } from "react";
import styles from "./SplashScreen.module.css";
import KodexLogo from "../assets/KODEX.png";

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("idle");
  const [revealWidth, setRevealWidth] = useState(0);
  const [showGlow, setShowGlow] = useState(false);
  const [cursorLeft, setCursorLeft] = useState(0);
  const animRef = useRef(null);
  const logoRevealRef = useRef(null);
  const logoImgRef = useRef(null);

  useEffect(() => {
    let start = null;
    const DRAW_DURATION = 1100; // un poco más lento = más elegante
    setPhase("draw");

    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / DRAW_DURATION, 1);

      // Easing ease-in-out cúbica: empieza lento, acelera, termina lento
      // Mucho más natural para un efecto de "escritura con cursor"
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setRevealWidth(eased * 100);

      // Sincronizar cursor con el borde real del clip
      if (logoImgRef.current) {
        const imgWidth = logoImgRef.current.offsetWidth;
        setCursorLeft(eased * imgWidth);
      }

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setRevealWidth(100);
        if (logoImgRef.current) {
          setCursorLeft(logoImgRef.current.offsetWidth);
        }
        // Pequeño delay antes del glow para que se sienta como "completado"
        setTimeout(() => {
          setShowGlow(true);
          setPhase("hold");
        }, 80);
      }
    };

    const t1 = setTimeout(() => {
      animRef.current = requestAnimationFrame(animate);
    }, 400);

    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [onFinish]);

  if (phase === "done") return null;

  return (
    <div className={`${styles.splash} ${phase === "exit" ? styles.exit : ""}`}>
      {/* Fondo */}
      <div className={styles.bg}>
        <div className={styles.bgNoise} />
        <div className={styles.grid} />
        <div className={styles.scanLines} />
      </div>

      {/* Partículas */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`${styles.particle} ${styles["p" + (i + 1)]}`} />
      ))}

      {/* Centro */}
      <div className={styles.center}>
        {/* Borde superior animado */}
        <div className={styles.borderTop} style={{ width: `${revealWidth}%` }} />

        {/* Logo */}
        <div className={styles.logoWrap}>
          <div
            ref={logoRevealRef}
            className={styles.logoReveal}
            style={{ clipPath: `inset(0 ${100 - revealWidth}% 0 0)` }}
          >
            <img
              ref={logoImgRef}
              src={KodexLogo}
              alt="KODEX"
              className={`${styles.logoImg} ${showGlow ? styles.logoGlow : ""}`}
            />
          </div>

          {/* Cursor — posicionado con px exactos desde el borde izq del logoReveal */}
          <div
            className={`${styles.typedCursor} ${phase === "hold" ? styles.cursorHide : ""}`}
            style={{ left: `${cursorLeft}px` }}
          />
        </div>

        {/* Borde inferior animado */}
        <div className={styles.borderBottom} style={{ width: `${revealWidth}%` }} />

        {/* Subtítulo con typing effect propio */}
        <div
          className={`${styles.subtitle} ${revealWidth > 85 ? styles.subtitleVisible : ""}`}
        >
          <span className={styles.subtitleDot} />&nbsp;
          <span>Dev &amp; Data Solutions</span>
          &nbsp;<span className={styles.subtitleDot} />
        </div>

        {/* Indicador de versión — aparece en hold */}
        <div className={`${styles.version} ${phase === "hold" ? styles.versionVisible : ""}`}>
          v2.0
        </div>
      </div>

      {/* Esquinas decorativas */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      {/* Barra de carga inferior */}
      <div className={styles.loadBarWrap}>
        <div className={styles.loadBar} style={{ width: `${revealWidth}%` }} />
      </div>

      {/* Línea de scan que barre la pantalla durante hold */}
      <div className={`${styles.scanBeam} ${phase === "hold" ? styles.scanBeamActive : ""}`} />
    </div>
  );
}
