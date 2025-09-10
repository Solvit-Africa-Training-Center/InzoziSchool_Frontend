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

type SidebarProps = {
  schoolName?: string;
  schoolImage?: string;
  activeItem?: string;
  className?: string;
  onClose?: () => void;
};

const Sidebar = ({ 
  schoolName = 'Hope International School',
  schoolImage = '/images/school.png',
  activeItem = 'Dashboard',
  className = '',
  onClose = () => {}, 
}: SidebarProps) => {

  const sidebarItems = [
    { icon: MdDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: MdPeople, label: 'Applications', id: 'applications' },
    { icon: MdSchool, label: 'Admissions', id: 'admissions' },
    { icon: MdPerson, label: 'School Profile', id: 'school-profile' },
    { icon: MdAccountCircle, label: 'Admin Profile', id: 'admin-profile' },
    { icon: MdEventSeat, label: 'Available Seats', id: 'available-seats' },
    { icon: MdHome, label: 'Hostels', id: 'hostels' },
    { icon: MdSportsEsports, label: 'Playgrounds', id: 'playgrounds' },
    { icon: MdPhotoLibrary, label: 'Gallery', id: 'gallery' },
    { icon: MdMoreHoriz, label: 'Other', id: 'other' },
  ];

  return (
    <div className={`fixed w-64 h-full flex flex-col bg-primary-color text-white ${className}`}>
      
      {/* School logo and name */}
      <div className="p-4 flex flex-col items-center justify-center">
        <img 
          src={schoolImage} 
          alt="School" 
          className="w-16 h-12 rounded object-cover mb-3"
        />
        <h2 className="text-yellow-400 font-semibold text-lg leading-tight">
          {schoolName}
        </h2>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 mt-6">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.label || activeItem === item.id;

          return (
            <div
              key={item.id}
              className={`flex items-center px-4 py-3 cursor-pointer relative group transition-all duration-200
                ${isActive ? 'bg-white text-primary-color' : 'text-gray-300 hover:bg-white hover:text-primary-color'}
              `}
              onClick={onClose}
            >
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white"></div>
              )}
              <item.icon className={`mr-3 text-xl flex-shrink-0 transition-colors 
                ${isActive ? 'text-primary-color' : 'text-white group-hover:text-primary-color'}
              `} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
