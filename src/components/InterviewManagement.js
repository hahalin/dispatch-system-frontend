import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Users,
  Building2,
  Star,
  CheckCircle,
  AlertCircle,
  Plus,
  Edit,
  Eye,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Download,
  ChevronRight
} from 'lucide-react';

const InterviewManagement = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showInterviewDetail, setShowInterviewDetail] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);
  
  // 擴充的面談資料
  const allInterviews = [
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
  
  const upcomingInterviews = allInterviews.filter(i => i.status === '已安排');
  const completedInterviews = allInterviews.filter(i => i.status === '已完成');

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
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                    activeTab === 'upcoming' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  待進行 ({upcomingInterviews.length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                    activeTab === 'completed' 
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
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
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
                {activeTab === 'completed' && (
                  <>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">結果</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-700">評分</th>
                  </>
                )}
                <th className="text-center py-3 px-6 font-medium text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === 'upcoming' ? upcomingInterviews : completedInterviews).map((interview, index) => (
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
                  {activeTab === 'completed' && (
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
      
      {/* 面談統計 */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">15</span>
          </div>
          <p className="text-sm text-gray-600">本月面談場次</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">73%</span>
          </div>
          <p className="text-sm text-gray-600">面談通過率</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">2.5</span>
          </div>
          <p className="text-sm text-gray-600">平均面談輪次</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">8.2</span>
          </div>
          <p className="text-sm text-gray-600">平均評分</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewManagement;
