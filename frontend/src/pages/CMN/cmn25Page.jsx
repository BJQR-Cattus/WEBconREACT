import { useState } from "react";
import "./Cmn.css";

function CmnPage() {
    const [showPdf, setShowPdf] = useState(false);

    // En un entorno de producción, estos datos vendrían de un fetch a tu API
    // const [modificaciones, setModificaciones] = useState([]);
    const modificaciones = [
        { id: 1, titulo: "Primera Modificación", fecha: "2025-01-15", url: "/pdf/mod1.pdf" },
        { id: 2, titulo: "Segunda Modificación", fecha: "2025-03-10", url: "/pdf/mod2.pdf" },
    ];

    const togglePDF = () => {
        setShowPdf(!showPdf);
    };

    return (
        <main className="cmn-page">
            <section className="cmn-hero">
                <div className="hero-content">
                    <h1>CUADRO MULTIANUAL DE NECESIDADES 2025</h1>
                    <p>🌿 Dirección Regional de Agricultura Huancavelica 🌿</p>
                    <button id="togglePDF" onClick={togglePDF}>
                        <span id="toggleIcon" className={showPdf ? "icon-minus" : "icon-plus"}></span>
                        <span>{showPdf ? "Ocultar documento" : "Ver documento principal"}</span>
                    </button>
                </div>
                <div className="hero-bg"></div>
            </section>

            {/* PDF principal dinámico */}
            {showPdf && (
                <div id="pdfContainer" className="pdf-container">
                    <iframe
                        title="CMN 2025"
                        src="/images/pdf/cmn2025/CMN2025.pdf"
                    />
                </div>
            )}

            {/* Lista de modificaciones lista para mapear desde el backend */}
            <section className="cmn-section">
                <h2>VEA TODAS LAS MODIFICACIONES DEL CMN 2025:</h2>
                <p className="descripcion">
                    Aquí se muestran las modificaciones publicadas del Cuadro Multianual de Necesidades 2025.
                </p>
                <div id="modificaciones" className="cmn-list">
                    {modificaciones.map((mod) => (
                        <div key={mod.id} className="modificacion-item">
                            <h3>{mod.titulo}</h3>
                            <p>Fecha: {mod.fecha}</p>
                            <a href={mod.url} target="_blank" rel="noopener noreferrer">
                                Ver documento
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default CmnPage;