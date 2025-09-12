import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/dashboard/Sidebar';
import ContNav from '../Components/ContNav';

export const SchoolAdminPage = () => (
  <div className="min-h-screen flex">
    {/* Sidebar always visible */}
    <Sidebar />

    <div className="bg-[#E5E7EB]/80 ml-64 w-full">
      <ContNav />

      {/* Wrapper */}
      <div className="bg-white/80 rounded-2xl shadow-md p-6">
         
        <Outlet /> {/* Nested routes (dashboard, applications, etc.) render here */}
      </div>
    </div>
  </div>
);
