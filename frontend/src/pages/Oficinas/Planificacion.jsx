import { useState } from "react";
import { Link } from "react-router-dom";
import "./Oficina.css";

function Planificacion() {
  const funciones = [
    "Formular, coordinar y evaluar las políticas, planes y estrategias para el desarrollo agrario regional.",
    "Dirigir la formulación, seguimiento y evaluación del Plan Estratégico Institucional (PEI) y del Plan Operativo Institucional (POI).",
    "Coordinar la programación, formulación y evaluación del presupuesto institucional conforme a la normativa vigente.",
    "Realizar estudios, diagnósticos e indicadores que contribuyan a la toma de decisiones de la Dirección Regional Agraria.",
    "Asesorar a la Alta Dirección en la asignación y priorización de recursos presupuestales, materiales y humanos.",
    "Monitorear y evaluar el cumplimiento de metas, objetivos e indicadores de las diferentes unidades orgánicas.",
  ];

  const personal = [
    {
      nombre: "Nombre y Apellido",
      cargo: "Especialista en Planificación",
      ubicacion: "Sede Central - Segundo Piso",
      foto: "/images/homes/img_index/director.png",
    },
  ];

  // TODO (Fase backend): reemplazar por rutas reales de las fotos
  const galeria = [
    {
      src: "/images/galeria/img/imgOficinas/plani1.png",
      alt: "Reunión de planificación institucional",
    },
    {
      src: "/images/galeria/img/imgOficinas/plani2.png",
      alt: "Coordinación de actividades institucionales",
    },
    {
      src: "/images/galeria/img/imgOficinas/plani3.png",
      alt: "Acciones de planificación y seguimiento",
    },
  ];

  const [fotoActiva, setFotoActiva] = useState(null);

  const abrirFoto = (index) => setFotoActiva(index);
  const cerrarFoto = () => setFotoActiva(null);

  const fotoSiguiente = () =>
    setFotoActiva((prev) => (prev + 1) % galeria.length);

  const fotoAnterior = () =>
    setFotoActiva((prev) => (prev - 1 + galeria.length) % galeria.length);

  return (
    <main className="oficina-page">
      {/* HERO */}
      <section className="hero-section">
        <h1 className="page-title">OFICINA DE PLANIFICACIÓN</h1>
      </section>

      {/* ENCARGADO */}
      <section className="encargado-section">
        <img
          src="/images/homes/img_index/director.png"
          alt="Director de la Oficina de Planificación"
          className="foto-encargado"
        />

        <h2 className="nombre">ECONomista_ Nombres y apellidos </h2>

        <p className="cargo">Director de la Oficina de Planificación Agraria</p>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="descripcion-section">
        <p>
          La Oficina de Planificación es el órgano de asesoramiento encargado de
          formular, coordinar y evaluar las políticas, planes y estrategias
          relacionadas con el desarrollo agrario regional. Asimismo, dirige la
          formulación, ejecución, seguimiento y evaluación del Plan Estratégico
          Institucional (PEI), del Plan Operativo Institucional (POI) y de los
          demás instrumentos de gestión institucional. Evalúa los efectos de las
          políticas nacionales y regionales sobre el sector agrario, asesora a
          la Dirección Regional Agraria en la asignación de recursos
          presupuestales, materiales y humanos, y promueve una adecuada
          planificación para el cumplimiento de los objetivos institucionales.
        </p>
      </section>

      {/* FUNCIONES */}
      <section className="funciones-section">
        <h3>
          <i className="fas fa-list-check"></i> Funciones Principales
        </h3>

        <ul className="funciones-list">
          {funciones.map((texto, i) => (
            <li key={i}>
              <i className="fas fa-arrow-right"></i> {texto}
            </li>
          ))}
        </ul>
      </section>

      {/* ENLACES */}
      <section className="enlaces-interes-section">
        <h3>
          <i className="fas fa-laptop-code"></i> Trámites y Enlaces de Interés
        </h3>

        <div className="botones-enlaces-grid">
          <Link to="/convocatorias" className="btn-enlace">
            <i className="fas fa-bullhorn"></i> Convocatorias de la Oficina
          </Link>

          <Link to="/documentos" className="btn-enlace">
            <i className="fas fa-folder-open"></i> Instrumentos de Gestión
          </Link>

          <Link to="/contacto" className="btn-enlace">
            <i className="fas fa-file-signature"></i> Mesa de Partes Virtual
          </Link>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="personal-section">
        <h3>
          <i className="fas fa-users"></i> Equipo de Apoyo
        </h3>

        <div className="personal-avatar-grid">
          {personal.map((p, i) => (
            <div className="avatar-card" key={i}>
              <div className="avatar-wrapper">
                <img src={p.foto} alt={p.nombre} className="foto-avatar" />
              </div>

              <div className="avatar-info">
                <h4 className="nombre-trabajador">{p.nombre}</h4>

                <p className="cargo-trabajador">
                  <i className="fas fa-briefcase"></i> {p.cargo}
                </p>

                <p className="ubicacion-trabajador">
                  <i className="fas fa-map-marker-alt"></i> {p.ubicacion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="galeria-section">
        <h3>
          <i className="fas fa-images"></i> Galería Institucional
        </h3>

        <div className="galeria-grid">
          {galeria.map((foto, i) => (
            <div className="galeria-item" key={i} onClick={() => abrirFoto(i)}>
              <img src={foto.src} alt={foto.alt} />

              <div className="galeria-overlay">
                <i className="fas fa-search-plus"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {fotoActiva !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={cerrarFoto}
        >
          <button
            className="lightbox-close"
            onClick={cerrarFoto}
            aria-label="Cerrar"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </button>

          <img
            src={galeria[fotoActiva].src}
            alt={galeria[fotoActiva].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              fotoSiguiente();
            }}
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </button>

          <p className="lightbox-caption" aria-live="polite">
            {galeria[fotoActiva].alt}
          </p>
        </div>
      )}
    </main>
  );
}

export default Planificacion;
