
import Table from './Table';
export default function SuperAdminSchool() {
  return (
    <div>
      <h1 className='font-bold text-[17px] pt-2'>School Management</h1>
      <p className='text-gray-400 text-[12px]'>Manage all schools in the platform</p>

      <div className="py-4">
         <Table/>
      </div>
    </div>
  );
}
