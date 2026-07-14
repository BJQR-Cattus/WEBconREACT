from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


class DocumentBase(BaseModel):
    title: str = Field(min_length=3, max_length=250)
    description: str | None = None
    file_type: str = Field(min_length=2, max_length=30)
    publication_date: date | None = None
    year: int | None = Field(default=None, ge=1900, le=2100)
    file_url: str = Field(min_length=1, max_length=500)
    original_filename: str | None = Field(default=None, max_length=255)
    group_name: str | None = Field(default=None, max_length=150)
    status: str = Field(default="published", min_length=3, max_length=30)
    is_featured: bool = False
    category_id: int = Field(gt=0)
    call_stage_id: int | None = Field(default=None, gt=0)


class DocumentCreate(DocumentBase):
    pass


class DocumentUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3, max_length=250)
    description: str | None = None
    file_type: str | None = Field(default=None, min_length=2, max_length=30)
    publication_date: date | None = None
    year: int | None = Field(default=None, ge=1900, le=2100)
    file_url: str | None = Field(default=None, min_length=1, max_length=500)
    original_filename: str | None = Field(default=None, max_length=255)
    group_name: str | None = Field(default=None, max_length=150)
    status: str | None = Field(default=None, min_length=3, max_length=30)
    is_featured: bool | None = None
    category_id: int | None = Field(default=None, gt=0)
    call_stage_id: int | None = Field(default=None, gt=0)


class DocumentResponse(DocumentBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime
