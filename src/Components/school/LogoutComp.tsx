import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';

export default function LogoutComp() {
  return (
    <div className='w-[250px] bg-primary-color'>
       
      <div className="flex py-[10px] px-5  rounded-[50%]  w-full h-[20%]">
              <img src={profile} className="w-[40px] h-[40px] rounded-[50%]" />
              <span className='text-white text-[10px] cursor-pointer pt-3 pl-1 transition-transform'>Philemon Ndayishimiye</span>

      </div>

      <div className='flex flex-col gap-2 py-[30px] px-5 font-semibold'>
         <Link to='/setting'>Settings and privacy</Link>
         <a href="">Help</a>
         <a href="">Profiles</a>
         <a href="">Trendings</a>
         <Link to='/'>Sign Out</Link>
      </div>
    </div>
  );
}
