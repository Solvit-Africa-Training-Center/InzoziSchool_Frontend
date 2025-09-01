import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../assets/logo 2.png';

export default function Navigation() {
  return (
    <div className="px-[50px] flex justify-between  py-2">
    
      <div className="flex items-center ">
        <div className="text-white font-bold text-xl">
            <img className='w-[70px]' src={logo} />
        </div>

    
        <div className="flex flex-col gap-0">
          <h1 className="m-0 font-bold text-[25px] text-white leading-none">inzozI</h1>
          <span className="m-0 text-[11px] text-white leading-none">Smart Dreams. Bright Futures</span>
        </div>
      </div>

     
      <nav className="flex items-center gap-[32px] text-white ">
        <a className="text-[15px]" href="#">Home</a>
        <a className="text-[15px]" href="#">Features</a>
        <a className="text-[15px]" href="#">How It Works</a>
        <a className="text-[15px]" href="#">About Us</a>
        <a className="text-[15px]" href="#">Help</a>

        <div className="flex items-center gap-1">
          <span className="text-[16px]">English</span>
          <IoMdArrowDropdown className="text-xl" />
        </div>
      </nav>

      <div className='flex items-center text-white'>
        <a className="text-[15px]" href="#">Login</a>
      </div>
    </div>
  );
}
