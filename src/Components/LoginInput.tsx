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
  icon: ReactNode;
  placeholder: string;
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  error?: string;
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
  error,
  onChange,
  variant = 'default',
}: InputType) {
  return (
    <div className="py-3">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-[#4E5155] font-family-poppins text-[16px]"
      >
        {label}
      </label>

      {/* Input with icon */}
      <div
        className={`w-[370px] h-[50px] flex gap-1 items-center rounded-md ${classVariant[variant]} ${
          error ? 'border-red-500 focus:ring-red-600' : ''
        }`}
      >
        <div className="w-[60px] h-[48px] bg-[#F9FAFB] flex items-center justify-center text-xl border-r border-gray-200">
          {icon}
        </div>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="border-none outline-none w-full px-2 bg-transparent"
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
