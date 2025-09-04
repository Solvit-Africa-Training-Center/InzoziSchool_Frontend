// CreateNewPasswordForm.tsx
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import LoginInput from '../LoginInput';
import Button from '../buttons/Button';

const CreateNewPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-[32px] font-bold text-primary-color font-family-playfair mb-2">
            Create New Password
          </h1>
        </div>

        <div className="mb-6">
          <LoginInput
            label="New Password"
            name="newPassword"
            type="password"
            icon={<FaLock />}
            placeholder="Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            variant="default"
          />
        </div>

        <div className="mb-8">
          <LoginInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            icon={<FaLock />}
            placeholder="Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            variant="default"
          />
        </div>

        <div className="mb-8">
          <Button 
            variant="primary"
            fullWidth
          >
            Create Password
          </Button>
        </div>

       
      </div>
    </div>
  );
};

export default CreateNewPasswordForm;