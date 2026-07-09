import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Estilos base de Swiper + módulos usados (coverflow y paginación)
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Agencia.css";

function AgenciaHuaytara() {
    // Imágenes del carrusel principal (coverflow) - Mantenemos el arreglo del formato original
    const slides = [
        "/images/galeria/img/agencias/agencia1.png",
        "/images/galeria/img/agencias/agencia2.png",
        "/images/galeria/img/agencias/agencia3.png",
        "/images/galeria/img/agencias/agencia4.png",
        "/images/galeria/img/agencias/agencia5.png",
        "/images/galeria/img/agencias/agencia6.png",
        "/images/galeria/img/agencias/agencia7.png",
        "/images/galeria/img/agencias/agencia8.png",
        "/images/galeria/img/agencias/agencia1.png",
        "/images/galeria/img/agencias/agencia2.png",
        "/images/galeria/img/agencias/agencia3.png",
        "/images/galeria/img/agencias/agencia4.png",
    ];

    const vision =
        "En el 2015, el desarrollo de la Region Huancavelica se basa en el componente agrario, con la concertacion de sus diferentes instituciones y organizaciones empresariales de sus productores, quienes manejan tecnologia competitiva, sostenible y articulados a los mercados regionales, internos y externos haciendo uso racional de los recursos naturales, con ecoeficiencia e inclusion social.";

    const mision =
        "Conducir el desarrollo agrario, promoviendo el aprovechamiento sostenible de los recursos naturales, la competitividad, la equidad y la inclusion en el marco de la modernizacion y descentralizacion del estado, con la finalidad de contribuir al desarrollo rural y el mejoramineto de la calidad de vida de la poblacion.";

    const descripcionEncargado =
        "Nuestro Objetivo es prestar servicio de asistencia tecnica productivo, comercial y empresarial a los productores agropecuarios del ámbito de la Provincia de Huaytara, Asesoramiento y acompañamiento a productores individuales y asociaciones para mejorar la produccion agropecuaria y contribuir al desarrollo económico";

    return (
        <>
            <main>
                {/* CARRUSEL PRINCIPAL (Swiper coverflow) */}
                <section className="degradado-section">
                    <div className="swiper-container">
                        <Swiper
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 3,
                                slideShadows: true,
                            }}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                                1560: { slidesPerView: 3 },
                            }}
                            className="swiper"
                        >
                            {slides.map((src, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="swiper-slide"
                                    style={{ backgroundImage: `url(${src})` }}
                                />
                            ))}
                        </Swiper>
                    </div>

                    <div className="texto-container">
                        <h1>AGENCIA AGRARIA HUAYTARA</h1>
                        <h2>NOSOTROS</h2>
                        <p>
                            Promover el desarrollo de los productores agrarios organizados en cadenas productivas, en el marco de la cuenca como unidad de gestion de los recursos naturales, para lograr una gricultura desarrollada en terminos de sostenibilidad economica social y ambiental, ademas conducir el desarrollo.
                        </p>
                    </div>
                </section>

                <div className="objets-especifcs-h">
                    <h2>OBJETIVOS ESPECIFICOS DE LA AGENCIA AGRARIA HUAYTARA</h2>
                    <p>
                        - Brindar apoyo a productores agropecuarios con botiquines agropecuarios en las Sedes Agrarias
                        <br />- brindar aistencia tecnica en prevencion y control de plagas y enfermedades en cultivos priorizadas del ambito provincial.
                        <br />- brindar aistencia tecnica en prevencion y control de enfermedades parasitariasen crianzas priorizadas del ambito de la provincia
                        <br />- Promover la participacion de los productores individuales, asociativas y comunales en ferias y eventos agropecuarios, para la articulación comercial en las diferentes cadenas de valor. Art.N° 051 - funcion"j"
                        <br />- fortalecer capacidadesy asistencia tecnicaa productores agropecuarios insertadas en cadena de valor en temas de buenas practicas agricolas (BPA) buenas practicas ganaderas (BPG) y comercializacion.
                        <br />- Realizar inseminacion artificial en vacunos
                        <br />- apoyo a la produccion forestal y/o fruticola/viveros.
                        <br />- Elaboracion de manuales de extension agraria para mejorar la productividad agropecuario
                        <br />- Instalacion de parcelas demostrativas de cultivos promisorias y hortalizas con enfoque organico
                        <br />- Asistencia tecnica focalizada a productores con certificacion organica.
                        <br />- Gestionar y acompanar para la certificacion organica de productores organizados
                        <br />- Inventariar la infraestructura de riego
                        <br />- Recopilacion, consolidacion, validacion y difusion de la Informacion estadistica agricola, pecuaria, insumos y servicios agropecuarios a nivel provincial.
                    </p>
                </div>
            </main>

            {/* VISIÓN Y MISIÓN */}
            <section id="vis_mis">
                <div className="vision">
                    <h2>VISIÓN</h2>
                    <p>{vision}</p>
                </div>
                <div className="mision">
                    <h2>MISIÓN</h2>
                    <p>{mision}</p>
                </div>
            </section>

            {/* DIRECTOR */}
            <div id="directora-info">
                <div className="director-img">
                    {/* Ruta de imagen respetada según el HTML */}
                    <img src="/images/homes/img_index/director.png" alt="Foto del Director" />
                </div>
                <p><span className="director-name">ING. CARLOS ANDRES NAVARRO BOBADILLA</span></p>
                <p><span className="director-cargo">DIRECTOR DE LA AGENCIA AGRARIA HUAYTARA</span></p>
                <p className="director-description">{descripcionEncargado}</p>
            </div>

            <div className="boreal-line"></div>

            {/* CARRUSEL DE ALIADOS (CSS puro, loop infinito) */}
            <section className="aliados-carousel-container">
                <h2 className="aliados-titulo">NUESTROS ALIADOS</h2>
                <div className="aliados-slider">
                    <div className="aliados-slide-track">
                        {/* Duplicamos los slides para el efecto de loop infinito */}
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="aliados-slide">
                                {/* Rutas de los partners respetadas según el HTML */}
                                <img
                                    src={`/images/galeria/img/img_aliados/aliados${(i % 8) + 1}.png`}
                                    alt={`Logo del aliado ${(i % 8) + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AgenciaHuaytara;