import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import logoImg from "../assets/LOGO-CLOUD-CODERS-transparente.png";

/*
  ScrollToTop
  Botón flotante en la esquina inferior derecha.
  - Aparece solo cuando el usuario ha scrolleado más de 400px
  - Animación suave de entrada/salida con CSS
  - Click → vuelve al top con scroll suave
*/
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : styles.hidden}`}
      onClick={handleClick}
      aria-label="Volver al inicio"
      title="Volver al inicio"
    >
      <img
        src={logoImg}
        alt="CloudCoders"
        style={{ width: "54px", height: "54px", objectFit: "contain" }}
      />
    </button>
  );
}
