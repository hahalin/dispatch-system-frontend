@echo off
echo ========================================
echo 派遣人員管理系統 - 快速啟動
echo Staffing Management System - Quick Start
echo ========================================
echo.

echo 檢查 Node.js 安裝...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 錯誤: 未找到 Node.js
    echo 請先安裝 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 已安裝
node --version

echo.
echo 檢查專案依賴...
if not exist node_modules (
    echo 🔄 正在安裝依賴套件...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ 依賴安裝失敗
        pause
        exit /b 1
    )
    echo ✅ 依賴安裝完成
) else (
    echo ✅ 依賴已存在
)

echo.
echo 🚀 啟動開發服務器...
echo 瀏覽器將自動開啟 http://localhost:3000
echo 按 Ctrl+C 停止服務器
echo.

npm start
