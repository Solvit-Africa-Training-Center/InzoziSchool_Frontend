import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { LuUsers } from 'react-icons/lu';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

type customSchool = {
  images: string;
  category: string;
  title: string;
  location: string;
  seats: number;
  rating: number;
};

export default function SchoolCard({
  images,
  rating,
  category,
  title,
  location,
  seats,
}: customSchool) {
  const navigate = useNavigate();
  return (
    <div className="w-full cursor-pointer transform hover:scale-101 duration-200 rounded-lg  bg-gradient-to-r from-[#FFFFFF] to-[#F9FAFB] ">
      <div className="relative w-full flex justify-center items-center h-[225px] bg-gradient-to-r from-[#05416B] to-[#0867AA]">
        <h1 className="font-bold text-[48px] text-[#FAFAFA] font-family-playfair">{images}</h1>
        <h1 className="absolute top-3 right-3 bg-white px-3 rounded-2xl text-[12px] text-[#05416B] font-semibold">
          {category}
        </h1>
      </div>

      <div className="flex justify-between px-3 items-center pt-5">
        <h1 className="font-bold text-[20px] font-family-playfair">{title}</h1>
        <div className="flex gap-1 bg-red-50 rounded-2xl px-2 justify-center items-center">
          <FaStar className="text-[#F09C00] pt-1 font-family-poppins" /> <h1>{rating}</h1>
        </div>
      </div>
      <div className="flex gap-3 text-[#6B7280] text-[14px] px-3 py-4">
        <SlLocationPin className="pt-1 text-xl font-family-poppins" /> <h1>{location}</h1>
      </div>
      <div className="flex gap-3 px-3 py-4">
        <LuUsers className="text-[#6B7280]" />
        <h1>
          <span className="text-[#f09c00] text-[14px] font-medium font-family-poppins">
            {seats} seats available
          </span>
        </h1>
        
      </div>

      <div className="text-[#282C34] font-semibold text-[10px] pl-1 flex gap-8 pb-[20px]">
        <h2 className="px-6 py-1 cursor-pointer border border-[#f09c00] rounded-2xl font-family-poppins">Hostels</h2>
        <h2 className="px-2 py-1 cursor-pointer border border-[#f09c00] rounded-2xl font-family-poppins">ComputerLab</h2>
        <h2 className="px-2 py-1 cursor-pointer border border-[#f09c00] rounded-2xl font-family-poppins">
          Playgrounds
        </h2>
       
        <br />
      </div>
 <div className='border-t border-gray-200 mx-3'></div>
  {/* Right: Actions */}
 <div className="flex justify-center gap-5 py-8">
  <Button label="Apply" variant="thirdly" onClick={()=>{navigate('/apply');}}/>
  <Button label="View Details" variant="secondary" onClick={()=>{navigate('/viewSchool');}} />
</div>



    </div>
  );
}
