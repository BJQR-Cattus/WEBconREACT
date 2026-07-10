import { useMemo, useState } from "react";
import "./documentos-simple.css";

const NEW_DAYS_LIMIT = 30;

function isRecentDocument(fechaPublicacion) {
  const publishedAt = new Date(`${fechaPublicacion}T00:00:00`);

  if (Number.isNaN(publishedAt.getTime())) {
    return false;
  }

  const today = new Date();
  const diffDays = (today - publishedAt) / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= NEW_DAYS_LIMIT;
}

function getFileIcon(tipoArchivo) {
  const normalizedType = tipoArchivo.toLowerCase();

  if (normalizedType.includes("excel") || normalizedType.includes("xlsx")) {
    return "fa-file-excel";
  }

  return "fa-file-pdf";
}

function DocumentosSimplePage({ titulo, descripcion, documentos }) {
  const [busqueda, setBusqueda] = useState("");
  const [tipoActivo, setTipoActivo] = useState("todos");

  const tiposArchivo = useMemo(() => {
    const tipos = documentos.map((doc) => doc.tipoArchivo);
    return ["todos", ...new Set(tipos)];
  }, [documentos]);

  const documentosFiltrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();

    return documentos.filter((doc) => {
      const matchesSearch = [doc.nombre, doc.descripcion, doc.categoria]
        .join(" ")
        .toLowerCase()
        .includes(term);
      const matchesType =
        tipoActivo === "todos" || doc.tipoArchivo === tipoActivo;

      return matchesSearch && matchesType;
    });
  }, [busqueda, documentos, tipoActivo]);

  const counters = useMemo(() => {
    return documentos.reduce(
      (acc, doc) => {
        const type = doc.tipoArchivo.toLowerCase();

        acc.total += 1;

        if (isRecentDocument(doc.fechaPublicacion)) {
          acc.nuevos += 1;
        }

        if (type.includes("pdf")) {
          acc.pdf += 1;
        }

        if (type.includes("excel") || type.includes("xlsx")) {
          acc.excel += 1;
        }

        return acc;
      },
      { total: 0, nuevos: 0, pdf: 0, excel: 0 }
    );
  }, [documentos]);

  return (
    <main className="documentos-simple-page">
      <section className="documentos-simple-page__hero">
        <div className="documentos-simple-page__hero-content">
          <span className="documentos-simple-page__eyebrow">
            Trámites y documentos
          </span>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </section>

      <section className="documentos-simple-page__content">
        <div className="documentos-simple-page__stats" aria-label="Resumen de documentos">
          <article className="documentos-simple-page__stat-card">
            <span>{counters.total}</span>
            <p>Total</p>
          </article>
          <article className="documentos-simple-page__stat-card">
            <span>{counters.nuevos}</span>
            <p>Nuevos</p>
          </article>
          <article className="documentos-simple-page__stat-card">
            <span>{counters.pdf}</span>
            <p>PDF</p>
          </article>
          <article className="documentos-simple-page__stat-card">
            <span>{counters.excel}</span>
            <p>Excel</p>
          </article>
        </div>

        <div className="documentos-simple-page__tools">
          <label className="documentos-simple-page__search">
            <i className="fas fa-magnifying-glass"></i>
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              placeholder="Buscar documento..."
            />
          </label>

          <div className="documentos-simple-page__filters" aria-label="Filtrar por tipo de archivo">
            {tiposArchivo.map((tipo) => (
              <button
                key={tipo}
                type="button"
                className={tipoActivo === tipo ? "active" : ""}
                onClick={() => setTipoActivo(tipo)}
              >
                {tipo === "todos" ? "Todos" : tipo}
              </button>
            ))}
          </div>
        </div>

        <div className="documentos-simple-page__list">
          {documentosFiltrados.length > 0 ? (
            documentosFiltrados.map((doc) => {
              const isNew = isRecentDocument(doc.fechaPublicacion);

              return (
                <article className="documentos-simple-page__doc-card" key={doc.id}>
                  <div className="documentos-simple-page__doc-icon">
                    <i className={`fas ${getFileIcon(doc.tipoArchivo)}`}></i>
                  </div>

                  <div className="documentos-simple-page__doc-info">
                    <div className="documentos-simple-page__doc-header">
                      <span className="documentos-simple-page__category">
                        {doc.categoria}
                      </span>
                      {isNew && (
                        <span className="documentos-simple-page__new-badge">
                          Nuevo
                        </span>
                      )}
                    </div>
                    <h2>{doc.nombre}</h2>
                    <p>{doc.descripcion}</p>
                    <div className="documentos-simple-page__meta">
                      <span>
                        <i className="fas fa-calendar-days"></i>
                        {doc.fechaPublicacion}
                      </span>
                      <span>
                        <i className="fas fa-file"></i>
                        {doc.tipoArchivo}
                      </span>
                    </div>
                  </div>

                  <a
                    className="documentos-simple-page__download"
                    href={doc.urlDescarga}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                    Ver archivo
                  </a>
                </article>
              );
            })
          ) : (
            <div className="documentos-simple-page__empty">
              <i className="fas fa-folder-open"></i>
              <p>No se encontraron documentos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default DocumentosSimplePage;
