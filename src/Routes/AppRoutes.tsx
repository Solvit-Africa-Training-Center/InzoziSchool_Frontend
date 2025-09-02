
import { Route , Routes } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';


export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}
