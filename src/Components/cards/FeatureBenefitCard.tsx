import React from 'react';

interface FeatureBenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'light' | 'dark';
  iconGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const FeatureBenefitCard: React.FC<FeatureBenefitCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  iconGradient,
  titleColor,
  descriptionColor,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return {
          title: 'text-gray-800',
          description: 'text-gray-600',
          iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
        };
      case 'dark':
        return {
          title: 'text-white',
          description: 'text-gray-300',
          iconBg: 'bg-gradient-to-br from-indigo-600 to-purple-700',
        };
      default:
        return {
          title: 'text-gray-800',
          description: 'text-gray-600',
          iconBg: 'bg-gradient-to-br from-orange-400 to-yellow-500',
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div className="bg-gradient-to-br from-[#ffffff] to-[#F9FAFB] rounded-sm  p-6 hover:transform hover:scale-105 transition-all duration-200">
      <div className="mb-6">
        <div className={`${iconGradient || variantClasses.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className={`${titleColor || variantClasses.title} font-semibold text-lg leading-tight`}>
          {title}
        </h3>
        <p className={`${descriptionColor || variantClasses.description} text-sm leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBenefitCard;