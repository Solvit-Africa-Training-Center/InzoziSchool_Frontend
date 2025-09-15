import { Link } from 'react-router-dom';
import schoolImage from '/images/school.png';
import { skipToken } from '@reduxjs/toolkit/query';
import { 
  MdDashboard, 
  MdSchool, 
  MdPeople, 
  MdPerson, 
  MdEventSeat, 
  MdHome, 
  MdSportsEsports, 
  MdPhotoLibrary, 
  MdAccountCircle,
} from 'react-icons/md';
import { useUser } from '../../Hooks/useUser';
import { useGetSchoolDetailsQuery } from '../../App/api/school/school';

export default function Sidebar() {
  const className ='';
  const onClose = () => {}; 

  const{user}=useUser();
  const{data , isLoading , error}=useGetSchoolDetailsQuery(user?.schoolId ?? skipToken);

  const schoolName = isLoading
    ? 'Loading...'
    : error
    ? 'Error fetching school'
    : data?.data?.schoolName || 'Loading...';

  console.log(user);

  const navItems = [
    { to: '/schoolAdmin/dashboard', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/schoolAdmin/application', label: 'Applications', icon: <MdPeople className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/', label: 'Admissions', icon: <MdSchool className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/schoolAdmin/schoolProfile', label: 'School Profile', icon: <MdPerson className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/', label: 'Admin Profile', icon: <MdAccountCircle className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/', label: 'Available Seats', icon: <MdEventSeat className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/', label: 'Hostels', icon: <MdHome className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/', label: 'Playgrounds', icon: <MdSportsEsports className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/SchoolAdmin/gallery', label: 'Gallery', icon: <MdPhotoLibrary className="mr-3 text-xl flex-shrink-0" /> },
    
  ];

  return (
    <div className={`fixed w-64 bg-primary-color text-white h-full flex flex-col ${className}`}>
      <div className='p-4 flex items-center justify-center bg-primary-color'>
        <img 
          src={schoolImage} 
          alt='School' 
          className='w-16 h-12 rounded object-cover mb-3 bg-primary-color'
        />
      </div>

      <h2 className='px-4 w-full text-yellow-400 font-semibold text-lg leading-tight mb-9'>
        {schoolName}
      </h2>
      
      <nav className='flex-1'>
        {navItems.map((item, index) => (
          <Link 
            key={index}
            to={item.to}
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 group"
            onClick={onClose}
          >
            <span className="text-white group-hover:text-primary-color transition-colors">
              {item.icon}
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover:text-primary-color transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
