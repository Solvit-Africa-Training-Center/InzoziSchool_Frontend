import { useState } from 'react';
import Input from '../Components/Input';
import Navigation from '../Components/Navigation';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

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

      <div className="">
        <h1 className="text-[#053F69] font-bold text-[40px] font-family-playfair text-center py-[50px]">
          Create an Account
        </h1>

        <form className=" px-[120px] "> 
            <div className='flex justify-between mb-3'>
          <div>
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
              label="Email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
             <Input
              label="Telephone"
              placeholder="+250789999999"
              value={formData.telephone}
              onChange={handleChange}
              name="telephone"
              type="text"
            />
             <Input
              label="Gender"
              placeholder="Male"
              value={formData.gender}
              onChange={handleChange}
              name="gender"
              type="text"
            />
             <Input
              label="Province"
              placeholder="Kigali"
              value={formData.province}
              onChange={handleChange}
              name="province"
              type="text"
            />
          </div>
          <div>
             <Input
              label="District"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              name="district"
              type="text"
            />
            
            <Input
              label="Sector"
              placeholder="Sector"
              value={formData.sector}
              onChange={handleChange}
              name="sector"
              type="text"
            />
             <Input
              label="Cell"
              placeholder="Cell"
              value={formData.cell}
              onChange={handleChange}
              name="cell"
              type="email"
            />
             <Input
              label="Village"
              placeholder="village"
              value={formData.village}
              onChange={handleChange}
              name="village"
              type="text"
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
          </div>

          <div className='py-4 pb-5'>
          <Button label='Create Account' variant='formbutton'/>
          </div>  
        </form>
          <div>
            <h1 className='text-primary-color py-4 font-family-poppins text-[15px] text-center'> You already have an account?</h1>
          </div>
          <div className='flex justify-center pb-15'>
           <Link to='/login'><Button variant='login' label='Login'/></Link>
          </div>
      </div>

      <Footer/>
    </div>
  );
}
