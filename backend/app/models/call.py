from datetime import date

from sqlalchemy import Date, Integer, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import BaseModel


class Call(BaseModel):
    __tablename__ = "tbl_calls"
    __table_args__ = (
        UniqueConstraint("number", "year", "modality", name="uq_call_number_year_modality"),
    )

    number: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    year: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    modality: Mapped[str] = mapped_column(String(120), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(300), nullable=False, index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    start_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    end_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    status: Mapped[str] = mapped_column(String(30), default="draft", nullable=False, index=True)

    stages: Mapped[list["CallStage"]] = relationship(
        back_populates="call", cascade="all, delete-orphan", order_by="CallStage.display_order"
    )
