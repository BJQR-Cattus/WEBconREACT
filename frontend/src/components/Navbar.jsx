import { Link } from "react-router-dom";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/images/homes/img_index/logo.png" alt="Logo DRA" />
        </Link>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Inicio
            </Link>
          </li>

          <li className="dropdown">
            <span className="nav-link">
              <i className="fas fa-building"></i> Nuestra Institución{" "}
              <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li className="downxd">
                <Link to="/quienessomos">Quiénes somos</Link>
              </li>
              <li className="downxd">
                <Link to="/directorio">Directorio</Link>
              </li>
              <li className="downxd">
                <Link to="/organigrama">Organigrama</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="nav-link">
              <i className="fas fa-map-marked-alt"></i> Oficinas{" "}
              <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li className="downxd">
                <Link to="/direccion">Dirección</Link>
              </li>
              <li className="downxd">
                <Link to="/asesoriajuridica">Asesoría Jurídica</Link>
              </li>
              <li className="downxd">
                <Link to="/administracion">Administración</Link>
              </li>
              <li className="downxd">
                <Link to="/planificacion">Planificación</Link>
              </li>
              <li className="downxd">
                <Link to="/EstadisticaInformatica">Estadística Informática</Link>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <span className="nav-link">
              <i className="fas fa-globe-americas"></i> Direcciones{" "}
              <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li className="downxd">
                <Link to="/CompetitividadAgraria">
                  Dirección de Competitividad Agraria
                </Link>
              </li>
              <li className="downxd">
                <Link to="/RecursosHidricos">Dirección de Recursos Hídricos</Link>
              </li>
              <li className="downxd">
                <Link to="/CultivoGanaderia">
                  Dirección de cultivos nativos y ganadería Regional
                </Link>
              </li>
              <li className="downxd">
                <Link to="/fauna">
                  Dirección Forestal y Fauna Silvestre y Asuntos Ambientales
                </Link>
              </li>
              <li className="downxd">
                <Link to="/saneamiento">
                  Dirección De Saneamiento Fisíco Legal De La Propiedad Agraria
                </Link>
              </li>
            </ul>
          </li>

          {/* MENÚ AGENCIAS (Agregado) */}
          <li className="dropdown">
            <span className="nav-link">
              <i className="fas fa-map-pin"></i> Agencias{" "}
              <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li className="downxd">
                <Link to="/AgenciaAcobamba">Agencia Agraria Acobamba</Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaAngaraes">Agencia Agraria Angaraes</Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaCastrovirreyna">
                  Agencia Agraria Castrovirreyna
                </Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaChurcampa">Agencia Agraria Churcampa</Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaHuancavelica">Agencia Agraria Huancavelica</Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaHuaytara">Agencia Agraria Huaytará</Link>
              </li>
              <li className="downxd">
                <Link to="/AgenciaTayacaja">Agencia Agraria Tayacaja</Link>
              </li>
            </ul>
          </li>

          {/* MENÚ CMN (Agregado) */}
          <li className="dropdown">
            <span className="nav-link">
              <i className="fas fa-chart-bar"></i> CMN{" "}
              <i className="fas fa-chevron-down"></i>
            </span>
            <ul className="dropdown-menu">
              <li className="downxd">
                <Link to="/cmn24">Ver CMN 2024</Link>
              </li>
              <li className="downxd">
                <Link to="/cmn25">Ver CMN 2025</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contacto" className="nav-link">
              <i className="fas fa-phone"></i> Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
