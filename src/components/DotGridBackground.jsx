/**
 * DotGridBackground
 * Fondo de puntos animado para secciones del portfolio.
 * Uso: envuelve el contenido de cada sección, o úsalo como capa fija.
 *
 * Props:
 *   dark       {boolean}  - modo oscuro/claro
 *   intensity  {number}   - opacidad base (0-1), default 1
 *   animated   {boolean}  - si los puntos pulsan, default true
 */
export default function DotGridBackground({ dark, intensity = 1, animated = true }) {
  const dotOpacity = dark ? 0.18 : 0.35; // ← era 0.10 en light, muy invisible
  const finalOpacity = (dotOpacity * intensity).toFixed(2);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Capa 1: dot grid principal */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(124,58,237,${finalOpacity}) 1.5px, transparent 1.5px)`, // ← punto ligeramente más grande
          backgroundSize: "28px 28px",
          opacity: 1,
        }}
      />

      {/* Capa 2: glow radial central suave */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: dark
            ? "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Capa 3: fade top y bottom — reducido para no aplastar los puntos */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: dark
            ? `linear-gradient(to bottom, #07070f 0%, transparent 8%, transparent 92%, #07070f 100%)`
            : `linear-gradient(to bottom, #f7f4ff 0%, transparent 6%, transparent 94%, #f7f4ff 100%)`, // ← fade más corto en light
        }}
      />
    </div>
  );
}
