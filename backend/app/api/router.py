from fastapi import APIRouter

from app.api.routes.category import router as category_router
from app.api.routes.calls import router as calls_router
from app.api.routes.contact import router as contact_router
from app.api.routes.documents import router as documents_router
from app.api.routes.news import router as news_router
from app.api.routes.resolutions import router as resolutions_router

api_router = APIRouter()

api_router.include_router(category_router)
api_router.include_router(documents_router)
api_router.include_router(news_router)
api_router.include_router(resolutions_router)
api_router.include_router(calls_router)
api_router.include_router(contact_router)
