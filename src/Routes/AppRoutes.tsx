
import { Route , Routes } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import SchoolPage from '../Pages/SchoolPage';
import SchoolRegister from '../Pages/SchoolRegister';
import SuccessPage from '../Pages/SuccessPage';
import Pending from '../Pages/Pending';
import ResetPasswordPage from '../Pages/ResetPasswordPage';
import CreateNewPasswordPage from '../Pages/CreateNewPasswordPage';
import { SchoolAdminPage } from '../Pages/SchoolAdminPage';
import Admin from '../Pages/Admin';
import Settings from '../Pages/Settings';
import { Application } from '../Pages/Admin/Application';
import Dashboard from '../Pages/Admin/Dashboard';
import NotFound from '../Pages/NotFound';
import ProtectedRoute from '../Components/ProtectedRoutes';
import SchoolInfoPage from '../Pages/SchoolInfoPage';
import HaveAccountPage from '../Pages/HaveAccount';
import OtpPage from '../Pages/Otp';
import Gallery from '../Pages/Admin/Gallery';
import SchoolProfile from '../Pages/Admin/SchoolProfile';



export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/schoolManager' element={<SchoolPage/>}/>
            <Route path='/schoolRegister' element={<ProtectedRoute><SchoolRegister/></ProtectedRoute> }/>
            <Route path='/success' element={<SuccessPage/>}/>
            <Route path='/pending' element={ <ProtectedRoute><Pending/></ProtectedRoute> }/>
            <Route path='/viewSchool' element={<SchoolInfoPage/>}/>
            <Route path='/reset' element={<ResetPasswordPage/>}/>
            <Route path='/newpassword' element={<CreateNewPasswordPage/>}/>
            <Route path='/haveaccount' element={<HaveAccountPage/>}/>
            <Route path='/verification' element={<OtpPage/>}/>

          
            <Route path='/schoolAdmin' element={
              <SchoolAdminPage/> }>
               <Route path='application' element={<Application />} />
               <Route path='dashboard' element={<Dashboard />} />
               <Route path='schoolProfile' element={<SchoolProfile/>} />
               <Route path='gallery' element={<Gallery/>} />
             </Route>
             
            <Route path='/admin' element={<Admin/>}> </Route>
            <Route path='/setting' element={<Settings/>}> </Route>
            
        </Routes>
    </div>
  );
}
