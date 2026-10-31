@echo off
echo ========================================================
echo   Brightloop Software - Subscription Management System
echo ========================================================
echo Starting unified server on http://localhost:8000 ...
start "" "http://localhost:8000"
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000
pause
