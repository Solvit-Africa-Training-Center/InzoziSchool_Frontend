import { FiArrowLeft as ArrowLeft, FiDownload as Download, FiUser as User, FiUsers as Users, FiPhone as Phone, FiMail as Mail, FiFileText as FileText } from 'react-icons/fi';

export default function StudentInfo() {
      const studentInfo = {
    fullName: 'John Doe',
    dateOfBirth: '5/20/2010',
    studentType: 'Transfer Student',
    applicationDate: '1/15/2024',
    gender: 'Male',
    indexNumber: '2824601',
    classLevel: 'Grade 8',
  };

  const parentInfo = {
    fatherName: 'Robert Doe',
    motherName: 'Mary Doe',
    phone: '+1234567890',
    email: 'robert.doe@email.com',
  };

  const documents = [
    {
      name: 'Previous Report',
      filename: 'john_doe_report.pdf',
      category: 'academic',
    },
    {
      name: 'Photo Passport',
      filename: 'john_doe_photo.jpg',
      category: 'identity',
    },
    {
      name: 'Mutation Letter',
      filename: 'john_doe_mutation.pdf',
      category: 'transfer',
    },
    {
      name: 'Result Slip',
      filename: 'john_doe_photo.jpg',
      category: 'academic',
    },
  ];
return (
    <div className="min-h-screen bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]">
      
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applications
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">John Doe</h1>
              <p className="text-sm text-gray-500">Application #1</p>
            </div>
          </div>
          <div className="bg-primary-color text-white px-3 py-1 rounded-full text-sm font-medium">
            Pending
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold text-[#282C34]">Student Information</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <p className="font-medium text-gray-900">{studentInfo.fullName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender</label>
                <p className="font-medium text-gray-900">{studentInfo.gender}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date of Birth</label>
                <p className="font-medium text-gray-900">{studentInfo.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Index Number</label>
                <p className="font-medium text-gray-900">{studentInfo.indexNumber}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Student Type</label>
                <p className="font-medium text-gray-900">{studentInfo.studentType}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Class Level</label>
                <p className="font-medium text-gray-900">{studentInfo.classLevel}</p>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-500">Application Date</label>
                <p className="font-medium text-gray-900">{studentInfo.applicationDate}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold text-[#282C34]">Parent/Guardian Information</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-gray-500">Father's Name</label>
                <p className="font-medium text-gray-900">{parentInfo.fatherName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Mother's Name</label>
                <p className="font-medium text-gray-900">{parentInfo.motherName}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-900">{parentInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-900">{parentInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <FileText className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Submitted Documents</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">All documents submitted with this application</p>
          
          <div className="grid grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{doc.name}</h4>
                  <p className="text-sm text-gray-500">{doc.filename}</p>
                </div>
                <button className="flex items-center padding-6  hover:text-blue-700 text-sm font-medium">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Application Actions</h2>
          <p className="text-sm text-gray-600 mb-6">Review the application and make a decision</p>
          
          <div className="flex space-x-4">
            <button className="bg-[#16A34A] hover:bg-[#16A34A] text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Approve Application
            </button>
            <button className="bg-[#EF4343] hover:[#EF4343] text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Reject Application
            </button>
          </div>
        </div>
      </div>
    </div>
);
}
