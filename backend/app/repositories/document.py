from sqlalchemy import or_, select
from sqlalchemy.orm import Session

from app.models.document import Document
from app.repositories.base import BaseRepository


class DocumentRepository(BaseRepository[Document]):
    def __init__(self):
        super().__init__(Document)

    def get_all(
        self,
        db: Session,
        *,
        category_id: int | None = None,
        year: int | None = None,
        status: str | None = None,
        search: str | None = None,
        offset: int = 0,
        limit: int = 50,
    ) -> list[Document]:
        statement = select(Document).where(Document.is_active.is_(True))

        if category_id is not None:
            statement = statement.where(Document.category_id == category_id)
        if year is not None:
            statement = statement.where(Document.year == year)
        if status is not None:
            statement = statement.where(Document.status == status)
        if search:
            term = f"%{search.strip()}%"
            statement = statement.where(
                or_(Document.title.ilike(term), Document.description.ilike(term))
            )

        statement = statement.order_by(
            Document.publication_date.desc(), Document.id.desc()
        ).offset(offset).limit(limit)
        return list(db.scalars(statement))

    def get_by_id(self, db: Session, obj_id: int) -> Document | None:
        return db.scalar(
            select(Document).where(
                Document.id == obj_id,
                Document.is_active.is_(True),
            )
        )
