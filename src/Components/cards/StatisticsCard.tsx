import React from 'react';

interface StatisticsCardProps {
  title: string;
  children: React.ReactNode;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-4 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-sm font-medium text-[#6B7280] mb-4 font-poppins">
        {title}
      </h3>
      <div className="h-40">{children}</div>
    </div>
  );

export default StatisticsCard;
