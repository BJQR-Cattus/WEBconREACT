import { useMemo, useState } from "react";
import "./documentos-agrupados.css";

const NEW_DAYS_LIMIT = 30;

function isRecentDocument(fechaPublicacion) {
  if (!fechaPublicacion) {
    return false;
  }

  const publishedAt = new Date(`${fechaPublicacion}T00:00:00`);

  if (Number.isNaN(publishedAt.getTime())) {
    return false;
  }

  const today = new Date();
  const diffDays = (today - publishedAt) / (1000 * 60 * 60 * 24);

  return diffDays >= 0 && diffDays <= NEW_DAYS_LIMIT;
}

function getAllDocuments(grupos) {
  return grupos.flatMap((grupo) =>
    grupo.documentos.map((documento) => ({
      ...documento,
      grupoId: grupo.id,
      grupoTitulo: grupo.titulo,
    }))
  );
}

function DocumentosAgrupadosPage({ titulo, descripcion, grupos }) {
  const [busqueda, setBusqueda] = useState("");
  const [grupoActivo, setGrupoActivo] = useState(grupos[0]?.id ?? "todos");

  const documentos = useMemo(() => getAllDocuments(grupos), [grupos]);

  const counters = useMemo(() => {
    return documentos.reduce(
      (acc, doc) => {
        acc.total += 1;

        if (isRecentDocument(doc.fechaPublicacion)) {
          acc.nuevos += 1;
        }

        return acc;
      },
      { total: 0, nuevos: 0 }
    );
  }, [documentos]);

  const gruposFiltrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();

    return grupos
      .filter((grupo) => grupoActivo === "todos" || grupo.id === grupoActivo)
      .map((grupo) => {
        const documentosFiltrados = grupo.documentos.filter((doc) =>
          [doc.nombre, doc.descripcion, doc.categoria, doc.tipo, grupo.titulo]
            .join(" ")
            .toLowerCase()
            .includes(term)
        );

        return {
          ...grupo,
          documentos: documentosFiltrados,
        };
      })
      .filter((grupo) => grupo.documentos.length > 0);
  }, [busqueda, grupoActivo, grupos]);

  return (
    <main className="documentos-agrupados-page">
      <section className="documentos-agrupados-page__hero">
        <div className="documentos-agrupados-page__hero-content">
          <span className="documentos-agrupados-page__eyebrow">
            Trámites y documentos
          </span>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </section>

      <section className="documentos-agrupados-page__content">
        <div className="documentos-agrupados-page__stats" aria-label="Resumen de documentos">
          <article className="documentos-agrupados-page__stat-card">
            <span>{counters.total}</span>
            <p>Total</p>
          </article>
          <article className="documentos-agrupados-page__stat-card">
            <span>{counters.nuevos}</span>
            <p>Nuevos</p>
          </article>
          <article className="documentos-agrupados-page__stat-card">
            <span>{grupos.length}</span>
            <p>Grupos</p>
          </article>
          <article className="documentos-agrupados-page__stat-card">
            <span>PDF</span>
            <p>Formato</p>
          </article>
        </div>

        <div className="documentos-agrupados-page__tools">
          <label className="documentos-agrupados-page__search">
            <i className="fas fa-magnifying-glass"></i>
            <input
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              placeholder="Buscar documento..."
            />
          </label>

          <div className="documentos-agrupados-page__filters" aria-label="Filtrar grupo">
            <button
              type="button"
              className={grupoActivo === "todos" ? "active" : ""}
              onClick={() => setGrupoActivo("todos")}
            >
              Todos
            </button>
            {grupos.map((grupo) => (
              <button
                key={grupo.id}
                type="button"
                className={grupoActivo === grupo.id ? "active" : ""}
                onClick={() => setGrupoActivo(grupo.id)}
              >
                {grupo.titulo}
              </button>
            ))}
          </div>
        </div>

        <div className="documentos-agrupados-page__groups">
          {gruposFiltrados.length > 0 ? (
            gruposFiltrados.map((grupo) => (
              <section className="documentos-agrupados-page__group" key={grupo.id}>
                <div className="documentos-agrupados-page__group-header">
                  <div>
                    <span>{grupo.documentos.length} documentos</span>
                    <h2>{grupo.titulo}</h2>
                  </div>
                  {grupo.descripcion && <p>{grupo.descripcion}</p>}
                </div>

                <div className="documentos-agrupados-page__list">
                  {grupo.documentos.map((doc) => {
                    const isNew = isRecentDocument(doc.fechaPublicacion);

                    return (
                      <article className="documentos-agrupados-page__doc-card" key={doc.id}>
                        <div className="documentos-agrupados-page__doc-icon">
                          <i className="fas fa-file-pdf"></i>
                        </div>

                        <div className="documentos-agrupados-page__doc-info">
                          <div className="documentos-agrupados-page__doc-header">
                            <span className="documentos-agrupados-page__category">
                              {doc.categoria ?? grupo.titulo}
                            </span>
                            {isNew && (
                              <span className="documentos-agrupados-page__new-badge">
                                Nuevo
                              </span>
                            )}
                          </div>
                          <h3>{doc.nombre}</h3>
                          {doc.descripcion && <p>{doc.descripcion}</p>}
                          <div className="documentos-agrupados-page__meta">
                            {doc.fechaPublicacion && (
                              <span>
                                <i className="fas fa-calendar-days"></i>
                                {doc.fechaPublicacion}
                              </span>
                            )}
                            <span>
                              <i className="fas fa-file-pdf"></i>
                              {doc.tipo ?? "PDF"}
                            </span>
                          </div>
                        </div>

                        <a
                          className="documentos-agrupados-page__download"
                          href={doc.urlDescarga ?? doc.url ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-arrow-up-right-from-square"></i>
                          Ver PDF
                        </a>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <div className="documentos-agrupados-page__empty">
              <i className="fas fa-folder-open"></i>
              <p>No se encontraron documentos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default DocumentosAgrupadosPage;
