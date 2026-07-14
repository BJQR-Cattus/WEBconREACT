from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class CallBase(BaseModel):
    number: str = Field(min_length=1, max_length=50)
    year: int = Field(ge=1900, le=2100)
    modality: str = Field(min_length=2, max_length=120)
    title: str = Field(min_length=3, max_length=300)
    description: str | None = None
    start_date: date | None = None
    end_date: date | None = None
    status: str = Field(default="draft", min_length=3, max_length=30)


class CallCreate(CallBase):
    pass


class CallUpdate(BaseModel):
    number: str | None = Field(default=None, min_length=1, max_length=50)
    year: int | None = Field(default=None, ge=1900, le=2100)
    modality: str | None = Field(default=None, min_length=2, max_length=120)
    title: str | None = Field(default=None, min_length=3, max_length=300)
    description: str | None = None
    start_date: date | None = None
    end_date: date | None = None
    status: str | None = Field(default=None, min_length=3, max_length=30)


class CallResponse(CallBase):
    model_config = ConfigDict(from_attributes=True)
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime


class CallStageBase(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    display_order: int = Field(ge=0)
    stage_date: date | None = None


class CallStageCreate(CallStageBase):
    pass


class CallStageUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=2, max_length=150)
    display_order: int | None = Field(default=None, ge=0)
    stage_date: date | None = None


class CallStageResponse(CallStageBase):
    model_config = ConfigDict(from_attributes=True)
    id: int
    call_id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime
