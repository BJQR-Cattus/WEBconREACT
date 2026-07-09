import { useState } from "react";
import "./Direcciones.css";

function GestionRecursosHidricos() {
    const descripcion = [
        "La Dirección de Gestión de Recursos Hídricos de la Dirección Regional Agraria Huancavelica está encargada de cumplir los lineamientos de política de la Gestión Integral de los Recursos Hídricos en el ámbito regional. La Política y Estrategia Nacional de Recursos Hídricos del Perú está conformada por un conjunto de principios, políticas, estrategias y lineamientos.",
        "Este documento es un instrumento de carácter público que define y orienta el accionar de las entidades del sector público y privado para garantizar la atención de la demanda y el mejor uso del agua del país en el corto y largo plazo, en el marco de la Ley de Recursos Hídricos N.º 29338.",
        "La infraestructura hidráulica mayor pública que transfiera el Gobierno Nacional a los Gobiernos Regionales es operada bajo los lineamientos y principios de la Ley, así como las directivas que emita la Autoridad Nacional del Agua.",
        "El Gobierno Regional de Huancavelica, como lineamiento político de gestión de gobierno, ha decidido impulsar el valor del agua en el ámbito de la jurisdicción regional, dada la importancia de que el agua es \"VIDA\", conforme dispone la Ley Orgánica de los Gobiernos Regionales, Ley N.º 27867, en su Artículo 4.º - Finalidad: los gobiernos regionales tienen por finalidad esencial fomentar el desarrollo regional integral sostenible, promoviendo la inversión pública y privada, el empleo, y garantizando el ejercicio pleno de los derechos y la igualdad de oportunidades de sus habitantes, de acuerdo con los planes y programas nacionales, regionales y locales de desarrollo.",
    ];

    const descripcionEncargado =
        "Somos los encargados de construir una política de gestión eficiente y sostenible de los recursos hídricos en la región de Huancavelica, implementando una gobernanza hídrica a través de la implementación del Proyecto Especial YAKU TARPUY, para lo cual se ejecutarán estudios y proyectos de siembra y cosecha de agua de lluvia.";

    const funciones = [
        {
            titulo: "Conservación de Fuentes de Agua",
            imagen: "/images/galeria/img/agencias/agencia6.png",
            descripcion:
                "Implementa medidas correctivas en la recuperación y restauración de las fuentes naturales de agua y de la infraestructura hidráulica en el ámbito regional.",
        },
        {
            titulo: "Investigación Hídrica",
            imagen: "/images/galeria/img/agencias/agencia9.png",
            descripcion:
                "Promueve, apoya y participa en trabajos de investigación sobre el uso y aprovechamiento sostenible del recurso hídrico.",
        },
        {
            titulo: "Cultura del Agua",
            imagen: "/images/galeria/img/agencias/agencia3.png",
            descripcion:
                "Impulsa acciones de capacitación, información y transferencia de tecnología a las organizaciones de usuarios de agua.",
        },
        {
            titulo: "Gestión de Proyectos",
            imagen: "/images/galeria/img/agencias/agencia10.png",
            descripcion:
                "Formula y gestiona proyectos de inversión pública y privada orientados al aprovechamiento hídrico en el sector agrario.",
        },
    ];

    const objetivos = [
        {
            icono: "fas fa-bullseye",
            titulo: "Objetivo General",
            texto:
                "Construir una política de gestión eficiente y sostenible de los recursos hídricos en la región de Huancavelica, implementando una gobernanza hídrica a través del Proyecto Especial YAKU TARPUY, ejecutando estudios y proyectos de siembra y cosecha de agua de lluvia.",
        },
        {
            icono: "fas fa-tint",
            titulo: "Productividad Agropecuaria",
            texto:
                "Contribuir al desarrollo agropecuario de la región Huancavelica mediante la ejecución de proyectos de inversión pública que incrementen la productividad y producción agropecuaria a través del mejoramiento del sistema de riego de las fronteras agrícolas.",
        },
        {
            icono: "fas fa-cloud-rain",
            titulo: "Siembra y Cosecha de Agua",
            texto:
                "Implementar los sistemas de siembra y cosecha de agua de lluvia, considerando el manejo integrado de los recursos hídricos, enfocado tanto en el abastecimiento como en la demanda de agua, teniendo en cuenta los factores ambientales, sociales y económicos.",
        },
    ];

    const funcionesHidricas = [
        "Participar en las acciones de los recursos hídricos para su conservación y aprovechamiento.",
        "Implementar la aplicación de medidas correctivas en la recuperación y restauración de las fuentes naturales de agua y de la infraestructura hidráulica en el ámbito regional, en armonía con la política nacional sobre la materia.",
        "Promover, apoyar y participar en trabajos de investigación sobre el uso y aprovechamiento del recurso hídrico.",
        "Promover y participar en la elaboración de los planes de consejos de cuencas creadas por cuencas hidrográficas.",
        "Participar en la elaboración del Plan de Ordenamiento Territorial en sus diferentes escalas y en el ámbito de su competencia.",
        "Proponer y participar en programas de cooperación nacional e internacional para el desarrollo de estudios y proyectos sobre sistemas de riego y drenaje.",
        "Promover el perfeccionamiento de procesos técnicos que garanticen la conservación y el aprovechamiento de los recursos hídricos en las actividades agrícolas.",
        "Apoyar en el seguimiento y monitoreo de las acciones que ejecutan diversos programas y proyectos sectoriales e intersectoriales en el ámbito de su competencia.",
        "Participar en la formulación y gestión de proyectos de inversión pública y privada en el ámbito de su competencia.",
        "Participar en la evaluación de proyectos de saneamiento físico-legal en tierras agrarias y eriazas, en coordinación con la Dirección de Saneamiento de la Propiedad Agraria.",
        "Promover y participar en acciones de capacitación, información y transferencia de tecnología a las organizaciones de usuarios de agua en temas relacionados a la cultura del agua y a la gestión de recursos hídricos.",
        "Proponer y supervisar el desarrollo de las acciones relacionadas al aprovechamiento hídrico en el sector agrario.",
        "Las demás funciones que le asigne la Dirección Regional Agraria y las que correspondan por disposiciones legales vigentes.",
    ];

    const galeria = [
        { src: "/images/galeria/img/agencias/agencia10.png", alt: "Gestión de Recursos Hídricos 1" },
        { src: "/images/galeria/img/agencias/agencia9.png", alt: "Gestión de Recursos Hídricos 2" },
        { src: "/images/galeria/img/agencias/agencia8.png", alt: "Gestión de Recursos Hídricos 3" },
        { src: "/images/galeria/img/agencias/agencia7.png", alt: "Gestión de Recursos Hídricos 4" },
        { src: "/images/galeria/img/agencias/agencia6.png", alt: "Gestión de Recursos Hídricos 5" },
        { src: "/images/galeria/img/agencias/agencia5.png", alt: "Gestión de Recursos Hídricos 6" },
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
                <h1 className="page-title">DIRECCIÓN DE GESTIÓN DE RECURSOS HÍDRICOS</h1>
            </section>

            {/* DIRECTOR */}
            <section className="encargado-section">
                <img
                    src="/images/homes/img_index/director.png"
                    alt="Director"
                    className="foto-encargado"
                />

                <h2 className="nombre">ING. HECTOR LEOPOLDO PALACIOS FLORES</h2>
                <p className="cargo">Director de Gestión de Recursos Hídricos</p>
                <p className="descripcion-encargado">{descripcionEncargado}</p>
            </section>

            {/* ¿QUÉ ES? */}
            <section className="presentacion-section">
                <div className="presentacion-banner">
                    <div className="presentacion-overlay">
                        <h2>¿Qué es la Dirección de Gestión de Recursos Hídricos?</h2>
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
                            <i class="fas fa-water"></i> GESTIÓN DE RECURSOS HÍDRICOS
                        </h2>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia3.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 46</h3>
                                <h4>Definición y Liderazgo</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Gestión de Recursos Hídricos es la encargada de
                                ejercer acciones de conservación, uso óptimo y equitativo por su
                                valor económico ambiental con fines agrarios y, en tal sentido,
                                gestiona la distribución de agua de riego a cargo de las
                                organizaciones de usuarios de agua u otros operadores, bajo la
                                normativa que emita el Ministerio de Agricultura - ANA, dentro
                                del contexto de la cultura del agua. Asimismo, promueve y ejecuta
                                proyectos de afianzamiento hídrico; manejo adecuado y
                                conservación de los recursos hídricos y de suelos a nivel de las
                                cuencas hidrográficas.
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
                                <h3>ARTÍCULO N.º 47</h3>
                                <h4>Funciones de la Dirección</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Gestión de Recursos Hídricos tiene las
                                siguientes funciones:
                            </p>
                            <ul className="agencia-funciones-list">
                                {funcionesHidricas.map((funcion, index) => (
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

export default GestionRecursosHidricos;