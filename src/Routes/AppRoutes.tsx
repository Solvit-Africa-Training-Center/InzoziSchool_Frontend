
import { Route , Routes } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import SchoolPage from '../Pages/SchoolPage';
import SchoolRegister from '../Pages/SchoolRegister';
import SuccessPage from '../Pages/SuccessPage';
import Pending from '../Pages/Pending';
import CreateNewPasswordPage from '../Pages/ResetPasswordPage';


export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/schoolManager' element={<SchoolPage/>}/>
            <Route path='/schoolRegister' element={<SchoolRegister/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
            <Route path='/pending' element={<Pending/>}/>
            <Route path='/reset' element={<CreateNewPasswordPage/>}/>

            
        </Routes>
    </div>
  );
}
