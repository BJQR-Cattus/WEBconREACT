import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { documentosGestionData } from "./documentosAgrupadosData.js";

function DocumentosGestion() {
  return (
    <DocumentosAgrupadosPage
      titulo="Documentos de Gestion"
      descripcion="Consulta documentos institucionales de gestion organizados por tipo: MOF, TUPA, ROF, CAP, MOB y RIS."
      grupos={documentosGestionData}
    />
  );
}

export default DocumentosGestion;
