from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import TaxRule, User
from ..schemas import TaxRuleCreate, TaxRuleResponse
from ..auth import require_admin, get_current_user

router = APIRouter(prefix="/api/taxes", tags=["taxes"])

@router.get("/", response_model=List[TaxRuleResponse])
def get_tax_rules(db: Session = Depends(get_db)):
    return db.query(TaxRule).filter(TaxRule.is_active == True).all()

@router.post("/", response_model=TaxRuleResponse)
def create_tax_rule(
    req: TaxRuleCreate,
    current_user: User = Depends(require_admin), # Admin creates tax rules
    db: Session = Depends(get_db)
):
    tax_rule = TaxRule(
        name=req.name,
        rate_percent=req.rate_percent,
        country=req.country,
        is_active=req.is_active
    )
    db.add(tax_rule)
    db.commit()
    db.refresh(tax_rule)
    return tax_rule
