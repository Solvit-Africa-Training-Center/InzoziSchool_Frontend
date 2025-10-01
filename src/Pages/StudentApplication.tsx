
//import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import signupImage from '../assets/signup.jpg';
import logo from '../assets/logo 2.png';
import { Link } from 'react-router-dom';
import { TextInput } from '../Components/seats/InputSeats';
import { SelectInput } from '../Components/seats/SelectInput';
import{gender , Provinces , StudentType} from '../Types/Seats';
import{districts} from '../Types/district';

export default function StudentApplication() {
  return (
     <div>
        <Navigation/>
          <div
            style={{
              backgroundImage: `url(${signupImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
            }} className='py-[90px] '
          >
            <div className=" bg-white mx-[3%] rounded-sm ">
              <div className=" ">
                <div className='flex justify-between py-[25px] pl-[40px] pr-[10px]'>
                  <div>
                    <Link to="/">
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
                    </Link>
                  </div>
                </div>
                <div className='border-b border-gray-100 mx-6'></div>

                <div className='py-4 flex justify-center '>
                    <div >
                    <h1 className='text-[37px] font-family-playfair bg-gradient-to-r from-[#05416B] to-[#60A5FA] bg-clip-text text-transparent font-bold py-2 text-center'>Application Form</h1>
                    <div className='border border-gray-500 rounded-lg w-[700px] px-6'>

                        <h1 className='text-[#6B7280] py-2 font-family-poppins text-[15px] font-medium text-center'>Please fill out all required information for your child's school application</h1>

                        <h1 className='font-bold text-black text-[18px] py-3'>Student Information</h1>
                        <div className='border-b border-gray-100 '></div>

                        <div>
                            <form action="">
                                <div>
                                 <div className='flex gap-4'>
                                    <TextInput label='First Name *' placeholder='Student First Name'/>
                                    <TextInput label='Last Name *' placeholder='Student Last Name'/>
                                 </div>
                                 {/* error section */}
                                </div>
                                
                                <div className='py-3'>
                                 <div className='flex gap-4'>
                                    <SelectInput label='Select Gender *' placeholder='Gender' options={gender}/>
                                    <TextInput label='Nationality *' placeholder='Nationality'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <SelectInput label='Province *' placeholder='Province' options={Provinces}/>
                                     <SelectInput label='District *' placeholder='district' options={districts}/>
                                 </div>
                                 {/* error section */}
                                </div>

                                <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput label='Sector *' placeholder='Sector'/>
                                    <TextInput label='Cell *' placeholder='Cell'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput label='Village *' placeholder='Village'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <SelectInput label='StudentType *' placeholder='StudentType' options={StudentType}/>
                                    <TextInput type='date' placeholder='date of birth' label='Date of Birth'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput placeholder='index Number' label='Index Number'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                <h1 className='font-bold text-black text-[18px] py-3'>Required Documents</h1>
                                <div className='border-b border-gray-100 '></div>

                                <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput placeholder='Previous Report' label='Previous Report *' type='file'/>
                                    <TextInput placeholder='Mutation Letter' label='Mutation Letter *' type='file'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput placeholder='Photo Passport' label='PhotoPassport *' type='file'/>
                                    <TextInput placeholder='ResultSlip' label='ResultSlip *' type='file'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                <h1 className='font-bold text-black text-[18px] py-3'>Parent/Guardian Information</h1>
                                <div className='border-b border-gray-100 '></div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput placeholder='Father Name' label='Father Name *' />
                                    <TextInput placeholder='Mother Name' label='Mother Name *'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                 <div className='pb-3'>
                                 <div className='flex gap-4'>
                                    <TextInput placeholder='Enter Phone Number' label='Guardian Phone Number *' />
                                    <TextInput placeholder='Enter Email' label='Guardian Email  *' type='email'/>
                                 </div>
                                 {/* error section */}
                                </div>

                                <div className='mx-6 pb-5'>
                                    <button className='w-full rounded-lg flex justify-center py-2 bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] text-white font-bold text-[14px] cursor-pointer'>Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
              
              </div>
            </div>
          </div>
    
          <Footer/>
        </div>
    
  );
}
