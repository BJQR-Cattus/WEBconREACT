import DocumentosAgrupadosPage from "./DocumentosAgrupadosPage.jsx";
import { datosEstadisticosData } from "./documentosAgrupadosData.js";

function DatosEstadisticos() {
  return (
    <DocumentosAgrupadosPage
      titulo="Datos Estadisticos"
      descripcion="Consulta informacion estadistica agropecuaria organizada por tipo de publicacion."
      grupos={datosEstadisticosData}
    />
  );
}

export default DatosEstadisticos;
