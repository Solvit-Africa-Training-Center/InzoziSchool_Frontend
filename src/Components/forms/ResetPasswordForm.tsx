import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import LoginInput from '../LoginInput';
import Button from '../buttons/Button';

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className=" text-2xl md:text-[32px]  md:text-center font-bold text-primary-color font-playfair mb-2 font-family-playfair">
            Reset Your Password
          </h1>
        </div>

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
          <p className="text-sm text-gray-600 mt-2 font-poppins">
            You will get a reset link on the Email that you provided.
          </p>
        </div>

        <div className="mb-4">
          <Button 
            variant="primary"
            fullWidth
          >
            Get a Reset Link
          </Button>
        </div>

        <div className="mb-6 flex justify-center">
          <Button 
            variant="secondary"
            className="w-[200px]"
          >
            Return to Log In
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3 font-poppins">
            Don't have an account?
          </p>
          <Button 
            variant="outline"
            className="w-[200px]"
          >
            Sign Up
          </Button>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-gray-500 font-poppins">
            Copyright © 2025
          </p>
          <p className="text-xs text-gray-500 font-poppins">
            Inzozi Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;