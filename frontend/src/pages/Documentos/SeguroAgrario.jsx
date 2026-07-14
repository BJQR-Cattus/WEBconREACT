import DocumentosSimplePage from "./DocumentosSimplePage.jsx";
import { seguroAgrarioData } from "./documentosSimpleData.js";

function SeguroAgrario() {
  return (
    <DocumentosSimplePage
      titulo="Seguro Agrario"
      descripcion="Accede a guías, cronogramas, formatos y documentos informativos relacionados al seguro agrario."
      categorySlug="seguro-agrario"
      fallbackDocuments={seguroAgrarioData}
    />
  );
}

export default SeguroAgrario;
