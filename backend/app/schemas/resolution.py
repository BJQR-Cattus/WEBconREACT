from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class ResolutionBase(BaseModel):
    number: str = Field(min_length=1, max_length=50)
    year: int = Field(ge=1900, le=2100)
    resolution_type: str = Field(min_length=3, max_length=120)
    resolution_date: date | None = None
    description: str | None = None
    file_url: str = Field(min_length=1, max_length=500)
    status: str = Field(default="published", min_length=3, max_length=30)


class ResolutionCreate(ResolutionBase):
    pass


class ResolutionUpdate(BaseModel):
    number: str | None = Field(default=None, min_length=1, max_length=50)
    year: int | None = Field(default=None, ge=1900, le=2100)
    resolution_type: str | None = Field(default=None, min_length=3, max_length=120)
    resolution_date: date | None = None
    description: str | None = None
    file_url: str | None = Field(default=None, min_length=1, max_length=500)
    status: str | None = Field(default=None, min_length=3, max_length=30)


class ResolutionResponse(ResolutionBase):
    model_config = ConfigDict(from_attributes=True)
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime
