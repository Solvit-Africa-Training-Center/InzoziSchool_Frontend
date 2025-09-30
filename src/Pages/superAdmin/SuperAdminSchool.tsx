
import Table from './Table';
export default function SuperAdminSchool() {
  return (
    <div className='bg-gradient-to-r from-[#ffffff] to-[#CFDCEA]'>
      <h1 className=' pl-[60px] text-[36px] font-family-playfair text-[#282C34] font-bold py-2'>School Profiles</h1>
      <p className='pl-[60px] text-gray-400 text-[14px]  font-family-poppins'>Browse and manage all registered school profiles</p>

      <div className='py-5 pl-[60px] flex gap-[30px]'>
        <input type="text" placeholder='Search School or Location ' className='w-[340px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-1 border border-[#E5E7EB]' />

        <select className='w-[200px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-1 border border-[#E5E7EB]'>
          <option value="All Types">All Types</option>
        </select>

         <select className='w-[240px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-1 border border-[#E5E7EB]'>
          <option value="All Status">All Status</option>
        </select>
      </div>

      <div className="py-4">
         <Table/>
      </div>
    </div>
  );
}
