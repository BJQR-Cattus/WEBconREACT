from datetime import date

from sqlalchemy import Date, ForeignKey, Integer, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import BaseModel


class CallStage(BaseModel):
    __tablename__ = "tbl_call_stages"
    __table_args__ = (
        UniqueConstraint("call_id", "display_order", name="uq_call_stage_order"),
    )

    call_id: Mapped[int] = mapped_column(
        ForeignKey("tbl_calls.id", ondelete="CASCADE"), nullable=False, index=True
    )
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    display_order: Mapped[int] = mapped_column(Integer, nullable=False)
    stage_date: Mapped[date | None] = mapped_column(Date, nullable=True)

    call: Mapped["Call"] = relationship(back_populates="stages")
    documents: Mapped[list["Document"]] = relationship(back_populates="call_stage")
