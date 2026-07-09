import { useState } from "react";
import { Link } from "react-router-dom";
import "./Oficina.css";

function AsesoriaJuridica() {
  const funciones = [
    "Asesorar y dictaminar en asuntos de carácter jurídico que le sean formulados por los órganos de la Dirección Regional.",
    "Absolver consultas de carácter legal y normativo formuladas por las distintas oficinas y direcciones.",
    "Emitir opinión legal sobre proyectos de resolución, convenios y contratos institucionales.",
    "Brindar asesoría en procedimientos administrativos y en la correcta aplicación de la normativa vigente.",
  ];

  const personal = [
    {
      nombre: "Nombre y Apellido",
      cargo: "Asistente Legal",
      ubicacion: "Sede Central - Primer Piso",
      foto: "/images/homes/img_index/director.png",
    },
  ];

  // TODO (Fase backend): reemplazar por rutas reales de las fotos
  const galeria = [
    {
      src: "/images/galeria/img/imgOficinas/ases1.png",
      alt: "Asesoría Jurídica - Actividad 1",
    },
    {
      src: "/images/galeria/img/imgOficinas/ases2.png",
      alt: "Asesoría Jurídica - Actividad 2",
    },
    {
      src: "/images/galeria/img/imgOficinas/ases3.png",
      alt: "Asesoría Jurídica - Actividad 3",
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
      {/* HERO DE BIENVENIDA */}
      <section className="hero-section">
        <h1 className="page-title">OFICINA DE ASESORÍA JURÍDICA</h1>
      </section>

      {/* ENCARGADO PRINCIPAL */}
      <section className="encargado-section">
        <img
          src="/images/homes/img_index/director.png"
          alt="Director de Asesoría Jurídica"
          className="foto-encargado"
        />
        <h2 className="nombre">Nombre y Apellido del director</h2>
        <p className="cargo">Director de Asesoría Jurídica</p>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="descripcion-section">
        <p>
          La Oficina de Asesoría Jurídica de la Dirección Regional Agraria es la
          encargada de asesorar y dictaminar en asuntos de carácter jurídico y
          absolver las consultas de carácter legal y normativo que le sean
          formuladas por los órganos conformantes de la Dirección Regional, y
          está a cargo de un funcionario con categoría de Director.
        </p>
      </section>

      {/* FUNCIONES PRINCIPALES */}
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

      {/* TRÁMITES Y ENLACES DE INTERÉS */}
      <section className="enlaces-interes-section">
        <h3>
          <i className="fas fa-laptop-code"></i> Trámites y Enlaces de Interés
        </h3>
        <div className="botones-enlaces-grid">
          <Link to="/convocatorias" className="btn-enlace">
            <i className="fas fa-bullhorn"></i> Convocatorias de la Oficina
          </Link>
          <Link to="/documentos" className="btn-enlace">
            <i className="fas fa-folder-open"></i> Documentos y Formatos TUPA
          </Link>
          <Link to="/contacto" className="btn-enlace">
            <i className="fas fa-file-signature"></i> Enviar Trámite a Mesa de
            Partes
          </Link>
        </div>
      </section>

      {/* EQUIPO DE APOYO */}
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

      {/* LIGHTBOX / MODAL */}
      {fotoActiva !== null && (
        <div className="lightbox-overlay" onClick={cerrarFoto}>
          <button
            className="lightbox-close"
            onClick={cerrarFoto}
            aria-label="Cerrar"
          >
            <i className="fas fa-times"></i>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
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
            <i className="fas fa-chevron-right"></i>
          </button>

          <p className="lightbox-caption">{galeria[fotoActiva].alt}</p>
        </div>
      )}
    </main>
  );
}

export default AsesoriaJuridica;
