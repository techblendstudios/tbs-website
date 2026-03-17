@echo off
REM Tech Blend Studios - Website Setup
cls
echo.
echo  ===================================
echo  Tech Blend Studios - Website Setup  
echo  Retention. Revenue. Conversions.
echo  ===================================
echo.

REM Check Node.js
echo Checking Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js is installed
    node --version
) else (
    echo [ERROR] Node.js is NOT installed
    echo Please download from: https://nodejs.org/
    pause
    exit /b 1
)

echo.
REM Check npm
echo Checking npm...
npm --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] npm is installed
    npm --version
) else (
    echo [ERROR] npm is NOT found
    pause
    exit /b 1
)

echo.
REM Setup .env.local if needed
if not exist ".env.local" (
    if exist ".env.example" (
        copy ".env.example" ".env.local"
        echo [OK] Created .env.local from .env.example
        echo Please edit .env.local and add your credentials
        pause
    ) else (
        echo [WARN] No .env.local or .env.example found
    )
)

echo.
REM Install dependencies
echo Installing dependencies... this may take a minute
npm install
if %ERRORLEVEL% EQU 0 (
    echo [OK] Dependencies installed
) else (
    echo [ERROR] npm install failed
    echo Try: npm install --legacy-peer-deps
    pause
    exit /b 1
)

echo.
echo [OK] Setup complete!
echo.
echo Starting development server...
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C in the terminal to stop the server
echo.
pause

REM Start the development server
npm run dev
pause

