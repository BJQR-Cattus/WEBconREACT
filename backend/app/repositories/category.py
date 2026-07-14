from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.category import Category
from app.repositories.base import BaseRepository


class CategoryRepository(BaseRepository[Category]):

    def __init__(self):
        super().__init__(Category)

    def get_by_slug(self, db: Session, slug: str):
        return db.scalar(
            select(Category).where(Category.slug == slug)
        )

    def get_by_name(self, db: Session, name: str):
        return db.scalar(
            select(Category).where(Category.name == name)
        )
        