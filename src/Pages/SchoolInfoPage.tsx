import React from 'react';
//import SchoolFacilities from '../Components/cards/SchoolFacilities';
import Gallery from '../Components/cards/Gallery';
import Navigation from '../Components/Navigation';

interface ClassLevel {
  level: string;
  availableSeats: number;
  schoolFees: string;
}

const SchoolInfoPage: React.FC = () => {
  const nurseryLevels: ClassLevel[] = [
    { level: 'Nursery 1', availableSeats: 25, schoolFees: 'School Fees Range' },
    { level: 'Nursery 2', availableSeats: 18, schoolFees: 'School Fees Range' },
    { level: 'Nursery 3', availableSeats: 12, schoolFees: 'School Fees Range' },
  ];

  const primaryLevels: ClassLevel[] = [
    { level: 'Primary 1', availableSeats: 30, schoolFees: 'School Fees Range' },
    { level: 'Primary 2', availableSeats: 22, schoolFees: 'School Fees Range' },
    { level: 'Primary 3', availableSeats: 15, schoolFees: 'School Fees Range' },
    { level: 'Primary 4', availableSeats: 8, schoolFees: 'School Fees Range' },
    { level: 'Primary 5', availableSeats: 20, schoolFees: 'School Fees Range' },
    { level: 'Primary 6', availableSeats: 14, schoolFees: 'School Fees Range' },
  ];

  const secondaryLevels: ClassLevel[] = [
    { level: 'Secondary 1', availableSeats: 28, schoolFees: 'School Fees Range' },
    { level: 'Secondary 2', availableSeats: 16, schoolFees: 'School Fees Range' },
    { level: 'Secondary 3', availableSeats: 19, schoolFees: 'School Fees Range' },
    { level: 'Secondary 4', availableSeats: 11, schoolFees: 'School Fees Range' },
    { level: 'Secondary 5', availableSeats: 13, schoolFees: 'School Fees Range' },
    { level: 'Secondary 6', availableSeats: 7, schoolFees: 'School Fees Range' },
  ];

  const renderClassLevelButton = (classLevel: ClassLevel, index: number) => (
    <div key={index} className="relative">
      <button className="w-full px-2 py-1 bg-primary-color text-center text-white rounded-full transition-colors duration-200">
        <div className="text-sm font-semibold mb-2">{classLevel.level}</div>
      </button>
      
      <div className="mt-2 text-center">
        <div className="text-xs text-[#F4A30D] font-medium mb-1">Available Seats: 15</div>
        <div className="text-xs text-gray-600">{classLevel.schoolFees}</div>
      </div>
    </div>
  );

  return (
    <>
    <Navigation/>
    <div className="min-h-screen pt-[60px]  ">
     <div 
  className="relative  h-[400px] bg-cover bg-center " 
  style={{ backgroundImage: 'url("/images/international.png")' }}
>

  {/* Blue overlay */}
  <div className="absolute inset-0 bg-blue-400 opacity-30"></div>

  {/* Content */}
  <div className="absolute flex bottom-7 left-0 right-0 items-center justify-center gap-5">
    <div className="w-1/3 bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] py-2">
      <h1 className="text-primary-color text-2xl font-bold text-center">
        Hope International School
      </h1>
    </div>
    
    <div>
      <button className="bg-white text-primary-color px-4 py-2 rounded text-sm font-medium transition-colors duration-200 cursor-pointer">
        Apply For a Child
      </button>
    </div>
  </div>
</div>

      <div className="p-6">
        <div className="mx-6">
          <div className="bg-white rounded-lg p-6">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-family-playfair text-primary-color">School Information</h2>
              {/* <span className="bg-[#F4A30D] text-black px-4 py-1 rounded-sm text-sm font-medium">
                Available Seats: 262
              </span> */}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-4">Location</h3>
              <div className="grid grid-cols-4 gap-8 bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] rounded-lg py-7">
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">District</div>
                  <div className="font-semibold text-black">Bugesera</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Sector</div>
                  <div className="font-semibold text-black">Ntarama</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Kanzenze</div>
                  <div className="font-semibold text-black">Kanzenze</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Village</div>
                  <div className="font-semibold text-black">Karumuna</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-black font-bold mb-3">Mission</h3>
              <p className="text-primary-color leading-relaxed py-3">
                A premier educational institution committed to excellence in learning and character 
                development. We provide a nurturing environment where students can grow academically, 
                socially, and personally.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#282C34] mb-6">Available Seats</h3>
              
              <div className="grid grid-cols-5 gap-4">
                {nurseryLevels.map((classLevel, index) => renderClassLevelButton(classLevel, index))}
                
                {primaryLevels.map((classLevel, index) => renderClassLevelButton(classLevel, index + 3))}
                
                {secondaryLevels.map((classLevel, index) => renderClassLevelButton(classLevel, index + 9))}
              </div>
            </div>
          {/* school facilities */}
            <Gallery/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolInfoPage;