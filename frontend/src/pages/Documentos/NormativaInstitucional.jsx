import DocumentosSimplePage from "./DocumentosSimplePage.jsx";
import { normativaInstitucionalData } from "./documentosSimpleData.js";

function NormativaInstitucional() {
  return (
    <DocumentosSimplePage
      titulo="Normativa Institucional"
      descripcion="Consulta directivas, reglamentos, formatos y otros documentos normativos de la institución."
      documentos={normativaInstitucionalData}
    />
  );
}

export default NormativaInstitucional;
