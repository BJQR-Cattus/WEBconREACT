from datetime import date

from sqlalchemy import Boolean, Date, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import BaseModel


class Document(BaseModel):
    __tablename__ = "tbl_documents"

    title: Mapped[str] = mapped_column(String(250), nullable=False, index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    file_type: Mapped[str] = mapped_column(String(30), nullable=False)
    publication_date: Mapped[date | None] = mapped_column(Date, nullable=True, index=True)
    year: Mapped[int | None] = mapped_column(Integer, nullable=True, index=True)
    file_url: Mapped[str] = mapped_column(String(500), nullable=False)
    original_filename: Mapped[str | None] = mapped_column(String(255), nullable=True)
    group_name: Mapped[str | None] = mapped_column(String(150), nullable=True, index=True)
    status: Mapped[str] = mapped_column(String(30), default="published", nullable=False, index=True)
    is_featured: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    category_id: Mapped[int] = mapped_column(
        ForeignKey("tbl_categories.id", ondelete="RESTRICT"), nullable=False, index=True
    )
    call_stage_id: Mapped[int | None] = mapped_column(
        ForeignKey("tbl_call_stages.id", ondelete="SET NULL"), nullable=True, index=True
    )

    category: Mapped["Category"] = relationship(back_populates="documents")
    call_stage: Mapped["CallStage | None"] = relationship(back_populates="documents")
