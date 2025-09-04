import ContNav from '../Components/ContNav';
import Button from '../Components/Button';
import logo from '../assets/logo 2.png';
import Input from '../Components/Input';
import { useState } from 'react';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

export default function SchoolRegister() {
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
      schoolcode:'',
      schoolname:'',
      district:'',
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

   const handleCreate = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    navigate('/success');

  };
  return (
    <div>
      <ContNav />
      <div className='bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] border-b border-gray-100'>
        <div className="flex justify-center">
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
            <h1 className="text-center text-[32px] text-primary-color py-[22px] font-family-playfair font-bold">
              Register Your School
            </h1>
            <div className="border-t border-gray-100"></div>

            <div className="border-t border-gray-200 mx-[250px]"></div>

            <div className="flex justify-center items-center pt-[40px]">
              <form onSubmit={handleCreate}>
                <Input
                  label="School Code"
                  placeholder="School Code"
                  value={formData.schoolcode}
                  onChange={handleChange}
                  name="schoolcode"
                  type="text"
                />

                <Input
                  label="SchoolName"
                  placeholder="School Name"
                  value={formData.schoolname}
                  onChange={handleChange}
                  name="schoolname"
                  type="text"
                />

                <Input
                  label="District"
                  placeholder="District"
                  value={formData.district}
                  onChange={handleChange}
                  name="district"
                  type="text"
                />
                
                <div className="py-[20px]">
                  <Button label="Register Your School" variant="loginForm" />
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
