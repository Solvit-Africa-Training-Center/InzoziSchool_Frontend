
import { Route , Routes } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';


export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
        </Routes>
    </div>
  );
}
