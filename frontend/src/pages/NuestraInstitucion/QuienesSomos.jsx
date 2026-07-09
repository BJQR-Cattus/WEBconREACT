import "./QuienesSomos.css";

function QuienesSomos() {
  return (
    <div className="quienessomos-page">
      <section className="hero">
        <div className="hero-content">
          <h1>SOBRE NOSOTROS</h1>
          <p className="subtitle">
            Descubre la esencia, el compromiso y el futuro de nuestra
            institución.
          </p>
        </div>
      </section>

      <div className="container">
        <section id="directora-info">
          <div className="director-img">
            <img
              src="/images/homes/img_index/director.png"
              alt="Foto de Director"
            />
          </div>
          <p>
            <span className="director-name">Director Director...</span>
          </p>
          <p>
            <span className="director-cargo">
              DIRECTOR REGIONAL DE AGRICULTURA
            </span>
          </p>
          <p className="director-description">
            Que, mediante Resolución Gerencial General Regional
            Nº0254-2025/GOB.REG-HVCA/GGR, designado en el cargo de confianza de
            la Dirección Regional Agraria de Huancavelica, órgano desconcentrado
            del Gobierno Regional de Huancavelica, con los derechos,
            atribuciones y responsabilidades inherentes al cargo. Promover el
            desarrollo económico de la región e impulsar la competitividad de la
            actividad agropecuaria en la región Huancavelica, buscando la
            participación de la inversión pública y privada para mejorar la
            calidad de vida de los productores agropecuarios, así como promover
            el uso adecuado de los recursos.
            <br />
            <br />
            La DRAH está conformada por siete Agencias Agrarias distribuidas
            dentro de todo el ámbito regional, los mismos que son:
          </p>
          <div className="button-grid">
            <a href="#" className="region-btn">
              Acobamba
            </a>
            <a href="#" className="region-btn">
              Angaraes
            </a>
            <a href="#" className="region-btn">
              Castrovirreyna
            </a>
            <a href="#" className="region-btn">
              Churcampa
            </a>
            <a href="#" className="region-btn">
              Huancavelica
            </a>
            <a href="#" className="region-btn">
              Huaytará
            </a>
            <a href="#" className="region-btn">
              Tayacaja
            </a>
          </div>
        </section>

        <section id="services">
          <div className="card">
            <div
              className="card-header"
              style={{
                backgroundImage:
                  "url('/images/galeria/img/NuestraInstitucion/mision.png')",
              }}
            >
              <h2 className="card-title">MISIÓN</h2>
            </div>
            <div className="card-content">
              <ul>
                <li>
                  Promover el desarrollo de los productores agrarios organizados
                  en cadenas productivas, en el marco de la cuenca como unidad
                  de gestión de los recursos naturales, para lograr una
                  agricultura desarrollada en términos de sostenibilidad
                  económica social y ambiental, además conducir el desarrollo
                  agrario, promoviendo el aprovechamiento sostenible de los
                  recursos naturales, la competitividad y la equidad, en el
                  marco de la modernización y descentralización, con la
                  finalidad de contribuir al desarrollo rural y el mejoramiento
                  de la calidad de vida de la población.
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div
              className="card-header"
              style={{
                backgroundImage:
                  "url('/images/galeria/img/NuestraInstitucion/vision.png')",
              }}
            >
              <h2 className="card-title">VISIÓN</h2>
            </div>
            <div className="card-content">
              <ul>
                <li>
                  Ser productores agrarios organizados, competitivos, rentables
                  y sostenibles; económica, social y ambientalmente; en un
                  entorno democrático y de igualdad de oportunidades, además
                  tener un Sector Agrario y un medio rural integralmente
                  desarrollado, productivo y de alto valor agregado, posicionado
                  en los mercados nacionales y mundiales con productos inocuos,
                  ecológicos y biodiversos, obtenidos con una gestión
                  participativa pública y privada, descentralizada, moderna y
                  competitiva y con respeto al medio ambiente, base del
                  crecimiento y desarrollo económico y social de la región.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="info-blocks">
          <div
            className="info-block"
            style={{
              backgroundImage:
                "url('/images/galeria/img/NuestraInstitucion/objetivos.png')",
            }}
          >
            <div className="info-content">
              <h3 className="info-title">OBJETIVOS</h3>
              <p className="info-text">
                Fortalecer las organizaciones de productores y promover su
                integración bajo los enfoques de manejo de las cuencas y cadenas
                productivas. Fomentar la innovación tecnológica y capacitación
                vinculada a la gestión empresarial del productor agrario,
                facilitando asistencia técnica. Establecer un sistema de
                información agraria que permita a los agentes económicos una
                eficiente toma de decisiones para la gestión. Facilitar a los
                productores agrarios el acceso a servicios de asesoría jurídica,
                administrativa, de gestión, financiamiento, asistencia técnica,
                sanidad y otros que les permitan mejorar su capacidad de
                gestión. Facilitar la articulación de la pequeña agricultura con
                la economía de mercado, a través del establecimiento de
                políticas para el uso adecuado de los recursos naturales.
              </p>
            </div>
          </div>

          <div
            className="info-block"
            style={{
              backgroundImage:
                "url('/images/galeria/img/NuestraInstitucion/competencias.png')",
            }}
          >
            <div className="info-content">
              <h3 className="info-title">COMPETENCIAS QUE DESARROLLAMOS</h3>
              <p className="info-text">
                Planificar, formular, proponer, dirigir, coordinar y evaluar las
                políticas y acciones de desarrollo agropecuario regional. En
                concordancia con la política del sector agrario y los Planes de
                desarrollo y operativo regional. Promover, concertar y
                supervisar la ejecución de proyectos afines al sector agrario.
                Otras competencias inherentes al sector agrario.
              </p>
            </div>
          </div>

          <div
            className="info-block"
            style={{
              backgroundImage:
                "url('/images/galeria/img/NuestraInstitucion/jurisdiccion.png')",
            }}
          >
            <div className="info-content">
              <h3 className="info-title">JURISDICCIÓN</h3>
              <p className="info-text">
                El área de Jurisdicción de la Dirección Regional de Agricultura,
                abarca todo el territorio de la región Huancavelica, ubicando su
                sede Administrativa en la ciudad de Huancavelica.
              </p>
            </div>
          </div>

          <div
            className="info-block"
            style={{
              backgroundImage:
                "url('/images/galeria/img/NuestraInstitucion/finalidad.png')",
            }}
          >
            <div className="info-content">
              <h3 className="info-title">FINALIDAD</h3>
              <p className="info-text">
                Promover el desarrollo económico de la región e impulsar la
                Competitividad de la actividad agropecuaria en la región
                Huancavelica, buscando la participación de la inversión pública
                y privada para mejorar la calidad de vida de los productores
                Agropecuarios, así como promover el uso adecuado de los
                recursos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuienesSomos;
