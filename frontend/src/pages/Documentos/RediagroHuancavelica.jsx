import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { rediagroData } from "./documentosAgrupadosData.js";

function RediagroHuancavelica() {
  return (
    <DocumentosAgrupadosPage
      titulo="REDIAGRO Huancavelica"
      descripcion="Consulta publicaciones REDIAGRO organizadas por año de publicacion."
      grupos={rediagroData}
    />
  );
}

export default RediagroHuancavelica;
