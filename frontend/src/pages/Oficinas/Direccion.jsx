import { useState } from "react";
import { Link } from "react-router-dom";
import "./Oficina.css";

function Direccion() {
  const personal = [
    {
      nombre: "Nombre y Apellido",
      cargo: "Secretaría de Mesa de Partes",
      ubicacion: "Sede Central - Primer Piso",
      foto: "/images/homes/img_index/director.png",
    },
    {
      nombre: "Nombre del Personal",
      cargo: "Asistente Administrativo",
      ubicacion: "Sede Central - Primer Piso (Of. Dirección)",
      foto: "/images/homes/img_index/director.png",
    },
  ];

  const funciones = [
    "Planificar, dirigir, ejecutar y evaluar las políticas públicas del sector agrario a nivel regional.",
    "Promover la competitividad, asociatividad y el acceso a mercados de los productores agropecuarios.",
    "Supervisar la correcta ejecución del presupuesto operativo e inversiones de las agencias agrarias.",
    "Suscribir convenios institucionales que impulsen la tecnología y sostenibilidad agraria regional.",
  ];

  // TODO (Fase backend): reemplazar por fotos reales de la oficina
  const galeria = [
    {
      src: "/images/galeria/img/imgOficinas/direc1.png",
      alt: "Reunión de coordinación en la Dirección",
    },
    {
      src: "/images/galeria/img/imgOficinas/direc2.png",
      alt: "Analisis en la BD de productores agrarios",
    },
    {
      src: "/images/galeria/img/imgOficinas/adm1.png",
      alt: "Trabajo en equipo",
    },
    {
      src: "/images/galeria/img/imgOficinas/direc3.png",
      alt: "Planeamiento de Capacitación para las agencias agrarias",
    },
  ];

  const [fotoActiva, setFotoActiva] = useState(null); // índice de la foto abierta, null = cerrado

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
        <h1 className="page-title">OFICINA DE DIRECCIÓN</h1>
      </section>

      {/* ENCARGADO PRINCIPAL */}
      <section className="encargado-section">
        <img
          src="/images/homes/img_index/director.png"
          alt="Director Regional"
          className="foto-encargado"
        />
        <h2 className="nombre">Ing. Nombre Apellido</h2>
        <p className="cargo">Director Regional de Agricultura Huancavelica</p>
      </section>

      {/* DESCRIPCIÓN (RESOLUCIÓN) */}
      <section className="descripcion-section">
        <p>
          Que, mediante Resolución Gerencial General Regional
          N°0254-2025/GOB.REG-HVCA/GGR, designado en el cargo de confianza de la
          Dirección Regional Agraria de Huancavelica, órgano desconcentrado del
          Gobierno Regional de Huancavelica, con los derechos, atribuciones y
          responsabilidades inherentes al cargo. Promover el desarrollo
          económico de la región e impulsar la competitividad de la actividad
          agropecuaria en la región Huancavelica, buscando la participación de
          la inversión pública y privada para mejorar la calidad de vida de los
          productores agropecuarios, así como promover el uso adecuado de los
          recursos.
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

      {/* ESTRUCTURA INTERNA Y PERSONAL */}
      <section className="personal-section">
        <h3>
          <i className="fas fa-users"></i> Estructura Interna y Personal
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

      {/* GALERÍA DE IMÁGENES */}
      <section className="galeria-section">
        <h3>
          <i className="fas fa-images"></i> Galería de la Oficina
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

export default Direccion;
