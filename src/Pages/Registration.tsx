import { useState } from 'react';
import Input from '../Components/Input';
import Navigation from '../Components/Navigation';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import signupImage from '../assets/signup.jpg';
 import logo from '../assets/logo 2.png';

export default function Registration() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    telephone: '',
    email: '',
    gender: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
    password: '',
    confirmPassword: '',
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

  
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div
        style={{
          backgroundImage: `url(${signupImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }} className='py-[50px] '
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

            <form className=" px-[50px] ">
              <div className=" mb-3">
                  <Input
                    label="First name"
                    placeholder="First name"
                    value={formData.firstname}
                    onChange={handleChange}
                    name="firstname"
                    type="text"
                  />

                  <Input
                    label="Last name"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleChange}
                    name="lastname"
                    type="text"
                  />
                  <Input
                    label="School Email  (Don’t use a personal email)"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                  />
                 
      
              
                  <Input
                    label="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                  />
                  <Input
                    label="Confirm Password"
                    placeholder="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    type="password"
                  />
              </div>

              <div className="py-4 pb-5">
                <Button label="Create Account" variant="formbutton" />
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
