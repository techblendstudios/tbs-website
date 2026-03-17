#!/bin/bash

# ─────────────────────────────────────────────
# Tech Blend Studios — Website Setup Script
# For macOS / Linux
# ─────────────────────────────────────────────

set -e

echo ""
echo " ████████╗██████╗ ███████╗"
echo "    ██╔══╝██╔══██╗██╔════╝"
echo "    ██║   ██████╔╝███████╗"
echo "    ██║   ██╔══██╗╚════██║"
echo "    ██║   ██████╔╝███████║"
echo "    ╚═╝   ╚═════╝ ╚══════╝"
echo ""
echo " Tech Blend Studios — Website Setup"
echo " Retention. Revenue. Conversions."
echo " ─────────────────────────────────"
echo ""

# ── STEP 1: Check Node.js ────────────────────
echo "[1/5] Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo ""
    echo " [!] Node.js is NOT installed."
    echo "     Install via: https://nodejs.org/en/download"
    echo "     Or via nvm:  https://github.com/nvm-sh/nvm"
    echo ""
    exit 1
fi
echo " [OK] Node.js: $(node --version)"

# ── STEP 2: Check npm ────────────────────────
echo ""
echo "[2/5] Checking npm..."
if ! command -v npm &> /dev/null; then
    echo " [!] npm not found. Reinstall Node.js."
    exit 1
fi
echo " [OK] npm: v$(npm --version)"

# ── STEP 3: Create .env.local ────────────────
echo ""
echo "[3/5] Setting up environment variables..."
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo " [OK] Created .env.local from .env.example"
    echo ""
    echo " ┌──────────────────────────────────────────────┐"
    echo " │  ACTION REQUIRED — Open .env.local and fill  │"
    echo " │  in your Supabase and Cloudinary credentials  │"
    echo " └──────────────────────────────────────────────┘"
    echo ""
else
    echo " [OK] .env.local already exists — skipping"
fi

# ── STEP 4: Install dependencies ─────────────
echo ""
echo "[4/5] Installing dependencies..."
echo ""
npm install
echo ""
echo " [OK] Dependencies installed."

# ── STEP 5: Start dev server ─────────────────
echo ""
echo "[5/5] Starting development server..."
echo ""
echo " ─────────────────────────────────────────────"
echo "  Your TBS website is starting at:"
echo "  http://localhost:3000"
echo ""
echo "  Press Ctrl+C to stop the server."
echo " ─────────────────────────────────────────────"
echo ""

# Open browser on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    sleep 2 && open http://localhost:3000 &
fi

npm run dev
