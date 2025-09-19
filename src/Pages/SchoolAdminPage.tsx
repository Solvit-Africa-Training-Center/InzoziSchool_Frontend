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
      <div className="bg-white rounded-xl shadow-md">
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  </div>
);
