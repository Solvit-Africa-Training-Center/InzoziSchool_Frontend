import { skipToken } from '@reduxjs/toolkit/query';
import { MdOutlineCancel } from 'react-icons/md';
import ContNav from '../Components/ContNav';
import { useUser } from '../Hooks/useUser';
import { useGetSchoolDetailsQuery } from '../App/api/school/school';
import { useNavigate } from 'react-router-dom';

export default function Rejected() {
  const { user } = useUser();
  const { data } = useGetSchoolDetailsQuery(user?.schoolId ?? skipToken);
  const navigate = useNavigate();

  const rejectedReason = data?.data.rejectedReason;

  return (
    <div>
      <ContNav />
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA]">
        <div>
          <h1 className="text-primary-color text-[50px] font-family-playfair text-center py-[25px] font-semibold pt-[50px]">
            Welcome to your Inzozi Account!
          </h1>
          <h3 className="text-center text-[15px] font-family-poppins px-[160px]">
            Inzozi helps you manages applications and showcase your school.
            Start simplifying your work and improving your school visibility by
            registering it in few simple steps!
          </h3>
        </div>
        <div className=" flex justify-center items-center  border-b">
          <div className="flex justify-center w-[610px] max-sm:w-full max-sm:px-4">
            <div className="bg-white  my-[45px] rounded-md w-full">
              <h1 className="text-center text-[32px] text-[#282C34] py-[24px] font-family-playfair font-bold">
                Application Not Approved
              </h1>

              <div className="pt-[40px]">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[65px] h-[65px] flex justify-center items-center bg-[#EF4343] rounded-[50%]">
                      <MdOutlineCancel className="text-white text-5xl" />
                    </div>
                    <h1 className="text-[#EF4343] py-3 text-[26px]">Rejected</h1>
                    <h3 className="px-[80px] max-sm:px-[20px] text-[#4E5155] pb-3 font-family-poppins text-[15px]">
                      Unfortunately, your school registration was not approved
                      by our Administrator.
                    </h3>

                    <div className="mx-[80px] max-sm:mx-[20px] mb-7 w-full bg-red-50 border border-red-200 rounded-lg p-4 text-left">
                      <h4 className="text-[#EF4343] font-semibold text-[13px] mb-1 font-family-poppins">
                        Reason for rejection
                      </h4>
                      <p className="text-[#4E5155] text-[14px] font-family-poppins">
                        {rejectedReason || 'No reason was provided by the administrator.'}
                      </p>
                    </div>

                    <div className="pb-[35px] flex gap-3">
                      <a
                        href="mailto:info@inzoziedu.com"
                        className="flex items-center justify-center rounded-[12px] border border-[#F09C00] text-[#F09C00] hover:bg-[#FFF3E0] font-family-poppins text-[15px] px-6 py-2"
                      >
                        Contact Support
                      </a>
                      <button
                        onClick={() => navigate('/schoolRegister')}
                        className="flex items-center justify-center rounded-[12px] bg-primary-color text-white font-family-poppins text-[15px] px-6 py-2 cursor-pointer"
                      >
                        Register Again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
