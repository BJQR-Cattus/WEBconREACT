from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field

class ContactMessageCreate(BaseModel):
    full_name: str = Field(min_length=3, max_length=150)
    email: EmailStr
    phone: str = Field(min_length=6, max_length=30)
    institution: str | None = Field(default=None, max_length=200)
    subject: str = Field(min_length=3, max_length=100)
    message: str = Field(min_length=10)

class ContactMessageResponse(ContactMessageCreate):
    model_config = ConfigDict(from_attributes=True)
    id: int
    status: str
    created_at: datetime
