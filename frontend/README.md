# Web DRA Huancavelica - Frontend

Frontend oficial del Portal Web de la **Dirección Regional Agraria Huancavelica (DRAH)**, desarrollado con **React** y **Vite**. El proyecto ofrece una interfaz moderna, responsive y modular para presentar información institucional, documentos, noticias, oficinas y demás servicios de la entidad.

> Estado actual: Frontend completamente funcional y preparado para su integración con un backend basado en FastAPI y PostgreSQL.

---

# Tecnologías utilizadas

- React
- Vite
- React Router DOM
- CSS3
- Font Awesome
- LordIcon

---

# Características principales

- Diseño responsive.
- Navegación mediante React Router.
- Componentes reutilizables.
- Estilos organizados por página.
- Carrusel principal.
- Noticias institucionales.
- Directorio institucional.
- Organigrama.
- Oficinas y Direcciones Agrarias.
- Agencias Agrarias.
- Convocatorias.
- Resoluciones.
- Documentos institucionales.
- Formulario de contacto.
- Sección de enlaces externos.
- Preparado para consumir una API REST.

---

# Requisitos

Antes de ejecutar el proyecto asegúrese de tener instalado:

- Node.js 20 o superior
- npm

Verificar versiones:

```bash
node -v
npm -v
```

---

# Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar en modo desarrollo

```bash
npm run dev
```

Por defecto Vite iniciará el servidor en:

```
http://localhost:5173
```

---

# Generar versión de producción

```bash
npm run build
```

Los archivos compilados se generarán en:

```
dist/
```

---

# Verificar calidad del código

Ejecutar ESLint:

```bash
npm run lint
```

---

# Estructura del proyecto

```
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Estado del proyecto

Actualmente el frontend se encuentra finalizado y funcionando correctamente.

Se encuentran implementados los siguientes módulos:

- Inicio
- Nuestra Institución
- Directorio
- Organigrama
- Oficinas
- Direcciones Agrarias
- Agencias Agrarias
- Noticias
- Documentos Institucionales
- Resoluciones
- Convocatorias
- Contacto

Actualmente los datos utilizados son estáticos (mock). La siguiente etapa del proyecto consiste en integrar un backend desarrollado con **FastAPI** y **PostgreSQL**, permitiendo la administración dinámica de documentos, noticias, convocatorias y resoluciones.

---

# Próxima integración

El frontend ha sido estructurado para consumir una API REST, permitiendo:

- Gestión de documentos.
- Gestión de convocatorias.
- Gestión de resoluciones.
- Gestión de noticias.
- Gestión de formularios de contacto.
- Panel administrativo.

---

# Autor

Proyecto desarrollado por **Brayan Jhackson QR** como parte del desarrollo del Portal Web Institucional de la Dirección Regional Agraria Huancavelica.

---

# Licencia

Este proyecto fue desarrollado con fines institucionales y académicos.