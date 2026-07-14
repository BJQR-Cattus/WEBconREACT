from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, Depends, File, HTTPException, Query, Response, UploadFile, status
from sqlalchemy.orm import Session

from app.dependencies.database import get_db
from app.schemas.document import DocumentCreate, DocumentResponse, DocumentUpdate
from app.services.document import DocumentService
from app.core.config import settings


router = APIRouter(prefix="/documents", tags=["Documents"])
service = DocumentService()

ALLOWED_EXTENSIONS = {".pdf", ".xlsx", ".xls", ".doc", ".docx"}
MAX_UPLOAD_SIZE = 15 * 1024 * 1024


@router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload_document_file(
    file: UploadFile = File(...),
    folder: str = Query(default="documents", pattern="^(documents|excel|images|pdf)$"),
):
    extension = Path(file.filename or "").suffix.lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Formato no permitido.")

    content = await file.read()
    if len(content) > MAX_UPLOAD_SIZE:
        raise HTTPException(status_code=413, detail="El archivo supera el límite de 15 MB.")

    uploads_path = Path(settings.UPLOAD_FOLDER)
    if not uploads_path.is_absolute():
        uploads_path = Path(__file__).resolve().parents[3] / uploads_path
    destination = uploads_path / folder
    destination.mkdir(parents=True, exist_ok=True)
    saved_name = f"{uuid4().hex}{extension}"
    (destination / saved_name).write_bytes(content)
    return {
        "original_filename": file.filename,
        "file_url": f"/uploads/{folder}/{saved_name}",
        "file_type": extension.removeprefix(".").upper(),
    }


@router.post("/", response_model=DocumentResponse, status_code=status.HTTP_201_CREATED)
def create_document(
    document: DocumentCreate, db: Session = Depends(get_db)
) -> DocumentResponse:
    try:
        return service.create(db, document)
    except ValueError as error:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(error))


@router.get("/", response_model=list[DocumentResponse])
def get_documents(
    category_id: int | None = Query(default=None, gt=0),
    year: int | None = Query(default=None, ge=1900, le=2100),
    document_status: str | None = Query(default=None, alias="status", min_length=3, max_length=30),
    search: str | None = Query(default=None, min_length=1, max_length=250),
    offset: int = Query(default=0, ge=0),
    limit: int = Query(default=50, ge=1, le=100),
    db: Session = Depends(get_db),
) -> list[DocumentResponse]:
    return service.get_all(
        db,
        category_id=category_id,
        year=year,
        status=document_status,
        search=search,
        offset=offset,
        limit=limit,
    )


@router.get("/{document_id}", response_model=DocumentResponse)
def get_document(document_id: int, db: Session = Depends(get_db)) -> DocumentResponse:
    document = service.get_by_id(db, document_id)
    if not document:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Documento no encontrado.")
    return document


@router.put("/{document_id}", response_model=DocumentResponse)
def update_document(
    document_id: int, document_data: DocumentUpdate, db: Session = Depends(get_db)
) -> DocumentResponse:
    document = service.get_by_id(db, document_id)
    if not document:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Documento no encontrado.")
    try:
        return service.update(db, document, document_data)
    except ValueError as error:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(error))


@router.delete("/{document_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_document(document_id: int, db: Session = Depends(get_db)) -> Response:
    document = service.get_by_id(db, document_id)
    if not document:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Documento no encontrado.")
    service.delete(db, document)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
