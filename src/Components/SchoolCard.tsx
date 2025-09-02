import { FaStar } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { LuUsers } from 'react-icons/lu';
import { LuCircleCheckBig } from 'react-icons/lu';
import { RiEyeLine } from 'react-icons/ri';
import Button from './Button';
type customSchool = {
  images: string;
  category: string;
  title: string;
  location: string;
  seats: number;
  schoolfees: number;
  rating: number;
};

export default function SchoolCard({
  images,
  rating,
  category,
  title,
  location,
  seats,
  schoolfees,
}: customSchool) {
  return (
    <div className="w-full border border-[#6B7280]">
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
          <span className="text-[#157F3C] text-[14px] font-medium font-family-poppins">
            {seats} seats available
          </span>
        </h1>
        <LuCircleCheckBig className=" text-xl text-[#157F3C] " />
      </div>

      <div className="text-[#282C34] font-semibold text-[10px] flex gap-4">
        <h2 className="px-2 cursor-pointer border border-red-50 rounded-2xl font-family-poppins">library</h2>
        <h2 className="px-2 cursor-pointer border border-red-50 rounded-2xl font-family-poppins">ComputerLab</h2>
        <h2 className="px-2 cursor-pointer border border-red-50 rounded-2xl font-family-poppins">
          Sport Ground
        </h2>
        <div>
          <h2 className="px-2 border cursor-pointer border-red-50 rounded-2xl font-family-poppins">+2 more</h2>
        </div>
        <br />
      </div>

     <div className="px-3 flex justify-between items-center border-t border-gray-200 mt-4 py-3">
  {/* Left: Fees */}
  <div>
    <h3 className="text-[#6B7280] text-[14px] font-family-poppins">From</h3>
    <h3 className="text-[18px] text-[#F09C00] font-bold font-family-playfair">
      RWF {schoolfees}/term
    </h3>
  </div>

  {/* Right: Actions */}
 <div className="flex items-center gap-2 flex-wrap">
  <RiEyeLine className="text-xl text-[#6B7280]" />
  <Button label="Preview" variant="thirdly" />
  <Button label="View" variant="secondary" />
</div>

</div>

    </div>
  );
}
