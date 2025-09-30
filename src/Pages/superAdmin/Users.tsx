import { useState } from 'react';
import { FiPlus as Plus, FiSearch as Search, FiEdit as Edit, FiX as X } from 'react-icons/fi';

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const users = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Principal',
      email: 'john.smith@springfield-elem.edu',
      school: 'Springfield Elementary School',
      status: 'Active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Admission Manager',
      email: 'sarah.j@riverside-high.edu',
      school: 'Riverside High School',
      status: 'Active',
      lastLogin: '2024-01-14',
    },
    {
      id: 3,
      name: 'Mike Davis',
      role: 'Admin',
      email: 'uwingajoselyne@gmail.com',
      school: 'Oakwood Middle School',
      status: 'Inactive',
      lastLogin: '2024-01-10',
    },
    {
      id: 4,
      name: 'Lisa Wilson',
      role: 'Principal',
      email: 'lisa.wilson@mountainview.edu',
      school: 'Mountain View Academy',
      status: 'Active',
      lastLogin: '2024-01-15',
    },
  ];

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            User Profiles
          </h1>
          <p className="text-gray-600">
            Manage school administrators and their access permissions
          </p>
        </div>
        <button className="bg-[#F09C00]  text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Admin
        </button>
      </div>

      <div className=" p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search admins, emails, or schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>All Roles</option>
            <option>Principal</option>
            <option>Admission Manager</option>
            <option>Admin</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="">
            <table className="">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned School
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'Principal'
                            ? 'bg-[#F09C00] text-white'
                            : user.role === 'Admission Manager'
                            ? 'bg-primary-color text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.school}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active'
                            ? 'bg-[#F09C00] text-white'
                            : 'bg-primary-color text-white'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.lastLogin}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                        {user.status === 'Active' ? (
                          <button className="bg-[#EF4343] hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium flex items-center">
                            <X className="w-3 h-3 mr-1" />
                            Deactivate
                          </button>
                        ) : (
                          <button className="bg-[#F09C00]  text-white px-3 py-1 rounded text-xs font-medium">
                            Activate
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}
