
import Select from './Select';
import Button from './Button';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
export default function Hero() {
   const option1 = [
  { value: 'Kicukiro', label: 'Kicukiro' },
];

   const option2 = [
  { value: 'Secondary', label: 'Secondary' },
];

   const option3 = [
  { value: 'mixed', label: 'mixed' },
];

  return (
    <div className="relative w-full h-screen bg-[#C8C1AD] overflow-hidden pt-[30px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/HeroSection.mp4" type="video/mp4" />
      </video>

     <div className="absolute inset-0 bg-[#054069]/80"></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
         
        <h1 className="font-medium text-5xl pt-[60px]  font-family-playfair max-sm:text-2xl ">
          Bridging <span className='text-[#F09C00]'>Schools</span> and Parents <br />
          <span className="text-4xl font-light">Seamlessly</span>
        </h1>

        <h2 className="pt-11 font-normal text-[17px] max-w-3xl font-family-poppins">
          Connecting families with quality private schools across <br /> <span className='flex justify-center'>Rwanda.</span> 
         <span className='text-[#F09C00]'>Discover, compare, and apply with confidence.</span>
        </h2>
       
      <div className="bg-white/40 pt-4 rounded-xl mt-4 max-sm:hidden">
  <h1 className="text-black font-semibold text-2xl py-1 font-family-playfair">Start your Search</h1>
  <p className="text-[#6B7280] font-family-poppins">Find schools that match your preferences</p>

  <div>
    <form className="flex gap-2 justify-center px-6 py-7">
      <Select options={option1} variant='primary' />
      <Select options={option2} variant='primary' />
      <Select options={option3} variant='primary'/>
      <div className="px-3 flex bg-gradient-to-r cursor-pointer from-[#F09C00] to-[#FFB833] rounded-xl">
        <CiSearch className="pt-2 text-3xl"/>
        <Button label="Search School" variant="primary"/>
      </div>
    </form>
  </div>
</div>
    <div className='flex justify-center gap-3 pt-[100px] pb-[30px]'>
     <Button label='Apply For Child' variant='applychild'/>
     <Link to="/register"><Button label='Register School' variant='registerschool'/></Link>
     
  </div>


      </div>

      </div>

  );
}
