import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  Calendar,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  DollarSign,
  Target,
  Briefcase,
  Star,
  ChevronRight,
  Eye,
  Edit,
  BarChart3,
  Bell,
  ArrowLeft,
  X,
  Plus,
  FileText,
  CheckCircle,
  Globe,
  GraduationCap,
  Banknote,
  CalendarDays,
  UserCheck,
  Code,
  Database,
  Server,
  Layers,
  GitBranch,
  Monitor,
  Smartphone,
  ChevronDown,
  Filter,
  Download,
  Search,
  Upload,
  AlertCircle,
  FolderOpen
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InterviewManagement from './InterviewManagement';

const StaffingShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showEmployeeDetail, setShowEmployeeDetail] = useState(false);
  const [showClientDetail, setShowClientDetail] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [showImportExport, setShowImportExport] = useState(false);
  const [selectedClientProject, setSelectedClientProject] = useState(null);
  
  // Interview related states - moved from renderInterviews function
  const [showInterviewDetail, setShowInterviewDetail] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [activeInterviewTab, setActiveInterviewTab] = useState('upcoming');
  const [showScheduleInterview, setShowScheduleInterview] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({
    employee: '',
    client: '',
    project: '',
    date: '',
    time: '',
    interviewer: '',
    location: '',
    type: '技術面談',
    round: '第一輪',
    notes: ''
  });

  // 統計數據
  const stats = {
    totalEmployees: 156,
    available: 47,
    dispatched: 89,
    onLeave: 20,
    activeClients: 38,
    monthlyRevenue: '3,245,000',
    successRate: 94.5,
    avgDispatchDays: 180
  };

  // 完整員工資料（根據林春宏履歷重新設計）
  const employees = [
    {
      id: 1,
      name: '林春宏',
      englishName: 'Frank',
      age: 39,
      birthYear: 1985,
      gender: '男',
      status: '可派遣',
      statusColor: 'bg-green-100 text-green-800',
      rating: 4.9,
      experience: '13年',
      currentSalary: '95,000',
      expectedSalary: '90,000-120,000',
      phone: '0912-345-678',
      email: 'frank.lin@example.com',
      
      // 學歷資訊
      education: {
        degree: '碩士',
        school: '雲林科技大學',
        department: '資訊管理系',
        graduationYear: 2011
      },
      
      // 技能分類（根據履歷分類）
      technicalSkills: {
        operatingSystems: ['Windows', 'Android'],
        programming: {
          languages: ['C#.NET', 'Java', 'JavaScript', 'PHP', 'VB.NET', 'VB6', 'Delphi'],
          frontend: ['React', 'ReactJS', 'React Native', 'jQuery', 'Bootstrap', 'AJAX', 'KendoUI', 'Angular'],
          backend: ['ASP.NET MVC', 'ASP.NET Core', 'SpringBoot', 'JSP', 'PHP MVC CodeIgniter'],
          mobile: ['React Native', 'Android Studio', 'WebView']
        },
        databases: ['MS SQL', 'MySQL', 'Oracle', 'PL/SQL'],
        tools: ['Git/GitLab', 'TFS', 'Jenkins', 'SubVersion', 'Visual Studio', 'Android Studio'],
        other: ['SQL Server BI', 'ETL', 'MDX', 'Reporting Services']
      },
      
      // 產業經驗
      industryExperience: [
        { industry: '航空運輸', years: 1 },
        { industry: '電腦系統整合', years: 2 },
        { industry: '半導體製造', years: 3 },
        { industry: '光電製造', years: 2 },
        { industry: '金融服務', years: 2 },
        { industry: '電子商務', years: 1 },
        { industry: '出版業', years: 1 }
      ],
      
      // 專案經歷（詳細版）
      projectExperience: [
        {
          id: 1,
          company: '長榮航空',
          projectName: '機場地勤人員排班管理系統',
          period: '2024/02 - 2024/07',
          role: 'PG',
          teamSize: 5,
          description: '開發機場地勤人員排班管理系統',
          responsibilities: [
            '系統開發維護',
            '前後端功能實作',
            'API 開發與整合',
            '效能優化'
          ],
          technologies: {
            frontend: ['ReactJS', 'jQuery', 'KendoUI'],
            backend: ['C#', 'ASP.NET Core', 'MVC', 'WebAPI'],
            database: ['Oracle'],
            tools: ['Git', 'Jenkins']
          },
          achievements: [
            '提升排班效率30%',
            '減少人工作業時間50%'
          ]
        },
        {
          id: 2,
          company: '宏碁電腦',
          projectName: '總管理處客服服務管理系統',
          period: '2023/03 - 2023/11',
          role: 'PG',
          teamSize: 8,
          description: '開發HQ客戶服務管理系統改版前後端分離架構',
          responsibilities: [
            '系統架構重構',
            '前後端分離實作',
            'Angular 前端開發',
            '舊系統維護'
          ],
          technologies: {
            frontend: ['Angular', 'Bootstrap'],
            backend: ['C#', 'VB.NET', 'ASP.NET MVC'],
            database: ['SQL Server'],
            tools: ['TFS', 'Git']
          },
          achievements: [
            '成功完成系統架構轉型',
            '提升系統回應速度40%'
          ]
        },
        {
          id: 3,
          company: '友達光電',
          projectName: '生產排程管理系統',
          period: '2022/03 - 2023/02',
          role: 'PG',
          teamSize: 10,
          description: '開發新版甘特圖套件及生產排程管理系統',
          responsibilities: [
            '開發新版甘特圖套件',
            '生產排程管理系統開發維護',
            '報表系統開發維護',
            '前後端分離設計Template開發示範定版'
          ],
          technologies: {
            frontend: ['jQuery', 'JavaScript'],
            backend: ['Java', 'JSP', 'SpringBoot'],
            database: ['Oracle', 'SQL Server'],
            tools: ['Git', 'Maven']
          },
          achievements: [
            '甘特圖效能提升60%',
            '建立前後端開發標準範本'
          ]
        },
        {
          id: 4,
          company: '台積電',
          projectName: 'NTC新訓中心管理系統',
          period: '2021/12 - 2022/03',
          role: 'PG',
          teamSize: 6,
          description: '開發維護NTC管理系統',
          responsibilities: [
            '開發維護NTC管理系統',
            '使用ReactJS後台管理系統開發維護',
            '開發報表系統'
          ],
          technologies: {
            frontend: ['ReactJS', 'jQuery'],
            backend: ['Delphi', 'ASP.NET', 'C#'],
            database: ['SQL Server', 'Oracle'],
            tools: ['Git']
          },
          achievements: [
            '整合多個系統資料',
            '建立統一管理介面'
          ]
        },
        {
          id: 5,
          company: '群創光電',
          projectName: '廠務管理系統',
          period: '2020/06 - 2021/12',
          role: 'PG',
          teamSize: 12,
          description: '群創光電廠務管理系統',
          responsibilities: [
            '開發維護廠務系統，設計表單與報表',
            'Oracle PL/SQL開發',
            '整合式戰情看板輪播系統開發'
          ],
          technologies: {
            frontend: ['jQuery', 'JavaScript'],
            backend: ['ASP.NET', 'C#'],
            database: ['Oracle', 'PL/SQL'],
            tools: ['Reporting Services']
          },
          achievements: [
            '建立即時戰情看板',
            '整合多廠區資料'
          ]
        },
        {
          id: 6,
          company: '玉山銀行',
          projectName: '法金處系統開發',
          period: '2019/03 - 2020/05',
          role: 'PG',
          teamSize: 15,
          description: '玉山銀行法金處系統開發',
          responsibilities: [
            '根據SA文件進行系統單據與報表開發',
            '接手玉山離職同仁開發未完系統模組',
            '開發法金系統整合資料上傳IBM主機DB2資料庫',
            '配合使用RedMine單系統進行系統進度管理',
            '配合使用TFS Git Flow進行CI/CD上版流程'
          ],
          technologies: {
            frontend: ['jQuery', 'Bootstrap', 'JavaScript'],
            backend: ['ASP.NET Core MVC', 'C#'],
            database: ['MS SQL', 'IBM DB2'],
            tools: ['TFS Git Flow', 'RedMine']
          },
          achievements: [
            '成功整合IBM主機資料',
            '建立CI/CD流程'
          ]
        }
      ],
      
      // 語言能力
      languages: [
        { name: '中文', level: '母語' },
        { name: '英文', level: '中等' }
      ],
      
      // 個人特質
      introduction: '具備13年以上軟體開發經驗，熟悉多種程式語言與框架，從傳統VB6到現代React都有實戰經驗。參與過半導體、金融、製造業等大型企業專案，擅長系統架構設計與技術整合。',
      
      // 能力評估
      attributes: [
        { attribute: '技術能力', score: 9 },
        { attribute: '產業經驗', score: 10 },
        { attribute: '溝通協調', score: 8 },
        { attribute: '問題解決', score: 9 },
        { attribute: '學習能力', score: 9 },
        { attribute: '團隊合作', score: 8 }
      ],
      
      joinDate: '2024-07-15',
      lastDispatchDate: null,
      dispatchCount: 0,
      successRate: 0
    },
    {
      id: 2,
      name: '陳小明',
      englishName: 'Kevin',
      age: 34,
      birthYear: 1990,
      gender: '男',
      status: '已派遣',
      statusColor: 'bg-blue-100 text-blue-800',
      currentClient: '台積電',
      currentPosition: '資深工程師',
      dispatchStartDate: '2024-10-01',
      rating: 4.8,
      experience: '8年',
      currentSalary: '75,000',
      expectedSalary: '70,000-90,000',
      phone: '0923-456-789',
      email: 'kevin.chen@example.com',
      
      education: {
        degree: '大學',
        school: '國立台灣大學',
        department: '資訊工程系',
        graduationYear: 2016
      },
      
      technicalSkills: {
        operatingSystems: ['Linux', 'Windows'],
        programming: {
          languages: ['Java', 'Python', 'JavaScript'],
          frontend: ['Vue.js', 'React', 'HTML5', 'CSS3'],
          backend: ['Spring Boot', 'Django', 'Node.js'],
          mobile: ['Flutter']
        },
        databases: ['PostgreSQL', 'MongoDB', 'Redis'],
        tools: ['Docker', 'Kubernetes', 'Git', 'CI/CD'],
        other: ['AWS', 'Microservices', 'REST API']
      },
      
      industryExperience: [
        { industry: '半導體製造', years: 3 },
        { industry: '軟體服務', years: 3 },
        { industry: '電子商務', years: 2 }
      ],
      
      projectExperience: [
        {
          id: 1,
          company: '台積電',
          projectName: '智慧製造管理平台',
          period: '2024/10 - 至今',
          role: 'Tech Lead',
          teamSize: 8,
          description: '開發智慧製造即時監控與分析平台',
          responsibilities: [
            '系統架構設計',
            '技術選型與評估',
            '團隊技術指導',
            'Code Review'
          ],
          technologies: {
            frontend: ['React', 'TypeScript', 'D3.js'],
            backend: ['Java', 'Spring Boot', 'Kafka'],
            database: ['PostgreSQL', 'InfluxDB'],
            tools: ['Docker', 'K8s', 'Jenkins']
          },
          achievements: [
            '建立即時數據處理架構',
            '提升生產線監控效率35%'
          ]
        }
      ],
      
      languages: [
        { name: '中文', level: '母語' },
        { name: '英文', level: '流利' },
        { name: '日文', level: '初級' }
      ],
      
      introduction: '8年軟體開發經驗，專精於Java後端開發與微服務架構。具備大型系統設計經驗，擅長高併發系統優化。',
      
      attributes: [
        { attribute: '技術能力', score: 9 },
        { attribute: '產業經驗', score: 8 },
        { attribute: '溝通協調', score: 8 },
        { attribute: '問題解決', score: 9 },
        { attribute: '學習能力', score: 8 },
        { attribute: '團隊合作', score: 9 }
      ],
      
      joinDate: '2023-06-01',
      lastDispatchDate: '2024-10-01',
      dispatchCount: 3,
      successRate: 100
    },
    {
      id: 3,
      name: '王雅婷',
      englishName: 'Emily',
      age: 32,
      birthYear: 1992,
      gender: '女',
      status: '可派遣',
      statusColor: 'bg-green-100 text-green-800',
      rating: 4.7,
      experience: '7年',
      currentSalary: '68,000',
      expectedSalary: '65,000-80,000',
      phone: '0934-567-890',
      email: 'emily.wang@example.com',
      
      education: {
        degree: '大學',
        school: '政治大學',
        department: '會計系',
        graduationYear: 2017
      },
      
      technicalSkills: {
        operatingSystems: ['Windows'],
        programming: {
          languages: ['Python', 'VBA'],
          frontend: [],
          backend: [],
          mobile: []
        },
        databases: ['SQL Server', 'Access'],
        tools: ['SAP', 'Excel', 'Power BI'],
        other: ['財務分析', '成本會計', '稅務規劃']
      },
      
      industryExperience: [
        { industry: '製造業', years: 4 },
        { industry: '零售業', years: 3 }
      ],
      
      projectExperience: [
        {
          id: 1,
          company: '統一企業',
          projectName: 'ERP財務模組導入',
          period: '2023/01 - 2023/08',
          role: '財務顧問',
          teamSize: 6,
          description: '協助導入SAP財務模組',
          responsibilities: [
            '財務流程分析與優化',
            '系統需求分析',
            '使用者教育訓練',
            '上線後支援'
          ],
          technologies: {
            frontend: [],
            backend: [],
            database: ['SAP HANA'],
            tools: ['SAP FI/CO', 'Excel']
          },
          achievements: [
            '縮短月結時間40%',
            '提升財務報表準確度'
          ]
        }
      ],
      
      languages: [
        { name: '中文', level: '母語' },
        { name: '英文', level: '中等' }
      ],
      
      introduction: '7年財務會計經驗，具備會計師執照。熟悉ERP系統導入與財務流程優化，擅長成本分析與預算編製。',
      
      attributes: [
        { attribute: '技術能力', score: 7 },
        { attribute: '產業經驗', score: 8 },
        { attribute: '溝通協調', score: 9 },
        { attribute: '問題解決', score: 8 },
        { attribute: '學習能力', score: 7 },
        { attribute: '團隊合作', score: 8 }
      ],
      
      joinDate: '2023-09-01',
      lastDispatchDate: '2023-12-31',
      dispatchCount: 1,
      successRate: 100
    }
  ];

  // 擴展的客戶資料，包含多專案
  const clients = [
    {
      id: 1,
      name: '台積電股份有限公司',
      shortName: '台積電',
      industry: '半導體製造',
      activeCount: 12,
      totalCount: 35,
      totalSpent: '8,900,000',
      status: '活躍',
      statusColor: 'bg-green-100 text-green-800',
      contact: '張經理',
      contactPhone: '02-1234-5678',
      contactEmail: 'manager.chang@tsmc.com',
      address: '新竹市力行六路8號',
      cooperationDate: '2022-03-15',
      currentEmployees: [
        { name: '陳小明', position: '資深工程師', startDate: '2024-10-01' },
        { name: '劉志明', position: '專案經理', startDate: '2024-08-15' }
      ],
      requirements: ['軟體工程師', '系統架構師', '專案經理'],
      contractValue: '2,500,000',
      paymentTerms: '月結30天',
      
      // 專案列表
      projects: [
        {
          id: 1,
          name: '智慧製造管理平台',
          contactPerson: '王技術長',
          contactPhone: '02-1234-5679',
          contactEmail: 'cto.wang@tsmc.com',
          budget: '2,500,000',
          period: '2024/10 - 2025/06',
          status: '進行中',
          statusColor: 'bg-blue-100 text-blue-800',
          requiredSkills: [
            { skill: 'Java', level: '高級', count: 2 },
            { skill: 'React', level: '中級', count: 1 },
            { skill: 'Kafka', level: '高級', count: 1 },
            { skill: 'PostgreSQL', level: '中級', count: 1 }
          ],
          description: '開發智慧製造即時監控與分析平台，提升生產效率',
          currentTeam: [
            { name: '陳小明', position: 'Tech Lead', startDate: '2024-10-01' }
          ]
        },
        {
          id: 2,
          name: 'NTC新訓中心管理系統二期',
          contactPerson: '李部長',
          contactPhone: '02-1234-5680',
          contactEmail: 'director.li@tsmc.com',
          budget: '1,800,000',
          period: '2025/01 - 2025/08',
          status: '準備中',
          statusColor: 'bg-yellow-100 text-yellow-800',
          requiredSkills: [
            { skill: 'React', level: '高級', count: 2 },
            { skill: 'C#', level: '高級', count: 2 },
            { skill: 'SQL Server', level: '中級', count: 1 }
          ],
          description: '擴展現有NTC管理系統功能，增加行動端支援',
          currentTeam: []
        }
      ]
    },
    {
      id: 2,
      name: '聯發科技股份有限公司',
      shortName: '聯發科',
      industry: '半導體設計',
      activeCount: 8,
      totalCount: 18,
      totalSpent: '4,200,000',
      status: '活躍',
      statusColor: 'bg-green-100 text-green-800',
      contact: '陳處長',
      contactPhone: '03-5670-1234',
      contactEmail: 'director.chen@mediatek.com',
      address: '新竹市關新路1號',
      cooperationDate: '2023-01-10',
      currentEmployees: [
        { name: '黃志強', position: '系統架構師', startDate: '2024-09-01' }
      ],
      requirements: ['系統架構師', '韌體工程師', '測試工程師'],
      contractValue: '1,800,000',
      paymentTerms: '月結30天',
      
      projects: [
        {
          id: 1,
          name: '5G晶片驗證平台',
          contactPerson: '周副理',
          contactPhone: '03-5670-1235',
          contactEmail: 'manager.chou@mediatek.com',
          budget: '3,200,000',
          period: '2024/06 - 2025/03',
          status: '進行中',
          statusColor: 'bg-blue-100 text-blue-800',
          requiredSkills: [
            { skill: 'C++', level: '高級', count: 3 },
            { skill: 'Python', level: '中級', count: 2 },
            { skill: 'Linux', level: '高級', count: 2 }
          ],
          description: '開發5G晶片自動化驗證平台，提升測試效率',
          currentTeam: [
            { name: '黃志強', position: '系統架構師', startDate: '2024-09-01' }
          ]
        },
        {
          id: 2,
          name: 'AI加速器開發工具',
          contactPerson: '林主管',
          contactPhone: '03-5670-1236',
          contactEmail: 'supervisor.lin@mediatek.com',
          budget: '2,500,000',
          period: '2025/02 - 2025/12',
          status: '規劃中',
          statusColor: 'bg-gray-100 text-gray-800',
          requiredSkills: [
            { skill: 'CUDA', level: '高級', count: 2 },
            { skill: 'TensorFlow', level: '高級', count: 1 },
            { skill: 'Vue.js', level: '中級', count: 1 }
          ],
          description: '開發AI加速器的開發工具鏈與除錯介面',
          currentTeam: []
        }
      ]
    },
    {
      id: 3,
      name: '玉山商業銀行股份有限公司',
      shortName: '玉山銀行',
      industry: '金融服務',
      activeCount: 6,
      totalCount: 15,
      totalSpent: '3,600,000',
      status: '活躍',
      statusColor: 'bg-green-100 text-green-800',
      contact: '蔡協理',
      contactPhone: '02-2182-1313',
      contactEmail: 'manager.tsai@esunbank.com',
      address: '台北市松山區民生東路三段115號',
      cooperationDate: '2022-08-01',
      currentEmployees: [
        { name: '張美華', position: '資深分析師', startDate: '2024-07-01' }
      ],
      requirements: ['系統分析師', '後端工程師', 'DevOps工程師'],
      contractValue: '2,200,000',
      paymentTerms: '月結45天',
      
      projects: [
        {
          id: 1,
          name: '數位金融平台升級',
          contactPerson: '劉副理',
          contactPhone: '02-2182-1314',
          contactEmail: 'manager.liu@esunbank.com',
          budget: '4,500,000',
          period: '2024/03 - 2025/02',
          status: '進行中',
          statusColor: 'bg-blue-100 text-blue-800',
          requiredSkills: [
            { skill: 'Java', level: '高級', count: 3 },
            { skill: 'Spring Boot', level: '高級', count: 2 },
            { skill: 'Oracle', level: '中級', count: 2 },
            { skill: 'Kubernetes', level: '中級', count: 1 }
          ],
          description: '升級現有數位金融平台，提升客戶體驗與系統效能',
          currentTeam: [
            { name: '張美華', position: '資深分析師', startDate: '2024-07-01' }
          ]
        },
        {
          id: 2,
          name: '風險管控系統重構',
          contactPerson: '許經理',
          contactPhone: '02-2182-1315',
          contactEmail: 'manager.hsu@esunbank.com',
          budget: '3,200,000',
          period: '2025/01 - 2025/10',
          status: '準備中',
          statusColor: 'bg-yellow-100 text-yellow-800',
          requiredSkills: [
            { skill: 'Python', level: '高級', count: 2 },
            { skill: 'Kafka', level: '中級', count: 1 },
            { skill: 'Redis', level: '中級', count: 1 },
            { skill: 'PostgreSQL', level: '高級', count: 1 }
          ],
          description: '重構風險管控系統，導入即時風險監控機制',
          currentTeam: []
        }
      ]
    }
  ];

  // 完整的面談記錄
  const interviews = [
    {
      id: 1,
      date: '2025-05-28',
      time: '14:00',
      employee: '林春宏',
      employeeId: 1,
      client: '聯發科',
      position: '系統架構師',
      status: '已安排',
      statusColor: 'bg-blue-100 text-blue-800',
      interviewer: '技術長',
      location: '新竹總部 3F會議室',
      type: '技術面談',
      round: '第一輪',
      notes: '需評估Java/React技術能力',
      requirements: [
        '10年以上開發經驗',
        '熟悉微服務架構',
        '具備大型系統設計經驗'
      ],
      preparation: [
        '準備系統架構案例',
        '複習微服務設計模式',
        '準備技術問答'
      ]
    },
    {
      id: 2,
      date: '2025-05-20',
      time: '10:00',
      employee: '陳小明',
      employeeId: 2,
      client: '台積電',
      position: '資深工程師',
      status: '已完成',
      statusColor: 'bg-green-100 text-green-800',
      interviewer: '部門主管',
      location: '視訊面談',
      type: '綜合面談',
      round: '第二輪',
      result: '通過',
      resultColor: 'bg-green-100 text-green-800',
      evaluation: {
        technical: 9,
        communication: 8,
        teamwork: 9,
        problemSolving: 9,
        overall: 8.75
      },
      feedback: {
        positive: [
          '技術能力紮實',
          '溝通表達清晰',
          '具備團隊合作精神'
        ],
        improvement: [
          '可加強系統架構設計經驗',
          '英文表達可再提升'
        ]
      },
      nextStep: '等待核薪通知'
    },
    {
      id: 3,
      date: '2025-05-15',
      time: '15:00',
      employee: '王雅婷',
      employeeId: 3,
      client: '國泰金控',
      position: '財務分析師',
      status: '已完成',
      statusColor: 'bg-green-100 text-green-800',
      interviewer: '財務長',
      location: '台北總部',
      type: '專業面談',
      round: '第一輪',
      result: '待定',
      resultColor: 'bg-yellow-100 text-yellow-800',
      evaluation: {
        technical: 7,
        communication: 8,
        teamwork: 8,
        problemSolving: 7,
        overall: 7.5
      },
      feedback: {
        positive: [
          '財務背景扎實',
          '細心度高'
        ],
        improvement: [
          '需加強金融產業知識',
          '建議考取CFA證照'
        ]
      },
      nextStep: '安排第二輪面談'
    }
  ];

  const renderInterviews = () => {
    const upcomingInterviews = interviews.filter(i => i.status === '已安排');
    const completedInterviews = interviews.filter(i => i.status === '已完成');
    
    // 安排面談介面
    if (showScheduleInterview) {
      const selectedClientData = clients.find(c => c.id.toString() === scheduleForm.client);
      const availableProjects = selectedClientData ? selectedClientData.projects : [];
      
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => {
                  setShowScheduleInterview(false);
                  setScheduleForm({
                    employee: '',
                    client: '',
                    project: '',
                    date: '',
                    time: '',
                    interviewer: '',
                    location: '',
                    type: '技術面談',
                    round: '第一輪',
                    notes: ''
                  });
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回列表</span>
              </button>
              <h2 className="text-xl font-semibold text-gray-900">安排面談</h2>
              <div></div>
            </div>

            <form className="space-y-6">
              {/* 基本資訊 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">應徵者</label>
                  <select 
                    value={scheduleForm.employee}
                    onChange={(e) => setScheduleForm({...scheduleForm, employee: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">請選擇應徵者</option>
                    {employees.filter(emp => emp.status === '可派遣').map(emp => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.englishName}) - {emp.experience}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">客戶</label>
                  <select 
                    value={scheduleForm.client}
                    onChange={(e) => setScheduleForm({...scheduleForm, client: e.target.value, project: ''})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">請選擇客戶</option>
                    {clients.map(client => (
                      <option key={client.id} value={client.id}>
                        {client.shortName} - {client.industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">專案</label>
                  <select 
                    value={scheduleForm.project}
                    onChange={(e) => setScheduleForm({...scheduleForm, project: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    disabled={!scheduleForm.client}
                  >
                    <option value="">請選擇專案</option>
                    {availableProjects.map(project => (
                      <option key={project.id} value={project.id}>
                        {project.name} - {project.status}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談類型</label>
                  <select 
                    value={scheduleForm.type}
                    onChange={(e) => setScheduleForm({...scheduleForm, type: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="技術面談">技術面談</option>
                    <option value="綜合面談">綜合面談</option>
                    <option value="專業面談">專業面談</option>
                    <option value="主管面談">主管面談</option>
                  </select>
                </div>
              </div>

              {/* 時間與地點 */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談日期</label>
                  <input 
                    type="date"
                    value={scheduleForm.date}
                    onChange={(e) => setScheduleForm({...scheduleForm, date: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談時間</label>
                  <input 
                    type="time"
                    value={scheduleForm.time}
                    onChange={(e) => setScheduleForm({...scheduleForm, time: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談輪次</label>
                  <select 
                    value={scheduleForm.round}
                    onChange={(e) => setScheduleForm({...scheduleForm, round: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="第一輪">第一輪</option>
                    <option value="第二輪">第二輪</option>
                    <option value="第三輪">第三輪</option>
                    <option value="最終輪">最終輪</option>
                  </select>
                </div>
              </div>

              {/* 面談官與地點 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談官</label>
                  <input 
                    type="text"
                    value={scheduleForm.interviewer}
                    onChange={(e) => setScheduleForm({...scheduleForm, interviewer: e.target.value})}
                    placeholder="請輸入面談官姓名"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">面談地點</label>
                  <input 
                    type="text"
                    value={scheduleForm.location}
                    onChange={(e) => setScheduleForm({...scheduleForm, location: e.target.value})}
                    placeholder="請輸入面談地點"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* 備註 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">備註</label>
                <textarea 
                  value={scheduleForm.notes}
                  onChange={(e) => setScheduleForm({...scheduleForm, notes: e.target.value})}
                  placeholder="請輸入面談相關備註"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* 專案資訊預覽 */}
              {scheduleForm.client && scheduleForm.project && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">專案資訊預覽</h4>
                  {(() => {
                    const project = availableProjects.find(p => p.id.toString() === scheduleForm.project);
                    if (!project) return null;
                    
                    return (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">專案名稱</p>
                          <p className="font-medium">{project.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">專案聯絡人</p>
                          <p className="font-medium">{project.contactPerson}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">預算</p>
                          <p className="font-medium">NT$ {project.budget}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">執行期間</p>
                          <p className="font-medium">{project.period}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-500">技能需求</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.requiredSkills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                {skill.skill} ({skill.level}) - {skill.count}人
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* 按鈕 */}
              <div className="flex items-center justify-end gap-4 pt-6 border-t">
                <button 
                  type="button"
                  onClick={() => {
                    setShowScheduleInterview(false);
                    setScheduleForm({
                      employee: '',
                      client: '',
                      project: '',
                      date: '',
                      time: '',
                      interviewer: '',
                      location: '',
                      type: '技術面談',
                      round: '第一輪',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  取消
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    // 這裡可以加入保存邏輯
                    alert('面談已安排成功！');
                    setShowScheduleInterview(false);
                    setScheduleForm({
                      employee: '',
                      client: '',
                      project: '',
                      date: '',
                      time: '',
                      interviewer: '',
                      location: '',
                      type: '技術面談',
                      round: '第一輪',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  確認安排
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    if (showInterviewDetail && selectedInterview) {
      return (
        <div className="space-y-6">
          {/* 面談詳情頁面 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setShowInterviewDetail(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回列表</span>
              </button>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* 面談基本資訊 */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedInterview.client} - {selectedInterview.position}
                    </h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedInterview.statusColor}`}>
                        {selectedInterview.status}
                      </span>
                      <span className="text-gray-600">{selectedInterview.type} • {selectedInterview.round}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">面談時間</p>
                      <p className="font-medium mt-1">
                        {selectedInterview.date} {selectedInterview.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">面談地點</p>
                      <p className="font-medium mt-1">{selectedInterview.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">面談官</p>
                      <p className="font-medium mt-1">{selectedInterview.interviewer}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">應徵者</p>
                      <p className="font-medium mt-1">{selectedInterview.employee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">備註</p>
                      <p className="text-sm text-gray-700 mt-1">{selectedInterview.notes}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {selectedInterview.result && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">面談結果</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${selectedInterview.resultColor}`}>
                      {selectedInterview.result}
                    </span>
                  </div>
                )}
                {selectedInterview.evaluation && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 mb-1">綜合評分</p>
                    <p className="text-2xl font-bold text-blue-900">{selectedInterview.evaluation.overall}</p>
                    <p className="text-xs text-blue-600">滿分 10 分</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 職位需求 */}
          {selectedInterview.requirements && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">職位需求</h3>
              <ul className="space-y-2">
                {selectedInterview.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* 評估結果 (已完成的面談) */}
          {selectedInterview.evaluation && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">面談評估</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">各項評分</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">技術能力</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{width: `${selectedInterview.evaluation.technical * 10}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{selectedInterview.evaluation.technical}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">溝通能力</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{width: `${selectedInterview.evaluation.communication * 10}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{selectedInterview.evaluation.communication}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">團隊合作</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full" 
                            style={{width: `${selectedInterview.evaluation.teamwork * 10}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{selectedInterview.evaluation.teamwork}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">問題解決</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
                            style={{width: `${selectedInterview.evaluation.problemSolving * 10}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{selectedInterview.evaluation.problemSolving}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">回饋意見</h4>
                  {selectedInterview.feedback && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-green-700 mb-2">優點</p>
                        <ul className="space-y-1">
                          {selectedInterview.feedback.positive.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <Plus className="w-4 h-4 text-green-500 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-700 mb-2">待改進</p>
                        <ul className="space-y-1">
                          {selectedInterview.feedback.improvement.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {selectedInterview.nextStep && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">下一步驟</p>
                      <p className="font-medium text-gray-900 mt-1">{selectedInterview.nextStep}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                      執行下一步
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 準備事項 (未完成的面談) */}
          {selectedInterview.preparation && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">面談準備事項</h3>
              <ul className="space-y-2">
                {selectedInterview.preparation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-900">面談管理</h3>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveInterviewTab('upcoming')}
                    className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                      activeInterviewTab === 'upcoming' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    待進行 ({upcomingInterviews.length})
                  </button>
                  <button
                    onClick={() => setActiveInterviewTab('completed')}
                    className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                      activeInterviewTab === 'completed' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    已完成 ({completedInterviews.length})
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <Download className="w-4 h-4" />
                  匯出報表
                </button>
                <button 
                  onClick={() => setShowScheduleInterview(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  安排面談
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">日期時間</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">應徵者</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">客戶/職位</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">類型/輪次</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">面談官</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">地點</th>
                  {activeInterviewTab === 'completed' && (
                    <>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">結果</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">評分</th>
                    </>
                  )}
                  <th className="text-center py-3 px-6 font-medium text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {(activeInterviewTab === 'upcoming' ? upcomingInterviews : completedInterviews).map((interview, index) => (
                  <tr key={interview.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-purple-50 transition-colors`}>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{interview.date}</p>
                        <p className="text-sm text-gray-600">{interview.time}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900">{interview.employee}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{interview.client}</p>
                        <p className="text-sm text-gray-600">{interview.position}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm text-gray-700">{interview.type}</p>
                        <p className="text-sm text-gray-500">{interview.round}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-gray-700">{interview.interviewer}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-700">{interview.location}</p>
                    </td>
                    {activeInterviewTab === 'completed' && (
                      <>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${interview.resultColor}`}>
                            {interview.result}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          {interview.evaluation && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="font-medium">{interview.evaluation.overall}</span>
                            </div>
                          )}
                        </td>
                      </>
                    )}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedInterview(interview);
                            setShowInterviewDetail(true);
                          }}
                          className="p-1.5 text-purple-600 hover:bg-purple-50 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = () => {
    // 篩選出等待安排的專案
    const pendingProjects = clients.flatMap(client => 
      client.projects.filter(project => project.status === '準備中' || project.status === '規劃中')
        .map(project => ({
          ...project,
          clientName: client.shortName,
          clientContact: client.contact,
          requiredCount: project.requiredSkills.reduce((sum, skill) => sum + skill.count, 0),
          currentCount: project.currentTeam.length
        }))
    );

    return (
      <div className="space-y-6">
        {/* 等待安排的專案 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">等待安排的專案</h3>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                {pendingProjects.length} 個專案
              </span>
            </div>
          </div>
          
          {pendingProjects.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">專案名稱</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">客戶</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">預算</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">執行期間</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">人力需求</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">核心技能</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">狀態</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingProjects.map((project, index) => (
                    <tr key={`${project.clientName}-${project.id}`} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-50 transition-colors`}>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{project.name}</p>
                          <p className="text-sm text-gray-600">{project.contactPerson}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">{project.clientName}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">NT$ {project.budget}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{project.period}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-center">
                          <span className="text-lg font-bold text-orange-600">{project.requiredCount}</span>
                          <p className="text-xs text-gray-500">需求人數</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1">
                          {project.requiredSkills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {skill.skill}
                            </span>
                          ))}
                          {project.requiredSkills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              +{project.requiredSkills.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p>目前沒有等待安排的專案</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderEmployees = () => (
    <>
      {!showEmployeeDetail ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">人員列表</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
                    <option>全部狀態</option>
                    <option>可派遣</option>
                    <option>已派遣</option>
                    <option>面談中</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  新增員工
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">姓名</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">狀態</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">核心技能</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">產業經驗</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">經驗年資</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">期望薪資</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">評分</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{employee.name}</p>
                        <p className="text-sm text-gray-500">{employee.englishName} • {employee.age}歲</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${employee.statusColor}`}>
                        {employee.status}
                      </span>
                      {employee.currentClient && (
                        <p className="text-xs text-gray-600 mt-1">{employee.currentClient}</p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-1">
                        {Object.values(employee.technicalSkills.programming).flat().slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{Object.values(employee.technicalSkills.programming).flat().length - 3}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm">
                        {employee.industryExperience.slice(0, 2).map((exp, idx) => (
                          <div key={idx} className="text-gray-700">{exp.industry}</div>
                        ))}
                        {employee.industryExperience.length > 2 && (
                          <div className="text-gray-500">+{employee.industryExperience.length - 2} 更多</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{employee.experience}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">NT$ {employee.expectedSalary}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{employee.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setShowEmployeeDetail(true);
                          }}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-purple-600 hover:bg-purple-50 rounded">
                          <BarChart3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // 員工詳細資料頁面
        <div className="space-y-6">
          {/* 頂部導航 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setShowEmployeeDetail(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回列表</span>
              </button>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 基本資訊 */}
            <div className="grid grid-cols-3 gap-8">
              {/* 左側 - 個人資訊 */}
              <div className="col-span-1">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedEmployee?.name}
                    {selectedEmployee?.englishName && (
                      <span className="text-lg text-gray-500 ml-2">({selectedEmployee.englishName})</span>
                    )}
                  </h2>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${selectedEmployee?.statusColor}`}>
                    {selectedEmployee?.status}
                  </span>
                  {selectedEmployee?.currentClient && (
                    <p className="text-sm text-gray-600 mt-2">
                      派遣於 {selectedEmployee.currentClient}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">基本資訊</p>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm">年齡：{selectedEmployee?.age}歲 ({selectedEmployee?.birthYear}年生)</p>
                      <p className="text-sm">性別：{selectedEmployee?.gender}</p>
                      <p className="text-sm">經驗：{selectedEmployee?.experience}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">聯絡方式</p>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedEmployee?.phone}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {selectedEmployee?.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">學歷背景</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">{selectedEmployee?.education.degree}</p>
                      <p className="text-sm">{selectedEmployee?.education.school}</p>
                      <p className="text-sm text-gray-600">{selectedEmployee?.education.department}</p>
                      <p className="text-sm text-gray-500">{selectedEmployee?.education.graduationYear}年畢業</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">薪資資訊</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm">目前：NT$ {selectedEmployee?.currentSalary}</p>
                      <p className="text-sm font-medium">期望：NT$ {selectedEmployee?.expectedSalary}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 中間與右側 - 詳細資訊 */}
              <div className="col-span-2 space-y-6">
                {/* 個人簡介 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">個人簡介</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedEmployee?.introduction}
                  </p>
                </div>

                {/* 技術能力 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">技術能力</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        程式語言
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEmployee?.technicalSkills.programming.languages.map((lang, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        前端技術
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEmployee?.technicalSkills.programming.frontend.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Server className="w-4 h-4" />
                        後端技術
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEmployee?.technicalSkills.programming.backend.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        資料庫
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedEmployee?.technicalSkills.databases.map((db, idx) => (
                          <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                            {db}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 產業經驗 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">產業經驗</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedEmployee?.industryExperience.map((exp, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <p className="font-medium text-gray-900">{exp.industry}</p>
                        <p className="text-sm text-gray-600">{exp.years}年經驗</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 語言能力 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">語言能力</h3>
                  <div className="flex gap-4">
                    {selectedEmployee?.languages.map((lang, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-gray-600">• {lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 能力評估 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">能力評估</h3>
            <div className="grid grid-cols-2 gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={selectedEmployee?.attributes}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="attribute" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar name="評分" dataKey="score" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex items-center">
                <div className="w-full space-y-3">
                  {selectedEmployee?.attributes.map((attr, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-700">{attr.attribute}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{width: `${attr.score * 10}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12 text-right">{attr.score}/10</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 專案經歷 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              專案經歷 ({selectedEmployee?.projectExperience.length}個專案)
            </h3>
            
            {/* 專案標籤導航 */}
            <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
              {selectedEmployee?.projectExperience.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProjectTab(idx)}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeProjectTab === idx 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {project.company}
                </button>
              ))}
            </div>

            {/* 專案詳情 */}
            {selectedEmployee?.projectExperience[activeProjectTab] && (
              <div className="grid grid-cols-3 gap-6">
                {/* 左側 - 專案基本資訊 */}
                <div className="col-span-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">專案名稱</h4>
                    <p className="font-semibold text-gray-900">
                      {selectedEmployee.projectExperience[activeProjectTab].projectName}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">執行期間</h4>
                      <p className="text-sm">{selectedEmployee.projectExperience[activeProjectTab].period}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">專案角色</h4>
                      <p className="text-sm font-medium">{selectedEmployee.projectExperience[activeProjectTab].role}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">團隊規模</h4>
                    <p className="text-sm">{selectedEmployee.projectExperience[activeProjectTab].teamSize}人</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">專案描述</h4>
                    <p className="text-sm text-gray-700">
                      {selectedEmployee.projectExperience[activeProjectTab].description}
                    </p>
                  </div>
                </div>

                {/* 中間 - 工作內容與成就 */}
                <div className="col-span-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">工作內容</h4>
                    <ul className="space-y-1">
                      {selectedEmployee.projectExperience[activeProjectTab].responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedEmployee.projectExperience[activeProjectTab].achievements && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">專案成就</h4>
                      <ul className="space-y-1">
                        {selectedEmployee.projectExperience[activeProjectTab].achievements.map((ach, idx) => (
                          <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 右側 - 技術堆疊 */}
                <div className="col-span-1">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">使用技術</h4>
                  <div className="space-y-3">
                    {selectedEmployee.projectExperience[activeProjectTab].technologies.frontend.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">前端</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedEmployee.projectExperience[activeProjectTab].technologies.frontend.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedEmployee.projectExperience[activeProjectTab].technologies.backend.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">後端</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedEmployee.projectExperience[activeProjectTab].technologies.backend.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedEmployee.projectExperience[activeProjectTab].technologies.database.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">資料庫</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedEmployee.projectExperience[activeProjectTab].technologies.database.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedEmployee.projectExperience[activeProjectTab].technologies.tools.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">工具</p>
                        <div className="flex flex-wrap gap-1">
                          {selectedEmployee.projectExperience[activeProjectTab].technologies.tools.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 派遣歷史 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">派遣歷史</h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                <p>加入日期：{selectedEmployee?.joinDate}</p>
                <p>累計派遣：{selectedEmployee?.dispatchCount} 次</p>
              </div>
              <div className="text-right">
                <p>成功率：{selectedEmployee?.successRate}%</p>
                <p>最後派遣：{selectedEmployee?.lastDispatchDate || '尚無紀錄'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const renderClients = () => (
    <>
      {!showClientDetail && !selectedClientProject ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">客戶列表</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
                    <option>全部狀態</option>
                    <option>活躍</option>
                    <option>待確認</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  新增客戶
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">客戶名稱</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">產業</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">聯絡窗口</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">派遣人數</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">專案數量</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">累計金額</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">狀態</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={client.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-purple-50 transition-colors`}>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{client.shortName}</p>
                        <p className="text-sm text-gray-600">{client.name}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">{client.industry}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{client.contact}</p>
                        <p className="text-sm text-gray-600">{client.contactPhone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-center">
                        <span className="text-lg font-bold text-blue-600">{client.activeCount}</span>
                        <span className="text-sm text-gray-500"> / {client.totalCount}</span>
                        <p className="text-xs text-gray-500">當前 / 累計</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-center">
                        <span className="text-lg font-bold text-green-600">{client.projects.filter(p => p.status === '進行中').length}</span>
                        <span className="text-sm text-gray-500"> / {client.projects.length}</span>
                        <p className="text-xs text-gray-500">進行中 / 總計</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">NT$ {client.totalSpent}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${client.statusColor}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedClient(client);
                            setShowClientDetail(true);
                          }}
                          className="p-1.5 text-purple-600 hover:bg-purple-50 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded">
                          <BarChart3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : selectedClientProject ? (
        // 專案詳細資料頁面
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setSelectedClientProject(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回客戶詳情</span>
              </button>
            </div>

            {/* 專案基本資訊 */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedClientProject.name}</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedClientProject.statusColor}`}>
                    {selectedClientProject.status}
                  </span>
                  <span className="text-gray-600">{selectedClient?.shortName}</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">專案聯絡人</p>
                      <p className="font-medium text-gray-900 mt-1">{selectedClientProject.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">聯絡電話</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedClientProject.contactPhone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">電子郵件</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {selectedClientProject.contactEmail}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">專案期間</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <CalendarDays className="w-4 h-4 text-gray-400" />
                        {selectedClientProject.period}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">專案預算</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        NT$ {selectedClientProject.budget}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">專案描述</p>
                      <p className="text-sm text-gray-700 mt-1">{selectedClientProject.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側統計 */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">所需人員</p>
                  <p className="text-2xl font-bold text-blue-900">{selectedClientProject.requiredSkills.reduce((sum, skill) => sum + skill.count, 0)} 人</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 mb-1">當前團隊</p>
                  <p className="text-2xl font-bold text-green-900">{selectedClientProject.currentTeam.length} 人</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-600 mb-1">缺口</p>
                  <p className="text-2xl font-bold text-orange-900">
                    {selectedClientProject.requiredSkills.reduce((sum, skill) => sum + skill.count, 0) - selectedClientProject.currentTeam.length} 人
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 技能需求 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">技能需求</h3>
            <div className="grid grid-cols-2 gap-4">
              {selectedClientProject.requiredSkills.map((skill, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{skill.skill}</h4>
                    <span className="text-sm text-gray-500">{skill.count} 人</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      skill.level === '高級' ? 'bg-red-100 text-red-700' :
                      skill.level === '中級' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 當前團隊 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">當前團隊</h3>
            {selectedClientProject.currentTeam.length > 0 ? (
              <div className="space-y-3">
                {selectedClientProject.currentTeam.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <UserCheck className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-600">{member.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">加入日期</p>
                      <p className="text-sm font-medium">{member.startDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p>尚無團隊成員</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // 客戶詳細資料頁面
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setShowClientDetail(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回列表</span>
              </button>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 客戶基本資訊 */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedClient?.name}</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedClient?.statusColor}`}>
                    {selectedClient?.status}客戶
                  </span>
                  <span className="text-gray-600">{selectedClient?.industry}</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">聯絡窗口</p>
                      <p className="font-medium text-gray-900 mt-1">{selectedClient?.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">聯絡電話</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedClient?.contactPhone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">電子郵件</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {selectedClient?.contactEmail}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">公司地址</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {selectedClient?.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">合作開始日期</p>
                      <p className="font-medium flex items-center gap-2 mt-1">
                        <CalendarDays className="w-4 h-4 text-gray-400" />
                        {selectedClient?.cooperationDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">付款條件</p>
                      <p className="font-medium mt-1">{selectedClient?.paymentTerms}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側統計 */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 mb-1">當前派遣人數</p>
                  <p className="text-2xl font-bold text-blue-900">{selectedClient?.activeCount} 人</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 mb-1">累計合作金額</p>
                  <p className="text-2xl font-bold text-green-900">NT$ {selectedClient?.totalSpent}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600 mb-1">當前合約金額</p>
                  <p className="text-2xl font-bold text-purple-900">NT$ {selectedClient?.contractValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 專案列表 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">專案列表</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  新增專案
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">專案名稱</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">聯絡人</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">預算</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">執行期間</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">人力需求</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">當前團隊</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">狀態</th>
                    <th className="text-center py-3 px-6 font-medium text-gray-700">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedClient?.projects.map((project, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{project.name}</p>
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{project.contactPerson}</p>
                          <p className="text-sm text-gray-600">{project.contactPhone}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">NT$ {project.budget}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{project.period}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-center">
                          <span className="text-lg font-bold text-orange-600">
                            {project.requiredSkills.reduce((sum, skill) => sum + skill.count, 0)}
                          </span>
                          <p className="text-xs text-gray-500">需求人數</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-center">
                          <span className="text-lg font-bold text-green-600">{project.currentTeam.length}</span>
                          <p className="text-xs text-gray-500">當前人數</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => setSelectedClientProject(project)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-purple-600 hover:bg-purple-50 rounded">
                            <Users className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 當前派遣人員 */}
          {selectedClient?.currentEmployees && selectedClient.currentEmployees.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">當前派遣人員</h3>
              <div className="space-y-3">
                {selectedClient.currentEmployees.map((emp, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <UserCheck className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{emp.name}</p>
                        <p className="text-sm text-gray-600">{emp.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">派遣開始日期</p>
                      <p className="text-sm font-medium">{emp.startDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 人力需求 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">人力需求類型</h3>
            <div className="flex flex-wrap gap-2">
              {selectedClient?.requirements.map((req, index) => (
                <span key={index} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                  {req}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">派遣人員管理系統</h1>
                  <p className="text-xs text-gray-500">Staffing Management System</p>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="flex items-center gap-6">
                <button
                  onClick={() => {
                    setActiveTab('overview');
                    setShowEmployeeDetail(false);
                    setShowClientDetail(false);
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  總覽
                </button>
                <button
                  onClick={() => {
                    setActiveTab('employees');
                    setShowEmployeeDetail(false);
                    setShowClientDetail(false);
                    setShowImportExport(false);
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'employees' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  人員管理
                </button>
                <button
                  onClick={() => {
                    setActiveTab('clients');
                    setShowEmployeeDetail(false);
                    setShowClientDetail(false);
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'clients' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  客戶管理
                </button>
                <button
                  onClick={() => {
                    setActiveTab('interviews');
                    setShowEmployeeDetail(false);
                    setShowClientDetail(false);
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'interviews' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  面談管理
                </button>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">管理員</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'employees' && renderEmployees()}
        {activeTab === 'clients' && renderClients()}
        {activeTab === 'interviews' && renderInterviews()}
      </main>
    </div>
  );
};

export default StaffingShowcase;
