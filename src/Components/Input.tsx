import React from 'react';

const classVariant = {
  default:
    'border border-[#EBEBEB] text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-primary-color',
  primary:
    'border border-blue-500 text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-blue-600',
  danger:
    'border border-red-500 text-[#4E5155] focus:outline-none focus:ring-2 focus:ring-red-600',
};

type InputType = {
  label: string;
  placeholder:string;
  name: string;
  type: 'text' | 'email' | 'password'|'file';
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: keyof typeof classVariant;
};

export default function Input({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  variant = 'default',
}: InputType) {
  return (
    <div className="w-[370px] flex flex-col gap-1 py-3">
      <label htmlFor={name} className="text-sm font-medium text-[#4E5155] font-family-poppins text-[16px] ">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full  px-3 py-2 ${classVariant[variant]}`}
      />
    </div>
  );
}
