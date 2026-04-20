import { useParallax } from "../hooks/useParallax";
import styles from "./BackgroundOrbs.module.css";

export default function BackgroundOrbs({ dark }) {
  const offsetSlow = useParallax(0.08, 80);
  const offsetMid  = useParallax(0.14, 100);
  const offsetFast = useParallax(0.20, 120);
  const offsetOrb4 = useParallax(0.05, 60);
  const offsetOrb5 = useParallax(0.11, 90);

  return (
    <div aria-hidden="true" className={styles.container}>
      <div className={`${styles.orb} ${styles.orb1}`} style={{ background: `radial-gradient(circle,${dark ? "#7C3AED28" : "#7C3AED18"} 0%,transparent 68%)`, transform: `translateY(${offsetSlow}px)` }} />
      <div className={`${styles.orb} ${styles.orb2}`} style={{ background: `radial-gradient(circle,${dark ? "#9333EA2c" : "#9333EA1a"} 0%,transparent 65%)`, transform: `translateY(-${offsetMid}px)` }} />
      <div className={`${styles.orb} ${styles.orb3}`} style={{ background: `radial-gradient(circle,${dark ? "#A8EB1218" : "#A8EB1212"} 0%,transparent 65%)`, transform: `translate(-50%, calc(-50% + ${offsetFast * 0.5}px))` }} />
      <div className={`${styles.orb} ${styles.orb4}`} style={{ background: `radial-gradient(circle,${dark ? "#A855F716" : "#A855F70e"} 0%,transparent 70%)`, transform: `translateY(${offsetOrb4}px)` }} />
      {/* PostgreSQL orb */}
      <div className={`${styles.orb} ${styles.orb5}`} style={{ background: `radial-gradient(circle,${dark ? "#33679122" : "#33679114"} 0%,transparent 68%)`, transform: `translateY(${offsetOrb5}px)` }} />
    </div>
  );
}
