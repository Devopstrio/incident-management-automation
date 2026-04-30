from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, incidents, playbooks, analytics, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(incidents.router, prefix="/incidents", tags=["incidents"])
api_router.include_router(playbooks.router, prefix="/playbooks", tags=["playbooks"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
