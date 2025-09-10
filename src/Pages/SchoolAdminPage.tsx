import Sidebar from '../Components/dashboard/Sidebar';
import DashboardTopSection from '../Components/dashboard/DashboardTopSection';
import ContNav from '../Components/ContNav';


export const SchoolAdminPage = () => (
    <>
      <div className="min-h-screen flex">
        

    <Sidebar />


    <div className="bg-[#E5E7EB]/80 ml-64 w-full">
 <ContNav/>
      {/* Wrapper stays opaque white */}
      <div className="bg-white/80 rounded-2xl shadow-md p-6">
        <DashboardTopSection />
      </div>
    </div>
  </div>
    </>

);


