from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import QuotationTemplate, QuotationTemplateLine, User
from ..schemas import QuotationTemplateCreate, QuotationTemplateResponse
from ..auth import require_staff_or_admin, get_current_user

router = APIRouter(prefix="/api/quotation-templates", tags=["quotation-templates"])

@router.get("/", response_model=List[QuotationTemplateResponse])
def get_templates(db: Session = Depends(get_db)):
    return db.query(QuotationTemplate).order_by(QuotationTemplate.id.desc()).all()

@router.get("/{template_id}", response_model=QuotationTemplateResponse)
def get_template(template_id: int, db: Session = Depends(get_db)):
    tpl = db.query(QuotationTemplate).filter(QuotationTemplate.id == template_id).first()
    if not tpl:
        raise HTTPException(status_code=404, detail="Quotation template not found")
    return tpl

@router.post("/", response_model=QuotationTemplateResponse)
def create_template(
    req: QuotationTemplateCreate,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    tpl = QuotationTemplate(
        name=req.name,
        plan_id=req.plan_id,
        validity_days=req.validity_days,
        payment_terms=req.payment_terms,
        notes=req.notes
    )
    db.add(tpl)
    db.flush()

    for line in req.lines:
        tpl_line = QuotationTemplateLine(
            template_id=tpl.id,
            product_id=line.product_id,
            variant_id=line.variant_id,
            quantity=line.quantity,
            unit_price=line.unit_price
        )
        db.add(tpl_line)

    db.commit()
    db.refresh(tpl)
    return tpl
