import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from .database import engine, Base
from .seed_data import seed_database
from .routers import (
    auth_router,
    users_router,
    products_router,
    plans_router,
    taxes_router,
    discounts_router,
    quote_templates_router,
    subscriptions_router,
    invoices_router,
    payments_router,
    finance_router
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    seed_database()
    yield

app = FastAPI(
    title="Zebra5 - Subscription Management System",
    description="One unified autonomous software platform that runs the full life of a subscription business",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# High-Efficiency GZip Response Compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Register routers under /api
app.include_router(auth_router.router)
app.include_router(users_router.router)
app.include_router(products_router.router)
app.include_router(plans_router.router)
app.include_router(taxes_router.router)
app.include_router(discounts_router.router)
app.include_router(quote_templates_router.router)
app.include_router(subscriptions_router.router)
app.include_router(invoices_router.router)
app.include_router(payments_router.router)
app.include_router(finance_router.router)

# Serve built frontend static assets if available
dist_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "dist"))
assets_dir = os.path.join(dist_dir, "assets")

if os.path.exists(assets_dir):
    app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

@app.get("/{full_path:path}")
def serve_spa(full_path: str):
    # If API route, return 404 if not matched
    if full_path.startswith("api"):
        return {"error": "Not found"}

    index_file = os.path.join(dist_dir, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {
        "system": "Zebra5 Subscription Management System",
        "status": "operational",
        "api_docs": "/docs",
        "frontend_build": "Run 'cd frontend; npm run build' to bundle UI"
    }
