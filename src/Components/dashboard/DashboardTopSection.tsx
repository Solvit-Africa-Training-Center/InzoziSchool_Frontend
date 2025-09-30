import React from 'react';
import { 
  FaUsers, 
  FaUserGraduate, 
  FaChair, 
  FaBed, 
  FaGamepad, 
  FaCamera ,
} from 'react-icons/fa';
import DashboardStatCard from '../cards/DashboardStatCard';

const DashboardTopSection: React.FC = () => {
  const stats = [
    {
      title: 'Pending Applications',
      value: '134',
      subtitle: 'All active applications from parents',
      icon: <FaUsers />,
      iconColor: 'text-yellow-400',
    },
    {
      title: 'Total Admissions',
      value: '609',
      subtitle: 'Total admitted students',
      icon: <FaUserGraduate />,
      iconColor: 'text-yellow-400',
    },
    {
      title: 'Available Seats',
      value: '262',
      subtitle: 'Remaining seats for new students',
      icon: <FaChair />,
      iconColor: 'text-yellow-400',
    },
    {
      title: 'Hostels',
      value: '5',
      subtitle: 'All active applications from parents',
      icon: <FaBed />,
      iconColor: 'text-yellow-400',
    },
    {
      title: 'Playgrounds',
      value: '8',
      subtitle: 'All active applications from parents',
      icon: <FaGamepad />,
      iconColor: 'text-yellow-400',
    },
    {
      title: 'Photos',
      value: '30',
      subtitle: 'All active applications from parents',
      icon: <FaCamera />,
      iconColor: 'text-yellow-400',
    },
  ];

  return (
    <div className="p-6  w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#282C34] font-poppins">
          Dashboard
        </h1>
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
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardTopSection;