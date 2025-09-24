import React, { useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import EditProfileButton from '../../Components/schoolProfile/EditComp';
import { IoClose } from 'react-icons/io5';
import SchoolDescriptionTextarea from '../../Components/schoolProfile/TextArea';
import { TextInput } from '../../Components/seats/InputSeats';
import { SelectInput } from '../../Components/seats/SelectInput';
import {categ, Levels , Provinces , schoolType} from '../../Types/Seats';
import { useGetProfileQuery,useGetSchoolDetailsQuery,useUpdateProfileMutation, useUpdateSchoolInfoMutation } from '../../App/api/school/school';
import { useUser } from '../../Hooks/useUser';
import type{SchoolInformation} from '../../Types/schoolProfile';
import{districts} from '../../Types/district';
import { skipToken } from '@reduxjs/toolkit/query';


export default function SchoolProfile() {
    
  const{user}=useUser();
  const{data:schoolDetails}=useGetSchoolDetailsQuery(user?.schoolId ??skipToken);
 const[updateSchoolInfo]=useUpdateSchoolInfoMutation();
 const { data} = useGetProfileQuery(user?.schoolId ?? '');

 console.log(schoolDetails?.data);

 console.log(user?.schoolId);
  
  const[updateProfile]=useUpdateProfileMutation();
    const[editProfile , setEditProfile]=useState(false);
    const[editSchoolInformation , setEditSchoolInformation]=useState(false);

    // formDatas

  const [profileFormData, setProfileFormData] = useState<{
  description: string;
  mission: string;
  vision: string;
  foundedYear: string;
  profilePhoto: File | null;
}>({
  description:'',
  mission: '',
  vision: '',
  foundedYear: '',
  profilePhoto: null,
});

  // Handle inputs
const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const target = e.target;

  if (target.type === 'file') {
    const input = target as HTMLInputElement;
    const files = input.files;

    if (files && files.length > 0) {
      setProfileFormData((prev) => ({
        ...prev,
        profilePhoto: files[0], // store the File object
      }));
    }
  } else {
    setProfileFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  }
};


  // Open edit modal
  const editProfileForm = () => {
    setEditProfile(true);
  };

  // Submit form
  const handleEditingProfile = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create FormData to send to backend
    const form = new FormData();
    form.append('description', profileFormData.description);
    form.append('mission', profileFormData.mission);
    form.append('vision', profileFormData.vision);
    form.append('foundedYear', profileFormData.foundedYear);
    if (profileFormData.profilePhoto) {
      form.append('profilePhoto', profileFormData.profilePhoto);
    }

// For debugging: convert FormData to object
//  const profiles: Record<string, string | File> = {};
// form.forEach((value, key) => {
//   profiles[key] = value as string | File;
// });
//console.log('Submitting object:', profiles);

try {
  await updateProfile({ id: user?.schoolId || '', data: form }).unwrap();
    setEditProfile(false);
    //refetch();
} catch (error) {
  console.log('error occured', error);
}

  };


  // information logics

   // Input handler (receives event)
const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, files } = e.target;

  if (type === 'file' && files) {
    setSchoolInfo((prev) => ({
      ...prev,
      [name]: files[0], // store the uploaded file object
    }));
  } else {
    setSchoolInfo((prev) => ({
      ...prev,
      [name]: value, // update text/email/number inputs
    }));
  }
};


