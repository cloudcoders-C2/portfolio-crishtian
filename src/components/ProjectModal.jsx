import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PROJECT_DETAILS } from "./projectData.js";
import styles from "./ProjectModal.module.css";

const STATUS_LABEL = {
  live:    { text: "En vivo",       color: "#A8EB12" },
  dev:     { text: "En desarrollo", color: "#ffc75f" },
  private: { text: "Privado",       color: "#888899" },
};

/* ── Lightbox fullscreen ─────────────────────────────────────── */
function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Cerrar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <img src={image} alt={title} className={styles.lightboxImg} onClick={(e) => e.stopPropagation()} />
      <p className={styles.lightboxTitle}>{title}</p>
    </div>
  );
}

/* ── Image preview ───────────────────────────────────────────── */
function ImagePreview({ image, accent, title, onExpand }) {
  if (image) {
    return (
      <div className={styles.pImgWrap} onClick={(e) => { e.stopPropagation(); e.preventDefault(); onExpand && onExpand(); }} title="Click para ampliar">
        <img src={image} alt={title} className={styles.pImg} loading="lazy" />
        <div className={styles.pImgOverlay}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          <span>Ampliar</span>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.pImgPlaceholder} style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)`, border: `1px dashed ${accent}44` }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ color: accent, opacity: 0.5, fontSize: 11, fontFamily: "'Space Mono', monospace" }}>Sin imagen</span>
    </div>
  );
}

/* ── Modal de Precios ────────────────────────────────────────── */
function PreciosModal({ dark, onClose, accent }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const bg        = dark ? "#0d0d1a"                    : "#f7f4ff";
  const cardBg    = dark ? "rgba(255,255,255,0.04)"     : "rgba(255,255,255,0.9)";
  const cardBord  = dark ? "rgba(255,255,255,0.08)"     : "rgba(0,0,0,0.08)";
  const textPrim  = dark ? "#e8e8f0"                    : "#0a0a0a";
  const textSec   = dark ? "#8888a8"                    : "#555570";
  const divider   = dark ? "rgba(255,255,255,0.08)"     : "rgba(0,0,0,0.08)";
  const closeBg   = dark ? "#1a0a2e"                    : "#ede5ff";

  const planes = [
    {
      label: "Básico", labelColor: "#ffc75f",
      price: "S/ 500", sub: "pago único", featured: false,
      features: ["Sistema instalado y configurado","Logo y nombre del cliente","1 mes de soporte WhatsApp","Capacitación 1 hora"],
    },
    {
      label: "Recomendado", labelColor: accent,
      price: "S/ 900", sub: "único + S/ 120/mes", featured: true,
      features: ["Todo lo del plan básico","Hosting Vercel + Supabase","Soporte mensual ilimitado","Actualizaciones incluidas","App repartidor básica"],
    },
    {
      label: "Premium", labelColor: "#A8EB12",
      price: "S/ 1,800", sub: "único + S/ 200/mes", featured: false,
      features: ["Todo lo del plan recomendado","Web cliente + pedidos online","Integración WhatsApp bot","Dashboard Power BI ejecutivo","Soporte prioritario 24h"],
    },
  ];

  return createPortal(
    <div
      style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.82)",backdropFilter:"blur(10px)",zIndex:700,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 16px 16px",overflowY:"auto" }}
      onClick={onClose}
    >
      <div
        style={{ position:"relative",width:"100%",maxWidth:900,background:bg,borderRadius:24,border:`1px solid ${accent}22`,padding:"clamp(28px,4vw,40px)",boxShadow:`0 32px 80px rgba(0,0,0,0.5)` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra top */}
        <div style={{ position:"absolute",top:0,left:0,right:0,height:3,borderRadius:"4px 4px 0 0",background:`linear-gradient(90deg, ${accent}, ${accent}66, transparent)` }} />

        {/* Cerrar */}
        <button
          onClick={onClose}
          style={{ position:"absolute",top:20,right:20,width:44,height:44,borderRadius:"50%",background:closeBg,border:"1.5px solid #8F00FF33",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .25s" }}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(143,0,255,0.18)";e.currentTarget.style.transform="scale(1.1) rotate(90deg)";}}
          onMouseLeave={e=>{e.currentTarget.style.background=closeBg;e.currentTarget.style.transform="scale(1)";}}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AE35FF" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        {/* Header */}
        <div style={{ textAlign:"center",marginBottom:28 }}>
          <span style={{ fontFamily:"'Space Mono',monospace",fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#8F00FF",display:"block",marginBottom:8 }}>// Adquirir Sistema</span>
          <h2 style={{ fontSize:"clamp(20px,4vw,30px)",fontWeight:800,fontFamily:"'Monda',sans-serif",color:textPrim,lineHeight:1.2 }}>
            Dashboard Admin <span className="glow-text">SaaS</span>
          </h2>
          <p style={{ fontSize:13,color:textSec,fontFamily:"'Space Mono',monospace",marginTop:6 }}>Elige el plan ideal para tu restaurante</p>
        </div>

        {/* Planes */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,marginBottom:28 }}>
          {planes.map((plan) => (
            <div
              key={plan.label}
              style={{ background:cardBg,border:plan.featured?`2px solid ${accent}`:`1px solid ${cardBord}`,borderRadius:16,padding:"20px 18px",position:"relative",transition:"transform .25s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
            >
              {plan.featured && (
                <div style={{ position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:accent,color:"#042C53",fontSize:10,fontWeight:700,fontFamily:"'Space Mono',monospace",padding:"3px 12px",borderRadius:999 }}>★ Recomendado</div>
              )}
              <span style={{ display:"inline-block",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:999,background:`${plan.labelColor}18`,color:plan.labelColor,border:`1px solid ${plan.labelColor}40`,marginBottom:10,fontFamily:"'Space Mono',monospace" }}>{plan.label}</span>
              <div style={{ fontSize:26,fontWeight:700,color:textPrim,fontFamily:"'Monda',monospace",margin:"6px 0 2px" }}>{plan.price}</div>
              <div style={{ fontSize:12,color:textSec,marginBottom:14,fontFamily:"'Space Mono',monospace" }}>{plan.sub}</div>
              {plan.features.map((f) => (
                <div key={f} style={{ display:"flex",alignItems:"flex-start",gap:8,padding:"5px 0",borderBottom:`0.5px solid ${divider}`,fontSize:12,color:textSec,fontFamily:"'Syne',sans-serif" }}>
                  <span style={{ color:"#A8EB12",marginTop:2,flexShrink:0 }}>✓</span>{f}
                </div>
              ))}
              <a
                href="https://wa.me/51960959529?text=Hola%2C%20me%20interesa%20el%20sistema%20de%20restaurante"
                target="_blank" rel="noopener noreferrer"
                style={{ display:"block",marginTop:16,textAlign:"center",padding:"10px 0",borderRadius:10,fontSize:13,fontWeight:700,fontFamily:"'Syne',sans-serif",textDecoration:"none",cursor:"pointer",background:plan.featured?"linear-gradient(135deg,#8F00FF,#AE35FF)":"transparent",color:plan.featured?"#fff":accent,border:plan.featured?"none":`1.5px solid ${accent}`,transition:"opacity .2s" }}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.82"}
                onMouseLeave={e=>e.currentTarget.style.opacity="1"}
              >
                Contactar por WhatsApp →
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>,
    document.body
  );
}

/* ── Project card ────────────────────────────────────────────── */
function ProjectCard({ project, index, dark, onExpandImage, onAdquirir }) {
  const status = STATUS_LABEL[project.status];
  return (
    <div className={styles.pCard} style={{ border:`1px solid ${project.accent}28`,animationDelay:`${index*80}ms` }}>
      <div className={styles.pCardTop} style={{ background:`linear-gradient(90deg, ${project.accent}, ${project.accent}55, transparent)` }} />
      <ImagePreview image={project.image} accent={project.accent} title={project.title} onExpand={project.image?()=>onExpandImage(project.image,project.title):undefined} />
      <div className={styles.pCardHeader}>
        <h3 className={styles.pCardTitle} style={{ color:project.accent }}>{project.title}</h3>
        <span className={styles.pStatus} style={{ background:`${status.color}18`,color:status.color,border:`1px solid ${status.color}44` }}>
          <span className={styles.pStatusDot} style={{ background:status.color }} />
          {status.text}
        </span>
      </div>
      <p className={styles.pCardDetail}>{project.detail}</p>
      <div className={styles.pTags}>
        {project.tech.map((t)=>(
          <span key={t} className={styles.pTag} style={{ background:`${project.accent}15`,color:project.accent,border:`1px solid ${project.accent}30` }}>{t}</span>
        ))}
      </div>
      <div className={styles.pCardFooter}>
        <span className={styles.pYear}>{project.year}</span>
        <div style={{ display:"flex",alignItems:"center",gap:10 }}>
          {project.showAdquirir && (
            <button
              onClick={(e)=>{e.stopPropagation();onAdquirir&&onAdquirir(project);}}
              style={{ background:"linear-gradient(135deg,#8F00FF,#AE35FF)",color:"#fff",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:700,fontFamily:"'Syne',sans-serif",cursor:"pointer",transition:"opacity .2s, transform .2s",boxShadow:"0 2px 12px #8F00FF44" }}
              onMouseEnter={e=>{e.currentTarget.style.opacity="0.85";e.currentTarget.style.transform="scale(1.04)";}}
              onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="scale(1)";}}
            >
              Adquirir ✦
            </button>
          )}
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.pLink} style={{ color:project.accent }}>Ver proyecto →</a>
          ) : (
            !project.showAdquirir && <span className={styles.pLinkDisabled}>Próximamente</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Modal principal ─────────────────────────────────────────── */
export default function ProjectModal({ category, accent, onClose, dark, T }) {
  const projects = PROJECT_DETAILS[category] ?? [];
  const [lightbox, setLightbox] = useState(null);
  const [preciosProject, setPreciosProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && !lightbox && !preciosProject) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, lightbox, preciosProject]);

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} style={{ background: dark ? "#0d0d1a" : "#f7f4ff" }} onClick={(e)=>e.stopPropagation()}>
          <div className={styles.modalBar} style={{ background:`linear-gradient(90deg, ${accent}, ${accent}66, transparent)` }} />
          <div className={styles.modalHeader}>
            <div>
              <span className={styles.modalTag} style={{ color:"#8F00FF" }}>// Proyectos</span>
              <h2 className={styles.modalTitle} style={{ color: dark ? "#e8e8f0" : "#0a0a0a" }}>
                {category.split(" ").slice(0,-1).join(" ")}{" "}
                <span className="glow-text">{category.split(" ").slice(-1)[0]}</span>
              </h2>
              <p className={styles.modalSub} style={{ color:T.textSub }}>
                {projects.length} proyecto{projects.length!==1?"s":""} en esta categoría
              </p>
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar" style={{ background: dark?"#1a0a2e":"#ede5ff",border:"1.5px solid #8F00FF33" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AE35FF" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div className={styles.modalGrid}>
            {projects.map((project,i)=>(
              <ProjectCard key={project.title} project={project} index={i} dark={dark}
                onExpandImage={(img,title)=>setLightbox({image:img,title})}
                onAdquirir={(p)=>setPreciosProject(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && createPortal(
        <Lightbox image={lightbox.image} title={lightbox.title} onClose={()=>setLightbox(null)} />,
        document.body
      )}

      {preciosProject && (
        <PreciosModal dark={dark} accent={preciosProject.accent} onClose={()=>setPreciosProject(null)} />
      )}
    </>
  );
}
