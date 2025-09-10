import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import LoginInput from '../LoginInput';
import Button from '../buttons/Button';
import logo from '../../assets/logo 2.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useForgotPasswordMutation} from '../../App/api/Auth/auth';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type ErrorResponse={
  message:string;
}

const ResetPasswordForm: React.FC = () => {
  const[ForgotPassword , {isError , error}]=useForgotPasswordMutation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorm , setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

 

  const handleReset = async(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
     if(!email){
    setError('please Email is required');
  }

    try {
       await ForgotPassword({ email }).unwrap();
       navigate('/newpassword');

    } catch (error) {
       console.log(error);
    }

    
    
    setEmail('');
  };

  return (
    <div className="min-h-screen py-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-md  px-[40px]">
        <div className="flex justify-between py-[25px] pr-[10px]">
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
        <div className="text-center mb-8">
           <div className="border-t border-gray-100 "></div>
          <h1 className=" text-2xl md:text-[28px]  md:text-center font-bold text-primary-color font-family-playfair mb-2 py-[20px]">
            Forgot Password
          </h1>
           <div className="border-t border-gray-100"></div>
        </div>
        <form onSubmit={handleReset}>
          <div className="mb-6">
            <LoginInput
              label="Email"
              name="email"
              type="email"
              icon={<FaUser />}
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              variant="default"
            />
            <p className='text-red-500 pt-[30px]'>{errorm}</p>
            <p className="text-sm text-gray-600 mt-2 font-poppins">
              You will get OTP on the Email that you provided.
            </p>
          </div>

          <div className="mb-4">
            <Button type="submit" variant="primary" fullWidth>
              Get  Otp
            </Button>
          </div>
        </form>
        <div className="mb-6 flex justify-center">
          <Link to='/login'>
            <Button variant="secondary" className="w-[200px]">
            Return to Log In
          </Button>
          </Link>
         
        </div>

        <div className="text-center py-[20px]">
          <p className="text-sm text-gray-600 mb-3 font-poppins">
            Don't have an account?
          </p>
          <Link to='/register'>
          <Button variant="outline" className="w-[200px]">
            Sign Up
          </Button>
          </Link>

                  {isError && (
            <p className="text-red-500 text-[13px] font-family-poppins pt-[30px]">
               {'status' in (error as FetchBaseQueryError)
                ? (error as FetchBaseQueryError & { data: ErrorResponse }).data?.message || 'Invalid email or password'
                : 'Invalid email or password'}
            </p>)}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
