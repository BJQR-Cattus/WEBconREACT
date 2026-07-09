import { useState } from "react";
import "./Direcciones.css";

function Saneamiento() {
    const descripcion = [
        "La Dirección de Saneamiento Físico Legal de la Propiedad Agraria es el ente administrativo adscrito a la Dirección Regional Agraria del Gobierno Regional de Huancavelica, la misma que, dentro del marco de transferencia de Competencias Nacionales a los Gobiernos Locales conforme a lo dispuesto por la Ley Orgánica de los Gobiernos Regionales (Art. 51°, función n), ha asumido competencia para efectuar las acciones tendentes al Saneamiento Físico Legal de predios rurales y comunidades campesinas (Propiedad Agraria).",
        "El Decreto Legislativo N.º 31145 establece el Régimen Temporal Extraordinario de Formalización y Titulación de Predios Rurales.",
        "El Decreto Supremo N.º 014-2022-MIDAGRI es el Reglamento del Decreto Legislativo N.º 31145.",
    ];

    const descripcionEncargado =
        "Nuestro objetivo es propiciar la seguridad jurídica de los propietarios de predios rurales y generar las condiciones básicas para el desarrollo del mercado de tierras de uso agrario, el incremento de la inversión privada en el agro y su acceso al crédito formal.";

    const funciones = [
        {
            titulo: "Reconocimiento de Comunidades",
            imagen: "/images/galeria/img/agencias/agencia6.png",
            descripcion:
                "Planea, programa y ejecuta las acciones de reconocimiento de Comunidades Campesinas, asesorando y capacitando a las comunidades del ámbito regional.",
        },
        {
            titulo: "Saneamiento Físico-Legal",
            imagen: "/images/galeria/img/agencias/agencia9.png",
            descripcion:
                "Ejecuta el saneamiento físico-legal de Comunidades Campesinas y de predios rurales individuales en el ámbito de su competencia.",
        },
        {
            titulo: "Adjudicación de Tierras",
            imagen: "/images/galeria/img/agencias/agencia3.png",
            descripcion:
                "Verifica tierras eriazas con aptitud agropecuaria de libre disponibilidad del Estado y gestiona la adjudicación de tierras rústicas con aptitud agropecuaria.",
        },
        {
            titulo: "Asesoría y Capacitación",
            imagen: "/images/galeria/img/agencias/agencia10.png",
            descripcion:
                "Orienta y capacita a los agricultores y comunidades campesinas en los procesos de formalización de la propiedad agraria.",
        },
    ];

    const objetivos = [
        {
            icono: "fas fa-eye",
            titulo: "Visión",
            texto:
                "El desarrollo de la región Huancavelica se basa en el componente agrario, con la concertación de sus diferentes instituciones y organizaciones empresariales de sus productores, quienes manejan tecnología competitiva, sostenible y articulada a los mercados regionales, internos y externos, haciendo uso racional de los recursos naturales, con ecoeficiencia e inclusión social.",
        },
        {
            icono: "fas fa-flag",
            titulo: "Misión",
            texto:
                "Conducir el desarrollo agrario, promoviendo el aprovechamiento sostenible de los recursos naturales, la competitividad, la equidad y la inclusión en el marco de la modernización y descentralización del Estado, contribuyendo al desarrollo rural y al mejoramiento de la calidad de vida de la población.",
        },
        {
            icono: "fas fa-balance-scale",
            titulo: "Seguridad Jurídica",
            texto:
                "Propiciar la seguridad jurídica de los propietarios de predios rurales y generar las condiciones básicas para el desarrollo del mercado de tierras de uso agrario y el acceso al crédito formal.",
        },
    ];

    const funcionesSaneamiento = [
        "Planear, programar y ejecutar las acciones de reconocimiento de Comunidades Campesinas.",
        "Asesorar, capacitar y orientar a las Comunidades Campesinas del ámbito regional en el proceso de reconocimiento.",
        "Levantamiento de reserva de dominio o carga registral o contractual de los Contratos de Otorgamiento de Tierras Eriazas.",
        "Verificación de tierras eriazas con aptitud agropecuaria de libre disponibilidad del Estado.",
        "Reversión a favor del Estado de los predios rústicos adjudicados a título gratuito.",
        "Adjudicación de tierras rústicas con aptitud agropecuaria.",
        "Reconocimiento de Comunidades Campesinas.",
        "Saneamiento físico-legal de Comunidades Campesinas.",
        "Saneamiento físico-legal de predios rurales individuales.",
        "Declaración de abandono legal de tierras de las comunidades campesinas.",
        "Las demás que le asigne la Dirección Regional Agraria y las que correspondan por disposiciones legales vigentes.",
    ];

    const galeria = [
        { src: "/images/galeria/img/agencias/agencia10.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 1" },
        { src: "/images/galeria/img/agencias/agencia9.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 2" },
        { src: "/images/galeria/img/agencias/agencia8.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 3" },
        { src: "/images/galeria/img/agencias/agencia7.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 4" },
        { src: "/images/galeria/img/agencias/agencia6.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 5" },
        { src: "/images/galeria/img/agencias/agencia5.png", alt: "Saneamiento Físico Legal de la Propiedad Agraria 6" },
    ];

    const [fotoActiva, setFotoActiva] = useState(null);

    const abrirFoto = (index) => setFotoActiva(index);

    const cerrarFoto = () => setFotoActiva(null);

    const fotoAnterior = () =>
        setFotoActiva((prev) => (prev - 1 + galeria.length) % galeria.length);

    const fotoSiguiente = () =>
        setFotoActiva((prev) => (prev + 1) % galeria.length);

    return (
        <main className="direccion-page">
            {/* HERO */}
            <section className="hero-section">
                <h1 className="page-title">DIRECCIÓN DE SANEAMIENTO FÍSICO LEGAL DE LA PROPIEDAD AGRARIA</h1>
            </section>

            {/* DIRECTOR */}
            <section className="encargado-section">
                <img
                    src="/images/homes/img_index/director.png"
                    alt="Director"
                    className="foto-encargado"
                />

                <h2 className="nombre">ING. OLMEDO AGUADO QUISPE</h2>
                <p className="cargo">Director de Saneamiento Físico Legal de la Propiedad Agraria</p>
                <p className="descripcion-encargado">{descripcionEncargado}</p>
            </section>

            {/* ¿QUÉ ES? */}
            <section className="presentacion-section">
                <div className="presentacion-banner">
                    <div className="presentacion-overlay">
                        <h2>¿Qué es la Dirección de Saneamiento Físico Legal de la Propiedad Agraria?</h2>
                    </div>
                </div>

                <div className="presentacion-content">
                    {descripcion.map((texto, index) => (
                        <p key={index}>{texto}</p>
                    ))}
                </div>
            </section>

            {/* FUNCIONES */}
            <section className="funciones-section">
                <h3>
                    <span><i class="fas fa-cogs"></i> Funciones Principales</span>
                </h3>

                <div className="funciones-grid">
                    {funciones.map((funcion, i) => (
                        <article className="funcion-card" key={i}>
                            <div
                                className="funcion-header"
                                style={{ backgroundImage: `url(${funcion.imagen})` }}
                            >
                                <h4>{funcion.titulo}</h4>
                            </div>

                            <div className="funcion-body">
                                <p>{funcion.descripcion}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* OBJETIVOS */}
            <section className="objetivos-section">
                <h3>
                    <i className="fas fa-bullseye"></i>
                    Objetivos
                </h3>

                <div className="objetivos-grid">
                    {objetivos.map((item, index) => (
                        <article className="objetivo-card" key={index}>
                            <div className="objetivo-icono">
                                <i className={item.icono}></i>
                            </div>
                            <h4>{item.titulo}</h4>
                            <p>{item.texto}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* MARCO NORMATIVO / ARTÍCULOS */}
            <section className="agencias-section">
                <div className="agencias-section-container">
                    <div className="agencias-header">
                        <h2 className="agencias-title">
                            <i class="fas fa-file-signature"></i> SANEAMIENTO FÍSICO-LEGAL DE LA PROPIEDAD AGRARIA
                        </h2>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia3.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 49</h3>
                                <h4>Define</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Saneamiento Físico-Legal de la Propiedad
                                Agraria es la encargada de ejecutar la formalización de la
                                propiedad agraria de los agricultores, en base a los
                                lineamientos de política regional y nacional.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia4.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 50</h3>
                                <h4>Funciones de la Dirección</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Saneamiento Físico-Legal de la Propiedad
                                Agraria tiene las siguientes funciones:
                            </p>
                            <ul className="agencia-funciones-list">
                                {funcionesSaneamiento.map((funcion, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {funcion}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia7.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 51</h3>
                                <h4>Estructura Funcional</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Saneamiento Físico-Legal de la Propiedad
                                Agraria, para fines del cumplimiento de sus metas y
                                objetivos, cuenta con una estructura funcional que le
                                permite ejecutar sus acciones en el ámbito de la región
                                Huancavelica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALERÍA */}
            <section className="galeria-section">
                <h3>
                    <i className="fas fa-images"></i>
                    Galería Institucional
                </h3>

                <div className="galeria-grid">
                    {galeria.map((foto, index) => (
                        <div
                            key={index}
                            className="galeria-item"
                            onClick={() => abrirFoto(index)}
                        >
                            <img src={foto.src} alt={foto.alt} />

                            <div className="galeria-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX */}

            {fotoActiva !== null && (
                <div className="lightbox-overlay" onClick={cerrarFoto}>
                    <button className="lightbox-close" onClick={cerrarFoto}>
                        <i className="fas fa-times"></i>
                    </button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            fotoAnterior();
                        }}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <img
                        className="lightbox-img"
                        src={galeria[fotoActiva].src}
                        alt={galeria[fotoActiva].alt}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            fotoSiguiente();
                        }}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    <p className="lightbox-caption">{galeria[fotoActiva].alt}</p>
                </div>
            )}
        </main>
    );
}

export default Saneamiento;