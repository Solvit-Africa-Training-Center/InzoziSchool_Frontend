

import { useState } from 'react';
import logo from '../assets/logo 2.png';
import Button from '../Components/Button';


export default function OtpPage() {
    const [formData , setFormData]=useState({});
    const handleVerification=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();    
    };
  return (
    <div>
      
      <div className=" bg-primary-color flex justify-center items-center h-screen  border-b">
        <div className="flex justify-center w-[610px]">
          <div className=" bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] my-[45px] rounded-md">
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

            <div className="border-t border-gray-100 w-[500px]"></div>
            <h1 className="text-center text-[32px] text-primary-color py-[24px] font-family-playfair font-bold">
            OTP Verification 
            </h1>
            <div className="border-t border-gray-100 pb-[30px]"></div>
            <h1 className='text-center font-family-poppins font-medium'>Enter the code sent to your email:</h1>

            <div className="pt-[40px]">
              <div className="flex justify-center items-center">
                
                    <div className='pb-[40px]'>
                        
                        <form onSubmit={handleVerification} className=''>
                            <div className='flex gap-4'>
                            <input type="text" value={1}className='border text-center text-[20px] focus:outline-none font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px]' />
                            <input type="text" value={2}className='border text-center text-[20px] font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px] focus:outline-none' />
                            <input type="text" value={3}className='border text-center text-[20px] font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px] focus:outline-none' />
                            <input type="text" value={4}className='border text-center text-[20px] font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px] focus:outline-none' />
                            <input type="text" value={5}className='border text-center text-[20px] font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px] focus:outline-none' />
                            <input type="text" value={6}className='border text-center text-[20px] font-family-playfair font-bold border-[#F09C00] w-[45px] h-[80px] rounded-[24px] focus:outline-none' />
                            </div>

                             <div className=" pt-[45px]">
                               <Button label='Verify your OTP' variant="otp" type="submit" />
                              </div>
                        </form>
                   
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
