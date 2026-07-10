import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { controlInternoData } from "./documentosAgrupadosData.js";

function ControlInterno() {
  return (
    <DocumentosAgrupadosPage
      titulo="Control Interno"
      descripcion="Consulta entregables SCI, directivas, cronogramas, reportes y documentos de seguimiento institucional."
      grupos={controlInternoData}
    />
  );
}

export default ControlInterno;
