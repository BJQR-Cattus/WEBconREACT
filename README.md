# Portal Web DRA Huancavelica

**DISEÑAR Y DESARROLLAR UN PROTOTIPO FUNCIONAL DE SITIO WEB MODERNO PARA LA DIRECCIÓN REGIONAL AGRARIA DE HUANCAVELICA (DRAH)**

Este repositorio contiene el Prototipo Funcional de Alta Fidelidad desarrollado como Proyecto de Innovación para la Dirección Regional Agraria de Huancavelica. La solución aborda la obsolescencia técnica del portal actual, migrando de una gestión manual en cPanel hacia una Arquitectura Desacoplada moderna y escalable.

---

## 🚀 Descripción del Proyecto

El proyecto materializa una Single Page Application (SPA) de alto rendimiento que optimiza la experiencia de usuario (UX/UI) y democratiza el acceso a la información institucional. Se enfoca en resolver los cuellos de botella operativos mediante una interfaz reactiva y una propuesta técnica de servicios backend automatizados.

### ✨ Características y Módulos Principales
*   **Diseño Responsivo:** Adaptabilidad total a dispositivos móviles y tablets.
*   **Módulo de Documentos:** Implementación de buscadores y filtros dinámicos (Categorías, carga y publicación local de archivos).
*   **Módulos Institucionales:** Resoluciones, Convocatorias y etapas, Noticias.
*   **Comunicación:** Formulario de contacto con notificación SMTP.
*   **Arquitectura Limpia:** Separación estricta de responsabilidades (Separation of Concerns) para facilitar el mantenimiento futuro por el equipo técnico de la DRAH.
*   **Optimización de Carga:** Tiempo de renderizado inicial inferior a los 2 segundos gracias al build optimizado de Vite.

---

## 🛠️ Stack Tecnológico

### Frontend (Consolidado al 100%)
*   **React + Vite:** Entorno de desarrollo de nueva generación para un renderizado ultra veloz.
*   **React Router DOM:** Gestión de enrutamiento dinámico para una navegación sin recargas de página.
*   **CSS Modules:** Estilos independientes por componente para evitar colisiones y asegurar mantenibilidad.
*   **Axios:** Cliente HTTP preparado en `api.js` para el consumo de servicios REST.

### Backend (Arquitectura Propuesta)
*   **FastAPI:** Framework de alto rendimiento en Python para la lógica de servicios API REST.
*   **PostgreSQL 17:** Motor de base de datos relacional para la persistencia de documentos y resoluciones.
*   **Docker & Docker Compose:** Virtualización de servicios para garantizar entornos de despliegue idénticos y seguros.

---

## 📦 Estructura del Proyecto

```text
WEBconREACT/
├── backend/              # API FastAPI y configuración Docker
├── frontend/             # Código fuente de la interfaz reactiva
│   ├── src/
│   │   ├── components/   # Componentes reutilizables (Header, Footer, Cards)
│   │   ├── pages/        # Vistas (Home, Oficinas, Agencias, Documentos)
│   │   ├── services/     # api.js listo para integración con Backend
│   │   └── assets/       # Recursos multimedia institucionales
│   ├── package.json      # Dependencias y scripts de Vite
│   └── vite.config.js    # Configuración del empaquetador
└── README.md             # Documentación técnica del proyecto

# Portal Web DRA Huancavelica

**DISEÑAR Y DESARROLLAR UN PROTOTIPO FUNCIONAL DE SITIO WEB MODERNO PARA LA DIRECCIÓN REGIONAL AGRARIA DE HUANCAVELICA (DRAH)**

Este repositorio contiene el Prototipo Funcional de Alta Fidelidad desarrollado como Proyecto de Innovación para la Dirección Regional Agraria de Huancavelica. La solución aborda la obsolescencia técnica del portal actual, migrando de una gestión manual en cPanel hacia una Arquitectura Desacoplada moderna y escalable.

---

## 🚀 Descripción del Proyecto

El proyecto materializa una Single Page Application (SPA) de alto rendimiento que optimiza la experiencia de usuario (UX/UI) y democratiza el acceso a la información institucional. Se enfoca en resolver los cuellos de botella operativos mediante una interfaz reactiva y una propuesta técnica de servicios backend automatizados.

### ✨ Stack Tecnológico y Características
*   **Frontend (Consolidado al 100%):** React + Vite, React Router DOM, CSS Modules, Axios.
*   **Backend (Arquitectura Propuesta):** FastAPI, PostgreSQL 17, Docker & Docker Compose.
*   **Diseño Responsivo:** Adaptabilidad total a dispositivos móviles y tablets.
*   **Arquitectura Limpia:** Separación estricta de responsabilidades (Separation of Concerns).
*   **Optimización de Carga:** Tiempo de renderizado inicial inferior a los 2 segundos.

---

## 👨‍💻 Desarrollador

**Brayan Jhackson Quispe Rojas**  
Estudiante de Ingeniería de Software con Inteligencia Artificial - SENATI.  
*Proyecto de Innovación Profesional Técnica.*

---

## Guía de Implementación Técnica

Prototipo institucional con React/Vite en el frontend y FastAPI/PostgreSQL en el backend.

### Componentes

- `frontend/`: sitio web React en `http://localhost:5173`.
- `backend/`: API FastAPI en `http://localhost:8000` y Swagger en `/docs`.
- PostgreSQL y pgAdmin gestionados con Docker Compose.

### Requisitos

- Git
- Node.js 20+
- Docker Desktop con Docker Compose

### Clonar y ejecutar

```powershell
git clone [https://github.com/BJQR-Cattus/WEBconREACT.git](https://github.com/BJQR-Cattus/WEBconREACT.git)
cd WEBconREACT
docker-compose up --build
     