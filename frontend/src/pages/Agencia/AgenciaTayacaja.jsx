import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Estilos base de Swiper + módulos usados
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Agencia.css";

function AgenciaTayacaja() {
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
        "Nuestro objetivo es fortalecer las organizaciones de productores, y promover su integracion bajo el enfoque de cadenas productivas, además de establecer un sistema de información agraria que permita a los agentes economicos una buena toma de decisiones en el momento oportuno.";

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
                        <h1>AGENCIA AGRARIA TAYACAJA</h1>
                        <h2>NOSOTROS</h2>
                        <p>
                            En la Agencia de Desarrollo Agrario de Tayacaja, nos dedicamos a promover el crecimiento sostenible de nuestra region, con un enfoque en el sector agrario como pilar fundamental. Visualizamos un Tayacaja donde nuestros productores, en alianza con diversas instituciones y organizaciones empresariales, adopten tecnologías competitivas y sostenibles. Este enfoque nos permite integrarnos de manera efectiva en los mercados regionales, nacionales e internacionales, utilizando de manera racional los recursos naturales, promoviendo la ecoeficiencia y asegurando la inclusion social.
                        </p>
                    </div>
                </section>
            </main>

            {/* DIRECTOR */}
            <div id="directora-info">
                <div className="director-img">
                    <img src="/images/homes/img_index/director.png" alt="Foto del Director" />
                </div>
                <p><span className="director-name">ING. MOISES LUCIO FLORES AGUILA</span></p>
                <p><span className="director-cargo">DIRECTOR DE LA AGENCIA AGRARIA TAYACAJA</span></p>
                <p className="director-description">
                    {descripcionEncargado}
                    <br />
                </p>
            </div>

            {/* Sección 4: Bloques de Información */}
            <section id="info-blocks">
                <div className="info-block" style={{ backgroundImage: "url('/images/img/NuestraInstitucion/competencias.png')" }}>
                    <div className="info-content">
                        <h3 className="info-title">OBJETIVO GENERAL</h3>
                        <p className="info-text">
                            Facilitar a los productores agropecuarios, al acceso a servicios de asesoría jurídica, administrativa, gestión de financiamiento, asistencia técnica, sanidad, y otros que permitan mejorar la calidad de vida y la capacidad de gestión.
                        </p>
                    </div>
                </div>
                
                <div className="info-block" style={{ backgroundImage: "url('/images/img/galeria/competencias.png')" }}>
                    <div className="info-content">
                        <h3 className="info-title">OBJETIVOS ESPECIFICOS</h3>
                        <p className="info-text">
                            ✔ Cumplir con las actividades encomendadas en el Plan Operativo Institucional, 2024, resultando de ello el logro de las metas trazadas en dicho documento de gestión.
                            <br />
                            ✔ Organizar a los productores agrarios por línea de cultivo en Maíz amiláceo, Frejoles y Ganadería para el desarrollo de las cadenas productivas, para así facilitar su articulación con los agentes económicos y su acceso a los mercados más a una la participación en los fondos concursables.
                            <br />
                            ✔ Brindar asesoramiento técnico a través de charlas, capacitaciones y extensión agraria a través de visitas guidas en el mismo campo de acción.
                        </p>
                    </div>
                </div>
                
                <div className="info-block" style={{ backgroundImage: "url('/images/img/galeria/jurisdiccion.png')" }}>
                    <div className="info-content">
                        <h3 className="info-title">FUNCIONES</h3>
                        <p className="info-text">
                            La Agencia Agraria Tayacaja, es encargada de efectuar y desarrollar en su ámbito territorial, las acciones del Ministerio de Desarrollo Agrario y Riego, a través de la descentralización de los Gobiernos Regionales, haciendo cumplir las normas del sector agrario, en coordinación permanente con los Organismos Públicos y privados facilitando la solución de los problemas de los productores para la prestación de servicios que se brindan a través de los agentes económicos productivos que se detalla:
                            <br />1. Dirigir y controlar el cumplimiento de las normas, lineamientos y directivas internas y externas en el ámbito de su competencia.
                            <br />2. Formular y ejecutar el plan de asistencia técnica a los pequeños productores agrícolas y ganaderos para promover la conformación de unidades productivas sostenibles.
                            <br />3. Promover la asociatividad de los agentes agrícolas y ganaderos. Manual de Operaciones de la Dirección Regional de Agricultura.
                            <br />4. Desarrollar acciones para articular la oferta de servicios públicos en materia agrícola y ganadera, que brindan los programas, proyectos especiales, centro regional de innovación y organismos competentes.
                            <br />5. Promover el fortalecimiento de la organización de los agentes económicos y las cadenas productivas en la actividad agrícola y ganadera.
                            <br />6. Desarrollar acciones para facilitar el acceso de productos agrícolas y ganaderos al mercado local, regional y nacional.
                            <br />7. Desarrollar acciones para articular los productos ganaderos y agrícolas con valor agregado de manera competitiva y sostenible, para facilitar el acceso al mercado local, regional y nacional.
                            <br />8. Desarrollar acciones para brindar información para acceder a los servicios que brinda los sistemas financieros y de seguros para el desarrollo de productos de la actividad ganadera y agrícola con valor agregado y de manera competitiva.
                            <br />9. Promover la transformación, comercialización y consumo de productos agropecuarios y agroindustriales de su ámbito, a través de ferias, festivales, eventos agropecuarios similares y contactos con compradores comerciales de su ámbito provincial y regional (rueda de negocios).
                            <br />10. Promover una cultura de uso del agua para la gestión eficiente y valoración de los recursos hídricos.
                            <br />11. Ejecutar las acciones orientadas a implementar el funcionamiento del Sistema de Control Interno, en el ámbito de su competencia.
                            <br />12. Demás funciones que le asigne el/la Director/a Regional, en el marco de su competencia.
                        </p>
                    </div>
                </div>
            </section>

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

            {/* CARRUSEL DE ALIADOS */}
            <section className="aliados-carousel-container">
                <h2 className="aliados-titulo">NUESTROS ALIADOS</h2>
                <div className="aliados-slider">
                    <div className="aliados-slide-track">
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

export default AgenciaTayacaja;