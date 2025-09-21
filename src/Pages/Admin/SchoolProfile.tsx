import React, { useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import EditProfileButton from '../../Components/schoolProfile/EditComp';
import { IoClose } from 'react-icons/io5';
import SchoolDescriptionTextarea from '../../Components/schoolProfile/TextArea';
import { TextInput } from '../../Components/seats/InputSeats';
import { SelectInput } from '../../Components/seats/SelectInput';
import {category} from '../../Types/Category';
//import { LuUsers } from 'react-icons/lu';
//import { IoLocationOutline } from 'react-icons/io5';
//import { MdModeEdit } from 'react-icons/md';

export default function SchoolProfile() {
    const[editProfile , setEditProfile]=useState(false);
    const[editSchoolInformation , setEditSchoolInformation]=useState(false);

   const editProfileForm=()=>{
    setEditProfile(true);
   };
  return (
    <>
    <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] pl-[40px]'>
        <div className=' pr-5 py-4'>
        <h1 className=' font-family-playfair text-[27px] text-primary-color font-semibold'>School Profile</h1>
        <h3 className='text-gray-500 py-3 font-family-poppins'>Manage your school's information and profile details</h3>    
        </div>

        <div className='bg-white rounded-lg shadow-xl p-3 mr-5 py-3 mt-4 mb-9'>
           <div className='flex justify-center items-center py-5'>
              <div className='relative '>
               <img src="/images/school.png" alt="" className='rounded-[50%] h-[150px] w-[150px]' />
               <div className='absolute left-16 top-33 cursor-pointer text-white px-1 py-1 bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] rounded-[50%] text-2xl'> <CiCamera/> </div>
              </div>
           </div>
            <div>
                <h1 className='text-primary-color font-semibold text-center py-2 font-family-playfair text-[23px]'>School Name Not Set</h1>
                <div className='flex justify-center py-2'>
                <EditProfileButton label='Edit Profile' onClick={editProfileForm}/>
                </div>
                
            </div>

            <div className='px-7'>
                <div className=' pt-12 '>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>About</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>No description provided yet.</h3>
                  <div className='border-b border-gray-500'></div>
                </div>

                 <div className=' pt-3'>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>Mission</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>Mission Not Set yet.</h3>
                </div>

                  <div className=' pt-3 pb-4'>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>Vision</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>Vision Not Set yet.</h3>
                </div>
               
            </div>
        </div>

        <div className='bg-white rounded-lg shadow-xl p-3 mr-5 py-3 my-4 px-7 '>

            <div className='flex justify-between py-8 '>
                <div>
                    <h1 className='font-family-playfair text-[27px] text-primary-color font-semibold'>School Information</h1>
                    <h2 className='text-gray-500 py-3 font-family-poppins'>Basic Institutional Deatils and Contact Information</h2>
                </div>
                <div>
                    <EditProfileButton label='Update Information' onClick={()=>setEditSchoolInformation(true)}/>
                </div>

                
            </div>

            <h1 className='text-primary-color font-bold text-[16px]'>Basic Information</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>School Name</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Category</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>

                         <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Type</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>School Code</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                          <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Levels</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>


                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

             <h1 className='text-primary-color font-bold text-[16px] pt-7'>Location Details</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Province</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Sector</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>

                         <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Village</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>District</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                          <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Cell</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>


                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

            <h1 className='text-primary-color font-bold text-[16px] pt-7'>Contact Information</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Email</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Telephone Number</h1>
                            <h3 className='font-semibold text-[16px]'>Not Specified</h3>
                        </div>

                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

                 <h1 className='text-primary-color font-bold text-[16px] pt-7'>Legal Documents</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>License Document</h1>
                            <h3 className='font-semibold text-[16px]'>Not Uploaded</h3>
                        </div>
                    </div>
                    
            </div>
           


        </div>
     </div>
      
   {editProfile && (
  <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl shadow-lg z-50 w-[500px] h-[500px] overflow-y-auto">
       <div className='flex justify-between pb-7'>
        <div>
         <h1 className='text-primary-color font-bold font-family-playfair text-[23px]'>Edit School Profile</h1>
         <h3 className='text-gray-500 font-medium text-[16px]'>Update Your School Profile information </h3>
        </div>
       
         <IoClose className='text-2xl cursor-pointer hover:text-red-600' onClick={()=>setEditProfile(false)}/>
       </div>

       <div>
        <form >
          <SchoolDescriptionTextarea label='Description'/>
          <SchoolDescriptionTextarea label='Mission' placeholder='Enter Mission Statement'/>
          <SchoolDescriptionTextarea label='Vision' placeholder='Enter Vision Statement'/>
          <TextInput label='Profile picture ' type='file' placeholder='Enter image Url'/>
          <div className='flex justify-end pr-[40px] pt-7'>
            <EditProfileButton label='Save Profile' type='submit' />
          </div>
        </form>
       </div> 
    </div>
  </div>
)}

  {editSchoolInformation && (
  <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl shadow-lg z-50 w-[730px] h-[550px] overflow-y-auto">
       <div className='flex justify-between pb-7'>
        <div>
         <h1 className='text-primary-color font-bold font-family-playfair text-[23px]'>Update School Onformation</h1>
         <h3 className='text-gray-500 font-medium text-[16px]'>Edit Your School Basic information , location and Contact information </h3>
        </div>
       
         <IoClose className='text-2xl cursor-pointer hover:text-red-600' onClick={()=>setEditSchoolInformation(false)}/>
       </div>

       <div>
        <form >
         <div>
           <h2 className='text-primary-color font-bold font-family-playfair text-[17px]' >Basic Information</h2>
         </div>
           <div className='pt-3 flex gap-[30px]'>
            <TextInput label='School Name' placeholder='Enter School Name'/>
            <TextInput label='School Code' placeholder='Enter School Code'/>
           </div>

           <div className='pt-3 flex gap-[30px]'>
             <SelectInput options={category}/>
             <TextInput label='Level' placeholder='Enter Level'/>
           </div>

           <div className='pt-3'>
             <TextInput label='Type' placeholder='e.g., mixed'/>
           </div>

           <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Location Details</h1></div>

            <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Province' placeholder='Enter Province'/>
            <TextInput label='District' placeholder='Enter district'/>
           </div>

             <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Sector' placeholder='Enter Sector'/>
            <TextInput label='Cell' placeholder='Enter Cell'/>
           </div>

          <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Village' placeholder='Enter Village'/>
          </div>

          <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Contact Information</h1></div>

         <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Email' placeholder='example@gmail.com' type='email'/>
            <TextInput label='Phone Number' placeholder='+2507888876'/>
        </div>

          <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Documents</h1></div>

         <div className='pt-3 flex gap-[30px]'>
            <TextInput label='License Document Url' placeholder='license Url' type='file'/>   
        </div>

        <div className='flex justify-end mr-8'>
            <EditProfileButton label='Save Information'/>
        </div>
        </form>
       </div> 
    </div>
  </div>
)}


</>
  );
}
