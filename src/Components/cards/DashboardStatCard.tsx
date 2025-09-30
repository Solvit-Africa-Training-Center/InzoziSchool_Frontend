// src/Components/cards/DashboardStatCard.tsx
import React from 'react';

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  iconColor?: string;
  backgroundColor?: string;
  subtitleColor?: string;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  title,
  value,
  subtitle,
  subtitleColor = 'text-gray-500',
  icon,
  iconColor = 'text-yellow-500',
  backgroundColor = 'bg-white',
}) => (
    <div className={`${backgroundColor} w-full p-6 rounded-lg shadow-sm  border border-[#E5E7EB] hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#6B7280] font-poppins">
          {title}
        </h3>
        <div className={`${iconColor} text-xl`}>
          {icon}
        </div>
      </div>

      <div className="mb-2">
        <span className="text-3xl font-bold text-black font-poppins">
          {value}
        </span>
      </div>

        <p className={`${subtitleColor}text-xs text-[#6B7280] font-popp`}>
        {subtitle}
      </p>
    </div>
  );

export default DashboardStatCard;