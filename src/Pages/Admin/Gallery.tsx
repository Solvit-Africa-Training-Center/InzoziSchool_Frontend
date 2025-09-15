
import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

export default function Gallery() {
    const[open , setOpen]=useState(false);

    const handleButton =()=>{
         setOpen(!open);
    };
  return (
    <>
    <div>
        <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]'>
             <div className='flex justify-between pr-5 py-4'>
                        <h1 className='font-bold font-family-poppins text-[24px] text-black'>Gallery</h1>
                        <button onClick={handleButton} className='border flex justify-center gap-2 items-center border-none text-[12px] bg-[#F09C00] px-3 cursor-pointer text-white rounded-sm'> <IoIosAdd/> <p> gallery</p></button>
             </div>
        </div>
    </div>
  {open &&(
 <div className='bg-white w-[500px] rounded-md flex justify-center items-center'>
        <div>
          <form action="">
             <input type="" placeholder='enter nme' />
          </form>
        </div>
        
    </div>
 
  )}
      </>
  );
}
