# Backend DRA Huancavelica

## Migraciones

La primera migración crea `tbl_categories`, con sus campos de auditoría, índices y restricciones de unicidad para `name` y `slug`.

La variable `DATABASE_URL` usa el host `db`, el nombre interno del servicio PostgreSQL de Docker Compose. Por ello los comandos de Alembic deben ejecutarse dentro del contenedor `api`:

```powershell
docker compose up -d --build
docker compose exec api alembic upgrade head
docker compose exec api alembic current
```

Para crear una migración de los próximos modelos:

```powershell
docker compose exec api alembic revision --autogenerate -m "descripcion_del_cambio"
docker compose exec api alembic upgrade head
```

Si se requiere ejecutar Alembic desde Windows, use temporalmente una URL con `localhost` en lugar de `db` (por ejemplo, mediante una variable de entorno); no cambie el valor utilizado por el contenedor `api`.
