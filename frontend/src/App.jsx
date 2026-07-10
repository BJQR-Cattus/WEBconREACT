import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home/Home.jsx";
import NewsReport from "./pages/Noticias/NewsReport.jsx";

import QuienesSomos from "./pages/NuestraInstitucion/QuienesSomos.jsx";
import Directorio from "./pages/NuestraInstitucion/Directorio.jsx";
import Organigrama from "./pages/NuestraInstitucion/Organigrama.jsx";

import Direccion from "./pages/Oficinas/Direccion.jsx";
import AsesoriaJuridica from "./pages/Oficinas/AsesoriaJuridica.jsx";
import Administracion from "./pages/Oficinas/Administracion.jsx";
import Planificacion from "./pages/Oficinas/Planificacion.jsx";
import EstadisticaInformatica from "./pages/Oficinas/EstadisticaInformatica.jsx";

import CompetitividadAgraria from "./pages/DireccionesAgrarias/CompetitividadAgraria.jsx";
import RecursosHidricos from "./pages/DireccionesAgrarias/RecursosHidricos.jsx";
import CultivoGanaderia from "./pages/DireccionesAgrarias/CultivoGanaderia.jsx";
import Fauna from './pages/DireccionesAgrarias/fauna.jsx';
import Saneamiento from './pages/DireccionesAgrarias/Saneamiento.jsx';

import AgenciaAcobamba from "./pages/Agencia/AgenciaAcobamba.jsx";
import AgenciaAngaraes from "./pages/Agencia/AgenciaAngaraes.jsx";
import AgenciaCastrovirreyna from "./pages/Agencia/AgenciaCastrovirreyna.jsx";
import AgenciaChurcampa from "./pages/Agencia/AgenciaChurcampa.jsx";
import AgenciaHuancavelica from "./pages/Agencia/AgenciaHuancavelica.jsx";
import AgenciaHuaytara from "./pages/Agencia/AgenciaHuaytara.jsx";
import AgenciaTayacaja from "./pages/Agencia/AgenciaTayacaja.jsx";
import Cmn24Page from './pages/CMN/cmn24Page.jsx';
import Cmn25Page from './pages/CMN/cmn25Page.jsx';
import Contacto from './pages/Contacto/formulario.jsx';
import NormativaInstitucional from './pages/Documentos/NormativaInstitucional.jsx';
import SeguroAgrario from './pages/Documentos/SeguroAgrario.jsx';
import BoletinEstadistico from './pages/Documentos/BoletinEstadistico.jsx';
import SaneamientoFisicoLegalDocs from './pages/Documentos/SaneamientoFisicoLegalDocs.jsx';
import DocumentosGestion from './pages/Documentos/DocumentosGestion.jsx';
import ControlInterno from './pages/Documentos/ControlInterno.jsx';
import DatosEstadisticos from './pages/Documentos/DatosEstadisticos.jsx';
import RediagroHuancavelica from './pages/Documentos/RediagroHuancavelica.jsx';
import Resoluciones from './pages/Documentos/Especiales/Resoluciones.jsx';
import Convocatorias from './pages/Documentos/Especiales/Convocatorias.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<NewsReport />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/Organigrama" element={<Organigrama />} />
        <Route path="/Direccion" element={<Direccion />} />
        <Route path="/AsesoriaJuridica" element={<AsesoriaJuridica />} />
        <Route path="/Administracion" element={<Administracion />} />
        <Route path="/Planificacion" element={<Planificacion />} />
        <Route path="/EstadisticaInformatica" element={<EstadisticaInformatica />} />
        <Route path="/CompetitividadAgraria" element={<CompetitividadAgraria />} />
        <Route path="/RecursosHidricos" element={<RecursosHidricos />} />
        <Route path="/CultivoGanaderia" element={<CultivoGanaderia />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/saneamiento" element={<Saneamiento />} />
        <Route path="/AgenciaAcobamba" element={<AgenciaAcobamba />} />
        <Route path="/AgenciaAngaraes" element={<AgenciaAngaraes />} />
        <Route path="/AgenciaCastrovirreyna" element={<AgenciaCastrovirreyna />} />
        <Route path="/AgenciaChurcampa" element={<AgenciaChurcampa />} />
        <Route path="/AgenciaHuancavelica" element={<AgenciaHuancavelica />} />
        <Route path="/AgenciaHuaytara" element={<AgenciaHuaytara />} />
        <Route path="/AgenciaTayacaja" element={<AgenciaTayacaja />} />
        <Route path="/cmn24" element={<Cmn24Page />} />
        <Route path="/cmn25" element={<Cmn25Page />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/normativa-institucional" element={<NormativaInstitucional />} />
        <Route path="/seguro-agrario" element={<SeguroAgrario />} />
        <Route path="/boletin-estadistico" element={<BoletinEstadistico />} />
        <Route path="/saneamiento-fisico-legal" element={<SaneamientoFisicoLegalDocs />} />
        <Route path="/documentos-gestion" element={<DocumentosGestion />} />
        <Route path="/control-interno" element={<ControlInterno />} />
        <Route path="/datos-estadisticos" element={<DatosEstadisticos />} />
        <Route path="/rediagro-huancavelica" element={<RediagroHuancavelica />} />
        <Route path="/resoluciones" element={<Resoluciones />} />
        <Route path="/convocatorias" element={<Convocatorias />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
