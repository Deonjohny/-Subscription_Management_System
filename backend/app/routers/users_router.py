from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User, UserRole
from ..schemas import StaffCreate, UserResponse
from ..auth import get_current_user, require_admin, require_staff_or_admin, hash_password

router = APIRouter(prefix="/api/users", tags=["users"])

@router.get("/", response_model=List[UserResponse])
def get_users(
    role: Optional[str] = None,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    query = db.query(User)
    if role:
        query = query.filter(User.role == role)
    return query.order_by(User.id.desc()).all()

@router.get("/customers", response_model=List[UserResponse])
def get_customers(
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    return db.query(User).filter(User.role == UserRole.CUSTOMER).order_by(User.name.asc()).all()

@router.post("/staff", response_model=UserResponse)
def create_staff_member(
    req: StaffCreate,
    current_user: User = Depends(require_admin), # ONLY ADMIN can add staff!
    db: Session = Depends(get_db)
):
    existing = db.query(User).filter(User.email == req.email.lower().strip()).first()
    if existing:
        raise HTTPException(status_code=400, detail="User with this email already exists")

    staff_user = User(
        email=req.email.lower().strip(),
        password_hash=hash_password(req.password),
        name=req.name,
        role=UserRole.STAFF,
        phone=req.phone
    )
    db.add(staff_user)
    db.commit()
    db.refresh(staff_user)
    return staff_user
