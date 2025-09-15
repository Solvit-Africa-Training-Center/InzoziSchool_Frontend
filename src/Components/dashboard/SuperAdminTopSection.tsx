import React from 'react';
import { 
  FaChartLine as TrendingUp,
  FaUsers as Users, FaBuilding as Building,
} from 'react-icons/fa';
import { MdOutlineLocalActivity as Activity } from 'react-icons/md';

import DashboardStatCard from '../cards/DashboardStatCard';

const SuperAdminTopSection: React.FC = () => {
  const stats = [
    {
      title: 'Total Schools',
      value: '1,245',
      subtitle: '+12.5% from last month',
      icon: <Building />,
      iconColor: 'text-primary-color',
      subtitleColor: 'text-green-500',
    },
    {
      title: 'Active Users',
      value: '24,651',
      subtitle: '+8.2% from last monts',
      icon: <Users />,
      iconColor: 'text-green-600',
      subtitleColor: 'text-green-500',
    },
    {
      title: 'Platform Activity',
      value: '98.5%',
      subtitle: '+2.1% from last month',
      icon: <Activity />,
      iconColor: 'text-yellow-400',
      subtitleColor: 'text-green-500',
    },
   
  ];

  return (
    <div className="p-6  w-full">
      <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Super Admin Dashboard</h1>
                  <p className="text-gray-600">Manage and monitor the entire platform</p>
                </div>
                <button className="bg-[#F09C00] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Pending
                </button>
              </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <DashboardStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconColor={stat.iconColor}
            subtitleColor={stat.subtitleColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperAdminTopSection;