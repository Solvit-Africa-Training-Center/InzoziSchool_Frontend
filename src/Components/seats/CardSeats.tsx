import React from 'react';

// 1. Define the props structure for the component
interface SeatCapacityCardProps {
  title: string;          // e.g., "Primary Level"
  totalSeats: number;     // e.g., 50
  occupied: number;       // e.g., 15
}

// 2. The main component function
export const SeatCapacityCard: React.FC<SeatCapacityCardProps> = ({
  title,
  totalSeats,
  occupied,
}) => {
  
  // --- Data Calculation ---
  const available = totalSeats - occupied;
  const availablePercentage = ((available / totalSeats) * 100).toFixed(0);
  
  // Determine if availability is high (for green badge color)
  const isHighAvailability = availablePercentage >= '50';

  // --- Tailwind Classes ---

  // Card container styling (blue left border, shadow, rounded corners)
  const cardClasses = 
    'bg-white shadow-lg rounded-lg overflow-hidden ' +
    'border-l-4 border-blue-500 p-6 w-full max-w-sm';

  // Badge styling (Green badge for availability)
  const badgeClasses = 
    'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ' +
    (isHighAvailability ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700');
    
  // Icon for the badge (simple user group icon)
  const PersonIcon = (
    <svg 
      className="w-4 h-4 mr-1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <path d="M20 8v6M23 11h-6"></path>
    </svg>
  );

  // Icon for labels (simple user icon)
  const SmallPersonIcon = (
    <svg 
      className="w-4 h-4 mr-1 text-gray-500" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <div className={cardClasses}>
      
      {/* --- Card Header: Title and Badge --- */}
      <div className="flex justify-between items-start mb-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        
        {/* Availability Badge */}
        <span className={badgeClasses}>
          {PersonIcon}
          {availablePercentage}% Available
        </span>
      </div>

      {/* --- Top Row: Total Seats & Occupied --- */}
      <div className="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
        
        {/* Total Seats Column */}
        <div>
          <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
            {SmallPersonIcon} Total Seats
          </div>
          <p className="text-2xl font-bold text-primary-color font-family-playfair">{totalSeats}</p>
        </div>
        
        {/* Occupied Column */}
        <div>
          <div className="flex items-center text-sm font-medium text-gray-400 mb-1 ">
            {SmallPersonIcon} Occupied
          </div>
          <p className="text-2xl font-bold text-gray-800 font-family-playfair">{occupied}</p>
        </div>
      </div>

      {/* --- Bottom Row: Available Seats --- */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Available Column (We use grid-cols-2 for layout, even with one main item) */}
        <div>
          <div className="text-base font-medium text-gray-500 mb-1">
            Available
          </div>
          <p className="text-2xl font-semibold  text-blue-500">{available}</p>
        </div>

        {/* The second column is left empty to maintain the two-column structure if needed later */}
        <div /> 
      </div>
    </div>
  );
};