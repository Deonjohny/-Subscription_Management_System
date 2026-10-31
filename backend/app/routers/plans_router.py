from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Plan, User
from ..schemas import PlanCreate, PlanUpdate, PlanResponse
from ..auth import require_admin, get_current_user

router = APIRouter(prefix="/api/plans", tags=["plans"])

@router.get("/", response_model=List[PlanResponse])
def get_plans(db: Session = Depends(get_db)):
    return db.query(Plan).filter(Plan.is_active == True).order_by(Plan.id.desc()).all()

@router.post("/", response_model=PlanResponse)
def create_plan(
    req: PlanCreate,
    current_user: User = Depends(require_admin), # Admin decides plan configurations
    db: Session = Depends(get_db)
):
    plan = Plan(
        name=req.name,
        description=req.description,
        cost=req.cost,
        billing_interval=req.billing_interval,
        min_quantity=req.min_quantity,
        start_date=req.start_date,
        end_date=req.end_date,
        auto_close_on_end=req.auto_close_on_end,
        allow_early_close=req.allow_early_close,
        allow_pause=req.allow_pause,
        allow_renew=req.allow_renew,
        is_active=req.is_active
    )
    db.add(plan)
    db.commit()
    db.refresh(plan)
    return plan

@router.put("/{plan_id}", response_model=PlanResponse)
def update_plan(
    plan_id: int,
    req: PlanUpdate,
    current_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    plan = db.query(Plan).filter(Plan.id == plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")

    for field, val in req.dict(exclude_unset=True).items():
        setattr(plan, field, val)

    db.commit()
    db.refresh(plan)
    return plan
