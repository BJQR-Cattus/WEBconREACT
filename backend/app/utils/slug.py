import re
import unicodedata


def generate_slug(text: str) -> str:
    """
    Convierte un texto en un slug amigable.

    Ejemplo:
    'Normativa Institucional'
    -> normativa-institucional
    """

    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("utf-8")

    text = text.lower()

    text = re.sub(r"[^a-z0-9]+", "-", text)

    text = text.strip("-")

    return text
