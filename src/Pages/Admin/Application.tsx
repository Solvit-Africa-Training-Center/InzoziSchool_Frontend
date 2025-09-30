
import React, { useState } from 'react';
// import { SelectInput } from '../../Components/seats/SelectInput';
// import { TextInput } from '../../Components/seats/InputSeats';
// import{AllStatus} from '../../Types/Seats';
import { FaEye, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type StatusType = 'Pending' | 'Admitted' | 'Rejected' | 'All';

type Student = {
  name: string;
  gender: string;
  classLevel: string;
  status: StatusType;
  date: string;
};

export default function Application() {
  const navigate=useNavigate();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<StatusType>('All');
   const students:Student[] = [
    {
      name: 'John Doe',
      gender: 'Male',
      classLevel: 'Grade 8',
      status: 'Pending',
      date: '1/15/2024',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      classLevel: 'Grade 9',
      status: 'Admitted',
      date: '1/12/2024',
    },
    {
      name: 'Michael Johnson',
      gender: 'Male',
      classLevel: 'Grade 7',
      status: 'Rejected',
      date: '1/10/2024',
    },
  ];

  const getStatusStyle = (status:StatusType) => {
    switch (status) {
      case 'Pending':
        return 'bg-[#0A355F] text-white'; // dark blue
      case 'Admitted':
        return 'bg-[#FBBF24] text-white'; // amber/yellow
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-black';
    }
  };
  return (
    <div className="bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] px-5">
    <h1 className="text-xl font-bold font-family-playfair pt-5 pb-1">Student Applications</h1>
    <p className="text-[#6B7280] pb-7 font-family-poppins">Manage and review student applications for your school</p>

 <div className="flex gap-3 py-7 ">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by student name or class..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[60%] px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none border-none bg-white text-sm"
      />

      {/* Status Select */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as StatusType)}
        className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none border-none bg-white text-sm"
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Admitted">Admitted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

   <div>
   <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gradient-to-r from-[#E5EBF5] to-[#F7FAFF]">
          <tr className="text-left text-gray-700 text-sm">
            <th className="py-3 px-4">Student Name</th>
            <th className="py-3 px-4">Gender</th>
            <th className="py-3 px-4">Class Level</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Application Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 text-sm text-gray-800"
            >
              <td className="py-3 px-4">{s.name}</td>
              <td className="py-3 px-4">{s.gender}</td>
              <td className="py-3 px-4">{s.classLevel}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    s.status,
                  )}`}
                >
                  {s.status}
                </span>
              </td>
              <td className="py-3 px-4">{s.date}</td>
              <td className="py-3 px-4 flex gap-2">
                <button onClick={()=>{navigate('/schoolAdmin/studentInfo');}} className="flex items-center gap-1 px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <FaEye size={14} />
                  View
                </button>
                <button className="flex items-center gap-1 px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  <FaTrash size={14} />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   </div>
   
  </div>
  );
}
