import { Outlet } from 'react-router-dom';
import ContNav from '../Components/ContNav';
import SuperAdminSidebar from '../Components/dashboard/SuperAdminSidebar';

export const SuperAdminPage = () => (
  <div className="min-h-screen flex">
    {/* Sidebar always visible */}
    <SuperAdminSidebar />

    <div className="bg-[#E5E7EB]/80 w-full min-w-0 overflow-x-hidden md:ml-64 md:w-[calc(100%-16rem)]">
      <ContNav />

      {/* Wrapper */}
      <div className="bg-white/80 rounded-xl shadow-md min-w-0">
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  </div>
);