// Select handler ()
const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>)=> {
  const { name, value } = e.target;
  setSchoolInfo((prev) => ({ ...prev, [name]: value }));
};

  const[schoolInfo , setSchoolInfo]=useState<SchoolInformation>({
  schoolName:schoolDetails?.data.schoolName || '',
  schoolCode:schoolDetails?.data.schoolCode || '',
  schoolLevel:schoolDetails?.data.schoolLevel || '',
  schoolCategory:schoolDetails?.data.schoolCategory || '',
  schoolType: schoolDetails?.data.schoolType || '',
  province:schoolDetails?.data.province || '',
  district:schoolDetails?.data.district || '',
  sector:schoolDetails?.data.sector || '',
  cell:schoolDetails?.data.cell || '',
  village: schoolDetails?.data.village || '',
  email: schoolDetails?.data.email || '',
  telephone: schoolDetails?.data.telephone || '',
  licenseDocument:null,
  });

  const handleInformation =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try {
      const payload ={
        schoolName:schoolInfo.schoolName,
        schoolCode:schoolInfo.schoolCode,
        schoolLevel:schoolInfo.schoolLevel,
        email:schoolInfo.email,
        schoolCategory:schoolInfo.schoolCategory,
        schoolType:schoolInfo.schoolType,
        province:schoolInfo.province,
        telephone:schoolInfo.telephone,
        district:schoolInfo.district,
        sector:schoolInfo.sector,
        cell:schoolInfo.cell,
        village:schoolInfo.village,
        licenseDocument:schoolInfo.licenseDocument,

      };
      await updateSchoolInfo({data:payload , id:user?.schoolId ?? ''}).unwrap();
      console.log('submitted data are ', payload);
      setEditSchoolInformation(false);
    } catch (error) {
      console.log('error is', error);
    }

  };

  return (
    <>
    <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] pl-[40px]'>
        <div className=' pr-5 py-4'>
        <h1 className=' font-family-playfair text-[27px] text-primary-color font-semibold'>School Profile</h1>
        <h3 className='text-gray-500 py-3 font-family-poppins'>Manage your school's information and profile details</h3>    
        </div>

        <div className='bg-white rounded-lg shadow-xl p-3 mr-5 py-3 mt-4 mb-9'>
           {data?.data.profiles.map((profile)=>(

            <div key={profile.id}>
           <div className='flex justify-center items-center py-5'>
              <div className='relative '>
               <img src={profile.profilePhoto?profile.profilePhoto:'/images/school.png'} alt="" className='rounded-[50%] h-[150px] w-[150px]' />
               <div className='absolute left-16 top-33 cursor-pointer text-white px-1 py-1 bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] rounded-[50%] text-2xl'> <CiCamera/> </div>
              </div>
           </div>
          
              
            <div>
              <div >
                 <h1 className='text-primary-color font-semibold text-center py-2 font-family-playfair text-[23px]'>{schoolDetails?.data.schoolName ?schoolDetails.data.schoolName :'School Name Not Specified'} <h2>Year : {profile.foundedYear}</h2> </h1>

                 
              </div>
               
                <div className='flex justify-center py-2'>
                <EditProfileButton label='Edit Profile' onClick={editProfileForm}/>
                </div>
                
            </div>

            <div className='px-7'>
                <div className=' pt-12 '>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>About</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>{profile.description}</h3>
                  <div className='border-b border-gray-500'></div>
                </div>

                 <div className=' pt-3'>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>Mission</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>{profile.mission}</h3>
                </div>

                  <div className=' pt-3 pb-4'>
                  <h2 className='text-primary-color font-bold text-[17px] py-2'>Vision</h2>
                  <h3 className='text-gray-500 text-[16px] font-medium pb-4'>{profile.vision}</h3>
                </div>
               
            </div>

            </div>
            
           ))}
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
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.schoolName ?schoolDetails.data.schoolName :'Not Specified'}</h3>
                        </div>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Category</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.schoolCategory ?schoolDetails.data.schoolCategory :'Not Specified'}</h3>
                        </div>

                         <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Type</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.schoolType ?schoolDetails.data.schoolType :'Not Specified'}</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>School Code</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.schoolCode ?schoolDetails.data.schoolCode :'Not Specified'}</h3>
                        </div>
                          <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Levels</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.schoolLevel ?schoolDetails.data.schoolLevel :'Not Specified'}</h3>
                        </div>


                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

             <h1 className='text-primary-color font-bold text-[16px] pt-7'>Location Details</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Province</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.province ?schoolDetails.data.province :'Not Specified'}</h3>
                        </div>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Sector</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.sector ?schoolDetails.data.sector :'Not Specified'}</h3>
                        </div>

                         <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Village</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.village ?schoolDetails.data.village :'Not Specified'}</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>District</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.district ?schoolDetails.data.district :'Not Specified'}</h3>
                        </div>
                          <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Cell</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.cell ?schoolDetails.data.cell :'Not Specified'}</h3>
                        </div>


                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

            <h1 className='text-primary-color font-bold text-[16px] pt-7'>Contact Information</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Email</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.email ?schoolDetails.data.email :'Not Specified'}</h3>
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>Telephone Number</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.telephone ?schoolDetails.data.telephone :'Not Specified'}</h3>
                        </div>

                    </div>
                    
            </div>
            <div className='border-b border-gray-200 pt-3'></div>

                 <h1 className='text-primary-color font-bold text-[16px] pt-7'>Legal Documents</h1>
                <div className='flex gap-[50%] pr-4'>
                    <div className='py-3'>
                        <div className='pt-2'>
                            <h1 className='text-gray-400 font-semibold text-[14px]'>License Document</h1>
                            <h3 className='font-semibold text-[16px]'>{schoolDetails?.data.licenseDocument ?schoolDetails.data.licenseDocument :'Not Specified'}</h3>
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
        <form onSubmit={handleEditingProfile} >
          <SchoolDescriptionTextarea label='Description' name='description' value={profileFormData.description} onChange={handleProfileChange}/>
          <SchoolDescriptionTextarea label='Mission' placeholder='Enter Mission Statement' value={profileFormData.mission} name='mission' onChange={handleProfileChange}/>
          <SchoolDescriptionTextarea label='Vision' placeholder='Enter Vision Statement' value={profileFormData.vision} name='vision' onChange={handleProfileChange}/>
          <TextInput label='Founded Year ' type='number' value={profileFormData.foundedYear} placeholder='founded year' name='foundedYear' onChange={handleProfileChange}/>
          <TextInput label='Profile picture ' type='file' placeholder='Enter image Url' name='ProfilePhoto' onChange={handleProfileChange}/>
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
         <h1 className='text-primary-color font-bold font-family-playfair py-2 text-[23px]'>Update School Information</h1>
         <h3 className='text-gray-500 font-medium text-[16px]'>Edit Your School Basic information , location and Contact information </h3>
        </div>
       
         <IoClose className='text-2xl cursor-pointer hover:text-red-600' onClick={()=>setEditSchoolInformation(false)}/>
       </div>

       <div>
        <form onSubmit={handleInformation}>
         <div>
           <h2 className='text-primary-color font-bold font-family-playfair text-[17px]' >Basic Information</h2>
         </div>
           <div className='pt-3 flex gap-[30px]'>
            <TextInput label='School Name' placeholder='Enter School Name' name='schoolName' value={schoolInfo.schoolName} onChange={handleInfoChange}/>
            <TextInput label='School Code' placeholder='Enter School Code' onChange={handleInfoChange} name='schoolCode' value={schoolInfo.schoolCode}/>
           </div>

           <div className='pt-3 flex gap-[30px]'>
             <SelectInput options={categ} label='Category' onChange={handleSelectChange} name='schoolCategory' value={schoolInfo.schoolCategory}/>
             <SelectInput options={Levels} label='Level' name='schoolLevel' value={schoolInfo.schoolLevel} onChange={handleSelectChange}/>
           </div>

           <div className='pt-3'>
             <SelectInput options={schoolType} label='Type' placeholder='e.g., mixed' name='schoolType' value={schoolInfo.schoolType} onChange={handleSelectChange}/>
           </div>

           <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Location Details</h1></div>

            <div className='pt-3 flex gap-[30px]'>
              <SelectInput options={Provinces} label='provinces' name='province' value={schoolInfo.province} onChange={handleSelectChange}/>
              <SelectInput options={districts} label='district' name='district' value={schoolInfo.district} onChange={handleSelectChange}/>
           </div>

           <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Sector' placeholder='Enter Sector' name='sector' value={schoolInfo.sector} onChange={handleInfoChange}/>
            <TextInput label='Cell' placeholder='Enter Cell' name='cell' value={schoolInfo.cell} onChange={handleInfoChange}/>
           </div>

          <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Village' placeholder='Enter Village' value={schoolInfo.village} name='village' onChange={handleInfoChange}/>
          </div>

          <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Contact Information</h1></div>

         <div className='pt-3 flex gap-[30px]'>
            <TextInput label='Email' placeholder='example@gmail.com' type='email' name='email' value={schoolInfo.email} onChange={handleInfoChange}/>
            <TextInput label='Phone Number' placeholder='+2507888876' name='telephone' value={schoolInfo.telephone} onChange={handleInfoChange}/>
        </div>

          <div className='py-5'><h1 className='text-primary-color font-bold font-family-playfair text-[17px]'>Documents</h1></div>

         <div className='pt-3 flex gap-[30px]'>
            <TextInput label='License Document Url' placeholder='license Url' type='file' name='licenseDocumentUrl'/>   
        </div>

        <div className='flex justify-end mr-8'>
            <EditProfileButton label='Save Information' type='submit'/>
        </div>
        </form>
       </div> 
    </div>
  </div>
)}


</>
  );
}
