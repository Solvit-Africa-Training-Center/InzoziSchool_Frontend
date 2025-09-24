import { FiArrowLeft as ArrowLeft } from 'react-icons/fi';
export default function ViewSchoolInfo() {
      const schoolData = {
    schoolName: 'Springfield Elementary School',
    district: 'Springfield District',
    schoolCode: 'SPR-ELM-001',
    schoolEmail: 'admin@springfield-elem.edu',
    schoolLicense: 'EDU-LIC-2024-001',
    status: 'Pending',
  };
    return(
        <div className="min-h-screen bg-gray-100">
      
    

      <div className="flex">
      

        <div className="flex-1 p-6">
          
          <div className="mb-6">
            <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Schools
            </button>
            
            <div>
              <h1 className="text-2xl font-bold text-[#282C34] mb-2">School Information</h1>
              <p className="text-gray-600">View and manage school details</p>
            </div>
          </div>

          <div className=" p-6">
            <div className="grid grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">School Name</label>
                  <p className="text-gray-900 font-medium">{schoolData.schoolName}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">District</label>
                  <p className="text-gray-900">{schoolData.district}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">School License (Certification)</label>
                  <p className="text-gray-900">{schoolData.schoolLicense}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">School Code</label>
                  <p className="text-gray-900 font-medium">{schoolData.schoolCode}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">School Email</label>
                  <p className="text-gray-900">{schoolData.schoolEmail}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Status</label>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-color text-white">
                    {schoolData.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button className="bg-[#F09C00] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Approve
              </button>
              <button className="bg-[#EF4343] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}