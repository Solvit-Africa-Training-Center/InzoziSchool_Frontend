import { useState } from 'react';
import { Link } from 'react-router-dom';
import JeanImage from '/images/jean.png';
import { LuUsers } from 'react-icons/lu';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoSettings } from 'react-icons/io5';
import { MdDashboard, MdSchool, MdMenu, MdClose } from 'react-icons/md';

export default function SuperAdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/superAdmin/dashboard', label: 'Dashboard', icon: <MdDashboard className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/superAdmin/schools', label: 'School Profiles', icon: <MdSchool className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/superAdmin/users', label: 'Users', icon: <LuUsers className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/superAdmin/analytics', label: 'Analytics', icon: <SiSimpleanalytics className="mr-3 text-xl flex-shrink-0" /> },
    { to: '/superAdmin/superSettings', label: 'Settings', icon: <IoSettings className="mr-3 text-xl flex-shrink-0" /> },
  ];

  return (
    <>
      {/* Hamburger button — mobile only */}
     <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-1 z-40 md:hidden bg-white rounded-lg shadow-md p-2 text-primary-color"
        aria-label="Open menu"
      >
        <MdMenu className="text-2xl" />
      </button>

      {/* Overlay — mobile only, shown when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed w-64 min-h-screen flex flex-col justify-between bg-gradient-to-r from-[#ffffff] to-[#CFDCEA] text-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div>
          <div className="pl-6 pt-6 pb-2 text-[18px] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img src={JeanImage} alt="School" />
              <div className="pt-3">
                <h1 className="font-medium text-primary-color">Super Admin</h1>
                <p className="text-primary-color text-[10px] pl-3">platform Control</p>
              </div>
            </div>

            {/* Close button — mobile only */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden mr-4 text-primary-color"
              aria-label="Close menu"
            >
              <MdClose className="text-2xl" />
            </button>
          </div>

          <div className="py-5"></div>

          <nav className="flex-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center py-3 cursor-pointer hover:text-white hover:bg-primary-color transition-all duration-200 group"
                onClick={() => setIsOpen(false)}
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
      </div>
    </>
  );
}