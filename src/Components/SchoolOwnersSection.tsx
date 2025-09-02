import React from 'react';
import { FaUser, FaClipboardList, FaUsers } from 'react-icons/fa';
import FeatureCard from './cards/FeatureCard';

interface StatisticCardProps {
  percentage: string;
  description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ percentage, description }) => (
  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-lg text-center text-white">
    <div className="text-4xl font-bold mb-2">{percentage}</div>
    <p className="text-blue-100 text-sm">{description}</p>
  </div>
);

const SchoolOwnersSection: React.FC = () => {
  const features = [
    {
      icon: <FaUser className="w-5 h-5" />,
      title: 'Create your School Profile',
      description: 'Easily register your school profile, add details like location, programs, and contact information to increase visibility among parents.',
    },
    {
      icon: <FaClipboardList className="w-5 h-5" />,
      title: 'Receive & Track Applications',
      description: 'Get applications directly from parents, review student details, and manage admissions all in one place—paper-free and efficient.',
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: 'Connect with Parents',
      description: 'Send updates, respond to inquiries, and keep parents informed. Build trust and grow your school community through direct communication.',
    },
  ];

  const statistics = [
    {
      percentage: '3x',
      description: 'Faster Application Processing',
    },
    {
      percentage: '85%',
      description: 'Reduction in Administrative Work',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#223D60]">For </span>
            <span className="text-[#E69500]">School Owners</span>
          </h2>
          <p className="text-[#223D60] text-lg max-w-2xl mx-auto">
            Simplify your child's educational journey with powerful tools designed for Rwandan families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/schoolOwner.png"
                alt="School owner working on computer managing applications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 flex flex-col justify-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="default"
                cardBgColor="bg-[#0A303F] hover:bg-[#0A303F]/90"
                textColor="text-[#F6FCFF]"
                iconBgColor="bg-white"
                iconTextColor="text-[#223D60]"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              percentage={stat.percentage}
              description={stat.description}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#223D60] hover:bg-[#223D60]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95">
            Register Your School
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolOwnersSection;