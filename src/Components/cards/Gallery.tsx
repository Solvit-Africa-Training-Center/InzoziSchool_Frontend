import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    { src: '/images/school-exterior-1.png', alt: 'School exterior view' },
    { src: '/images/school-grounds-1.png', alt: 'School sports ground' },
    { src: '/images/school-corridor-1.png', alt: 'School corridor' },
    { src: '/images/school-entrance-1.png', alt: 'School entrance gate' },
    { src: '/images/school-bridge-1.png', alt: 'School bridge walkway' },
    { src: '/images/playground-1.png', alt: 'Playground equipment' },
    { src: '/images/computer-lab-1.png', alt: 'Computer lab classroom' },
    { src: '/images/computer-lab-2.png', alt: 'Computer lab with desks' },
    { src: '/images/school-field-1.png', alt: 'School field area' },
    { src: '/images/sky-view-1.png', alt: 'Sky and clouds view' },
    { src: '/images/sports-field-1.png', alt: 'Sports field with markings' },
    { src: '/images/basketball-court-1.png', alt: 'Basketball court' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Gallery</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" 
            />
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="text-center mt-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
          Apply For a Child
        </button>
      </div>
    </div>
  );
};

export default Gallery;