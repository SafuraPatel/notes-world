@echo off
echo ===================================================
echo Starting Notes World Auto-Deploy Watcher...
echo Every time you edit and save any file, it will
echo automatically push directly to Netlify!
echo ===================================================
python auto_deploy_watcher.py
pause
