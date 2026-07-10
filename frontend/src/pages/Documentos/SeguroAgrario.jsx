import DocumentosSimplePage from "./DocumentosSimplePage.jsx";
import { seguroAgrarioData } from "./documentosSimpleData.js";

function SeguroAgrario() {
  return (
    <DocumentosSimplePage
      titulo="Seguro Agrario"
      descripcion="Accede a guías, cronogramas, formatos y documentos informativos relacionados al seguro agrario."
      documentos={seguroAgrarioData}
    />
  );
}

export default SeguroAgrario;
