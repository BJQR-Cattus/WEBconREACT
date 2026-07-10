const buildResolutionDocs = ({ year, prefix, total, type, start = 1 }) =>
  Array.from({ length: total }, (_, index) => {
    const number = String(start + index).padStart(3, "0");

    return {
      id: `${year}-${prefix}-${number}`,
      numero: `${number}-${year}`,
      nombre: `${type} N. ${number}-${year}`,
      tipo: type,
      anio: year,
      fechaPublicacion: "",
      url: "#",
    };
  });

export const resolucionesData = [
  {
    id: "2026",
    anio: "2026",
    grupos: [
      {
        id: "rdr-2026",
        titulo: "Resolucion Directorial Regional",
        documentos: buildResolutionDocs({
          year: "2026",
          prefix: "rdr",
          total: 212,
          type: "Resolucion Directorial Regional",
        }),
      },
      {
        id: "ra-2026",
        titulo: "Res. Administrativa",
        documentos: buildResolutionDocs({
          year: "2026",
          prefix: "ra",
          total: 2,
          type: "Res. Administrativa",
        }),
      },
    ],
  },
  {
    id: "2025",
    anio: "2025",
    grupos: [
      {
        id: "rdr-2025",
        titulo: "Resolucion Directorial Regional",
        documentos: buildResolutionDocs({
          year: "2025",
          prefix: "rdr",
          total: 217,
          type: "Resolucion Directorial Regional",
        }),
      },
      {
        id: "ra-2025",
        titulo: "Res. Administrativa",
        documentos: buildResolutionDocs({
          year: "2025",
          prefix: "ra",
          total: 142,
          type: "Res. Administrativa",
        }),
      },
    ],
  },
  {
    id: "2024",
    anio: "2024",
    grupos: [
      {
        id: "rd-2024",
        titulo: "Resoluciones",
        documentos: buildResolutionDocs({
          year: "2024",
          prefix: "rd",
          total: 83,
          type: "Resolucion",
        }),
      },
    ],
  },
];
