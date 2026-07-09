import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  /* ================= CARRUSEL ================= */
  const slides = [
    {
      img: "/images/homes/img_index/fondoprincipal.jpg",
      title: "Ing. Director",
      subtitle: "DIRECTOR DE LA DIRECCIÓN REGIONAL DE AGRICULTURA HUANCAVELICA",
      text: "Impulsando el desarrollo agrario de nuestra región",
      overlay: "dark",
      imgInside: "/images/homes/img_index/director.png",
      isDirector: true,
    },
    {
      img: "/images/homes/img_index/fondo_banner.png",
      title: "DRA Huancavelica, Juntos por el Agro.",
      text: "Impulsamos el desarrollo agrícola y ganadero de nuestra región",
      imgInside: "/images/homes/img_index/banner1.png",
      overlay: "light",
    },
    {
      img: "/images/homes/img_index/fondo_banner.png",
      title: "Innovación para el Campo.",
      text: "Capacitación a agricultores",
      imgInside: "/images/homes/img_index/banner2.png",
      overlay: "light",
    },
    {
      img: "/images/homes/img_index/fondo_banner.png",
      title: "Cultivando el Futuro",
      text: "Seguridad alimentaria",
      imgInside: "/images/homes/img_index/banner3.png",
      reverse: true,
      overlay: "light",
    },
  ];

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [current, setCurrent] = useState(1);
  const [isJumping, setIsJumping] = useState(false);
  const [canClick, setCanClick] = useState(true);

  const lockButtons = () => {
    setCanClick(false);

    setTimeout(() => {
      setCanClick(true);
    }, 650);
  };

  const jumpTo = (index) => {
    // Evita que se dispare el salto repetidamente si el usuario hace click rápido
    setIsJumping(true);
    setCurrent(index);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsJumping(false);
      });
    });
  };

  const handleTransitionEnd = () => {
    // Si llegamos al clon final, saltar al slide real correspondiente (inicio)
    if (current === extendedSlides.length - 1) {
      jumpTo(1);
      return;
    }

    if (current === 0) {
      jumpTo(slides.length);
      return;
    }
  };

  /* Autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isJumping) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [current, isJumping]);

  /* Si, para volver de otra pestaña */
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) return;

      if (current > extendedSlides.length - 1) {
        setCurrent(1);
      }

      if (current < 0) {
        setCurrent(slides.length);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [current, slides.length, extendedSlides.length]);
  /*boton siguiente*/
  const nextSlide = () => {
    if (current >= extendedSlides.length - 1) return;

    setCurrent((c) => c + 1);
  };

  const prevSlide = () => {
    if (current <= 0) return;

    setCurrent((c) => c - 1);
  };

  /* ================= SWIPE (MÓVIL) ================= */
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!canClick) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
      lockButtons();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
      lockButtons();
    }
  };

  /* ================= NOTICIAS ================= */
  const news = [
    {
      front: "/images/galeria/img/noticias_index/Notice1_1.png",
      back: "/images/galeria/img/noticias_index/Notice1.png",
    },
    {
      front: "/images/galeria/img/noticias_index/Notice2_2.png",
      back: "/images/galeria/img/noticias_index/Notice2.png",
    },
    {
      front: "/images/galeria/img/noticias_index/Notice3_3.png",
      back: "/images/galeria/img/noticias_index/Notice3.png",
    },
    {
      front: "/images/galeria/img/noticias_index/Notice4_4.png",
      back: "/images/galeria/img/noticias_index/Notice4.png",
    },
  ];

  return (
    <div className="home-container">
      {/* ================= FONDO ================= */}
      <div className="background-logo"></div>

      {/* ================= CARRUSEL ================= */}
      <section className="banner-carousel">
        <div
          className="carousel-container"
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${current * 100}vw)`,
            transition: isJumping ? "none" : undefined,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className={`banner-overlay ${slide.overlay}`}></div>

              <div
                className={`slide-content ${slide.reverse ? "reverse" : ""}`}
              >
                {slide.imgInside && (
                  <img
                    src={slide.imgInside}
                    className={`banner-img ${slide.isDirector ? "directora-img" : ""}`}
                    alt="banner"
                  />
                )}

                <div className="banner-text">
                  <h2>{slide.title}</h2>
                  {slide.subtitle && <h4>{slide.subtitle}</h4>}
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${current === index + 1 ? "active" : ""}`}
              onClick={() => setCurrent(index + 1)}
            />
          ))}
        </div>

        <div className="carousel-nav">
          <button className="prev-btn" onClick={prevSlide} disabled={!canClick}>
            ❮
          </button>

          <button className="next-btn" onClick={nextSlide} disabled={!canClick}>
            {" "}
            ❯{" "}
          </button>
        </div>
      </section>

      {/* ================= DOCUMENTOS ================= */}
      <section className="docs-section">
        <h2>TRÁMITES Y DOCUMENTOS</h2>

        <div className="docs-grid">
          {[
            {
              nombre: "CONVOCATORIAS",
              icono: "https://cdn.lordicon.com/ijsfqddi.json",
            },
            {
              nombre: "CORREO INSTITUCIONAL",
              icono: "https://cdn.lordicon.com/icuxkywm.json",
            },
            {
              nombre: "NORMATIVA",
              icono: "https://cdn.lordicon.com/iubtdgvu.json",
            },
            {
              nombre: "DOCUMENTOS DE GESTION",
              icono: "https://cdn.lordicon.com/qtebspeb.json",
            },
            {
              nombre: "TRANSPARENCIA",
              icono: "https://cdn.lordicon.com/vgxjrbxm.json",
            },
            {
              nombre: "CONTROL INTERNO",
              icono: "https://cdn.lordicon.com/vxiljicu.json",
            },
            {
              nombre: "SIGA REGIONAL",
              icono: "https://cdn.lordicon.com/ntfaoelc.json",
            },
            {
              nombre: "SISGEDO",
              icono: "https://cdn.lordicon.com/zcpmxjfa.json",
            },
            {
              nombre: "DATOS ESTADISTICOS",
              icono: "https://cdn.lordicon.com/utdckhgo.json",
            },
            {
              nombre: "HUANCAVELICA",
              icono: "https://cdn.lordicon.com/jgeruqwm.json",
            },
            {
              nombre: "RESOLUCIONES",
              icono: "https://cdn.lordicon.com/ifyskbjd.json",
            },
            {
              nombre: "SEGURO AGRARIO",
              icono: "https://cdn.lordicon.com/iiudwewg.json",
            },
          ].map((doc, i) => (
            <div key={i} className="doc-item">
              <lord-icon
                src={doc.icono}
                trigger="hover"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>

              <span>{doc.nombre}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NOTICIAS ================= */}
      <section className="notice-section">
        <h2 className="title_noticias">NOTICIAS</h2>

        {news.map((n, i) => (
          <div key={i} className="news-card">
            <div
              className="front_notice"
              style={{ backgroundImage: `url(${n.front})` }}
            >
              <div className="notice_overlay">
                <h2>Título {i + 1}</h2>
              </div>
            </div>

            <div
              className="back_notice"
              style={{ backgroundImage: `url(${n.back})` }}
            >
              <h2>
                <u>Noticia{i + 1}</u>
              </h2>
              <p>
                Contenido completo de la noticia: Noticia, noticia, noticia,
                noticia, noticia , noticia, noticia, noticia, noticia, noticia,
                noticia , noticia, noticia , noticia, noticia, noticia, noticia,
                noticia, noticia, noticia, noticia, noticia, noticia, noticia,
                noticia, noticia, noticia, noticia, noticia, noticia, noticia,
                noticia, noticia, noticia, noticia, noticia, noticia, noticia,
                noticia, noticia, noticia, noticia.
              </p>
              <Link className="leermas_notice" to="/noticias">
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ================= MAPA ================= */}
      <section className="map-section">
        <h2>UBÍCANOS</h2>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Huancavelica&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            title="mapa"
          ></iframe>
        </div>
      </section>

      {/* ================= ALIADOS ================= */}
      <section className="aliados-carousel-container">
        <h2 className="aliados-titulo">NUESTROS ALIADOS</h2>
        <div className="aliados-slider">
          <div className="aliados-slide-track">
            {/* Duplicamos los slides para el efecto de loop infinito 
            La medida recomendadda para la img es: 455x170*/}
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
    </div>
  );
}

export default Home;
