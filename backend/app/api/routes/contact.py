import smtplib

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.dependencies.database import get_db
from app.models.contact_message import ContactMessage
from app.schemas.contact import ContactMessageCreate, ContactMessageResponse
from app.services.mail import send_contact_notification

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED)
def create_contact_message(data: ContactMessageCreate, db: Session = Depends(get_db)):
    message = ContactMessage(**data.model_dump(), status="pending", created_by="Publico", updated_by="Publico")
    db.add(message); db.commit(); db.refresh(message)
    try:
        send_contact_notification(message)
    except RuntimeError as error:
        raise HTTPException(status_code=503, detail=str(error))
    except smtplib.SMTPException:
        raise HTTPException(status_code=502, detail="No se pudo enviar la notificación por correo.")
    return message

