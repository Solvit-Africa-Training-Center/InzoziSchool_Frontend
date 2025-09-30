

import DashboardStatistics from '../../Components/dashboard/DashboardStatistics';
import DashboardTopSection from '../../Components/dashboard/DashboardTopSection';
//import { useUser } from '../../Hooks/useUser';
//import { useGetSchoolDetailsQuery } from '../../App/api/school/school';

export default function Dashboard() {
 // const {user}=useUser();
  //const{data}=useGetSchoolDetailsQuery();
  //console.log(user);
  return (
    <div>
        <DashboardTopSection/>
        <DashboardStatistics/>
    </div>
  );
}
