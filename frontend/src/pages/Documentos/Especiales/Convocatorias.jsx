import { useEffect, useMemo, useState } from "react";
import { getCalls, getCallStages } from "../../../services/api.js";
import { convocatoriaYears, convocatoriasData } from "./convocatoriasData.js";
import "./convocatorias.css";

function sortByNumberDesc(a, b) {
  return Number(b.numero) - Number(a.numero);
}

function getStatusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function Convocatorias() {
  const [apiCalls, setApiCalls] = useState(null);
  const [selectedYear, setSelectedYear] = useState(convocatoriaYears[0].id);
  const [selectedMode, setSelectedMode] = useState(convocatoriaYears[0].modalidades[0]);
  const [openId, setOpenId] = useState(null);
  const [activeStages, setActiveStages] = useState({});

  useEffect(() => {
    getCalls().then(async (calls) => {
      if (!calls.length) return;
      const mapped = await Promise.all(calls.map(async (call) => ({
        id: call.id,
        anio: String(call.year),
        modalidad: call.modality,
        numero: call.number,
        titulo: call.title,
        estado: call.status,
        etapas: (await getCallStages(call.id)).map((stage) => ({ id: stage.id, titulo: stage.name, documentos: [] })),
      })));
      setApiCalls(mapped);
      setSelectedYear(mapped[0].anio);
      setSelectedMode(mapped[0].modalidad);
    }).catch(() => {});
  }, []);

  const callsSource = apiCalls ?? convocatoriasData;
  const yearsSource = useMemo(() => apiCalls ? [...new Map(apiCalls.map((call) => [call.anio, { id: call.anio, modalidades: [...new Set(apiCalls.filter((item) => item.anio === call.anio).map((item) => item.modalidad))] }])).values()] : convocatoriaYears, [apiCalls]);

  const yearConfig = yearsSource.find((year) => year.id === selectedYear);

  const filteredCalls = callsSource
    .filter((item) => item.anio === selectedYear && item.modalidad === selectedMode)
    .toSorted(sortByNumberDesc);

  const toggleCall = (call) => {
    setOpenId((current) => (current === call.id ? null : call.id));
  };

  const counters = {
    total: callsSource.length,
    yearTotal: callsSource.filter((item) => item.anio === selectedYear).length,
    filteredTotal: filteredCalls.length,
    activeYear: selectedYear,
  };

  return (
    <main className="convocatorias-page">
      <section className="convocatorias-page__hero">
        <div className="convocatorias-page__hero-content">
          <span className="convocatorias-page__eyebrow">Convocatorias institucionales</span>
          <h1>Procesos de seleccion</h1>
          <p>
            Convocatorias publicas bajo modalidades CAS, D.L. N. 276, practicas,
            nombramientos y agricultura familiar.
          </p>
        </div>
      </section>

      <section className="convocatorias-page__content">
        <div className="convocatorias-page__stats" aria-label="Resumen de convocatorias">
          <article>
            <span>{counters.total}</span>
            <p>Total</p>
          </article>
          <article>
            <span>{counters.yearTotal}</span>
            <p>Año {counters.activeYear}</p>
          </article>
          <article>
            <span>{counters.filteredTotal}</span>
            <p>{selectedMode}</p>
          </article>
        </div>

        <div className="convocatorias-page__year-tabs" aria-label="Selector de año">
          {yearsSource.map((year) => (
            <button
              key={year.id}
              type="button"
              className={selectedYear === year.id ? "active" : ""}
              onClick={() => {
                setSelectedYear(year.id);
                setSelectedMode(year.modalidades[0]);
                setOpenId(null);
              }}
            >
              {year.id}
            </button>
          ))}
        </div>

        <div className="convocatorias-page__mode-tabs" aria-label="Selector de modalidad">
          {yearConfig?.modalidades.map((mode) => (
            <button
              key={mode}
              type="button"
              className={selectedMode === mode ? "active" : ""}
              onClick={() => {
                setSelectedMode(mode);
                setOpenId(null);
              }}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="convocatorias-page__accordion">
          {filteredCalls.length > 0 ? (
            filteredCalls.map((call) => {
              const isOpen = openId === call.id;
              const activeStageId = activeStages[call.id] ?? call.etapas[0]?.id;
              const activeStage = call.etapas.find((stage) => stage.id === activeStageId) ?? call.etapas[0];

              return (
                <article className={`convocatorias-page__call ${isOpen ? "open" : ""}`} key={call.id}>
                  <button
                    type="button"
                    className="convocatorias-page__call-trigger"
                    onClick={() => toggleCall(call)}
                    aria-expanded={isOpen}
                  >
                    <span className="convocatorias-page__number">{call.numero}</span>
                    <span className="convocatorias-page__title-block">
                      <strong>{call.titulo}</strong>
                      <small>{call.modalidad}</small>
                    </span>
                    <span className={`convocatorias-page__status ${getStatusClass(call.estado)}`}>
                      {call.estado}
                    </span>
                    <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
                  </button>

                  {isOpen && (
                    <div className="convocatorias-page__call-content">
                      <aside className="convocatorias-page__stage-menu" aria-label="Etapas de convocatoria">
                        {call.etapas.map((stage, index) => (
                          <button
                            key={stage.id}
                            type="button"
                            className={activeStage?.id === stage.id ? "active" : ""}
                            onClick={() =>
                              setActiveStages((current) => ({
                                ...current,
                                [call.id]: stage.id,
                              }))
                            }
                          >
                            <span>{index + 1}</span>
                            {stage.titulo}
                          </button>
                        ))}
                      </aside>

                      <section className="convocatorias-page__docs-panel">
                        <div className="convocatorias-page__docs-header">
                          <span>{activeStage?.documentos.length ?? 0} archivos</span>
                          <h2>{activeStage?.titulo}</h2>
                        </div>

                        <div className="convocatorias-page__docs-list">
                          {activeStage?.documentos.map((doc) => (
                            <a
                              href={doc.url}
                              key={doc.id}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="convocatorias-page__doc-link"
                            >
                              <i className={doc.tipo === "XLSX" ? "fas fa-file-excel" : "fas fa-file-pdf"}></i>
                              <span>{doc.nombre}</span>
                              <small>{doc.tipo}</small>
                            </a>
                          ))}
                        </div>
                      </section>
                    </div>
                  )}
                </article>
              );
            })
          ) : (
            <div className="convocatorias-page__empty">
              <i className="fas fa-folder-open"></i>
              <p>No hay convocatorias registradas para esta modalidad.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Convocatorias;
