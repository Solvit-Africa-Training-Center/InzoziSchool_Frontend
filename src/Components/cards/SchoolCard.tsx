import React from 'react';
import { FiEye } from 'react-icons/fi';

interface SchoolCardProps {
  schoolName: string;
  location: string;
  schoolCode: string;
  status?: 'approved' | 'pending' | 'rejected';
  onViewProfile?: () => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({
  schoolName,
  location,
  schoolCode,
  status = 'approved',
  onViewProfile,
}) => {
  const statusConfig = {
    approved: 'bg-orange-400 text-white',
    pending: 'bg-yellow-400 text-white',
    rejected: 'bg-red-500 text-white',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base mb-1">
            {schoolName}
          </h3>
          <p className="text-sm text-gray-500">@ {location}</p>
        </div>
        <div className="ml-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusConfig[status]}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="mb-4 text-end">
        <p className="text-xs text-primary-color font-bold mb-1">School code: {schoolCode}
        </p>
      </div>

      <button
        onClick={onViewProfile}
        className="w-full bg-[#F09C00] hover:bg-[#F09C00] text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center"
      >
        <FiEye className="w-4 h-4 mr-2" />
        View Profile
      </button>
    </div>
  );
};

export default SchoolCard;
