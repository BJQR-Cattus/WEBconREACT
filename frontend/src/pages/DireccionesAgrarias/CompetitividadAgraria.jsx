import { useState } from "react";
import "./Direcciones.css";

function CompetitividadAgraria() {
    const descripcion = [
        "La Dirección de Competitividad Agraria es el órgano encargado de facilitar a los productores a nivel regional y nacional la convocatoria y concertación de servicios de organismos públicos, organismos no gubernamentales y empresas privadas con la finalidad de contribuir al logro de la rentabilidad de sus actividades económicas y de las cadenas productivas en las que intervienen.",
        "Depende jerárquicamente de la Dirección Regional Agraria y está a cargo de un funcionario con el cargo de Director.",
        "Asimismo, propone políticas e instrumentos que faciliten la formación y puesta en marcha de las cadenas productivas, promoviendo el incremento sostenido de la rentabilidad en coordinación con la Oficina de Planificación.",
        "Diseña y supervisa la actualización de la base de datos de las principales cadenas productivas y organiza la red de enlace con los órganos, proyectos y organismos públicos descentralizados que brindan servicios al productor agrario.",
        "Apoya a las Agencias Agrarias en la concertación con instituciones públicas y privadas para resolver los problemas que afectan a los productores y fortalecer el desarrollo competitivo del sector.",
    ];

    const funciones = [ 
        {
            titulo: "Liderazgo en la articulación institucional",
            imagen: "/images/galeria/img/agencias/agencia1.png",
            descripcion:
                "Conduce y articula estratégicamente la red de enlace con organismos públicos y privados para garantizar una coordinación efectiva de los servicios dirigidos a los productores.",
        },
        {
            titulo: "Incremento de la competitividad",
            imagen: "/images/galeria/img/agencias/agencia2.png",
            descripcion:
                "Promueve políticas e instrumentos que permitan incrementar de manera sostenida la rentabilidad de las cadenas productivas regionales.",
        },
        {
            titulo: "Gestión de información",
            imagen: "/images/galeria/img/agencias/agencia3.png",
            descripcion:
                "Diseña, administra y actualiza la base de datos de las principales cadenas productivas como herramienta para la toma de decisiones.",
        },
        {
            titulo: "Asistencia técnica",
            imagen: "/images/galeria/img/agencias/agencia4.png",
            descripcion:
                "Brinda apoyo permanente a las Agencias Agrarias para fortalecer la atención a los productores y solucionar los principales problemas del sector.",
        },
    ];

    const objetivos = [
        {
            icono: "fas fa-seedling",
            titulo: "Competitividad",
            texto:
                "Incrementar la competitividad de los productores agrarios mediante cadenas productivas sostenibles.",
        },
        {
            icono: "fas fa-handshake",
            titulo: "Articulación",
            texto:
                "Fortalecer la coordinación entre instituciones públicas, privadas y organizaciones de productores.",
        },
        {
            icono: "fas fa-chart-line",
            titulo: "Rentabilidad",
            texto:
                "Impulsar el crecimiento económico de las actividades agrarias mediante estrategias sostenibles.",
        },
        {
            icono: "fas fa-database",
            titulo: "Información",
            texto:
                "Contar con información estadística actualizada para apoyar la planificación y toma de decisiones.",
        },
    ];

    const agenciasFunciones = [
        "Velar por el cumplimiento de la normativa y lineamientos de política agraria.",
        "Promover el desarrollo de productores organizados mediante cadenas productivas.",
        "Brindar servicios de extensión agraria, asistencia técnica y capacitación.",
        "Promover la conservación y biodiversidad de los cultivos nativos.",
        "Impulsar la transformación y comercialización de productos agropecuarios.",
        "Orientar y evaluar el servicio de información agraria regional.",
        "Velar por el cumplimiento de las normas sobre recursos naturales.",
        "Formular diagnósticos agrarios provinciales.",
        "Facilitar la articulación entre productores e instituciones públicas y privadas.",
        "Participar en la gestión sostenible del recurso hídrico.",
        "Formular planes y proyectos agrarios.",
        "Cumplir las demás funciones asignadas por la Dirección Regional Agraria.",
    ];

    const galeria = [
        {
            src: "/images/galeria/img/agencias/agencia1.png",
            alt: "Competitividad Agraria 1",
        },
        {
            src: "/images/galeria/img/agencias/agencia2.png",
            alt: "Competitividad Agraria 2",
        },
        {
            src: "/images/galeria/img/agencias/agencia3.png",
            alt: "Competitividad Agraria 3",
        },
        {
            src: "/images/galeria/img/agencias/agencia4.png",
            alt: "Competitividad Agraria 4",
        },
        {
            src: "/images/galeria/img/agencias/agencia5.png",
            alt: "Competitividad Agraria 5",
        },
        {
            src: "/images/galeria/img/agencias/agencia6.png",
            alt: "Competitividad Agraria 6",
        },
        {
            src: "/images/galeria/img/agencias/agencia7.png",
            alt: "Competitividad Agraria 7",
        },
        {
            src: "/images/galeria/img/agencias/agencia8.png",
            alt: "Competitividad Agraria 8",
        },
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
                <h1 className="page-title">DIRECCIÓN DE COMPETITIVIDAD AGRARIA</h1>
            </section>

            {/* DIRECTOR */}
            <section className="encargado-section">
                <img
                    src="/images/homes/img_index/director.png"
                    alt="Director"
                    className="foto-encargado"
                />

                <h2 className="nombre">ING. ____NOMBRE_____ </h2>
                <p className="cargo">Director de Competitividad Agraria</p>
            </section>

            {/* ¿QUÉ ES? */}
            <section className="presentacion-section">
                <div className="presentacion-banner">
                    <div className="presentacion-overlay">
                        <h2>¿Qué es la Dirección de Competitividad Agraria?</h2>
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
                    Objetivos Estratégicos
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

            {/* AGENCIAS AGRARIAS */}
            <section className="agencias-section">
                <div className="agencias-section-container">
                    <div className="agencias-header">
                        <h2 className="agencias-title">
                            <i class="fas fa-map-marked-alt"></i> AGENCIAS AGRARIAS
                        </h2>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia6.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 56</h3>
                                <h4>Definición y Liderazgo</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                Las Agencias Agrarias son órganos desconcentrados de la Dirección
                                Regional Agraria, encargadas de ejecutar, orientar, supervisar y
                                evaluar las políticas nacionales y regionales del sector agrario
                                dentro de su jurisdicción. Están a cargo de un funcionario con
                                categoría de Director, quien depende jerárquicamente del Director
                                Regional Agrario.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2 (Ahora tiene la misma estructura ordenada) */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia7.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 57</h3>
                                <h4>Desarrollo y Fortalecimiento</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                Las Agencias Agrarias promueven el desarrollo agrícola mediante la
                                asistencia técnica, el fortalecimiento de cadenas productivas, la
                                articulación comercial y la gestión de servicios orientados al
                                desarrollo sostenible del sector agrario. Las funciones
                                principales incluyen:
                            </p>
                            <ul className="agencia-funciones-list">
                                {agenciasFunciones.map((funcion, index) => (
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

export default CompetitividadAgraria;
