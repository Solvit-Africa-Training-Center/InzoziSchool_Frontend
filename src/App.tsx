// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './Routes/AppRoutes';

import DashboardTopSection from './Components/dashboard/DashboardTopSection';
import Sidebar from './Components/dashboard/Sidebar';

// import Sidebar from './Components/dashboard/Sidebar';


function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <AppRoutes />
      </BrowserRouter> */}
      {/* <Sidebar/> */}
     <div className="flex min-h-screen bg-gray-100 w-full">
  <Sidebar />          {/* Fixed width: 256px */}
  <DashboardTopSection /> {/* Flexible width: remaining space */}
</div>

    </div>
  );
}

export default App;
