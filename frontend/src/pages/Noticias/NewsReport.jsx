import { useState, useEffect } from "react";
import "./NewsReport.css";

function NewsReport() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO (Fase 2 - backend): reemplazar este arreglo fijo por un fetch
    // a tu API, ej: fetch("https://tu-api.com/api/noticias")
    // El backend se encargará de leer el link pegado por el admin,
    // extraer título/imagen/descripción (Open Graph) y guardar la fuente.
    const noticiasData = [
      {
        id: 1,
        imagen: "/images/galeria/img/noticias_index/Notice1.png",
        titulo: "Titulo, titulo....",
        fecha: "01 de julio de 2026",
        resumen:
          "MENSAJE, MENSAJE, mensaje, mensaje, Mensaje, mensaje, mensaje, mensaje",
        fuente: "DRA...",
        url: "#",
      },
      {
        id: 2,
        imagen: "/images/galeria/img/noticias_index/Notice2.png",
        titulo: "Titulo, titulo....",
        fecha: "02 de junio de 2026",
        resumen:
          "MENSAJE, MENSAJE, mensaje, mensaje, Mensaje, mensaje, mensaje, mensaje",
        fuente: "DRA...",
        url: "#",
      },
      {
        id: 3,
        imagen: "/images/galeria/img/noticias_index/Notice3.png",
        titulo: "Titulo, titulo....",
        fecha: "09 de junio de 2026",
        resumen:
          "MENSAJE, MENSAJE, mensaje, mensaje, Mensaje, mensaje, mensaje, mensaje",
        fuente: "DRA...",
        url: "#",
      },
    ];

    setNoticias(noticiasData);
    setLoading(false);
  }, []);

  return (
    <main className="noticias-section">
      <h1>Noticias y Actualidad Agraria</h1>

      <div className="noticias-container" id="noticias-container">
        {loading ? (
          <p className="loading-text">Cargando noticias...</p>
        ) : (
          noticias.map((n) => (
            <div key={n.id} className="noticia-card">
              <img src={n.imagen} alt={n.titulo} />
              <div className="noticia-info">
                <h2>{n.titulo}</h2>
                <p className="fecha">{n.fecha}</p>
                <p>{n.resumen}</p>
                <a
                  href={n.url}
                  className="btn-leer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más
                </a>
                <p className="fuente-noticia">Fuente: {n.fuente}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default NewsReport;
