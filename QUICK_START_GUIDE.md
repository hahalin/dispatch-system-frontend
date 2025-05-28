# 派遣人員管理系統 - 快速入門指南

## 🚀 系統概覽

這是一個基於 React 的派遣人員管理系統，用於管理員工、客戶、專案和面談安排。系統採用現代化的 UI 設計，提供完整的人力資源派遣管理功能。

## 📁 專案結構

```
dispatch-system-frontend/
├── src/
│   ├── components/
│   │   └── StaffingShowcase.js     # 主要組件文件
│   ├── App.js                      # 應用程式入口
│   └── index.js                    # React 應用程式渲染
├── public/                         # 靜態資源
├── package.json                    # 專案依賴
└── QUICK_START_GUIDE.md           # 本指南
```

## 🛠️ 技術堆疊

- **前端框架**: React 18.2.0
- **UI 框架**: Tailwind CSS 3.3.0
- **圖標庫**: Lucide React 0.263.1
- **圖表庫**: Recharts 2.8.0
- **構建工具**: Create React App

## 🏃‍♂️ 快速啟動

### 1. 安裝依賴
```bash
cd D:\repo\dispatch-system-frontend
npm install
```

### 2. 啟動開發服務器
```bash
npm start
```

### 3. 訪問應用程式
在瀏覽器中打開: `http://localhost:3000`

## 🧭 系統功能導覽

### 主要模組

#### 1. 總覽 (Overview)
- **功能**: 顯示等待安排的專案列表
- **特色**: 
  - 表格式呈現，包含專案名稱、客戶、預算、執行期間、人力需求、核心技能、狀態
  - 篩選出狀態為「準備中」或「規劃中」的專案
  - 空狀態友善提示

#### 2. 人員管理 (Employee Management)
- **列表頁**: 表格式員工清單
  - 姓名、狀態、核心技能、產業經驗、經驗年資、期望薪資、評分
  - 篩選功能（可派遣、已派遣、面談中）
  - 查看、編輯、報表操作
  
- **詳情頁**: 完整員工資料
  - 個人基本資訊
  - 技術能力雷達圖
  - 專案經歷（多標籤頁切換）
  - 學歷背景與語言能力

#### 3. 客戶管理 (Client Management)
- **列表頁**: 表格式客戶清單
  - 客戶名稱、產業、聯絡窗口、派遣人數、專案數量、累計金額、狀態
  - 當前/累計派遣人數、進行中/總計專案數量
  
- **客戶詳情頁**: 
  - 客戶基本資訊與統計
  - 專案列表（表格式）
  - 當前派遣人員
  - 人力需求類型
  
- **專案詳情頁**:
  - 專案基本資訊與統計
  - 技能需求分析
  - 當前團隊成員

#### 4. 面談管理 (Interview Management)
- **主列表**: 表格式面談記錄
  - 待進行/已完成分頁
  - 日期時間、應徵者、客戶/職位、類型/輪次、面談官、地點
  - 已完成面談顯示結果與評分
  
- **安排面談**: 完整的面談安排介面
  - 應徵者選擇（僅顯示可派遣員工）
  - 客戶與專案級聯選擇
  - 面談時間、地點、類型設定
  - 專案資訊即時預覽
  
- **面談詳情**: 
  - 面談基本資訊
  - 職位需求
  - 評估結果（已完成面談）
  - 準備事項（待進行面談）

## 💾 資料結構

### 核心資料模型

#### 員工 (Employee)
```javascript
{
  id: number,
  name: string,
  englishName: string,
  age: number,
  status: '可派遣' | '已派遣' | '面談中',
  technicalSkills: {
    programming: {
      languages: string[],
      frontend: string[],
      backend: string[],
      mobile: string[]
    },
    databases: string[],
    tools: string[]
  },
  projectExperience: Array<{
    company: string,
    projectName: string,
    period: string,
    role: string,
    technologies: object,
    achievements: string[]
  }>
}
```

#### 客戶 (Client)
```javascript
{
  id: number,
  name: string,
  shortName: string,
  industry: string,
  activeCount: number,
  projects: Array<{
    id: number,
    name: string,
    status: '進行中' | '準備中' | '規劃中',
    requiredSkills: Array<{
      skill: string,
      level: '高級' | '中級' | '初級',
      count: number
    }>,
    currentTeam: Array<{
      name: string,
      position: string,
      startDate: string
    }>
  }>
}
```

