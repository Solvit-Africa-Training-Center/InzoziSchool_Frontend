

  import ContNav from '../Components/ContNav';
import Footer from '../Components/Footer';
import { TbDots } from 'react-icons/tb';

export default function SuccessPage() {
  return (
    <div>
      <ContNav />
      <div className='bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA]'>
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
        <div className="flex justify-center w-[610px] ">
          <div className="bg-white  my-[45px] rounded-md">
           
            
            <h1 className="text-center text-[32px] text-[#282C34] py-[24px] font-family-playfair font-bold">
              Waiting For Approval
            </h1>

            <div className="pt-[40px]">
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <div className='w-[65px] h-[65px] flex justify-center items-center bg-[#F09C00] rounded-[50%]'>
                    <TbDots className='text-white text-5xl'/>
                  </div>
                  <h1 className="text-[#F09C00] py-3 text-[26px]">Pending...</h1>
                  <h3 className="px-[80px] text-[#4E5155] pb-7 font-family-poppins text-[15px]">
                   Your request to register this school was successfully received. You will get a confirmation email after the NESA Inspector in your school District approves the eligibility of your school.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}



