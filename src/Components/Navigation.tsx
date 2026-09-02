// import { FaUser } from 'react-icons/fa6';
import logo from '../assets/logo 2.png';
import { CiSearch } from 'react-icons/ci';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type React from 'react';

import Language from './Language';

const classVariant ={
  defoult:'bg-[#0b4d7c]',
  primary:'bg-primary-color',
};

type Navigation={
  variant?:keyof typeof classVariant
};

export default function Navigation({variant='defoult'}:Navigation) {

  const languages =[
     {label:'English' , value:'English'},
     {label:'Kinyarwanda' , value:'kinyarwanda'},
     {label:'French' , value:'French'},
  ];
  const [open, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSelect = (value: string) => {
    setSelectedLanguage(value);
    const selected = languages.find((lang) => lang.value === value);
    console.log('Selected Language:', selected?.label);
  };

  const handleClick = () => {
    setIsOpen(!open);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(searchTerm.trim())}`);
    setIsOpen(false);
  };

  return (
    <>
      <div className={` fixed w-full z-50 px-[50px] flex justify-between py-2  ${classVariant[variant]}  border-none max-sm:hidden`}>
        <Link to='/'>
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
        </Link>

        <form
          onSubmit={handleSearchSubmit}
          className="flex justify-center items-center gap-2 py-4 rounded-xl mt-2 bg-white w-[259px] h-[25px] max-sm:hidden"
        >
          <input
            className=" w-[80%] h-[25px]  px-2 focus:outline-none text-[#6B7280] font-family-poppins text-[13px]"
            placeholder="Search School"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <CiSearch className="text-[#6B7280] text-xl cursor-pointer" />
          </button>
        </form>
        <nav className="flex items-center gap-[32px] text-white max-sm:hidden">
          <Link to='/' className="text-[15px] font-family-poppins">
            Home
          </Link>
          <a className="text-[15px] font-family-poppins" href="#howitWorks">
            How It Works
          </a>
            <Language options={languages} value={selectedLanguage} variant='defoult' onChange={handleSelect} />
        </nav>
        <div className="flex items-center text-white">
         <Link to='/login' className="text-[15px] font-family-poppins">
            Login
          </Link>

         {/* <Link to='/login'> <div className='flex justify-center'>
            <div className='flex justify-center items-center rounded-[50%] bg-[#D9D9D9] w-[40px] h-[40px]'><FaUser className='text-2xl  text-[#605F5F]'/></div>
            <div className='text-[12px] pt-3 pl-1 text-[#605F5F]' >▼</div>
          </div>
          </Link> */}
        </div>
      </div>
   {/* phone responsiveness */}
      <div className={`w-full px-4 py-3 ${classVariant[variant]} text-white sm:hidden`}>
        <div className="flex justify-between items-center">
          <Link to='/' onClick={() => setIsOpen(false)}>
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">
                <img className="w-[50px]" src={logo} />
              </div>
              <div className="flex flex-col gap-0">
                <h1 className="m-0 font-bold text-[18px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent">
                  inzozI
                </h1>
                <span className="m-0 text-[8px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent font-semibold">
                  Smart Dreams. Bright Futures
                </span>
              </div>
            </div>
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={handleClick}
            className="cursor-pointer"
          >
            {open ? (
              <IoClose className='text-4xl' />
            ) : (
              <IoMdMenu className='text-4xl' />
            )}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-4 pt-4">
            <form onSubmit={handleSearchSubmit} className="flex justify-center items-center gap-2 py-1 rounded-xl bg-white w-full h-[36px]">
              <input
                className="w-[85%] h-full px-2 focus:outline-none text-[#6B7280] font-family-poppins text-[13px]"
                placeholder="Search School"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" aria-label="Search">
                <CiSearch className="text-[#6B7280] text-xl cursor-pointer" />
              </button>
            </form>

            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-family-poppins px-2 py-2 rounded-lg hover:bg-white/10"
              >
                Home
              </Link>
              <a
                href="#howitWorks"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-family-poppins px-2 py-2 rounded-lg hover:bg-white/10"
              >
                How It Works
              </a>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-family-poppins px-2 py-2 rounded-lg hover:bg-white/10"
              >
                Login
              </Link>
            </nav>

            <div className="pb-2">
              <Language options={languages} variant='primary' value={selectedLanguage} onChange={handleSelect} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
