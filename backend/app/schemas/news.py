from datetime import date, datetime
from pydantic import BaseModel, ConfigDict, Field

class NewsCreate(BaseModel):
    title: str = Field(min_length=3, max_length=300)
    summary: str = Field(min_length=3)
    content: str | None = None
    image_url: str | None = Field(default=None, max_length=500)
    published_date: date | None = None
    source: str | None = Field(default=None, max_length=150)
    source_url: str | None = Field(default=None, max_length=500)
    status: str = Field(default="published", max_length=30)
    is_featured: bool = False

class NewsResponse(NewsCreate):
    model_config = ConfigDict(from_attributes=True)
    id: int
    is_active: bool
    created_at: datetime
    updated_at: datetime
