import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../assets/logo 2.png';
import { CiSearch } from 'react-icons/ci';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
// import { FiUser } from 'react-icons/fi';

export default function Navigation() {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!open);
  };
  return (
    <>
      <div className="px-[50px] flex justify-between py-2 bg-[#0b4d7c] border-none max-sm:hidden">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">
            <img className="w-[70px]" src={logo} />
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="m-0 font-bold text-[25px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent max-sm:text-[18px]">
              inzozI
            </h1>
            <span className="m-0 text-[11px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent font-semibold max-sm:text-[8px]">
              Smart Dreams. Bright Futures
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 py-4 rounded-xl mt-2 bg-white w-[259px] h-[25px] max-sm:hidden">
          <input
            className=" w-[80%] h-[25px]  px-2 focus:outline-none text-[#6B7280] font-family-poppins text-[13px]"
            placeholder="Search School"
          />
          <CiSearch className="text-[#6B7280] text-xl cursor-pointer" />
        </div>
        <nav className="flex items-center gap-[32px] text-white max-sm:hidden">
          <a className="text-[15px] font-family-poppins" href="#">
            Home
          </a>
          <a className="text-[15px] font-family-poppins" href="#">
            How It Works
          </a>
          <div className="flex items-center gap-1">
            <span className="text-[16px] font-family-poppins">English</span>
            <IoMdArrowDropdown className="text-xl" />
          </div>
        </nav>
        <div className="flex items-center text-white">
          <a className="text-[15px] font-family-poppins" href="#">
            Login
          </a>
        </div>
      </div>
   {/* phone responsiveness */}
      <div className=" px-4 py-3 bg-[#0b4d7c] text-white text-3xl  max-sm:block max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              {' '}
              {open ? (
                <IoClose className='pt-1 text-4xl' onClick={handleClick} />
              ) : (
                <IoMdMenu className='pt-1 text-4xl' onClick={handleClick} />
              )}
            </div>

            <div>
              <div className="flex items-center">
                <div className="text-white font-bold text-xl">
                  <img className="w-[70px]" src={logo} />
                </div>
                <div className="flex flex-col gap-0">
                  <h1 className="m-0 font-bold text-[25px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent max-sm:text-[18px]">
                    inzozI
                  </h1>
                  <span className="m-0 text-[11px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent font-semibold max-sm:text-[8px]">
                    Smart Dreams. Bright Futures
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[16px] font-family-poppins">English</span>
            <IoMdArrowDropdown className="text-xl " />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-2 py-4 rounded-xl mt-2 bg-white w-[269px] h-[25px] ">
            <input
              className=" w-[80%] h-[25px]  px-2 focus:outline-none text-[#6B7280] font-family-poppins text-[13px]"
              placeholder="Search School"
            />
            <CiSearch className="text-[#6B7280] text-xl cursor-pointer" />
          </div>
        </div>
      </div>
<div className="max-sm:block max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden">
  {open && (
    <div className="flex flex-col gap-3  h-[100vh]">
      <a className="text-[15px] pt-3 font-family-poppins px-4 py-2 hover:bg-[#0b4d7c] hover:text-white " href="#">
        Home
      </a>
      <a className="text-[15px] font-family-poppins px-4 py-2 hover:bg-[#0b4d7c] hover:text-white" href="#">
        How It Works
      </a>
      <a className="text-[15px] font-family-poppins px-4 py-2 hover:bg-[#0b4d7c] hover:text-white" href="#">
        Login
      </a>
    </div>
  )}
</div>
      
    </>
  );
}
