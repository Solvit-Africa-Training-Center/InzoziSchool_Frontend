import type{ MouseEventHandler } from 'react';

export type ButtonType = {
  label: string;
  variant: keyof typeof classVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>; // The onClick prop is now optional
};

const classVariant = {
  defolt: 'py-1 px-4 border-none text-white bg-gradient-to-r from-orange-600 to-orange-400',
  primary: 'py-1 px-4 border-none text-white',
  secondary: 'h-[38px] px-[20px] bg-gradient-to-r from-orange-600 to-orange-400 text-white',
  thirdly: 'h-[40px]',
  registerschool:'bg-white/30  w-[211px] h-[40px] font-semiBold text-[14px]          max-sm:w-[160px] h-[29px] text-[12px]',
  applychild:'text-[#054069]   bg-white w-[211px] h-[40px] font-semiBold text-[14px] max-sm:w-[160px] h-[29px] text-[12px]',
  formbutton:'w-[1036px] h-[58px] text-[26px] bg-[#053F69] text-white',
  login:'w-[685px] h-[40px] text-primary-color text-[24px] border border-primary-color',
  loginForm:'bg-primary-color text-white text-22px w-[384px] h-[43px]',
  signupForm:'w-[280px] h-[32px] text-primary-color text-[15px] border border-primary-color',
};

export default function Button({ label, variant, onClick }: ButtonType) {
  return (
    <button
      className={`${classVariant[variant]} flex justify-center items-center font-family-poppins cursor-pointer rounded-[12px]`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}