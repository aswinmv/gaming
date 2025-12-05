@echo off
echo ========================================
echo Starting GameStore Local Server
echo ========================================
echo.
echo Server will start at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

python -m http.server 8000

pause
