import { Outlet } from 'react-router-dom';
import ContNav from '../Components/ContNav';
import SuperAdminSidebar from '../Components/dashboard/SuperAdminSidebar';

export const SuperAdminPage = () => (
  <div className="min-h-screen flex">
    {/* Sidebar always visible */}
    <SuperAdminSidebar />

    <div className="bg-[#E5E7EB]/80 ml-64 w-full">
      <ContNav />

      {/* Wrapper */}
      <div className="bg-white/80 rounded-xl shadow-md">
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  </div>
);
