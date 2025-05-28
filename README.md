# 派遣人員管理系統 Frontend

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

一個現代化的派遣人員管理系統前端應用程式，使用 React 和 Tailwind CSS 構建，提供完整的人力資源管理功能。

## ✨ 主要功能

### 🏢 **總覽儀表板**
- 等待安排的專案一覽表
- 即時專案狀態追蹤
- 人力需求分析

### 👥 **人員管理**
- 完整的員工資料管理
- 技能雷達圖分析
- 專案經歷追蹤
- 派遣狀態管理

### 🏪 **客戶管理**
- 客戶資訊與專案管理
- 專案詳細資訊追蹤
- 團隊配置管理
- 技能需求分析

### 📅 **面談管理**
- 智慧面談安排系統
- 客戶-專案級聯選擇
- 面談記錄與評估
- 進度追蹤

## 🚀 快速開始

### 環境需求
- Node.js 16.0+
- npm 或 yarn

### 安裝與啟動

```bash
# 1. 克隆專案
git clone https://github.com/hahalin/dispatch-system-frontend.git

# 2. 進入專案目錄
cd dispatch-system-frontend

# 3. 安裝依賴
npm install

# 4. 啟動開發服務器
npm start

# 5. 在瀏覽器中訪問
# http://localhost:3000
```

## 🛠️ 技術堆疊

- **Frontend Framework**: React 18.2.0
- **UI Framework**: Tailwind CSS 3.3.0
- **Icons**: Lucide React 0.263.1
- **Charts**: Recharts 2.8.0
- **Build Tool**: Create React App

## 📱 系統截圖

### 總覽頁面
![Overview](docs/screenshots/overview.png)

### 人員管理
![Employee Management](docs/screenshots/employee-management.png)

### 客戶管理
![Client Management](docs/screenshots/client-management.png)

### 面談安排
![Interview Scheduling](docs/screenshots/interview-scheduling.png)

## 🏗️ 專案結構

```
src/
├── components/
│   ├── StaffingShowcase.js     # 主要組件
│   └── InterviewManagement.js  # 面談管理組件
├── App.js                      # 應用程式根組件
├── index.js                    # 應用程式入口
└── index.css                   # 全域樣式
```

## 🎨 設計特色

- **現代化 UI**: 使用 Tailwind CSS 的現代設計語言
- **響應式設計**: 支援桌面和移動設備
- **直觀操作**: 清晰的導航和用戶友好的界面
- **資料視覺化**: 使用圖表展示關鍵資料

## 📊 功能亮點

### 智慧面談安排
- 客戶與專案的級聯選擇
- 員工技能自動匹配
- 即時專案資訊預覽

### 員工技能分析
- 雷達圖展示核心技能
- 專案經歷詳細追蹤
- 產業經驗統計

### 客戶專案管理
- 表格式專案管理
- 人力需求與配置對比
- 專案進度追蹤

## 📚 文檔

- [快速入門指南](QUICK_START_GUIDE.md) - 詳細的系統說明與開發指南
- [API 文檔](docs/API.md) - 後端 API 接口說明
- [部署指南](docs/DEPLOYMENT.md) - 生產環境部署說明

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

### 開發流程
1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 程式碼規範
- 使用 ES6+ 語法
- 遵循 React Hooks 規則
- 使用 Tailwind CSS 進行樣式設計
- 保持組件的功能單一性

## 📋 開發計劃

### 短期目標 (v1.1)
- [ ] 資料持久化
- [ ] 搜尋與篩選功能
- [ ] 資料匯出功能
- [ ] 員工技能匹配演算法

### 長期目標 (v2.0)
- [ ] 後端 API 整合
- [ ] 即時通知系統
- [ ] 移動端 App
- [ ] 進階分析報表

## 🐛 已知問題

- 資料目前存儲在記憶體中，重新整理會丟失
- 圖表在小螢幕上可能需要優化
- 需要增加更多的表單驗證

## 📄 授權

本專案使用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 👨‍💻 作者

- **開發團隊** - [hahalin](https://github.com/hahalin)

## 🙏 致謝

- [React](https://reactjs.org/) - UI 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Lucide](https://lucide.dev/) - 圖標庫
- [Recharts](https://recharts.org/) - 圖表庫

---

如果這個專案對您有幫助，請給我們一個 ⭐ Star！