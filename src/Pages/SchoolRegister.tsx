'use client';

import type React from 'react';

import ContNav from '../Components/ContNav';
import Button from '../Components/Button';
import logo from '../assets/logo 2.png';
import Input from '../Components/Input';
import { useState } from 'react';
import { useRegisterSchoolMutation } from '../App/api/school/school';
import Select from '../Components/Select';
import { districts } from '../Types/district';
import { useNavigate } from 'react-router-dom';
//import { fileToBase64 } from '../Helper/FileConveter';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { ErrorResponse } from './Login';

export default function SchoolRegister() {
  const navigate = useNavigate();

  const [register, { isLoading, error, isError }] = useRegisterSchoolMutation();
  const [formData, setFormData] = useState({
    schoolCode: '',
    schoolName: '',
    email: '',
    district: '',
    licenseDocument: null as File | null,
  });

  const [errors, setErrors] = useState<{
    schoolcode?: string
    schoolname?: string
    email?: string
    file?: string
    district?: string
  }>({});

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === 'file' && files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.schoolCode.trim()) {
      newErrors.schoolcode = 'School code is required';
    }
    if (!formData.schoolName.trim()) {
      newErrors.schoolname = 'School name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.licenseDocument) {
      newErrors.file = 'Certificate file is required';
    }
    if (!formData.district) {
      newErrors.district = 'District is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validateForm()) {return;}

  try {
    const form = new FormData();
    form.append('schoolName', formData.schoolName);
    form.append('schoolCode', formData.schoolCode);
    form.append('email', formData.email);
    form.append('district', formData.district);
    if (formData.licenseDocument) {
      form.append('licenseDocument', formData.licenseDocument); // Match backend field name
    }

    // Call the RTK Query mutation
    await register(form).unwrap();

    // Optionally reset form or show success
    setFormData({
      schoolCode: '',
      schoolName: '',
      email: '',
      district: '',
      licenseDocument: null,
    });
    navigate('/pending');
  } catch (err) {
    console.error('Error submitting school registration:', err);
    setErrors((prev) => ({
      ...prev,
      file: 'Failed to register school. Please check your inputs and try again.',
    }));
  }
};


  return (
    <div>
      <ContNav />
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] border-b border-gray-100">
        <div className="flex justify-center">
          <div className="bg-white my-[45px] w-[500px] rounded-md">
            <div className="flex justify-between py-[25px] pl-[40px] pr-[10px]">
              <div className="flex items-center gap-2">
                <img className="w-[60px]" src={logo || '/placeholder.svg'} />
                <div className="flex flex-col gap-0">
                  <h1 className="m-0 font-bold text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00]">
                    inzozI
                  </h1>
                  <span className="m-0 text-[11px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00]">
                    Smart Dreams. Bright Futures
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>
            <h1 className="text-center text-[32px] text-primary-color py-[22px] font-bold font-family-playfair">
              Register Your School
            </h1>
            <div className="border-t border-gray-100"></div>
             <div> {errors.file && <p className="text-red-500 text-sm pl-9 pt-3">{errors.file}</p>}</div>
            <div className="flex justify-center items-center pt-[20px]">
             
              <form onSubmit={handleCreate}>
                <Input
                  label="School Code"
                  placeholder="School Code"
                  value={formData.schoolCode}
                  onChange={handleChange}
                  name="schoolCode"
                  type="text"
                />
                {errors.schoolcode && <p className="text-red-500 text-sm">{errors.schoolcode}</p>}

                <Input
                  label="School Name"
                  placeholder="School Name"
                  value={formData.schoolName}
                  onChange={handleChange}
                  name="schoolName"
                  type="text"
                />
                {errors.schoolname && <p className="text-red-500 text-sm">{errors.schoolname}</p>}

                <Select options={districts} value={formData.district} onChange={handleSelectChange('district')} />
                {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}

                <Input
                  label="School Email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

               <Input
               label="Certificate"
               placeholder="Certificate"
               onChange={handleChange}
               name="licenseDocument"
               type="file"
               />
                

                <div className="py-[20px]">
                  <Button
                    label={isLoading ? 'Registering...' : 'Register Your School'}
                    variant="loginForm"
                    disabled={isLoading}
                    type="submit"
                  />
                </div>

                {isError && (
                  <p className="text-red-500 text-[13px] font-family-poppins pt-[10px]">
                    {'status' in (error as FetchBaseQueryError)
                      ? (error as FetchBaseQueryError & { data: ErrorResponse }).data?.message ||
                        'Failed to register school'
                      : 'Failed to register school'}
                  </p>
                )}
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
