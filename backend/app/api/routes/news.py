from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.dependencies.database import get_db
from app.models.news import News
from app.schemas.news import NewsCreate, NewsResponse

router = APIRouter(prefix="/news", tags=["News"])

@router.get("/", response_model=list[NewsResponse])
def list_news(db: Session = Depends(get_db)):
    return list(db.scalars(select(News).where(News.is_active.is_(True), News.status == "published").order_by(News.published_date.desc(), News.id.desc())))

@router.post("/", response_model=NewsResponse, status_code=status.HTTP_201_CREATED)
def create_news(data: NewsCreate, db: Session = Depends(get_db)):
    news = News(**data.model_dump(), created_by="Sistema", updated_by="Sistema")
    db.add(news); db.commit(); db.refresh(news)
    return news

@router.get("/{news_id}", response_model=NewsResponse)
def get_news(news_id: int, db: Session = Depends(get_db)):
    news = db.scalar(select(News).where(News.id == news_id, News.is_active.is_(True)))
    if not news: raise HTTPException(status_code=404, detail="Noticia no encontrada.")
    return news
