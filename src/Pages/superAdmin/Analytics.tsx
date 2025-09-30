import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import AnalyticCard from '../../Components/cards/AnalyticCard';

export default function Analytics() {
   const [selectedPeriod, setSelectedPeriod] = useState('Last 6 Months');
   const analyticsData = [
    {
      id: 1,
      title: 'Schools Onboarded',
      value: 35,
      color: 'green',
      icon: 'trending',
      secondaryIcon: 'trending',
    },
    {
      id: 2,
      title: 'Approval Rate',
      value: '76%',
      color: 'blue',
      icon: 'check',
      secondaryIcon: 'bar',
    },
    {
      id: 3,
      title: 'Avg Spots Utilized',
      value: '83%',
      color: 'purple',
      icon: 'users',
    },
    {
      id: 4,
      title: 'Total Applications',
      value: 1127,
      color: 'orange',
      icon: 'file',
      secondaryIcon: 'file',
    },
  ];
   const barChartData = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 20 },
    { month: 'Apr', value: 18 },
    { month: 'May', value: 22 },
    { month: 'Jun', value: 30 },
  ];

  const lineChartData = [
    { month: 'Jan', approved: 45, pending: 25, rejected: 30 },
    { month: 'Feb', approved: 50, pending: 28, rejected: 22 },
    { month: 'Mar', approved: 55, pending: 30, rejected: 15 },
    { month: 'Apr', approved: 65, pending: 32, rejected: 18 },
    { month: 'May', approved: 75, pending: 35, rejected: 20 },
    { month: 'Jun', approved: 85, pending: 38, rejected: 22 },
  ];
  return (
    <div className='p-6'>
      <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">Comprehensive platform performance metrics and insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
            </select>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiDownload className="w-4 h-4 mr-2" />
              PDF
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiDownload className="w-4 h-4 mr-2" />
              Excel
            </button>
          </div>
        </div>
        <AnalyticCard stats={analyticsData} />
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex justify-between space-x-8 px-6">
              <button className="py-4 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600">
                Overview
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
                Schools
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
                Applications
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
                Facilities
              </button>
            </nav>
          </div>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* School Onboarding Trend */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">School Onboarding Trend</h3>
            <p className="text-sm text-gray-600 mb-6">Monthly school registrations vs targets</p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#f59e0b" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Application Status Trends */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Status Trends</h3>
            <p className="text-sm text-gray-600 mb-6">Monthly application processing metrics</p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#666' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="approved" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pending" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rejected" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
    </div>
  );
}
