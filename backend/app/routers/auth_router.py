import datetime
import secrets
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User, UserRole
from ..schemas import (
    UserRegister, UserLogin, ForgotPasswordRequest, ResetPasswordRequest,
    TokenResponse, UserResponse
)
from ..auth import hash_password, verify_password, create_access_token, get_current_user

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/register", response_model=TokenResponse)
def register(req: UserRegister, db: Session = Depends(get_db)):
    # Check if email is already taken
    existing = db.query(User).filter(User.email == req.email.lower().strip()).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email already exists"
        )

    # Password policy already validated by Pydantic validator
    user = User(
        email=req.email.lower().strip(),
        password_hash=hash_password(req.password),
        name=req.name,
        role=UserRole.CUSTOMER, # Self-registration always creates customer
        company_name=req.company_name,
        phone=req.phone,
        address=req.address
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_access_token(data={"sub": str(user.id), "role": user.role})
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }

@router.post("/login", response_model=TokenResponse)
def login(req: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == req.email.lower().strip()).first()
    if not user or not verify_password(req.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )

    token = create_access_token(data={"sub": str(user.id), "role": user.role})
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }

@router.post("/forgot-password")
def forgot_password(req: ForgotPasswordRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == req.email.lower().strip()).first()
    if not user:
        # Don't leak user existence in prod, but for demo return helpful info
        return {"message": "If this email is registered, a password reset link has been sent.", "reset_token": None}

    reset_token = secrets.token_urlsafe(32)
    user.reset_token = reset_token
    user.reset_token_expiry = datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    db.commit()

    return {
        "message": "Password reset link sent to your registered email.",
        "reset_token": reset_token, # surfaced for easy UI demonstration & testing
        "reset_link": f"/reset-password?token={reset_token}&email={user.email}"
    }

@router.post("/reset-password")
def reset_password(req: ResetPasswordRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == req.email.lower().strip()).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid email or token")

    if not user.reset_token or user.reset_token != req.reset_token:
        raise HTTPException(status_code=400, detail="Invalid or expired reset token")

    if user.reset_token_expiry and user.reset_token_expiry < datetime.datetime.utcnow():
        raise HTTPException(status_code=400, detail="Reset token has expired")

    user.password_hash = hash_password(req.new_password)
    user.reset_token = None
    user.reset_token_expiry = None
    db.commit()

    return {"message": "Password has been successfully reset. You can now log in."}

@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user
