

import logo from '../assets/logo 2.png';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

export default function HaveAccountPage() {
  return (
    <div>
      
      <div className="bg-gradient-to-r flex justify-center items-center  from-[#FFFFFF] to-[#CFDCEA] border-b">
        <div className="flex justify-center w-[610px]">
          <div className="bg-white my-[45px] rounded-md">
            <div className="flex justify-between py-[25px] pl-[40px] pr-[10px]">
              <div>
                <div className="flex items-center">
                  <div className="text-white font-bold text-xl">
                    <img className="w-[60px]" src={logo} />
                  </div>
                  <div className="flex flex-col gap-0">
                    <h1 className="m-0 font-bold text-[18px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent max-sm:text-[12px]">
                      inzozI
                    </h1>
                    <span className="m-0 text-[11px] leading-none bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] bg-clip-text text-transparent font-semibold max-sm:text-[6px]">
                      Smart Dreams. Bright Futures
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>
            <h1 className="text-center text-[32px] text-primary-color py-[24px] font-family-playfair font-bold">
             You now have an Account! 
            </h1>
            <div className="border-t border-gray-100 pb-[30px]"></div>

            <div className="pt-[40px]">
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <FaCheckCircle className="text-7xl text-[#F09C00]" />
                  <h1 className="text-[#F09C00] py-3 text-[26px]">Success!</h1>
                  <h3 className="px-[80px] text-[#4E5155] font-family-poppins text-[13px]">
                    Your Account was successfully created. Now you can <br /> log into your account.
                  </h3>

                  <Link to="/login">
                    <div className="py-[35px]">
                      <Button label="Return to Log In " variant="loginForm" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
