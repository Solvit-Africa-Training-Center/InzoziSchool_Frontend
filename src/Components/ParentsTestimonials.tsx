import React from 'react';
import TestimonialCard from './cards/TestimonialCard';

const ParentsTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jean Kwitonda',
      profileImage: '/images/jean.png',
      testimonial: 'Inzozi made applying to schools for my children so simple. I used to dread filling out forms and chasing deadlines, but now everything is online, organized, and stress-free. I can see the status of each application in real-time, and the communication with schools is seamless. It truly feels like the future of school admissions!',
    },
    {
      name: 'Marie Rose',
      profileImage: '/images/rosemary.png',
      testimonial: 'As a parent, I appreciate how Inzozi helps me find the best schools for my kids. I was able to compare programs, check reviews, and apply to multiple schools with just a few clicks. The platform saves me so much time and gives me peace of mind knowing my children\'s applications are secure and tracked.',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000000] mb-2">
            Parents Testimonies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <TestimonialCard
                name={testimonial.name}
                profileImage={testimonial.profileImage}
                testimonial={testimonial.testimonial}
                variant="default"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-[#223E61] hover:text-[#223E61]/80 font-medium text-sm inline-flex items-center space-x-2 transition-colors duration-200 hover:underline">
            <span>Read all testimonies</span>
            <svg 
              className="w-4 h-4 transform transition-transform duration-200 hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParentsTestimonials;