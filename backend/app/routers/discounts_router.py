from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import DiscountRule, User
from ..schemas import DiscountRuleCreate, DiscountRuleResponse
from ..auth import require_admin, get_current_user

router = APIRouter(prefix="/api/discounts", tags=["discounts"])

@router.get("/", response_model=List[DiscountRuleResponse])
def get_discount_rules(db: Session = Depends(get_db)):
    return db.query(DiscountRule).order_by(DiscountRule.id.desc()).all()

@router.post("/", response_model=DiscountRuleResponse)
def create_discount_rule(
    req: DiscountRuleCreate,
    current_user: User = Depends(require_admin), # ONLY ADMIN can create discount rules!
    db: Session = Depends(get_db)
):
    existing = db.query(DiscountRule).filter(DiscountRule.code == req.code.upper().strip()).first()
    if existing:
        raise HTTPException(status_code=400, detail="Discount code already exists")

    discount = DiscountRule(
        code=req.code.upper().strip(),
        description=req.description,
        discount_type=req.discount_type,
        discount_value=req.discount_value,
        min_purchase_amount=req.min_purchase_amount,
        min_quantity=req.min_quantity,
        start_date=req.start_date,
        end_date=req.end_date,
        usage_limit=req.usage_limit,
        used_count=0,
        applies_to=req.applies_to,
        product_id=req.product_id,
        is_active=req.is_active
    )
    db.add(discount)
    db.commit()
    db.refresh(discount)
    return discount

@router.put("/{discount_id}/toggle-active", response_model=DiscountRuleResponse)
def toggle_discount_active(
    discount_id: int,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    discount = db.query(DiscountRule).filter(DiscountRule.id == discount_id).first()
    if not discount:
        raise HTTPException(status_code=404, detail="Discount rule not found")
    discount.is_active = not discount.is_active
    db.commit()
    db.refresh(discount)
    return discount
