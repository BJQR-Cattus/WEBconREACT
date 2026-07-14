"""create categories table

Revision ID: 0001_create_categories
Revises:
Create Date: 2026-07-14 00:00:00.000000
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "0001_create_categories"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "tbl_categories",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.text("now()"), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.text("now()"), nullable=False),
        sa.Column("created_by", sa.String(length=100), nullable=True),
        sa.Column("updated_by", sa.String(length=100), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("name", sa.String(length=100), nullable=False),
        sa.Column("slug", sa.String(length=120), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("icon", sa.String(length=80), nullable=True),
        sa.Column("color", sa.String(length=20), nullable=True),
        sa.Column("display_order", sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name", name="uq_category_name"),
        sa.UniqueConstraint("slug", name="uq_category_slug"),
    )
    op.create_index(op.f("ix_tbl_categories_id"), "tbl_categories", ["id"], unique=False)
    op.create_index(op.f("ix_tbl_categories_name"), "tbl_categories", ["name"], unique=False)
    op.create_index(op.f("ix_tbl_categories_slug"), "tbl_categories", ["slug"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_tbl_categories_slug"), table_name="tbl_categories")
    op.drop_index(op.f("ix_tbl_categories_name"), table_name="tbl_categories")
    op.drop_index(op.f("ix_tbl_categories_id"), table_name="tbl_categories")
    op.drop_table("tbl_categories")
