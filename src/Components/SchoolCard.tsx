import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { LuUsers } from 'react-icons/lu';
import { LuCircleCheckBig } from 'react-icons/lu';
import { RiEyeLine } from 'react-icons/ri';
import Button from './Button';
 type customSchool={
    images:string;
    category:string;
    title:string;
    location:string;
    seats:number;
    schoolfees:number;
    rating:number;
 }

 
 export default function SchoolCard({images ,rating ,category,title , location , seats , schoolfees}:customSchool) {
   return (

     <div className='w-[430px] border'>
         <div className='relative w-[430px] flex justify-center items-center h-[225px] bg-gradient-to-r from-[#05416B] to-[#0867AA]'>
            <h1 className='font-bold text-[48px] text-[#FAFAFA]'>{images}</h1>
            <h1 className='absolute top-3 right-3 bg-white px-3 rounded-2xl text-[12px] text-[#05416B] font-semibold'>{category}</h1>
         </div>

         <div className='flex justify-between px-3 items-center pt-5'>
            <h1 className='font-bold text-[20px]'>{title}</h1>
            <div className='flex gap-1 bg-red-50 rounded-2xl px-2 justify-center items-center'><FaStar className='text-[#F09C00] pt-1'/> <h1>{rating}</h1></div>
         </div>
         <div className='flex gap-3 text-[#6B7280] text-[14px] px-3 py-4'><SlLocationPin className='pt-1 text-xl'/> <h1>{location}</h1></div>
         <div className='flex gap-3 px-3 py-4'><LuUsers className='text-[#6B7280]'/> <h1><span className='text-[#157F3C] text-[14px] font-medium'>{seats} seats available</span></h1> <LuCircleCheckBig className=' text-xl text-[#157F3C] '/> </div>

         <div className='text-[#282C34] font-semibold text-[12px] flex gap-4'>
            <h2 className='px-2 border border-red-50 rounded-2xl'>library</h2>
            <h2 className='px-2 border border-red-50 rounded-2xl'>ComputerLab</h2>
            <h2 className='px-2 border border-red-50 rounded-2xl'>Sport Ground</h2> <div>
                <h2 className='px-2 border border-red-50 rounded-2xl'>+2 more</h2></div> <br />
            
         </div>

         <div className='px-3 flex justify-between border-t-1 mt-2'>
            <div className='pt-3'>
                <h3 className='text-[#6B7280] text-[14px] py-3'>From</h3>
                <h3 className='text-[18px] text-[#F09C00] font-bold py-3'>RWF</h3>
                <h3 className='text-[18px] text-[#F09C00] font-bold py-3'>{schoolfees}/term</h3>
            </div>
            <div className='flex mt-[45px]'>
                <div><RiEyeLine className='text-3xl pt-4'/></div>
                <Button label="Preview" variant="thirdly" />
                <Button label="View Detail" variant="secondary" />
            </div>
         </div>


     </div>
   );
 }
 