import { useState } from "react"; import { Link } from "react-router-dom"; import "./Oficina.css"; function EstadisticaInformatica() {
  const funciones = [
    "Diseñar, producir y difundir información estadística para apoyar la toma de decisiones del sector agrario.",
    "Coordinar el desarrollo y mantenimiento de los sistemas informáticos institucionales.",
    "Administrar la infraestructura tecnológica y los recursos informáticos de la entidad.",
    "Brindar soporte técnico a las diferentes unidades orgánicas de la Dirección Regional Agraria.",
    "Promover la modernización tecnológica y la transformación digital institucional.",
    "Elaborar reportes, indicadores y estadísticas del sector agrario regional.",
  ];
  const personal = [
    {
      nombre: "Nombre y Apellido",
      cargo: "Especialista en Estadística",
      ubicacion: "Sede Central - Segundo Piso",
      foto: "/images/homes/img_index/director.png",
    },
    {
      nombre: "Nombre y Apellido",
      cargo: "Especialista en Informática",
      ubicacion: "Sede Central - Segundo Piso",
      foto: "/images/homes/img_index/director.png",
    },
    {
      nombre: "Nombre y Apellido",
      cargo: "Soporte Técnico",
      ubicacion: "Sede Central - Segundo Piso",
      foto: "/images/homes/img_index/director.png",
    },
  ];
  const galeria = [
    {
      src: "/images/galeria/img/imgOficinas/infor1.png",
      alt: "Actividad de Estadística e Informática 1",
    },
    {
      src: "/images/galeria/img/imgOficinas/infor2.png",
      alt: "Actividad de Estadística e Informática 2",
    },
    {
      src: "/images/galeria/img/imgOficinas/infor3.png",
      alt: "Actividad de Estadística e Informática 3",
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
      {" "}
      <section className="hero-section">
        {" "}
        <h1 className="page-title">
          {" "}
          OFICINA DE ESTADÍSTICA E INFORMÁTICA{" "}
        </h1>{" "}
      </section>{" "}
      <section className="encargado-section">
        {" "}
        <img
          src="/images/homes/img_index/director.png"
          alt="Director de Estadística e Informática"
          className="foto-encargado"
        />{" "}
        <h2 className="nombre"> ING. Nombre y apellido</h2>{" "}
        <p className="cargo"> Director de Estadística e Informática </p>{" "}
      </section>{" "}
      <section className="descripcion-section">
        {" "}
        <p>
          {" "}
          La Oficina de Estadística e Informática es el órgano encargado de
          diseñar, producir, analizar y difundir información estadística para
          apoyar la toma de decisiones en el sector agrario. Asimismo, coordina
          y promueve el desarrollo de los sistemas informáticos institucionales,
          la modernización tecnológica y la gestión de los recursos informáticos
          de la Dirección Regional Agraria, contribuyendo a mejorar la
          eficiencia y calidad de los servicios brindados a la ciudadanía.{" "}
        </p>{" "}
      </section>{" "}
      <section className="funciones-section">
        {" "}
        <h3>
          {" "}
          <i className="fas fa-list-check"></i> Funciones Principales{" "}
        </h3>{" "}
        <ul className="funciones-list">
          {" "}
          {funciones.map((texto, i) => (
            <li key={i}>
              {" "}
              <i className="fas fa-arrow-right"></i> {texto}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </section>{" "}
      <section className="enlaces-interes-section">
        {" "}
        <h3>
          {" "}
          <i className="fas fa-laptop-code"></i> Trámites y Enlaces de
          Interés{" "}
        </h3>{" "}
        <div className="botones-enlaces-grid">
          {" "}
          <Link to="/convocatorias" className="btn-enlace">
            {" "}
            <i className="fas fa-bullhorn"></i> Convocatorias de la Oficina{" "}
          </Link>{" "}
          <Link to="/documentos" className="btn-enlace">
            {" "}
            <i className="fas fa-folder-open"></i> Estadísticas y Reportes{" "}
          </Link>{" "}
          <Link to="/contacto" className="btn-enlace">
            {" "}
            <i className="fas fa-file-signature"></i> Mesa de Partes
            Virtual{" "}
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      <section className="personal-section">
        {" "}
        <h3>
          {" "}
          <i className="fas fa-users"></i> Equipo de Apoyo{" "}
        </h3>{" "}
        <div className="personal-avatar-grid">
          {" "}
          {personal.map((p, i) => (
            <div className="avatar-card" key={i}>
              {" "}
              <div className="avatar-wrapper">
                {" "}
                <img src={p.foto} alt={p.nombre} className="foto-avatar" />{" "}
              </div>{" "}
              <div className="avatar-info">
                {" "}
                <h4 className="nombre-trabajador">{p.nombre}</h4>{" "}
                <p className="cargo-trabajador">
                  {" "}
                  <i className="fas fa-briefcase"></i> {p.cargo}{" "}
                </p>{" "}
                <p className="ubicacion-trabajador">
                  {" "}
                  <i className="fas fa-map-marker-alt"></i> {p.ubicacion}{" "}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section className="galeria-section">
        {" "}
        <h3>
          {" "}
          <i className="fas fa-images"></i> Galería Institucional{" "}
        </h3>{" "}
        <div className="galeria-grid">
          {" "}
          {galeria.map((foto, i) => (
            <div className="galeria-item" key={i} onClick={() => abrirFoto(i)}>
              {" "}
              <img src={foto.src} alt={foto.alt} />{" "}
              <div className="galeria-overlay">
                {" "}
                <i className="fas fa-search-plus"></i>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
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
export default EstadisticaInformatica;
