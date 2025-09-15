import { Link } from 'react-router-dom';
import JeanImage from '/images/jean.png';
import { skipToken } from '@reduxjs/toolkit/query';
import { MdDashboard, MdSchool } from 'react-icons/md';
import { useUser } from '../../Hooks/useUser';
import { useGetSchoolDetailsQuery } from '../../App/api/school/school';

export default function SuperAdminSidebar() {
  const className = '';
  const onClose = () => {}; 
  const { user } = useUser();
  const { data, isLoading, error } = useGetSchoolDetailsQuery(
    user?.schoolId ?? skipToken,
  );

  const schoolName = isLoading
    ? 'Loading...'
    : error
    ? 'Error fetching school'
    : data?.data?.schoolName || 'Loading...';

  const navItems = [
    { to: '/schoolAdmin/dashboard', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/schoolAdmin/application', label: 'Applications', icon: <MdSchool className="mr-3 text-xl flex-shrink-0" /> },
  ];

  return (
    <div className={`fixed w-64 bg-gradient-to-br from-[#FFFFFF] to-[#E6E9ED] min-h-screen flex flex-col justify-between p-4 text-white shadow-lg ${className}`}>
        <div className='p-4 flex items-center justify-center'>
        <img 
          src={JeanImage} 
          alt='School' 
          className='w-16 h-12 rounded object-cover mb-3 bg-primary-color'
        />
      </div>

      <h2 className='px-4 w-full text-yellow-400 font-semibold text-lg leading-tight mb-9'>
        {schoolName}
      </h2>

        <nav className="flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center  py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 group"
              onClick={onClose}
            >
              <span className="text-primary-color group-hover:text-primary-color transition-colors">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-primary-color group-hover:text-primary-color transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

      </div>
  );
}
