import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { saneamientoFisicoLegalData } from "./documentosAgrupadosData.js";

function SaneamientoFisicoLegalDocs() {
  return (
    <DocumentosAgrupadosPage
      titulo="Saneamiento Fisico Legal"
      descripcion="Consulta resoluciones directoriales en formato PDF vinculadas al saneamiento fisico legal."
      grupos={saneamientoFisicoLegalData}
    />
  );
}

export default SaneamientoFisicoLegalDocs;
