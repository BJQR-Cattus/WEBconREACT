from app.models.category import Category
from app.repositories.category import CategoryRepository
from app.schemas.category import CategoryCreate
from app.utils.slug import generate_slug


class CategoryService:

    def __init__(self):
        self.repository = CategoryRepository()

    def create(self, db, category_data: CategoryCreate):

        # Verificar nombre duplicado
        if self.repository.get_by_name(db, category_data.name):
            raise ValueError("Ya existe una categoría con ese nombre.")

        slug = generate_slug(category_data.name)

        # Verificar slug duplicado
        original_slug = slug
        counter = 2

        while self.repository.get_by_slug(db, slug):
            slug = f"{original_slug}-{counter}"
            counter += 1

        category = Category(
            name=category_data.name,
            slug=slug,
            description=category_data.description,
            icon=category_data.icon,
            color=category_data.color,
            display_order=category_data.display_order,
            created_by="Sistema",
            updated_by="Sistema",
        )

        return self.repository.create(db, category)

    def get_all(self, db):
        return self.repository.get_all(db)

    def get_by_id(self, db, category_id: int):
        return self.repository.get_by_id(db, category_id)
    