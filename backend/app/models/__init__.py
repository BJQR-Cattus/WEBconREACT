"""Importa los modelos para registrarlos en el metadata de SQLAlchemy."""

from app.models.call import Call
from app.models.call_stage import CallStage
from app.models.category import Category
from app.models.contact_message import ContactMessage
from app.models.document import Document
from app.models.news import News
from app.models.resolution import Resolution

__all__ = [
    "Call",
    "CallStage",
    "Category",
    "ContactMessage",
    "Document",
    "News",
    "Resolution",
]
