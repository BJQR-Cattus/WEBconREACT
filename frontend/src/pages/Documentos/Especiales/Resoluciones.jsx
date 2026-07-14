import { useEffect, useMemo, useState } from "react";
import { getFileUrl, getResolutions } from "../../../services/api.js";
import { resolucionesData } from "./resolucionesData.js";
import "./resoluciones.css";

function countYearDocuments(yearData) {
  return yearData.grupos.reduce((total, group) => total + group.documentos.length, 0);
}

function flattenDocuments(years) {
  return years.flatMap((year) =>
    year.grupos.flatMap((group) =>
      group.documentos.map((doc) => ({
        ...doc,
        grupoId: group.id,
        grupoTitulo: group.titulo,
        anio: year.anio,
      }))
    )
  );
}

function Resoluciones() {
  const [apiData, setApiData] = useState(null);
  const [anioActivo, setAnioActivo] = useState(resolucionesData[0].id);
  const [tipoActivo, setTipoActivo] = useState(resolucionesData[0].grupos[0].id);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getResolutions().then((items) => {
      if (items.length) setApiData(items);
    }).catch(() => {});
  }, []);

  const allDocuments = useMemo(() => flattenDocuments(resolucionesData), []);
  const activeYear = resolucionesData.find((year) => year.id === anioActivo) ?? resolucionesData[0];
  const activeGroup =
    activeYear.grupos.find((group) => group.id === tipoActivo) ?? activeYear.grupos[0];

  const counters = {
    total: allDocuments.length,
    currentYearTotal: countYearDocuments(activeYear),
    years: resolucionesData.length,
    groups: activeYear.grupos.length,
  };

  const filteredDocuments = useMemo(() => {
    const term = busqueda.trim().toLowerCase();

    return activeGroup.documentos.filter((doc) =>
      [doc.nombre, doc.numero, doc.tipo, activeYear.anio, activeGroup.titulo]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [activeGroup, activeYear.anio, busqueda]);

  if (apiData) {
    return <ResolucionesApi items={apiData} />;
  }

  return (
    <main className="resoluciones-page">
      <section className="resoluciones-page__hero">
        <div className="resoluciones-page__hero-content">
          <span className="resoluciones-page__eyebrow">Tramites y documentos</span>
          <h1>Resoluciones</h1>
          <p>
            Consulta resoluciones publicadas por año. Selecciona el año, el tipo
            de resolucion y busca rapidamente por numero o denominacion.
          </p>
        </div>
      </section>

      <section className="resoluciones-page__content">
        <div className="resoluciones-page__stats" aria-label="Resumen de resoluciones">
          <article className="resoluciones-page__stat-card">
            <span>{counters.total}</span>
            <p>Total historico</p>
          </article>
          <article className="resoluciones-page__stat-card">
            <span>{counters.currentYearTotal}</span>
            <p>Año {activeYear.anio}</p>
          </article>
          <article className="resoluciones-page__stat-card">
            <span>{counters.years}</span>
            <p>Años</p>
          </article>
          <article className="resoluciones-page__stat-card">
            <span>{counters.groups}</span>
            <p>Tipos activos</p>
          </article>
        </div>

        <div className="resoluciones-page__years" aria-label="Filtrar por año">
          {resolucionesData.map((year) => (
            <button
              key={year.id}
              type="button"
              className={anioActivo === year.id ? "active" : ""}
              onClick={() => {
                setAnioActivo(year.id);
                setTipoActivo(year.grupos[0].id);
                setBusqueda("");
              }}
            >
              {year.anio}
              <span>{countYearDocuments(year)}</span>
            </button>
          ))}
        </div>

        <div className="resoluciones-page__type-tabs" aria-label="Filtrar por tipo de resolucion">
          {activeYear.grupos.map((group) => (
            <button
              key={group.id}
              type="button"
              className={activeGroup.id === group.id ? "active" : ""}
              onClick={() => {
                setTipoActivo(group.id);
                setBusqueda("");
              }}
            >
              {group.titulo}
              <span>{group.documentos.length}</span>
            </button>
          ))}
        </div>

        <label className="resoluciones-page__search">
          <i className="fas fa-magnifying-glass"></i>
          <input
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Buscar por numero, tipo o año..."
          />
        </label>

        <section className="resoluciones-page__documents">
          <div className="resoluciones-page__documents-header">
            <div>
              <span>{filteredDocuments.length} documentos</span>
              <h2>{activeGroup.titulo}</h2>
            </div>
            <p>Año {activeYear.anio}</p>
          </div>

          <div className="resoluciones-page__list">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <article className="resoluciones-page__doc-card" key={doc.id}>
                  <div className="resoluciones-page__doc-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>

                  <div className="resoluciones-page__doc-info">
                    <div className="resoluciones-page__doc-header">
                      <span className="resoluciones-page__category">{doc.tipo}</span>
                      <span className="resoluciones-page__year">{doc.anio}</span>
                    </div>
                    <h3>{doc.nombre}</h3>
                    <div className="resoluciones-page__meta">
                      <span>
                        <i className="fas fa-hashtag"></i>
                        {doc.numero}
                      </span>
                      <span>
                        <i className="fas fa-file-pdf"></i>
                        PDF
                      </span>
                    </div>
                  </div>

                  <a
                    className="resoluciones-page__download"
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                    Ver PDF
                  </a>
                </article>
              ))
            ) : (
              <div className="resoluciones-page__empty">
                <i className="fas fa-folder-open"></i>
                <p>No se encontraron resoluciones con la busqueda ingresada.</p>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

function ResolucionesApi({ items }) {
  const [busqueda, setBusqueda] = useState("");
  const filtradas = items.filter((item) => [item.number, item.year, item.resolution_type, item.description].join(" ").toLowerCase().includes(busqueda.toLowerCase()));
  return <main className="resoluciones-page"><section className="resoluciones-page__hero"><div className="resoluciones-page__hero-content"><span className="resoluciones-page__eyebrow">Trámites y documentos</span><h1>Resoluciones</h1><p>Resoluciones publicadas desde la plataforma institucional.</p></div></section><section className="resoluciones-page__content"><label className="resoluciones-page__search"><i className="fas fa-magnifying-glass"></i><input type="search" value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Buscar resolución..." /></label><section className="resoluciones-page__documents"><div className="resoluciones-page__documents-header"><div><span>{filtradas.length} documentos</span><h2>Resoluciones publicadas</h2></div></div><div className="resoluciones-page__list">{filtradas.map((item) => <article className="resoluciones-page__doc-card" key={item.id}><div className="resoluciones-page__doc-icon"><i className="fas fa-file-pdf"></i></div><div className="resoluciones-page__doc-info"><div className="resoluciones-page__doc-header"><span className="resoluciones-page__category">{item.resolution_type}</span><span className="resoluciones-page__year">{item.year}</span></div><h3>{item.description || `Resolución ${item.number}`}</h3><div className="resoluciones-page__meta"><span><i className="fas fa-hashtag"></i>{item.number}</span></div></div><a className="resoluciones-page__download" href={getFileUrl(item.file_url)} target="_blank" rel="noopener noreferrer">Ver PDF</a></article>)}</div></section></section></main>;
}

export default Resoluciones;
