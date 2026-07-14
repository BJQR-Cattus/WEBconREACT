from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.dependencies.database import get_db
from app.models.resolution import Resolution
from app.schemas.resolution import ResolutionCreate, ResolutionResponse, ResolutionUpdate

router = APIRouter(prefix="/resolutions", tags=["Resolutions"])


def get_resolution_or_404(db: Session, resolution_id: int) -> Resolution:
    resolution = db.scalar(select(Resolution).where(Resolution.id == resolution_id, Resolution.is_active.is_(True)))
    if not resolution:
        raise HTTPException(status_code=404, detail="Resolución no encontrada.")
    return resolution


@router.get("/", response_model=list[ResolutionResponse])
def list_resolutions(year: int | None = Query(default=None, ge=1900, le=2100), resolution_type: str | None = None, db: Session = Depends(get_db)):
    statement = select(Resolution).where(Resolution.is_active.is_(True))
    if year is not None:
        statement = statement.where(Resolution.year == year)
    if resolution_type:
        statement = statement.where(Resolution.resolution_type == resolution_type)
    return list(db.scalars(statement.order_by(Resolution.year.desc(), Resolution.number.desc())))


@router.post("/", response_model=ResolutionResponse, status_code=status.HTTP_201_CREATED)
def create_resolution(data: ResolutionCreate, db: Session = Depends(get_db)):
    resolution = Resolution(**data.model_dump(), created_by="Sistema", updated_by="Sistema")
    try:
        db.add(resolution); db.commit(); db.refresh(resolution)
    except IntegrityError:
        db.rollback(); raise HTTPException(status_code=409, detail="Ya existe una resolución con ese número, año y tipo.")
    return resolution


@router.get("/{resolution_id}", response_model=ResolutionResponse)
def get_resolution(resolution_id: int, db: Session = Depends(get_db)):
    return get_resolution_or_404(db, resolution_id)


@router.put("/{resolution_id}", response_model=ResolutionResponse)
def update_resolution(resolution_id: int, data: ResolutionUpdate, db: Session = Depends(get_db)):
    resolution = get_resolution_or_404(db, resolution_id)
    for field, value in data.model_dump(exclude_unset=True).items(): setattr(resolution, field, value)
    resolution.updated_by = "Sistema"
    try:
        db.commit(); db.refresh(resolution)
    except IntegrityError:
        db.rollback(); raise HTTPException(status_code=409, detail="Ya existe una resolución con ese número, año y tipo.")
    return resolution


@router.delete("/{resolution_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_resolution(resolution_id: int, db: Session = Depends(get_db)):
    resolution = get_resolution_or_404(db, resolution_id)
    resolution.is_active = False; db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
