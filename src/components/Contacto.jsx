import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SOCIAL_LINKS } from "../constants";
import Reveal from "./Reveal";
import styles from "./Contacto.module.css";
import { FaGithub, FaLinkedin, FaBolt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// ══ Reemplaza estos valores con los de tu cuenta EmailJS ══════
const EMAILJS_SERVICE_ID  = "service_7zr380q";
const EMAILJS_TEMPLATE_ID = "template_dz4npho";
const EMAILJS_PUBLIC_KEY  = "UOQiUMKTXFhOOUCoz";

const SERVICIOS = [
  "Desarrollo Frontend (React JS)",
  "Dashboard Power BI",
  "Automatización n8n",
  "Integración Claude AI",
  "Otro",
];

export default function Contacto({ dark, T }) {
  const formRef = useRef(null);
  const [copied, setCopied]     = useState(false);
  const [hovSocial, setHovSocial] = useState(null);
  const [status, setStatus]     = useState("idle"); // idle | sending | success | error
  const [form, setForm]         = useState({
    nombre:   "",
    email:    "",
    telefono: "",
    servicio: "",
    mensaje:  "",
  });
  const [errors, setErrors]     = useState({});

  const handleCopy = () => {
    navigator.clipboard.writeText("cloudcoders.c2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    { label: "Email",    icon: <MdEmail />, display: copied ? "✓ Copiado!" : "cloudcoders.c2@gmail.com", action: handleCopy },
    { label: "LinkedIn", icon: <FaLinkedin />, display: "crishtian rodriguez herrera" },
    { label: "GitHub",   icon: <FaGithub />, display: "@cloudcoders-C2" },
  ];

  // Valida un campo individual
  const validateField = (name, value) => {
    switch (name) {
      case "nombre":
        if (!value.trim()) return "El nombre es requerido";
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value)) return "Solo se permiten letras y espacios";
        if (value.trim().length < 2) return "Mínimo 2 caracteres";
        return "";
      case "email":
        if (!value.trim()) return "El email es requerido";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email no válido";
        return "";
      case "servicio":
        if (!value) return "Selecciona un servicio";
        return "";
      case "mensaje":
        if (!value.trim()) return "El mensaje es requerido";
        if (value.trim().length < 10) return "Mínimo 10 caracteres";
        return "";
      default:
        return "";
    }
  };

  // Valida todos los campos al enviar
  const validate = () => {
    const e = {};
    ["nombre", "email", "servicio", "mensaje"].forEach(field => {
      const err = validateField(field, form[field]);
      if (err) e[field] = err;
    });
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Bloquear números y caracteres especiales en nombre
    if (name === "nombre" && value !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(value)) return;
    // Bloquear letras en teléfono — solo números, +, espacios y guiones
    if (name === "telefono" && value !== "" && !/^[0-9+\s-]*$/.test(value)) return;
    setForm(prev => ({ ...prev, [name]: value }));
    // Validación en tiempo real solo si ya hubo un intento de envío o el campo fue tocado
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contacto" className="sec">
      <div className="c">
        <Reveal><span className="stag">// Contacto</span></Reveal>
        <Reveal delay={80}><h2 className="sh2">¿Tienes un <span className="glow-text">proyecto</span>?</h2></Reveal>
        <Reveal delay={140}><p className="sdesc" style={{ color: T.textSub }}>Disponible para proyectos freelance, colaboraciones y oportunidades interesantes.</p></Reveal>

        {/* Redes sociales */}
        <Reveal delay={180}>
          <div style={{ marginBottom: 32 }}>
            <div className={styles.socialLabel} style={{ color: T.textFaint }}>Redes sociales</div>
            <div className="social-row">
              {SOCIAL_LINKS.map((s) => (
                <div key={s.name + "c"} className="social-wrap">
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button className="social-btn"
                      onMouseEnter={() => setHovSocial(s.name + "c")}
                      onMouseLeave={() => setHovSocial(null)}
                      style={{
                        background: hovSocial === s.name + "c" ? s.bg : (dark ? "#0f0f1e" : "#f0eaff"),
                        border: hovSocial === s.name + "c" ? "1.5px solid transparent" : "1.5px solid #7C3AED22",
                        boxShadow: hovSocial === s.name + "c" ? `0 12px 32px ${typeof s.bg === "string" ? s.bg + "55" : "rgba(124,58,237,.3)"}` : "none"
                      }}>
                      {s.icon(hovSocial === s.name + "c" ? "#fff" : dark ? "#aaa" : "#6633aa")}
                    </button>
                  </a>
                  <span className="social-tooltip">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="cgrid" style={{ marginBottom: 40 }}>
          {contactItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="card-hover-wrap">
                <div className={styles.card} style={{ background: T.bgCard2, cursor: item.action ? "pointer" : "default" }} onClick={item.action}>
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div className={styles.cardLabel} style={{ color: T.textFaint }}>{item.label}</div>
                    <div className={styles.cardValue}>{item.display}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Formulario ── */}
        <Reveal delay={200}>
          <div className={styles.formWrap} style={{ background: dark ? "linear-gradient(135deg,#0f0f1e,#12121f)" : "linear-gradient(135deg,#ffffff,#faf5ff)", border: "1px solid #7C3AED22" }}>
            <div className={styles.formTop} />

            <h3 className={styles.formTitle} style={{ color: T.text }}>
              Envíame un mensaje
            </h3>
            <p className={styles.formSub} style={{ color: T.textSub }}>
              Respondo en menos de 24 horas <span className={styles.icon}>{<FaBolt />}</span>
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>

              {/* Fila 1 — Nombre + Email */}
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} style={{ color: T.textFaint }}>Nombre *</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={`${styles.input} ${errors.nombre ? styles.inputError : ""}`}
                    style={{ background: dark ? "#0a0a18" : "#f7f4ff", color: T.text, borderColor: errors.nombre ? "#ef5350" : dark ? "#7C3AED22" : "#7C3AED18" }}
                  />
                  {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} style={{ color: T.textFaint }}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    style={{ background: dark ? "#0a0a18" : "#f7f4ff", color: T.text, borderColor: errors.email ? "#ef5350" : dark ? "#7C3AED22" : "#7C3AED18" }}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              {/* Fila 2 — Teléfono + Servicio */}
              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} style={{ color: T.textFaint }}>Teléfono / WhatsApp</label>
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                    className={styles.input}
                    style={{ background: dark ? "#0a0a18" : "#f7f4ff", color: T.text, borderColor: dark ? "#7C3AED22" : "#7C3AED18" }}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} style={{ color: T.textFaint }}>Tipo de servicio *</label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select} ${errors.servicio ? styles.inputError : ""}`}
                    style={{ background: dark ? "#0a0a18" : "#f7f4ff", color: form.servicio ? T.text : T.textFaint, borderColor: errors.servicio ? "#ef5350" : dark ? "#7C3AED22" : "#7C3AED18" }}
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.servicio && <span className={styles.error}>{errors.servicio}</span>}
                </div>
              </div>

              {/* Mensaje */}
              <div className={styles.field}>
                <label className={styles.label} style={{ color: T.textFaint }}>Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto, qué necesitas y en qué plazo..."
                  rows={5}
                  className={`${styles.input} ${styles.textarea} ${errors.mensaje ? styles.inputError : ""}`}
                  style={{ background: dark ? "#0a0a18" : "#f7f4ff", color: T.text, borderColor: errors.mensaje ? "#ef5350" : dark ? "#7C3AED22" : "#7C3AED18" }}
                />
                <div className={styles.charCount} style={{ color: T.textFaint }}>
                  {form.mensaje.length} caracteres
                </div>
                {errors.mensaje && <span className={styles.error}>{errors.mensaje}</span>}
              </div>

              {/* Botón submit */}
              <button
                type="submit"
                className={`btn-p ${styles.submitBtn}`}
                disabled={status === "sending"}
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" && (
                  <span className={styles.spinner} />
                )}
                {status === "idle"    && "Enviar mensaje ✉️"}
                {status === "sending" && "Enviando..."}
                {status === "success" && "✅ ¡Mensaje enviado!"}
                {status === "error"   && "❌ Error, intenta de nuevo"}
              </button>

              {/* Feedback */}
              {status === "success" && (
                <div className={styles.feedback} style={{ background: "#A8EB1218", border: "1px solid #A8EB1244", color: "#A8EB12" }}>
                  🎉 ¡Gracias! Recibirás respuesta en menos de 24 horas.
                </div>
              )}
              {status === "error" && (
                <div className={styles.feedback} style={{ background: "#ef535018", border: "1px solid #ef535044", color: "#ef5350" }}>
                  Hubo un problema al enviar. Por favor intenta de nuevo o escríbeme directamente a hola@cloudcoders.dev
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
