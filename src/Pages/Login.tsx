import { useState } from 'react';
import LoginInput from '../Components/LoginInput';
import Navigation from '../Components/Navigation';
import { FaRegUser } from 'react-icons/fa';
import { RxLockClosed } from 'react-icons/rx';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import loginImage from '../assets/login.jpg';
import logo from '../assets/logo 2.png';

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
          <div className="bg-white my-[45px] rounded-md">
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

            <div className="border-t border-gray-200 mx-[250px]"></div>

            <div className="flex justify-center items-center pt-[40px]">
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
                <Link to="/pending">
                  <div className="py-[20px]">
                    <Button label="Log in" variant="loginForm" />
                  </div>
                </Link>
                <Link to="/reset">
                  <h1 className="ml-[260px] py-2 text-[#F09C00] cursor-pointer">
                    Forgot password
                  </h1>
                </Link>
              </form>
            </div>

            <div className="py-[5px]">
              <h1 className="text-primary-color text-[14px] text-center">
                Don’t have an account?
              </h1>
              <div className="flex justify-center ">
                <div className="pt-4 pb-[60px]">
                  <Link to="/register">
                    <Button label="Sign Up" variant="signupForm" />
                  </Link>
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
