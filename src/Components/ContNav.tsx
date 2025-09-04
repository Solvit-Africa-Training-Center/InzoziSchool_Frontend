import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import profile from '../assets/profile.png';

import Language from './Language';

const classVariant = {
  defoult: 'bg-[#0b4d7c]',
  primary: 'bg-primary-color',
};

type Navigation = {
  variant?: keyof typeof classVariant;
};

export default function ContNav({ variant = 'defoult' }: Navigation) {
  const languages = [
    { label: 'English', value: 'English' },
    { label: 'Kinyarwanda', value: 'kinyarwanda' },
    { label: 'French', value: 'French' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSelect = (value: string) => {
    setSelectedLanguage(value);
    const selected = languages.find((lang) => lang.value === value);
    console.log('Selected Language:', selected?.label);
  };
  return (
    <div
      className={`px-[50px] flex justify-between py-2  ${classVariant[variant]}  border-none max-sm:hidden`}
    >
      <div className='flex gap-1 justify-center items-center'>
        <div>
          <IoIosArrowBack className='text-2xl text-white'/>
        </div>
        <h1 className='text-white font-medium text-[16px]'>Back</h1>
      </div>

      <div className="flex gap-[90px]">
        <nav className="flex items-center gap-[32px] text-white max-sm:hidden">
          <Link to="/">
            <a className="text-[15px] font-family-poppins" href="#">
              Home
            </a>
          </Link>
          <a className="text-[15px] font-family-poppins" href="#">
            How It Works
          </a>
          <Language
            options={languages}
            value={selectedLanguage}
            variant="defoult"
            onChange={handleSelect}
          />
        </nav>
        <div className="flex items-center text-white">
          <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-[50%] bg-[#D9D9D9] w-[40px] h-[40px]">
              <img src={profile} className="w-[40px] h-[40px] rounded-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
