import { useState } from "react";
import "./Direcciones.css";

function CultivosGanaderia() {
    const descripcion = [
        "La Dirección de Cultivos Nativos y Ganadería Regional, de la Dirección Regional Agraria Huancavelica, es la encargada de mejorar los niveles de producción y productividad agropecuaria, propiciando el desarrollo competitivo exportable, además de promover y fortalecer las capacidades de gestión empresarial de los productores agropecuarios en el marco de la asociatividad.",
        "Promueve el incremento y la rentabilidad de los cultivos nativos: Kiwicha, Tarwi, Olluco, Mashua y Occa; propiciando la crianza de Vacunos, Ovinos, Porcinos y Caprinos, que promoverán el desarrollo de los productores agropecuarios de la región Huancavelica.",
        "El objetivo central es Promover, Asesorar y Supervisar el Desarrollo, Conservación, Manejo, Mejoramiento y Aprovechamiento de Cultivos Nativos y otras especies de Ganadería Regional.",
        "Mejorar los niveles de competitividad regional a través del fomento de la inversión pública y privada, y el desarrollo de las actividades productivas.",
    ];

    const descripcionEncargado =
        "El objetivo central es Promover, Asesorar, y Supervisar el Desarrollo, Conservación, Manejo, Mejoramiento y Aprovechamiento de Cultivos Nativos y otras especies de Ganadería Regional.";

    const funciones = [
        {
            titulo: "Conservación de Ecosistemas",
            imagen: "/images/galeria/img/agencias/agencia6.png",
            descripcion:
                "Promueve la conservación y biodiversidad de los cultivos nativos, así como la preservación de sus ecosistemas altoandinos.",
        },
        {
            titulo: "Identidad Regional",
            imagen: "/images/galeria/img/agencias/agencia9.png",
            descripcion:
                "Impulsa el desarrollo de cultivos nativos y especies de ganadería regional como productos emblemáticos de identidad regional.",
        },
        {
            titulo: "Gestión de Riesgos",
            imagen: "/images/galeria/img/agencias/agencia3.png",
            descripcion:
                "Diseña e implementa planes preventivos que reduzcan los riesgos ante fenómenos naturales que puedan afectar a los cultivos nativos y la ganadería regional.",
        },
        {
            titulo: "Turismo Ecológico",
            imagen: "/images/galeria/img/agencias/agencia10.png",
            descripcion:
                "Desarrolla proyectos de turismo ecológico en coordinación con los organismos competentes de la región.",
        },
    ];

    const objetivos = [
        {
            icono: "fas fa-eye",
            titulo: "Visión",
            texto:
                "El Gobierno Regional de Huancavelica es una organización modelo para la gestión pública regional, que ha liderado el desarrollo integral y sostenible de la región.",
        },
        {
            icono: "fas fa-flag",
            titulo: "Misión",
            texto:
                "Organizar y conducir con eficacia, eficiencia y transparencia la gestión pública regional, en el marco de las políticas nacionales y sectoriales, concertando el esfuerzo del Gobierno Regional, Local y de la Sociedad Civil, promoviendo la inversión pública y privada para el desarrollo integral y sostenible de la región.",
        },
        {
            icono: "fas fa-bullseye",
            titulo: "Objetivo Central",
            texto:
                "Promover, Asesorar y Supervisar el Desarrollo, Conservación, Manejo, Mejoramiento y Aprovechamiento de Cultivos Nativos y otras especies de Ganadería Regional.",
        },
    ];

    const funcionesCultivos = [
        "Proponer normas a nivel regional para la protección, conservación, producción, mejoramiento, comercialización y transformación de cultivos nativos y ganadería regional, así como para la preservación de sus ecosistemas.",
        "Formular y dirigir propuestas técnicas, estrategias y lineamientos de política relacionados con la conservación, manejo y desarrollo de los sistemas de producción, transformación y comercialización de cultivos andinos y ganadería regional en sus ecosistemas y territorios altoandinos.",
        "Promover la conservación y biodiversidad de los cultivos nativos.",
        "Impulsar el desarrollo de cultivos nativos y especies de ganadería regional como productos emblemáticos de identidad regional.",
        "Alinear las políticas regionales con las políticas nacionales para el desarrollo de los cultivos andinos y ganadería regional.",
        "Identificar, elaborar y mantener actualizada una base de datos regional de instituciones públicas y privadas que presten servicios a los productores agropecuarios organizados y vinculados a la producción de cultivos nativos y ganadería regional.",
        "Desarrollar proyectos de turismo ecológico en coordinación con los organismos competentes de la región.",
        "Diseñar e implementar planes preventivos ante fenómenos naturales que puedan afectar a los cultivos nativos y ganadería regional.",
        "Implementar acciones que reduzcan los riesgos ante la ocurrencia de fenómenos naturales que afecten a los cultivos nativos y ganadería regional.",
        "Supervisar los procesos de exportación de cultivos nativos en coordinación con las organizaciones de productores, cumpliendo con las normativas establecidas.",
        "Cumplir con las demás funciones que le asigne la Dirección Regional Agraria y las que correspondan según las disposiciones legales vigentes.",
    ];

    const galeria = [
        { src: "/images/galeria/img/agencias/agencia10.png", alt: "Cultivos Nativos y Ganadería Regional 1" },
        { src: "/images/galeria/img/agencias/agencia9.png", alt: "Cultivos Nativos y Ganadería Regional 2" },
        { src: "/images/galeria/img/agencias/agencia8.png", alt: "Cultivos Nativos y Ganadería Regional 3" },
        { src: "/images/galeria/img/agencias/agencia7.png", alt: "Cultivos Nativos y Ganadería Regional 4" },
        { src: "/images/galeria/img/agencias/agencia6.png", alt: "Cultivos Nativos y Ganadería Regional 5" },
        { src: "/images/galeria/img/agencias/agencia5.png", alt: "Cultivos Nativos y Ganadería Regional 6" },
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
                <h1 className="page-title">DIRECCIÓN DE CULTIVOS NATIVOS Y GANADERÍA REGIONAL</h1>
            </section>

            {/* DIRECTOR */}
            <section className="encargado-section">
                <img
                    src="/images/homes/img_index/director.png"
                    alt="Director"
                    className="foto-encargado"
                />

                <h2 className="nombre">ING. MARCO ANTONIO DE LOS RIOS</h2>
                <p className="cargo">Director de Cultivos Nativos y Ganadería Regional</p>
                <p className="descripcion-encargado">{descripcionEncargado}</p>
            </section>

            {/* ¿QUÉ ES? */}
            <section className="presentacion-section">
                <div className="presentacion-banner">
                    <div className="presentacion-overlay">
                        <h2>¿Qué es la Dirección de Cultivos Nativos y Ganadería Regional?</h2>
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
                            <i class="fas fa-seedling"></i> CULTIVOS NATIVOS Y GANADERÍA REGIONAL
                        </h2>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia3.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 40</h3>
                                <h4>Definición</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Cultivos Nativos y Ganadería Regional es
                                responsable de promover, asesorar y supervisar el desarrollo,
                                conservación, manejo, mejoramiento y aprovechamiento de
                                cultivos nativos y ganadería regional.
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
                                <h3>ARTÍCULO N.º 41</h3>
                                <h4>Funciones de la Dirección</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Cultivos Nativos y Ganadería Regional tiene
                                las siguientes funciones:
                            </p>
                            <ul className="agencia-funciones-list">
                                {funcionesCultivos.map((funcion, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {funcion}
                                    </li>
                                ))}
                            </ul>
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

export default CultivosGanaderia;