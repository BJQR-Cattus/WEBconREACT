import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { boletinEstadisticoData } from "./documentosAgrupadosData.js";

function BoletinEstadistico() {
  return (
    <DocumentosAgrupadosPage
      titulo="Boletin Estadistico"
      descripcion="Consulta boletines estadisticos en formato PDF, organizados por año de publicacion."
      grupos={boletinEstadisticoData}
    />
  );
}

export default BoletinEstadistico;
