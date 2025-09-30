//import { IoEyeOutline } from 'react-icons/io5';
//import { RiDeleteBin6Line } from 'react-icons/ri';
import { useGetAllSchoolsQuery } from '../../App/api/school/school';
import { useNavigate} from 'react-router-dom';
//import { useState } from 'react';
import SchoolCard from '../../Components/cards/SchoolCard';



export default function Table() {
    
   // const[deleteSchool]=useDeleteSchoolMutation();
    //const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(null);
    const navigate = useNavigate();
    const{data}=useGetAllSchoolsQuery();

    const handleView = (id:string)=>{
      navigate(`/superAdmin/ViewSchool/${id}`);
       console.log(id);
    };

     // const [isOpen, setIsOpen] = useState(false);

  // const handleDelete = async() => {
  //    if(!selectedSchoolId){return ;}

  //   try {
  //       await deleteSchool(selectedSchoolId);
  //         setIsOpen(false);
  //         refetch();
  //   } catch (error) {
  //     console.log('error is ', error);
  //   }
  
    
  // };

  //   const clickDelete = (id: string) => {
  //   setSelectedSchoolId(id); // Store the clicked school ID
  //   setIsOpen(true); // Open the popup
  // };
  return (
  <>  
    <div>
      <div className='grid grid-cols-2 gap-[40px] px-[6%]'>
          {
            data?.data.schools.map((school)=>(
              <SchoolCard schoolCode={school.schoolName} schoolName={school.schoolName} status={school.status} location={school.district} onViewProfile={()=>handleView(school.id)}/>
            ))
          }
      </div>   
</div>
</>
  );
}
