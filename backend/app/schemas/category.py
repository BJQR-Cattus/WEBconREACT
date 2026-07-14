from pydantic import BaseModel, ConfigDict, Field

class CategoryBase(BaseModel):
    name: str = Field(..., min_length=3, max_length=100)
    description: str | None = Field(default=None, max_length=500)
    icon: str | None = Field(default=None, max_length=80)
    color: str | None = Field(default=None, max_length=20)
    display_order: int = Field(default=0, ge=0)

class CategoryCreate(CategoryBase):
    pass

class CategoryUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=3, max_length=100)
    description: str | None = Field(default=None, max_length=500)
    icon: str | None = Field(default=None, max_length=80)
    color: str | None = Field(default=None, max_length=20)
    display_order: int | None = Field(default=None, ge=0)
    is_active: bool | None = None

class CategoryResponse(CategoryBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    is_active: bool
    