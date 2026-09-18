@echo off
title Notes World Dev Server
echo ==========================================================
echo   Starting Notes World Development Server...
echo ==========================================================
cd /d "%~dp0"
python server.py
pause
