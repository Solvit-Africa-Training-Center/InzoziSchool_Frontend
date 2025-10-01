import{ useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApproveSchoolMutation, useGetSchoolByIdQuery, useRejectSchoolMutation } from '../../App/api/school/school';
import { MdDone } from 'react-icons/md';
import { GrEject } from 'react-icons/gr';


export default function ViewSchool() {

    const navigate =useNavigate();
    const[rejectMessage , setRejectMessage]=useState('');
    //const [openRejectMessage , setOpenRejectMessage]=useState(false);
    
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
    const{id}=useParams();
    const{data , refetch}=useGetSchoolByIdQuery(id ??'');
    const[approveSchool]=useApproveSchoolMutation();
    const[rejectSchool]=useRejectSchoolMutation();

    const CancelView =()=>{
      navigate('/superAdmin/schools');
    };

    const handleApprove = async () => {
  if (!id){return;}
  try {
    await approveSchool(id).unwrap();
    setPopupMessage('✅ School Approved Successfully!');
    setShowPopup(true);
    setFadeOut(false);
    refetch();

    setTimeout(() => setFadeOut(true), 3500); // fade out
    setTimeout(() => setShowPopup(false), 4000); // hide completely
  } catch (err) {
    return err;
   // console.error('Approve failed ', err);
  }
};

const handleReject = async () => {
  if (!id){return;}
  try {
    await rejectSchool({id:id , message:rejectMessage}).unwrap();
    //refetch();
    setPopupMessage(' School Rejected Successfully!');
    setShowPopup(true);
    setFadeOut(false);
    setRejectMessage('');
    refetch();

    setTimeout(() => setFadeOut(true), 3500); // fade out
    setTimeout(() => setShowPopup(false), 4000); // hide completely
  } catch (err) {
    return err;
    //console.error('Reject failed ', err);
  }
};
  return (
    <>
    <div>
        <div className=''>
            <h1 className='text-black font-family-playfair text-[20px] text-center font-bold'>View {data?.data.schoolName} </h1>
        <div>
            <h1 className='text-[#4E5155] font-medium text-[18px] py-3'>School Name : <span className='text-[13px]'>{data?.data.schoolName}</span></h1>

            <h1 className='text-[#4E5155] font-medium text-[18px] py-3'>School Code : <span className='text-[13px]'>{data?.data.schoolCode}</span></h1>

            <h1 className='text-[#4E5155] font-medium text-[18px] py-3'>School Email : <span className='text-[13px]'>{data?.data.email}</span></h1>

            <h1 className='text-[#4E5155] font-medium text-[18px] py-3'>District : <span className='text-[13px]'>{data?.data.district}</span></h1>

            <h1 className='text-primary-color font-medium text-[18px] py-4'>Certificate:  <span className='text-[13px] border border-primary-color px-3 py-1 rounded-md font-family-poppins ml-9 cursor-pointer'><a
                   href={data?.data.licenseDocument ?? '#'}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-600 underline"
                    >
                   View Document
                  </a></span></h1>   
        </div>

        <div className={`py-[50px] px-[6%]  flex  justify-between gap-[30px] ${data?.data.status==='pending'?'block':'hidden'}`}>

         <button onClick={CancelView} className='w-[156px] py-1 px-4 rounded-lg text-white font-medium font-family-poppins
         bg-gray-200 border-none cursor-pointer'> <p>Cancel</p></button>

          <button onClick={handleApprove} className='w-[156px] py-1 px-4 rounded-lg text-white font-medium font-family-poppins
         bg-[#157F3C] border-none cursor-pointer flex gap-2'> <MdDone className='pt-1 text-[23px]'/> <p>approve</p></button>
          
          <div className="flex flex-col gap-2 relative">
  {/* Reject Message Input */}
  <textarea
    className="border text-black border-gray-950 px-3 py-1"
    placeholder="Enter rejection message"
    required
    value={rejectMessage}
    onChange={(e) => setRejectMessage(e.target.value)}
  />

  {/* Reject Button */}
  <button
    onClick={handleReject}
    className="w-[156px] py-1 px-4 rounded-lg text-white font-medium font-family-poppins
               bg-[#05416B] border-none cursor-pointer flex gap-2"
  >
    <GrEject className="pt-1 text-[23px]" />
    <p>Reject</p>
  </button>
</div>

        </div>
        </div>
     </div>

     {showPopup && (
  <div
    className={`absolute top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white transition-opacity duration-500 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    } ${popupMessage.includes('Approved') ? 'bg-green-600' : 'bg-red-600'}`}
  >
    {popupMessage}
  </div>
)}

   
    </>
  );
}
