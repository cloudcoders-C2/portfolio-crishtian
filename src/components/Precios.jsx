import { useState } from "react";
import { PRICING_CARDS, AUTO_PLANS } from "../constants";
import { scrollToSection } from "../utils/scrollTo";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";
import styles from "./Precios.module.css";
import {FaBolt} from "react-icons/fa";

export default function Precios({ dark, T }) {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const activePlan = AUTO_PLANS.find((p) => p.id === selectedPlan);

  return (
    <section id="precios" className="sec">
      <div className="c">
        <Reveal><span className="stag">// Precios</span></Reveal>
        <Reveal delay={80}><h2 className="sh2">Inversión <span className="glow-text">transparente</span></h2></Reveal>
        <Reveal delay={140}><p className="sdesc" style={{ color: T.textSub }}>Sin sorpresas. Elige el plan que mejor se adapte a tu proyecto.</p></Reveal>

        <div className={styles.grid}>
          {PRICING_CARDS.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 120} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="card-hover-wrap" style={{ flex: 1 }}>
                <div className={styles.card} style={{ background: T.bgCard, border: `1px solid ${plan.accent}28` }}>
                  <div className={styles.cardTop} style={{ background: `linear-gradient(90deg,${plan.accent},${plan.accent}66,transparent)` }} />
                  {plan.badge && <span className={`badge-pulse ${styles.badge}`}>{plan.badge}</span>}
                  <div className={styles.icon}>{plan.icon}</div>
                  <div className={styles.label} style={{ color: plan.accent }}>{plan.title}</div>
                  <div className={styles.price}>
                    <span className={styles.priceSup} style={{ color: T.textSub }}>$</span>
                    {plan.price}
                    <span className={styles.priceUsd} style={{ color: T.textSub }}> USD</span>
                  </div>
                  <p className={styles.desc} style={{ color: T.textSub }}>{plan.desc}</p>
                  <ul className={styles.features}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.feature}>
                        <CheckIcon color={plan.accent} />
                        <span style={{ color: T.textMid }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-p" style={{ marginTop: 24, width: "100%", background: `linear-gradient(135deg,${plan.accent}cc,${plan.accent})`, boxShadow: `0 4px 20px ${plan.accent}44` }} onClick={() => scrollToSection("Contacto")}>
                    Contratar →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={240} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div className="card-hover-wrap" style={{ flex: 1 }}>
              <div className={styles.card} style={{ background: T.bgCard, border: `1px solid ${activePlan.color}28` }}>
                <div className={styles.cardTop} style={{ background: `linear-gradient(90deg,${activePlan.color},${activePlan.color}66,transparent)`, transition: "background .4s" }} />
                <div className={styles.icon}> <FaBolt /></div>
                <div className={styles.label} style={{ color: activePlan.color, transition: "color .3s" }}>Automatización n8n</div>
                <div className="plan-tabs" style={{ background: dark ? "#0a0a18" : "#ede5ff" }}>
                  {AUTO_PLANS.map((p) => (
                    <button key={p.id} className="plan-tab" onClick={() => setSelectedPlan(p.id)}
                      style={{ background: selectedPlan === p.id ? p.color : "transparent", color: selectedPlan === p.id ? "#fff" : T.textSub, borderRight: p.id !== "advanced" ? "1px solid #7C3AED22" : "none" }}>
                      {p.label}
                    </button>
                  ))}
                </div>
                <div className={styles.price} style={{ transition: "all .3s" }}>
                  <span className={styles.priceSup} style={{ color: T.textSub }}>$</span>
                  <span style={{ color: activePlan.color, transition: "color .3s" }}>{activePlan.price}</span>
                  <span className={styles.priceUsd} style={{ color: T.textSub }}> USD</span>
                </div>
                <ul className={styles.features} style={{ marginTop: 16 }}>
                  {activePlan.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <CheckIcon color={activePlan.color} />
                      <span style={{ color: T.textMid }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.dots}>
                  {AUTO_PLANS.map((p) => (
                    <div key={p.id} className={styles.dot} onClick={() => setSelectedPlan(p.id)}
                      style={{ background: selectedPlan === p.id ? p.color : (dark ? "#ffffff15" : "#00000015") }} />
                  ))}
                </div>
                <button className="btn-p" style={{ marginTop: 16, width: "100%", background: `linear-gradient(135deg,${activePlan.color}cc,${activePlan.color})`, boxShadow: `0 4px 20px ${activePlan.color}44`, transition: "background .4s,box-shadow .4s" }} onClick={() => scrollToSection("Contacto")}>
                  Contratar {activePlan.label} →
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className={styles.note} style={{ color: T.textFaint }}>* Todos los precios en USD. Pagos vía transferencia o PayPal.</p>
        </Reveal>
      </div>
    </section>
  );
}
