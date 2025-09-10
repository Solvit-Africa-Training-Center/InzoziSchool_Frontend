// src/Components/cards/DashboardStatCard.tsx
import React from 'react';

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  iconColor?: string;
  backgroundColor?: string;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  iconColor = 'text-yellow-500',
  backgroundColor = 'bg-white',
}) => (
    <div className={`${backgroundColor} w-full p-6 rounded-lg shadow-sm  border border-[#E5E7EB] hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 font-poppins">
          {title}
        </h3>
        <div className={`${iconColor} text-xl`}>
          {icon}
        </div>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold text-gray-900 font-poppins">
          {value}
        </span>
      </div>

      <p className="text-xs text-gray-500 font-poppins">
        {subtitle}
      </p>
    </div>
  );

export default DashboardStatCard;