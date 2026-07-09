import { useState, useEffect } from "react";
import "./directorio.css";

// --- DATOS DE EJEMPLO ---
// En el futuro, esta data vendrá de tu API.
const oficinasData = [
  {
    id: "direccion",
    nombre: "Dirección",
    titulo: "OFICINA DE DIRECCIÓN",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Juan Pérez Ramos",
        email: "director.demo@drah.gob.pe",
        telefono: "900000001",
      },
      {
        cargo: "Secretaría Mesa de Partes",
        nombre: "María López Torres",
        email: "mesadepartes.demo@drah.gob.pe",
        telefono: "900000002",
      },
    ],
  },
  {
    id: "planificacion",
    nombre: "Planificación Agraria",
    titulo: "OFICINA DE PLANIFICACIÓN AGRARIA",
    funcionarios: [
      {
        cargo: "Jefe de Oficina",
        nombre: "Econ. Carlos Medina Soto",
        email: "planificacion.demo@drah.gob.pe",
        telefono: "900000003",
      },
      {
        cargo: "Secretaría de Planificación y Presupuesto",
        nombre: "Rosa Quispe Vargas",
        email: "presupuesto.demo@drah.gob.pe",
        telefono: "900000004",
      },
    ],
  },
  {
    id: "juridica",
    nombre: "Asesoría Jurídica",
    titulo: "OFICINA DE ASESORÍA JURÍDICA",
    funcionarios: [
      {
        cargo: "Jefa de Oficina",
        nombre: "Abog. Diana Flores Huamán",
        email: "juridica.demo@drah.gob.pe",
        telefono: "900000005",
      },
      {
        cargo: "Secretaría",
        nombre: "Benita Sulca Rojas",
        email: null,
        telefono: "900000006",
      },
    ],
  },
  {
    id: "administracion",
    nombre: "Administración",
    titulo: "OFICINA DE ADMINISTRACIÓN",
    funcionarios: [
      {
        cargo: "Jefe de Oficina",
        nombre: "Mg. Luis Cruz Chávez",
        email: "administracion.demo@drah.gob.pe",
        telefono: "900000007",
      },
      {
        cargo: "Secretaría",
        nombre: "Luz Arana Llana",
        email: "secretaria.admin.demo@drah.gob.pe",
        telefono: "900000008",
      },
    ],
  },
  {
    id: "estadistica",
    nombre: "Estadística e Informática",
    titulo: "OFICINA DE ESTADÍSTICA E INFORMÁTICA",
    funcionarios: [
      {
        cargo: "Jefe de Oficina",
        nombre: "Ing. Hugo Villa García",
        email: "estadistica.demo@drah.gob.pe",
        telefono: "900000009",
      },
    ],
  },
  {
    id: "saneamiento",
    nombre: "Saneamiento Físico Legal",
    titulo: "DIR. DE SANEAMIENTO FÍSICO LEGAL DE LA PROPIEDAD AGRARIA",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Andrés Olmedo Quiroz",
        email: null,
        telefono: "900000010",
      },
    ],
  },
  {
    id: "sec-dsflpa",
    nombre: "Secretaría DSFLPA",
    titulo: "SECRETARÍA D.S.F.L.P.A",
    funcionarios: [
      {
        cargo: "Secretaría",
        nombre: "Julia Ramos Peña",
        email: null,
        telefono: "900000011",
      },
    ],
  },
  {
    id: "competitividad",
    nombre: "Competitividad Agraria",
    titulo: "DIRECCIÓN DE COMPETITIVIDAD AGRARIA",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Óscar Huamán Rivas",
        email: null,
        telefono: "900000012",
      },
      {
        cargo: "Secretaría",
        nombre: "Yudith Olivera Vega",
        email: "competitividad.demo@drah.gob.pe",
        telefono: "900000013",
      },
    ],
  },
  {
    id: "forestal",
    nombre: "Forestal y Ambiental",
    titulo: "DIR. FORESTAL, FAUNA SILVESTRE Y ASUNTOS AMBIENTALES",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Édgar Paredes Rodríguez",
        email: "forestal.demo@drah.gob.pe",
        telefono: "900000014",
      },
    ],
  },
  {
    id: "hidricos",
    nombre: "Recursos Hídricos",
    titulo: "DIR. DE GESTIÓN DE RECURSOS HÍDRICOS",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Héctor Palacios Ferro",
        email: "hidricos.demo@drah.gob.pe",
        telefono: "900000015",
      },
    ],
  },
  {
    id: "cultivos",
    nombre: "Cultivos y Ganadería",
    titulo: "DIR. DE CULTIVOS NATIVOS Y GANADERÍA REGIONAL",
    funcionarios: [
      {
        cargo: "Director",
        nombre: "Ing. Marco Ríos Bravo",
        email: "cultivos.demo@drah.gob.pe",
        telefono: "900000016",
      },
    ],
  },
  {
    id: "agencias",
    nombre: "Agencias Agrarias",
    titulo: "AGENCIAS AGRARIAS",
    funcionarios: [
      {
        cargo: "Huancavelica",
        nombre: "Ing. Valentín Yauri Solano",
        email: null,
        telefono: "900000017",
      },
      {
        cargo: "Acobamba",
        nombre: "Ing. Edwin Salas Enríquez",
        email: null,
        telefono: "900000018",
      },
      {
        cargo: "Angaraes",
        nombre: "Ing. William Cauana Flores",
        email: "angaraes.demo@drah.gob.pe",
        telefono: "900000019",
      },
      {
        cargo: "Castrovirreyna",
        nombre: "Ing. Jorge Cárdenas Ortiz",
        email: "castrovirreyna.demo@drah.gob.pe",
        telefono: "900000020",
      },
      {
        cargo: "Churcampa",
        nombre: "Ing. Jesús Merino Lozano",
        email: null,
        telefono: "900000021",
      },
      {
        cargo: "Huaytará",
        nombre: "Carlos Navarro Bobadilla",
        email: "huaytara.demo@drah.gob.pe",
        telefono: "900000022",
      },
      {
        cargo: "Tayacaja",
        nombre: "Ing. Moisés Águila Flores",
        email: "tayacaja.demo@drah.gob.pe",
        telefono: "900000023",
      },
    ],
  },
];

// --- COMPONENTES HIJO ---

const OficinaSidebar = ({ oficinas, activeId, onOficinaClick }) => (
  <aside className="sidebar">
    <h2>DIRECCIÓN / OFICINA</h2>
    <div className="sidebar-buttons">
      {oficinas.map((oficina) => (
        <button
          key={oficina.id}
          className={`oficina-btn ${activeId === oficina.id ? "active" : ""}`}
          onClick={() => onOficinaClick(oficina.id)}
        >
          {oficina.nombre}
        </button>
      ))}
    </div>
  </aside>
);

const FuncionarioCard = ({ funcionario }) => (
  <div className="funcionario-card">
    <div className="funcionario-avatar">
      <i className="fas fa-user"></i>
    </div>
    <div className="funcionario-bar">
      <span className="funcionario-cargo">{funcionario.cargo}</span>
      <span className="funcionario-nombre">{funcionario.nombre}</span>
      <span className="funcionario-contacto">
        {funcionario.email && (
          <>
            <i className="fas fa-envelope"></i> {funcionario.email}
          </>
        )}
        {funcionario.email && funcionario.telefono && "  •  "}
        {funcionario.telefono && (
          <>
            <i className="fas fa-phone"></i> {funcionario.telefono}
          </>
        )}
      </span>
    </div>
  </div>
);

const OficinaContenido = ({ oficina }) => {
  if (!oficina) {
    return (
      <div className="contenido">
        <h3 className="oficina-titulo">Seleccione una oficina</h3>
      </div>
    );
  }

  return (
    <div className="contenido">
      <h3 className="oficina-titulo">{oficina.titulo}</h3>
      <div className="funcionarios-list">
        {oficina.funcionarios.map((f, index) => (
          <FuncionarioCard key={`${oficina.id}-${index}`} funcionario={f} />
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

function Directorio() {
  const [oficinas, setOficinas] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada a la API.
    // En el futuro, reemplaza esto con: fetch('/api/directorio').then(...)
    const fetchOficinas = () => {
      setOficinas(oficinasData);
      // Establece la primera oficina como activa por defecto
      if (oficinasData.length > 0) {
        setActiveId(oficinasData[0].id);
      }
      setLoading(false);
    };

    // Añadimos un pequeño delay para simular la carga de red
    const timer = setTimeout(fetchOficinas, 500);
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);

  const oficinaActiva = oficinas.find((o) => o.id === activeId);

  if (loading) {
    return (
      <div className="directorio-page">
        <p style={{ color: "white", textAlign: "center", fontSize: "1.2em" }}>
          Cargando directorio...
        </p>
      </div>
    );
  }

  return (
    <div className="directorio-page">
      <div className="directorio-layout">
        <OficinaSidebar
          oficinas={oficinas}
          activeId={activeId}
          onOficinaClick={setActiveId}
        />
        <OficinaContenido oficina={oficinaActiva} />
      </div>
    </div>
  );
}

export default Directorio;
