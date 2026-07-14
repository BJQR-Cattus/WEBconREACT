from sqlalchemy.orm import Session

from app.models.call_stage import CallStage
from app.models.category import Category
from app.models.document import Document
from app.repositories.document import DocumentRepository
from app.schemas.document import DocumentCreate, DocumentUpdate


class DocumentService:
    def __init__(self):
        self.repository = DocumentRepository()

    def _validate_relations(
        self, db: Session, category_id: int, call_stage_id: int | None
    ) -> None:
        category = db.get(Category, category_id)
        if not category or not category.is_active:
            raise ValueError("La categoría indicada no existe o está inactiva.")

        if call_stage_id is not None:
            call_stage = db.get(CallStage, call_stage_id)
            if not call_stage or not call_stage.is_active:
                raise ValueError("La etapa de convocatoria indicada no existe o está inactiva.")

    def create(self, db: Session, document_data: DocumentCreate) -> Document:
        self._validate_relations(
            db, document_data.category_id, document_data.call_stage_id
        )
        document = Document(
            **document_data.model_dump(),
            created_by="Sistema",
            updated_by="Sistema",
        )
        return self.repository.create(db, document)

    def get_all(self, db: Session, **filters) -> list[Document]:
        return self.repository.get_all(db, **filters)

    def get_by_id(self, db: Session, document_id: int) -> Document | None:
        return self.repository.get_by_id(db, document_id)

    def update(
        self, db: Session, document: Document, document_data: DocumentUpdate
    ) -> Document:
        changes = document_data.model_dump(exclude_unset=True)
        category_id = changes.get("category_id", document.category_id)
        call_stage_id = changes.get("call_stage_id", document.call_stage_id)
        self._validate_relations(db, category_id, call_stage_id)

        for field, value in changes.items():
            setattr(document, field, value)
        document.updated_by = "Sistema"
        return self.repository.update(db, document)

    def delete(self, db: Session, document: Document) -> None:
        self.repository.soft_delete(db, document)
