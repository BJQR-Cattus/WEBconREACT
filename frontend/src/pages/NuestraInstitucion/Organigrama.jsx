import React, { useState } from "react";
import "./organigrama.css";

export default function Organigrama() {
  const [activeNode, setActiveNode] = useState("direccion");

  const infoData = {
    supreme: {
      title: "GERENCIA REGIONAL DE DESARROLLO ECONÓMICO",
      role: "Órgano Superior Gubernamental",
      desc: "Encargado de dirigir, ejecutar y evaluar las políticas regionales orientadas al desarrollo de los sectores agrario, industrial, comercio y turismo.",
      contacto: "desarrolloeconomico@region.gob.pe",
    },
    direccion: {
      title: "DIRECCIÓN REGIONAL AGRARIA HUANCAVELICA",
      role: "Dirección General Ejecutiva",
      desc: "Órgano responsable de conducir la política agraria regional en beneficio de los productores de la región Huancavelica, promoviendo la competitividad y sustentabilidad.",
      contacto: "contacto@drahuancavelica.gob.pe",
    },
    control: {
      title: "ÓRGANO DE CONTROL INSTITUCIONAL (OCI)",
      role: "Órgano de Control y Auditoría",
      desc: "Responsable de llevar a cabo el control gubernamental interno en la entidad, de acuerdo con las normativas del Sistema Nacional de Control.",
      contacto: "oci@drahuancavelica.gob.pe",
    },
    coordinacion: {
      title: "CONSEJO DE COORDINACIÓN SECTOR AGRARIO",
      role: "Órgano de Concertación Regional",
      desc: "Espacio interinstitucional encargado de articular acciones entre los sectores público, privado y organizaciones agrarias representativas de la región.",
      contacto: "coordinacion.sectorial@drahuancavelica.gob.pe",
    },
    planificacion: {
      title: "OFICINA DE PLANIFICACIÓN AGRARIA",
      role: "Órgano de Asesoramiento Técnico",
      desc: "Encargada de conducir los procesos de presupuesto, programación multianual, inversión pública y modernización de la gestión institucional.",
      contacto: "planificacion@drahuancavelica.gob.pe",
    },
    juridica: {
      title: "OFICINA DE ASESORÍA JURÍDICA",
      role: "Órgano de Asesoramiento Legal",
      desc: "Responsable de asesorar a la Dirección y demás dependencias en asuntos de carácter jurídico-legal, emitiendo dictámenes e informes técnicos correspondientes.",
      contacto: "asur@drahuancavelica.gob.pe",
    },
    administracion: {
      title: "OFICINA DE ADMINISTRACIÓN",
      role: "Órgano de Apoyo Logístico",
      desc: "Administra los recursos financieros, materiales, humanos y de servicios de la institución, garantizando el soporte operativo para los órganos de línea.",
      contacto: "administracion@drahuancavelica.gob.pe",
    },
    informatica: {
      title: "OFICINA DE ESTADÍSTICA E INFORMÁTICA",
      role: "Órgano de Soporte Tecnológico",
      desc: "Produce, consolida y difunde la información estadística agraria oficial, además de gestionar la infraestructura tecnológica y sistemas informáticos.",
      contacto: "estadistica@drahuancavelica.gob.pe",
    },
    linea: {
      title: "ÓRGANOS DE LÍNEA (DIRECCIONES TÉCNICAS)",
      role: "Direcciones Especializadas de Ejecución",
      desc: "Comprende: Competitividad Agraria, Cultivos Nativos y Ganadería Regional, Recursos Hídricos, Saneamiento Físico Legal de la Propiedad, y Forestal y Fauna Silvestre.",
      contacto: "linea.tecnica@drahuancavelica.gob.pe",
    },
    desconcentrados: {
      title: "ÓRGANOS DESCONCENTRADOS Y TERRITORIALES",
      role: "Agencias Agrarias y Estaciones Experimentales",
      desc: "Nuestras 7 agencias territoriales (Acobamba, Angaraes, Castrovirreyna, Churcampa, Huancavelica, Huaytará, Tayacaja) y la Estación Callqui ejecutan las políticas directamente en campo.",
      contacto: "agencias.campo@drahuancavelica.gob.pe",
    },
  };

  // Función auxiliar para renderizar la tarjeta (reutilizable en la vista móvil)
  const renderInfoCard = (nodeId) => (
    <div className="info-display-card">
      <div className="card-badge">{infoData[nodeId].role}</div>
      <h3 className="card-main-title">{infoData[nodeId].title}</h3>
      <div className="card-divider"></div>
      <p className="card-description">{infoData[nodeId].desc}</p>
      <div className="card-footer-info">
        <div className="info-meta-row">
          <span className="meta-icon">🏢</span>
          <span>Sede Central - Huancavelica</span>
        </div>
        <div className="info-meta-row">
          <span className="meta-icon">✉️</span>
          <span>{infoData[nodeId].contacto}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="interactive-org-layout dark-theme">
      {/* PANEL IZQUIERDO: El Árbol Estructural */}
      <div className="org-navigation-panel">
        <h2 className="panel-section-title">Estructura Orgánica</h2>

        <div className="org-buttons-tree">
          {/* Nodo 1 */}
          <button
            className={`org-btn-node btn-supreme ${activeNode === "supreme" ? "active" : ""}`}
            onClick={() => setActiveNode("supreme")}
          >
            Gerencia Reg. Desarrollo Económico
          </button>
          {activeNode === "supreme" && (
            <div className="mobile-info-container">
              {renderInfoCard("supreme")}
            </div>
          )}

          <div className="connect-line vertical-line"></div>

          {/* Nodo 2 */}
          <button
            className={`org-btn-node btn-direction ${activeNode === "direccion" ? "active" : ""}`}
            onClick={() => setActiveNode("direccion")}
          >
            Dirección Regional Agraria
          </button>
          {activeNode === "direccion" && (
            <div className="mobile-info-container">
              {renderInfoCard("direccion")}
            </div>
          )}

          <div className="connect-line vertical-line"></div>

          {/* Grupo Staff */}
          <div className="buttons-row-group">
            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-staff btn-staff-control ${activeNode === "control" ? "active" : ""}`}
                onClick={() => setActiveNode("control")}
              >
                Órgano Control (OCI)
              </button>
              {activeNode === "control" && (
                <div className="mobile-info-container">
                  {renderInfoCard("control")}
                </div>
              )}
            </div>

            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-staff btn-staff-coord ${activeNode === "coordinacion" ? "active" : ""}`}
                onClick={() => setActiveNode("coordinacion")}
              >
                Consejo de Coordinación
              </button>
              {activeNode === "coordinacion" && (
                <div className="mobile-info-container">
                  {renderInfoCard("coordinacion")}
                </div>
              )}
            </div>
          </div>

          <div className="connect-line vertical-line"></div>

          {/* Asesoría y Apoyo */}
          <h4 className="tree-sub-label">Asesoramiento y Apoyo</h4>
          <div className="buttons-grid-group">
            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-sub ${activeNode === "planificacion" ? "active" : ""}`}
                onClick={() => setActiveNode("planificacion")}
              >
                Planificación Agraria
              </button>
              {activeNode === "planificacion" && (
                <div className="mobile-info-container">
                  {renderInfoCard("planificacion")}
                </div>
              )}
            </div>

            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-sub ${activeNode === "juridica" ? "active" : ""}`}
                onClick={() => setActiveNode("juridica")}
              >
                Asesoría Jurídica
              </button>
              {activeNode === "juridica" && (
                <div className="mobile-info-container">
                  {renderInfoCard("juridica")}
                </div>
              )}
            </div>

            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-sub ${activeNode === "administracion" ? "active" : ""}`}
                onClick={() => setActiveNode("administracion")}
              >
                Administración
              </button>
              {activeNode === "administracion" && (
                <div className="mobile-info-container">
                  {renderInfoCard("administracion")}
                </div>
              )}
            </div>

            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-sub ${activeNode === "informatica" ? "active" : ""}`}
                onClick={() => setActiveNode("informatica")}
              >
                Estadística e Informática
              </button>
              {activeNode === "informatica" && (
                <div className="mobile-info-container">
                  {renderInfoCard("informatica")}
                </div>
              )}
            </div>
          </div>

          <div className="connect-line vertical-line"></div>

          {/* Línea y Desconcentrados */}
          <div className="buttons-row-group">
            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-linea ${activeNode === "linea" ? "active" : ""}`}
                onClick={() => setActiveNode("linea")}
              >
                Direcciones de Línea
              </button>
              {activeNode === "linea" && (
                <div className="mobile-info-container">
                  {renderInfoCard("linea")}
                </div>
              )}
            </div>

            <div className="mobile-w-full">
              <button
                className={`org-btn-node btn-desconcentrado ${activeNode === "desconcentrados" ? "active" : ""}`}
                onClick={() => setActiveNode("desconcentrados")}
              >
                Agencias y Estaciones
              </button>
              {activeNode === "desconcentrados" && (
                <div className="mobile-info-container">
                  {renderInfoCard("desconcentrados")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DERECHO: Escritorio (Se oculta automáticamente en móviles vía CSS) */}
      <div className="org-display-panel">
        <div
          className={`dynamic-connector-line line-state-${activeNode}`}
        ></div>
        <div key={activeNode} className="desktop-card-wrapper">
          {renderInfoCard(activeNode)}
        </div>
      </div>
    </div>
  );
}
