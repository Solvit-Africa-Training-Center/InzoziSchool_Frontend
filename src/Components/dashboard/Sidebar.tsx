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
  schoolImage ='/images/school.png',
  activeItem ='Dashboard',
  className = '',
  onClose = () => {}, 
}) => {
  
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
    <div className={`fixed w-64 bg-primary-color text-white h-full flex flex-col ${className}`}>
      <div className="p-4 flex items-center justify-center bg-primary-color">
        <img 
          src={schoolImage} 
          alt="School" 
          className="w-16 h-12 rounded object-cover mb-3 bg-primary-color"
    
        />
      </div>

        <div className=" h-12 rounded bg-primary-color mb-3 hidden items-center justify-center">
          <MdSchool className="text-white text-xl" />
        </div>
        <h2 className="px-4 w-full text-yellow-400 font-semibold text-lg leading-tight mb-9">
          {schoolName}
        </h2>
      
      <nav className="flex-1">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.label || activeItem === item.id;
          
          return (
            <div 
              key={item.id}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 relative group ${
                isActive ? 'text-white hover:txt-primary-color' : ''
              }`}
              onClick={onClose}
            >
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 "></div>
              )}
              
              <item.icon className={`mr-3 text-xl flex-shrink-0 transition-colors ${
                isActive ? 'text-primary-color' : 'text-white group-hover:text-primary-color'
              }`} />
              <span className={`text-sm font-medium transition-colors ${
                isActive ? 'text-primary-color' : 'text-gray-300 group-hover:text-primary-color'
              }`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;