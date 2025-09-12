import { Link } from 'react-router-dom';
import { 
  MdDashboard, 
  MdSchool, 
  MdPeople, 
  MdPerson, 
  MdEventSeat, 
  MdHome, 
  MdSportsEsports, 
  MdPhotoLibrary, 
  MdMoreHoriz,
  MdAccountCircle,
} from 'react-icons/md';

const Sidebar = ({ 
  schoolName = 'Hope International School',
  schoolImage = '/images/school.png',
  activeItem = 'Dashboard',
  className = '',
  onClose = () => {}, 
}) => (
  <div className={`fixed w-64 bg-primary-color text-white h-full flex flex-col ${className}`}>
    <div className='p-4 flex items-center justify-center bg-primary-color'>
      <img 
        src={schoolImage} 
        alt='School' 
        className='w-16 h-12 rounded object-cover mb-3 bg-primary-color'
      />
    </div>

    <div className='h-12 rounded bg-primary-color mb-3 hidden items-center justify-center'>
      <MdSchool className='text-white text-xl' />
    </div>

    <h2 className='px-4 w-full text-yellow-400 font-semibold text-lg leading-tight mb-9'>
      {schoolName}
    </h2>
    
    <nav className='flex-1'>
      {/* Dashboard */}
      <Link 
        to='/schoolAdmin/dashboard'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Dashboard' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Dashboard' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdDashboard className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Dashboard' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Dashboard' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Dashboard
        </span>
      </Link>

      {/* Applications */}
      <Link 
        to='/schoolAdmin/application'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Applications' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Applications' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdPeople className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Applications' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Applications' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Applications
        </span>
      </Link>

      {/* Admissions */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Admissions' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Admissions' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdSchool className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Admissions' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Admissions' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Admissions
        </span>
      </Link>

      {/* School Profile */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'School Profile' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'School Profile' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdPerson className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'School Profile' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'School Profile' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          School Profile
        </span>
      </Link>

      {/* Admin Profile */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Admin Profile' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Admin Profile' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdAccountCircle className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Admin Profile' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Admin Profile' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Admin Profile
        </span>
      </Link>

      {/* Available Seats */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Available Seats' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Available Seats' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdEventSeat className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Available Seats' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Available Seats' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Available Seats
        </span>
      </Link>

      {/* Hostels */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Hostels' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Hostels' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdHome className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Hostels' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Hostels' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Hostels
        </span>
      </Link>

      {/* Playgrounds */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Playgrounds' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Playgrounds' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdSportsEsports className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Playgrounds' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Playgrounds' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Playgrounds
        </span>
      </Link>

      {/* Gallery */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Gallery' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Gallery' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdPhotoLibrary className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Gallery' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Gallery' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Gallery
        </span>
      </Link>

      {/* Other */}
      <Link 
        to='/'
        className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
          activeItem === 'Other' ? 'text-primary-color hover:text-primary-' : ''
        }`}
        onClick={onClose}
      >
        {activeItem === 'Other' && <div className='absolute right-0 top-0 bottom-0 w-1'></div>}
        <MdMoreHoriz className={`mr-3 text-xl flex-shrink-0 transition-colors ${
          activeItem === 'Other' ? 'text-white' : 'text-white group-hover:text-primary-color'
        }`} />
        <span className={`text-sm font-medium transition-colors ${
          activeItem === 'Other' ? 'text-white' : 'text-gray-300 group-hover:text-primary-color'
        }`}>
          Other
        </span>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
