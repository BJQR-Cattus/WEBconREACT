import { useState } from "react";
import "./Direcciones.css";

function Forestal() {
    const descripcion = [
        "La Dirección Regional Agraria Huancavelica es el ente rector de la actividad agraria en el ámbito de nuestra región. La Dirección Forestal, Fauna Silvestre y Asuntos Ambientales es el órgano de línea que promueve, fiscaliza y propone políticas de desarrollo sostenible de los recursos forestales, fauna silvestre y asuntos ambientales de su competencia.",
        "El Plan Operativo Institucional es el instrumento de gestión de los objetivos estratégicos, específicos y actividades que desarrolla, con la finalidad de contribuir en el desarrollo regional integral sostenible de los recursos naturales y el medio ambiente, a fin de no afectar el bienestar de las futuras generaciones. Esta Dirección es la encargada de conducir la dimensión de Protección del Medio Ambiente y los Recursos Naturales.",
        "En la actualidad, uno de los problemas álgidos de la región es el uso irracional de los recursos naturales y el deterioro del recurso suelo, agua y aire, provocado por las actividades económicas irresponsables de las empresas y la población en general. La región Huancavelica es una de las regiones más vulnerables al efecto del cambio climático por su situación de extrema pobreza, puesto que estas poblaciones son más vulnerables a sus efectos negativos.",
    ];

    const descripcionEncargado =
        "En la actualidad, uno de los problemas álgidos de la región es el uso irracional de los recursos naturales y el deterioro del recurso suelo, agua y aire, provocado por las actividades económicas irresponsables de las empresas y la población en general.";

    const funciones = [
        {
            titulo: "Manejo Forestal Sostenible",
            imagen: "/images/galeria/img/agencias/agencia6.png",
            descripcion:
                "Aprueba planes de manejo forestal y de fauna silvestre de acuerdo a los lineamientos establecidos por la autoridad nacional.",
        },
        {
            titulo: "Control y Vigilancia",
            imagen: "/images/galeria/img/agencias/agencia9.png",
            descripcion:
                "Implementa los sistemas de control y vigilancia forestal y de fauna silvestre, controlando el transporte y comercialización de estos recursos.",
        },
        {
            titulo: "Protección de Especies",
            imagen: "/images/galeria/img/agencias/agencia3.png",
            descripcion:
                "Propone la lista de especies de flora y fauna silvestre amenazadas y promueve la evaluación poblacional de las especies en su jurisdicción.",
        },
        {
            titulo: "Gestión Ambiental Agraria",
            imagen: "/images/galeria/img/agencias/agencia10.png",
            descripcion:
                "Promueve un adecuado desarrollo de la gestión ambiental agraria y gestiona la aprobación de los Estudios de Impacto Ambiental del sector.",
        },
    ];

    const objetivos = [
        {
            icono: "fas fa-eye",
            titulo: "Visión",
            texto:
                "Articular las acciones intersectoriales y de la sociedad civil, con la finalidad de lograr el uso sostenible, responsable, racional y ético de los recursos naturales.",
        },
        {
            icono: "fas fa-flag",
            titulo: "Misión",
            texto:
                "Organizar y conducir con eficacia, eficiencia y transparencia la gestión pública regional, en el marco de las políticas nacionales y sectoriales, concertando el esfuerzo del Gobierno Regional, Local y de la Sociedad Civil.",
        },
        {
            icono: "fas fa-leaf",
            titulo: "Protección Ambiental",
            texto:
                "Conducir la dimensión de Protección del Medio Ambiente y los Recursos Naturales, contribuyendo al desarrollo regional integral sostenible.",
        },
    ];

    const funcionesForestal = [
        "Formular y aprobar planes y normatividad para la conservación y el aprovechamiento sostenible de los recursos forestales y de fauna silvestre en el ámbito de su jurisdicción, en concordancia con la política nacional.",
        "Implementar en el ámbito de jurisdicción las políticas, planes y normatividad aprobados por la autoridad nacional.",
        "Aprobar planes de manejo forestal y de fauna silvestre de acuerdo a los lineamientos establecidos por la autoridad nacional y a normas establecidas.",
        "Realizar labores de promoción y fiscalización sobre la conservación y el aprovechamiento sostenible de los recursos forestales y de fauna silvestre.",
        "Promover, aprobar y supervisar la gestión forestal y de fauna silvestre y los comités de gestión de bosque en el ámbito de su jurisdicción conforme a la normatividad establecida.",
        "Promover la conformación y reconocer los Comités de Gestión de Bosque, facilitando su participación en el control y vigilancia de los recursos forestales y de fauna silvestre.",
        "Implementar el sistema de información integrada en el ámbito regional, en materia de recursos forestales y de fauna silvestre, y remitir la información generada a la autoridad nacional.",
        "Proponer la lista de especies de flora y fauna silvestre amenazadas en el ámbito de su jurisdicción, así como la lista de ecosistemas frágiles, de acuerdo a los lineamientos de la autoridad nacional.",
        "Promover y apoyar la realización de las evaluaciones poblacionales sobre la situación de las especies de flora y fauna silvestres, supervisando el cumplimiento de los lineamientos establecidos.",
        "Implementar los sistemas de control y vigilancia forestal y de fauna silvestre para el ámbito de su jurisdicción, de acuerdo a los lineamientos de la autoridad nacional.",
        "Controlar y vigilar el transporte y la comercialización de los recursos forestales y de fauna silvestre en el ámbito de su jurisdicción, así como autorizar y fiscalizar la emisión de guías de transporte.",
        "Promover y registrar áreas de manejo de fauna silvestre en el ámbito de su jurisdicción, previa autorización para su funcionamiento de acuerdo a la normatividad vigente.",
        "Concertar con las autoridades competentes para hacer cumplir las disposiciones del sistema de control y vigilancia de los productos o especímenes de flora y fauna silvestre.",
        "Proponer e implementar los registros forestales y de fauna silvestre en el ámbito regional de acuerdo a los lineamientos de la autoridad nacional.",
        "Mantener actualizados los registros forestales y de fauna silvestre en el ámbito de su jurisdicción.",
        "Implementar el ordenamiento del patrimonio forestal regional, así como el inventario, evaluación, catastro y registro oficial de los recursos forestales y de fauna silvestre y la zonificación forestal.",
        "Otorgar y supervisar los permisos y autorizaciones para el aprovechamiento de fauna silvestre en el ámbito de su jurisdicción de acuerdo a las políticas y normatividad nacional establecidas.",
        "Otorgar y supervisar las autorizaciones en asociaciones vegetales en el ámbito de su jurisdicción, de acuerdo a las normas nacionales.",
        "Otorgar y supervisar los Contratos de Administración de Bosques Locales en el ámbito de su jurisdicción, de acuerdo a las normas nacionales.",
        "Otorgar y supervisar los permisos de extracción forestal a Comunidades Campesinas ubicadas en el ámbito de su jurisdicción, de acuerdo a las normas nacionales.",
        "Otorgar y supervisar los permisos de extracción en predios privados ubicados en el ámbito de su jurisdicción, de acuerdo a las normas nacionales.",
        "Otorgar licencias de caza comercial o deportiva en el ámbito de su jurisdicción, de acuerdo a las normas nacionales.",
        "Otorgar y supervisar las autorizaciones para la caza comercial o deportiva de ejemplares de fauna silvestre, de acuerdo al calendario nacional aprobado por la autoridad nacional.",
        "Autorizar la caza sanitaria y disponer de sus despojos para su incineración o para su uso por una institución científica, de acuerdo a la normatividad nacional vigente.",
        "Imponer sanciones a quienes infrinjan la legislación sobre la fauna silvestre y realizar el seguimiento hasta su efectivización.",
        "Coordinar con la Gerencia Regional de Recursos Naturales y Gestión del Medio Ambiente el aprovechamiento sostenible de los recursos naturales de su competencia, y proponer planes, programas y proyectos para reducir la vulnerabilidad y adaptación al cambio climático en el sector agrario.",
        "Participar en el Sistema Regional del Medio Ambiente, en coordinación con la Comisión Regional del Medio Ambiente, en el marco de la Estrategia Nacional de Adaptación del Sector Agrario al Cambio Climático.",
        "Promover un adecuado desarrollo de la gestión ambiental agraria.",
        "Gestionar la aprobación de los Estudios de Impacto Ambiental en el Sector Agrario, ante las instancias competentes.",
        "Las demás que le asigne la Dirección Regional Agraria y las que correspondan por disposiciones legales vigentes.",
    ];

    const galeria = [
        { src: "/images/galeria/img/agencias/agencia10.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 1" },
        { src: "/images/galeria/img/agencias/agencia9.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 2" },
        { src: "/images/galeria/img/agencias/agencia8.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 3" },
        { src: "/images/galeria/img/agencias/agencia7.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 4" },
        { src: "/images/galeria/img/agencias/agencia6.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 5" },
        { src: "/images/galeria/img/agencias/agencia5.png", alt: "Dirección Forestal, Fauna Silvestre y Asuntos Ambientales 6" },
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
                <h1 className="page-title">DIRECCIÓN FORESTAL, FAUNA SILVESTRE Y ASUNTOS AMBIENTALES</h1>
            </section>

            {/* DIRECTOR */}
            <section className="encargado-section">
                <img
                    src="/images/homes/img_index/director.png"
                    alt="Director"
                    className="foto-encargado"
                />

                <h2 className="nombre">ING. CESAR VILA ACUÑA</h2>
                <p className="cargo">Director Forestal, Fauna Silvestre y Asuntos Ambientales</p>
                <p className="descripcion-encargado">{descripcionEncargado}</p>
            </section>

            {/* ¿QUÉ ES? */}
            <section className="presentacion-section">
                <div className="presentacion-banner">
                    <div className="presentacion-overlay">
                        <h2>¿Qué es la Dirección Forestal, Fauna Silvestre y Asuntos Ambientales?</h2>
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
                            <i class="fas fa-tree"></i> FORESTAL, FAUNA SILVESTRE Y ASUNTOS AMBIENTALES
                        </h2>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="agencia-card">
                        <div
                            className="agencia-card-image"
                            style={{ backgroundImage: "url('/images/galeria/img/agencias/agencia3.png')" }}
                        >
                            <div className="agencia-image-overlay">
                                <h3>ARTÍCULO N.º 43</h3>
                                <h4>Definición</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Forestal, Fauna Silvestre y Asuntos
                                Ambientales es la encargada de proponer, ejecutar, dirigir,
                                controlar y administrar los planes y políticas regionales y
                                nacionales para el aprovechamiento sostenible del recurso
                                forestal y de fauna silvestre, los recursos genéticos
                                asociados en el ámbito de su competencia; así como de la
                                gestión ambiental en concordancia con la Política Nacional y
                                Regional del Ambiente.
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
                                <h3>ARTÍCULO N.º 44</h3>
                                <h4>Funciones de la Dirección</h4>
                            </div>
                        </div>
                        <div className="agencia-card-content">
                            <p>
                                La Dirección de Forestal, Fauna Silvestre y Asuntos
                                Ambientales tiene las siguientes funciones:
                            </p>
                            <ul className="agencia-funciones-list">
                                {funcionesForestal.map((funcion, index) => (
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

export default Forestal;