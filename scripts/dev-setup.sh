#!/bin/bash

# 🐾 nekoQL Development Setup Script

echo "🐾 Welcome to nekoQL development setup!"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm run install:all

# Create .env files if they don't exist
if [ ! -f "backend/.env" ]; then
    echo "🔧 Creating backend .env file..."
    cat > backend/.env << EOF
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
EOF
fi

if [ ! -f "frontend/.env" ]; then
    echo "🔧 Creating frontend .env file..."
    cat > frontend/.env << EOF
VITE_API_URL=http://localhost:3001
EOF
fi

echo "✅ Environment files created"

# Build the project
echo "🔨 Building project..."
npm run build

echo ""
echo "🎉 Setup complete! You can now start development:"
echo ""
echo "  npm run dev          # Start both frontend and backend"
echo "  npm run dev:backend  # Start only backend"
echo "  npm run dev:frontend # Start only frontend"
echo ""
echo "📚 Useful URLs:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:3001"
echo "  API Docs: http://localhost:3001/api/docs"
echo "  Health Check: http://localhost:3001/api/health"
echo ""
echo "🐾 Happy coding!"