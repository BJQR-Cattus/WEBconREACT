import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Estilos base de Swiper + módulos usados (coverflow y paginación)
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Agencia.css";

function AgenciaAngaraes() {
    // Imágenes del carrusel principal (coverflow) - mismas rutas usadas en las demás agencias
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
        "En el 2015, el desarrollo de la Región Huancavelica se basa en el componente agrario, con la concertación de sus diferentes instituciones y organizaciones empresariales de sus productores, quienes manejan tecnología competitiva, sostenible y articulados a los mercados regionales, internos y externos haciendo uso racional de los recursos naturales, con ecoeficiencia e inclusión social.";

    const mision =
        "Conducir el desarrollo agrario, promoviendo el aprovechamiento sostenible de los recursos naturales, la competitividad, la equidad y la inclusión en el marco de la modernización y descentralización del estado, con la finalidad de contribuir al desarrollo rural y el mejoramiento de la calidad de vida de la población.";

    const descripcionEncargado =
        "Nuestro objetivo es propiciar la seguridad jurídica de los propietarios de predios rurales y generar las condiciones básicas para el desarrollo del mercado de tierras de uso agrario, el incremento de la inversión privada en el agro y su acceso al crédito formal.";

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
                        <h1>AGENCIA AGRARIA ANGARAES</h1>
                        <h2>NOSOTROS</h2>
                        <p>
                            Bienvenidos a la Agencia Agraria Angaraes. Estamos
                            comprometidos con el desarrollo integral de la Región
                            Huancavelica, impulsando el crecimiento del sector agrario y
                            el bienestar de nuestros productores.
                        </p>
                    </div>
                </section>
            </main>

            {/* DIRECTOR */}
            <div id="directora-info">
                <div className="director-img">
                    <img src="/images/homes/img_index/director.png" alt="Foto de Director" />
                </div>
                <p><span className="director-name">ING. DIRECTOR._. </span></p>
                <p><span className="director-cargo">DIRECTOR DE LA AGENCIA AGRARIA ANGARAES</span></p>
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
                        {/* Duplicamos los slides para el efecto de loop infinito
                        La medida recomendada para la img es: 455x170 */}
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

export default AgenciaAngaraes;