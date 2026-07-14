from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.dependencies.database import get_db
from app.models.call import Call
from app.models.call_stage import CallStage
from app.schemas.call import CallCreate, CallResponse, CallStageCreate, CallStageResponse, CallStageUpdate, CallUpdate

router = APIRouter(prefix="/calls", tags=["Calls"])


def get_call_or_404(db: Session, call_id: int) -> Call:
    call = db.scalar(select(Call).where(Call.id == call_id, Call.is_active.is_(True)))
    if not call: raise HTTPException(status_code=404, detail="Convocatoria no encontrada.")
    return call


def get_stage_or_404(db: Session, call_id: int, stage_id: int) -> CallStage:
    stage = db.scalar(select(CallStage).where(CallStage.id == stage_id, CallStage.call_id == call_id, CallStage.is_active.is_(True)))
    if not stage: raise HTTPException(status_code=404, detail="Etapa no encontrada.")
    return stage


@router.get("/", response_model=list[CallResponse])
def list_calls(year: int | None = Query(default=None, ge=1900, le=2100), modality: str | None = None, db: Session = Depends(get_db)):
    statement = select(Call).where(Call.is_active.is_(True))
    if year is not None: statement = statement.where(Call.year == year)
    if modality: statement = statement.where(Call.modality == modality)
    return list(db.scalars(statement.order_by(Call.year.desc(), Call.number.desc())))


@router.post("/", response_model=CallResponse, status_code=status.HTTP_201_CREATED)
def create_call(data: CallCreate, db: Session = Depends(get_db)):
    call = Call(**data.model_dump(), created_by="Sistema", updated_by="Sistema")
    try:
        db.add(call); db.commit(); db.refresh(call)
    except IntegrityError:
        db.rollback(); raise HTTPException(status_code=409, detail="Ya existe una convocatoria con ese número, año y modalidad.")
    return call


@router.get("/{call_id}", response_model=CallResponse)
def get_call(call_id: int, db: Session = Depends(get_db)): return get_call_or_404(db, call_id)


@router.put("/{call_id}", response_model=CallResponse)
def update_call(call_id: int, data: CallUpdate, db: Session = Depends(get_db)):
    call = get_call_or_404(db, call_id)
    for field, value in data.model_dump(exclude_unset=True).items(): setattr(call, field, value)
    call.updated_by = "Sistema"
    try:
        db.commit(); db.refresh(call)
    except IntegrityError:
        db.rollback(); raise HTTPException(status_code=409, detail="Ya existe una convocatoria con ese número, año y modalidad.")
    return call


@router.delete("/{call_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_call(call_id: int, db: Session = Depends(get_db)):
    call = get_call_or_404(db, call_id); call.is_active = False; db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.get("/{call_id}/stages", response_model=list[CallStageResponse])
def list_stages(call_id: int, db: Session = Depends(get_db)):
    get_call_or_404(db, call_id)
    return list(db.scalars(select(CallStage).where(CallStage.call_id == call_id, CallStage.is_active.is_(True)).order_by(CallStage.display_order)))


@router.post("/{call_id}/stages", response_model=CallStageResponse, status_code=status.HTTP_201_CREATED)
def create_stage(call_id: int, data: CallStageCreate, db: Session = Depends(get_db)):
    get_call_or_404(db, call_id); stage = CallStage(call_id=call_id, **data.model_dump(), created_by="Sistema", updated_by="Sistema")
    try:
        db.add(stage); db.commit(); db.refresh(stage)
    except IntegrityError:
        db.rollback(); raise HTTPException(status_code=409, detail="Ya existe una etapa con ese orden en la convocatoria.")
    return stage


@router.put("/{call_id}/stages/{stage_id}", response_model=CallStageResponse)
def update_stage(call_id: int, stage_id: int, data: CallStageUpdate, db: Session = Depends(get_db)):
    stage = get_stage_or_404(db, call_id, stage_id)
    for field, value in data.model_dump(exclude_unset=True).items(): setattr(stage, field, value)
    stage.updated_by = "Sistema"; db.commit(); db.refresh(stage)
    return stage


@router.delete("/{call_id}/stages/{stage_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_stage(call_id: int, stage_id: int, db: Session = Depends(get_db)):
    stage = get_stage_or_404(db, call_id, stage_id); stage.is_active = False; db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
