from typing import Generic, TypeVar

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.base import BaseModel

ModelType = TypeVar("ModelType", bound=BaseModel)


class BaseRepository(Generic[ModelType]):
    def __init__(self, model):
        self.model = model

    def get_all(self, db: Session):
        return db.scalars(
            select(self.model)
        ).all()

    def get_by_id(self, db: Session, obj_id: int):
        return db.get(self.model, obj_id)

    def create(self, db: Session, obj: ModelType):
        db.add(obj)
        db.commit()
        db.refresh(obj)
        return obj

    def update(self, db: Session, obj: ModelType):
        db.commit()
        db.refresh(obj)
        return obj

    def soft_delete(self, db: Session, obj: ModelType):
        obj.is_active = False
        db.commit()
        db.refresh(obj)
        return obj
    