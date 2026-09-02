import type React from 'react';
import Select from './Select';
import Button from './Button';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { districts } from '../Types/district';
import { Levels, schoolType } from '../Types/Seats';
import type { SchoolFilters } from '../Types/SchoolFilters';

const districtOptions = [
  { value: '', label: 'All Districts' },
  ...districts.filter((d) => d.value !== '------'),
];

const levelOptions = [{ value: '', label: 'All Levels' }, ...Levels];
const typeOptions = [{ value: '', label: 'All Types' }, ...schoolType];

type HeroProps = {
  filters: SchoolFilters;
  onFilterChange: (filters: SchoolFilters) => void;
  onSearch: () => void;
};

export default function Hero({ filters, onFilterChange, onSearch }: HeroProps) {
  const handleChange = (key: keyof SchoolFilters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

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

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white overflow-y-auto py-6">

        <h1 className="font-medium text-5xl pt-[60px]  font-family-playfair max-sm:text-2xl ">
          Bridging <span className='text-[#F09C00]'>Schools</span> and Parents <br />
          <span className="text-4xl font-light">Seamlessly</span>
        </h1>

        <h2 className="pt-11 font-normal text-[17px] max-w-3xl font-family-poppins max-sm:pt-6 max-sm:px-4">
          Connecting families with quality private schools across <br /> <span className='flex justify-center'>Rwanda.</span>
         <span className='text-[#F09C00]'>Discover, compare, and apply with confidence.</span>
        </h2>

      <div className="bg-white/40 pt-4 rounded-xl mt-4 mx-4 max-sm:mx-2">
  <h1 className="text-black font-semibold text-2xl py-1 font-family-playfair">Start your Search</h1>
  <p className="text-[#6B7280] font-family-poppins">Find schools that match your preferences</p>

  <div>
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 justify-center items-start px-6 py-7 max-sm:px-3">
      <input
        type="text"
        value={filters.keyword}
        onChange={(e) => handleChange('keyword', e.target.value)}
        placeholder="Search by school name"
        className="w-[230px] max-sm:w-full rounded-lg px-3 py-2 text-gray-700 mb-2 bg-white focus:outline-none font-family-poppins"
      />
      <Select
        options={districtOptions}
        variant="primary"
        className="max-sm:w-full"
        value={filters.district}
        onChange={(value) => handleChange('district', value)}
      />
      <Select
        options={levelOptions}
        variant="primary"
        className="max-sm:w-full"
        value={filters.level}
        onChange={(value) => handleChange('level', value)}
      />
      <Select
        options={typeOptions}
        variant="primary"
        className="max-sm:w-full"
        value={filters.type}
        onChange={(value) => handleChange('type', value)}
      />
      <div className="px-3 flex bg-gradient-to-r cursor-pointer from-[#F09C00] to-[#FFB833] rounded-xl max-sm:w-full max-sm:justify-center">
        <CiSearch className="pt-2 text-3xl"/>
        <Button label="Search School" variant="primary" type="submit"/>
      </div>
    </form>
  </div>
</div>
    <div className='flex justify-center gap-3 pt-[60px] pb-[30px] max-sm:pt-[35px]'>
     <Button label='Apply For Child' variant='applychild'/>
     <Link to="/register"><Button label='Register School' variant='registerschool'/></Link>

  </div>


      </div>

      </div>

  );
}
