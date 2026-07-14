from datetime import date

from sqlalchemy import Date, Integer, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import BaseModel


class Resolution(BaseModel):
    __tablename__ = "tbl_resolutions"
    __table_args__ = (
        UniqueConstraint("number", "year", "resolution_type", name="uq_resolution_number_year_type"),
    )

    number: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    resolution_type: Mapped[str] = mapped_column(String(120), nullable=False, index=True)
    resolution_date: Mapped[date | None] = mapped_column(Date, nullable=True, index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    file_url: Mapped[str] = mapped_column(String(500), nullable=False)
    status: Mapped[str] = mapped_column(String(30), default="published", nullable=False, index=True)
