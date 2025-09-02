import React, { type ReactNode } from 'react';

const classVariant = {
  default:
    'border border-gray-200 text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-blue-300',
  primary:
    'border border-blue-500 text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-blue-600',
  danger:
    'border border-red-500 text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-red-600',
};

type InputType = {
  label: string;
  icon:ReactNode;
  placeholder:string;
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: keyof typeof classVariant;
};

export default function LoginInput({
  label,
  name,
  type,
  icon,
  placeholder,
  value,
  onChange,
  variant = 'default',
}: InputType) {
  return (
    <div className='py-3' >
      <label htmlFor={name} className="text-sm font-medium text-[#4E5155] font-family-poppins text-[16px] ">
        {label}
      </label>

      <div className={`w-[370px] h-[50px] flex gap-1 ${classVariant[variant]}`}> 
        <div className='w-[60px] h-[48px] bg-[#F9FAFB] flex items-center justify-center border-gray-200 text-xl'>{icon}</div>
         <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='border-none outline-none w-full'
      />
        </div>
     
    </div>
  );
}

