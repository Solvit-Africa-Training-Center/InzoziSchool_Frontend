import React from 'react';

interface TestimonialCardProps {
  name: string;
  profileImage: string;
  testimonial: string;
  variant?: 'default' | 'light' | 'dark';
  cardBgColor?: string;
  textColor?: string;
  nameColor?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  profileImage,
  testimonial,
  variant = 'default',
  cardBgColor,
  textColor,
  nameColor,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return {
          card: 'bg-white hover:bg-gray-50',
          text: 'text-gray-600',
          name: 'text-gray-800',
        };
      case 'dark':
        return {
          card: 'bg-gray-800 hover:bg-gray-700',
          text: 'text-gray-300',
          name: 'text-white',
        };
      default:
        return {
          card: 'bg-[#E1E5E7] hover:bg-[#E1E5E7]/90',
          text: 'text-gray-700',
          name: 'text-gray-800',
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div className={`${cardBgColor || variantClasses.card} p-6 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md max-w-md`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={profileImage}
            alt={`${name} profile picture`}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className={`${nameColor || variantClasses.name} font-semibold text-base`}>
          {name}
        </h3>
      </div>

      <p className={`${textColor || variantClasses.text} text-sm leading-relaxed italic`}>
        "{testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;