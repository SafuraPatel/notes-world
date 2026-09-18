@echo off
echo ===================================================
echo Deploying all local changes directly to Netlify...
echo ===================================================
git add -A
git commit -m "Direct deploy to Netlify: %date% %time%"
git push origin main
echo.
echo ===================================================
echo Done! Changes are live on Netlify:
echo https://mynotesworld.netlify.app
echo ===================================================
pause
