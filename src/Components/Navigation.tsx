import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../assets/logo 2.png';

export default function Navigation() {
  return (
    <div className="px-[50px] flex justify-between py-2 bg-[#0b4d7c] border-none">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">
          <img className='w-[70px]' src={logo} />
        </div>
        <div className="flex flex-col gap-0">
          <h1 className="m-0 font-bold text-[25px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent">inzozI</h1>
          <span className="m-0 text-[11px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent font-semibold">Smart Dreams. Bright Futures</span>
        </div>
      </div>
      <nav className="flex items-center gap-[32px] text-white">
        <a className="text-[15px] font-family-poppins" href="#">Home</a>
        <a className="text-[15px] font-family-poppins"href="#">How It Works</a>
        <div className="flex items-center gap-1">
          <span className="text-[16px] font-family-poppins">English</span>
          <IoMdArrowDropdown className="text-xl" />
        </div>
      </nav>
      <div className='flex items-center text-white'>
        <a className="text-[15px] font-family-poppins" href="#">Login</a>
      </div>
    </div>
  );
}