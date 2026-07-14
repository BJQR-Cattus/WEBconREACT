# Portal Web DRA Huancavelica

Prototipo institucional con React/Vite en el frontend y FastAPI/PostgreSQL en el backend.

## Componentes

- `frontend/`: sitio web React en `http://localhost:5173`.
- `backend/`: API FastAPI en `http://localhost:8000` y Swagger en `/docs`.
- PostgreSQL y pgAdmin gestionados con Docker Compose.

## Requisitos

- Git
- Node.js 20+
- Docker Desktop con Docker Compose

## Clonar y ejecutar

```powershell
git clone https://github.com/BJQR-Cattus/WEBconREACT.git
cd WEBconREACT
```

### Backend

```powershell
cd backend
Copy-Item .env.example .env
docker compose up -d --build
docker compose exec api alembic upgrade head
```

Completa `backend/.env` con los datos de PostgreSQL, la URL de base de datos, CORS y —si se usará Contacto— los valores SMTP de Gmail. El archivo `.env` nunca se sube al repositorio.

### Frontend

En otra terminal:

```powershell
cd frontend
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Archivos y documentos

Los documentos se pueden cargar desde Swagger mediante `POST /documents/upload`. FastAPI los sirve desde `backend/app/uploads/` bajo la URL `/uploads/...`.

## Comandos útiles

```powershell
# Estado de servicios
cd backend
docker compose ps

# Logs de API
docker compose logs -f api

# Detener sin borrar la base de datos
docker compose down
```

## Módulos del prototipo

- Categorías y documentos
- Carga y publicación local de archivos
- Resoluciones
- Convocatorias y etapas
- Noticias
- Formulario de contacto con notificación SMTP

## Nota de despliegue

GitHub Pages solo puede alojar el frontend. Para una publicación completa, el backend FastAPI y PostgreSQL deben desplegarse en un proveedor compatible con servicios web y base de datos.
