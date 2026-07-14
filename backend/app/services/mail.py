import smtplib
from email.message import EmailMessage

from app.core.config import settings
from app.models.contact_message import ContactMessage


def send_contact_notification(contact: ContactMessage) -> None:
    if not all((settings.SMTP_USERNAME, settings.SMTP_PASSWORD, settings.SMTP_FROM_EMAIL, settings.SMTP_TO_EMAIL)):
        raise RuntimeError("El correo SMTP no está configurado.")
    message = EmailMessage()
    message["Subject"] = f"Nueva consulta web DRAH: {contact.subject}"
    message["From"] = settings.SMTP_FROM_EMAIL
    message["To"] = settings.SMTP_TO_EMAIL
    message["Reply-To"] = contact.email
    message.set_content(f"Nombre: {contact.full_name}\nCorreo: {contact.email}\nTeléfono: {contact.phone}\nInstitución: {contact.institution or 'No indicada'}\nMotivo: {contact.subject}\n\nMensaje:\n{contact.message}")
    with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=20) as server:
        server.starttls()
        server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
        server.send_message(message)
