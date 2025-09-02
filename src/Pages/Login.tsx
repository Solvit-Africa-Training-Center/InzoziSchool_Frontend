import { useState } from 'react';
import LoginInput from '../Components/LoginInput';
import Navigation from '../Components/Navigation';
import { FaRegUser } from 'react-icons/fa';
import { RxLockClosed } from 'react-icons/rx';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ JSX should be returned from component, not from handleChange
  return (
    <div>
      <Navigation />

      <h1 className="text-center py-[50px] text-[30px] text-primary-color font-family-playfair font-bold">
        Log into your account
      </h1>

      <div className="border-t border-gray-200 mx-[250px]"></div>

      <div className='flex justify-center items-center pt-[40px]'>
        <form>
        <LoginInput
          icon={<FaRegUser />}
          label="Email"
          placeholder="Email"
          value={formData.email}
          name="email"
          type="email"
          onChange={handleChange}
        />

        <LoginInput
          icon={<RxLockClosed />}
          label="Password"
          placeholder="Password"
          value={formData.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
         <div className='py-[20px]'>
         <Button label='Log in' variant='loginForm'/>
         </div> 

         <h1 className='ml-[260px] py-2 text-[#F09C00] cursor-pointer'>Forgot password</h1>
       
        </form>
      </div>

        <div className='py-[5px]'>
             <h1 className='text-primary-color text-[14px] text-center'>Don’t have an account?</h1>
         <div className='flex justify-center '>
             <div className='pt-4 pb-[60px]'>
           <Link to='/register'><Button label='Sign Up' variant='signupForm'/></Link> 
          </div>
         </div>
         

         </div>

         <Footer/>
    </div>
  );
}
