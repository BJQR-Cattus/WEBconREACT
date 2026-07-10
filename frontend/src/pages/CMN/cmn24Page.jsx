import { useState } from "react";
import "./cmn.css"; // Se reutiliza el mismo CSS para ambos componentes

function Cmn2024Page() {
    const [showPdf, setShowPdf] = useState(false);

    // Datos listos para ser reemplazados por un fetch de tu API
    const modificaciones = [
        { id: 1, titulo: "Primera Modificación 2024", fecha: "2024-02-10", url: "/pdf/mod1_2024.pdf" },
        { id: 2, titulo: "Segunda Modificación 2024", fecha: "2024-05-20", url: "/pdf/mod2_2024.pdf" },
    ];

    const togglePDF = () => {
        setShowPdf(!showPdf);
    };

    return (
        <main className="cmn-page">
            <section className="cmn-hero">
                <div className="hero-content">
                    <h1>CUADRO MULTIANUAL DE NECESIDADES 2024</h1>
                    <p>🌱 Dirección Regional de Agricultura Huancavelica 🌱</p>
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
                        title="CMN 2024"
                        src="/images/pdf/cmn2024/cnm2024.pdf"
                    />
                </div>
            )}

            {/* Lista de modificaciones */}
            <section className="cmn-section">
                <h2>VEA TODAS LAS MODIFICACIONES DEL CMN 2024</h2>
                <p className="descripcion">
                    Aquí se muestran las modificaciones publicadas del Cuadro Multianual de Necesidades 2024.
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

export default Cmn2024Page;