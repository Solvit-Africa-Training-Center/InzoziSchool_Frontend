import { useState } from 'react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import LoginInput from '../Components/LoginInput';
import { FaRegUser } from 'react-icons/fa';
import { RxLockClosed } from 'react-icons/rx';
import Button from '../Components/Button';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.jpg';
import logo from '../assets/logo 2.png';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import {useLoginMutation} from '../App/api/Auth/auth';
import { useUser } from '../Hooks/useUser';

export type ErrorResponse={
  message:string;
}

export default function Login() {
 
  const{user}=useUser();
  console.log(user);
  const[Login , {isLoading , isError ,error }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error when user types
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    // } else if (formData.password.length >= 6) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      const response = await Login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      // Save token
      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token);
      }

      // Use the user info directly from response
      const respon = response?.data;
      const roleName = response?.data?.user?.role?.name;
     
      console.log(respon);
      console.log(roleName);

      if (roleName === 'SchoolManager') {
        navigate('/schoolAdmin/dashboard');
      } else if (roleName === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  }
};



  return (
    <div>
      <Navigation /> 
      <div
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        <div className="flex justify-center">
          <div className="bg-white my-[90px] rounded-md w-[500px] max-sm:w-full">
            {/* Logo Section */}
            <div className="flex justify-between py-[25px] pl-[40px] pr-[10px]">
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

            <div className="border-t border-gray-100"></div>
            <h1 className="text-center text-[32px] text-primary-color py-[22px] font-family-playfair font-bold">
              Log into your <br /> account
            </h1>
            <div className="border-t border-gray-100"></div>

            <div className="flex justify-center items-center pt-[40px]">
              <form onSubmit={handleSubmit} className="w-[80%]">
                <LoginInput
                  icon={<FaRegUser />}
                  label="Email"
                  placeholder="Email"
                  value={formData.email}
                  name="email"
                  type="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px]">{errors.email}</p>
                )}

                <LoginInput
                  icon={<RxLockClosed />}
                  label="Password"
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  type="password"
                  onChange={handleChange}
                 
                />
                {errors.password && (
                  <p className="text-red-500 text-[12px]">{errors.password}</p>
                )}

                <div className="py-[20px]">
                  <Button label="Log in" variant="loginForm" type="submit" />
                </div>

                <Link to="/reset">
                  <h1 className="text-right py-2 text-[#F09C00] cursor-pointer">
                    Forgot password
                  </h1>
                </Link>
              </form>
            </div>

            {/* Signup Section */}
            <div className="py-[5px]">
              <h1 className="text-primary-color text-[14px] text-center">
                Don’t have an account?
              </h1>
              <div className="flex justify-center ">
                <div className="pt-4 pb-[60px]">
                  <Link to="/register">
                    <Button disabled={isLoading} label="Sign Up" variant="signupForm" />
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
          </div>
        </div>
      </div>

       <Footer /> 
    </div>
  );
}
