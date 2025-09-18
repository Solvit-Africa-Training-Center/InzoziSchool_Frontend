// CreateNewPasswordForm.tsx
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import LoginInput from '../LoginInput';
import Button from '../buttons/Button';
import logo from '../../assets/logo 2.png';
import { useResetePasswordMutation } from '../../App/api/Auth/auth';
import { useNavigate } from 'react-router-dom';


const CreateNewPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [resetpass]=useResetePasswordMutation();
  const[formError , setFormError] = useState({
     newpassword:'',
     confirmpassword:'',
     notmatch:'',
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  // Put this at module scope so the regex isn't recreated on every submit
  const isStrongPassword = (password: string) => {
    // Accept any non-alphanumeric as "special"
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
  };

const handleCreatePassword = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newpass = newPassword.trim();
  const confirmpass = confirmPassword.trim();




  const errors = {
    newpassword: '',
    confirmpassword: '',
    notmatch: '',
  };

  // 1) Validate new password
  if (!newpass) {
    errors.newpassword = 'Password is required.';
  } else if (!isStrongPassword(newpass)) {
    errors.newpassword =
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.';
  }

  
  if (!confirmpass) {
    errors.confirmpassword = 'Please confirm your password.';
  }

  
  if (newpass && confirmpass && newpass !== confirmpass) {
    errors.notmatch = 'Passwords do not match.';
  }

  
  setFormError(errors);

  
  if (errors.newpassword || errors.confirmpassword || errors.notmatch) {
    return;
  }
   
 try {
  await resetpass({
    newPassword: newpass,
    confirmPassword: confirmpass,
  }).unwrap();

  navigate('/resetSucess');
} catch (error) {
  console.log('error message', error);
}


  // 4) Success
  alert('Password reset successfully');
  console.log(confirmpass);
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="flex justify-between py-[25px] pr-[10px]">
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
        <div className="text-center mb-8">
          <h1 className="text-[27px] font-bold text-primary-color font-family-playfair mb-2">
            Create New Password
          </h1>
        </div>
        <form onSubmit={handleCreatePassword}>
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
            {formError.newpassword&&(
              <span className='text-red-500 text-[12px]'>{formError.newpassword}</span>
            )}
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
             {formError.confirmpassword&&(
              <span className='text-red-500 text-[12px]'>{formError.confirmpassword}</span>
            )}
          </div>

          <div className="mb-8">
            <Button type="submit" variant="primary" fullWidth>
              Create Password
            </Button>
          </div>
           {formError.notmatch&&(
              <span className='text-red-500 text-[12px]'>{formError.notmatch}</span>
            )}
        </form>
      </div>
    </div>
  );
};

export default CreateNewPasswordForm;
