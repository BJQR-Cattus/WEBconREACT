import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Estilos base de Swiper + módulos usados (coverflow y paginación)
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Agencia.css";

function AgenciaHuancavelica() {
    // Imágenes del carrusel principal (coverflow)
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
        "Nuestro Objetivo es propiciar la seguridad jurídica de los propietarios de predios rurales y generar las condiciones basicas para el desarrollo del mercado de tierras de uso agrario, el incremento de la inversión privada en el agro y su acceso al credito formal.";

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
                        <h1>AGENCIA AGRARIA HUANCAVELICA</h1>
                        <h2>NOSOTROS</h2>
                        <p>
                            Con el progreso sostenible de nuestra region, con un enfoque prioritario en el sector agrario. Nuestra vision para el 2024 y mas alla es clara: imaginamos una region donde los productores locales, en colaboracion con diversas instituciones y organizaciones empresariales, implementen tecnologias competitivas y sostenibles. Estos esfuerzos aseguran que nuestros productos esten integrados eficazmente en los mercados regionales, nacionales e internacionales, siempre promoviendo un uso racional de los recursos naturales, la ecoeficiencia y la inclusion social.
                        </p>
                    </div>
                </section>
            </main>

            {/* DIRECTOR */}
            <div id="directora-info">
                <div className="director-img">
                    <img src="/images/homes/img_index/director.png" alt="Foto del Director" />
                </div>
                <p><span className="director-name">ING.  nombre y apellido </span></p>
                <p><span className="director-cargo">DIRECTOR DE LA AGENCIA AGRARIA HUANCAVELICA</span></p>
                <p className="director-description">{descripcionEncargado}</p>
            </div>

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

            <div className="boreal-line"></div>

            {/* CARRUSEL DE ALIADOS (CSS puro, loop infinito) */}
            <section className="aliados-carousel-container">
                <h2 className="aliados-titulo">NUESTROS ALIADOS</h2>
                <div className="aliados-slider">
                    <div className="aliados-slide-track">
                        {/* Duplicamos los slides para el efecto de loop infinito */}
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="aliados-slide">
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

export default AgenciaHuancavelica;