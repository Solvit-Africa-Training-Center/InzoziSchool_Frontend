import React from 'react';
import { CiCamera } from 'react-icons/ci';

export default function SchoolProfile() {
  return (
    <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]'>
        <h1 className='font-bold font-family-poppins text-[27px] text-black'>School Profile</h1>
        <div className='flex '>
            <div>
                <div className='border border-gray-200 w-[315px]'>
                    <div className='flex gap-2'>
                   <CiCamera className='text-[20px] pt-1'/>
                   <h2 className='font-bold text-[17px] text-black'>School Photo</h2>
                    </div>
                    <div className='pl-[12px] pt-[15px]'><img className='rounded-[50%] w-[100px] h-[100px]' src="/images/school.png" alt="" /></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  );
}
