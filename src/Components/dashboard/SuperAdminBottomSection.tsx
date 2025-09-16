import React from 'react';
import { FaChartLine as TrendingUp,FaBuilding as Building } from 'react-icons/fa';
const SuperAdminBottomSection: React.FC = () => {
  const recentActivities = [
    {
      title: 'New school registered',
      subtitle: 'St. Mary\'s Academy',
      status: 'pending',
      time: '2 hours ago',
    },
    {
      title: 'New School Approved',
      subtitle: 'Lincoln High School',
      status: 'approved',
      time: '4 hours ago',
    },
    {
      title: 'School Rejected',
      subtitle: 'Riverside Elementary',
      status: 'rejected',
      time: '6 hours ago',
    },
    {
      title: 'Profile updated',
      subtitle: 'Washington Middle School',
      status: 'completed',
      time: '8 hours ago',
    },
    {
      title: 'Support ticket resolved',
      subtitle: 'Kennedy High School',
      status: 'resolved',
      time: '1 day ago',
    },
  ];

  const pendingApprovals = [
    {
      title: 'Greenwood Academy',
      subtitle: 'New Registration',
      date: '2024-01-15',
    },
    {
      title: 'Oakfield Elementary',
      subtitle: 'Profile Update',
      date: '2024-01-14',
    },
    {
      title: 'Mountain View High',
      subtitle: 'Document Verification',
      date: '2024-01-13',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: 'bg-[#EF4343] text-white',
      approved: 'bg-[#F09C00] text-white',
      rejected: 'bg-[#F09C00] text-white',
      completed: 'bg-[#F09C00] text-white',
      resolved: 'bg-primary-color text-white',
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status as keyof typeof statusConfig]}`}>
        {status}
      </span>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          
          <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-gray-700 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">Latest platform activities and updates</p>
            
            <div className="space-y-5">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{activity.title}</h4>
                    <p className="text-sm text-gray-500">{activity.subtitle}</p>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    {getStatusBadge(activity.status)}
                    <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-orange-500 rounded-full mr-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
              </div>
              <div className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                3
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">Items requiring your immediate attention</p>
            
            <div className="space-y-5">
              {pendingApprovals.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center mr-3">
                      <Building className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Submitted</p>
                    <p className="text-xs font-semibold text-gray-600">{item.date}</p>
                  </div>
                </div>
              ))}
              
              {/* <div className="pt-3 text-center">
                <button className="text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center justify-center w-full">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Review All Pending
                </button>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SuperAdminBottomSection;