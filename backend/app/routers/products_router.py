from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Product, ProductVariant, User
from ..schemas import (
    ProductCreate, ProductResponse, ProductUpdate,
    ProductVariantCreate, ProductVariantResponse
)
from ..auth import require_admin, require_staff_or_admin, get_current_user

router = APIRouter(prefix="/api/products", tags=["products"])

@router.get("/", response_model=List[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.is_active == True).order_by(Product.id.desc()).all()

@router.post("/", response_model=ProductResponse)
def create_product(
    req: ProductCreate,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    product = Product(
        name=req.name,
        type=req.type,
        sales_price=req.sales_price,
        cost_price=req.cost_price,
        notes=req.notes,
        is_active=req.is_active
    )
    db.add(product)
    db.flush()

    for v in req.variants:
        variant = ProductVariant(
            product_id=product.id,
            attribute_name=v.attribute_name,
            attribute_value=v.attribute_value,
            extra_price=v.extra_price
        )
        db.add(variant)

    db.commit()
    db.refresh(product)
    return product

@router.put("/{product_id}", response_model=ProductResponse)
def update_product(
    product_id: int,
    req: ProductUpdate,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    for field, val in req.dict(exclude_unset=True).items():
        setattr(product, field, val)

    db.commit()
    db.refresh(product)
    return product

@router.post("/{product_id}/variants", response_model=ProductVariantResponse)
def add_product_variant(
    product_id: int,
    req: ProductVariantCreate,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    variant = ProductVariant(
        product_id=product.id,
        attribute_name=req.attribute_name,
        attribute_value=req.attribute_value,
        extra_price=req.extra_price
    )
    db.add(variant)
    db.commit()
    db.refresh(variant)
    return variant

@router.delete("/variants/{variant_id}")
def delete_variant(
    variant_id: int,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    variant = db.query(ProductVariant).filter(ProductVariant.id == variant_id).first()
    if not variant:
        raise HTTPException(status_code=404, detail="Variant not found")
    db.delete(variant)
    db.commit()
    return {"message": "Variant deleted successfully"}
