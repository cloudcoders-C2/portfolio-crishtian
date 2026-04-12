import { useParallax } from "../hooks/useParallax";
import styles from "./BackgroundOrbs.module.css";

export default function BackgroundOrbs({ dark }) {
  const offsetSlow = useParallax(0.08, 80);
  const offsetMid  = useParallax(0.14, 100);
  const offsetFast = useParallax(0.20, 120);
  const offsetOrb4 = useParallax(0.05, 60);

  return (
    <div aria-hidden="true" className={styles.container}>
      <div className={`${styles.orb} ${styles.orb1}`} style={{ background: `radial-gradient(circle,${dark ? "#8F00FF28" : "#8F00FF18"} 0%,transparent 68%)`, transform: `translateY(${offsetSlow}px)` }} />
      <div className={`${styles.orb} ${styles.orb2}`} style={{ background: `radial-gradient(circle,${dark ? "#AE35FF2c" : "#AE35FF1a"} 0%,transparent 65%)`, transform: `translateY(-${offsetMid}px)` }} />
      <div className={`${styles.orb} ${styles.orb3}`} style={{ background: `radial-gradient(circle,${dark ? "#A8EB1218" : "#A8EB1212"} 0%,transparent 65%)`, transform: `translate(-50%, calc(-50% + ${offsetFast * 0.5}px))` }} />
      <div className={`${styles.orb} ${styles.orb4}`} style={{ background: `radial-gradient(circle,${dark ? "#C46CFF16" : "#C46CFF0e"} 0%,transparent 70%)`, transform: `translateY(${offsetOrb4}px)` }} />
    </div>
  );
}
