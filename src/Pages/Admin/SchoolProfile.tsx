import React from 'react';
import { CiCamera } from 'react-icons/ci';
import { LuUsers } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';

export default function SchoolProfile() {
  return (
    <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]'>
        <div className='flex justify-between pr-5 py-4'>
            <h1 className='font-bold font-family-poppins text-[24px] text-black'>School Profile</h1>
            <button className='border flex justify-center gap-2 items-center border-none text-[12px] bg-[#F09C00] px-3 cursor-pointer text-white rounded-sm'> <MdModeEdit/> <p>Edit Profile</p></button>
        </div>
        <div className='flex gap-3'>
            <div>
                <div className='border border-gray-200 w-[290px] px-4 bg-white rounded-md'>
                    
                    <div className='flex py-2'>
                   <CiCamera className='text-[20px] pt-1'/>
                   <h2 className='font-bold text-[17px] text-black px-4'>School Photo</h2>
                    </div>
                    <div className='pl-[12px] py-[16px] flex justify-center'><img className='rounded-[50%] w-[120px] h-[120px]' src="/images/school.png" alt="" /></div>
                    
                   
                </div>

                <div className='my-[20px] border border-gray-200 w-[290px] bg-white rounded-md'>
                    <div className='flex gap-2 py-4 px-4'>
                        <LuUsers/>
                        <h1 className='font-bold font-family-poppins text-[16px] text-black'>Quick Stats</h1>
                    </div>
                     <div>
                            <div className='flex justify-between px-4 py-2'>
                                <p className='text-gray-400 text-[13px]'>Established:</p>
                                <h1 className='text-black font-semibold'>2015</h1>
                            </div>

                            <div className='flex justify-between px-4 py-2 '>
                                <p className='text-gray-400 text-[13px]'>Students:</p>
                                <h1 className='text-black font-semibold'>1,256</h1>
                            </div>
                            <div className='flex justify-between px-4 py-2 '>
                                <p className='text-gray-400 text-[13px]'>Teachers:</p>
                                <h1 className='text-black font-semibold'>30</h1>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div className='w-[645px] px-4 border border-gray-200 bg-white pb-4 mb-4 rounded-md'>
                     <h1 className='py-3 font-bold font-family-poppins text-[16px]'>Basic Information</h1>
                     <p className='text-[12px] py-3 text-gray-600 font-bold font-family-poppins'>School Name:</p>
                     <h1 className='py-3 font-bold font-family-poppins text-[13px]'>Hope International School</h1>
                     <div className='flex gap-2 py-2'>
                        <IoLocationOutline className='text-xl pt-0'/>
                        <h3 className='font-family-poppins text-[13px]'>Location</h3>
                     </div>

                     <h2 className='text-[#6B7280] text-14px py-3' >Eastern, Bugesera, Ntarama, Kanzenze, Karumuna</h2>

                     <h1 className='text-[14px] font-semibold font-family-poppins py-3'>Mission Statement</h1>

                     <p className='text-[#6B7280] text-[13px] font-family-poppins pb-3'>
                        A premier educational institution committed to excellence in learning and <br />
character development. We provide a nurturing environment where students can <br />
grow academically, socially, and personally.
                     </p>

                     <h1 className='text-[14px] font-semibold font-family-poppins pb-3'>Vision</h1>
                                <p className='text-[#6B7280] text-[13px] font-family-poppins pb-3'>
                                    A premier educational institution committed to excellence in learning and <br />
character development. We provide a nurturing environment where students can <br />
grow academically, socially, and personally.
                                </p>

                </div>

                <div className='w-[645px] px-4 border border-gray-200 bg-white pb-4 mb-4 rounded-md'>
                   <h1 className='font-bold py-3 text-[17px] font-family-poppins'>School Facilities</h1>
                </div>  

            </div>
        </div>
    </div>
  );
}