#### 面談 (Interview)
```javascript
{
  id: number,
  date: string,
  time: string,
  employee: string,
  client: string,
  position: string,
  status: '已安排' | '已完成',
  type: '技術面談' | '綜合面談' | '專業面談' | '主管面談',
  evaluation?: {
    technical: number,
    communication: number,
    teamwork: number,
    problemSolving: number,
    overall: number
  }
}
```

## 🎨 UI 設計特色

### 設計原則
- **現代化**: 使用 Tailwind CSS 的現代設計語言
- **響應式**: 支援不同螢幕尺寸
- **一致性**: 統一的色彩方案與交互模式
- **易用性**: 直觀的導航與操作流程

### 色彩方案
- **主色**: 藍色系 (bg-blue-600, text-blue-600)
- **次要色**: 紫色系 (bg-purple-600) - 用於重要操作
- **狀態色**: 
  - 綠色 (可派遣、活躍、成功)
  - 藍色 (已派遣、進行中)
  - 黃色 (準備中、待定)
  - 橙色 (需求、缺口)

### 交互模式
- **懸停效果**: 所有可點擊元素都有 hover 狀態
- **狀態指示**: 使用徽章 (badge) 顯示狀態
- **操作按鈕**: 統一的圖標按鈕設計
- **表格交互**: 行懸停高亮效果

## 🔧 開發注意事項

### React Hooks 使用
- 所有狀態管理都在主組件頂層使用 `useState`
- 避免在渲染函數內部使用 Hooks
- 已修正的 Hook 規則違反問題

### 狀態管理
```javascript
// 主要頁面狀態
const [activeTab, setActiveTab] = useState('overview');
const [selectedEmployee, setSelectedEmployee] = useState(null);
const [selectedClient, setSelectedClient] = useState(null);
const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);

// 面談相關狀態
const [showInterviewDetail, setShowInterviewDetail] = useState(false);
const [showScheduleInterview, setShowScheduleInterview] = useState(false);
const [scheduleForm, setScheduleForm] = useState({...});
```

### 組件結構
- **主組件**: `StaffingShowcase` - 包含所有功能
- **渲染函數**: 
  - `renderOverview()` - 總覽頁面
  - `renderEmployees()` - 人員管理
  - `renderClients()` - 客戶管理
  - `renderInterviews()` - 面談管理

### 資料處理
- 使用 `clients.flatMap()` 處理跨客戶專案查詢
- 使用 `filter()` 和 `map()` 進行資料篩選與轉換
- 狀態條件渲染避免不必要的組件重新渲染

## 🚨 已知問題與解決方案

### 1. React Hooks 規則
**問題**: 在渲染函數內使用 useState
**解決**: 將所有狀態移至組件頂層

### 2. 未使用的 Import
**狀態**: 編譯警告，不影響功能
**說明**: 保留備用圖標與組件 import

### 3. 瀏覽器儲存限制
**注意**: 系統使用記憶體狀態，不依賴 localStorage
**原因**: Claude.ai 環境限制

## 📋 未來擴展計劃

### 短期目標
- [ ] 面談安排的實際資料保存
- [ ] 員工技能匹配演算法
- [ ] 更多篩選與搜尋功能
- [ ] 資料匯出功能

### 長期目標
- [ ] 後端 API 整合
- [ ] 即時通知系統
- [ ] 進階報表與分析
- [ ] 移動端適配

## 🤝 開發協作

### 程式碼風格
- 使用 ES6+ 語法
- 組件函數式寫法
- Tailwind CSS 類名
- 變數命名採用 camelCase

### Git 工作流程
```bash
# 功能開發
git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature

# 修復問題
git checkout -b fix/issue-description
git commit -m "fix: resolve issue description"
git push origin fix/issue-description
```

## 📞 技術支援

如有任何問題或需要技術支援，請檢查：

1. **編譯錯誤**: 檢查 console 輸出
2. **功能問題**: 參考本指南的功能說明
3. **UI 問題**: 檢查 Tailwind CSS 類名
4. **狀態問題**: 檢查 React Developer Tools

---

**最後更新**: 2025-05-28
**版本**: v1.0.0
**維護者**: Development Team