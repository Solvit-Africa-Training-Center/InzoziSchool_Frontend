import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDeleteSchoolMutation, useGetAllSchoolsQuery } from '../../App/api/school/school';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';



export default function Table() {
    
    const[deleteSchool]=useDeleteSchoolMutation();
    const [selectedSchoolId, setSelectedSchoolId] = useState<string | null>(null);
    const navigate = useNavigate();
    const{data , refetch }=useGetAllSchoolsQuery();

    const handleView = (id:string)=>{
      navigate(`/superAdmin/ViewSchool/${id}`);
       console.log(id);
    };

      const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async() => {
     if(!selectedSchoolId){return ;}

    try {
        await deleteSchool(selectedSchoolId);
          setIsOpen(false);
          refetch();
    } catch (error) {
      console.log('error is ', error);
    }
  
    
  };

    const clickDelete = (id: string) => {
    setSelectedSchoolId(id); // Store the clicked school ID
    setIsOpen(true); // Open the popup
  };
  return (
  <>  
    <div>
    <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">

    {
        data?.data.schools.map((school)=>(
      <tr>
      <td className="px-6 py-4 whitespace-nowrap">{school.schoolName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{school.district}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-red-800 ${school.status==='approved'?'bg-primary-color text-white':'bg-red-100 '}`}>{school.status}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex gap-3">
        <button onClick={()=>handleView(school.id)} className=" hover:text-indigo-900 mr-2 cursor-pointer rounded-md border border-[#E5E7EB] flex gap-1 justify-center items-center px-2 py-1"><IoEyeOutline/> <p>View</p> </button>
        <button onClick={()=>clickDelete(school.id)} className=" hover:text-red-900 border rounded-md border-[#E5E7EB] flex gap-1 justify-center items-center px-2 py-1 cursor-pointer"> <RiDeleteBin6Line/> <p>Delete</p></button>
      </td>
    </tr>
        ))
    }

   
  </tbody>
</table>

</div>

<div>
   
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <p className="mb-4 text-gray-800">Are you sure you want to delete school?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
</div>
</>
  );
}
