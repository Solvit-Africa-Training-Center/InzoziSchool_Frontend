import { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import signupImage from '../assets/signup.jpg';
 import logo from '../assets/logo 2.png';
 import { useNavigate } from 'react-router-dom';
 import Navigation from '../Components/Navigation';
 import Footer from '../Components/Footer';
 import {districts , genders} from '../Types/district';
import Select from '../Components/Select';
import {useRegistrationMutation} from '../App/api/Auth/auth';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type{ErrorResponse} from '../Pages/Login';

export default function Registration() {

  const[Registration ,{ error , isError , isLoading}] = useRegistrationMutation();

   const navigate=useNavigate();
  const[formError , setFormError]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    district:'',
    gender:'',
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    district: '',
    gender:'',
  });

 // Input handler (receives event)
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

// Select handler (receives value string)
const handleSelectChange = (name: string) => (value: string) => {
  setFormData((prev) => ({ ...prev, [name]: value }));
};


    const isStrongPassword = (password: string) => {
    // Accept any non-alphanumeric as "special"
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
  };


  const handleCreate = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const firstname = formData.firstName.trim();
  const lastname = formData.lastName.trim();
  const email = formData.email.trim();
  const password = formData.password.trim();



  const errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    district: '',
    gender: '',
  };

  // First name
  if (!firstname || firstname.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  // Last name
  if (!lastname || lastname.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  // Email
  if (!email || !email.includes('@')) {
    errors.email = 'Please enter a valid email';
  }

  // Password
  if (!password) {
    errors.password = 'Password is required';
  } else if (!isStrongPassword(password)) {
    errors.password =
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.';
  }

  setFormError(errors);

  // Stop if any errors exist
  if (
    errors.firstName ||
    errors.lastName ||
    errors.email ||
    errors.password ||
    errors.gender ||
    errors.district
  ) {
    return;
  }

  //  continue with other logic 

   console.log('Form submitted successfully', formData);
  
   try {

    await Registration({
      firstName:formData.firstName ,
      lastName:formData.lastName , 
      email:formData.email ,
      district:formData.district , 
      gender:formData.gender , 
      password:formData.password,
    }).unwrap();

    navigate('/haveaccount');
    
   } catch (error) {
     console.log('error' , error);
   }


 setFormData({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  district: '',
  gender: '',
});
};

  
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
        <div className="w-[542px] bg-white mx-auto rounded-sm ">
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
             <div className='border-t border-gray-100'></div>
            <h1 className="text-[#053F69] font-bold text-[37px] font-family-playfair text-center py-[10px]">
              Create an Account
            </h1>
            <div className='border-t border-gray-100 pb-[35px]'></div>

            <form onSubmit={handleCreate} className=" px-[50px] ">
              <div className=" mb-3">
                  <Input
                    label="First name"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    name="firstName"
                    type="text"
                  />
                  {formError.firstName &&(
                     <span className='text-red-500 text-[12px]'>{formError.firstName}</span>
                  )}

                  <Input
                    label="Last name"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    type="text"
                  />
                     {formError.lastName &&(
                     <span className='text-red-500 text-[12px]'>{formError.lastName}</span>
                  )}
                  <Input
                    label="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                  />
                     {formError.email &&(
                     <span className='text-red-500 text-[12px]'>{formError.email}</span>
                  )}
                 
               
                  

                  <Select
  options={districts}
  value={formData.district}
  onChange={handleSelectChange('district')}
/>
  {formError.district &&(
                     <span className='text-red-500 text-[12px]'>{formError.district}</span>
                  )}

<Select
  options={genders}
  value={formData.gender}
  onChange={handleSelectChange('gender')}
/>

                  

                   
              
                  <Input
                    label="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                  />
                     {formError.password &&(
                     <span className='text-red-500 text-[12px]'>{formError.password}</span>
                  )}
                    
              </div>

              <div className="py-4 pb-5">
                <Button disabled={isLoading} label="Create Account" variant="formbutton" />
              </div>
            </form>
            <div>
              <h1 className="text-primary-color py-2 font-family-poppins text-[15px] text-center">
                {' '}
                You already have an account?
              </h1>
            </div>
            <div className="flex justify-center pb-15">
              <Link to="/login">
                <Button variant="login" label="Login" />
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

      <Footer/>
    </div>
  );
}
