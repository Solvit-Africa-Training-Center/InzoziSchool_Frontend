import Sidebar from '../Components/dashboard/Sidebar';
import DashboardTopSection from '../Components/dashboard/DashboardTopSection';

export const SchoolAdminPage = () => (
  <div className="min-h-screen flex">
    <Sidebar />

    <div className="flex-1 bg-[#E5E7EB]/80 ml-64 p-6">
      {/* Wrapper stays opaque white */}
      <div className="bg-white/80 rounded-2xl shadow-md p-6">
        <DashboardTopSection />
      </div>
    </div>
  </div>
);


