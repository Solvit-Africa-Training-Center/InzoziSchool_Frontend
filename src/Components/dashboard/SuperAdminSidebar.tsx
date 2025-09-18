import { Link } from 'react-router-dom';
import JeanImage from '/images/jean.png';
import { LuUsers } from 'react-icons/lu';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoSettings } from 'react-icons/io5';
// import { skipToken } from '@reduxjs/toolkit/query';
import { MdDashboard, MdSchool } from 'react-icons/md';
// import { useUser } from '../../Hooks/useUser';
export default function SuperAdminSidebar() {
  const className = '';
  const onClose = () => {}; 
  // const { user } = useUser();
  

  // const schoolName = isLoading
  //   ? 'Loading...'
  //   : error
  //   ? 'Error fetching school'
  //   : data?.data?.schoolName || 'Loading...';

  const navItems = [
    { to: '/superAdmin/dashboard', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/superAdmin/schools', label: 'School Profiles', icon: <MdSchool className="mr-3 text-xl flex-shrink-0" /> },
     { to: '/superAdmin/users', label: 'Users', icon: <LuUsers className="mr-3 text-xl flex-shrink-0" /> },
     { to: '/superAdmin/analytics', label: 'Analytics', icon: <SiSimpleanalytics className="mr-3 text-xl flex-shrink-0" /> },
     { to: '/superAdmin/superSettings', label: 'Settings', icon: <IoSettings className="mr-3 text-xl flex-shrink-0" /> },
  ];

  return (
    <div className={`fixed w-64  min-h-screen flex flex-col justify-between  text-white shadow-lg ${className}`}>
        <div className='pl-6 pt-6 text-[18px] flex items-center gap-3 '>
        <img 
          src={JeanImage} 
          alt='School' 
          className='   '
        />
        <div className='pt-3'>
         <h1 className='font-medium text-primary-color'>Super Admin</h1>
         <p className='text-primary-color text-[10px] pl-3'>platform Control</p>
        </div>
       

       
      </div>

      <div className='py-5'></div>

        <nav className="flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center  py-3 cursor-pointer  hover:text-white hover:bg-primary-color transition-all duration-200 group"
              onClick={onClose}
            >
              <span className="text-primary-color pl-4 group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className="text-[18px] font-medium text-primary-color group-hover:text-white transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

      </div>
  );
}
