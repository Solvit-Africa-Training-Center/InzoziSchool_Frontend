
import Navigation from './Navigation';
import { IoBookOutline } from 'react-icons/io5';
import { BsStars } from 'react-icons/bs';
import Select from './Select';
import Button from './Button';
import { CiSearch } from 'react-icons/ci';
export default function Hero() {
   const option1 = [
  { value: 'Kicukiro', label: 'Kicukiro' },
];

   const option2 = [
  { value: 'Primary', label: 'Primary' },
];

   const option3 = [
  { value: 'mixed', label: 'mixed' },
];

  return (
    <div className="relative w-full h-screen bg-[#C8C1AD] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/HeroSection.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-blue-950/30">
        <Navigation />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
         
         <div className='w-[204px] h-[36px] border-none relative rounded-3xl bg-[#7794A9] '>
          <div className=' flex justify-center items-center gap-2 cursor-pointer'>
            <BsStars className='text-[#F09C00] pt-2 text-[25px]'/> 
            <h1 className='text-white text-[14px] font-medium pt-1'>Discover Your Future</h1>
          </div>

          <div className='absolute top-9 right-3 pb-4 '><IoBookOutline className='text-[#F09C00]  text-xl'/></div>

         </div>
        <h1 className="font-medium text-5xl pt-4 ">
          Find The <span className='text-[#F09C00]'>Perfect</span> School <br />
          <span className="text-4xl font-light">For Your Child</span>
        </h1>

        <h2 className="pt-11 font-normal text-[17px] max-w-3xl">
          Connecting families with quality private schools across <br /> <span className='flex justify-center'>Rwanda.</span> 
         <span className='text-[#F09C00]'>Discover, compare, and apply with confidence.</span>
        </h2>
       
      <div className="bg-white/40 pt-4 rounded-xl mt-4 ">
  <h1 className="text-black font-semibold text-2xl py-1">Start your Search</h1>
  <p className="text-[#6B7280]">Find schools that match your preferences</p>

  <div>
    <form className="flex gap-2 justify-center px-6 py-7">
      <Select options={option1} />
      <Select options={option2} />
      <Select options={option3} />
      <div className="px-3 flex bg-gradient-to-r from-[#F09C00] to-[#FFB833] rounded-xl">
        <CiSearch className="pt-2 text-3xl"/>
        <Button label="Search School" variant="primary"/>
      </div>
    </form>
  </div>
</div>


      </div>

      </div>

  );
}
