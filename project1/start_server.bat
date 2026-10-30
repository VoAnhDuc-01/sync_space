@echo off
title Discrete Math Hub Local Server
echo ==========================================================
echo   DISCRETE MATH HUB - KHOI CHAY SERVER CUC BO
echo ==========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start_server.ps1"
if %ERRORLEVEL% NEQ 0 (
    echo Khong the khoi chay bang PowerShell, dang mo truc tiep index.html...
    start "" "%~dp0index.html"
)
pause
